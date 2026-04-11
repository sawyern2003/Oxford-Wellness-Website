import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Filler Dissolving Oxford | Hyaluronidase Treatment | Dr. Inga Taganova",
  metaDescription: "Filler dissolving in Oxford using hyaluronidase - safe removal of unwanted, migrated, or overfilled dermal filler by a GMC-registered doctor. £200. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/filler-dissolving-oxford",
  h1: "Filler Dissolving in Oxford - Hyaluronidase Treatment",
  intro: "Filler dissolving is a medical procedure in which hyaluronidase - an enzyme that breaks down hyaluronic acid - is injected to dissolve unwanted, migrated, or poorly placed dermal filler. Whether you are unhappy with previous filler results, experiencing complications, or simply want a fresh start, Dr. Inga Taganova offers safe, precise filler dissolving at our private Oxford clinic.",
  sections: [
    {
      heading: "When Is Filler Dissolving Recommended?",
      bullets: [
        "Overfilled appearance - too much volume that looks unnatural",
        "Filler migration - product has shifted from the original injection site",
        "Lumps, nodules, or irregular texture beneath the skin",
        "Asymmetry - uneven distribution of filler",
        "Vascular occlusion - in emergency cases, immediate dissolving may be required",
        "A desire to return to a natural appearance",
        "Reversal before new filler treatment can be placed correctly",
      ],
    },
    {
      heading: "Why a Medical Doctor for Filler Dissolving?",
      paragraphs: [
        "Hyaluronidase is a prescription-only medicine and must only be administered by a registered healthcare professional. More importantly, filler dissolving requires precise anatomical knowledge to be performed safely - the enzyme must be placed correctly to dissolve the target area without affecting surrounding tissues.",
        "Dr. Taganova's medical training and experience means she can also recognise and respond to any complications, including vascular involvement, which can occur in rare cases with filler in high-risk areas.",
      ],
    },
    {
      heading: "The Procedure - What to Expect",
      paragraphs: [
        "A patch test with hyaluronidase is always performed at least 30 minutes before treatment to check for allergic reaction. This is a non-negotiable safety step.",
        "After confirming no allergic response, the hyaluronidase is injected precisely into the area of concern. There may be mild stinging during the injection, and the area may swell or feel tender for 24–48 hours following treatment.",
        "The filler begins to dissolve within hours, with the full effect typically visible within 24–48 hours. In some cases, the area may look slightly over-corrected immediately after treatment before settling to its natural state.",
      ],
    },
    {
      heading: "After Dissolving - What Next?",
      paragraphs: [
        "Once the filler has fully dissolved (usually within 2 weeks), you can have a follow-up appointment with Dr. Taganova to assess the result and discuss next steps. If you wish to have new filler placed, it is generally recommended to wait 4–6 weeks after dissolving to allow the tissues to fully settle.",
        "Dr. Taganova will advise on whether and how filler could be replaced to achieve a more natural, appropriate result.",
      ],
    },
    {
      heading: "Why Choose The Oxford Wellness Doctor?",
      bullets: [
        "GMC-registered doctor with full prescribing rights - hyaluronidase is prescription-only",
        "Patch test always performed - patient safety is non-negotiable",
        "Deep anatomical expertise from medical and aesthetic training",
        "Compassionate, non-judgemental approach - no matter who administered the original filler",
        "On-site hyaluronidase always available as an emergency measure",
        "Private, discreet clinic in Oxford",
      ],
    },
  ],
  pricing: [
    { name: "Filler Dissolving (includes patch test)", price: "£200" },
    { name: "Follow-up Assessment (2 weeks)", price: "Complimentary" },
  ],
  faqs: [
    { q: "Is filler dissolving painful?", a: "There is mild stinging from the injection and the area may feel tender and swollen for 24–48 hours post-treatment. Topical anaesthetic can be applied beforehand to improve comfort." },
    { q: "How quickly does filler dissolve?", a: "Dissolution begins within hours of treatment. The full result is typically visible within 24–48 hours, though we recommend a two-week follow-up to fully assess the outcome." },
    { q: "Will I need more than one session?", a: "Most filler can be effectively dissolved in a single session. Occasionally, a second treatment is required for very dense or long-standing filler." },
    { q: "Can all types of filler be dissolved?", a: "Hyaluronidase dissolves hyaluronic acid (HA) filler - the most common type used today. It cannot dissolve non-HA fillers such as Radiesse or Sculptra. Dr. Taganova will assess the likely filler type before treatment." },
    { q: "Is a patch test always needed?", a: "Yes. A patch test is always performed at least 30 minutes before treatment to check for allergic reaction. This is a mandatory safety requirement." },
    { q: "Can I have new filler straight after dissolving?", a: "It is generally recommended to wait 4–6 weeks after dissolving before having new filler placed, to allow the tissues to fully settle and for Dr. Taganova to accurately assess the baseline." },
    { q: "Do you dissolve filler placed by other clinics?", a: "Yes. Dr. Taganova will assess and dissolve filler regardless of where it was originally placed, without judgement." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Filler Dissolving Oxford",
    description: "Hyaluronidase injection treatment to dissolve unwanted or migrated hyaluronic acid dermal filler. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
    bodyLocation: "Face, lips, and other previously filled areas",
  },
  relatedLinks: [
    { label: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { label: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function FillerDissolvingPage() {
  return <TreatmentPageTemplate data={data} />;
}
