import BlogPostTemplate, { BlogPostData } from "@/components/blog/BlogPostTemplate";
import profhiloImg from "@/assets/blog/profhilo-vs-dermal-fillers.png";

const data: BlogPostData = {
  title: "Profhilo vs. Dermal Fillers: Which Treatment Is Right for You?",
  metaDescription: "Doctor explains the difference between Profhilo and dermal fillers. Which is best for your concerns? Expert guide from Dr. Inga Taganova, Oxford.",
  canonical: "https://www.theoxfordwellnessdoctor.com/blog/profhilo-vs-dermal-fillers",
  h1: "Profhilo vs. Dermal Fillers: Which Treatment Is Right for You?",
  category: "Skin Treatments",
  readTime: "6 min",
  intro: "Profhilo and dermal fillers are two of the most popular injectable skin treatments available - and they are frequently confused with each other. Both involve injecting hyaluronic acid. Both can improve the appearance of ageing skin. But they work in fundamentally different ways, address different concerns, and produce quite different results. Dr. Inga Taganova explains the distinction and helps you understand which treatment - or which combination - is most appropriate for your specific concerns.",
  sections: [
    {
      heading: "What is Profhilo?",
      image: { src: profhiloImg, alt: "Profhilo skin booster and regenerative medicine treatment being administered at The Oxford Wellness Doctor, Oxford - by GMC-registered Dr. Inga Taganova", position: "right" as const },
      paragraphs: [
        "Profhilo is a highly concentrated, ultra-pure hyaluronic acid injectable treatment - but it is not a filler. It contains no added chemicals, no lidocaine, and no cross-linking agents. It is one of the most biocompatible injectables available.",
        "Unlike traditional fillers, Profhilo does not sit in one place. It is a 'bioremodeller' - it spreads through the skin tissues and stimulates fibroblasts (the cells that produce collagen and elastin) to rebuild the skin's structural matrix. The result is improved skin quality: better hydration, more elasticity, improved texture, and a more radiant appearance.",
        "Profhilo is administered using the BAP (Bio Aesthetic Points) technique - five injection points on each side of the face. Treatment takes approximately 30 minutes and results build over the 4 weeks following each session. A standard course is two sessions one month apart.",
      ],
    },
    {
      heading: "What Are Dermal Fillers?",
      paragraphs: [
        "Dermal fillers are cross-linked hyaluronic acid products designed to stay in a specific location and provide structural volume, definition, or lift. Cross-linking creates a gel of specific consistency - from very soft (for delicate areas like lips) to very firm (for deep structural augmentation).",
        "Unlike Profhilo, fillers are designed to do a structural job: replace volume lost through ageing, define a jawline, lift the cheeks, smooth a nasolabial fold, or augment the lips. They sit in the tissue at the injection point and remain there for 9–18 months depending on the product and the area treated.",
        "Dermal fillers are highly versatile - they can address specific structural concerns with precision. But they require accurate placement and a thorough understanding of facial anatomy. In the wrong hands, poor filler technique can produce visible lumps, unnatural appearance, or - rarely but seriously - vascular complications.",
      ],
    },
    {
      heading: "Profhilo vs Dermal Fillers: Key Differences",
      tableHeaders: ["Feature", "Profhilo", "Dermal Fillers"],
      table: [
        { col1: "Primary goal", col2: "Improve skin quality", col3: "Restore volume/structure" },
        { col1: "Hyaluronic acid", col2: "Not cross-linked - spreads through tissue", col3: "Cross-linked - stays in place" },
        { col1: "What it treats", col2: "Skin laxity, dryness, dullness, fine texture", col3: "Volume loss, specific lines, definition" },
        { col1: "Injection technique", col2: "5 BAP points per side", col3: "Precise placement at targeted areas" },
        { col1: "Results visible", col2: "4–6 weeks after each session", col3: "Immediately (with swelling)" },
        { col1: "Duration", col2: "6–9 months", col3: "9–18 months depending on area" },
        { col1: "Looks like", col2: "Healthier, glowing version of you", col3: "More defined/volumised version of you" },
        { col1: "Best for", col2: "Overall skin quality, menopause skin, skin maintenance", col3: "Hollow cheeks, lip enhancement, jawline" },
      ],
    },
    {
      heading: "When to Choose Profhilo",
      paragraphs: [
        "Profhilo is the ideal treatment for patients whose primary concern is the overall quality of their skin rather than specific volume loss or structural changes. Typical Profhilo patients include:",
      ],
      bullets: [
        "Patients in their 40s or 50s noticing that skin has lost its hydration and glow",
        "Women experiencing the skin changes associated with perimenopause or menopause",
        "Patients who want natural-looking skin improvement without adding volume",
        "Those whose skin has become crepey, thin, or lacking in elasticity",
        "Patients looking for a low-downtime, natural-looking first treatment",
        "Those maintaining results after previous filler treatment",
      ],
    },
    {
      heading: "When to Choose Dermal Fillers",
      paragraphs: [
        "Dermal fillers are the appropriate choice when specific structural changes need to be addressed - volume that has been lost, areas that need lifting or defining, or lines that are too deep to be addressed by skin quality treatments alone.",
      ],
      bullets: [
        "Hollow or flat cheeks that have lost their youthful contour",
        "Deep nasolabial folds (smile lines) that persist at rest",
        "Marionette lines giving the face a downturned, tired appearance",
        "Lip enhancement - adding volume, definition, or symmetry",
        "Tear trough hollows under the eyes",
        "Jawline or chin definition",
        "Temple hollowing giving the face a gaunt appearance",
      ],
    },
    {
      heading: "Can Profhilo and Dermal Fillers Be Combined?",
      paragraphs: [
        "Absolutely - and this combination is one of the most popular approaches at The Oxford Wellness Doctor. Dermal fillers address the structural elements: restoring cheek volume, lifting the mid-face, defining the jawline. Profhilo then works on the skin quality overlying and surrounding those areas - improving hydration, texture, and elasticity.",
        "The result is a comprehensive rejuvenation that looks genuinely natural: not filled, not frozen, but like a healthier and more rested version of you.",
        "Dr. Taganova typically recommends treating the structural concerns with fillers first, then starting Profhilo to improve the skin quality around and above the treated areas. Both treatments can sometimes be performed at the same appointment, depending on the extent of treatment.",
      ],
    },
    {
      heading: "Cost Comparison",
      paragraphs: [
        "At The Oxford Wellness Doctor, Profhilo treatment starts from £300 per session (a course of two is recommended, from £550). Dermal fillers start from £250–£350 per syringe depending on the area treated.",
        "When combining both treatments, many patients find that the investment in skin quality improvement from Profhilo means they need less filler to achieve their goals - as the improved skin quality itself contributes to a more youthful appearance.",
      ],
    },
  ],
  cta: {
    heading: "Not Sure Which Treatment Is Right for You?",
    text: "Book a consultation and Dr. Taganova will give you an honest, personalised assessment - with no obligation to proceed.",
    buttonLabel: "Book a Consultation",
    buttonExternal: true,
    buttonHref: "https://www.glowday.com/clinic/the-oxford-wellness-doctor",
  },
  relatedPosts: [
    { label: "How Menopause Affects Your Skin", href: "/blog/menopause-skin-changes" },
    { label: "Best Aesthetic Treatments for Women Over 50", href: "/blog/aesthetic-treatments-over-50" },
  ],
  relatedTreatments: [
    { label: "Profhilo Oxford", href: "/treatments/profhilo-oxford" },
    { label: "Dermal Fillers Oxford", href: "/treatments/dermal-fillers-oxford" },
    { label: "Skin Boosters Oxford", href: "/treatments/skin-boosters-oxford" },
  ],
};

export default function ProfhiloVsDermalFillersPost() {
  return <BlogPostTemplate data={data} />;
}
