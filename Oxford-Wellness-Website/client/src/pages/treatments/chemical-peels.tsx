import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Chemical Peels Oxford | Medical Grade Skin Peels | Expert Treatment",
  metaDescription: "Medical-grade chemical peels in Oxford. Improve acne, pigmentation, fine lines & texture. Doctor-led safety. From £150. Book your skin consultation today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/chemical-peels-oxford",
  h1: "Chemical Peels in Oxford - Medical-Grade Skin Treatments",
  intro: "Chemical peels are one of the most effective evidence-based treatments for improving skin quality, clarity, and texture. At The Oxford Wellness Doctor in Oxford, Dr. Inga Taganova uses medical-grade peeling agents to resurface the skin safely and precisely - targeting specific concerns from acne and pigmentation to fine lines and dullness.",
  sections: [
    {
      heading: "Types of Chemical Peels We Offer",
      paragraphs: [
        "Not all chemical peels are the same. Dr. Taganova selects the most appropriate peel formulation and strength for your individual skin type, concerns, and tolerance:",
      ],
      bullets: [
        "Superficial peels (glycolic acid, salicylic acid, mandelic acid) - no downtime, suitable for regular use, ideal for brightening and maintenance",
        "Medium-depth peels (TCA - trichloroacetic acid) - more intensive, targets pigmentation and deeper lines with several days of visible peeling",
        "Combination peels - blended formulations targeting multiple concerns simultaneously",
      ],
      note: "All peels at The Oxford Wellness Doctor are medical-grade concentrations, applied by Dr. Taganova following a thorough skin assessment. These are significantly more effective than retail or salon peels.",
    },
    {
      heading: "What Chemical Peels Treat",
      bullets: [
        "Acne and active breakouts",
        "Post-acne scarring and marks",
        "Hyperpigmentation and uneven skin tone",
        "Sun damage and age spots",
        "Fine lines and early wrinkles",
        "Dull, tired-looking skin",
        "Melasma",
        "Rough skin texture and enlarged pores",
      ],
    },
    {
      heading: "The Treatment",
      paragraphs: [
        "Treatment begins with a thorough skin analysis and consultation. Dr. Taganova will assess your Fitzpatrick skin type, sensitivity, and existing skin conditions before selecting the appropriate peel.",
        "The peel solution is applied carefully and evenly across the treatment area. During application, you may notice a tingling or warming sensation - this is normal. The solution is left for a precise period before neutralisation. Treatment time is typically 15–30 minutes.",
        "You will leave the clinic with a full aftercare protocol and recommended products to support your skin's recovery and maximise results.",
      ],
    },
    {
      heading: "Recovery & Results",
      paragraphs: [
        "Recovery depends on the depth of peel used. Superficial peels may cause minimal flaking for 2–3 days. Medium-depth peels involve more visible peeling for 5–7 days, revealing noticeably smoother, brighter skin beneath.",
        "Sun protection is essential following any chemical peel. Dr. Taganova will advise on appropriate SPF and skincare. A course of 3–6 peels, spaced 4 weeks apart, is typically recommended for optimal, long-lasting results.",
      ],
    },
  ],
  pricing: [
    { name: "Obagi Blue Peel Radiance", price: "£100" },
    { name: "Perfect Peel", price: "£350" },
  ],
  faqs: [
    { q: "What is a chemical peel?", a: "A chemical peel uses an acid solution to exfoliate and remove the outer layers of skin. This triggers cell renewal, revealing smoother, brighter, more even-toned skin underneath." },
    { q: "Do chemical peels hurt?", a: "Most patients experience a tingling or warming sensation during application. Deeper peels may feel more intense briefly. The sensation subsides quickly after neutralisation." },
    { q: "How long is chemical peel recovery?", a: "Superficial peels cause minimal visible flaking lasting 2–3 days. Medium-depth peels typically involve 5–7 days of peeling. Dr. Taganova will explain what to expect for your specific peel." },
    { q: "How many chemical peels do I need?", a: "For most concerns, a course of 3–6 peels spaced 4 weeks apart produces the best results. Some patients benefit from a single peel for maintenance or a one-off brightening treatment." },
    { q: "Can I have a chemical peel if I have active acne?", a: "Yes - certain peels, particularly salicylic acid, are specifically beneficial for acne-prone skin. Dr. Taganova will select the appropriate formulation based on your skin condition." },
    { q: "What's the difference between light and deep peels?", a: "Light peels work on the skin surface, causing minimal downtime. Deeper peels penetrate further into the skin for more significant results but require more recovery time. Dr. Taganova will recommend the appropriate depth for your goals." },
    { q: "How much do chemical peels cost in Oxford?", a: "At The Oxford Wellness Doctor, the Obagi Blue Peel Radiance is £100 and the Perfect Peel is £350. Both prices include full consultation and aftercare guidance." },
    { q: "How do I book a chemical peel consultation?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. Located at 3 Woodstock Rd, Oxford OX2 6HA. Open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Chemical Peels Oxford",
    description: "Medical-grade chemical peel treatments for acne, pigmentation, fine lines, and skin texture improvement. Delivered in Oxford by GMC-registered Dr. Inga Taganova.",
  },
  relatedLinks: [
    { label: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function ChemicalPeelsPage() {
  return <TreatmentPageTemplate data={data} />;
}
