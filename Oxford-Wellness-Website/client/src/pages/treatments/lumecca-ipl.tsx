import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Lumecca IPL Oxford | Pigmentation, Rosacea & Skin Rejuvenation | Dr. Inga Taganova",
  metaDescription: "Lumecca intense pulsed light treatment in Oxford - clear pigmentation, sun damage, rosacea, spider veins, and acne. GMC-registered doctor. From £80. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/lumecca-ipl-oxford",
  h1: "Lumecca IPL in Oxford - Intense Pulsed Light for Clearer, Brighter Skin",
  intro: "Lumecca is one of the most powerful and effective intense pulsed light (IPL) devices available - delivering up to three times the energy of standard IPL systems. At The Oxford Wellness Doctor, it is used to treat a wide range of skin concerns including sun damage, pigmentation, rosacea, thread veins, and acne - achieving remarkable clarity and rejuvenation in just a small number of sessions.",
  sections: [
    {
      heading: "What Can Lumecca IPL Treat?",
      bullets: [
        "Sun spots and age spots (solar lentigines) - including on the face, chest, and hands",
        "Rosacea - flushing, diffuse redness, and visible facial vessels",
        "Thread veins and spider veins - on the face and body",
        "Post-inflammatory hyperpigmentation - following acne or skin trauma",
        "Acne and active breakouts - reducing bacteria and inflammation",
        "Uneven skin tone and dull complexion",
        "General photorejuvenation - improving overall skin clarity and quality",
      ],
    },
    {
      heading: "How Does Lumecca Work?",
      paragraphs: [
        "IPL delivers controlled pulses of broad-spectrum light into the skin, which is selectively absorbed by specific chromophores - either melanin (in pigmented lesions) or haemoglobin (in vascular lesions). The light energy converts to heat, causing the targeted cells to break down and be naturally cleared by the body.",
        "Lumecca's high-peak power means fewer sessions are needed compared to standard IPL devices, with more consistent and faster results. The Lumecca photofacial can treat the whole face in under 30 minutes.",
      ],
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "A consultation and patch test is always carried out before your first Lumecca treatment to confirm suitability and calibrate the correct settings for your skin type. This is particularly important to avoid any risk of pigmentation change in darker skin tones.",
        "During treatment, protective eyewear is worn. A cool gel is applied to the skin, and the Lumecca handpiece delivers precisely timed light pulses. The sensation is similar to a light snap of an elastic band - brief and well-tolerated by most patients.",
        "Immediately after treatment, pigmented lesions will appear slightly darker (they then flake off over 7–10 days). Vascular lesions may look temporarily more pronounced before fading. Some redness and warmth is normal and settles within a few hours.",
      ],
    },
    {
      heading: "How Many Sessions Are Needed?",
      paragraphs: [
        "Many patients see significant improvement after just 1–2 sessions. For more complex concerns such as widespread rosacea or extensive sun damage, a course of 3–5 sessions may be recommended, spaced 4–6 weeks apart.",
        "Dr. Taganova will assess your skin during consultation and recommend the appropriate number of sessions and treatment intervals for your specific concerns.",
      ],
    },
    {
      heading: "Why The Oxford Wellness Doctor for Lumecca IPL?",
      bullets: [
        "Lumecca by InMode - one of the most powerful IPL systems available",
        "GMC-registered physician with 20+ years of clinical experience",
        "Patch test always performed - your safety is never compromised",
        "Personalised settings calibrated precisely for your skin type and concern",
        "Clear, honest advice about what IPL can and cannot achieve",
        "Private clinic in Oxford with free parking",
      ],
    },
  ],
  pricing: [
    { name: "IPL Consultation & Patch Test", price: "£25" },
    { name: "IPL Photofacial - Whole Face", price: "£80" },
    { name: "IPL Lumecca - Acne (1 session)", price: "£150" },
    { name: "IPL Lumecca - Acne (2 sessions)", price: "£250" },
    { name: "IPL Lumecca - Pigmentation", price: "£150" },
    { name: "IPL Lumecca - Rosacea", price: "£223" },
    { name: "IPL Lumecca - Spider Veins", price: "£223" },
  ],
  faqs: [
    { q: "Is IPL safe for all skin tones?", a: "IPL works best on lighter skin tones (Fitzpatrick I–III) and requires careful assessment before treating medium or darker skin. A patch test is always performed to confirm suitability and calibrate the correct settings." },
    { q: "How many sessions will I need?", a: "1–2 sessions is often sufficient for mild pigmentation or sun damage. For rosacea, acne, or more extensive concerns, a course of 3–5 sessions spaced 4–6 weeks apart may be recommended." },
    { q: "Is IPL painful?", a: "Most patients describe a brief, tolerable snapping sensation with each pulse. The Lumecca handpiece has a built-in cooling mechanism that helps minimise discomfort." },
    { q: "What should I avoid before and after IPL?", a: "Avoid sun exposure, tanning, and self-tan for at least 4 weeks before treatment. After treatment, use high-SPF sun protection daily. Avoid active retinoids for a week post-treatment." },
    { q: "Will my pigmentation get worse before it gets better?", a: "Yes - this is normal and expected. Pigmented lesions will darken for 3–7 days post-treatment before flaking away, revealing clearer skin beneath." },
    { q: "Can IPL be combined with other treatments?", a: "Yes. IPL pairs well with Profhilo, skin boosters, and chemical peels for a comprehensive skin rejuvenation programme. Dr. Taganova will advise on the best combination and sequencing for your goals." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Lumecca IPL Oxford",
    description: "High-power intense pulsed light treatment for pigmentation, rosacea, thread veins, and acne. Delivered by GMC-registered Dr. Inga Taganova in Oxford using InMode Lumecca.",
    bodyLocation: "Face, neck, chest, hands",
  },
  relatedLinks: [
    { label: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
    { label: "Profhilo & Skin Boosters", href: "/treatments/profhilo-oxford" },
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function LumeccaIPLPage() {
  return <TreatmentPageTemplate data={data} />;
}
