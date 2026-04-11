import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Anti-Wrinkle Injections Oxford | Botox Treatment | Dr. Inga Taganova",
  metaDescription: "Professional anti-wrinkle injections in Oxford by Dr. Inga Taganova. Reduce forehead lines, frown lines & crow's feet. GMC-registered doctor. From £190. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/anti-wrinkle-injections-oxford",
  h1: "Anti-Wrinkle Injections in Oxford - Expert Botox Treatment",
  intro: "Anti-wrinkle injections are the UK's most popular non-surgical cosmetic treatment - and when delivered by a GMC-registered doctor with 20+ years of medical experience, they are also one of the safest. At The Oxford Wellness Doctor, Dr. Inga Taganova uses her deep clinical expertise to achieve subtle, natural-looking results that enhance rather than alter your appearance.",
  sections: [
    {
      heading: "What Can Anti-Wrinkle Injections Treat?",
      paragraphs: [
        "Anti-wrinkle injections - commonly known by the brand name Botox - work by temporarily relaxing the facial muscles responsible for dynamic wrinkles. At our Oxford clinic, we use premium botulinum toxin products to treat a wide range of concerns:",
      ],
      bullets: [
        "Forehead lines - horizontal lines that appear with raised eyebrows",
        "Frown lines (glabellar lines) - vertical lines between the brows",
        "Crow's feet - fine lines at the outer corners of the eyes",
        "Bunny lines - wrinkles across the nose bridge when smiling",
        "Gummy smile - reducing excess gum visibility when smiling",
        "Brow lift - subtle elevation of the brow arch",
        "Lip lines - vertical lines above the upper lip",
      ],
      note: "All anti-wrinkle treatment in Oxford at our clinic is delivered personally by Dr. Taganova, never by a nurse or non-medical practitioner.",
    },
    {
      heading: "The Procedure - What to Expect",
      paragraphs: [
        "Your appointment begins with a thorough consultation. Dr. Taganova will assess your facial anatomy, skin quality, and muscle movement before discussing which areas to treat and what result to expect. She will never recommend treatment that she doesn't believe is appropriate for you.",
        "The treatment itself takes just 15–20 minutes. Using ultra-fine needles, small amounts of botulinum toxin are injected precisely into the targeted muscles. Most patients describe the sensation as a mild pinch. No anaesthetic is required, though numbing cream is available if preferred.",
        "There is no downtime. You can return to your normal day immediately, though we recommend avoiding strenuous exercise, alcohol, and lying flat for the first few hours.",
      ],
    },
    {
      heading: "Results & Duration",
      paragraphs: [
        "Results from anti-wrinkle injections are not instant - the product takes 3–7 days to begin working, with full results visible at 14 days. This is why Dr. Taganova includes a complimentary two-week follow-up with every treatment, to assess the outcome and make any minor adjustments needed.",
        "Results typically last 3–4 months. With regular, consistent treatment over time, many patients find their results extend as the targeted muscles become progressively more relaxed. Dr. Taganova will advise on the ideal maintenance schedule for your individual needs.",
      ],
    },
    {
      heading: "Why Choose The Oxford Wellness Doctor for Anti-Wrinkle Treatment?",
      bullets: [
        "GMC-registered doctor with 20+ years of clinical experience",
        "Former gynaecologist with deep understanding of facial anatomy",
        "Conservative, natural-looking philosophy - results that whisper, not shout",
        "Professional clinic in Oxford, Littlemore - discreet medical environment",
        "Only premium, licensed botulinum toxin products used",
        "Full consultation, treatment, and two-week follow-up included in price",
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
    { q: "How do I book an appointment at The Oxford Wellness Doctor?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. We are located at 3 Woodstock Rd, Oxford OX2 6HA, open Friday 4–8pm and Saturday 9am–1pm." },
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
