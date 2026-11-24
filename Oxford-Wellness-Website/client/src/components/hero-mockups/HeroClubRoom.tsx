import {
  BookConsultationButton,
  CareLine,
  DeskPortrait,
  Headline,
  HERO_CAPTION,
  Subline,
} from "./shared";

/**
 * 5 · Club room
 * Belsyre watercolour wall; warmer framed portrait with a deep mat.
 */
export default function HeroClubRoom() {
  return (
    <>
      <section className="bg-white pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden min-h-[100svh]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-14 lg:items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-md">
                <Headline className="text-[2.25rem] sm:text-[2.75rem] lg:text-[4rem] leading-[1.08] mb-4 lg:mb-5" />
                <Subline className="mb-5 max-w-sm" />
                <BookConsultationButton />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative overflow-hidden rounded-[2px] bg-[#e8e4dc] aspect-[5/4] max-h-[48vh] lg:max-h-none lg:aspect-[5/4]">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="/images/hero/belsyre-wc-720.avif 720w, /images/hero/belsyre-wc-1200.avif 1200w, /images/hero/belsyre-wc-1600.avif 1600w"
                      sizes="(min-width: 1024px) 55vw, 92vw"
                    />
                    <source
                      type="image/webp"
                      srcSet="/images/hero/belsyre-wc-720.webp 720w, /images/hero/belsyre-wc-1200.webp 1200w, /images/hero/belsyre-wc-1600.webp 1600w"
                      sizes="(min-width: 1024px) 55vw, 92vw"
                    />
                    <img
                      src="/images/hero/belsyre-wc.jpg"
                      alt=""
                      width={1024}
                      height={682}
                      className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-white/[0.08]" aria-hidden="true" />

                  <figure className="absolute inset-0 flex flex-col items-center justify-center px-4 py-5 sm:px-8 sm:py-8">
                    <div className="w-[52%] sm:w-[46%] max-w-[260px]">
                      {/* Deep navy frame + warm mat — reads as a hung portrait */}
                      <div
                        className="p-[5px] sm:p-[6px]"
                        style={{
                          background:
                            "linear-gradient(145deg, #2a3548 0%, #161d28 45%, #3a4558 100%)",
                          boxShadow:
                            "0 10px 28px -12px rgba(22, 29, 40, 0.55), inset 0 0 0 1px rgba(255,255,255,0.08)",
                        }}
                      >
                        <div className="bg-[#ebe4d6] p-3 sm:p-3.5">
                          <div className="relative aspect-[3/4] overflow-hidden bg-[#2a3340] ring-1 ring-[#1a2230]/40">
                            <DeskPortrait
                              priority
                              framed={false}
                              variant="club"
                              sizes="260px"
                              className="absolute inset-0 h-full w-full object-cover"
                              objectPosition="center 14%"
                              styleFilter="sepia(0.12) saturate(1.08) brightness(0.98)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <figcaption className="mt-3 bg-white px-3 py-1.5 text-[11px] sm:text-xs text-primary tracking-wide ring-1 ring-primary/15 shadow-sm">
                      {HERO_CAPTION}
                    </figcaption>
                  </figure>
                </div>
              </div>
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
