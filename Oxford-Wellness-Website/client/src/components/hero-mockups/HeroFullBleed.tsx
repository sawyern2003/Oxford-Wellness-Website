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
 * Photo runs under the nav (no white band). Context crop, framed edge,
 * warm tone. Panel holds headline + CTA fully on first screen.
 */
export default function HeroFullBleed() {
  return (
    <>
      <section className="bg-white pb-0 overflow-hidden min-h-[100svh]">
        <div className="relative">
          {/* Full-bleed: starts at top; nav overlays on white logo area */}
          <div className="relative h-[58vh] min-h-[420px] max-h-[640px] md:h-[78vh] md:max-h-[820px] w-full overflow-hidden bg-[#ebe7e0]">
            <DeskPortrait
              priority
              framed={false}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              objectPosition="62% 22%"
            />
            {/* Defined edge / soft vignette so white studio doesn't dissolve */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: "inset 0 0 0 1px hsl(215 35% 25% / 0.12), inset 0 0 80px hsl(30 20% 40% / 0.08)",
              }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" aria-hidden="true" />
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
