import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import FadeIn from "@/components/animations/FadeIn";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "wegovy-vs-mounjaro-comparison",
    title: "Wegovy vs Mounjaro: Which Weight Loss Injection Is Right for You?",
    excerpt: "A detailed comparison of both GLP-1 medications - efficacy data, side effects, cost, and how Dr. Taganova decides which to prescribe.",
    category: "Medical Weight Loss",
    readTime: "8 min",
    href: "/blog/wegovy-vs-mounjaro-comparison",
  },
  {
    slug: "menopause-skin-changes",
    title: "How Menopause Affects Your Skin: What Your GP Won't Tell You",
    excerpt: "Menopause causes measurable changes to skin collagen, hydration and elasticity. Former gynaecologist Dr. Taganova explains what works.",
    category: "Menopause & Women's Health",
    readTime: "6 min",
    href: "/blog/menopause-skin-changes",
  },
  {
    slug: "profhilo-vs-dermal-fillers",
    title: "Profhilo vs. Dermal Fillers: Which Treatment Is Right for You?",
    excerpt: "Two very different treatments that are often confused. Dr. Taganova explains the difference and when to choose each.",
    category: "Skin Treatments",
    readTime: "6 min",
    href: "/blog/profhilo-vs-dermal-fillers",
  },
  {
    slug: "lip-filler-natural-results",
    title: "How to Get Natural-Looking Lip Fillers: A Doctor's Guide",
    excerpt: "The philosophy behind subtle, beautiful lip enhancement - and the red flags that tell you to walk away from a clinic.",
    category: "Lip Fillers",
    readTime: "5 min",
    href: "/blog/lip-filler-natural-results",
  },
  {
    slug: "morpheus8-results-timeline",
    title: "Morpheus8 Results: Day-by-Day Recovery and Timeline",
    excerpt: "What to expect in the days and weeks after Morpheus8 - with a realistic recovery timeline and tips for maximising results.",
    category: "Morpheus8",
    readTime: "5 min",
    href: "/blog/morpheus8-results-timeline",
  },
  {
    slug: "weight-gain-perimenopause",
    title: "Weight Gain in Perimenopause: Medical Solutions That Actually Work",
    excerpt: "Why the menopause transition makes weight management so difficult, and the evidence-based interventions that genuinely help.",
    category: "Menopause & Women's Health",
    readTime: "7 min",
    href: "/blog/weight-gain-perimenopause",
  },
  {
    slug: "choosing-aesthetics-clinic-oxford",
    title: "How to Choose an Aesthetics Clinic in Oxford: A Checklist",
    excerpt: "A practical checklist of credentials, red flags, and questions to ask - from a GMC doctor who knows what good looks like.",
    category: "Choosing a Clinic",
    readTime: "6 min",
    href: "/blog/choosing-aesthetics-clinic-oxford",
  },
  {
    slug: "aesthetic-treatments-over-50",
    title: "Best Aesthetic Treatments for Women Over 50: A Doctor's Guide",
    excerpt: "How skin changes after 50, what the menopause does to your face, and the treatments that work best for mature skin.",
    category: "Age-Appropriate Aesthetics",
    readTime: "6 min",
    href: "/blog/aesthetic-treatments-over-50",
  },
  {
    slug: "new-oxford-science-park-clinic",
    title: "Welcome to Our Oxford Clinic",
    excerpt: "Our clinic is located in Oxford at 3 Woodstock Rd - a professional medical environment providing expert women's health and aesthetic care with convenient access from all Oxford areas.",
    category: "Clinic News",
    readTime: "4 min",
    href: "/blog/new-oxford-science-park-clinic",
  },
];


export default function BlogIndex() {
  useBreadcrumbSchema([{ name: "Blog", path: "/blog" }]);
  useSEO({
    title: "Medical Aesthetics Blog Oxford | Expert Advice | The Oxford Wellness Doctor",
    description: "Expert advice on medical aesthetics, women's health and menopause from Dr. Inga Taganova. Evidence-based information from Oxford's trusted GMC doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/blog",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative bg-muted/30 text-foreground py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-background/95"></div>
        <FadeIn>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl mb-6 text-primary">Doctor's Notes</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base md:text-lg font-light">
              It's more than skin deep with our knowledge. Doctor's Notes is where we share expert advice, personal insights and guidance you can trust.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <nav className="text-xs text-muted-foreground flex gap-2 items-center" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Blog</span>
        </nav>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={post.slug}>
              <Link
                href={post.href}
                data-testid={`blog-card-${idx}`}
                className="block group"
              >
                <div className="relative bg-muted/20 aspect-[4/3] mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/60 group-hover:opacity-75 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-background text-foreground text-[10px] px-3 py-1.5 uppercase tracking-widest font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h2 className="font-serif text-xl text-primary leading-tight mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-light">
                  {post.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Author Bio */}
        <FadeIn>
          <div className="mt-20 py-12 border-t border-border">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">About the Author</p>
              <h2 className="font-serif text-2xl text-primary mb-4">Dr. Inga Taganova</h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                Dr. Taganova is a GMC-registered doctor (No. 4727817), former gynaecologist, experienced GP, and qualified aesthetic medicine practitioner. With over 20 years in women's health, she brings a depth of clinical knowledge to aesthetic medicine that is rarely found outside hospital settings. All articles on this blog are written personally by Dr. Taganova and reflect current evidence-based clinical practice.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Learn more about Dr. Taganova <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
