import {
  BookConsultationButton,
  CareLine,
  Headline,
  HERO_CAPTION,
  IngaPortrait,
  Subline,
} from "./shared";

/**
 * 3 · Full-bleed with overlapping text — no framed photo, no bordered panel.
 */
export default function HeroFullBleed() {
  return (
    <>
      <section className="bg-white pb-0 overflow-hidden min-h-[100svh]">
        <div className="relative">
          <div className="relative h-[58vh] min-h-[420px] max-h-[640px] md:h-[78vh] md:max-h-[820px] w-full overflow-hidden bg-white">
            <IngaPortrait
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full"
              objectPosition="center 14%"
              objectFit="contain"
            />
          </div>

          <div className="relative z-10 -mt-36 sm:-mt-40 md:-mt-44 container-wide pb-8 md:pb-12">
            <div className="relative max-w-[20rem] sm:max-w-md bg-white/95 px-5 py-5 sm:px-7 sm:py-7">
              <Headline className="text-[2.1rem] sm:text-[2.5rem] lg:text-[3.25rem] leading-[1.08] mb-3" />
              <Subline className="mb-2 max-w-sm" />
              <p className="text-sm text-muted-foreground mb-4">{HERO_CAPTION}</p>
              <BookConsultationButton />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 md:pt-24 pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <CareLine />
        </div>
      </section>
    </>
  );
}
