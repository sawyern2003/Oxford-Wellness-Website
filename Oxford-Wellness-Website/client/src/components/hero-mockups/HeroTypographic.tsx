import {
  BookConsultationButton,
  CareLine,
  HERO_HEADLINE,
  HERO_SIGNATURE,
  HERO_SUBLINE,
  WidePortrait,
} from "./shared";

/**
 * 4 · Typographic
 * First viewport devoted to a very large Cormorant headline, a signature
 * line (italic + hairline), subline and button. Photo revealed just below
 * the fold as a wide crisp crop; on mobile the top peeks above the fold.
 */
export default function HeroTypographic() {
  return (
    <>
      <section className="bg-white pt-24 md:pt-28 overflow-hidden">
        <div className="container-wide">
          <div className="relative">
            <div
              className="pointer-events-none absolute right-0 top-2 w-24 sm:w-36 md:w-44 opacity-30"
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

            {/*
              Keep this block short of a full viewport so the wide photo
              peeks (~96–120px) above the fold on mobile and sits just
              under it on desktop.
            */}
            <div className="relative max-w-4xl pt-6 md:pt-10 pb-8 md:pb-12 min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-16rem)] flex flex-col justify-center">
              <h1 className="text-[3rem] sm:text-[4.25rem] lg:text-[6.25rem] xl:text-[7rem] leading-[0.98] text-primary tracking-tight mb-6 md:mb-8">
                {HERO_HEADLINE}
              </h1>

              <div className="mb-6 md:mb-8">
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

              <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed mb-7 max-w-md">
                {HERO_SUBLINE}
              </p>
              <BookConsultationButton />
            </div>
          </div>
        </div>

        <div className="container-wide pb-4 md:pb-8 -mt-2">
          <figure>
            <div className="relative w-full overflow-hidden bg-muted/20 aspect-[16/10]">
              <WidePortrait
                priority
                className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-white pt-10 pb-14 md:pb-16" aria-label="Doctor-led care">
        <div className="container-wide">
          <CareLine />
        </div>
      </section>
    </>
  );
}
