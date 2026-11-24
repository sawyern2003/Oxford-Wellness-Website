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
 * Large gallery plate (~65vh on desktop), CTA ≥60px above a 900px fold.
 */
export default function HeroPortraitPlate() {
  return (
    <>
      <section className="bg-white pt-20 lg:pt-[4.75rem] pb-6 md:pb-8 min-h-[100svh]">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center mb-2 md:mb-3">
            <Headline className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] leading-[1.06]" />
          </div>

          <figure className="relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-none lg:w-[min(40vw,26rem)]">
            {/*
              ~65vh on tall viewports; on a 900px fold the max-height keeps
              the CTA bottom ≥60px above the fold (see fold check).
            */}
            <div className="relative h-[38vh] max-h-[320px] lg:h-[65vh] lg:max-h-[min(65vh,calc(100vh-23.5rem))] bg-[#f3f0ea]">
              <DeskPortrait
                priority
                sizes="(min-width: 1024px) min(40vw, 26rem), 80vw"
                className="absolute inset-0 h-full w-full object-cover"
                objectPosition="center 16%"
              />
            </div>
            <figcaption className="mt-1.5 text-center text-sm text-muted-foreground">
              {HERO_CAPTION}
            </figcaption>
          </figure>

          <div className="mx-auto max-w-md text-center mt-2.5 md:mt-3">
            <Subline className="mb-2.5" />
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
