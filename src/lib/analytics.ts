/**
 * Client-side utility for tracking page views and outbound link clicks on the Celiac Scanner website.
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

  const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });

  const endpoint = process.env.NODE_ENV === "development"
    ? "http://localhost:3001/track"
    : "/api/track";

  navigator.sendBeacon(endpoint, blob);
};

export const trackPageView = (pathname: string) => {
  if (typeof window === "undefined" || !navigator.sendBeacon) return;

  const payload = {
    timestamp: new Date().toLocaleString(),
    page: pathname,
    type: "pageview",
  };

  console.log(`[Analytics] Sending pageview beacon for "${pathname}"...`);

  const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });

  const endpoint = process.env.NODE_ENV === "development"
    ? "http://localhost:3001/track"
    : "/api/track";

  navigator.sendBeacon(endpoint, blob);
};
