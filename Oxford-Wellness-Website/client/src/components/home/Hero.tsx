import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/components/home/heroImage";

/** Easy-to-edit hero copy — keep phrasing changes here. */
const HERO_HEADLINE = "Nothing in\u00a0isolation.";
const HERO_SUBLINE =
  "Skin, intimate and women's health, considered together by one\u00a0doctor.";
const HERO_CAPTION = "Dr Inga Taganova, GP";
/** Static line immediately below the hero (not a heading — keeps a single H1). */
const HERO_SUPPORT =
  "For skin, intimate wellness, hormones, energy and the changes in\u00a0between.";

/**
 * Editorial split hero (Nicholas-approved mockup #1).
 * Photo first on mobile; text left / photo right on desktop.
 * WhatsApp is the floating button only — nothing in the hero.
 */
export default function Hero() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden min-h-[100svh]">
        <div className="container-wide">
          {/*
            No framer-motion entrance: opacity/y initial states collapsed
            hero regions on hydrate and drove CLS. Prerender must match
            the final layout size.
          */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-16 lg:items-center lg:min-h-[calc(100vh-6.5rem)]">
            <div className="lg:col-span-6 order-1 lg:order-2">
              <figure>
                <div className="relative h-[42vh] max-h-[360px] sm:h-[46vh] sm:max-h-[420px] lg:h-[82vh] lg:max-h-[780px] overflow-hidden bg-white">
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
                      className="absolute inset-0 h-full w-full"
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

      {/* Static support line — prerendered, no animation, no layout shift. */}
      <section
        className="relative bg-white pt-20 md:pt-24 pb-14 md:pb-20 overflow-hidden"
        aria-label="Care focus"
      >
        <div
          className="pointer-events-none select-none absolute -right-16 md:right-0 top-1/2 -translate-y-1/2 w-[min(70vw,480px)] opacity-[0.16]"
          aria-hidden="true"
        >
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
        <div className="container-wide relative">
          <p
            className="text-primary text-balance max-w-3xl text-[1.35rem] sm:text-[1.6rem] md:text-[1.85rem] leading-snug"
            style={{
              fontFamily:
                '"Cormorant Garamond", "Cormorant Garamond Fallback", Georgia, serif',
              fontWeight: 400,
            }}
          >
            {HERO_SUPPORT}
          </p>
        </div>
      </section>
    </>
  );
}
