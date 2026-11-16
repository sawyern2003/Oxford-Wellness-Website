import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import FadeIn from "@/components/animations/FadeIn";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  image?: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    slug: "menopause-skin-changes",
    title: "How Menopause Affects Your Skin: What Your GP Won't Tell You",
    excerpt: "Menopause causes measurable changes to skin collagen, hydration and elasticity. Formally trained gynaecologist Dr. Taganova explains what works.",
    category: "Menopause",
    readTime: "6 min",
    href: "/blog/menopause-skin-changes",
    image: "/blog-menopause-skin.webp",
    featured: true,
  },
  {
    slug: "perimenopause-symptoms-oxford",
    title: "Perimenopause Symptoms: What to Expect and When to Seek Help",
    excerpt: "Recognising perimenopause symptoms in your 40s. Dr Taganova explains the signs, timeline and when assessment helps.",
    category: "Menopause",
    readTime: "8 min",
    href: "/blog/perimenopause-symptoms-oxford",
    image: "/blog-perimenopause-symptoms.webp",
  },
  {
    slug: "hrt-consultation-what-to-expect",
    title: "What to Expect at an HRT Consultation",
    excerpt: "What happens at a menopause and HRT consultation with a specialist GP. Questions asked, assessment process, and how treatment decisions are made.",
    category: "Menopause",
    readTime: "7 min",
    href: "/blog/hrt-consultation-what-to-expect",
    image: "/blog-hrt-consultation.webp",
  },
  {
    slug: "weight-gain-perimenopause",
    title: "Weight Gain in Perimenopause: Medical Solutions That Actually Work",
    excerpt: "Why the menopause transition makes weight management so difficult, and the evidence-based interventions that genuinely help.",
    category: "Menopause",
    readTime: "7 min",
    href: "/blog/weight-gain-perimenopause",
    image: "/blog-perimenopause-weight.webp",
  },
  {
    slug: "intimate-health-changes-menopause",
    title: "Intimate Health Changes During Menopause: Symptoms and Treatment",
    excerpt: "Vaginal dryness, discomfort and intimate changes during menopause explained by a gynaecologist. Effective treatments that work.",
    category: "Intimate Health",
    readTime: "7 min",
    href: "/blog/intimate-health-changes-menopause",
    image: "/blog-intimate-health.webp",
  },
  {
    slug: "womens-health-check-oxford",
    title: "Women's Health Checks: What to Include and When",
    excerpt: "Comprehensive women's health checks explained by an Oxford GP. What screening women need at different life stages.",
    category: "Women's Health",
    readTime: "8 min",
    href: "/blog/womens-health-check-oxford",
    image: "/blog-womens-health.webp",
  },
  {
    slug: "longevity-medicine-for-women",
    title: "Longevity Medicine for Women: Healthy Ageing Beyond Fifty",
    excerpt: "Evidence-based longevity strategies for women over 50. Hormone optimisation, metabolic health, and preventive care for healthspan.",
    category: "Longevity",
    readTime: "9 min",
    href: "/blog/longevity-medicine-for-women",
    image: "/blog-longevity.webp",
  },
  {
    slug: "anti-wrinkle-injections-oxford",
    title: "Anti-Wrinkle Injections Explained: What They Treat and What to Expect",
    excerpt: "Anti-wrinkle treatment explained by an Oxford GP. How they work, what they treat, results timeline, and natural-looking outcomes.",
    category: "Skin",
    readTime: "8 min",
    href: "/blog/anti-wrinkle-injections-oxford",
    image: "/blog-anti-wrinkle.webp",
  },
  {
    slug: "profhilo-vs-dermal-fillers",
    title: "Profhilo vs. Dermal Fillers: Which Treatment Is Right for You?",
    excerpt: "Two very different treatments that are often confused. Dr. Taganova explains the difference and when to choose each.",
    category: "Skin",
    readTime: "6 min",
    href: "/blog/profhilo-vs-dermal-fillers",
    image: "/blog-profhilo-fillers.webp",
  },
  {
    slug: "postpartum-recovery-oxford",
    title: "Postpartum Recovery: Body Confidence and Intimate Health After Childbirth",
    excerpt: "Postpartum recovery support from an Oxford gynaecologist and GP. Body changes after childbirth and evidence-based treatments.",
    category: "Women's Health",
    readTime: "8 min",
    href: "/blog/postpartum-recovery-oxford",
    image: "/blog-postpartum.webp",
  },
  {
    slug: "lip-filler-natural-results",
    title: "How to Get Natural-Looking Lip Fillers: A Doctor's Guide",
    excerpt: "The philosophy behind subtle, beautiful lip enhancement - and the red flags that tell you to walk away from a clinic.",
    category: "Skin",
    readTime: "5 min",
    href: "/blog/lip-filler-natural-results",
    image: "/blog-lip-filler.webp",
  },
  {
    slug: "morpheus8-results-timeline",
    title: "Morpheus8 Results: Day-by-Day Recovery and Timeline",
    excerpt: "What to expect in the days and weeks after Morpheus8 - with a realistic recovery timeline and tips for maximising results.",
    category: "Skin",
    readTime: "5 min",
    href: "/blog/morpheus8-results-timeline",
    image: "/blog-morpheus8.webp",
  },
  {
    slug: "jaw-slimming-treatment-oxford",
    title: "Jaw Slimming and Teeth Grinding Treatment",
    excerpt: "Anti-wrinkle treatment for masseter reduction and teeth grinding. How jaw slimming works, results, and suitability.",
    category: "Skin",
    readTime: "7 min",
    href: "/blog/jaw-slimming-treatment-oxford",
    image: "/blog-jaw-treatment.webp",
  },
  {
    slug: "excessive-sweating-treatment-oxford",
    title: "Excessive Sweating Treatment: How Anti-Wrinkle Injections Work",
    excerpt: "Treatment for excessive underarm sweating in Oxford. How anti-wrinkle injections stop hyperhidrosis and what to expect.",
    category: "Skin",
    readTime: "6 min",
    href: "/blog/excessive-sweating-treatment-oxford",
    image: "/blog-sweating-treatment.webp",
  },
  {
    slug: "chemical-peels-oxford",
    title: "Chemical Peels for Skin Texture and Pigmentation",
    excerpt: "Medical-grade chemical peels explained. How peels improve skin texture, pigmentation and fine lines, and what to expect during recovery.",
    category: "Skin",
    readTime: "7 min",
    href: "/blog/chemical-peels-oxford",
    image: "/blog-chemical-peels.webp",
  },
  {
    slug: "lumecca-ipl-oxford",
    title: "Lumecca IPL for Pigmentation and Redness",
    excerpt: "Intense pulsed light treatment for sun damage, pigmentation, redness and broken capillaries. How IPL works and what results to expect.",
    category: "Skin",
    readTime: "7 min",
    href: "/blog/lumecca-ipl-oxford",
    image: "/blog-lumecca-ipl.webp",
  },
  {
    slug: "forma-skin-tightening-oxford",
    title: "Forma Skin Tightening: Non-Surgical Face Lift",
    excerpt: "Radiofrequency skin tightening for facial laxity and jowls. How Forma works for non-surgical facial rejuvenation.",
    category: "Skin",
    readTime: "7 min",
    href: "/blog/forma-skin-tightening-oxford",
    image: "/blog-forma.webp",
  },
  {
    slug: "inmode-fx-body-contouring-oxford",
    title: "InMode FX for Body Skin Tightening and Cellulite",
    excerpt: "Radiofrequency body treatment for loose skin on abdomen, arms and thighs. How FX improves cellulite and skin quality.",
    category: "Skin",
    readTime: "7 min",
    href: "/blog/inmode-fx-body-contouring-oxford",
    image: "/blog-inmode-fx.webp",
  },
  {
    slug: "choosing-aesthetics-clinic-oxford",
    title: "How to Choose an Aesthetics Clinic in Oxford: A Checklist",
    excerpt: "A practical checklist of credentials, red flags, and questions to ask - from a GMC doctor who knows what good looks like.",
    category: "Women's Health",
    readTime: "6 min",
    href: "/blog/choosing-aesthetics-clinic-oxford",
    image: "/blog-choosing-clinic.webp",
  },
  {
    slug: "aesthetic-treatments-over-50",
    title: "Best Aesthetic Treatments for Women Over 50: A Doctor's Guide",
    excerpt: "How skin changes after 50, what the menopause does to your face, and the treatments that work best for mature skin.",
    category: "Longevity",
    readTime: "6 min",
    href: "/blog/aesthetic-treatments-over-50",
    image: "/blog-over-50.webp",
  },
];

