import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TypewriterPhrase from "@/components/animations/TypewriterPhrase";

/** Keep “in isolation.” together so we never hang a lone “in”. */
export const HERO_HEADLINE = "Nothing in\u00a0isolation.";
export const HERO_SUBLINE =
  "Skin, intimate and women's health, considered together by one\u00a0doctor.";
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

/** About-page watercolour of Dr Inga (not the white-studio desk photo). */
export const INGA_AVIF =
  "/images/hero/dr-inga-about-640.avif 640w, /images/hero/dr-inga-about-960.avif 960w, /images/hero/dr-inga-about-1280.avif 1280w";
export const INGA_WEBP =
  "/images/hero/dr-inga-about-640.webp 640w, /images/hero/dr-inga-about-960.webp 960w, /images/hero/dr-inga-about-1280.webp 1280w";
export const INGA_FALLBACK = "/images/hero/dr-inga-about.jpg";
export const INGA_W = 545;
export const INGA_H = 819;

export const WIDE_AVIF =
  "/images/hero/dr-inga-about-wide-800.avif 800w, /images/hero/dr-inga-about-wide-1200.avif 1200w";
export const WIDE_WEBP =
  "/images/hero/dr-inga-about-wide-800.webp 800w, /images/hero/dr-inga-about-wide-1200.webp 1200w";
export const WIDE_FALLBACK = "/images/hero/dr-inga-about-wide.jpg";
export const WIDE_W = 545;
export const WIDE_H = 393;

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

/**
 * About watercolour — no frame, mat, border, or shadow.
 * Prefer object-contain so the painted face is never cropped off.
 */
export function IngaPortrait({
  className,
  sizes = "(min-width: 1024px) 42vw, 92vw",
  priority = false,
  objectPosition = "center 18%",
  objectFit = "contain",
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  objectFit?: "contain" | "cover";
}) {
  return (
    <picture>
      <source type="image/avif" srcSet={INGA_AVIF} sizes={sizes} />
      <source type="image/webp" srcSet={INGA_WEBP} sizes={sizes} />
      <img
        src={INGA_FALLBACK}
        alt="Dr Inga Taganova"
        width={INGA_W}
        height={INGA_H}
        className={className}
        style={{ objectPosition, objectFit }}
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

export function Headline({ className = "" }: { className?: string }) {
  return (
    <h1 className={`text-primary tracking-tight text-balance ${className}`}>
      {HERO_HEADLINE}
    </h1>
  );
}

export function Subline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[15px] sm:text-base text-muted-foreground leading-relaxed text-pretty ${className}`}
    >
      {HERO_SUBLINE}
    </p>
  );
}

/** Soft Belsyre watercolour wash — our own asset, not a botanical sprig. */
export function BelsyreWash({
  className = "",
  opacity = 0.18,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true" style={{ opacity }}>
      <picture>
        <source
          type="image/avif"
          srcSet="/images/hero/belsyre-wc-720.avif 720w, /images/hero/belsyre-wc-1200.avif 1200w, /images/hero/belsyre-wc-1600.avif 1600w"
          sizes="520px"
        />
        <source
          type="image/webp"
          srcSet="/images/hero/belsyre-wc-720.webp 720w, /images/hero/belsyre-wc-1200.webp 1200w, /images/hero/belsyre-wc-1600.webp 1600w"
          sizes="520px"
        />
        <img
          src="/images/hero/belsyre-wc.jpg"
          alt=""
          width={1024}
          height={682}
          loading="lazy"
          decoding="async"
          className="w-full h-auto"
        />
      </picture>
    </div>
  );
}

/**
 * Cycling care line — static until in view so it never peeks mid-typewriter
 * into the first screen.
 */
export function CareLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.55, rootMargin: "0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`font-medium text-base sm:text-lg text-foreground leading-snug max-w-3xl ${className}`}
    >
      <span className="block sm:inline">{CARE_PREFIX} </span>
      {active ? (
        <TypewriterPhrase
          phrases={carePhrases}
          className="relative mt-0.5 block w-fit max-w-full text-brand-accent-text sm:mt-0 sm:inline-block sm:align-baseline"
        />
      ) : (
        <span className="relative mt-0.5 block w-fit max-w-full text-brand-accent-text sm:mt-0 sm:inline-block sm:align-baseline">
          <span className="invisible select-none whitespace-nowrap" aria-hidden="true">
            symptoms of menopause
          </span>
          <span className="absolute inset-0 whitespace-nowrap">skin changes</span>
        </span>
      )}
    </p>
  );
}
