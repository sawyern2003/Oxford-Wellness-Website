import { Link } from "wouter";
import { relatedTreatments } from "@/data/treatmentsNav";

interface RelatedTreatmentsProps {
  currentSlug: string;
}

export default function RelatedTreatments({ currentSlug }: RelatedTreatmentsProps) {
  const related = relatedTreatments[currentSlug];

  if (!related || related.length === 0) {
    return null;
  }

  return (
    <section className="bg-secondary/5 py-12 md:py-16">
      <div className="container-page max-w-3xl">
        <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground mb-6">
          Related treatments
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {related.map((treatment) => (
            <Link
              key={treatment.href}
              href={treatment.href}
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <h3 className="font-sans text-base font-semibold text-foreground">
                {treatment.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
