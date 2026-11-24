import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TypewriterPhrase from "@/components/animations/TypewriterPhrase";

export const HERO_HEADLINE = "Nothing in isolation.";
export const HERO_SUBLINE =
  "Skin, intimate and women's health, considered together by one doctor.";
export const HERO_CAPTION = "Dr Inga Taganova, GP";
export const HERO_SIGNATURE = "Dr Inga Taganova";

export const CARE_PREFIX = "Doctor-led care for";
export const carePhrases = [
  "skin changes",
  "intimate wellness",
  "body confidence",
  "fatigue",
  "hormone changes",
  "symptoms of menopause",
];

/** Desk portrait — same real photograph as the About watercolour source. */
export const DESK_AVIF =
  "/images/hero/dr-inga-desk-480.avif 480w, /images/hero/dr-inga-desk-720.avif 720w, /images/hero/dr-inga-desk-960.avif 960w, /images/hero/dr-inga-desk-1200.avif 1200w";
export const DESK_WEBP =
  "/images/hero/dr-inga-desk-480.webp 480w, /images/hero/dr-inga-desk-720.webp 720w, /images/hero/dr-inga-desk-960.webp 960w, /images/hero/dr-inga-desk-1200.webp 1200w";
export const DESK_FALLBACK = "/images/hero/dr-inga-desk.jpg";
export const DESK_W = 999;
export const DESK_H = 1274;

export const WIDE_AVIF =
  "/images/hero/dr-inga-desk-wide-800.avif 800w, /images/hero/dr-inga-desk-wide-1200.avif 1200w, /images/hero/dr-inga-desk-wide-1600.avif 1600w";
export const WIDE_WEBP =
  "/images/hero/dr-inga-desk-wide-800.webp 800w, /images/hero/dr-inga-desk-wide-1200.webp 1200w, /images/hero/dr-inga-desk-wide-1600.webp 1600w";
export const WIDE_FALLBACK = "/images/hero/dr-inga-desk-wide.jpg";
export const WIDE_W = 1600;
export const WIDE_H = 992;

/** Quiet solid navy CTA — modest radius, no pill, no shadow. */
export function BookConsultationButton({
  className = "",
  testId = "hero-mockup-book-btn",
}: {
  className?: string;
  testId?: string;
}) {
  return (
    <Link href="/book" className="js-book-cta inline-block">
      <Button
        data-testid={testId}
        className={`rounded bg-primary text-primary-foreground hover:bg-primary/90 shadow-none hover:shadow-none px-6 h-10 text-sm font-medium ${className}`}
      >
        Book a consultation
      </Button>
    </Link>
  );
}

export function DeskPortrait({
  className,
  sizes = "(min-width: 1024px) 42vw, 92vw",
  priority = false,
  objectPosition = "center 18%",
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <picture>
      <source type="image/avif" srcSet={DESK_AVIF} sizes={sizes} />
      <source type="image/webp" srcSet={DESK_WEBP} sizes={sizes} />
      <img
        src={DESK_FALLBACK}
        alt="Dr Inga Taganova"
        width={DESK_W}
        height={DESK_H}
        className={className}
        style={{ objectPosition }}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}

export function WidePortrait({
  className,
  sizes = "100vw",
  priority = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <picture>
      <source type="image/avif" srcSet={WIDE_AVIF} sizes={sizes} />
      <source type="image/webp" srcSet={WIDE_WEBP} sizes={sizes} />
      <img
        src={WIDE_FALLBACK}
        alt="Dr Inga Taganova"
        width={WIDE_W}
        height={WIDE_H}
        className={className}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}

/** Cycling care line — reserved height, brand-blue phrase. */
export function CareLine({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-medium text-base sm:text-lg text-foreground leading-snug max-w-3xl ${className}`}
    >
      <span className="block sm:inline">{CARE_PREFIX} </span>
      <TypewriterPhrase
        phrases={carePhrases}
        className="relative mt-0.5 block w-fit max-w-full text-brand-accent-text sm:mt-0 sm:inline-block sm:align-baseline"
      />
    </p>
  );
}
