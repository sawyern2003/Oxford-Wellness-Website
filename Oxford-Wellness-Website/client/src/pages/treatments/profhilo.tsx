import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Profhilo Oxford | Skin Booster Treatment | The Oxford Wellness Doctor",
  metaDescription: "Profhilo skin booster treatment in Oxford. Injectable hyaluronic acid for skin hydration, firmness & radiance. GMC doctor. From £300. Book your consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/profhilo-oxford",
  h1: "Profhilo in Oxford - Premium Skin Booster Treatment",
  intro: "Pure hyaluronic acid bio-remodels skin from within – stimulating collagen and elastin for lasting hydration, firmness, and radiance.",
  sections: [
    {
      heading: "What Profhilo Treats",
      bullets: [
        "Skin laxity and loss of firmness",
        "Fine lines from dehydration",
        "Dull, dehydrated skin",
        "Crepey texture on face and neck",
        "Ageing hands",
      ],
    },
    {
      heading: "The Treatment Protocol",
      paragraphs: [
        "Five injection points per side of the face (BAP technique). Two sessions, four weeks apart. 15–20 minutes each, no downtime.",
        "Improvements from 2–4 weeks; peak results 4–6 weeks after the second session. Lasts around 6 months.",
      ],
    },
    {
      heading: "Profhilo vs Fillers vs Anti-Wrinkle",
      tableHeaders: ["Treatment", "Mechanism", "Best For"],
      table: [
        { col1: "Profhilo", col2: "Stimulates collagen & elastin", col3: "Skin quality & hydration" },
        { col1: "Fillers", col2: "Adds volume with HA gel", col3: "Volume loss & contouring" },
        { col1: "Anti-wrinkle", col2: "Relaxes muscles", col3: "Expression lines" },
      ],
    },
  ],
  pricing: [
    { name: "Hyaluronic Acid Skinbooster (Profhilo)", price: "£250" },
  ],
  faqs: [
    { q: "What is Profhilo?", a: "Profhilo is an injectable skin booster containing pure hyaluronic acid that bio-remodels the skin from within, stimulating collagen and elastin production for improvements in firmness, hydration, and skin quality." },
    { q: "How is Profhilo different from dermal fillers?", a: "Unlike fillers, Profhilo does not add volume or structure. It spreads through the tissue to deeply hydrate and biologically stimulate the skin. The result is improved skin quality rather than a volumised or filled appearance." },
    { q: "Does Profhilo hurt?", a: "Most patients find Profhilo treatment very tolerable. Five small injections are placed on each side of the face using a fine needle. Discomfort is minimal and the appointment is brief." },
    { q: "How many Profhilo treatments do I need?", a: "The standard protocol is two sessions, four weeks apart. This is the minimum recommended to achieve full bio-remodeling results. Maintenance sessions every six months are recommended." },
    { q: "How long does Profhilo last?", a: "Results from a full course of Profhilo typically last around 6 months. A maintenance programme of two sessions per year is recommended to sustain collagen stimulation." },
    { q: "How much does Profhilo cost in Oxford?", a: "Profhilo and hyaluronic acid skinboosters at The Oxford Wellness Doctor are £250 per session. This includes a full consultation and follow-up appointment." },
    { q: "What areas can be treated with Profhilo?", a: "Profhilo is most commonly used on the face and neck, but it can also be used on the décolletage, hands, and inner arms. Dr. Taganova will advise on the most suitable areas during your consultation." },
    { q: "How do I book Profhilo in Oxford?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. We are located at Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ. Open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Profhilo Skin Booster Oxford",
    description: "Injectable hyaluronic acid bio-remodeling treatment that stimulates collagen and elastin production for improvements in skin firmness, hydration, and quality. Delivered in Oxford by Dr. Inga Taganova.",
  },
  relatedLinks: [
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function ProfhiloPage() {
  return <TreatmentPageTemplate data={data} />;
}
