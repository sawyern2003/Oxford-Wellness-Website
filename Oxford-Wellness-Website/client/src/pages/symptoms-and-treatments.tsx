import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

const areas = [
  {
    title: "Menopause & Perimenopause",
    body: "Hot flushes, night sweats, changes in sleep, mood and concentration are among the concerns women may experience during perimenopause and menopause. Dr Inga offers individual assessment and guidance on appropriate treatment options.",
    href: "/menopause-clinic-oxford",
    action: "Explore Menopause Care",
  },
  {
    title: "Intimate Health",
    body: "Vaginal dryness, discomfort and changes in intimate wellbeing can affect quality of life. We offer confidential assessment and discuss appropriate medical and treatment options.",
    href: "/sexual-wellness-oxford",
    action: "Explore Intimate Health",
  },
  {
    title: "Weight & Metabolic Health",
    body: "Changes in weight and body composition can be frustrating, particularly during midlife. Our medical approach focuses on individual assessment, realistic goals and appropriate ongoing support.",
    href: "/treatments/medical-weight-loss-oxford",
    action: "Explore Weight Management",
  },
  {
    title: "Skin, Hair & Ageing",
    body: "Changes in skin texture, firmness and hydration are common over time. We offer a range of doctor-led treatments and personalised advice for patients seeking to improve skin health and appearance.",
    href: "/treatments#skin",
    action: "Explore Skin Treatments",
  },
];

export default function SymptomsAndTreatments() {
  useBreadcrumbSchema([{ name: "How we can help", path: "/symptoms-and-treatments" }]);
  useSEO({
    title: "How We Can Help | The Oxford Wellness Doctor",
    description:
      "Menopause, intimate health, weight and skin concerns. Personalised medical advice with Dr Inga Taganova at Belsyre Court, Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/symptoms-and-treatments",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <FadeIn className="max-w-2xl mb-12">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Concerns
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-4 leading-snug">
            How we can help
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mb-8">
            Changes in your health can affect many aspects of everyday life. Whether you're experiencing menopausal symptoms, intimate discomfort, changes in weight or concerns about your skin, we offer personalised medical advice and treatment options.
          </p>
          <Link href="/book">
            <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium">
              Book consultation
            </Button>
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {areas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="hover-card group block bg-white rounded-3xl border border-border p-7 md:p-8"
            >
              <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-3 group-hover:text-secondary transition-colors">
                {area.title}
              </h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                {area.body}
              </p>
              <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                {area.action}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
