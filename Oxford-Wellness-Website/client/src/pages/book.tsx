import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { GLOWDAY_EMBED_SRC } from "@/lib/booking";

export default function Book() {
  useBreadcrumbSchema([{ name: "Book", path: "/book" }]);
  useSEO({
    title: "Book a Consultation | The Oxford Wellness Doctor",
    description:
      "Book an online consultation with Dr Inga Taganova at The Oxford Wellness Doctor in Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/book",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-10 md:py-12 max-w-5xl">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Appointments
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-8">
          Book a consultation
        </h1>
        <div className="overflow-hidden rounded-3xl border border-border bg-muted/30">
          <iframe
            src={GLOWDAY_EMBED_SRC}
            title="Book a consultation with Dr Inga Taganova"
            className="w-full h-[min(1400px,85vh)] min-h-[720px] border-0"
            allow="payment *; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          If the calendar does not load,{" "}
          <a
            href={GLOWDAY_EMBED_SRC}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            open booking in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  );
}
