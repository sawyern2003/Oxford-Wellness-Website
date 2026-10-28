import { useEffect } from "react";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { shopifyStoreUrl } from "@/lib/shop";

export default function Shop() {
  const storeUrl = shopifyStoreUrl();

  useSEO({
    title: "Shop | The Oxford Wellness Doctor",
    description:
      "Order clinic-selected products online from The Oxford Wellness Doctor. Checkout and delivery are handled by the clinic shop.",
    canonical: "https://www.theoxfordwellnessdoctor.com/shop",
  });

  useEffect(() => {
    if (!storeUrl) return;
    window.location.replace(storeUrl);
  }, [storeUrl]);

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
        <FadeIn>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
            Shop
          </h1>
          {storeUrl ? (
            <>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Opening the clinic shop, where you can order products for delivery.
              </p>
              <a href={storeUrl}>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium">
                  Continue to the shop
                </Button>
              </a>
            </>
          ) : (
            <>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Products chosen for home care, ordered online and sent to your address.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-10">
                The shop is not open for orders yet. For skincare used alongside treatment, Dr Inga’s recommendations are on the site.
              </p>
              <Link href="/recommended-skincare">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium">
                  Recommended skincare
                </Button>
              </Link>
            </>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
