import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Forma Facelift Oxford | Non-Surgical RF Skin Tightening | Dr. Inga Taganova",
  metaDescription: "Forma non-surgical facelift in Oxford - radiofrequency skin tightening with zero downtime. Lift, firm, and contour without surgery. £150 per session. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/forma-facelift-oxford",
  h1: "Forma Facelift in Oxford - Non-Surgical Radiofrequency Skin Tightening",
  intro: "The Forma Facelift is a non-invasive, clinically proven treatment that uses advanced bipolar radiofrequency energy to tighten, lift, and contour the face - with zero downtime and no needles. Often called the 'lunchtime facelift', it delivers immediate visible results and is safe for all skin types. At The Oxford Wellness Doctor, this treatment is performed personally by Dr. Inga Taganova using the InMode Forma technology.",
  sections: [
    {
      heading: "How Does Forma Work?",
      paragraphs: [
        "Forma uses bipolar radiofrequency energy to gently and consistently heat the deeper layers of the skin (the dermis) to a precise therapeutic temperature. This controlled heating triggers two effects:",
      ],
      bullets: [
        "Immediate skin contraction - existing collagen fibres tighten, giving instant lift and firmness",
        "Long-term collagen stimulation - heat stimulates fibroblasts to produce new collagen over the following weeks",
      ],
      note: "The Forma device has built-in real-time temperature monitoring to ensure safe, consistent results throughout the treatment. This precision distinguishes it from many other RF devices on the market.",
    },
    {
      heading: "What Areas Can Be Treated?",
      bullets: [
        "Forehead - lifting and smoothing",
        "Cheeks and mid-face - restoring volume and contour",
        "Jowls and lower face - tightening and lifting",
        "Neck - reducing laxity and crepey appearance",
        "Under-eye area - reducing fine lines and puffiness",
        "Décolletage - smoothing chest lines",
      ],
    },
    {
      heading: "The Procedure - What to Expect",
      paragraphs: [
        "The treatment takes approximately 45 minutes. A conductive gel is applied to the skin, and the Forma handpiece is moved in slow, circular motions across the treatment area. The sensation is described as a warm massage - comfortable and relaxing for most patients.",
        "There is absolutely no downtime. Your skin may appear slightly flushed immediately after treatment, which resolves within a few hours. You can return to normal activities, apply makeup, and continue your day straight away.",
      ],
    },
    {
      heading: "How Many Sessions Will I Need?",
      paragraphs: [
        "A single Forma session delivers a noticeable immediate result - making it popular as an event-preparation treatment. For sustained long-term improvement in skin quality and firmness, a course of 6–8 weekly sessions is recommended, followed by monthly maintenance.",
        "Dr. Taganova will assess your skin during consultation and recommend a personalised treatment plan based on your age, skin laxity, and goals.",
      ],
    },
    {
      heading: "Why Choose The Oxford Wellness Doctor for Forma?",
      bullets: [
        "InMode Forma technology - one of the most clinically validated RF platforms available",
        "Treatment performed personally by Dr. Inga Taganova - GMC-registered physician",
        "Zero downtime - suitable even before important events",
        "Safe for all skin types, including darker skin tones",
        "Private, professional clinic in Oxford with free parking",
        "Tailored treatment plans with honest, medically informed advice",
      ],
    },
  ],
  pricing: [
    { name: "Single Forma Facelift Session", price: "£150" },
    { name: "Course of 6 Sessions", price: "£800" },
  ],
  faqs: [
    { q: "Is Forma painful?", a: "No. Most patients find the treatment comfortable and relaxing - often described as a warm, deep massage. The device's real-time temperature monitoring ensures you stay within the safe therapeutic range at all times." },
    { q: "How soon will I see results?", a: "Many patients notice immediate skin tightening and a healthy glow after their first session. Collagen remodelling continues over 3–6 months, with progressive improvement seen with each session in a course." },
    { q: "How many treatments do I need?", a: "A course of 6–8 weekly sessions is recommended for sustained results, followed by monthly maintenance. A single session provides a visible immediate result and is popular as a pre-event treatment." },
    { q: "Is there any downtime?", a: "None. You may notice mild redness that settles within hours, but you can apply makeup and resume all activities immediately." },
    { q: "Is Forma safe for dark skin tones?", a: "Yes. Forma uses radiofrequency rather than light-based energy, making it safe for all skin tones, including darker skin types that may not be suitable for laser or IPL treatments." },
    { q: "How is Forma different from other skin tightening treatments?", a: "Forma's real-time temperature monitoring ensures consistent results and safety. Unlike many handheld or spa-grade RF devices, the InMode Forma platform is a medical-grade technology with substantial clinical evidence." },
    { q: "Can Forma be combined with other treatments?", a: "Yes. Forma works well alongside injectables, skin boosters, and Morpheus8. Dr. Taganova will advise on the optimal combination and sequencing during your consultation." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Forma Facelift Oxford",
    description: "Non-surgical radiofrequency skin tightening and lifting treatment using InMode Forma technology. Zero downtime. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
    bodyLocation: "Face, neck, décolletage",
  },
  relatedLinks: [
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "Profhilo & Skin Boosters", href: "/treatments/profhilo-oxford" },
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function FormaFaceliftPage() {
  return <TreatmentPageTemplate data={data} />;
}
