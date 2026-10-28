import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { CATEGORY_LABELS, CATEGORY_ORDER, itemsInCategory, publicPrice } from "@/data/catalogue";

export default function Pricing() {
  useBreadcrumbSchema([{ name: "Prices & Booking", path: "/pricing" }]);
  useSEO({
    title: "Prices & Booking | The Oxford Wellness Doctor",
    description:
      "Consultations and treatment fees at The Oxford Wellness Doctor, Belsyre Court, Oxford. Fees still to be confirmed are shown as price on consultation.",
    canonical: "https://www.theoxfordwellnessdoctor.com/pricing",
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-28 pb-12 px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Fees
            </p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Prices &amp; Booking
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl text-[15px]">
              Fees are confirmed with you before treatment. Where a figure has not yet been approved for this page, it is shown as price on consultation.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {CATEGORY_ORDER.map((category) => {
            const items = itemsInCategory(category);
            if (!items.length) return null;
            return (
              <section key={category} id={category}>
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight">
                    {CATEGORY_LABELS[category]}
                  </h2>
                  <Link href={items[0].bookingUrl}>
                    <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-5 h-9 text-sm font-medium">
                      Book
                    </Button>
                  </Link>
                </div>
                <div className="divide-y divide-border bg-muted/40 rounded-3xl px-5">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center gap-4 py-3.5"
                    >
                      <div className="min-w-0">
                        {item.detailUrl && item.detailUrl !== "/pricing" ? (
                          <Link href={item.detailUrl} className="text-sm text-foreground hover:text-secondary transition-colors">
                            {item.name}
                          </Link>
                        ) : (
                          <span className="text-sm text-foreground">{item.name}</span>
                        )}
                        {item.areaOrVolume ? (
                          <p className="text-xs text-muted-foreground mt-0.5">{item.areaOrVolume}</p>
                        ) : null}
                      </div>
                      <span className="text-sm font-medium text-primary ml-4 whitespace-nowrap">
                        {publicPrice(item)}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-muted/50 p-8">
          <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">
            Booking
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-6">
            Choose the consultation that matches your enquiry. The calendar is the clinic’s existing booking page.
          </p>
          <Link href="/book">
            <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-8 h-11 text-sm font-medium">
              Book a consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
