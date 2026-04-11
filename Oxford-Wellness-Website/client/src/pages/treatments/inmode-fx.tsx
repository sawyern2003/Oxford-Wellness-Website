import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "InMode FX Body Contouring Oxford | Cellulite & Skin Tightening | Dr. Inga Taganova",
  metaDescription: "InMode FX non-invasive body contouring in Oxford - reduce cellulite, tighten skin, and contour stubborn fat areas. From £150. No surgery, no downtime. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/inmode-fx-skin-tightening-oxford",
  h1: "InMode FX Skin Tightening & Body Contouring in Oxford",
  intro: "InMode FX (BodyFX) is a non-invasive body contouring treatment that combines radiofrequency energy, deep tissue heating, and suction negative pressure to target stubborn fat, reduce the appearance of cellulite, and firm loose skin. It is a clinically proven, comfortable, and effective alternative to surgical procedures - with zero downtime and no recovery period.",
  sections: [
    {
      heading: "How InMode FX Works",
      paragraphs: [
        "InMode FX uses a unique combination of three technologies working simultaneously:",
      ],
      bullets: [
        "Radiofrequency (RF) energy - heats fat cells and the deep dermis to trigger fat cell apoptosis (natural cell death) and collagen remodelling",
        "Pulsed electro-magnetic fields - disrupt the membranes of fat cells to enhance their breakdown",
        "Suction negative pressure - draws tissue into the applicator for deeper and more uniform energy delivery",
      ],
      note: "Together, these mechanisms produce meaningful body contouring, cellulite reduction, and skin tightening - in a single, comfortable treatment.",
    },
    {
      heading: "What Can InMode FX Treat?",
      bullets: [
        "Cellulite - reduction of the dimpled, uneven appearance of the skin",
        "Stubborn fat areas - abdomen, flanks, inner thighs, back",
        "Loose or crepey skin - improving firmness and elasticity",
        "Post-pregnancy body changes - skin and tissue restoration",
        "General body contouring and toning",
      ],
      note: "InMode FX is not a weight loss treatment. It is best suited to patients at or near their ideal weight who want to address specific areas of skin laxity, cellulite, or localised fat.",
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "Each session lasts 30–60 minutes depending on the number of areas treated. The applicator is placed on the skin and uses suction to draw the tissue into position. A gradual warming sensation is felt as the RF energy works deep within the tissue. The device's continuous temperature monitoring ensures comfort and safety throughout.",
        "There is no downtime. You may notice mild redness or slight warmth in the treated area for a few hours post-treatment. Most patients are comfortable resuming normal activities, including exercise, immediately.",
      ],
    },
    {
      heading: "How Many Sessions Are Needed?",
      paragraphs: [
        "A course of 6–8 weekly sessions is typically recommended for optimal results. The fat reduction and skin tightening effects develop progressively throughout the course, with continued improvement for 3–6 months after the final session as collagen remodelling completes.",
      ],
    },
    {
      heading: "Why Choose The Oxford Wellness Doctor?",
      bullets: [
        "Medical-grade InMode technology with published clinical evidence",
        "Treatment overseen by Dr. Inga Taganova, GMC-registered physician",
        "Safe for all skin types and tones",
        "Non-surgical, non-invasive, zero downtime",
        "Combined with Forma Plus or Morpheus8 for enhanced results if appropriate",
        "Private clinic in Oxford with free parking",
      ],
    },
  ],
  pricing: [
    { name: "InMode FX Skin Tightening & Cellulite Treatment", price: "£150" },
  ],
  faqs: [
    { q: "Is InMode FX painful?", a: "Most patients find the treatment comfortable - a warm, vacuum-like sensation. The device's temperature control ensures it stays within the safe therapeutic range throughout." },
    { q: "How many sessions do I need?", a: "Typically 6–8 weekly sessions. Dr. Taganova will recommend a personalised plan based on your specific goals and the areas to be treated." },
    { q: "Is there downtime?", a: "No. Mild redness or warmth may occur for a few hours post-treatment, but most patients resume all activities immediately." },
    { q: "Will I lose weight with InMode FX?", a: "InMode FX is a body contouring treatment, not a weight loss treatment. It targets localised fat, cellulite, and skin laxity in specific areas. For weight loss, we recommend our Medical Weight Loss programme." },
    { q: "How long before I see results?", a: "Some improvement may be visible after the first few sessions. The most significant results typically develop over 3–6 months following your final session as collagen remodelling continues." },
    { q: "Can InMode FX be combined with other treatments?", a: "Yes. InMode FX pairs particularly well with Forma Plus for skin tightening, or with Morpheus8 for deeper remodelling. Dr. Taganova will advise on the best combination for your goals." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "InMode FX Skin Tightening & Body Contouring Oxford",
    description: "Non-invasive body contouring using InMode BodyFX - combining radiofrequency, pulsed electromagnetic fields, and suction to reduce cellulite and tighten skin. Delivered by Dr. Inga Taganova in Oxford.",
    bodyLocation: "Abdomen, flanks, thighs, back",
  },
  relatedLinks: [
    { label: "Forma Plus Body", href: "/treatments/forma-plus-body-contouring-oxford" },
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "Medical Weight Loss", href: "/treatments/medical-weight-loss-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function InModeFXPage() {
  return <TreatmentPageTemplate data={data} />;
}
