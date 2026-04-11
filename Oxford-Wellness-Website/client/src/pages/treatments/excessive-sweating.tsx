import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Excessive Sweating Treatment Oxford | Hyperhidrosis | Stop Sweating",
  metaDescription: "Effective excessive sweating treatment in Oxford. Botulinum toxin injections for underarms to stop hyperhidrosis. GMC-registered doctor. £500. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/excessive-sweating-treatment-oxford",
  h1: "Excessive Sweating Treatment in Oxford - Hyperhidrosis Solutions",
  intro: "Hyperhidrosis - excessive sweating that goes beyond the body's normal thermoregulation - affects millions of people and can have a significant impact on confidence and quality of life. At The Oxford Wellness Doctor, Dr. Inga Taganova offers a highly effective, medically proven solution using botulinum toxin injections to dramatically reduce sweating and restore confidence.",
  sections: [
    {
      heading: "How Anti-Wrinkle Injections Treat Excessive Sweating",
      paragraphs: [
        "Botulinum toxin works by blocking the nerve signals that activate the sweat glands. When injected into the affected area, it temporarily prevents the glands from responding to stimulation - producing a dramatic reduction in sweating that typically lasts 6–9 months.",
        "This is an FDA-approved and MHRA-approved treatment for primary axillary hyperhidrosis (underarm sweating). It is also widely used off-label for palmar (hands), plantar (feet), and facial hyperhidrosis with excellent results.",
      ],
    },
    {
      heading: "Treatment Areas for Hyperhidrosis",
      bullets: [
        "Underarms (axillary hyperhidrosis) - the most common treatment area, achieving up to 87% reduction in sweating",
        "Palms (palmar hyperhidrosis) - treating excessive hand sweating that affects daily activities and social confidence",
        "Feet (plantar hyperhidrosis) - reducing sweating of the soles",
        "Forehead and scalp - treating facial sweating and scalp perspiration",
      ],
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "The treatment area is first prepared and a starch-iodine test may be used to map the most active sweat gland areas precisely. A series of small, shallow injections is then placed evenly across the treatment zone.",
        "Treatment takes approximately 30 minutes for underarms. Discomfort is minimal - the skin of the underarm is not particularly sensitive, and very fine needles are used throughout. A topical anaesthetic cream can be applied for palmar treatment where the skin is more sensitive.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "Most patients notice a significant reduction in sweating within 5–7 days of treatment. Full results are achieved at 2 weeks, with studies demonstrating up to 87% reduction in sweat production in the underarms.",
        "Results are genuinely life-changing for many patients - eliminating the anxiety around clothing choices, handshakes, and social situations that hyperhidrosis causes. Treatment lasts 6–9 months, and many patients return regularly to maintain their results.",
      ],
    },
  ],
  pricing: [
    { name: "Excessive Sweating - Armpits/Underarm", price: "£500" },
  ],
  faqs: [
    { q: "How does botulinum toxin treat excessive sweating?", a: "Botulinum toxin blocks the nerve signals that activate sweat glands. When injected into the affected area, it prevents the glands from responding to stimulation, dramatically reducing sweat production for 6–9 months." },
    { q: "How long does hyperhidrosis treatment last?", a: "Results typically last 6–9 months. Many patients return for maintenance treatment twice a year to keep sweating consistently under control." },
    { q: "Does the treatment hurt?", a: "Underarm treatment is generally very well-tolerated as the skin is not particularly sensitive. A topical anaesthetic can be used for palmar (hand) treatment. Most patients describe minimal discomfort." },
    { q: "Is hyperhidrosis treatment safe?", a: "Yes. Botulinum toxin treatment for hyperhidrosis is FDA and MHRA approved and has an excellent long-term safety record. When administered by a GMC-registered doctor, risks are minimal." },
    { q: "How much does excessive sweating treatment cost in Oxford?", a: "At The Oxford Wellness Doctor, underarm hyperhidrosis treatment is £500. This includes the treatment session and a complimentary follow-up appointment." },
    { q: "Can I treat areas other than the underarms?", a: "Yes. Dr. Taganova treats palmar (hands), plantar (feet), and facial hyperhidrosis in addition to underarms. She will assess the most appropriate approach for your specific concerns during consultation." },
    { q: "When will I see results?", a: "Most patients notice a reduction in sweating within 5–7 days, with full results visible at 2 weeks. A follow-up is included to assess the outcome and address any areas needing a top-up." },
    { q: "How do I book hyperhidrosis treatment?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. We are at 3 Woodstock Rd, Oxford OX2 6HA, open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Excessive Sweating Treatment Oxford - Hyperhidrosis",
    description: "Botulinum toxin injections to treat hyperhidrosis (excessive sweating) of the underarms, palms, and feet. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
  },
  relatedLinks: [
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function ExcessivesweatingPage() {
  return <TreatmentPageTemplate data={data} />;
}
