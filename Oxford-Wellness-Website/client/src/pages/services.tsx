import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { useEffect, useState } from "react";
import {
  treatmentsGuideIntro,
  treatmentsGuideSections,
} from "@/data/treatmentsGuide";

export default function Services() {
  const [activeSection, setActiveSection] = useState(treatmentsGuideSections[0]?.id ?? "");

  useBreadcrumbSchema([{ name: "Treatments", path: "/treatments" }]);
  useSEO({
    title: "Treatments | The Oxford Wellness Doctor",
    description:
      "An editorial guide to women's health, intimate care, longevity, skin treatments and chronic pain care with The Oxford Wellness Doctor in Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/treatments",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    treatmentsGuideSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background pt-28">
      <div className="sticky top-[72px] z-30 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container-page">
          <nav className="flex gap-6 overflow-x-auto py-3 text-sm md:gap-8 md:py-4" aria-label="Treatment areas">
            {treatmentsGuideSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`whitespace-nowrap font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-page py-12 md:py-16">
        <div className="mb-4 max-w-2xl">
          <p className="mb-4 text-[11px] font-medium tracking-normal text-muted-foreground">
            The clinic
          </p>
          <h1 className="mb-4 font-sans text-4xl font-semibold leading-snug tracking-tight text-foreground md:text-5xl">
            Treatments
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {treatmentsGuideIntro}
          </p>
          <p className="mt-5 text-[15px] text-muted-foreground">
            Looking for fees?{" "}
            <Link
              href="/pricing"
              className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
            >
              View the prices page
            </Link>
            .
          </p>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Not sure where to start?{" "}
            <Link
              href="/concerns"
              className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
            >
              Browse how we can help by concern
            </Link>
            .
          </p>
        </div>
      </div>

      {treatmentsGuideSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-[140px] border-t border-border/60 py-12 md:py-16"
        >
          {section.id === "aesthetics-skin" ? <span id="skin" className="absolute" /> : null}
          {section.id === "aesthetics-skin" ? <span id="body" className="absolute" /> : null}
          {section.id === "aesthetics-skin" ? <span id="weight" className="absolute" /> : null}

          <div className="container-page">
            <div className="mb-10 grid items-end gap-8 md:mb-12 md:grid-cols-12">
              <div className="md:col-span-7 max-w-2xl">
                <h2 className="mb-4 font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
                  {section.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {section.intro}
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="overflow-hidden bg-background">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full max-h-56 object-contain object-right md:max-h-64"
                  />
                </div>
              </div>
            </div>

            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <li key={item.href} className="border-t border-border pt-5">
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    <span className="text-foreground/80">Who it is for.</span> {item.whoFor}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    <span className="text-foreground/80">What it helps with.</span> {item.helpsWith}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
                  >
                    Read more
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="scroll-mt-28 border-t border-border/60 bg-muted/40 py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            Personalised treatment plans
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
            Some concerns benefit from a coordinated approach rather than a single treatment. After
            consultation, Dr Inga can recommend a personalised plan based on your needs and clinical
            suitability.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/personalised-treatment-plans">
              <Button className="h-11 rounded-full bg-primary px-7 text-sm font-medium text-white hover:bg-primary/90">
                Discuss a treatment plan
              </Button>
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-primary underline underline-offset-4"
            >
              View prices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
