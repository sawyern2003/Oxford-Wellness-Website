import {
  BelsyreWash,
  BookConsultationButton,
  CareLine,
  Headline,
  HERO_CAPTION,
  IngaPortrait,
  Subline,
} from "./shared";

/**
 * 5 · Club room — About watercolour photo unframed; Belsyre as a quiet wash only.
 */
export default function HeroClubRoom() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden min-h-[100svh]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-14 lg:items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center relative">
              <BelsyreWash
                className="absolute -left-10 -bottom-8 w-[min(70vw,360px)] -z-0"
                opacity={0.06}
              />
              <div className="relative max-w-md">
                <Headline className="text-[2.25rem] sm:text-[2.75rem] lg:text-[4rem] leading-[1.08] mb-4 lg:mb-5" />
                <Subline className="mb-5 max-w-sm" />
                <BookConsultationButton />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="relative mx-auto max-w-md lg:max-w-lg">
                <div className="relative aspect-[2/3] max-h-[48vh] lg:max-h-[70vh] overflow-hidden bg-white">
                  <IngaPortrait
                    priority
                    sizes="(min-width: 1024px) min(40vw, 28rem), 88vw"
                    className="absolute inset-0 h-full w-full"
                    objectPosition="center 10%"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted-foreground text-center lg:text-left">
                  {HERO_CAPTION}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 md:pt-24 pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <div className="border-t border-border/50 pt-10">
            <CareLine />
          </div>
        </div>
      </section>
    </>
  );
}
