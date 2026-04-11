import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Lip Fillers Oxford | Natural Lip Enhancement | Dr. Inga Taganova",
  metaDescription: "Expert lip fillers in Oxford by GMC-registered doctor. Natural lip enhancement and definition. Hyaluronic acid fillers. From £200. Book your free consultation today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/lip-fillers-oxford",
  h1: "Lip Fillers in Oxford - Expert Lip Enhancement",
  intro: "Lip filler treatment at The Oxford Wellness Doctor is guided by one principle: natural enhancement. Dr. Inga Taganova uses premium hyaluronic acid fillers to add subtle definition, hydration, and proportion to the lips - never the overfilled, artificial look that has become associated with less careful treatment.",
  sections: [
    {
      heading: "Lip Enhancement Options",
      paragraphs: ["Lip filler treatment in Oxford at our clinic is fully tailored to your anatomy and goals. Options include:"],
      bullets: [
        "Volume enhancement - adding soft, natural fullness",
        "Lip border definition - sharpening the cupid's bow and vermilion border",
        "Asymmetry correction - balancing uneven lip shape",
        "Cupid's bow definition - enhancing the natural heart shape of the upper lip",
        "Vertical lip lines treatment - softening lines above the upper lip",
        "Overall hydration and plumping - for naturally thin or ageing lips",
      ],
      note: "Dr. Taganova recommends starting conservatively - a smaller amount of filler placed expertly achieves a far more beautiful result than overfilling.",
    },
    {
      heading: "Our Approach to Lip Fillers",
      paragraphs: [
        "Before any filler is placed, Dr. Taganova conducts a detailed consultation to understand your aesthetic goals and assess your natural lip anatomy. She evaluates your facial proportions to ensure any enhancement is in harmony with your features.",
        "Gradual enhancement is strongly recommended. Lips that are built up gradually over multiple sessions - adding 0.5ml at a time - consistently produce better, more natural results than attempting a dramatic change in one session.",
      ],
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "A topical anaesthetic cream is applied to the lips before treatment. The filler is then carefully injected using a fine needle or cannula, depending on the technique Dr. Taganova determines is most suitable.",
        "Treatment takes approximately 30 minutes. Most patients experience only mild discomfort. The filler products used also contain lidocaine, a local anaesthetic, which further reduces any sensitivity during treatment.",
      ],
    },
    {
      heading: "What to Expect After Treatment",
      paragraphs: [
        "Results are immediate, though swelling is normal for 24–48 hours after lip filler treatment. The final, settled result is best assessed at 2 weeks, which is why a complimentary follow-up appointment is included.",
        "Lip fillers typically last 6–12 months. The lips have high blood flow and movement, which means filler metabolises more quickly here than in other facial areas. Regular maintenance is recommended to preserve results.",
      ],
    },
    {
      heading: "Why Doctor-Led Lip Filler Matters",
      paragraphs: [
        "The lips are surrounded by an intricate network of blood vessels. An injection placed incorrectly can cause a vascular occlusion - a medical emergency requiring immediate intervention. As a GMC-registered doctor, Dr. Taganova has the anatomical knowledge and medical training to prevent and manage any complications.",
        "Choosing a doctor-led clinic in Oxford for your lip fillers is not just about the aesthetic outcome - it is a matter of safety.",
      ],
    },
  ],
  pricing: [
    { name: "0.7ml Lip Filler", price: "£200" },
  ],
  faqs: [
    { q: "Will my lips look natural?", a: "Yes - if that is your goal. Dr. Taganova's philosophy is natural enhancement that complements your features. She will never place more filler than she believes is appropriate, and always prioritises your long-term lip health." },
    { q: "How long do lip fillers last?", a: "Lip fillers typically last 6–12 months. The lips have high movement and vascularity, which causes filler to metabolise relatively quickly. Regular maintenance helps sustain results." },
    { q: "Do lip fillers hurt?", a: "Discomfort is minimal. A topical anaesthetic cream is applied before treatment, and the filler itself contains lidocaine. Most patients describe the sensation as mild pressure or a slight pinch." },
    { q: "Can lip fillers be dissolved?", a: "Yes. Hyaluronic acid lip fillers are fully reversible using hyaluronidase enzyme. Results can be partially or completely dissolved quickly and safely if needed." },
    { q: "How much do lip fillers cost in Oxford?", a: "Lip fillers at The Oxford Wellness Doctor are £200 for 0.7ml. This includes a full consultation and complimentary two-week review." },
    { q: "What are the side effects of lip fillers?", a: "Common side effects include swelling, bruising, and tenderness, typically resolving within 3–5 days. Rare complications include lumps, asymmetry, or vascular issues, all of which are managed safely by Dr. Taganova as a qualified doctor." },
    { q: "How long does swelling last after lip fillers?", a: "Swelling is most noticeable in the first 24–48 hours. Most patients find it has fully settled by 7–14 days, at which point the final result is visible." },
    { q: "Can I eat and drink after lip fillers?", a: "Yes, but avoid very hot drinks and spicy food for the first few hours after treatment. Normal eating and drinking can resume shortly after the appointment." },
    { q: "How old do I need to be for lip fillers?", a: "You must be 18 or over to receive lip filler treatment at The Oxford Wellness Doctor. Dr. Taganova will always verify age and assess suitability during consultation." },
    { q: "How do I book lip fillers in Oxford?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. We are at 3 Woodstock Rd, Oxford OX2 6HA, open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Lip Fillers Oxford",
    description: "Hyaluronic acid lip filler treatment for natural lip enhancement, definition, and hydration. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
  },
  relatedLinks: [
    { label: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function LipFillersPage() {
  return <TreatmentPageTemplate data={data} />;
}
