/**
 * Homepage hero image — single place to swap the portrait.
 *
 * To replace with a natural-light photo later:
 * 1. Drop new responsive files into client/public/images/hero/
 *    (AVIF + WebP + JPEG at the widths listed in `srcSet`).
 * 2. Update the fields below (paths, width, height, alt, objectPosition).
 * 3. Mirror the same paths in the LCP <link rel="preload"> in client/index.html.
 * 4. Run `npm run check:hero-assets` (wired into `npm run build`).
 */
export const heroImage = {
  /** Fallback JPEG (also used if AVIF/WebP unsupported). */
  src: "/images/hero/dr-inga-about.jpg",
  alt: "Dr Inga Taganova",
  /** Intrinsic pixel size of the source art (dr-inga-watercolour.png). */
  width: 545,
  height: 819,
  /** object-contain keeps the full watercolour; face never cropped. */
  objectFit: "contain" as const,
  objectPosition: "center 12%",
  sizes: "(min-width: 1024px) min(42vw, 720px), 92vw",
  avifSrcSet:
    "/images/hero/dr-inga-about-640.avif 640w, /images/hero/dr-inga-about-960.avif 960w, /images/hero/dr-inga-about-1280.avif 1280w",
  webpSrcSet:
    "/images/hero/dr-inga-about-640.webp 640w, /images/hero/dr-inga-about-960.webp 960w, /images/hero/dr-inga-about-1280.webp 1280w",
} as const;

/** Paths referenced by the hero (for the build-time existence check). */
export const heroImageAssetPaths = [
  "/images/hero/dr-inga-about.jpg",
  "/images/hero/dr-inga-about-640.avif",
  "/images/hero/dr-inga-about-640.webp",
  "/images/hero/dr-inga-about-640.jpg",
  "/images/hero/dr-inga-about-960.avif",
  "/images/hero/dr-inga-about-960.webp",
  "/images/hero/dr-inga-about-960.jpg",
  "/images/hero/dr-inga-about-1280.avif",
  "/images/hero/dr-inga-about-1280.webp",
  "/images/hero/dr-inga-about-1280.jpg",
  "/images/hero/belsyre-wc.jpg",
  "/images/hero/belsyre-wc-720.avif",
  "/images/hero/belsyre-wc-720.webp",
  "/images/hero/belsyre-wc-1200.avif",
  "/images/hero/belsyre-wc-1200.webp",
  "/images/hero/belsyre-wc-1600.avif",
  "/images/hero/belsyre-wc-1600.webp",
] as const;
