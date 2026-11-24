import {
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  HERO_CAPTION,
  HERO_HEADLINE,
  HERO_SUBLINE,
} from "./shared";

/**
 * 1 · Editorial split
 * Desktop: text left with air, tall photo right ~viewport height.
 * Mobile: photo first (~60vh), then text.
 * Watercolour large and soft behind the care line.
 */
export default function HeroEditorial() {
  return (
    <>
      <section className="bg-white pt-24 md:pt-28 pb-8 md:pb-16 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 lg:min-h-[calc(100vh-7rem)] lg:items-center">
            <div className="lg:col-span-6 order-1 lg:order-2">
              <figure>
                <div className="relative h-[60vh] lg:h-[86vh] max-h-[860px] overflow-hidden rounded-[2px] bg-muted/20">
                  <DeskPortrait
                    priority
                    className="absolute inset-0 h-full w-full object-cover"
                    objectPosition="center 16%"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted-foreground lg:hidden">
                  {HERO_CAPTION}
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-md lg:max-w-[32rem] lg:py-8">
                <h1 className="text-[2.75rem] sm:text-[3rem] lg:text-[5rem] leading-[1.06] text-primary tracking-tight mb-6">
                  {HERO_HEADLINE}
                </h1>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm">
                  {HERO_SUBLINE}
                </p>
                <p className="hidden lg:block text-sm text-muted-foreground mb-10">
                  {HERO_CAPTION}
                </p>
                <BookConsultationButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white pt-4 pb-14 md:pb-20 overflow-hidden"
        aria-label="Doctor-led care"
      >
        <div
          className="pointer-events-none absolute -right-8 md:right-0 top-1/2 -translate-y-1/2 w-[min(72vw,520px)] opacity-[0.22]"
          aria-hidden="true"
        >
          <img
            src="/images/hero/botanical-720.webp"
            srcSet="/images/hero/botanical-480.webp 480w, /images/hero/botanical-720.webp 720w"
            sizes="(min-width: 768px) 520px, 72vw"
            alt=""
            width={720}
            height={476}
            loading="lazy"
            decoding="async"
            className="w-full h-auto select-none"
          />
        </div>
        <div className="container-wide relative">
          <CareLine />
        </div>
      </section>
    </>
  );
}
