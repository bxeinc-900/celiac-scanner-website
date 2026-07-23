const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const FILE_PATH = path.join(__dirname, "ANALYTICS", "analytics.md");

// Initialize analytics.md if it doesn't exist
function ensureAnalyticsFile() {
  if (!fs.existsSync(FILE_PATH)) {
    const header = `# Celiac Scanner Click Analytics\n\nThis file is automatically updated by the local tracking server when links are clicked during development.\n\n| Timestamp | Page Route | Button Label | Destination URL |\n| :--- | :--- | :--- | :--- |\n`;
    fs.writeFileSync(FILE_PATH, header, "utf8");
    console.log(`[Tracker] Created new analytics file at: ${FILE_PATH}`);
  }
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/track") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const { timestamp, page, buttonText, destination } = data;

        ensureAnalyticsFile();

        // Write row in Markdown table format
        const markdownRow = `| ${timestamp} | \`${page}\` | **${buttonText}** | [App Store Link](${destination}) |\n`;
        fs.appendFileSync(FILE_PATH, markdownRow, "utf8");

        console.log(`[Tracker] Logged click: "${buttonText}" from page "${page}"`);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true }));
      } catch (error) {
        console.error("[Tracker] Failed to parse request body:", error.message);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid request body" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

ensureAnalyticsFile();

server.listen(PORT, () => {
  console.log(`[Tracker] Local click-tracking server running on http://localhost:${PORT}`);
});
