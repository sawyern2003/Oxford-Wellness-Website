import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Skin Boosters Oxford | Injectable Hydration | The Oxford Wellness Doctor",
  metaDescription: "Skin booster injections in Oxford. Hyaluronic acid hydration for glowing skin. Includes Profhilo, Seventy Hyal, Jalupro. GMC doctor. Book consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/skin-boosters-oxford",
  h1: "Skin Boosters in Oxford - Injectable Skin Hydration",
  intro: "Skin booster treatments are injectable hyaluronic acid treatments designed to deeply hydrate and improve the quality of skin from within. Unlike dermal fillers that add volume and structure, skin boosters work diffusely through the tissue - restoring moisture, improving elasticity, and giving the skin a healthy, luminous glow.",
  sections: [
    {
      heading: "How Skin Boosters Work",
      paragraphs: [
        "Hyaluronic acid (HA) is a molecule naturally produced by the body that can hold up to 1,000 times its weight in water. As we age, our natural HA levels decline - leading to dryness, loss of elasticity, and the dull, dehydrated appearance that many associate with skin ageing.",
        "Skin booster treatments deliver stabilised hyaluronic acid directly into the mid-dermis, where it binds water and stimulates fibroblast activity - triggering the production of new collagen and elastin. The result is plumper, more hydrated, and visibly healthier skin.",
      ],
    },
    {
      heading: "Types of Skin Boosters We Offer in Oxford",
      bullets: [
        "Profhilo - the most advanced bio-remodelling skin booster; pure, ultra-high concentration HA that spreads through tissue and stimulates all four types of collagen (see our dedicated Profhilo page)",
        "Seventy Hyal 2000 - a highly effective, accessible HA skin booster with an excellent safety profile suitable for all ages",
        "Jalupro - an amino acid and HA combination that deeply nourishes and regenerates the skin at a cellular level",
        "Sunekos - an HA and amino acid formulation developed to address skin ageing and restore dermal matrix components",
      ],
    },
    {
      heading: "What Skin Boosters Treat",
      bullets: [
        "Dehydrated, dry skin that looks dull or feels tight",
        "Fine surface lines caused by lack of hydration",
        "Crepey or papery skin texture",
        "Loss of radiance and healthy glow",
        "Early signs of skin ageing (20s–30s prevention)",
        "Skin quality concerns on the face, neck, décolletage, and hands",
      ],
    },
    {
      heading: "Treatment Protocol",
      paragraphs: [
        "Most skin booster programmes involve 2–3 initial sessions, spaced 3–4 weeks apart. This foundational course establishes the hydration levels and stimulates the biological processes needed for lasting improvement.",
        "Treatment time is typically 20–30 minutes. Tiny injections are placed in a grid pattern across the treatment area. Topical numbing cream is applied beforehand for comfort. There is minimal downtime - small injection marks typically resolve within 24–48 hours.",
      ],
    },
    {
      heading: "Who Should Have Skin Booster Treatment?",
      paragraphs: [
        "Skin boosters are suitable for almost everyone - regardless of age or skin type. They are particularly beneficial for:",
      ],
      bullets: [
        "Patients in their 20s and 30s looking for a proactive, preventative skin health treatment",
        "Patients in their 40s–60s addressing skin quality decline alongside other aesthetic treatments",
        "Those who have completed a course of Morpheus8 or other energy-based treatment and want to optimise skin hydration during recovery",
        "Anyone with naturally dry or dehydrated skin who wants a genuine solution from within",
      ],
    },
  ],
  pricing: [
    { name: "Hyaluronic Acid Skinbooster", price: "£250" },
    { name: "Polynucleotide Skin Boosters & Bioremodellers", price: "£350" },
  ],
  faqs: [
    { q: "What are skin boosters?", a: "Skin boosters are injectable hyaluronic acid treatments that deeply hydrate the skin from within, improve elasticity, stimulate collagen, and restore a healthy, luminous complexion." },
    { q: "How are skin boosters different from fillers?", a: "Dermal fillers add volume and structure. Skin boosters are not volumising - they spread diffusely through tissue to improve skin quality and hydration. The results are subtler and more natural in appearance." },
    { q: "Do skin boosters hurt?", a: "Topical anaesthetic cream is applied before treatment. Most patients find the injections very tolerable - a mild prickling sensation. Treatment is quick and comfortable." },
    { q: "How many skin booster treatments do I need?", a: "An initial course of 2–3 sessions, spaced 3–4 weeks apart, is recommended. Maintenance every 3–6 months helps sustain results." },
    { q: "How long do skin boosters last?", a: "Results from an initial course typically last 3–6 months. Regular maintenance sessions every 3–6 months help sustain the hydration and collagen-stimulating benefits." },
    { q: "Can I combine skin boosters with other treatments?", a: "Yes - skin boosters pair excellently with anti-wrinkle injections, dermal fillers, and energy-based treatments like Morpheus8. Dr. Taganova will create a combined plan suited to your goals." },
    { q: "How much do skin boosters cost in Oxford?", a: "At The Oxford Wellness Doctor, Hyaluronic Acid Skinboosters are £250 per session. Polynucleotide Skin Boosters and Bioremodellers are £350 per session. All prices include a full consultation." },
    { q: "How do I book skin booster treatment?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. Located at 3 Woodstock Rd, Oxford OX2 6HA. Open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Skin Boosters Oxford",
    description: "Injectable hyaluronic acid skin booster treatments including Profhilo, Seventy Hyal, and Jalupro for deep skin hydration, collagen stimulation, and radiance. Delivered in Oxford by Dr. Inga Taganova.",
  },
  relatedLinks: [
    { label: "Profhilo", href: "/treatments/profhilo-oxford" },
    { label: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function SkinBoostersPage() {
  return <TreatmentPageTemplate data={data} />;
}
