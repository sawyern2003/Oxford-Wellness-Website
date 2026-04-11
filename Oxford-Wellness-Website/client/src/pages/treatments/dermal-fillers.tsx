import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Dermal Fillers Oxford | Natural Volume Restoration | Expert Doctor",
  metaDescription: "Expert dermal fillers in Oxford. Restore volume to cheeks, nasolabial folds, marionette lines. GMC doctor-led clinic. Natural results. Book your consultation today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/dermal-fillers-oxford",
  h1: "Dermal Fillers in Oxford - Expert Volume Restoration",
  intro: "Dermal fillers use hyaluronic acid - a substance naturally found in the body - to restore lost volume, smooth deep lines, and gently contour the face. At The Oxford Wellness Doctor, Dr. Inga Taganova combines her 20+ years of medical expertise with a conservative aesthetic philosophy to deliver results that look genuinely natural.",
  sections: [
    {
      heading: "What Can Dermal Fillers Treat?",
      paragraphs: ["Dermal fillers in Oxford at our clinic address a wide range of age-related and structural concerns:"],
      bullets: [
        "Cheek volume loss - restoring a lifted, defined cheek contour",
        "Nasolabial folds - softening the lines from nose to mouth",
        "Marionette lines - reducing the lines from corners of the mouth downward",
        "Tear troughs - improving hollowing and dark shadows under the eyes",
        "Jawline definition - strengthening and sharpening jaw contour",
        "Chin augmentation - adding projection or correcting asymmetry",
        "Temple hollowing - restoring fullness to sunken temples",
      ],
    },
    {
      heading: "Types of Dermal Fillers We Use",
      paragraphs: [
        "Dr. Taganova uses only premium, hyaluronic acid-based dermal fillers from the world's most trusted manufacturers. These include Juvederm, Restylane, and Teosyal - all of which are fully reversible using hyaluronidase enzyme if needed.",
        "Hyaluronic acid fillers are the safest and most widely studied option available. They integrate naturally with your tissue and can be dissolved quickly and safely if you wish to reverse the results.",
      ],
    },
    {
      heading: "The Treatment Process",
      paragraphs: [
        "Every treatment begins with a comprehensive facial assessment. Dr. Taganova will analyse your facial proportions, skin quality, and volume distribution to create a tailored plan. She follows a 'less is more' philosophy - it is always possible to add more at a follow-up, but never wise to overfill.",
        "Treatment takes 30–45 minutes. A topical anaesthetic cream is applied beforehand for comfort. Results are immediate, though mild swelling and bruising may appear for a few days post-treatment.",
      ],
    },
    {
      heading: "Results & Longevity",
      paragraphs: [
        "The results of dermal fillers are visible immediately, though the final result settles within 2–4 weeks once any swelling fully subsides.",
        "How long fillers last depends on the area treated, the product used, and your individual metabolism. Cheek and jawline filler typically lasts 12–18 months; lip and tear trough filler tends to last 6–12 months. Dr. Taganova will advise on expected duration for your specific treatment plan.",
      ],
    },
    {
      heading: "Why Choose a GMC Doctor for Dermal Fillers?",
      paragraphs: [
        "The UK has seen a rise in unregulated filler treatments delivered by untrained practitioners. Serious complications - including vascular occlusion - require immediate medical management. As a GMC-registered doctor with advanced anatomical knowledge, Dr. Taganova's expertise significantly reduces these risks and ensures your safety throughout.",
      ],
      bullets: [
        "Advanced vascular anatomy knowledge crucial for safe injection",
        "Medical-grade hyaluronidase on-site for immediate complication reversal",
        "20+ years clinical experience and specialist aesthetic training",
        "Conservative, patient-led approach to volume restoration",
      ],
    },
  ],
  pricing: [
    { name: "1.0ml Dermal Filler", price: "£300" },
  ],
  faqs: [
    { q: "How long do dermal fillers last?", a: "Longevity depends on the area treated and the product used. Cheek and jawline filler typically lasts 12–18 months; lip and tear trough filler lasts 6–12 months. Your metabolism and lifestyle also affect duration." },
    { q: "Do dermal fillers hurt?", a: "Most patients find treatment comfortable. A topical anaesthetic cream is applied beforehand, and the filler products contain lidocaine (a local anaesthetic). Most patients report only mild pressure or a slight pinching sensation." },
    { q: "What's the difference between dermal fillers and anti-wrinkle injections?", a: "Anti-wrinkle injections relax muscles to smooth dynamic lines. Dermal fillers add volume and structure using hyaluronic acid. The two treatments work differently and are often complementary - Dr. Taganova will advise on the best approach for your concerns." },
    { q: "Can dermal fillers be dissolved?", a: "Yes. Hyaluronic acid fillers can be dissolved quickly and safely using an enzyme called hyaluronidase. This is one of the key reasons hyaluronic acid fillers are the gold standard - they are fully reversible." },
    { q: "What are the risks of dermal fillers?", a: "Common risks include temporary swelling, bruising, and tenderness. Rare but serious complications include vascular occlusion. These risks are significantly minimised when treatment is performed by a medically trained doctor with advanced anatomical knowledge." },
    { q: "How much do dermal fillers cost in Oxford?", a: "Dermal fillers at The Oxford Wellness Doctor are £300 for 1.0ml. All prices include a full consultation and complimentary follow-up appointment." },
    { q: "Will I look unnatural?", a: "Dr. Taganova's philosophy is that the best results are the ones that whisper, not shout. She uses a conservative, patient-led approach focused on restoring balance and natural proportion rather than adding excessive volume." },
    { q: "How long is recovery after dermal fillers?", a: "Most patients experience minimal downtime. Mild swelling and bruising may occur for 3–5 days. Avoid strenuous exercise, alcohol, and excessive heat for 24 hours after treatment." },
    { q: "Can I combine fillers with other treatments?", a: "Yes, fillers work very well alongside anti-wrinkle injections, skin boosters, and energy-based treatments. Dr. Taganova will create a combined treatment plan tailored to your goals during your consultation." },
    { q: "How do I book dermal fillers at The Oxford Wellness Doctor?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. Clinic is at 3 Woodstock Rd, Oxford OX2 6HA. Open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Dermal Fillers Oxford",
    description: "Hyaluronic acid dermal filler injections to restore facial volume, smooth lines, and contour features. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
  },
  relatedLinks: [
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
    { label: "Profhilo", href: "/treatments/profhilo-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function DermalFillersPage() {
  return <TreatmentPageTemplate data={data} />;
}
