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
 * 1 · Editorial split — About watercolour, no frame.
 */
export default function HeroEditorial() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden min-h-[100svh]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-16 lg:items-center lg:min-h-[calc(100vh-6.5rem)]">
            <div className="lg:col-span-6 order-1 lg:order-2">
              <figure>
                <div className="relative h-[42vh] max-h-[360px] sm:h-[46vh] sm:max-h-[420px] lg:h-[82vh] lg:max-h-[780px] overflow-hidden bg-white">
                  <IngaPortrait
                    priority
                    sizes="(min-width: 1024px) min(42vw, 720px), 92vw"
                    className="absolute inset-0 h-full w-full"
                    objectPosition="center 12%"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground lg:hidden">
                  {HERO_CAPTION}
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-md lg:max-w-[30rem] lg:py-6">
                <Headline className="text-[2.35rem] sm:text-[2.75rem] lg:text-[4.75rem] leading-[1.08] mb-4 lg:mb-6" />
                <Subline className="mb-3 lg:mb-5 max-w-sm" />
                <p className="hidden lg:block text-sm text-muted-foreground mb-8">
                  {HERO_CAPTION}
                </p>
                <div className="mt-4 lg:mt-0 pb-2">
                  <BookConsultationButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white pt-20 md:pt-24 pb-14 md:pb-20 overflow-hidden"
        aria-label="Doctor-led care"
      >
        <BelsyreWash className="absolute -right-16 md:right-0 top-1/2 -translate-y-1/2 w-[min(70vw,480px)]" opacity={0.16} />
        <div className="container-wide relative">
          <CareLine />
        </div>
      </section>
    </>
  );
}
