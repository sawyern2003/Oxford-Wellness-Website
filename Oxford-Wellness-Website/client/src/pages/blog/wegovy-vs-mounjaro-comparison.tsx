import BlogPostTemplate, { BlogPostData } from "@/components/blog/BlogPostTemplate";
import weightLossImg from "@/assets/blog/wegovy-mounjaro-weight-loss-consultation.png";

const data: BlogPostData = {
  title: "Wegovy vs Mounjaro: Which Weight Loss Injection Is Right for You?",
  metaDescription: "Detailed comparison of Wegovy vs Mounjaro from Oxford doctor. Efficacy, side effects, cost, and suitability explained by Dr. Inga Taganova.",
  canonical: "https://www.theoxfordwellnessdoctor.com/blog/wegovy-vs-mounjaro-comparison",
  h1: "Wegovy vs Mounjaro: Which Weight Loss Injection Is Right for You?",
  category: "Medical Weight Loss",
  readTime: "8 min",
  intro: "GLP-1 receptor agonist medications have transformed weight management medicine. For the first time, patients are achieving levels of weight loss that were previously only possible through bariatric surgery - and doing so safely, under medical supervision, with a weekly self-injection. But with two leading medications now available in the UK (Wegovy and Mounjaro), patients frequently ask: which one is right for me? Dr. Inga Taganova - an experienced weight management physician - explains the differences, the evidence, and how she approaches this decision in clinical practice.",
  heroImage: {
    src: weightLossImg,
    alt: "Medical consultation for weight loss with GLP-1 injections - Wegovy and Mounjaro weight management programme at The Oxford Wellness Doctor, Oxford",
    caption: "Dr. Taganova offers Wegovy and Mounjaro under close clinical supervision",
  },
  sections: [
    {
      heading: "The GLP-1 Revolution: Why These Medications Are Different",
      paragraphs: [
        "For decades, the medical community struggled to find pharmacological treatments for obesity that were both effective and safe. Most earlier medications either caused significant side effects, had modest results, or were prone to misuse. GLP-1 receptor agonists changed everything.",
        "These drugs mimic a natural gut hormone (glucagon-like peptide-1) that is released after eating. They work by signalling satiety to the brain, slowing gastric emptying, and - in some cases - improving insulin sensitivity. The result is a significant, sustained reduction in appetite and caloric intake that produces meaningful weight loss over months of treatment.",
        "Crucially, unlike older diet pills, these medications work with your body's own hormonal systems. They do not speed up your metabolism or suppress appetite through stimulant effects - they replicate a natural satiety signal that, in some patients with obesity, may be blunted.",
      ],
    },
    {
      heading: "What is Wegovy?",
      paragraphs: [
        "Wegovy is the brand name for semaglutide 2.4mg - a once-weekly subcutaneous injection approved by the MHRA specifically for weight management. Semaglutide was originally developed as a diabetes treatment (under the brand name Ozempic at a lower dose) and its remarkable weight loss effects led to its development at higher doses for obesity treatment.",
        "The STEP clinical trial programme - the most comprehensive weight management trials of their kind - demonstrated an average weight loss of 15–17% of body weight over 68 weeks with Wegovy, compared with 2.4% with placebo. In absolute terms, that typically means 15–20kg of weight loss in patients who start treatment at a typical BMI.",
        "The dose is gradually escalated over 16–20 weeks: starting at 0.25mg, increasing through 0.5mg, 1mg, and 1.7mg, before reaching the maintenance dose of 2.4mg. This slow escalation significantly reduces nausea and gastrointestinal side effects - the most common reason patients discontinue treatment.",
      ],
    },
    {
      heading: "What is Mounjaro?",
      paragraphs: [
        "Mounjaro is the brand name for tirzepatide - the world's first dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist. Unlike Wegovy, which targets only GLP-1 receptors, Mounjaro activates two different gut hormone pathways simultaneously. This dual mechanism produces substantially greater appetite suppression and metabolic benefits.",
        "The SURMOUNT clinical trial programme showed an average weight loss of 20–25% of body weight with Mounjaro's highest doses - with some patients losing over 30% of their starting weight. For context, this level of weight loss approaches what is achievable with gastric bypass surgery.",
        "Like Wegovy, Mounjaro is administered as a once-weekly self-injection, with dose escalation from 2.5mg to a maximum of 15mg over approximately 20 weeks. It is MHRA-approved in the UK for weight management in adults with obesity or overweight with at least one weight-related health condition.",
      ],
    },
    {
      heading: "Wegovy vs Mounjaro: Head-to-Head Comparison",
      tableHeaders: ["Feature", "Wegovy (Semaglutide)", "Mounjaro (Tirzepatide)"],
      table: [
        { col1: "Mechanism", col2: "GLP-1 receptor agonist", col3: "Dual GIP + GLP-1 agonist" },
        { col1: "Average weight loss", col2: "15–17% body weight", col3: "20–25% body weight" },
        { col1: "Dosing frequency", col2: "Once weekly", col3: "Once weekly" },
        { col1: "Starting dose", col2: "0.25mg", col3: "2.5mg" },
        { col1: "Maximum dose", col2: "2.4mg", col3: "15mg" },
        { col1: "UK approval", col2: "MHRA approved", col3: "MHRA approved" },
        { col1: "Cardiovascular evidence", col2: "Proven CV risk reduction (SELECT trial)", col3: "Emerging CV data" },
        { col1: "Cost (approx. per month)", col2: "from £200/month", col3: "from £220/month" },
        { col1: "Best for", col2: "First-line GLP-1 treatment", col3: "Greater weight loss needed" },
      ],
    },
    {
      heading: "Who Should Choose Wegovy?",
      paragraphs: [
        "Wegovy is an excellent first-line choice for patients who are new to GLP-1 medication. Its long clinical track record, established cardiovascular safety data (the SELECT trial demonstrated a 20% reduction in major cardiovascular events), and well-understood side effect profile make it the appropriate starting point for many patients.",
      ],
      bullets: [
        "Patients who have not previously tried a GLP-1 medication",
        "Those with established cardiovascular disease who may benefit from Wegovy's proven CV risk reduction",
        "Patients who prefer to start with the most extensively studied option",
        "Those whose weight loss goal is achievable with 15–17% loss",
      ],
    },
    {
      heading: "Who Should Choose Mounjaro?",
      paragraphs: [
        "Mounjaro's dual mechanism makes it the more powerful option for patients who need greater weight loss, have not achieved adequate results with semaglutide, or whose metabolic profile is likely to benefit from the dual GIP/GLP-1 approach.",
      ],
      bullets: [
        "Patients who have tried semaglutide (Ozempic or Wegovy) without achieving target results",
        "Those with a higher starting BMI who require more significant weight loss",
        "Patients with type 2 diabetes who may particularly benefit from the dual metabolic mechanism",
        "Those who have been assessed as good candidates by Dr. Taganova based on their clinical profile",
      ],
    },
    {
      heading: "Side Effects: What to Expect",
      paragraphs: [
        "Both medications share a similar side effect profile, as they both act on GLP-1 receptors. The most common effects are gastrointestinal and are most pronounced during dose escalation:",
      ],
      bullets: [
        "Nausea (most common, usually improves after the first few weeks)",
        "Constipation or diarrhoea",
        "Vomiting (less common but possible in early weeks)",
        "Reduced appetite (technically the desired effect, but can feel uncomfortable initially)",
        "Fatigue in some patients during dose escalation",
        "Rare: pancreatitis, gallbladder problems - discussed during consultation",
      ],
      note: "The slow dose escalation protocol used at The Oxford Wellness Doctor is specifically designed to minimise these side effects. Most patients find nausea improves significantly after 4–8 weeks.",
    },
    {
      heading: "Dr. Taganova's Approach: How the Decision Is Made",
      paragraphs: [
        "Every patient is different. The choice between Wegovy and Mounjaro - or indeed whether either medication is appropriate - is made after a thorough clinical assessment. Dr. Taganova reviews your full medical history, current medications, weight history, metabolic health markers, and personal goals before making a recommendation.",
        "Where there is genuine clinical uncertainty, she will explain the reasoning transparently and involve you in the decision. There is no default prescription at The Oxford Wellness Doctor: the right medication for you is determined by your individual clinical picture, not by availability or cost.",
      ],
    },
  ],
  cta: {
    heading: "Ready to Start Your Weight Loss Journey?",
    text: "Book a comprehensive medical weight loss consultation with Dr. Taganova to discuss whether Wegovy or Mounjaro is right for you.",
    buttonLabel: "Book Weight Loss Consultation",
    buttonExternal: true,
    buttonHref: "https://www.glowday.com/clinic/the-oxford-wellness-doctor",
  },
  relatedPosts: [
    { label: "Weight Gain in Perimenopause: Medical Solutions That Actually Work", href: "/blog/weight-gain-perimenopause" },
    { label: "How Menopause Affects Your Skin", href: "/blog/menopause-skin-changes" },
  ],
  relatedTreatments: [
    { label: "Medical Weight Loss (Wegovy & Mounjaro)", href: "/treatments/medical-weight-loss-oxford" },
    { label: "Menopause Clinic Oxford", href: "/menopause-clinic-oxford" },
  ],
};

export default function WegovyVsMounjaroPost() {
  return <BlogPostTemplate data={data} />;
}
