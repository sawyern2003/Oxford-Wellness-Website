import {
  BelsyreWash,
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  Headline,
  HERO_CAPTION,
  Subline,
} from "./shared";

/**
 * 3 · Full-bleed photo with overlapping white text panel
 * Soft warm-grey edge so the white studio does not melt into the page.
 */
export default function HeroFullBleed() {
  return (
    <>
      <section className="bg-white pb-0 overflow-hidden min-h-[100svh]">
        <div className="relative">
          <div className="relative h-[58vh] min-h-[420px] max-h-[640px] md:h-[78vh] md:max-h-[820px] w-full overflow-hidden bg-[#e8e2d8]">
            <DeskPortrait
              priority
              framed={false}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              objectPosition="62% 22%"
            />
            {/* Soft warm-grey edge / vignette — top and sides especially */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom, hsl(35 18% 82% / 0.45) 0%, transparent 14%),
                  linear-gradient(to right, hsl(35 16% 78% / 0.28) 0%, transparent 10%),
                  linear-gradient(to left, hsl(35 16% 78% / 0.32) 0%, transparent 12%),
                  radial-gradient(ellipse at center, transparent 55%, hsl(30 14% 55% / 0.16) 100%)
                `,
                boxShadow: "inset 0 0 0 1px hsl(215 28% 28% / 0.1)",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 -mt-40 sm:-mt-44 md:-mt-48 container-wide pb-8 md:pb-12">
            <div className="relative max-w-[20rem] sm:max-w-md">
              <BelsyreWash className="absolute -left-8 -top-10 w-40" opacity={0.2} />
              <div className="relative bg-white px-5 py-5 sm:px-7 sm:py-7 ring-1 ring-primary/10">
                <Headline className="text-[2.1rem] sm:text-[2.5rem] lg:text-[3.25rem] leading-[1.08] mb-3" />
                <Subline className="mb-2 max-w-sm" />
                <p className="text-sm text-muted-foreground mb-4">{HERO_CAPTION}</p>
                <BookConsultationButton />
              </div>
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
