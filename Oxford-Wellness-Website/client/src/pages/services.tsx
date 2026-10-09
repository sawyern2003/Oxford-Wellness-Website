import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import TreatmentModal from "@/components/services/TreatmentModal";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

const categories = ["Women's Health", "Longevity Medicine", "Medical Aesthetics", "Regenerative Medicine", "Skincare"];

// href = dedicated sub-page; omit href = opens detail modal
const servicesData = [
  {
    category: "Women's Health",
    seoTitle: "Women's Health & Menopause Services in Oxford",
    seoDescription: "Specialist women's health care from menopause lead Dr. Inga Taganova - menopause clinic, perimenopause support, intimate health, and women's wellness in Oxford.",
    faqs: [
      {
        q: "What makes Dr. Taganova qualified as a menopause specialist?",
        a: "Dr. Taganova is a GMC-registered GP, formally trained gynaecologist, and specialist menopause lead. She has over 20 years of experience in women's health and holds specialist menopause qualifications. Her background uniquely combines gynecological training, general practice experience, and aesthetic medicine expertise."
      },
      {
        q: "Do you prescribe HRT at your Oxford clinic?",
        a: "While we do not currently prescribe HRT at this clinic, Dr. Taganova provides comprehensive menopause assessments and can refer you to appropriate HRT prescribers if hormone therapy is clinically indicated. Her expertise as a formally trained gynaecologist and specialist menopause lead means she can thoroughly assess your suitability for HRT and provide specialist referrals."
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
          idealCandidate: "Women experiencing menopausal symptoms or entering perimenopause who want specialist-led care from a formally trained gynaecologist.",
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
    category: "Longevity Medicine",
    seoTitle: "Longevity Medicine & Metabolic Health in Oxford",
    seoDescription: "Doctor-led longevity medicine in Oxford – medical weight loss, metabolic support, nutrient therapy, and regenerative care with Dr. Inga Taganova.",
    faqs: [
      {
        q: "What is longevity medicine?",
        a: "Longevity medicine focuses on healthspan – how well you function as you age. At this clinic it includes metabolic assessment, medical weight management, nutrient support, and regenerative treatments guided by a GMC-registered doctor."
      },
      {
        q: "Is medical weight loss part of longevity care?",
        a: "Yes, where clinically appropriate. Wegovy and Mounjaro can support metabolic health under close medical supervision, particularly for midlife weight changes that have not responded to lifestyle measures alone."
      },
      {
        q: "Who is longevity medicine for?",
        a: "Anyone wanting a thoughtful approach to healthy ageing – often women in their 40s and beyond navigating perimenopause, menopause, energy changes, or metabolic concerns."
      }
    ],
    items: [
      {
        name: "Longevity Medicine Consultation",
        price: "£150",
        href: "/longevity-medicine-oxford",
        desc: "A doctor-led consultation covering metabolic health, midlife wellbeing, and a clear plan for healthy ageing support.",
        details: {
          involves: "Full health discussion, review of goals and symptoms, and personalised recommendations across metabolic care, weight management, and regenerative options.",
          idealCandidate: "Adults seeking preventative, doctor-led guidance on energy, body composition, and healthy ageing – especially in midlife.",
          duration: "45 minutes.",
          expectations: "A clear, unhurried plan with no pressure to start treatment on the day."
        }
      },
      {
        name: "Medical Weight Loss Consultation",
        price: "£50",
        href: "/treatments/medical-weight-loss-oxford",
        desc: "Specialist assessment for Wegovy or Mounjaro where clinically appropriate, with ongoing medical supervision.",
        details: {
          involves: "Health and BMI assessment, suitability review for GLP-1 treatment, and a supervised programme if appropriate.",
          idealCandidate: "Adults with BMI over 30 (or over 27 with co-morbidities) struggling despite diet and exercise.",
          duration: "45 minutes.",
          expectations: "A personalised weight management plan. Prescriptions only when clinically safe and suitable."
        }
      },
      {
        name: "Vitamin B12 Injection",
        price: "£35",
        href: "/treatments/vitamin-b12-injection-oxford",
        desc: "Quick intramuscular B12 support for energy, metabolism, mood balance, and overall wellbeing.",
        details: {
          involves: "Intramuscular hydroxocobalamin injection for reliable absorption.",
          idealCandidate: "Anyone feeling fatigued or looking to support metabolism and immunity.",
          duration: "10–15 minutes.",
          expectations: "Energy and clarity often improve within 24–48 hours. Monthly maintenance is common."
        }
      },
      {
        name: "Profhilo Skin Bio-Remodelling",
        price: "£250",
        href: "/treatments/profhilo-oxford",
        desc: "Injectable bio-remodelling that supports skin quality, hydration, and collagen as part of healthy ageing care.",
        details: {
          involves: "High-concentration hyaluronic acid injections that stimulate collagen and elastin.",
          idealCandidate: "Those noticing crepey, dehydrated, or ageing skin who want natural improvement without filler volume.",
          duration: "30 minutes.",
          expectations: "Gradual improvement in skin quality over weeks. Typically a course of two sessions."
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
  },
  {
    category: "Skincare",
    seoTitle: "Recommended Clinical Skincare in Oxford",
    seoDescription: "Doctor-guided clinical skincare recommendations from Dr Inga Taganova – curated home care to support personalised treatment programmes in Oxford.",
    faqs: [
      {
        q: "Is this an online skincare shop?",
        a: "No. These are curated clinical recommendations to support your treatment journey – not a beauty storefront. Dr Inga advises what is appropriate for you during consultation."
      },
      {
        q: "When should I start recommended skincare?",
        a: "Often alongside an in-clinic programme such as Skin Health & Regeneration. Timing matters after peels, IPL or collagen-stimulating treatments, so products are introduced carefully."
      },
      {
        q: "Can I buy products without a consultation?",
        a: "Guidance is personalised. The best starting point is a consultation or the Programme Finder so recommendations match your skin, hormones and treatment plan."
      }
    ],
    items: [
      {
        name: "Recommended Skincare",
        price: "Doctor-guided",
        href: "/recommended-skincare",
        desc: "Curated clinical skincare recommendations to support your treatment journey – personalised home care, not a generic online shop.",
        details: {
          involves: "Doctor-led guidance on clinical skincare products that complement in-clinic treatments and programmes.",
          idealCandidate: "Patients on skin health, regenerative, or aesthetic programmes who want home care that supports their results.",
          duration: "Discussed during consultation.",
          expectations: "A clear, personalised skincare plan tailored to your skin and treatment programme."
        }
      },
      {
        name: "Vitamin C Brightening Concentrate",
        price: "SkinCeuticals",
        href: "/recommended-skincare",
        desc: "Supports antioxidant defence and brightness – useful alongside regenerative skin programmes.",
        details: {
          involves: "4–5 drops to dry face and neck each morning before moisturiser and SPF.",
          idealCandidate: "Women addressing dullness, uneven tone or midlife skin change.",
          duration: "Daily morning use as advised.",
          expectations: "Brighter, more defended skin as part of a wider skin health plan."
        }
      },
      {
        name: "SPF 50+ Mineral Sunscreen",
        price: "EltaMD",
        href: "/recommended-skincare",
        desc: "Essential protection after peels, IPL and collagen-stimulating treatments.",
        details: {
          involves: "Apply liberally each morning; reapply with outdoor exposure.",
          idealCandidate: "All patients – especially during active treatment journeys.",
          duration: "Daily morning use.",
          expectations: "Reliable sun protection that supports treatment results and skin recovery."
        }
      },
      {
        name: "Hyaluronic Acid Hydrating Serum",
        price: "Obagi",
        href: "/recommended-skincare",
        desc: "Supports barrier comfort and hydration between clinic visits.",
        details: {
          involves: "Apply to cleansed skin before moisturiser.",
          idealCandidate: "Dry, dehydrated or post-treatment skin.",
          duration: "Daily use as advised.",
          expectations: "Improved comfort and hydration between appointments."
        }
      },
      {
        name: "Advanced Retinol Night Serum",
        price: "SkinCeuticals",
        href: "/recommended-skincare",
        desc: "Supports overnight renewal as part of a long-term skin quality plan – introduced carefully.",
        details: {
          involves: "2–3 drops in the evening as advised. Always pair with morning SPF.",
          idealCandidate: "Suitable patients under doctor guidance; not for immediate post-procedure use.",
          duration: "Evening use as advised.",
          expectations: "Gradual overnight renewal support within a supervised skincare plan."
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
        <span className="font-sans font-medium text-base text-foreground leading-snug group-hover:text-secondary transition-colors">
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
      className="rounded-3xl bg-muted/40 p-6 mb-5"
    >
      <div className="flex justify-between items-baseline gap-4 mb-3">
        <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight leading-snug">{item.name}</h3>
        <span className="text-muted-foreground font-sans text-sm whitespace-nowrap">{item.price}</span>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">{item.desc}</p>
      {item.details?.idealCandidate && (
        <p className="text-sm text-muted-foreground mb-5">
          <span className="text-primary/70">Ideal for: </span>
          {item.details.idealCandidate}
        </p>
      )}
      {"href" in item && item.href ? (
        <Link
          href={item.href}
          data-testid={`treatment-guide-${index}`}
          className="inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-secondary transition-colors"
        >
          Read more <ArrowRight size={13} />
        </Link>
      ) : (
        <button
          data-testid={`treatment-details-${index}`}
          onClick={() => onOpen(item)}
          className="inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-secondary transition-colors"
        >
          Details <ArrowRight size={13} />
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
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12"
        >
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-4 leading-snug">
            Treatments
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl">
            Individual treatments are part of personalised programmes – not the starting point.
            Not sure where to begin?{" "}
            <a href="/programme-finder" className="text-secondary hover:text-primary transition-colors font-medium">
              Use the Programme Finder
            </a>
            .
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-secondary text-primary font-medium"
                  : "bg-muted text-muted-foreground hover:text-primary"
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
                <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-2">{activeSectionData.seoTitle}</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {activeSectionData.seoDescription}
                </p>
              </div>

              {/* Treatment cards - all same layout */}
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-0">
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
                  <h3 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
                    Frequently Asked Questions - {activeCategory} in Oxford
                  </h3>
                  <div className="rounded-3xl bg-muted/40 px-5 divide-y divide-border">
                    {activeSectionData.faqs.map((faq, idx) => (
                      <FAQItem key={idx} q={faq.q} a={faq.a} index={idx} />
                    ))}
                  </div>
                </FadeIn>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
            <p className="text-[15px] text-primary-foreground/75 mb-5 max-w-md">
              Not sure where to start? A consultation is the simplest next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                data-testid="btn-book-consultation"
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 h-11 text-sm font-medium"
                onClick={() => window.location.assign("/book")}
              >
                Book a consultation
              </Button>
              <Link href="/contact">
                <Button
                  data-testid="btn-enquire"
                  className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-7 h-11 text-sm"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn direction="up">
            <h2 className="font-sans font-semibold text-3xl text-foreground tracking-tight mb-10">
              Why patients choose this clinic
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Medical depth",
                body: "GMC-registered GP, formally trained gynaecologist, and practising NHS doctor with over 20 years in women's health.",
              },
              {
                title: "Unhurried advice",
                body: "Nothing is recommended unless it is right for you. Treatment plans are built around your health picture, not a menu of upsells.",
              },
              {
                title: "Discretion",
                body: "A calm private clinic on Woodstock Road – confidential care for women's health and aesthetic treatments alike.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="hover-card bg-white rounded-3xl p-7 h-full">
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
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
