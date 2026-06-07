import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Dermal Fillers Oxford | Natural Volume Restoration | Expert Doctor",
  metaDescription: "Expert dermal fillers in Oxford. Restore volume to cheeks, nasolabial folds, marionette lines. GMC doctor-led clinic. Natural results. Book your consultation today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/dermal-fillers-oxford",
  h1: "Dermal Fillers in Oxford - Expert Volume Restoration",
  intro: "Hyaluronic acid fillers restore lost volume, smooth deep lines, and contour the face — with a conservative, natural-looking approach.",
  sections: [
    {
      heading: "What Can Dermal Fillers Treat?",
      bullets: [
        "Cheek volume and contour",
        "Nasolabial and marionette lines",
        "Tear trough hollowing",
        "Jawline and chin definition",
        "Temple hollowing",
      ],
    },
    {
      heading: "The Treatment Process",
      paragraphs: [
        "Facial assessment and tailored plan using premium, fully reversible HA fillers (Juvederm, Restylane, Teosyal).",
        "30–45 minutes with topical anaesthetic. Results immediate; settles in 2–4 weeks. Lasts 6–18 months depending on area.",
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
