import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import TreatmentModal from "@/components/services/TreatmentModal";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

const categories = ["Women's Health", "Medical Aesthetics", "Regenerative Medicine"];

// href = dedicated sub-page; omit href = opens detail modal
const servicesData = [
  {
    category: "Women's Health",
    seoTitle: "Women's Health & Menopause Services in Oxford",
    seoDescription: "Specialist women's health care from menopause lead Dr. Inga Taganova - menopause clinic, perimenopause support, intimate health, and women's wellness in Oxford.",
    faqs: [
      {
        q: "What makes Dr. Taganova qualified as a menopause specialist?",
        a: "Dr. Taganova is a GMC-registered GP, former gynaecologist, and specialist menopause lead. She has over 20 years of experience in women's health and holds specialist menopause qualifications. Her background uniquely combines gynecological training, general practice experience, and aesthetic medicine expertise."
      },
      {
        q: "Do you prescribe HRT at your Oxford clinic?",
        a: "While we do not currently prescribe HRT at this clinic, Dr. Taganova provides comprehensive menopause assessments and can refer you to appropriate HRT prescribers if hormone therapy is clinically indicated. Her expertise as a former gynaecologist and specialist menopause lead means she can thoroughly assess your suitability for HRT and provide specialist referrals."
      },
      {
        q: "What is perimenopause and when should I seek support?",
        a: "Perimenopause is the transition phase before menopause, typically starting in your 40s. If you're experiencing irregular periods, hot flashes, mood changes, sleep disruption, or other symptoms affecting your quality of life, Dr. Taganova can help - even before your periods have stopped."
      }
    ],
    items: [
      {
        name: "Menopause Clinic Consultation",
        price: "£150",
        href: "/menopause-clinic-oxford",
        desc: "Comprehensive 45-minute menopause assessment with specialist menopause lead Dr. Taganova - symptom evaluation, treatment planning, and holistic support.",
        details: {
          involves: "Full menopause/perimenopause assessment, symptom review, medical history, and personalized treatment plan.",
          idealCandidate: "Women experiencing menopausal symptoms or entering perimenopause who want specialist-led care from a former gynaecologist.",
          duration: "45 minutes.",
          expectations: "Clear understanding of your symptoms, treatment options, and ongoing management plan."
        }
      },
      {
        name: "Neauvia N Rose Intimate Rejuvenation",
        price: "£350",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
        desc: "Medical-grade hyaluronic acid treatment for vaginal dryness, discomfort, and intimate wellness - particularly effective for menopausal changes.",
        details: {
          involves: "Injectable treatment using Neauvia Organic Rose, a hyaluronic acid filler designed specifically for intimate health. It corrects lipoatrophy and rehydrates the tissue.",
          idealCandidate: "Women experiencing dryness, irritation, or loss of volume in the intimate area, often due to menopause or postpartum changes.",
          duration: "30–45 minutes.",
          expectations: "Immediate improvement in hydration and comfort. Minimal downtime, though sexual abstinence may be recommended for a few days."
        }
      },
      {
        name: "Votiva Forma V Vaginal Tightening",
        price: "£400 per session / £1,050 course of 3",
        href: "/treatments/votiva-forma-v-oxford",
        desc: "Non-surgical radiofrequency treatment for vaginal laxity, dryness, and intimate wellness - improves tone, tightness, and natural lubrication.",
        details: {
          involves: "Non-invasive radiofrequency treatment that gently heats vaginal tissue to stimulate collagen production and tissue remodeling. Comfortable, no anesthesia required.",
          idealCandidate: "Women experiencing vaginal laxity post-childbirth, menopausal dryness, or reduced sensation - seeking non-surgical vaginal rejuvenation.",
          duration: "20-30 minutes per session. Course of 3 treatments recommended.",
          expectations: "Progressive improvement in vaginal tone, tightness, lubrication, and comfort over 8-12 weeks. Results last 12-18 months."
        }
      },
      {
        name: "Combined Menopause & Skin Consultation",
        price: "£200",
        desc: "Integrated consultation addressing both menopausal symptoms and aesthetic skin concerns - the perfect option for women experiencing hormonal skin changes.",
        details: {
          involves: "Comprehensive assessment of menopausal symptoms plus evaluation of skin concerns (aging, dryness, loss of elasticity) with integrated treatment recommendations.",
          idealCandidate: "Women in perimenopause or menopause noticing skin changes alongside other symptoms who want a holistic approach.",
          duration: "60 minutes.",
          expectations: "Complete picture of how hormonal changes affect your skin and body, with a coordinated treatment plan addressing both."
        }
      }
    ]
  },
  {
    category: "Wellness",
    seoTitle: "Wellness Treatments in Oxford",
    seoDescription: "Dr Taganova offers a range of holistic wellness treatments in Oxford - from vitamin injections to intimate health care and medical weight loss - tailored specifically for women.",
    faqs: [
      {
        q: "Are wellness treatments in Oxford suitable for women going through menopause?",
        a: "Absolutely. Dr Taganova is a menopause lead and women's wellness specialist. Many of our wellness treatments, including intimate rejuvenation and B12 injections, are specifically chosen to address the challenges of perimenopause and menopause."
      },
      {
        q: "How discreet is The Oxford Wellness Doctor?",
        a: "Discretion is at the heart of everything we do. Our Oxford clinic is a private, calm environment set within a professional medical hub. All consultations are confidential and our approach is always respectful and non-judgemental."
      },
      {
        q: "Do I need a GP referral to access wellness treatments in Oxford?",
        a: "No referral is needed. You can book directly via Glowday or enquire through our contact page. Dr Taganova will conduct a thorough health assessment before recommending any treatment."
      }
    ],
    items: [
      {
        name: "Neauvia N Rose Intimate Area Rejuvenation",
        price: "£350",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
        desc: "A regenerative injectable treatment that restores hydration, firmness, and comfort to the intimate area.",
        details: {
          involves: "Injectable treatment using Neauvia Organic Rose, a hyaluronic acid filler designed specifically for intimate health. It corrects lipoatrophy and rehydrates the tissue.",
          idealCandidate: "Women experiencing dryness, irritation, or loss of volume in the intimate area, often due to menopause or postpartum changes.",
          duration: "30–45 minutes.",
          expectations: "Immediate improvement in hydration and comfort. Minimal downtime, though sexual abstinence may be recommended for a few days."
        }
      },
      {
        name: "Vitamin B12 Injection",
        price: "£35",
        href: "/treatments/vitamin-b12-injection-oxford",
        desc: "A quick energy-boosting injection that supports metabolism, immunity, mood balance, and overall wellbeing.",
        details: {
          involves: "A quick intramuscular injection of Vitamin B12 (Hydroxocobalamin) to bypass the digestive system for maximum absorption.",
          idealCandidate: "Anyone feeling fatigued, lethargic, or looking to support their immune system and metabolism.",
          duration: "10–15 minutes.",
          expectations: "Boost in energy levels and mental clarity often felt within 24–48 hours. Monthly maintenance is often recommended."
        }
      },
      {
        name: "Medical Weight Loss Consultation",
        price: "£50",
        desc: "A specialist-led consultation to assess your health, weight goals, and suitability for safe, effective medical weight-loss treatment.",
        href: "/treatments/medical-weight-loss-oxford",
        details: {
          involves: "Comprehensive health assessment, BMI check, and discussion of medical weight loss options (such as GLP-1 analogues) if appropriate.",
          idealCandidate: "Individuals with a BMI over 30 (or over 27 with co-morbidities) struggling to lose weight through diet and exercise alone.",
          duration: "45 minutes.",
          expectations: "A personalized weight management plan. Prescriptions are provided only if clinically appropriate and safe."
        }
      },
      {
        name: "Excessive Sweating Treatment",
        price: "£500",
        desc: "A targeted injectable treatment to effectively reduce excessive sweating (hyperhidrosis) and restore confidence.",
        href: "/treatments/excessive-sweating-treatment-oxford",
        details: {
          involves: "Small injections of botulinum toxin into the underarms (or other affected areas) to block the nerve signals that stimulate sweat glands.",
          idealCandidate: "Those suffering from hyperhidrosis (excessive sweating) that interferes with daily life or clothing choices.",
          duration: "30 minutes.",
          expectations: "Significant reduction in sweating within 2 weeks, with results typically lasting 4–6 months."
        }
      },
      {
        name: "Medical Form Completion",
        price: "£50",
        href: "/treatments/medical-form-completion-oxford",
        desc: "Professional assistance with medical forms and certification requirements by a GMC-registered doctor.",
        details: {
          involves: "Review and signing of medical forms for camp americas, adoption, driving licenses, etc., by a registered GP.",
          idealCandidate: "Anyone requiring a doctor's signature or medical verification for official documents.",
          duration: "30 minutes.",
          expectations: "Accurate and timely completion of necessary medical paperwork."
        }
      }
    ]
  },
  {
    category: "Regenerative Medicine",
    seoTitle: "Regenerative Medicine & Skin Rejuvenation in Oxford",
    seoDescription: "From polynucleotide skin boosters to Morpheus8 and IPL, our Oxford clinic offers the latest evidence-based regenerative treatments to restore and renew your skin from within.",
    faqs: [
      {
        q: "What is regenerative medicine and how does it differ from traditional aesthetics?",
        a: "Regenerative medicine works by stimulating your body's own repair mechanisms - rather than masking signs of ageing, treatments like polynucleotide injections and Morpheus8 encourage your skin to produce more collagen and repair tissue naturally, for results that look and feel genuinely yours."
      },
      {
        q: "How many sessions of Morpheus8 will I need in Oxford?",
        a: "Most patients achieve excellent results with 1–3 sessions, spaced 4–6 weeks apart. Dr Taganova will assess your skin during consultation and create a bespoke treatment plan suited to your goals and skin type."
      },
      {
        q: "Is there downtime after regenerative treatments?",
        a: "It depends on the treatment. Forma and skin booster treatments have zero downtime. Morpheus8 typically results in 1–3 days of redness and mild swelling. Dr Taganova will advise you fully during your pre-treatment consultation."
      }
    ],
    items: [
      {
        name: "Polynucleotide Skin Boosters",
        price: "£350",
        desc: "Regenerative injectables that repair skin at a cellular level to improve firmness, hydration, and overall skin quality.",
        href: "/treatments/skin-boosters-oxford",
        details: {
          involves: "Injection of filtered DNA fractions (polynucleotides) that stimulate fibroblasts to produce collagen and elastin, repairing tissue.",
          idealCandidate: "Patients looking to improve skin quality, reduce dark circles, or treat crepey skin without adding artificial volume.",
          duration: "30–45 minutes.",
          expectations: "Gradual improvement in skin quality over a course of 3–4 treatments. Results are natural and restorative."
        }
      },
      {
        name: "Morpheus8 - Skin Tightening & Remodelling",
        price: "from £300",
        desc: "A cutting-edge treatment combining microneedling with radiofrequency energy to tighten skin, smooth texture, and contour the face and body.",
        href: "/treatments/morpheus8-oxford",
        details: {
          involves: "Microneedles penetrate the skin and deliver radiofrequency energy deep into the dermis to remodel collagen and coagulate fat.",
          idealCandidate: "Those seeking non-surgical skin tightening, lifting, and texture improvement (acne scars, fine lines).",
          duration: "60–90 minutes (including numbing time).",
          expectations: "Redness and downtime for 1–3 days. Results develop over 3 months as new collagen forms."
        }
      },
      {
        name: "Forma Facelift",
        price: "£150",
        href: "/treatments/forma-facelift-oxford",
        desc: "A non-surgical facelift that uses radiofrequency to lift, tighten, and smooth the face - restoring a youthful, contoured appearance with zero downtime.",
        details: {
          involves: "Non-invasive bipolar radiofrequency energy gently heats the skin to stimulate collagen production and immediate contraction.",
          idealCandidate: "Anyone wanting a 'red carpet' lift and glow with zero downtime. Great for event preparation.",
          duration: "45 minutes.",
          expectations: "Immediate tightening and radiance. A course of 6 treatments is recommended for long-lasting results."
        }
      },
      {
        name: "Forma Plus - Body Contouring",
        price: "£500",
        href: "/treatments/forma-plus-body-contouring-oxford",
        desc: "A non-invasive radiofrequency treatment that smooths, firms, and tightens loose skin on the body by stimulating deep collagen production.",
        details: {
          involves: "Similar to the facial treatment but using a larger handpiece to target body areas like knees, arms, or abdomen.",
          idealCandidate: "Individuals with mild skin laxity on the body looking for toning and tightening without surgery.",
          duration: "30–60 minutes.",
          expectations: "Smoother, tighter skin over a course of treatments. No downtime."
        }
      },
      {
        name: "InMode FX - Skin Tightening & Cellulite",
        price: "£150",
        href: "/treatments/inmode-fx-skin-tightening-oxford",
        desc: "A non-invasive body contouring treatment using radiofrequency energy to reduce fat, smooth cellulite, and firm loose skin.",
        details: {
          involves: "Combination of radiofrequency energy, deep tissue heating, and suction coupled negative pressure to target fat cells.",
          idealCandidate: "Those with stubborn pockets of fat or cellulite who want contouring and smoothing.",
          duration: "30–60 minutes.",
          expectations: "Reduction in fat and improvement in cellulite appearance. Weekly sessions recommended for 6–8 weeks."
        }
      },
      {
        name: "Lumecca IPL - Intense Pulsed Light",
        price: "from £80",
        href: "/treatments/lumecca-ipl-oxford",
        desc: "A powerful IPL treatment that targets pigmentation, sun damage, rosacea, and vascular lesions for clearer, rejuvenated skin.",
        details: {
          involves: "High-peak power light pulses target melanin (pigment) and haemoglobin (redness) in the skin.",
          idealCandidate: "Patients with sun spots, age spots, rosacea, or thread veins looking for a clearer complexion.",
          duration: "30 minutes.",
          expectations: "Pigment darkens and flakes off over a week. Vascular lesions fade. Skin looks brighter and clearer."
        }
      }
    ]
  },
  {
    category: "Medical Aesthetics",
    seoTitle: "Medical Aesthetic Treatments in Oxford",
    seoDescription: "Anti-wrinkle injections, lip filler, dermal filler and chemical peels delivered by a GMC-registered doctor in Oxford. Natural results, medical precision, and complete discretion.",
    faqs: [
      {
        q: "Is it safe to have anti-wrinkle injections or lip filler in Oxford?",
        a: "When performed by a GMC-registered medical doctor, aesthetic injectables are very safe. Dr Taganova has extensive clinical training and uses only licensed, medical-grade products. She always prioritises your health and safety above any cosmetic result."
      },
      {
        q: "How long do anti-wrinkle injections last?",
        a: "Results from anti-wrinkle injections typically last between 3 and 4 months. With regular, consistent treatment over time, results can last longer as the targeted muscles become trained to relax."
      },
      {
        q: "Will lip filler look natural?",
        a: "Dr Taganova's philosophy is that the best aesthetic results are the ones that whisper, not shout. She uses a conservative, patient-led approach to lip enhancement, focusing on hydration, symmetry, and subtle definition rather than excessive volume."
      },
      {
        q: "Can I combine aesthetic treatments in one visit at your Oxford clinic?",
        a: "Yes, in many cases treatments can be combined in a single session. Dr Taganova will advise you on the most suitable combination and sequencing during your consultation to ensure both safety and optimal results."
      }
    ],
    items: [
      {
        name: "Anti-Wrinkle Injections",
        price: "from £190",
        desc: "Smooth fine lines and prevent wrinkles with fast, targeted muscle-relaxing injections - 1 area from £190, 2 areas £250, 3 areas £300.",
        href: "/treatments/anti-wrinkle-injections-oxford",
        details: {
          involves: "Small injections of botulinum toxin to relax specific facial muscles that cause dynamic wrinkles.",
          idealCandidate: "Anyone looking to soften forehead lines, frown lines, or crow's feet, or prevent them from deepening.",
          duration: "15–30 minutes.",
          expectations: "Results start to show in 3–5 days, peaking at 2 weeks. Lasts 3–4 months on average."
        }
      },
      {
        name: "Dermal Fillers",
        price: "£300",
        desc: "A cosmetic injectable that restores volume, contours features, and smooths lines using premium 1.0ml hyaluronic acid filler.",
        href: "/treatments/dermal-fillers-oxford",
        details: {
          involves: "Injection of hyaluronic acid gel to replace lost volume (cheeks, jawline) or fill deep folds.",
          idealCandidate: "Patients noticing volume loss, sagging, or deep folds due to aging.",
          duration: "30–45 minutes.",
          expectations: "Immediate volume restoration. Some swelling or bruising is possible for a few days."
        }
      },
      {
        name: "Lip Fillers",
        price: "£200",
        desc: "A subtle lip enhancement that adds soft volume, smoothness, and definition using 0.7ml of premium hyaluronic acid filler.",
        href: "/treatments/lip-fillers-oxford",
        details: {
          involves: "Careful injection of filler into the lips to define the border, add volume, or correct asymmetry.",
          idealCandidate: "Those wanting subtle enhancement or hydration of the lips without an overfilled look.",
          duration: "30–45 minutes.",
          expectations: "Immediate fullness. Swelling is common for 24–48 hours. Results last 6–12 months."
        }
      },
      {
        name: "Profhilo & Hyaluronic Acid Skinboosters",
        price: "from £250",
        desc: "Deep hydration bio-remodelling that improves skin elasticity, firmness, and radiance - ideal for hormonal skin changes.",
        href: "/treatments/profhilo-oxford",
        details: {
          involves: "Micro-injections of stabilized hyaluronic acid into the skin to improve hydration and elasticity.",
          idealCandidate: "Patients with dry, dull, or crepey skin looking for a hydration boost from within.",
          duration: "30–45 minutes.",
          expectations: "Improved skin texture, hydration, and 'glow'. Best results seen after a course of treatments."
        }
      },
      {
        name: "Chemical Peels",
        price: "from £100",
        desc: "A targeted exfoliating treatment that removes damaged skin cells to reveal smoother, brighter, more even-toned skin.",
        href: "/treatments/chemical-peels-oxford",
        details: {
          involves: "Application of a chemical solution (e.g., Obagi Blue Peel Radiance from £100, or the Perfect Peel at £350) to exfoliate the top layers of skin.",
          idealCandidate: "Those with dull skin, acne, mild scarring, or uneven pigmentation.",
          duration: "30–45 minutes.",
          expectations: "Varies from mild tingling and no peeling to moderate peeling for a few days, revealing fresh skin."
        }
      },
      {
        name: "Filler Dissolving",
        price: "£200",
        href: "/treatments/filler-dissolving-oxford",
        desc: "A safe injectable treatment using hyaluronidase to dissolve unwanted or migrated dermal filler, restoring your natural appearance.",
        details: {
          involves: "Injection of the enzyme hyaluronidase which breaks down existing hyaluronic acid filler.",
          idealCandidate: "Anyone with migrated, lumpy, or unwanted filler results.",
          duration: "30 minutes (requires patch test).",
          expectations: "Filler dissolves within 24–48 hours. Creates a blank canvas for future correction if needed."
        }
      },
      {
        name: "Jaw Slimming & Teeth Grinding Treatment",
        price: "£250",
        href: "/treatments/jaw-slimming-teeth-grinding-oxford",
        desc: "A targeted injectable treatment that relaxes the masseter muscles to slim the jawline and alleviate teeth grinding (bruxism).",
        details: {
          involves: "Injections into the masseter (jaw) muscles to reduce their activity and size.",
          idealCandidate: "Patients with a wide/square jawline or those suffering from teeth grinding/clenching.",
          duration: "15–30 minutes.",
          expectations: "Jawline slimming effect seen after 4–6 weeks. Relief from grinding is often sooner."
        }
      }
    ]
  }
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        data-testid={`faq-toggle-${index}`}
        className="w-full text-left py-4 flex items-start justify-between gap-4 group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-serif text-base text-primary leading-snug group-hover:text-secondary transition-colors">
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-muted-foreground text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TreatmentCard({
  item,
  index,
  onOpen,
}: {
  item: (typeof servicesData)[0]["items"][0];
  index: number;
  onOpen: (item: any) => void;
}) {
  return (
    <div
      data-testid={`treatment-card-${index}`}
      className="border-b border-border pb-10"
    >
      <div className="flex justify-between items-baseline gap-4 mb-3">
        <h3 className="font-serif text-xl text-primary leading-snug">{item.name}</h3>
        <span className="text-muted-foreground font-serif italic text-sm whitespace-nowrap">{item.price}</span>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">{item.desc}</p>
      {item.details?.idealCandidate && (
        <p className="text-sm text-muted-foreground mb-5">
          <span className="font-medium text-primary/60 uppercase tracking-wide text-xs">Ideal for: </span>
          {item.details.idealCandidate}
        </p>
      )}
      {"href" in item && item.href ? (
        <Link
          href={item.href}
          data-testid={`treatment-guide-${index}`}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors font-medium"
        >
          View Treatment Guide <ArrowRight size={12} />
        </Link>
      ) : (
        <button
          data-testid={`treatment-details-${index}`}
          onClick={() => onOpen(item)}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors font-medium"
        >
          View Full Details <ArrowRight size={12} />
        </button>
      )}
    </div>
  );
}

export default function Services() {
  const [location] = useLocation();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);

  useBreadcrumbSchema([{ name: "Treatments", path: "/treatments" }]);
  useSEO({
    title: "Medical Aesthetics Treatments Oxford | The Oxford Wellness Doctor",
    description: "Comprehensive medical aesthetics treatments in Oxford. Anti-wrinkle, fillers, Profhilo, Morpheus8, weight loss & more. Doctor-led clinic. Book consultation today.",
    canonical: "https://www.theoxfordwellnessdoctor.com/treatments",
  });

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: servicesData.flatMap((s) =>
        s.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        }))
      ),
    };
    let script = document.getElementById("faq-schema") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "faq-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);
    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter");
    if (filter && categories.includes(filter)) {
      setActiveCategory(filter);
    }
  }, [location]);

  const activeSectionData = servicesData.find((s) => s.category === activeCategory)!;

  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Page Header */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="font-serif text-5xl text-primary mb-4">
            Aesthetic &amp; Medical Treatments in Oxford
          </h1>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Bespoke medical solutions delivered by Dr Inga Taganova - GMC-registered doctor, former gynaecologist, and Oxford's leading women's wellness specialist.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-none border transition-all duration-300 uppercase tracking-widest text-xs font-medium ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Unified Treatment List */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {/* Category intro */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-primary mb-2">{activeSectionData.seoTitle}</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {activeSectionData.seoDescription}
                </p>
              </div>

              {/* Treatment cards - all same layout */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
                {activeSectionData.items.map((item, idx) => (
                  <TreatmentCard
                    key={idx}
                    item={item}
                    index={idx}
                    onOpen={setSelectedTreatment}
                  />
                ))}
              </div>

              {/* FAQs */}
              <div className="mt-20">
                <FadeIn direction="up">
                  <h3 className="font-serif text-2xl text-primary mb-6">
                    Frequently Asked Questions - {activeCategory} in Oxford
                  </h3>
                  <div className="divide-y divide-border border border-border px-6">
                    {activeSectionData.faqs.map((faq, idx) => (
                      <FAQItem key={idx} q={faq.q} a={faq.a} index={idx} />
                    ))}
                  </div>
                </FadeIn>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Ready to take the first step?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                data-testid="btn-book-consultation"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-primary rounded-none px-8 uppercase tracking-widest text-sm"
                onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
              >
                Book a Consultation
              </Button>
              <Link href="/contact">
                <Button
                  data-testid="btn-enquire"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 uppercase tracking-widest text-sm"
                >
                  Enquire Discreetly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn direction="up">
            <span className="block text-secondary text-sm uppercase tracking-[0.2em] mb-4 text-center">
              Oxford's Trusted Aesthetics Doctor
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 leading-tight">
              Why Choose The Oxford Wellness Doctor?
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Medical Expertise You Can Trust",
                body: "Dr Taganova is a GMC-registered GP (No. 4727817), a former gynaecologist, and a current practising NHS doctor with over 20 years of clinical experience in Oxford and Oxfordshire. Every treatment is carried out with the same rigour as her medical practice.",
              },
              {
                title: "A Holistic, Patient-First Approach",
                body: "We never recommend a treatment unless it's right for you. Dr Taganova takes the time to understand your full health picture before creating a bespoke plan - combining aesthetic goals with genuine medical care.",
              },
              {
                title: "Complete Discretion in Oxford",
                body: "Our private Oxford clinic offers a calm, confidential environment within a professional medical setting. Whether you're exploring options for the first time or returning for ongoing care, your privacy and comfort are always our priority.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div>
                  <div className="w-8 h-0.5 bg-secondary mb-4" />
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed font-light">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button
              data-testid="btn-why-choose-cta"
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-10 uppercase tracking-widest text-sm"
              onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
            >
              Book a Consultation in Oxford
            </Button>
          </div>
        </div>
      </section>

      <TreatmentModal
        isOpen={!!selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        treatment={selectedTreatment}
      />
    </div>
  );
}
