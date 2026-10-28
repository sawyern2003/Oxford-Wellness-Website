import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

const areas = [
  {
    title: "Menopause & Perimenopause",
    body: "Hot flushes, night sweats, sleep, mood, brain fog, fatigue and cycle changes can have more than one cause. A consultation looks at your history before any treatment is suggested.",
    href: "/menopause-clinic-oxford",
    label: "Menopause clinic",
  },
  {
    title: "Intimate Health",
    body: "Vaginal dryness, discomfort, painful intercourse and urinary concerns are assessed clinically. Intimate treatments are only considered when they are appropriate for you.",
    href: "/sexual-wellness-oxford",
    label: "Intimate health",
  },
  {
    title: "Weight & Metabolic Health",
    body: "Weight change around midlife is discussed as a medical concern. Any plan starts with assessment, not a named medicine or a set course of treatment.",
    href: "/treatments/medical-weight-loss-oxford",
    label: "Weight management",
  },
  {
    title: "Skin, Hair & Ageing",
    body: "Dryness, a change in elasticity and hair thinning are common in midlife. Skin treatment, if it is suitable, is planned separately from medical care.",
    href: "/treatments#skin",
    label: "Skin and aesthetics",
  },
];

export default function WomensHealthOxford() {
  useBreadcrumbSchema([
    { name: "Treatments", path: "/treatments" },
    { name: "Women's Health & Menopause", path: "/womens-health-oxford" },
  ]);
  useSEO({
    title: "Women's Health & Menopause | The Oxford Wellness Doctor",
    description:
      "Menopause, perimenopause, intimate health and related concerns with Dr Inga Taganova, GP, at Belsyre Court, Oxford. HRT is not prescribed at this clinic.",
    canonical: "https://www.theoxfordwellnessdoctor.com/womens-health-oxford",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container-page py-14 md:py-20 max-w-3xl">
        <h1 className="font-sans font-semibold text-4xl md:text-5xl tracking-tight text-foreground mb-5">
          Women's Health &amp; Menopause
        </h1>
        <p className="text-[17px] leading-relaxed text-foreground/80 max-w-[62ch] mb-6">
          Dr Inga Taganova is a GP with training in obstetrics and gynaecology. She consults on menopause, perimenopause and related concerns at Belsyre Court.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/75 max-w-[62ch] mb-8">
          This clinic does not prescribe HRT. If hormone therapy is something to consider, Dr Inga can assess whether a referral is appropriate.
        </p>
        <Link href="/book?consultation=menopause">
          <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium">
            Book a Menopause Consultation
          </Button>
        </Link>
      </div>

      <div id="how-we-can-help" className="container-page max-w-3xl pb-20">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-2">How we can help</h2>
        <p className="text-sm text-foreground/70 mb-2 max-w-[62ch]">
          These are broad areas of care. They are not a diagnosis, and they do not lead to a particular paid treatment.
        </p>
        {areas.map((area) => (
          <section key={area.title} className="border-t border-border py-8">
            <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{area.title}</h3>
            <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">{area.body}</p>
            <Link href={area.href} className="text-sm font-medium text-primary underline underline-offset-4 decoration-[#83A5CB]">
              {area.label}
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
