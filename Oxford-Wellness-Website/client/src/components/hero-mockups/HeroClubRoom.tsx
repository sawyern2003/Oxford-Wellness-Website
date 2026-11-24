import {
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  HERO_CAPTION,
  HERO_HEADLINE,
  HERO_SUBLINE,
} from "./shared";

/**
 * 5 · Club room
 * Parks Road painted scene as the setting; Dr Inga's real photo hangs
 * inside it as a framed gallery portrait (thin navy frame, slight mat,
 * caption beneath). Text beside on desktop, above on mobile.
 */
export default function HeroClubRoom() {
  return (
    <>
      <section className="bg-white pt-24 md:pt-28 pb-10 md:pb-16 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 lg:items-center lg:min-h-[calc(100vh-8rem)]">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-md">
                <h1 className="text-[2.75rem] sm:text-[3rem] lg:text-[4.5rem] leading-[1.06] text-primary tracking-tight mb-6">
                  {HERO_HEADLINE}
                </h1>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
                  {HERO_SUBLINE}
                </p>
                <BookConsultationButton />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                {/* Painted Oxford setting (Belsyre Court watercolour) */}
                <div className="relative overflow-hidden rounded-sm bg-muted/30 aspect-[4/3] lg:aspect-[5/4]">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="/images/hero/belsyre-wc-720.avif 720w, /images/hero/belsyre-wc-1200.avif 1200w"
                      sizes="(min-width: 1024px) 55vw, 92vw"
                    />
                    <source
                      type="image/webp"
                      srcSet="/images/hero/belsyre-wc-720.webp 720w, /images/hero/belsyre-wc-1200.webp 1200w"
                      sizes="(min-width: 1024px) 55vw, 92vw"
                    />
                    <img
                      src="/images/hero/belsyre-wc.jpg"
                      alt=""
                      width={1024}
                      height={682}
                      className="absolute inset-0 h-full w-full object-cover object-[center_40%] opacity-95"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-white/30" aria-hidden="true" />

                  {/* Framed portrait hanging in the room */}
                  <figure className="absolute inset-0 flex items-center justify-center p-5 sm:p-8 lg:p-10">
                    <div className="w-[62%] sm:w-[52%] max-w-[300px]">
                      <div className="bg-[#f7f5f1] p-2 sm:p-[10px] ring-1 ring-primary/10">
                        <div className="border border-primary/65 p-[3px]">
                          <div className="relative aspect-[3/4] overflow-hidden bg-muted/20">
                            <DeskPortrait
                              priority
                              sizes="280px"
                              className="absolute inset-0 h-full w-full object-cover"
                              objectPosition="center 12%"
                            />
                          </div>
                        </div>
                      </div>
                      <figcaption className="mt-3 text-center text-[11px] sm:text-xs tracking-wide text-primary/80">
                        {HERO_CAPTION}
                      </figcaption>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <div className="border-t border-border/50 pt-10">
            <CareLine />
          </div>
        </div>
      </section>
    </>
  );
}
