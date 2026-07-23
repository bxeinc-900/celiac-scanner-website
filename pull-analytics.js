const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const NAMESPACE_ID = "177314a6192b473e8dcc8e26f7129bc0";
const FILE_PATH = path.join(__dirname, "ANALYTICS", "analytics.md");
const ADAPTY_PATH = path.join(__dirname, "ANALYTICS", "adapty_stats.json");

console.log("Fetching live website analytics from Cloudflare KV...");

try {
  // 1. Get the list of all keys from Cloudflare KV
  const keysOutput = execSync(`npx wrangler kv key list --namespace-id=${NAMESPACE_ID} --remote`, { encoding: "utf8" });
  const keys = JSON.parse(keysOutput);

  // Filter keys starting with "count:"
  const countKeys = keys.filter(k => k.name.startsWith("count:"));
  const summary = [];

  for (const k of countKeys) {
    const buttonName = k.name.replace("count:", "");
    const countVal = execSync(`npx wrangler kv key get --namespace-id=${NAMESPACE_ID} "${k.name}" --remote`, { encoding: "utf8" }).trim();
    summary.push({ button: buttonName, count: parseInt(countVal, 10) || 0 });
  }

  // Sort summary by click counts descending
  summary.sort((a, b) => b.count - a.count);

  // Calculate total website clicks
  const totalWebClicks = summary.reduce((sum, item) => sum + item.count, 0);

  // 2. Get the latest clicks log from Cloudflare KV
  let latestClicks = [];
  try {
    const latestOutput = execSync(`npx wrangler kv key get --namespace-id=${NAMESPACE_ID} "latest_clicks" --remote`, { encoding: "utf8" }).trim();
    if (latestOutput && latestOutput !== "Value not found") {
      latestClicks = JSON.parse(latestOutput);
    }
  } catch (err) {
    console.log("No latest clicks history found yet in KV.");
  }

  // 3. Read Adapty stats from local JSON file
  let adaptyData = {
    last_updated: new Date().toISOString(),
    app_installs: 0,
    paywall_views: 0,
    active_subscriptions: 0,
    trial_activations: 0,
    total_revenue_usd: 0.00
  };

  if (fs.existsSync(ADAPTY_PATH)) {
    try {
      const fileContent = fs.readFileSync(ADAPTY_PATH, "utf8");
      adaptyData = JSON.parse(fileContent);
    } catch (err) {
      console.error("Warning: Failed to parse adapty_stats.json. Using defaults.");
    }
  }

  // Calculate conversions
  const installToSubRate = adaptyData.app_installs > 0 
    ? ((adaptyData.active_subscriptions / adaptyData.app_installs) * 100).toFixed(1) 
    : "0.0";
    
  const viewToSubRate = adaptyData.paywall_views > 0
    ? ((adaptyData.active_subscriptions / adaptyData.paywall_views) * 100).toFixed(1)
    : "0.0";

  // 4. Generate consolidated Markdown content
  let markdown = `# Celiac Scanner Analytics Dashboard\n\n`;
  markdown += `*Last updated: ${new Date().toLocaleString()}*\n\n`;

  markdown += `## 📱 App Store & Subscriptions (Adapty)\n\n`;
  markdown += `*To update these stats, modify [adapty_stats.json](file://${ADAPTY_PATH}) with the numbers from your Adapty Web Dashboard.*\n\n`;
  markdown += `| Metric | Value | Details |\n`;
  markdown += `| :--- | :--- | :--- |\n`;
  markdown += `| **App Installs** | ${adaptyData.app_installs} | Total unique app downloads/opens |\n`;
  markdown += `| **Paywall Views** | ${adaptyData.paywall_views} | Users who viewed the subscription screen |\n`;
  markdown += `| **Active Subscriptions** | ${adaptyData.active_subscriptions} | Active paying users |\n`;
  markdown += `| **Trial Activations** | ${adaptyData.trial_activations} | Users currently in free trial |\n`;
  markdown += `| **Conversion Rate (Install → Sub)** | **${installToSubRate}%** | Percentage of app installs converting to paid |\n`;
  markdown += `| **Conversion Rate (Paywall → Sub)** | **${viewToSubRate}%** | Percentage of paywall views converting to paid |\n`;
  markdown += `| **Total Revenue** | **$${adaptyData.total_revenue_usd.toFixed(2)}** | Total gross subscription revenue |\n\n`;

  markdown += `---\n\n`;

  markdown += `## 🌐 Website App Store Clicks (Cloudflare KV)\n\n`;
  markdown += `*Real-time click traffic from your marketing website redirecting to the App Store. Total Clicks: **${totalWebClicks}***\n\n`;

  if (summary.length === 0) {
    markdown += `*No website clicks recorded yet in production.*\n\n`;
  } else {
    markdown += `| Button Label | Total Clicks |\n`;
    markdown += `| :--- | :--- |\n`;
    summary.forEach(item => {
      markdown += `| **${item.button}** | ${item.count} |\n`;
    });
    markdown += `\n`;
  }

  markdown += `### Recent Website Clicks (Latest 100 Events)\n\n`;
  if (latestClicks.length === 0) {
    markdown += `*No website click events logged yet in production.*\n\n`;
  } else {
    markdown += `| Timestamp | Page Route | Button Label | Destination URL |\n`;
    markdown += `| :--- | :--- | :--- | :--- |\n`;
    latestClicks.forEach(item => {
      markdown += `| ${item.timestamp} | \`${item.page}\` | **${item.buttonText}** | [App Store Link](${item.destination}) |\n`;
    });
    markdown += `\n`;
  }

  // 5. Ensure ANALYTICS folder exists and write file
  const analyticsDir = path.dirname(FILE_PATH);
  if (!fs.existsSync(analyticsDir)) {
    fs.mkdirSync(analyticsDir, { recursive: true });
  }

  fs.writeFileSync(FILE_PATH, markdown, "utf8");
  console.log(`Success! Updated live dashboard in: ${FILE_PATH}`);

} catch (error) {
  console.error("Error pulling analytics from Cloudflare:", error.message);
  process.exit(1);
}
