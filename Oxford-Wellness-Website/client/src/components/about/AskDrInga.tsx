/**
 * MYHEALTHPALS / TAVUS EMBED MOUNT POINT
 *
 * Replace the contents of DrIngaExperienceMount with the MyHealthPals Tavus
 * embed. Leave the surrounding section as it is.
 */
function DrIngaExperienceMount() {
  return (
    <div
      data-myhealthpals-mount="tavus"
      role="region"
      aria-label="Interactive Dr Inga experience"
      className="mx-auto flex aspect-[3/4] w-full max-w-[20rem] flex-col items-center justify-center border border-border bg-muted/40 px-8 text-center lg:mx-0 lg:max-w-[24rem]"
    >
      <span
        aria-hidden
        className="mb-6 grid size-12 place-items-center rounded-full border border-primary/30 text-primary"
      >
        <svg viewBox="0 0 16 16" className="ml-0.5 size-4" fill="currentColor">
          <path d="M5 3.2v9.6L13 8 5 3.2Z" />
        </svg>
      </span>
      <p className="font-sans text-lg font-semibold tracking-tight text-foreground">
        Interactive Dr Inga experience
      </p>
      <p className="mt-2 text-sm text-muted-foreground">Powered by MyHealthPals</p>
    </div>
  );
}

export default function AskDrInga() {
  return (
    <section className="border-t border-border py-16 md:py-20" aria-labelledby="about-speak-heading">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="max-w-[34rem] lg:col-span-5">
          <p className="mb-4 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
            Meet Dr Inga
          </p>
          <h2
            id="about-speak-heading"
            className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight leading-snug text-balance"
          >
            Speak with Dr Inga
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.75] text-muted-foreground">
            <p>
              Meet Dr Inga through an interactive AI experience and ask questions about the clinic, its treatments and where you might begin.
            </p>
            <p>
              The experience is designed to help you explore The Oxford Wellness Doctor before deciding on your next step.
            </p>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-foreground/80">
            This is an AI version of Dr Inga, not a live conversation with Dr Inga herself. It can provide general information about the clinic and its treatments, but it cannot diagnose you or replace a medical consultation.
          </p>
        </div>

        {/* MYHEALTHPALS / TAVUS EMBED MOUNT POINT */}
        <div className="lg:col-span-6 lg:col-start-7 lg:justify-self-end">
          <DrIngaExperienceMount />
        </div>
      </div>
    </section>
  );
}
