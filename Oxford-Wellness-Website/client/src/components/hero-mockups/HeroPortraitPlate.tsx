import {
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  Headline,
  HERO_CAPTION,
  Subline,
} from "./shared";

/**
 * 2 · Centred portrait plate
 * Large gallery plate (~60–70vh on desktop). No botanical sprig.
 */
export default function HeroPortraitPlate() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-8 md:pb-10 min-h-[100svh]">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center mb-3 md:mb-4">
            <Headline className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.75rem] leading-[1.08]" />
          </div>

          <figure className="relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-none lg:w-[min(38vw,24rem)]">
            {/* ~60vh plate on desktop, capped so CTA clears 900px fold */}
            <div className="relative h-[38vh] max-h-[320px] lg:h-[58vh] lg:max-h-[520px] bg-[#f3f0ea]">
              <DeskPortrait
                priority
                sizes="(min-width: 1024px) min(38vw, 24rem), 80vw"
                className="absolute inset-0 h-full w-full object-cover"
                objectPosition="center 16%"
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {HERO_CAPTION}
            </figcaption>
          </figure>

          <div className="mx-auto max-w-md text-center mt-3 md:mt-4">
            <Subline className="mb-3" />
            <BookConsultationButton />
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 md:pt-24 pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <CareLine className="mx-auto text-center sm:[&>span]:inline" />
        </div>
      </section>
    </>
  );
}
