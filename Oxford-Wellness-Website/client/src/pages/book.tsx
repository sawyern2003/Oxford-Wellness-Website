import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { resolveBookPage } from "@/lib/booking";

export default function Book() {
  const resolved =
    typeof window !== "undefined"
      ? resolveBookPage(window.location.search)
      : { glowdayUrl: "", heading: "Book an appointment", kind: "generic" as const };

  useBreadcrumbSchema([{ name: "Book", path: "/book" }]);
  useSEO({
    title: "Book a Consultation | The Oxford Wellness Doctor",
    description:
      "Book an online consultation with Dr Inga Taganova at The Oxford Wellness Doctor in Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/book",
  });

  const glowdayUrl = resolved.glowdayUrl;
  const isSpecific = resolved.kind !== "generic";

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-10 md:py-12 max-w-5xl">
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-3">
          {resolved.heading}
        </h1>
        <p className="text-[15px] text-foreground/75 max-w-2xl mb-8">
          {isSpecific
            ? `Select ${resolved.heading} in the calendar if it is listed. Otherwise book the nearest general appointment and say what you need.`
            : "Choose the consultation that matches your enquiry. Aesthetic and menopause consultations are separate appointments."}
        </p>
        <div className="overflow-hidden border border-border bg-muted/30">
          <iframe
            src={glowdayUrl}
            title="Book a consultation with Dr Inga Taganova"
            className="w-full h-[min(1400px,85vh)] min-h-[720px] border-0"
            allow="payment *; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          If the calendar does not load,{" "}
          <a
            href={glowdayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="js-book-cta text-primary underline underline-offset-4"
          >
            open booking in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  );
}
