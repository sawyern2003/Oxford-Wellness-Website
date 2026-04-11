import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Filter, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";

const categories = ["All", "Skincare", "Wellness", "Sun Protection", "Body", "Supplements"];

const products = [
  {
    id: 1,
    name: "Advanced Retinol Night Serum",
    brand: "SkinCeuticals",
    category: "Skincare",
    price: 98,
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller",
    description: "A medical-grade retinol serum that visibly reduces fine lines, wrinkles, and uneven skin tone overnight. Formulated with 0.3% pure retinol.",
    usage: "Apply 2–3 drops to cleansed skin each evening. Avoid the eye area. Always use SPF the following morning.",
    note: "Recommended by Dr Taganova for anti-ageing protocols.",
    image: null,
  },
  {
    id: 2,
    name: "Vitamin C Brightening Concentrate",
    brand: "SkinCeuticals",
    category: "Skincare",
    price: 165,
    rating: 4.8,
    reviews: 89,
    badge: "Doctor's Choice",
    description: "15% pure vitamin C with ferulic acid and vitamin E. Neutralises free radicals and visibly brightens the complexion over time.",
    usage: "Apply 4–5 drops to a dry face, neck, and chest each morning before moisturiser and sunscreen.",
    note: "Works synergistically with our Skin Booster treatments.",
    image: null,
  },
  {
    id: 3,
    name: "SPF 50+ Mineral Sunscreen",
    brand: "EltaMD",
    category: "Sun Protection",
    price: 42,
    rating: 4.7,
    reviews: 203,
    badge: null,
    description: "Broad-spectrum mineral UV protection with a lightweight, non-greasy finish suitable for all skin types including post-procedure skin.",
    usage: "Apply liberally to all exposed areas 15 minutes before sun exposure. Reapply every 2 hours.",
    note: "Essential post-treatment skincare - suitable immediately after most aesthetic procedures.",
    image: null,
  },
  {
    id: 4,
    name: "Hyaluronic Acid Hydrating Serum",
    brand: "Obagi",
    category: "Skincare",
    price: 72,
    rating: 4.8,
    reviews: 156,
    badge: null,
    description: "Multi-molecular weight hyaluronic acid complex that delivers deep hydration at multiple skin levels, plumping and restoring a dewy glow.",
    usage: "Apply to cleansed skin morning and evening before your moisturiser.",
    note: "Ideal for maintaining results between Profhilo and Skin Booster sessions.",
    image: null,
  },
  {
    id: 5,
    name: "Collagen Support Complex",
    brand: "Equi London",
    category: "Supplements",
    price: 65,
    rating: 4.6,
    reviews: 78,
    badge: "New",
    description: "Marine collagen peptides with vitamins C, biotin, and zinc. Supports skin elasticity, hair health, and joint comfort from within.",
    usage: "Dissolve one sachet in water or juice each morning.",
    note: "Pairs beautifully with our injectable collagen-stimulating treatments.",
    image: null,
  },
  {
    id: 6,
    name: "Exfoliating Enzyme Cleanser",
    brand: "IMAGE Skincare",
    category: "Skincare",
    price: 38,
    rating: 4.7,
    reviews: 112,
    badge: null,
    description: "Gentle fruit enzyme and AHA cleanser that removes dead skin cells and unclogs pores without stripping. Leaves skin smooth and radiant.",
    usage: "Massage onto damp skin for 30–60 seconds, then rinse. Use up to twice daily.",
    note: "A perfect daily cleanser for skin undergoing a professional treatment plan.",
    image: null,
  },
  {
    id: 7,
    name: "Hormone Balance Wellbeing Set",
    brand: "Balance Me",
    category: "Wellness",
    price: 85,
    rating: 4.5,
    reviews: 44,
    badge: "New",
    description: "A curated set of aromatherapy and topical wellness products designed to support women navigating perimenopause and menopause symptoms.",
    usage: "Full guidance included in box. Apply balm to pulse points and use oil in a warm bath or massage.",
    note: "Selected by Dr Taganova as part of her holistic women's wellness offering.",
    image: null,
  },
  {
    id: 8,
    name: "Nourishing Body Oil",
    brand: "Elemis",
    category: "Body",
    price: 55,
    rating: 4.8,
    reviews: 167,
    badge: null,
    description: "Luxurious blend of marula, rosehip, and sweet almond oils that soak instantly into skin, leaving it velvety soft without greasiness.",
    usage: "Apply to damp skin after showering. Massage in circular motions until absorbed.",
    note: "Complements our body contouring and skin tightening treatments.",
    image: null,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={star <= Math.floor(rating) ? "fill-secondary text-secondary" : "text-muted-foreground"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group bg-white border border-border flex flex-col"
        data-testid={`product-card-${product.id}`}
      >
        {/* Product Image Placeholder */}
        <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/5 to-secondary/10 overflow-hidden flex items-center justify-center">
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-secondary text-primary text-xs uppercase tracking-wider rounded-none px-3 py-1 font-medium">
                {product.badge}
              </Badge>
            </div>
          )}
          <div className="text-center px-6">
            <p className="font-serif text-primary/30 text-4xl mb-2">✦</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{product.brand}</p>
          </div>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.brand}</p>
          <h3 className="font-serif text-lg text-primary mb-2 leading-snug">{product.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={product.rating} />
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <span className="font-serif text-xl text-primary italic">£{product.price}</span>
            <div className="flex items-center gap-2">
              <button
                data-testid={`info-btn-${product.id}`}
                onClick={() => setShowDetail(true)}
                className="p-2 hover:text-secondary transition-colors text-muted-foreground"
                aria-label="Product details"
              >
                <Info size={16} />
              </button>
              <Button
                data-testid={`add-to-cart-${product.id}`}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-primary rounded-none px-4 uppercase tracking-wider text-xs transition-all duration-300"
                onClick={() => {
                  alert("Shopify integration coming soon - products will be purchasable once the store is live.");
                }}
              >
                <ShoppingBag size={13} className="mr-1.5" />
                Add to Bag
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      {showDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowDetail(false)}
          data-testid={`product-modal-${product.id}`}
        >
          <div
            className="bg-white max-w-lg w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              onClick={() => setShowDetail(false)}
              data-testid={`close-modal-${product.id}`}
            >
              <X size={20} />
            </button>
            {product.badge && (
              <Badge className="bg-secondary text-primary text-xs uppercase tracking-wider rounded-none px-3 mb-4 inline-block">
                {product.badge}
              </Badge>
            )}
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.brand}</p>
            <h2 className="font-serif text-2xl text-primary mb-1">{product.name}</h2>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
            </div>
            <p className="font-serif text-2xl italic text-primary mb-6">£{product.price}</p>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <p className="uppercase tracking-widest text-xs text-primary mb-1">About</p>
                <p>{product.description}</p>
              </div>
              <div>
                <p className="uppercase tracking-widest text-xs text-primary mb-1">How to Use</p>
                <p>{product.usage}</p>
              </div>
              <div className="bg-primary/5 border-l-2 border-secondary p-3">
                <p className="text-xs text-primary">{product.note}</p>
              </div>
            </div>
            <Button
              className="w-full mt-6 bg-primary text-primary-foreground hover:bg-secondary hover:text-primary rounded-none uppercase tracking-widest text-sm"
              onClick={() => {
                setShowDetail(false);
                alert("Shopify integration coming soon - products will be purchasable once the store is live.");
              }}
            >
              <ShoppingBag size={15} className="mr-2" />
              Add to Bag - £{product.price}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Shop() {
  useSEO({
    title: "Shop Medical-Grade Skincare | The Oxford Wellness Doctor",
    description: "Shop professional medical-grade skincare products recommended by Dr. Inga Taganova. Premium products to enhance your aesthetic treatments.",
    canonical: "https://www.theoxfordwellnessdoctor.com/shop",
  });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <span className="block text-secondary text-sm uppercase tracking-[0.2em] mb-4">
              Curated by Dr Taganova
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              The Wellness Shop
            </h1>
            <p className="text-lg font-light opacity-90 max-w-xl leading-relaxed">
              A personally curated selection of medical-grade skincare, supplements, and wellness products - chosen by Dr Taganova to complement your treatment plan and support your skin between visits.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-primary">
            <span className="font-medium">Our online store is coming soon.</span> Browse our curated selection below - full purchasing will be available shortly.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <section className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none">
            <Filter size={14} className="text-muted-foreground flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-8">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <FadeIn direction="up">
            <span className="block text-secondary text-sm uppercase tracking-[0.2em] mb-4">Our Promise</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Every product is personally vetted
            </h2>
            <p className="text-lg font-light opacity-90 leading-relaxed">
              Dr Taganova selects only products she would recommend to her own patients - medical-grade formulations with evidence-based ingredients, curated to support skin health and whole-body wellness.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
