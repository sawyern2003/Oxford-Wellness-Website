import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Morpheus8 Oxford | RF Microneedling | Skin Tightening Treatment",
  metaDescription: "Morpheus8 radiofrequency microneedling in Oxford. Non-surgical skin tightening for face & body. Reduces wrinkles, scars & improves texture. Book consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/morpheus8-oxford",
  h1: "Morpheus8 in Oxford - Advanced RF Microneedling Treatment",
  intro: "Morpheus8 is one of the most powerful non-surgical skin tightening and remodelling treatments available. By combining fractional microneedling with radiofrequency energy, it reaches deep into the dermis and subdermal tissue to trigger profound collagen remodelling - producing results that were previously only achievable with surgery.",
  sections: [
    {
      heading: "How Morpheus8 Works",
      paragraphs: [
        "Morpheus8 uses a matrix of fine gold-plated microneedles that penetrate the skin at precise, adjustable depths. As the needles enter the skin, they simultaneously emit radiofrequency energy into the dermis and subdermis - heating the tissue to a carefully controlled temperature.",
        "This dual action triggers two processes: the needles create micro-injury channels that stimulate the skin's wound-healing response, while the RF energy causes collagen fibres to contract immediately and promotes new collagen and elastin synthesis over the following months.",
      ],
    },
    {
      heading: "What Morpheus8 Treats",
      bullets: [
        "Loose or lax skin on face, neck, and jowls",
        "Deep wrinkles and folds",
        "Acne scars and post-inflammatory scarring",
        "Large pores and uneven skin texture",
        "Loss of definition along the jawline",
        "Neck laxity and horizontal neck lines",
        "Stretch marks and body skin laxity",
      ],
    },
    {
      heading: "Treatment Areas",
      paragraphs: ["Morpheus8 is exceptionally versatile and can be applied to multiple areas of the face and body:"],
      bullets: [
        "Full face - overall tightening, lifting, and rejuvenation",
        "Lower face and jowls - jawline definition and lifting",
        "Neck - tightening loose, crepey neck skin",
        "Abdomen - skin tightening following weight loss or pregnancy",
        "Arms and thighs - reducing skin laxity on the body",
        "Knees - tightening loose skin around the knees",
      ],
    },
    {
      heading: "The Morpheus8 Procedure",
      paragraphs: [
        "A topical numbing cream is applied approximately 45–60 minutes before treatment to maximise your comfort. The Morpheus8 handpiece is then moved methodically across the treatment area.",
        "Treatment time is 30–60 minutes depending on the area. Most patients describe a warm, prickling sensation during the procedure. The depth and intensity of the RF energy are precisely calibrated by Dr. Taganova for your specific skin concerns and goals.",
      ],
    },
    {
      heading: "Recovery & Results",
      paragraphs: [
        "Redness and mild swelling are expected for 2–5 days after Morpheus8 treatment. Tiny pinpoint marks from the needles typically resolve within 24–48 hours. Most patients feel comfortable returning to work and social activities within 3–5 days with appropriate skincare and SPF.",
        "Unlike surface treatments, Morpheus8 results develop gradually as new collagen forms - typically becoming fully visible over 3–6 months. A course of three sessions, spaced 4–6 weeks apart, is recommended for optimal results, which can last 12+ months.",
      ],
      note: "Dr. Taganova will create a personalised aftercare plan including recommended skincare products to support healing and maximise your results.",
    },
    {
      heading: "Why Choose Doctor-Led Morpheus8 in Oxford?",
      paragraphs: [
        "Morpheus8 is a medical-grade device that requires advanced training and a thorough understanding of skin anatomy to be used safely and effectively. In the hands of an untrained practitioner, the risks include burns, scarring, and infection.",
        "At The Oxford Wellness Doctor, Morpheus8 is delivered exclusively by Dr. Taganova - a GMC-registered doctor with comprehensive training in energy-based devices and the medical expertise to manage any complications.",
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
    { q: "How do I book Morpheus8 in Oxford?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. Located at 3 Woodstock Rd, Oxford OX2 6HA. Open Friday 4–8pm and Saturday 9am–1pm." },
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
