import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const nextSteps = [
  {
    step: "01",
    title: "Check Your Inbox",
    desc: "A confirmation of your enquiry has been sent to your email address. Please check your spam/junk folder if you don't see it within a few minutes.",
  },
  {
    step: "02",
    title: "We'll Be in Touch",
    desc: "Dr. Taganova or her team will respond to your enquiry within 24 hours during clinic days (Friday and Saturday).",
  },
  {
    step: "03",
    title: "Your Consultation",
    desc: "At your initial consultation, Dr. Taganova will discuss your goals, medical history, and the most appropriate treatment options for you - with no obligation.",
  },
];

const suggestedPosts = [
  {
    title: "How to Choose an Aesthetics Clinic in Oxford",
    href: "/blog/choosing-aesthetics-clinic-oxford",
    category: "Choosing a Clinic",
  },
  {
    title: "Profhilo vs. Dermal Fillers: Which Is Right for You?",
    href: "/blog/profhilo-vs-dermal-fillers",
    category: "Skin Treatments",
  },
  {
    title: "How Menopause Affects Your Skin",
    href: "/blog/menopause-skin-changes",
    category: "Women's Health",
  },
];

export default function ThankYou() {
  useSEO({
    title: "Thank You for Your Enquiry | The Oxford Wellness Doctor",
    description: "Thank you for contacting The Oxford Wellness Doctor. We will be in touch shortly to arrange your consultation with Dr. Inga Taganova in Oxford.",
  });

  return (
    <div className="min-h-screen pt-28 bg-white">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <CheckCircle className="w-14 h-14 text-secondary mx-auto mb-6" />
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">Enquiry received</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-6">Thank You</h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Your message has been received. Dr Taganova&apos;s team will be in touch with you shortly. We look forward to welcoming you to The Oxford Wellness Doctor.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">Your journey</p>
            <h2 className="font-sans font-semibold text-3xl text-foreground tracking-tight">What happens next</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {nextSteps.map((s) => (
              <div key={s.step} className="bg-muted/40 rounded-3xl p-7">
                <span className="font-sans font-semibold text-3xl text-secondary/40 block mb-4">{s.step}</span>
                <h3 className="font-sans font-semibold text-lg text-foreground tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="mx-auto text-secondary mb-3" size={20} />
              <h3 className="font-sans font-semibold text-sm text-foreground mb-1">Location</h3>
              <p className="text-xs text-muted-foreground">Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ</p>
            </div>
            <div>
              <Phone className="mx-auto text-secondary mb-3" size={20} />
              <h3 className="font-sans font-semibold text-sm text-foreground mb-1">Phone</h3>
              <a href="tel:+4407739309380" className="text-xs text-muted-foreground hover:text-primary transition-colors">07739 309380</a>
            </div>
            <div>
              <Clock className="mx-auto text-secondary mb-3" size={20} />
              <h3 className="font-sans font-semibold text-sm text-foreground mb-1">Clinic hours</h3>
              <p className="text-xs text-muted-foreground">Friday 4pm–8pm · Saturday 9am–1pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">Expert insights</p>
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">Read while you wait</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {suggestedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                data-testid={`thankyou-post-${post.href}`}
                className="bg-muted/40 rounded-3xl p-6 block group transition-colors hover:bg-muted/60"
              >
                <span className="text-[10px] text-muted-foreground font-medium">{post.category}</span>
                <h3 className="font-sans font-semibold text-base text-foreground mt-2 leading-snug group-hover:text-secondary transition-colors">{post.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm text-secondary mt-4 font-medium">
                  Read article <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-primary-foreground text-center">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary-foreground/60 mb-4">Or book directly</p>
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-6">Book online via Glowday</h2>
        <Button
          className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 h-11 text-sm font-medium"
          onClick={() => window.location.assign("/book")}
          data-testid="thankyou-book-btn"
        >
          Book consultation online
        </Button>
      </section>
    </div>
  );
}
