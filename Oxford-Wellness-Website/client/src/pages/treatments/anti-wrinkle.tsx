import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Anti-Wrinkle Injections Oxford | Botox Treatment | Dr. Inga Taganova",
  metaDescription: "Professional anti-wrinkle injections in Oxford by Dr. Inga Taganova. Reduce forehead lines, frown lines & crow's feet. GMC-registered doctor. From £190. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/anti-wrinkle-injections-oxford",
  h1: "Anti-Wrinkle Injections in Oxford - Expert Botox Treatment",
  intro: "Botulinum toxin relaxes facial muscles to smooth dynamic lines with subtle, natural-looking results.",
  sections: [
    {
      heading: "What Can Anti-Wrinkle Injections Treat?",
      bullets: [
        "Forehead lines",
        "Frown lines between the brows",
        "Crow's feet",
        "Bunny lines and gummy smile",
        "Brow lift and lip lines",
      ],
    },
    {
      heading: "The Procedure - What to Expect",
      paragraphs: [
        "Consultation to assess your facial anatomy and agree treatment areas.",
        "15–20 minute treatment with ultra-fine needles. Mild pinch, no anaesthetic needed. No downtime.",
      ],
    },
    {
      heading: "Results & Duration",
      paragraphs: [
        "Results begin at 3–7 days, full effect at 14 days. Free two-week follow-up included. Lasts 3–4 months.",
      ],
    },
  ],
  pricing: [
    { name: "1 Area", price: "£190" },
    { name: "2 Areas", price: "£250" },
    { name: "3 Areas", price: "£300" },
    { name: "Bunny Lines (add-on)", price: "£50" },
    { name: "Dimpled Chin", price: "£150" },
    { name: "Dimpled Chin (add-on)", price: "£50" },
    { name: "Downturned Mouth (add-on)", price: "£50" },
  ],
  faqs: [
    { q: "How long do anti-wrinkle injections last?", a: "Anti-wrinkle injections typically last 3–4 months. Results vary depending on factors like muscle strength, metabolism, and lifestyle. Regular maintenance treatments help sustain results, and many patients find their results extend over time." },
    { q: "Are anti-wrinkle injections painful?", a: "Most patients experience minimal discomfort. The needles used are very fine, and the procedure is quick. No anaesthetic is usually needed, though numbing cream is available on request." },
    { q: "What's the difference between Botox and other anti-wrinkle treatments?", a: "Botox is a brand name for botulinum toxin type A. We use premium anti-wrinkle products that work by temporarily relaxing the muscles that cause lines. All products are safe, licensed, and deliver excellent results when administered by an experienced doctor." },
    { q: "How much do anti-wrinkle injections cost in Oxford?", a: "At The Oxford Wellness Doctor, anti-wrinkle injections are £190 for one area, £250 for two areas, and £300 for three areas. Add-on areas such as bunny lines, dimpled chin, or downturned mouth are £50 each. All prices include a complimentary two-week follow-up." },
    { q: "What are the side effects?", a: "Side effects are generally mild and temporary, including slight redness, swelling, or bruising at injection sites. Rare side effects include temporary eyelid drooping, which resolves naturally. Dr. Taganova's medical expertise and precise technique minimise all risks." },
    { q: "Can I drive after treatment?", a: "Yes, you can drive immediately after anti-wrinkle injections. There is no downtime, and you can return to normal activities right away." },
    { q: "How long until I see results?", a: "Results typically become visible within 3–7 days, with full effects apparent after 14 days. We include a free two-week follow-up appointment to assess your results." },
    { q: "Are anti-wrinkle injections safe during pregnancy?", a: "Anti-wrinkle injections are not recommended during pregnancy or breastfeeding as a precautionary measure. Dr. Taganova will discuss your medical history fully during consultation." },
    { q: "Who should not have anti-wrinkle injections?", a: "Anti-wrinkle injections are not suitable for pregnant or breastfeeding women, people with certain neuromuscular conditions, or those with known allergy to botulinum toxin. Dr. Taganova assesses your suitability thoroughly during consultation." },
    { q: "How do I book an appointment at The Oxford Wellness Doctor?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. We are located at Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ, open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Anti-Wrinkle Injections Oxford",
    description: "Botulinum toxin injections to reduce dynamic facial wrinkles including forehead lines, frown lines, and crow's feet. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
  },
  relatedLinks: [
    { label: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { label: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
    { label: "Profhilo Skin Booster", href: "/treatments/profhilo-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function AntiWrinklePage() {
  return <TreatmentPageTemplate data={data} />;
}
