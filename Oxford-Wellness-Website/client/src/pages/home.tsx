import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import leadPractitioner from "@assets/dr-inga-taganova-gmc-doctor-oxford.webp";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import {
  ChevronDown, ChevronUp, Star, MapPin, Clock, Phone, ArrowRight, CheckCircle2, Users,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyChooseUs = [
  {
    number: "01",
    title: "Specialist Menopause Lead & Former Gynaecologist",
    desc: "Dr. Taganova serves as a specialist menopause lead with extensive experience in women's health. Her gynaecology background and specialist menopause training create truly integrated women's health and aesthetic care that no purely aesthetic clinic can offer.",
    detail: "Oxford's only aesthetic clinic led by a specialist menopause lead",
  },
  {
    number: "02",
    title: "GMC-Registered Doctor with 20+ Years Experience",
    desc: "Benefit from two decades of clinical expertise. Dr. Taganova brings advanced anatomical knowledge and complication management skills that only a seasoned physician can provide - underpinned by full GMC registration (No. 4727817).",
    detail: "Advanced medical training ensures your safety and exceptional results",
  },
  {
    number: "03",
    title: "Natural Enhancement in a Professional Setting",
    desc: "Our philosophy: enhancement, never transformation. Every treatment is personally performed by Dr. Taganova in the serene, discreet environment of Oxford - with complimentary parking and a calming, clinical atmosphere.",
    detail: "Sophisticated treatments that make you look like yourself - refreshed",
  },
];

const featuredTreatments = [
  {
    name: "Menopause Clinic",
    href: "/menopause-clinic-oxford",
    label: "Specialist Clinic",
    desc: "Comprehensive menopause care from specialist menopause lead Dr. Taganova - symptom management, treatment planning, and holistic women's health support.",
    highlight: true,
  },
  {
    name: "Votiva Forma V Vaginal Tightening",
    href: "/treatments/votiva-forma-v-oxford",
    label: "Women's Wellness",
    desc: "Non-surgical radiofrequency treatment for vaginal laxity, dryness, and intimate wellness - improves tone, tightness, and natural lubrication.",
    highlight: true,
  },
  {
    name: "Neauvia N Rose Injectable",
    href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
    label: "Women's Wellness",
    desc: "Intimate rejuvenation for dryness, discomfort, and confidence - addressing changes from menopause, childbirth, or aging.",
    highlight: true,
  },
  {
    name: "Perimenopause Support",
    href: "/perimenopause-oxford",
    label: "Early Intervention",
    desc: "Specialist assessment and management for women experiencing early menopause symptoms in their 40s - when symptoms are often most disruptive.",
  },
  {
    name: "Morpheus8",
    href: "/treatments/morpheus8-oxford",
    label: "Signature Treatment",
    desc: "Advanced radiofrequency microneedling for skin tightening, texture refinement, and collagen remodeling - face, neck, and body. Our most transformative treatment.",
    highlight: true,
  },
  {
    name: "Anti-Wrinkle Injections",
    href: "/treatments/anti-wrinkle-injections-oxford",
    label: "Medical Aesthetics",
    desc: "Soften forehead lines, frown lines, and crow's feet with precision muscle-relaxing injections by a GMC-registered doctor.",
  },
  {
    name: "Dermal Fillers",
    href: "/treatments/dermal-fillers-oxford",
    label: "Facial Rejuvenation",
    desc: "Restore lost volume and redefine facial contours with expert, anatomy-led filler placement by an ex-gynaecologist.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Summertown, Oxford",
    rating: 5,
    text: "Dr. Taganova is exceptional. She took so much time explaining everything to me and made me feel completely at ease. The results are exactly what I hoped for - natural and refreshed. I wouldn't go anywhere else.",
  },
  {
    name: "Rebecca T.",
    location: "Jericho, Oxford",
    rating: 5,
    text: "I came to see Dr. Taganova for menopause support and she was wonderful. Her background as a gynaecologist and menopause specialist shines through - she understood everything I was going through and created a comprehensive treatment plan. I feel like a different person.",
  },
  {
    name: "Claire H.",
    location: "Headington, Oxford",
    rating: 5,
    text: "Had Profhilo and anti-wrinkle injections here. The clinic is beautiful and Dr. Taganova is incredibly skilled and thorough. She's honest about what will and won't work, which I really appreciated. Brilliant experience.",
  },
];

const areasServed = [
  "Oxford City Centre", "Headington", "Cowley", "Jericho", "Summertown", "Rose Hill",
  "Blackbird Leys", "Iffley", "Kennington", "Abingdon", "Witney", "Kidlington", "Bicester",
];

const homeFaqs = [
  { q: "What treatments do you offer at The Oxford Wellness Doctor?", a: "We offer comprehensive medical aesthetics including anti-wrinkle injections, dermal fillers, lip fillers, Profhilo, Morpheus8, chemical peels, skin boosters, and excessive sweating treatment. Our specialist menopause clinic provides symptom assessment, perimenopause support, treatment planning, and women's wellness consultations. Dr. Taganova's background as a former gynaecologist and menopause specialist ensures truly integrated care." },
  { q: "Is Dr. Inga Taganova GMC registered?", a: "Yes. Dr. Inga Taganova holds full GMC registration - her number is 4727817. You can verify her registration at any time on the GMC's public register at gmcuk.org. She is also a registered GP and holds post-graduate qualifications in aesthetic medicine." },
  { q: "Do you offer free consultations?", a: "Yes - we offer a free initial consultation for aesthetic treatments, which is fully redeemable against your first treatment. For medical consultations (including the menopause clinic), an initial fee of £150 applies for a comprehensive 45-minute appointment." },
  { q: "How much do treatments cost?", a: "Our pricing is transparent and published on our pricing page. Anti-wrinkle injections start from £150 per area; Profhilo from £300 per session; Morpheus8 from £650; lip fillers from £200. Medical weight loss (Wegovy/Mounjaro) starts from £200 per month. Please see our full pricing page for a complete list." },
  { q: "Where are you located in Oxford?", a: "The Oxford Wellness Doctor is located in Oxford at Oxford OX2 6HA. We provide a discreet, professional medical environment with ample free parking, easily accessible from all Oxford areas." },
  { q: "What are your opening hours?", a: "We are open on Fridays from 4:00 PM to 8:00 PM, and on Saturdays from 9:00 AM to 1:00 PM. Appointments outside these hours may occasionally be available - please contact us to discuss." },
  { q: "Do you offer weekend appointments?", a: "Yes - we specifically offer Saturday morning appointments (9:00 AM to 1:00 PM), making the clinic accessible to patients who cannot attend during the week. Friday late afternoon and evening appointments are also available." },
  { q: "Can I book online?", a: "Yes. You can book online through our Glowday booking page, which shows real-time availability and allows you to book a consultation or treatment at a time that suits you. Alternatively, you can contact us directly by phone or email." },
  { q: "Do you offer payment plans?", a: "We do not currently offer payment plans or finance. Payment is taken at the time of treatment and we accept all major credit and debit cards. We aim to keep our pricing transparent with no hidden costs." },
  { q: "Are your treatments safe?", a: "Your safety is our absolute priority. Every treatment at The Oxford Wellness Doctor is performed by Dr. Taganova herself - a GMC-registered physician with over 20 years of clinical experience. We use only MHRA-approved products from established manufacturers, maintain emergency protocols, and keep hyaluronidase on-site for filler dissolution if ever needed." },
  { q: "What makes you different from other clinics?", a: "Several things set us apart: Dr. Taganova is a fully qualified doctor (GMC No. 4727817) with a unique background as a former gynaecologist and menopause specialist; we offer integrated medical and aesthetic care in a single clinic; our philosophy is always natural-looking enhancement; and we never pressure patients into treatments they don't need." },
  { q: "Do you treat menopause as well as aesthetics?", a: "Yes - our menopause clinic is our PRIMARY service. Dr. Taganova is a specialist menopause lead and brings over 20 years of women's health expertise. She provides comprehensive menopause assessments, perimenopause support, symptom management, and treatment planning. Aesthetic treatments are available as complementary services, particularly for menopausal skin changes." },
  { q: "Can men have treatments?", a: "Absolutely. While our clinic has a particular focus on women's health and the menopause, all aesthetic treatments are available to men. Anti-wrinkle injections, dermal fillers, Morpheus8, skin treatments, and medical weight loss are popular with male patients." },
  { q: "What areas of Oxford do you serve?", a: "We welcome patients from across Oxford and Oxfordshire, including Oxford city centre, Jericho, Summertown, Headington, Cowley, Rose Hill, Iffley, Abingdon, Witney, Kidlington, Bicester, and beyond. Our central Woodstock Road location is easily accessible with street parking available nearby." },
  { q: "How do I get to the clinic?", a: "The clinic is at 3 Woodstock Rd, Oxford OX2 6HA. Street parking is available on Woodstock Road and nearby streets. By car from Oxford city centre, head north on St Giles' and continue onto Woodstock Road. The clinic is approximately 5 minutes from Oxford city centre and 10 minutes from Headington." },
  { q: "Is parking available at the clinic?", a: "Yes - street parking is available on Woodstock Road and nearby streets. We recommend allowing a few extra minutes for parking if you're driving. The clinic is also easily accessible by bus, bike, or on foot from central Oxford." },
  { q: "Why is your clinic located on Woodstock Road?", a: "Our Woodstock Road location offers the perfect balance of accessibility and discretion. We're close to central Oxford yet away from the busiest high streets, providing a calm, professional environment for both aesthetic treatments and sensitive women's health consultations. The location is easily accessible by car, bus, bike, or on foot, with street parking available nearby." },
];

const recentPosts = [
  { title: "Wegovy vs Mounjaro: Which Weight Loss Injection Is Right for You?", category: "Medical Weight Loss", href: "/blog/wegovy-vs-mounjaro-comparison", excerpt: "A detailed clinical comparison of both GLP-1 medications - efficacy data, side effects, cost, and how Dr. Taganova decides which to prescribe." },
  { title: "How Menopause Affects Your Skin: What Your GP Won't Tell You", category: "Menopause & Women's Health", href: "/blog/menopause-skin-changes", excerpt: "Menopause causes measurable changes to skin collagen, hydration and elasticity. Former gynaecologist Dr. Taganova explains what actually works." },
  { title: "How to Choose an Aesthetics Clinic in Oxford: A Checklist", category: "Choosing a Clinic", href: "/blog/choosing-aesthetics-clinic-oxford", excerpt: "A practical checklist of credentials, red flags, and questions to ask - from a GMC doctor who knows what good looks like." },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border border border-border">
      {homeFaqs.map((faq, i) => (
        <div key={i}>
          <button
            data-testid={`home-faq-${i}`}
            className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 group"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="font-serif text-sm text-primary leading-snug group-hover:text-secondary transition-colors">
              {faq.q}
            </span>
            {openIdx === i
              ? <ChevronUp size={15} className="text-muted-foreground flex-shrink-0 mt-0.5" />
              : <ChevronDown size={15} className="text-muted-foreground flex-shrink-0 mt-0.5" />}
          </button>
          <AnimatePresence>
            {openIdx === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useSEO({
    title: "Women's Health & Medical Aesthetics Clinic Oxford | Dr. Inga Taganova",
    description: "Oxford's leading women's health & medical aesthetics clinic led by specialist menopause lead Dr. Taganova. Expert menopause care, intimate health, perimenopause support & aesthetic treatments. Book consultation.",
    canonical: "https://www.theoxfordwellnessdoctor.com/",
  });

  useEffect(() => {
    const existing = document.getElementById("home-faq-schema");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
    document.head.appendChild(script);

    const reviewSchema = document.createElement("script");
    reviewSchema.type = "application/ld+json";
    reviewSchema.id = "home-review-schema";
    reviewSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "The Oxford Wellness Doctor",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "47",
        bestRating: "5",
      },
    });
    document.head.appendChild(reviewSchema);

    return () => {
      document.getElementById("home-faq-schema")?.remove();
      document.getElementById("home-review-schema")?.remove();
    };
  }, []);

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Why Choose Us */}
      <section className="py-24 bg-[#FAFAF9]" data-testid="section-why-choose-us">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">A Different Approach</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary leading-snug">
              Why Patients Choose Dr. Taganova
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className="bg-white rounded-2xl p-10 h-full flex flex-col"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
                >
                  <span className="font-serif text-4xl text-primary/10 font-light mb-6 select-none">{item.number}</span>
                  <h3 className="font-serif text-xl md:text-2xl text-primary mb-5 leading-snug font-normal">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.75] mb-6 flex-1">
                    {item.desc}
                  </p>
                  <p className="text-xs text-primary/50 uppercase tracking-widest border-t border-border pt-4">
                    {item.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Signature Treatments */}
      <section className="py-24 bg-white" data-testid="section-treatments">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Expert Medical Care</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Signature Treatments</h2>
            <p className="text-[15px] text-muted-foreground mt-5 leading-[1.75] max-w-lg mx-auto">
              Every treatment is personally performed by Dr. Taganova, never delegated - ensuring you receive the highest standard of care.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((t, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link
                  href={t.href}
                  data-testid={`treatment-card-${i}`}
                  className={`group block rounded-2xl p-9 h-full flex flex-col transition-all duration-300 ${
                    t.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-[#FAFAF9]"
                  }`}
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <p className={`text-xs uppercase tracking-widest mb-4 ${t.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {t.label}
                  </p>
                  <h3 className={`font-serif text-xl mb-4 leading-snug font-normal flex-1 ${t.highlight ? "text-primary-foreground" : "text-primary"}`}>
                    {t.name}
                  </h3>
                  <p className={`text-[14px] leading-[1.75] mb-6 ${t.highlight ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                    {t.desc}
                  </p>
                  <span className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium ${t.highlight ? "text-primary-foreground/80" : "text-primary"}`}>
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-14">
            <Link
              href="/treatments"
              data-testid="link-view-all-treatments"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary px-8 py-4 hover:bg-primary hover:text-white transition-colors rounded-lg"
            >
              View All Treatments <ArrowRight size={12} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 4. Meet Dr. Taganova */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-doctor">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <p className="text-xs uppercase tracking-widest text-secondary mb-4">Your Practitioner</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Meet Dr. Inga Taganova
            </h2>
            <div className="space-y-2 mb-6">
              {[
                "GMC-Registered Doctor (No. 4727817)",
                "Former Consultant Gynaecologist",
                "Experienced GP - 20+ years in women's health",
                "Menopause Specialist & HRT Prescriber",
                "Qualified Aesthetic Medicine Practitioner",
              ].map((q) => (
                <div key={q} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/85">{q}</span>
                </div>
              ))}
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
              Dr. Taganova brings a depth of clinical expertise to aesthetic medicine that is genuinely rare. Her background as a qualified gynaecologist and experienced GP means she understands the hormonal, physiological, and psychological dimensions of women's health at a level that shapes every treatment she provides. Whether you are seeking aesthetic enhancement or menopause support - or both - you are in the care of a doctor who treats the whole person.
            </p>
            <blockquote className="font-serif text-lg text-primary-foreground/90 leading-relaxed border-l-2 border-secondary pl-4 mb-8">
              "My priority is to ensure every treatment is appropriate, safe, and right for you as an individual."
            </blockquote>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-secondary hover:text-secondary/80 transition-colors"
            >
              Learn More About Dr. Taganova <ArrowRight size={12} />
            </Link>
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl border border-secondary/20">
              <img
                src={leadPractitioner}
                alt="Dr. Inga Taganova GMC No. 4727817 - GP, former gynaecologist and menopause specialist at The Oxford Wellness Doctor, Oxford"
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="750"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-20 bg-white" data-testid="section-testimonials">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Patient Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 from 47 reviews</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  data-testid={`testimonial-${i}`}
                  className="border border-border p-6 flex flex-col"
                >
                  <StarRating n={t.rating} />
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-6 flex-grow">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-sm font-medium text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=The+Oxford+Wellness+Doctor+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Read More Reviews on Google <ArrowRight size={11} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 6 & 7. Location + Hours */}
      <section className="py-20 bg-muted/20" data-testid="section-location">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Find Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Located in Oxford</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <FadeIn>
              <div className="w-full aspect-video border border-border overflow-hidden">
                <iframe
                  title="The Oxford Wellness Doctor - 3 Woodstock Rd, Oxford"
                  src="https://www.google.com/maps?q=51.760189,-1.265923&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.15}>
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-secondary" />
                    <h3 className="font-serif text-lg text-primary">Address</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">3 Woodstock Rd</p>
                  <p className="text-sm text-muted-foreground">Oxford OX2 6HA</p>
                  <p className="text-xs text-muted-foreground mt-1">Street parking available nearby. Centrally located in Oxford, easily accessible from throughout the city.</p>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} className="text-secondary" />
                    <h3 className="font-serif text-lg text-primary">Opening Hours</h3>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { day: "Friday", hours: "4:00 PM – 8:00 PM" },
                      { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
                      { day: "Sunday – Thursday", hours: "Closed" },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between text-sm border-b border-border/50 pb-1.5">
                        <span className="text-muted-foreground">{row.day}</span>
                        <span className="text-primary font-medium">{row.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Need an appointment outside these hours? <a href="/contact" className="text-primary hover:underline">Contact us</a>.</p>
                </div>

                {/* Contact */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={16} className="text-secondary" />
                    <h3 className="font-serif text-lg text-primary">Contact</h3>
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+4407739309380" className="block text-sm text-muted-foreground hover:text-primary transition-colors">07739 309380</a>
                    <a href="mailto:info@theoxfordwellnessdoctor.com" className="block text-sm text-muted-foreground hover:text-primary transition-colors">info@theoxfordwellnessdoctor.com</a>
                  </div>
                </div>

                {/* Areas Served */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={16} className="text-secondary" />
                    <h3 className="font-serif text-lg text-primary">Areas We Serve</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {areasServed.map((area) => (
                      <span key={area} className="text-xs bg-white border border-border text-muted-foreground px-2.5 py-1">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 bg-white" data-testid="section-faq">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Frequently Asked Questions</h2>
          </FadeIn>
          <FadeIn>
            <HomeFAQ />
          </FadeIn>
        </div>
      </section>

      {/* 9. Latest Blog */}
      <section className="py-20 bg-muted/20" data-testid="section-blog">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Expert Insights</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Latest from Our Blog</h2>
            <p className="text-sm text-muted-foreground mt-4">
              Evidence-based articles on aesthetics, menopause, and women's health - written by Dr. Taganova.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link
                  href={post.href}
                  data-testid={`blog-preview-${i}`}
                  className="block border border-border bg-white hover:border-primary transition-all group p-6 h-full"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-serif text-base text-primary mt-2 mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
                    Read article <ArrowRight size={11} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary px-6 py-3"
            >
              View All Articles <ArrowRight size={12} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 10. Final CTA strip */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">Take the First Step</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Begin?</h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto text-sm mb-8 leading-relaxed">
            Book a free consultation with Dr. Taganova and take the first step towards looking and feeling your best - with a doctor who genuinely understands women's health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-testid="final-cta-book-btn"
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-8 uppercase tracking-widest text-sm"
              onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
            >
              Book Free Consultation
            </Button>
            <Button
              data-testid="final-cta-contact-btn"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 rounded-none px-8 uppercase tracking-widest text-sm w-full sm:w-auto"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
