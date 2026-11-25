/** Fired whenever the mobile nav menu opens or closes so floating CTAs can yield. */
export const MOBILE_NAV_CHANGE_EVENT = "owd-mobile-nav-change";

export function dispatchMobileNavChange(open: boolean) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(MOBILE_NAV_CHANGE_EVENT, { detail: { open } })
  );
}
