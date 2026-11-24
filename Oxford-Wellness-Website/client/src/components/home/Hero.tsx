import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TypewriterPhrase from "@/components/animations/TypewriterPhrase";
import { heroImage } from "@/components/home/heroImage";
import journeyBotanical320Avif from "@/assets/optimized/journey-botanical-320.avif";
import journeyBotanical320Webp from "@/assets/optimized/journey-botanical-320.webp";
import journeyBotanical480Avif from "@/assets/optimized/journey-botanical-480.avif";
import journeyBotanical480Webp from "@/assets/optimized/journey-botanical-480.webp";

/** Easy-to-edit hero copy — keep phrasing changes here. */
const HERO_HEADLINE = "Nothing in\u00a0isolation.";
const HERO_SUBLINE =
  "Skin, intimate and women's health, considered together by one\u00a0doctor.";
const HERO_CAPTION = "Dr Inga Taganova, GP";
const HERO_CARE_PREFIX = "Doctor-led care for";
const heroPhrases = [
  "skin changes",
  "intimate wellness",
  "body confidence",
  "fatigue",
  "hormone changes",
  "symptoms of menopause",
];

/**
 * Editorial split hero (Nicholas-approved mockup #1).
 * Photo first on mobile; text left / photo right on desktop.
 * WhatsApp is the floating button only — nothing in the hero.
 * Cream branch: mix-blend-multiply blends the alpha watercolour into cream.
 */
export default function Hero() {
  return (
    <>
      {/*
        Mobile: no min-height so the care sprig can sit ~64–80px under the CTA.
        Desktop: keep the tall editorial composition.
      */}
      <section className="bg-background pt-20 md:pt-24 pb-0 md:pb-12 overflow-hidden md:min-h-[100svh]">
        <div className="container-wide">
          {/*
            No framer-motion entrance: opacity/y initial states collapsed
            hero regions on hydrate and drove CLS. Prerender must match
            the final layout size.
          */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-16 lg:items-center lg:min-h-[calc(100vh-6.5rem)]">
            <div className="lg:col-span-6 order-1 lg:order-2">
              <figure>
                <div className="relative h-[42vh] max-h-[360px] sm:h-[46vh] sm:max-h-[420px] lg:h-[82vh] lg:max-h-[780px] overflow-hidden bg-background">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={heroImage.avifSrcSet}
                      sizes={heroImage.sizes}
                    />
                    <source
                      type="image/webp"
                      srcSet={heroImage.webpSrcSet}
                      sizes={heroImage.sizes}
                    />
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      width={heroImage.width}
                      height={heroImage.height}
                      className="absolute inset-0 h-full w-full mix-blend-multiply"
                      style={{
                        objectFit: heroImage.objectFit,
                        objectPosition: heroImage.objectPosition,
                      }}
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground lg:hidden">
                  {HERO_CAPTION}
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-md lg:max-w-[30rem] lg:py-6">
                <h1 className="text-primary tracking-tight text-balance text-[2.35rem] sm:text-[2.75rem] lg:text-[4.75rem] leading-[1.08] mb-4 lg:mb-6">
                  {HERO_HEADLINE}
                </h1>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed text-pretty mb-3 lg:mb-5 max-w-sm">
                  {HERO_SUBLINE}
                </p>
                <p className="hidden lg:block text-sm text-muted-foreground mb-8">
                  {HERO_CAPTION}
                </p>
                <div className="mt-4 lg:mt-0 pb-2">
                  <Link href="/book" className="js-book-cta inline-block">
                    <Button
                      data-testid="hero-book-consultation-btn"
                      className="rounded bg-primary text-primary-foreground hover:bg-primary/90 shadow-none hover:shadow-none px-6 h-10 text-sm font-medium"
                    >
                      Book a consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Care line: centred Cormorant typewriter. Sprig + hairline above.
        Mobile: prefix on line 1, cycling phrase on line 2 (both centred).
        Height reserved for the longest phrase — CLS stays 0.
      */}
      <section
        className="bg-background pt-16 md:pt-28 pb-20 md:pb-28"
        aria-label="Doctor-led care"
      >
        <div className="container-wide flex flex-col items-center text-center">
          <div className="flex flex-col items-center mb-8 md:mb-10" aria-hidden="true">
            <picture>
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
            <div className="mt-4 w-10 h-px bg-border" />
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
            <span className="block">{HERO_CARE_PREFIX}</span>
            <TypewriterPhrase
              phrases={heroPhrases}
              className="relative block max-w-full text-brand-accent-text"
            />
          </p>
        </div>
      </section>
    </>
  );
}
