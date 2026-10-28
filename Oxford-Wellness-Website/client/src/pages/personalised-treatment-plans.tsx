import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

export default function PersonalisedTreatmentPlans() {
  useBreadcrumbSchema([
    { name: "Treatments", path: "/treatments" },
    { name: "Personalised Treatment Plans", path: "/personalised-treatment-plans" },
  ]);
  useSEO({
    title: "Personalised Treatment Plans | The Oxford Wellness Doctor",
    description:
      "Some patients at The Oxford Wellness Doctor are offered a coordinated series of treatments or ongoing medical support after clinical assessment.",
    canonical: "https://www.theoxfordwellnessdoctor.com/personalised-treatment-plans",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
          After a consultation
        </p>
        <h1 className="font-sans font-semibold text-4xl md:text-5xl tracking-tight text-foreground mb-8 leading-snug">
          Personalised Treatment Plans
        </h1>
        <div className="rounded-3xl bg-muted/40 p-7 md:p-10 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Some patients benefit from a series of treatments, or from medical support over time, rather than a single appointment. That is decided after Dr Inga has assessed you.
          </p>
          <p>
            A plan is built around what is appropriate for your health and what you want to address. It is not a package offered to every patient, and it does not promise a particular result.
          </p>
          <p>
            If a plan is suitable, the consultations and treatments within it are explained, including the fees, before you commit.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Link href="/book?consultation=plan">
            <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium">
              Discuss a treatment plan
            </Button>
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-primary underline underline-offset-4 self-center">
            View prices
          </Link>
        </div>
      </div>
    </div>
  );
}
