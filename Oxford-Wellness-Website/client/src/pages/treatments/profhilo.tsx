import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Profhilo Oxford | Skin Booster Treatment | The Oxford Wellness Doctor",
  metaDescription: "Profhilo skin booster treatment in Oxford. Injectable hyaluronic acid for skin hydration, firmness & radiance. GMC doctor. From £300. Book your consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/profhilo-oxford",
  h1: "Profhilo in Oxford - Premium Skin Booster Treatment",
  intro: "Profhilo is one of the most innovative skin treatments available today - and it is quite different from traditional dermal fillers. Rather than adding volume, Profhilo bio-remodels the skin from within, stimulating the production of collagen and elastin for lasting improvements in skin quality, firmness, and hydration.",
  sections: [
    {
      heading: "How Profhilo Works",
      paragraphs: [
        "Profhilo is an injectable treatment containing one of the highest concentrations of pure hyaluronic acid available - 64mg in a 2ml solution. Unlike standard dermal fillers, it has no added chemicals or cross-linking agents.",
        "When injected, Profhilo disperses slowly through the tissue, hydrating the skin deeply and triggering a biological response that stimulates all four types of collagen as well as elastin. This is called bio-remodeling - and the results are a genuine improvement in skin quality, not just a temporary plumping effect.",
      ],
    },
    {
      heading: "What Profhilo Treats",
      bullets: [
        "Skin laxity - improving firmness and elasticity",
        "Fine lines - particularly surface lines caused by dehydration",
        "Dehydrated, dull skin - restoring a healthy, luminous glow",
        "Crepey skin texture on the face, neck, and décolletage",
        "Loss of firmness in the lower face and jowl area",
        "Ageing hands - restoring hydration and firmness",
      ],
      note: "Profhilo is one of Dr. Taganova's most recommended treatments for patients in their 30s, 40s, and 50s looking for a natural, restorative result without added volume.",
    },
    {
      heading: "The Treatment Protocol",
      paragraphs: [
        "Profhilo is delivered using the BAP (Bio Aesthetic Points) technique - five precise injection points on each side of the face. This strategic placement allows the product to spread evenly across the tissue for optimal coverage.",
        "The standard protocol is two sessions, spaced four weeks apart. Each session takes approximately 15–20 minutes. There is very little discomfort and no downtime - most patients return to normal activities immediately.",
      ],
    },
    {
      heading: "Results Timeline",
      paragraphs: [
        "Most patients begin to notice improvements in skin hydration and texture within 2–4 weeks of the first session. The most significant results are seen 4–6 weeks after the second session, as collagen and elastin production peaks.",
        "Results typically last around 6 months. A maintenance programme of two sessions per year is recommended to sustain the benefits. Many patients combine Profhilo with other treatments such as anti-wrinkle injections or Morpheus8 for a comprehensive skin health approach.",
      ],
    },
    {
      heading: "Profhilo vs Dermal Fillers vs Anti-Wrinkle Injections",
      tableHeaders: ["Treatment", "Mechanism", "Best For"],
      table: [
        { col1: "Profhilo", col2: "Bio-remodeling - stimulates collagen & elastin", col3: "Skin quality, hydration, firmness" },
        { col1: "Dermal Fillers", col2: "Adds volume and structure with HA gel", col3: "Volume loss, deep folds, contouring" },
        { col1: "Anti-Wrinkle Injections", col2: "Relaxes muscles to smooth dynamic lines", col3: "Expression lines, frown lines, crow's feet" },
      ],
      paragraphs: ["These three treatments work in entirely different ways and are highly complementary. Dr. Taganova will advise on the best combination for your individual goals during consultation."],
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
    { q: "How do I book Profhilo in Oxford?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. We are located at 3 Woodstock Rd, Oxford OX2 6HA. Open Friday 4–8pm and Saturday 9am–1pm." },
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
