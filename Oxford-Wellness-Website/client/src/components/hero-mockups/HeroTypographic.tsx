import {
  BookConsultationButton,
  CareLine,
  Headline,
  HERO_CAPTION,
  HERO_SIGNATURE,
  IngaPortrait,
  Subline,
} from "./shared";

/**
 * 4 · Typographic
 * Full About watercolour portrait (object-contain, no crop strip), modest
 * width so we never upscale the 545px source past ~420 CSS px.
 */
export default function HeroTypographic() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden min-h-[100svh]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 lg:items-end">
            <div className="lg:col-span-7 relative max-w-4xl pt-2 md:pt-4">
              <Headline className="text-[2.5rem] sm:text-[3.25rem] lg:text-[5.25rem] xl:text-[5.75rem] leading-[0.98] mb-4 md:mb-6" />

              <div className="mb-3 md:mb-5">
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

            {/* Full portrait — modest, never cropped through the face */}
            <div className="lg:col-span-5 mt-5 lg:mt-0">
              <figure className="mx-auto w-[min(72vw,280px)] sm:w-[300px] lg:w-[min(26vw,400px)] lg:ml-auto lg:mr-0">
                <div className="relative aspect-[545/819] w-full bg-white">
                  <IngaPortrait
                    priority
                    sizes="(min-width: 1024px) 400px, 280px"
                    className="absolute inset-0 h-full w-full"
                    objectPosition="center center"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground text-center lg:text-right">
                  {HERO_CAPTION}
                </figcaption>
              </figure>
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
