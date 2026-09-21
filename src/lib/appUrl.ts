// Base URL of the dashboard app this marketing site hands off to.
// Override locally via .env: VITE_APP_URL=http://localhost:3000
export const APP_URL = import.meta.env.VITE_APP_URL || "https://app.wonderscore.ai";

// Base URL of the backend API — used directly by this site for its own
// public endpoints (e.g. the contact form), not just as a hand-off target.
// Override locally via .env: VITE_API_URL=http://127.0.0.1:8000
export const API_URL = import.meta.env.VITE_API_URL || "https://api.wonderscore.ai";

// The free, no-login scan — Part 1 of the platform-flow spec: paste a URL
// here, land straight in the dashboard's /scan with real results, never
// straight into signup.
export function scanUrl(targetUrl: string): string {
  return `${APP_URL}/scan?url=${encodeURIComponent(targetUrl)}`;
}

export function authUrl(signup?: boolean): string {
  return `${APP_URL}/auth${signup ? "?signup=true" : ""}`;
}
