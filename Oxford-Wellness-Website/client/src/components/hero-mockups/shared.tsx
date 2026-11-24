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

export const DESK_AVIF =
  "/images/hero/dr-inga-desk-640.avif 640w, /images/hero/dr-inga-desk-960.avif 960w, /images/hero/dr-inga-desk-1280.avif 1280w, /images/hero/dr-inga-desk-1600.avif 1600w, /images/hero/dr-inga-desk-2000.avif 2000w";
export const DESK_WEBP =
  "/images/hero/dr-inga-desk-640.webp 640w, /images/hero/dr-inga-desk-960.webp 960w, /images/hero/dr-inga-desk-1280.webp 1280w, /images/hero/dr-inga-desk-1600.webp 1600w, /images/hero/dr-inga-desk-2000.webp 2000w";
export const DESK_FALLBACK = "/images/hero/dr-inga-desk.jpg";
export const DESK_W = 1043;
export const DESK_H = 1332;

export const WIDE_AVIF =
  "/images/hero/dr-inga-desk-wide-800.avif 800w, /images/hero/dr-inga-desk-wide-1200.avif 1200w, /images/hero/dr-inga-desk-wide-1600.avif 1600w, /images/hero/dr-inga-desk-wide-2000.avif 2000w";
export const WIDE_WEBP =
  "/images/hero/dr-inga-desk-wide-800.webp 800w, /images/hero/dr-inga-desk-wide-1200.webp 1200w, /images/hero/dr-inga-desk-wide-1600.webp 1600w, /images/hero/dr-inga-desk-wide-2000.webp 2000w";
export const WIDE_FALLBACK = "/images/hero/dr-inga-desk-wide.jpg";
export const WIDE_W = 1086;
export const WIDE_H = 673;

export const CLUB_AVIF =
  "/images/hero/dr-inga-desk-club-480.avif 480w, /images/hero/dr-inga-desk-club-720.avif 720w, /images/hero/dr-inga-desk-club-960.avif 960w, /images/hero/dr-inga-desk-club-1200.avif 1200w";
export const CLUB_WEBP =
  "/images/hero/dr-inga-desk-club-480.webp 480w, /images/hero/dr-inga-desk-club-720.webp 720w, /images/hero/dr-inga-desk-club-960.webp 960w, /images/hero/dr-inga-desk-club-1200.webp 1200w";
export const CLUB_FALLBACK = "/images/hero/dr-inga-desk-club.jpg";

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

const warmFilter = "sepia(0.06) saturate(1.04) brightness(1.01)";

/**
 * Framed desk portrait — hairline navy edge + faint warm panel so the
 * white studio backdrop does not dissolve into the page.
 */
export function DeskPortrait({
  className,
  sizes = "(min-width: 1024px) 42vw, 92vw",
  priority = false,
  objectPosition = "center 20%",
  framed = true,
  variant = "desk",
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  framed?: boolean;
  variant?: "desk" | "club";
}) {
  const avif = variant === "club" ? CLUB_AVIF : DESK_AVIF;
  const webp = variant === "club" ? CLUB_WEBP : DESK_WEBP;
  const fallback = variant === "club" ? CLUB_FALLBACK : DESK_FALLBACK;
  const width = variant === "club" ? 825 : DESK_W;
  const height = variant === "club" ? 958 : DESK_H;

  const imgClass = framed
    ? "absolute inset-0 h-full w-full object-cover"
    : className;

  const img = (
    <picture>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={fallback}
        alt="Dr Inga Taganova"
        width={width}
        height={height}
        className={imgClass}
        style={{ objectPosition, filter: warmFilter }}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );

  if (!framed) return img;

  return (
    <div className={className ?? "absolute inset-0"}>
      <div className="absolute inset-0 bg-[#e8e2d8] p-[4px] ring-1 ring-primary/40">
        <div className="relative h-full w-full overflow-hidden bg-[#e4dfd6]">{img}</div>
      </div>
    </div>
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
        style={{ filter: warmFilter }}
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
          srcSet="/images/hero/belsyre-wc-720.avif 720w, /images/hero/belsyre-wc-1200.avif 1200w"
          sizes="520px"
        />
        <source
          type="image/webp"
          srcSet="/images/hero/belsyre-wc-720.webp 720w, /images/hero/belsyre-wc-1200.webp 1200w"
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
