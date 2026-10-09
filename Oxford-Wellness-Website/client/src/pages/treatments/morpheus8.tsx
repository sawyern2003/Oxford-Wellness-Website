import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Morpheus8 Oxford | RF Microneedling | Skin Tightening Treatment",
  metaDescription: "Morpheus8 radiofrequency microneedling in Oxford. Non-surgical skin tightening for face & body. Reduces wrinkles, scars & improves texture. Book consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/morpheus8-oxford",
  h1: "Morpheus8 in Oxford - Advanced RF Microneedling Treatment",
  intro: "RF microneedling tightens skin, reduces wrinkles and scars, and remodels collagen deep in the tissue – without surgery.",
  sections: [
    {
      heading: "What Morpheus8 Treats",
      bullets: [
        "Loose skin on face, neck, and jowls",
        "Deep wrinkles and folds",
        "Acne scars and uneven texture",
        "Large pores",
        "Stretch marks and body laxity",
      ],
    },
    {
      heading: "The Morpheus8 Procedure",
      paragraphs: [
        "Numbing cream applied 45–60 minutes before. RF microneedling across the treatment area over 30–60 minutes.",
        "Redness for 2–5 days; back to work in 3–5 days. Three sessions, 4–6 weeks apart recommended. Results develop over 3–6 months.",
      ],
    },
  ],
  pricing: [
    { name: "Morpheus8 - Eyes & Around the Mouth", price: "£400" },
    { name: "Morpheus8 - Tummy", price: "£300" },
    { name: "Morpheus8 - Face, Neck & Décolletage", price: "£650" },
    { name: "Morpheus8 - Stretch Marks / Large Area", price: "£800" },
    { name: "Morpheus8 Resurfacing (add-on)", price: "£300" },
  ],
  faqs: [
    { q: "What is Morpheus8?", a: "Morpheus8 is a fractional RF microneedling device that combines fine microneedles with radiofrequency energy to stimulate deep collagen remodelling, resulting in tighter, smoother, more youthful skin." },
    { q: "Does Morpheus8 hurt?", a: "A numbing cream is applied 45–60 minutes before treatment. Most patients describe a warm prickling sensation during the procedure, which is well-tolerated. Dr. Taganova adjusts intensity based on your comfort." },
    { q: "How many Morpheus8 treatments do I need?", a: "A course of three sessions, spaced 4–6 weeks apart, is recommended for optimal results. Some patients achieve their goals in one or two sessions - Dr. Taganova will advise during your consultation." },
    { q: "What is Morpheus8 downtime?", a: "Redness and mild swelling for 2–5 days is typical. Most patients return to work within 3–5 days. Avoiding sun exposure and wearing SPF is essential during recovery." },
    { q: "How long do Morpheus8 results last?", a: "Results continue to improve over 3–6 months as collagen regenerates. The effects typically last 12+ months, with annual maintenance sessions recommended." },
    { q: "Is Morpheus8 safe?", a: "Yes, when performed by a trained medical professional. At The Oxford Wellness Doctor, Morpheus8 is delivered exclusively by Dr. Inga Taganova, a GMC-registered doctor with specialist training in energy-based aesthetic devices." },
    { q: "How much does Morpheus8 cost in Oxford?", a: "Morpheus8 at The Oxford Wellness Doctor is priced by area: £300 for the tummy, £400 for eyes and around the mouth, £650 for the full face, neck and décolletage, and £800 for stretch marks and large areas. A resurfacing add-on is £300." },
    { q: "Can Morpheus8 be combined with other treatments?", a: "Yes - Morpheus8 pairs very well with skin booster injections, Profhilo, and anti-wrinkle injections. Dr. Taganova will create a combined treatment plan for the best possible outcomes." },
    { q: "What's the difference between Morpheus8 and standard microneedling?", a: "Standard microneedling works at the skin's surface. Morpheus8 combines microneedling with radiofrequency energy delivered deep into the dermis and subdermis - producing significantly more powerful collagen remodelling and skin tightening." },
    { q: "How do I book Morpheus8 in Oxford?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. Located at Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ. Open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Morpheus8 RF Microneedling Oxford",
    description: "Fractional radiofrequency microneedling treatment for non-surgical skin tightening, acne scar reduction, and collagen remodelling. Delivered in Oxford by Dr. Inga Taganova.",
  },
  relatedLinks: [
    { label: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
    { label: "Profhilo", href: "/treatments/profhilo-oxford" },
    { label: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function Morpheus8Page() {
  return <TreatmentPageTemplate data={data} />;
}
