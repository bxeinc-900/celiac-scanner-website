const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const NAMESPACE_ID = "177314a6192b473e8dcc8e26f7129bc0";
const FILE_PATH = path.join(__dirname, "ANALYTICS", "analytics.md");

console.log("Fetching live analytics data from Cloudflare KV...");

try {
  // 1. Get the list of all keys to identify click counters
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

  // 2. Get the latest clicks log
  let latestClicks = [];
  try {
    const latestOutput = execSync(`npx wrangler kv key get --namespace-id=${NAMESPACE_ID} "latest_clicks" --remote`, { encoding: "utf8" }).trim();
    if (latestOutput && latestOutput !== "Value not found") {
      latestClicks = JSON.parse(latestOutput);
    }
  } catch (err) {
    console.log("No latest clicks history found yet.");
  }

  // 3. Generate Markdown content
  let markdown = `# Celiac Scanner Click Analytics\n\n`;
  markdown += `*Last synchronized with Cloudflare KV: ${new Date().toLocaleString()}*\n\n`;

  markdown += `## Production Summary (Total Clicks)\n\n`;
  if (summary.length === 0) {
    markdown += `*No clicks recorded yet in production.*\n\n`;
  } else {
    markdown += `| Button Label | Total Clicks |\n`;
    markdown += `| :--- | :--- |\n`;
    summary.forEach(item => {
      markdown += `| **${item.button}** | ${item.count} |\n`;
    });
    markdown += `\n`;
  }

  markdown += `## Recent Live Clicks (Latest 100 Events)\n\n`;
  if (latestClicks.length === 0) {
    markdown += `*No click events logged yet in production.*\n\n`;
  } else {
    markdown += `| Timestamp | Page Route | Button Label | Destination URL |\n`;
    markdown += `| :--- | :--- | :--- | :--- |\n`;
    latestClicks.forEach(item => {
      markdown += `| ${item.timestamp} | \`${item.page}\` | **${item.buttonText}** | [App Store Link](${item.destination}) |\n`;
    });
    markdown += `\n`;
  }

  // 4. Ensure ANALYTICS folder exists and write file
  const analyticsDir = path.dirname(FILE_PATH);
  if (!fs.existsSync(analyticsDir)) {
    fs.mkdirSync(analyticsDir, { recursive: true });
  }

  fs.writeFileSync(FILE_PATH, markdown, "utf8");
  console.log(`Success! Updated live click data in: ${FILE_PATH}`);

} catch (error) {
  console.error("Error pulling analytics from Cloudflare:", error.message);
  process.exit(1);
}
