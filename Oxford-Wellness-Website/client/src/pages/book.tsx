import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { CONSULTATION_LABELS, GLOWDAY_EMBED_SRC } from "@/lib/booking";

export default function Book() {
  const requested = new URLSearchParams(window.location.search).get("consultation");
  const consultationName = requested ? CONSULTATION_LABELS[requested] : null;
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
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-3">
          {consultationName ?? "Book an appointment"}
        </h1>
        <p className="text-[15px] text-foreground/75 max-w-2xl mb-8">
          {consultationName
            ? `Select ${consultationName} in the calendar if it is listed. Otherwise book the nearest general appointment and say what you need.`
            : "Choose the consultation that matches your enquiry. Aesthetic, menopause and weight consultations are separate appointments."}
        </p>
        <div className="overflow-hidden border border-border bg-muted/30">
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
