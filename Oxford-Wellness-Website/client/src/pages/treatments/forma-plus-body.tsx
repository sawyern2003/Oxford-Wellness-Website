import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Forma Plus Body Contouring Oxford | RF Skin Tightening | Dr. Inga Taganova",
  metaDescription: "Forma Plus non-invasive body contouring in Oxford - radiofrequency skin tightening and firming for arms, abdomen, knees, and more. From £500. Zero downtime. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/forma-plus-body-contouring-oxford",
  h1: "Forma Plus Body Contouring in Oxford - Non-Invasive Radiofrequency Skin Tightening",
  intro: "Forma Plus is the body contouring version of the Forma facelift - using the same clinically validated radiofrequency platform from InMode, but with a larger handpiece designed to treat areas of skin laxity on the body. It is non-invasive, requires no downtime, and is ideal for patients who want to firm and tighten loose skin without surgery.",
  sections: [
    {
      heading: "What Body Areas Can Be Treated?",
      bullets: [
        "Arms - inner arm laxity ('bingo wings')",
        "Abdomen - post-pregnancy or weight loss skin looseness",
        "Inner thighs - laxity and crepey skin",
        "Knees - sagging skin around the kneecap",
        "Buttocks - lifting and firming",
        "Back - bra-line skin tightening",
      ],
    },
    {
      heading: "How Does Forma Plus Work?",
      paragraphs: [
        "The treatment works on the same principle as the Forma facial device: bipolar radiofrequency energy heats the deep dermis to a precise, sustained therapeutic temperature. This triggers both immediate collagen contraction and a longer-term regenerative response as new collagen and elastin are produced.",
        "The larger Forma Plus handpiece enables efficient treatment of larger body areas in a single session, with the same real-time temperature monitoring that ensures consistent safety and efficacy.",
      ],
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "Treatment sessions typically last 30–60 minutes depending on the number of areas treated. A conductive gel is applied, and the handpiece is moved slowly across the skin in a controlled pattern. The sensation is warm and comfortable - similar to a hot stone massage.",
        "There is no downtime. Some patients notice mild redness immediately post-treatment, which resolves within hours. Normal activities, including exercise, can be resumed the same day.",
      ],
    },
    {
      heading: "How Many Sessions Are Needed?",
      paragraphs: [
        "For best results, a course of 6–8 sessions is recommended, typically once or twice a week. Improvements develop progressively as new collagen forms over the months following treatment. Monthly maintenance sessions help sustain results long-term.",
        "Dr. Taganova will create a bespoke treatment plan based on your specific areas of concern, skin laxity, and goals.",
      ],
    },
    {
      heading: "Why The Oxford Wellness Doctor for Forma Plus?",
      bullets: [
        "Medical-grade InMode platform - clinically validated with published evidence",
        "Treatment overseen by Dr. Inga Taganova, GMC-registered physician",
        "Safe for all skin types - no risk of pigmentation changes",
        "No needles, no surgery, no downtime",
        "Tailored plans combining Forma Plus with other body treatments if appropriate",
        "Private clinic in Oxford with free parking",
      ],
    },
  ],
  pricing: [
    { name: "Forma Plus - Body (per session)", price: "£500" },
  ],
  faqs: [
    { q: "Is Forma Plus painful?", a: "No. The treatment is generally described as comfortable and warm - similar to a hot stone massage. The device's temperature monitoring keeps the treatment within a safe, effective range throughout." },
    { q: "How many sessions will I need?", a: "A course of 6–8 sessions is recommended for sustained results. Dr. Taganova will advise a personalised plan during consultation based on your specific areas and goals." },
    { q: "Is there any downtime?", a: "None. You may experience mild redness that settles within hours. You can exercise and resume all activities the same day." },
    { q: "Can Forma Plus help after weight loss?", a: "Yes. Forma Plus is particularly beneficial for skin laxity following significant weight loss, where loose skin has been left behind. It helps to improve firmness and tone without surgery." },
    { q: "Is Forma Plus safe for darker skin tones?", a: "Yes. Radiofrequency energy does not target pigment, making Forma Plus safe for all skin tones." },
    { q: "Can I combine Forma Plus with other treatments?", a: "Yes. Forma Plus pairs well with InMode FX for combined fat reduction and skin tightening, or with Morpheus8 for deeper remodelling. Dr. Taganova will advise on the optimal combination for your goals." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Forma Plus Body Contouring Oxford",
    description: "Non-invasive radiofrequency body skin tightening and contouring using InMode Forma Plus. Zero downtime. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
    bodyLocation: "Arms, abdomen, thighs, knees, back, buttocks",
  },
  relatedLinks: [
    { label: "InMode FX Skin Tightening", href: "/treatments/inmode-fx-skin-tightening-oxford" },
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "Forma Facelift", href: "/treatments/forma-facelift-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function FormaPlusBodyPage() {
  return <TreatmentPageTemplate data={data} />;
}
