import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Button } from "@/components/ui/button";

const morning = [
  {
    name: "Vitamin C Brightening Concentrate",
    brand: "SkinCeuticals",
    why: "Supports antioxidant defence and brightness – useful alongside regenerative skin programmes.",
    who: "Women addressing dullness, uneven tone or midlife skin change.",
    how: "4–5 drops to dry face and neck each morning before moisturiser and SPF.",
    programmes: "Skin Health & Regeneration",
  },
  {
    name: "SPF 50+ Mineral Sunscreen",
    brand: "EltaMD",
    why: "Essential protection after peels, IPL and collagen-stimulating treatments.",
    who: "All patients – especially during active treatment journeys.",
    how: "Apply liberally each morning; reapply with outdoor exposure.",
    programmes: "All programmes with in-clinic treatments",
  },
];

const evening = [
  {
    name: "Hyaluronic Acid Hydrating Serum",
    brand: "Obagi",
    why: "Supports barrier comfort and hydration between clinic visits.",
    who: "Dry, dehydrated or post-treatment skin.",
    how: "Apply to cleansed skin before moisturiser.",
    programmes: "Skin Health & Regeneration",
  },
  {
    name: "Advanced Retinol Night Serum",
    brand: "SkinCeuticals",
    why: "Supports overnight renewal as part of a long-term skin quality plan – introduced carefully.",
    who: "Suitable patients under doctor guidance; not for immediate post-procedure use.",
    how: "2–3 drops in the evening as advised. Always pair with morning SPF.",
    programmes: "Skin Health & Regeneration",
  },
];

function ProductBlock({
  product,
}: {
  product: (typeof morning)[0];
}) {
  return (
    <article className="rounded-3xl bg-muted/40 p-6 md:p-7">
      <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
      <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">{product.name}</h3>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-primary mb-1">Why we recommend it</dt>
          <dd className="text-muted-foreground leading-relaxed">{product.why}</dd>
        </div>
        <div>
          <dt className="text-primary mb-1">Who it is for</dt>
          <dd className="text-muted-foreground leading-relaxed">{product.who}</dd>
        </div>
        <div>
          <dt className="text-primary mb-1">How to use</dt>
          <dd className="text-muted-foreground leading-relaxed">{product.how}</dd>
        </div>
        <div>
          <dt className="text-primary mb-1">Programme compatibility</dt>
          <dd className="text-muted-foreground leading-relaxed">{product.programmes}</dd>
        </div>
      </dl>
    </article>
  );
}

export default function RecommendedSkincare() {
  useBreadcrumbSchema([
    { name: "Treatments", path: "/treatments" },
    { name: "Recommended Skincare", path: "/recommended-skincare" },
  ]);
  useSEO({
    title: "Recommended Skincare | Doctor's Home Care | The Oxford Wellness Doctor",
    description:
      "Curated clinical skincare recommendations from Dr Inga Taganova – designed to support personalised treatment programmes, not a generic online shop.",
    canonical: "https://www.theoxfordwellnessdoctor.com/recommended-skincare",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
        <FadeIn>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
            Recommended skincare
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            These are curated clinical recommendations to support your treatment journey – not a beauty storefront.
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-12">
            Products are suggested in the context of programmes and in-clinic care. Dr Inga will advise what is appropriate for you during consultation.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">Morning routine</h2>
          <div className="space-y-5 mb-16">
            {morning.map((p) => (
              <ProductBlock key={p.name} product={p} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">Evening routine</h2>
          <div className="space-y-5 mb-16">
            {evening.map((p) => (
              <ProductBlock key={p.name} product={p} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
            <h2 className="font-sans font-semibold text-2xl tracking-tight mb-3">
              Want a routine matched to your programme?
            </h2>
            <p className="text-primary-foreground/75 text-[15px] mb-6 max-w-xl">
              Begin with the Programme Finder, then confirm home care during your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/programme-finder">
                <Button className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium w-full sm:w-auto">
                  Find my programme
                </Button>
              </Link>
              <Link href="/how-we-help">
                <Button className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-7 h-11 text-sm w-full sm:w-auto">
                  How We Help
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
