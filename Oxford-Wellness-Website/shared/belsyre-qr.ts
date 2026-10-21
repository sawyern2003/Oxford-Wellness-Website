/**
 * Printed QR codes point at /belsyre.
 * Change this path when the poster should open a different page.
 * The /belsyre address itself stays the same.
 */
export const BELSYRE_QR_DESTINATION = "/";

const CAMPAIGN = {
  utm_source: "belsyre_court",
  utm_medium: "qr",
  utm_campaign: "stairwell_poster",
} as const;

export function belsyreRedirectLocation(): string {
  const params = new URLSearchParams(CAMPAIGN);
  const join = BELSYRE_QR_DESTINATION.includes("?") ? "&" : "?";
  return `${BELSYRE_QR_DESTINATION}${join}${params.toString()}`;
}

export function isLikelyBot(userAgent: string | undefined): boolean {
  if (!userAgent || userAgent.trim().length < 8) return true;
  return /bot|crawler|spider|slurp|facebookexternalhit|whatsapp|telegrambot|headless|curl\/|wget|python-requests|go-http-client/i.test(
    userAgent,
  );
}
