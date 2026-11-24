import { useEffect, type ReactNode } from "react";
import Flourish from "@/components/home/Flourish";
import FlourishFull from "@/components/home/FlourishFull";
import journeyBotanical320Avif from "@/assets/optimized/journey-botanical-320.avif";
import journeyBotanical320Webp from "@/assets/optimized/journey-botanical-320.webp";
import journeyBotanical480Avif from "@/assets/optimized/journey-botanical-480.avif";
import journeyBotanical480Webp from "@/assets/optimized/journey-botanical-480.webp";
import { useSEO } from "@/hooks/useSEO";

const CARE_PREFIX = "Doctor-led care for";
const CARE_PHRASE = "symptoms of menopause";
const FLOURISH_CLASS = "w-[160px] md:w-[clamp(200px,18vw,280px)] h-auto";

function CareBlock({
  label,
  flourish,
}: {
  label: string;
  flourish: ReactNode;
}) {
  return (
    <section className="bg-background pt-16 md:pt-20 pb-16 md:pb-20" aria-label={label}>
      <div className="container-wide flex flex-col items-center text-center">
        <p className="mb-6 text-sm text-muted-foreground">{label}</p>
        <div className="flex flex-col items-center mb-7 md:mb-9" aria-hidden="true">
          {flourish}
          <picture className="mt-4 md:mt-5">
            <source
              type="image/avif"
              srcSet={`${journeyBotanical320Avif} 320w, ${journeyBotanical480Avif} 480w`}
              sizes="110px"
            />
            <source
              type="image/webp"
              srcSet={`${journeyBotanical320Webp} 320w, ${journeyBotanical480Webp} 480w`}
              sizes="110px"
            />
            <img
              src={journeyBotanical480Webp}
              alt=""
              width={480}
              height={317}
              loading="lazy"
              decoding="async"
              className="w-[90px] sm:w-[110px] h-auto"
            />
          </picture>
        </div>
        <p
          className="text-primary text-balance max-w-4xl leading-[1.15] tracking-tight flex flex-col items-center gap-1"
          style={{
            fontFamily:
              '"Cormorant Garamond", "Cormorant Garamond Fallback", Georgia, serif',
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
          }}
        >
          <span className="block">{CARE_PREFIX}</span>
          <span className="relative block max-w-full text-brand-accent-text">
            <span className="invisible select-none" aria-hidden="true">
              {CARE_PHRASE}
            </span>
            <span className="absolute inset-0">{CARE_PHRASE}</span>
          </span>
        </p>
      </div>
    </section>
  );
}

/**
 * Internal noindex comparison of care-section flourishes at homepage sizes.
 * Not listed in the sitemap; prerendered separately.
 */
export default function FlourishCompare() {
  useSEO({
    title: "Flourish compare | The Oxford Wellness Doctor",
    description: "Internal flourish comparison for the care typewriter section.",
    canonical: "https://www.theoxfordwellnessdoctor.com/flourish-compare",
  });

  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-wide mb-8">
        <h1 className="font-sans font-semibold text-2xl text-foreground tracking-tight">
          Flourish compare
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Cream background, homepage sizes. Homepage keeps A (current Flourish) by default.
        </p>
      </div>

      <CareBlock label="A: current" flourish={<Flourish className={FLOURISH_CLASS} />} />
      <div className="border-t border-border" />
      <CareBlock
        label="B: fuller curls"
        flourish={<FlourishFull className={FLOURISH_CLASS} />}
      />
    </div>
  );
}
