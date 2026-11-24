import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { PAIN_BOOK_HREF } from "@/lib/brand";
import { PAIN_CLINIKO_EMBED_URL, PAIN_CLINIKO_URL } from "@/lib/booking";

export default function PainBook() {
  useBreadcrumbSchema([
    { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
    { name: "Book", path: PAIN_BOOK_HREF },
  ]);
  useSEO({
    title: "Book a Consultation | The Oxford Pain Doctor",
    description:
      "Book a Chronic Pain Consultation with Dr Richard Sawyer at The Oxford Pain Doctor, Belsyre Court, Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/book",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-10 md:py-12 max-w-5xl">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Appointments
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-3">
          Book a Chronic Pain Consultation
        </h1>
        <p className="text-[15px] text-foreground/75 max-w-2xl mb-6">
          In-person appointments with Dr Richard Sawyer at Belsyre Court. The diary below is filtered to
          his Chronic Pain Consultation.
        </p>

        <div className="mb-6 md:hidden">
          <a
            href={PAIN_CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="js-book-cta inline-flex w-full items-center justify-center rounded-full bg-primary px-7 h-12 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Book online
          </a>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Opens Cliniko in a new tab. You can also use the calendar below.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-muted/30">
          <iframe
            src={PAIN_CLINIKO_EMBED_URL}
            title="Book a Chronic Pain Consultation with Dr Richard Sawyer"
            className="w-full h-[min(1400px,85vh)] min-h-[720px] border-0"
            allow="payment *; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          If the calendar does not load,{" "}
          <a
            href={PAIN_CLINIKO_URL}
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
