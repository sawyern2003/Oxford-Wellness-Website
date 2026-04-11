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
    title: "What to Expect from Your First Botox Appointment",
    href: "/blog/botox-first-time-guide",
    category: "Aesthetics",
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
    <div className="min-h-screen pt-24 bg-muted/20">
      {/* Confirmation hero */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Enquiry Received</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">Thank You</h1>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Your message has been received. Dr. Taganova's team will be in touch with you shortly. We look forward to welcoming you to The Oxford Wellness Doctor.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Your Journey</p>
            <h2 className="font-serif text-3xl text-primary">What Happens Next</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((s) => (
              <div key={s.step} className="bg-white border border-border p-8">
                <span className="font-serif text-4xl text-primary/10 block mb-4">{s.step}</span>
                <h3 className="font-serif text-lg text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic details */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="mx-auto text-secondary mb-3" size={20} />
              <h3 className="font-serif text-sm text-primary mb-1">Location</h3>
              <p className="text-xs text-muted-foreground">3 Woodstock Rd, Oxford OX2 6HA</p>
            </div>
            <div>
              <Phone className="mx-auto text-secondary mb-3" size={20} />
              <h3 className="font-serif text-sm text-primary mb-1">Phone</h3>
              <a href="tel:+4407739309380" className="text-xs text-muted-foreground hover:text-primary transition-colors">07739 309380</a>
            </div>
            <div>
              <Clock className="mx-auto text-secondary mb-3" size={20} />
              <h3 className="font-serif text-sm text-primary mb-1">Clinic Hours</h3>
              <p className="text-xs text-muted-foreground">Friday 4pm–8pm · Saturday 9am–1pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Read while you wait */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Expert Insights</p>
            <h2 className="font-serif text-2xl text-primary">Read While You Wait</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                data-testid={`thankyou-post-${post.href}`}
                className="bg-white border border-border hover:border-primary p-6 block group transition-all"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
                <h3 className="font-serif text-base text-primary mt-2 leading-snug group-hover:text-secondary transition-colors">{post.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-4 group-hover:text-primary transition-colors uppercase tracking-wider">
                  Read article <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground text-center">
        <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">Or Book Directly</p>
        <h2 className="font-serif text-2xl mb-6">Book Online via Glowday</h2>
        <Button
          className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-8 py-6 uppercase tracking-widest text-sm"
          onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
          data-testid="thankyou-book-btn"
        >
          Book Consultation Online
        </Button>
      </section>
    </div>
  );
}
