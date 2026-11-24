import {
  BookConsultationButton,
  CareLine,
  Headline,
  HERO_CAPTION,
  HERO_SIGNATURE,
  Subline,
  WidePortrait,
} from "./shared";

/**
 * 4 · Typographic
 * Type owns the first screen; photo peeks just below the button (no large gap).
 */
export default function HeroTypographic() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 overflow-hidden min-h-[100svh] flex flex-col">
        <div className="container-wide">
          <div className="relative max-w-4xl pt-2 md:pt-6 pb-4 md:pb-6">
            <Headline className="text-[2.75rem] sm:text-[3.75rem] lg:text-[5.75rem] xl:text-[6.5rem] leading-[0.98] mb-5 md:mb-7" />

            <div className="mb-4 md:mb-6">
              <div className="w-10 h-px bg-primary/35 mb-3" aria-hidden="true" />
              <p
                className="text-lg md:text-xl text-primary/80"
                style={{
                  fontFamily:
                    '"Cormorant Garamond", "Cormorant Garamond Fallback", Georgia, serif',
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {HERO_SIGNATURE}
              </p>
            </div>

            <Subline className="mb-4 max-w-md" />
            <BookConsultationButton />
          </div>
        </div>

        {/* Tight under the button on mobile; mt-auto only from md up */}
        <div className="container-wide pt-5 md:pt-8 pb-0 md:mt-auto">
          <div className="w-10 h-px bg-primary/25 mb-2.5" aria-hidden="true" />
          <p className="text-sm text-muted-foreground mb-2.5">{HERO_CAPTION}</p>
          <figure>
            <div className="relative w-full overflow-hidden bg-[#e8e2d8] ring-1 ring-primary/35 h-[16vh] min-h-[110px] md:h-[38vh] md:min-h-[300px] md:max-h-[400px]">
              <WidePortrait
                priority
                sizes="(min-width: 1024px) min(1200px, 92vw), 92vw"
                className="absolute inset-0 h-full w-full object-cover object-[center_8%] md:object-[center_20%]"
              />
            </div>
          </figure>
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
