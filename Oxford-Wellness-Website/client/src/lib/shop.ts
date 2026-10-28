/**
 * The clinic shop is a Shopify store.
 * Products, payment, delivery and dropshipping are managed there.
 * Paste the store address here, for example:
 * https://the-oxford-wellness-doctor.myshopify.com
 */
export const SHOPIFY_STORE_URL = "";

export function shopifyStoreUrl(): string | null {
  const value = SHOPIFY_STORE_URL.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}
