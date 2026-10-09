import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { PAIN_BOOK_HREF } from "@/lib/brand";
import { PAIN_CALENDLY_URL } from "@/lib/booking";

export default function PainBook() {
  useBreadcrumbSchema([
    { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
    { name: "Book", path: PAIN_BOOK_HREF },
  ]);
  useSEO({
    title: "Book a Consultation | The Oxford Pain Doctor",
    description:
      "Book a pain consultation with Dr Richard Sawyer at The Oxford Pain Doctor, Belsyre Court, Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/book",
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
            src={PAIN_CALENDLY_URL}
            title="Book a consultation with Dr Richard Sawyer"
            className="w-full h-[min(1400px,85vh)] min-h-[720px] border-0"
            allow="payment *; clipboard-write"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          If the calendar does not load,{" "}
          <a
            href={PAIN_CALENDLY_URL}
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
