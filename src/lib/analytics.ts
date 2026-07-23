/**
 * Client-side utility for tracking outbound link clicks on the Celiac Scanner website.
 * Sends data to a local tracking server in dev mode, and to `/api/track` (Cloudflare Pages Function) in production.
 */
export const trackClick = (buttonText: string, destination: string = "https://apps.apple.com/us/app/celiac-scanner/id6761954577") => {
  if (typeof window === "undefined" || !navigator.sendBeacon) return;

  const payload = {
    timestamp: new Date().toLocaleString(),
    page: window.location.pathname,
    buttonText,
    destination,
  };

  console.log(`[Analytics] Sending beacon for "${buttonText}"...`);

  // Convert payload to Blob as sendBeacon takes a Blob or FormData for custom Content-Types
  const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });

  // In development mode, send to the local Node.js sidecar server.
  // In production, send to the Cloudflare Pages Function at /api/track.
  const endpoint = process.env.NODE_ENV === "development"
    ? "http://localhost:3001/track"
    : "/api/track";

  navigator.sendBeacon(endpoint, blob);
};
