import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { useEffect, useState } from "react";

interface TreatmentCard {
  name: string;
  description: string;
  href: string;
  price?: string;
}

interface Section {
  id: string;
  title: string;
  intro: string;
  treatments: TreatmentCard[];
  bg: string;
}

const sections: Section[] = [
  {
    id: "womens-health",
    title: "Women's Health & Menopause",
    intro: "Comprehensive menopause care, intimate health consultations, and related treatments. What is suitable is discussed and decided in consultation.",
    bg: "bg-white",
    treatments: [
      {
        name: "Menopause Consultation",
        description: "Assessment of your symptoms and guidance on treatment options, including whether HRT is appropriate.",
        href: "/menopause-clinic-oxford",
        price: "£275",
      },
      {
        name: "Perimenopause Consultation",
        description: "Consultation for women in their 40s experiencing irregular periods, mood changes, or other early symptoms.",
        href: "/perimenopause-oxford",
        price: "£275",
      },
      {
        name: "Women's Health Consultation",
        description: "Comprehensive women's health consultations addressing hormonal and wellbeing concerns.",
        href: "/womens-health-oxford",
        price: "£275",
      },
      {
        name: "Intimate Health Consultation",
        description: "Confidential consultation for vaginal dryness, discomfort and changes in intimate wellbeing.",
        href: "/sexual-wellness-oxford",
        price: "£150",
      },
      {
        name: "Forma V",
        description: "Treatment for intimate comfort. Whether it is appropriate is decided after assessment.",
        href: "/treatments/votiva-forma-v-oxford",
        price: "from £450",
      },
      {
        name: "Neauvia N Rose",
        description: "Intimate hyaluronic acid treatment. Availability and suitability confirmed at consultation.",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
        price: "Price on consultation",
      },
      {
        name: "Vitamin B12 Injection",
        description: "Intramuscular vitamin B12 injection, given in clinic after a short consultation.",
        href: "/treatments/vitamin-b12-injection-oxford",
        price: "£45",
      },
      {
        name: "Medical Form Completion",
        description: "GP completion and signature of medical forms and certificates.",
        href: "/treatments/medical-form-completion-oxford",
        price: "£75",
      },
    ],
  },
  {
    id: "skin",
    title: "Skin & Aesthetics",
    intro: "Expert aesthetic treatments to address lines, volume loss, skin quality, and texture concerns. Every treatment is tailored to your individual needs.",
    bg: "bg-secondary/5",
    treatments: [
      {
        name: "Anti-Wrinkle Injections",
        description: "Treatment to soften lines such as forehead lines, frown lines and crow's feet.",
        href: "/treatments/anti-wrinkle-injections-oxford",
        price: "from £230",
      },
      {
        name: "Dermal Fillers",
        description: "Hyaluronic acid used to restore volume in selected areas of the face.",
        href: "/treatments/dermal-fillers-oxford",
        price: "from £250",
      },
      {
        name: "Lip Fillers",
        description: "Hyaluronic acid used to add definition or volume to the lips.",
        href: "/treatments/lip-fillers-oxford",
        price: "from £320",
      },
      {
        name: "Filler Dissolving",
        description: "Removal of hyaluronic acid filler when a previous treatment needs to be adjusted.",
        href: "/treatments/filler-dissolving-oxford",
        price: "£275",
      },
      {
        name: "Jaw Treatment",
        description: "Treatment of the jaw muscles, including for teeth grinding, after assessment.",
        href: "/treatments/jaw-slimming-teeth-grinding-oxford",
        price: "£295",
      },
      {
        name: "Profhilo",
        description: "Injectable hyaluronic acid that bio-remodels skin, stimulating collagen and elastin production.",
        href: "/treatments/profhilo-oxford",
        price: "from £350",
      },
      {
        name: "HA Skin Booster",
        description: "Hyaluronic acid injectable used to support skin hydration and quality.",
        href: "/treatments/skin-boosters-oxford",
        price: "£250",
      },
      {
        name: "Polynucleotides",
        description: "Injectable treatment used to support skin quality and regeneration.",
        href: "/treatments/skin-boosters-oxford",
        price: "from £350",
      },
      {
        name: "Morpheus8",
        description: "Radiofrequency microneedling used to improve skin texture, firmness and certain scars.",
        href: "/treatments/morpheus8-oxford",
        price: "from £450",
      },
      {
        name: "Forma Facelift",
        description: "Radiofrequency treatment used to firm and smooth the skin of the face.",
        href: "/treatments/forma-facelift-oxford",
        price: "from £195",
      },
      {
        name: "Lumecca IPL",
        description: "Intense pulsed light used for pigmentation, redness and sun-related skin changes.",
        href: "/treatments/lumecca-ipl-oxford",
        price: "from £175",
      },
      {
        name: "Chemical Peels",
        description: "Medical-grade peels used to improve texture, pigmentation and the look of fine lines.",
        href: "/treatments/chemical-peels-oxford",
        price: "from £125",
      },
      {
        name: "Excessive Sweating Treatment",
        description: "Underarm treatment for excessive sweating, where it is clinically suitable.",
        href: "/treatments/excessive-sweating-treatment-oxford",
        price: "£450",
      },
    ],
  },
  {
    id: "body",
    title: "Weight & Body",
    intro: "Doctor-led weight loss consultation and non-surgical body contouring treatments for improved confidence and wellbeing.",
    bg: "bg-white",
    treatments: [
      {
        name: "Weight Loss Consultation",
        description: "Doctor-led assessment and personalised advice on nutrition, activity and lifestyle for adults.",
        href: "/treatments/weight-loss-consultation-oxford",
        price: "Price confirmed at booking",
      },
      {
        name: "Forma Plus",
        description: "Radiofrequency body treatment used to firm skin on areas such as the abdomen and arms.",
        href: "/treatments/forma-plus-body-contouring-oxford",
        price: "from £250",
      },
      {
        name: "InMode FX",
        description: "Body treatment used for skin tightening and the appearance of cellulite.",
        href: "/treatments/inmode-fx-skin-tightening-oxford",
        price: "from £195",
      },
    ],
  },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState("womens-health");

  useBreadcrumbSchema([{ name: "Treatments", path: "/treatments" }]);
  useSEO({
    title: "Treatments | The Oxford Wellness Doctor",
    description:
      "Women's health, skin and aesthetics, and body care with Dr Inga Taganova at Belsyre Court, Oxford.",
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

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28">
      {/* Sticky Nav */}
      <div className="sticky top-[72px] z-30 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="container-page">
          <nav className="flex gap-6 overflow-x-auto py-3 text-sm md:gap-8 md:py-4">
            {sections.map((section) => (
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

      {/* Header */}
      <div className="container-page py-12 md:py-16">
        <div className="mb-4 max-w-2xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The clinic
          </p>
          <h1 className="mb-4 font-sans text-4xl font-semibold leading-snug tracking-tight text-foreground md:text-5xl">
            Treatments
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Expert women's health, aesthetic and body treatments in Oxford. All consultations and treatments
            are carried out by Dr Inga Taganova.
          </p>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-[140px] py-12 md:py-16 ${section.bg}`}
        >
          {/* Keep #weight anchor for backwards compatibility */}
          {section.id === "body" && <span id="weight" className="absolute" />}
          
          <div className="container-page">
            <div className="mb-10 max-w-2xl md:mb-12">
              <h2 className="mb-4 font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
                {section.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {section.intro}
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.treatments.map((treatment) => (
                <Link key={treatment.href} href={treatment.href}>
                  <div className="group">
                    <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {treatment.name}
                    </h3>
                    {treatment.price && (
                      <p className="mt-1 text-sm text-muted-foreground">{treatment.price}</p>
                    )}
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {treatment.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Additional links for specific sections */}
            {section.id === "womens-health" && (
              <div className="mt-8 border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">
                  Also see:{" "}
                  <Link
                    href="/longevity-medicine-oxford"
                    className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
                  >
                    Longevity Medicine
                  </Link>
                </p>
              </div>
            )}

            {section.id === "skin" && (
              <div className="mt-8 border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">
                  Related:{" "}
                  <Link
                    href="/menopause-skin"
                    className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
                  >
                    Menopause & Skin
                  </Link>
                  {" · "}
                  <Link
                    href="/skin-clinic-oxford"
                    className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
                  >
                    Skin Clinic Oxford
                  </Link>
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Personalised Treatment Plans */}
      <section className="scroll-mt-28 bg-secondary/5 py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            Personalised Treatment Plans
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
            Some concerns benefit from a coordinated approach rather than a single treatment. Following
            consultation, Dr Inga can recommend a personalised treatment plan based on your needs, preferences
            and clinical suitability.
          </p>
          <Link href="/personalised-treatment-plans" className="mt-6 inline-block">
            <Button className="h-11 rounded-full bg-primary px-7 text-sm font-medium text-white hover:bg-primary/90">
              Discuss a treatment plan
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
