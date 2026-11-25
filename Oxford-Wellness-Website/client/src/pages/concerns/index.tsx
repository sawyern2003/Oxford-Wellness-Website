import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { concerns, concernsHubIntro } from "@/data/concerns";

export default function ConcernsHub() {
  useBreadcrumbSchema([{ name: "Concerns we help with", path: "/concerns" }]);
  useSEO({
    title: "Concerns We Help With | The Oxford Wellness Doctor",
    description:
      "Common midlife concerns, from hot flushes and sleep to intimate comfort and skin change, with doctor-led guidance from Dr Inga Taganova, GP, in Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/concerns",
  });

  return (
    <div className="min-h-screen bg-background pt-28">
      <div className="container-page py-12 md:py-16 max-w-3xl">
        <p className="mb-4 text-[11px] font-medium tracking-normal text-muted-foreground">
          Guidance
        </p>
        <h1 className="mb-4 font-sans text-4xl font-semibold leading-snug tracking-tight text-foreground md:text-5xl">
          Concerns we help with
        </h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
          {concernsHubIntro}
        </p>
        <p className="text-[15px] text-muted-foreground mb-10">
          Prefer to browse by treatment area?{" "}
          <Link
            href="/treatments"
            className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
          >
            See the treatments guide
          </Link>
          . For fees, visit the{" "}
          <Link
            href="/pricing"
            className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
          >
            prices page
          </Link>
          .
        </p>

        <ul className="divide-y divide-border border-t border-border">
          {concerns.map((concern) => (
            <li key={concern.slug} className="py-6">
              <h2 className="font-sans text-xl font-semibold tracking-tight text-foreground mb-2">
                {concern.name}
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                {concern.intro.slice(0, 160).trim()}
                {concern.intro.length > 160 ? "…" : ""}
              </p>
              <Link
                href={`/concerns/${concern.slug}`}
                className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground mb-3">
            Ready to talk it through?
          </h2>
          <p className="text-[15px] text-muted-foreground mb-5 max-w-xl">
            Book a consultation with Dr Inga Taganova, GP, at Belsyre Court, Oxford.
          </p>
          <Link href="/book">
            <Button className="js-book-cta bg-primary text-white hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-medium">
              Book a consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
