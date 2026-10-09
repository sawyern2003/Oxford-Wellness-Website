export const PAIN_PATH_PREFIX = "/oxford-pain-doctor";
export const PAIN_CONTACT_HREF = `${PAIN_PATH_PREFIX}/contact`;
export const PAIN_BOOK_HREF = `${PAIN_PATH_PREFIX}/book`;

/** Set to false to hide The Oxford Pain Doctor from navigation, routes, and the site banner. */
export const SHOW_PAIN_DOCTOR = true;

export function isPainRoute(path: string) {
  return path === PAIN_PATH_PREFIX || path.startsWith(`${PAIN_PATH_PREFIX}/`);
}
