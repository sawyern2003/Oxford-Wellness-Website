import {
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  HERO_CAPTION,
  HERO_HEADLINE,
  HERO_SUBLINE,
} from "./shared";

/**
 * 3 · Full-bleed photo with overlapping white text panel
 * Photo edge-to-edge; Dr Inga sits to one side. White panel overlaps
 * the lower edge (bottom-left on desktop; pulled up on mobile).
 * Soft watercolour wash behind the panel.
 */
export default function HeroFullBleed() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-0 overflow-hidden">
        <div className="relative">
          <div className="relative h-[68vh] min-h-[480px] max-h-[760px] w-full overflow-hidden bg-muted/20">
            <DeskPortrait
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              objectPosition="68% 16%"
            />
          </div>

          <div className="relative z-10 -mt-36 sm:-mt-40 md:-mt-44 container-wide pb-10 md:pb-14">
            <div className="relative max-w-md md:max-w-[28rem]">
              <div
                className="pointer-events-none absolute -left-6 -top-8 w-32 opacity-25"
                aria-hidden="true"
              >
                <img
                  src="/images/hero/botanical-480.webp"
                  alt=""
                  width={480}
                  height={317}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto select-none"
                />
              </div>
              <div className="relative bg-white px-6 py-7 sm:px-8 sm:py-8 border border-border/60">
                <h1 className="text-[2.5rem] sm:text-[2.75rem] lg:text-[3.5rem] leading-[1.08] text-primary tracking-tight mb-4">
                  {HERO_HEADLINE}
                </h1>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-3 max-w-sm">
                  {HERO_SUBLINE}
                </p>
                <p className="text-sm text-muted-foreground mb-6">{HERO_CAPTION}</p>
                <BookConsultationButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <CareLine />
        </div>
      </section>
    </>
  );
}
