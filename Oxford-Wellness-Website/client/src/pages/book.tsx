import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { resolveBookPage, type ResolvedBooking } from "@/lib/booking";

/**
 * Resolve Cliniko URLs without reading `window` during render.
 * SSR / first paint always use the generic diary (matches prerender of /book).
 * After mount, re-resolve from the live query string so ?treatment= / ?consultation=
 * deep links work on SPA navigation and cold loads without a #418 mismatch.
 */
function useResolvedBooking(): ResolvedBooking {
  const search = useSearch();
  const [resolved, setResolved] = useState<ResolvedBooking>(() =>
    resolveBookPage(""),
  );

  useEffect(() => {
    setResolved(resolveBookPage(search ? `?${search}` : ""));
  }, [search]);

  return resolved;
}

export default function Book() {
  const resolved = useResolvedBooking();

  useBreadcrumbSchema([{ name: "Book", path: "/book" }]);
  useSEO({
    title: "Book a Consultation | The Oxford Wellness Doctor",
    description:
      "Book an online consultation with Dr Inga Taganova at The Oxford Wellness Doctor in Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/book",
  });

  const isSpecific = resolved.kind !== "generic";

  return (
    <div className="pt-28 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 md:py-12 max-w-5xl">
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-3">
          {resolved.heading}
        </h1>
        <p className="text-[15px] text-foreground/75 max-w-2xl mb-6">
          {isSpecific
            ? `The diary below is filtered to ${resolved.heading}. If you need a different appointment, choose another service in the calendar or open the full booking page.`
            : "Choose the consultation or treatment that matches your enquiry. Aesthetic and menopause appointments are listed separately."}
        </p>

        <div className="mb-6 md:hidden">
          <a
            href={resolved.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="js-book-cta inline-flex w-full items-center justify-center rounded-full bg-primary px-7 h-12 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Book online
          </a>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Opens the clinic diary in Cliniko. You can also use the calendar below.
          </p>
        </div>

        <div className="overflow-hidden border border-border bg-muted/30">
          <iframe
            src={resolved.embedUrl}
            title="Book with The Oxford Wellness Doctor"
            className="w-full h-[min(1400px,85vh)] min-h-[720px] border-0"
            allow="payment *; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          If the calendar does not load,{" "}
          <a
            href={resolved.bookingUrl}
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
