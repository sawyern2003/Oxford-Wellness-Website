import {
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  HERO_CAPTION,
  HERO_HEADLINE,
  HERO_SUBLINE,
} from "./shared";

/**
 * 2 · Centred portrait plate
 * Magazine / gallery plate: headline above, framed photo centred with
 * white margins, subline and button beneath. Watercolour vignette
 * tucked behind one corner of the frame.
 */
export default function HeroPortraitPlate() {
  return (
    <>
      <section className="bg-white pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center mb-6 md:mb-8">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4.25rem] leading-[1.08] text-primary tracking-tight">
              {HERO_HEADLINE}
            </h1>
          </div>

          <figure className="relative mx-auto w-full max-w-[20rem] lg:max-w-[22rem]">
            <div
              className="pointer-events-none absolute -left-10 -bottom-8 w-36 sm:w-44 opacity-40 z-0"
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
            <div className="relative z-10 border border-primary/15 bg-white p-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted/20">
                <DeskPortrait
                  priority
                  sizes="(min-width: 1024px) 22rem, 88vw"
                  className="absolute inset-0 h-full w-full object-cover"
                  objectPosition="center 14%"
                />
              </div>
            </div>
            <figcaption className="relative z-10 mt-3 text-center text-sm text-muted-foreground">
              {HERO_CAPTION}
            </figcaption>
          </figure>

          <div className="mx-auto max-w-md text-center mt-5 md:mt-6">
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
              {HERO_SUBLINE}
            </p>
            <BookConsultationButton />
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <CareLine className="mx-auto text-center sm:[&>span]:inline" />
        </div>
      </section>
    </>
  );
}