const categories = ["All", "Menopause", "Women's Health", "Intimate Health", "Longevity", "Skin"];


export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useBreadcrumbSchema([{ name: "Blog", path: "/blog" }]);
  useSEO({
    title: "Medical Aesthetics Blog Oxford | Expert Advice | The Oxford Wellness Doctor",
    description: "Expert advice on medical aesthetics, women's health and menopause from Dr. Inga Taganova. Evidence-based information from Oxford's trusted GMC doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/blog",
  });

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => p !== featuredPost);
  
  const filteredPosts = selectedCategory === "All" 
    ? regularPosts 
    : regularPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-28 pb-12 px-6">
        <FadeIn>
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">The Journal</p>
            <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground tracking-tight leading-[1.1]">
              Doctor&apos;s Notes
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-base">
              Expert advice and calm guidance from Dr Inga Taganova. Evidence-based information on women&apos;s health, menopause and aesthetic treatments in Oxford.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="text-xs text-muted-foreground flex gap-2 items-center" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Blog</span>
        </nav>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <FadeIn>
          <Link href={featuredPost.href} className="group block">
            <div className="relative overflow-hidden rounded-3xl bg-muted/40 aspect-[21/9] mb-6">
              {featuredPost.image ? (
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-muted/60 to-muted/80"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <span className="inline-block bg-white/95 text-foreground text-[10px] px-3 py-1.5 rounded-full font-medium mb-4 uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-tight leading-tight max-w-4xl group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <FadeIn>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <FadeIn key={post.slug}>
              <Link
                href={post.href}
                data-testid={`blog-card-${idx}`}
                className="hover-card block group"
              >
                <div className="relative bg-muted/40 aspect-[4/3] mb-5 overflow-hidden rounded-3xl">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/60 group-hover:opacity-75 transition-opacity"></div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 text-foreground text-[10px] px-3 py-1.5 rounded-full font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h2 className="font-serif font-normal text-2xl text-foreground tracking-tight leading-tight mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Author Bio */}
        <FadeIn>
          <div className="mt-20 rounded-3xl bg-muted/30 p-8 md:p-12 border border-border/50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">About the author</p>
              <h2 className="font-serif font-normal text-3xl text-foreground tracking-tight mb-4">Dr Inga Taganova</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Dr Taganova is a GMC-registered doctor, formally trained gynaecologist, experienced GP, and qualified aesthetic medicine practitioner. With over 20 years in women&apos;s health, she brings a depth of clinical knowledge to aesthetic medicine that is rarely found outside hospital settings. All articles are written personally by Dr Taganova and reflect current evidence-based clinical practice.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors font-medium"
              >
                Learn more about Dr Taganova <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
