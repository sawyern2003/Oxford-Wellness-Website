import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Jaw Slimming & Teeth Grinding Treatment Oxford | Masseter Botox | Dr. Inga Taganova",
  metaDescription: "Jaw slimming and bruxism treatment in Oxford - masseter botulinum toxin injections to slim the jaw and relieve teeth grinding. GMC-registered doctor. £250. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/jaw-slimming-teeth-grinding-oxford",
  h1: "Jaw Slimming & Teeth Grinding Treatment in Oxford - Masseter Injections",
  intro: "Masseter botulinum toxin injections are a highly effective, minimally invasive treatment that targets the masseter muscles - the large muscles at the sides of the jaw - to achieve two distinct benefits: a slimmer, more oval facial contour, and significant relief from teeth grinding (bruxism) and jaw clenching. The treatment is quick, comfortable, and delivers progressive results over 4–6 weeks.",
  sections: [
    {
      heading: "Who Is This Treatment For?",
      paragraphs: [
        "Masseter injections are suitable for patients who wish to address one or both of the following:",
      ],
      bullets: [
        "A wide or square jawline - particularly those with hypertrophied (enlarged) masseter muscles, which can create a very angular facial shape",
        "Teeth grinding (bruxism) - habitual grinding of teeth, especially during sleep, which can cause jaw pain, headaches, and dental wear",
        "Jaw clenching - tension in the jaw often associated with stress, TMJ disorder, or anxiety",
        "TMJ (temporomandibular joint) pain - reducing muscle activity can relieve associated discomfort",
        "Facial pain or headaches originating from jaw tension",
      ],
    },
    {
      heading: "How It Works",
      paragraphs: [
        "Botulinum toxin is injected directly into the masseter muscles on each side of the jaw. By partially reducing the activity of these muscles, the treatment achieves two effects:",
        "For jawline contouring: over-active or naturally large masseter muscles are a common cause of a wide, square jaw. As the muscle gradually reduces in bulk over 4–6 weeks following treatment, the lower face becomes narrower and more oval - a subtle but significant improvement in facial balance.",
        "For bruxism: reduced muscle activity means significantly less grinding force during sleep and clenching during the day. Most patients notice relief from jaw pain and associated headaches within 2–4 weeks of treatment.",
      ],
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "The consultation and treatment appointment typically takes 15–30 minutes. Dr. Taganova will assess your masseter muscle size and jaw anatomy, and discuss your goals - whether cosmetic, therapeutic, or both.",
        "The injections are placed precisely into both masseter muscles using ultra-fine needles. There is minimal discomfort - most patients describe a brief pinching sensation. No anaesthetic is required, though numbing cream is available on request.",
        "You can return to all normal activities immediately. We advise avoiding strenuous jaw exercise (such as chewing very tough foods) for 24 hours post-treatment.",
      ],
    },
    {
      heading: "Results & Duration",
      paragraphs: [
        "Changes in muscle bulk and jaw contour become visible over 4–6 weeks as the muscle gradually reduces in size. Relief from grinding and jaw pain is often noticed sooner - within 2–3 weeks.",
        "Results typically last 4–6 months initially. With repeat treatments over time, many patients find results become more sustained as the muscle becomes progressively trained to relax.",
      ],
    },
    {
      heading: "Why Choose The Oxford Wellness Doctor?",
      bullets: [
        "GMC-registered doctor with deep anatomical expertise - essential for safe masseter injections",
        "20+ years of clinical experience across medicine and aesthetics",
        "Precise, conservative technique - achieving balance and relief without an overdone result",
        "Dual approach - addresses both cosmetic and therapeutic goals",
        "Private, professional clinic in Oxford",
        "Full consultation, treatment, and two-week follow-up included",
      ],
    },
  ],
  pricing: [
    { name: "Jaw Slimming & Bruxism Treatment (both sides)", price: "£250" },
    { name: "Two-Week Follow-Up", price: "Complimentary" },
  ],
  faqs: [
    { q: "How long until I see jaw slimming results?", a: "Visible slimming of the jaw contour develops gradually over 4–6 weeks as the masseter muscle reduces in bulk. The effect becomes more pronounced with successive treatments." },
    { q: "How quickly will teeth grinding improve?", a: "Many patients notice significant improvement in jaw pain and grinding within 2–4 weeks of treatment." },
    { q: "Is the treatment painful?", a: "There is minimal discomfort - a brief pinching sensation with each injection. Most patients tolerate it very well without anaesthetic." },
    { q: "How long do results last?", a: "Results typically last 4–6 months. With regular maintenance, many patients find the effect is sustained for progressively longer periods as the muscle becomes conditioned to relax." },
    { q: "Will my jaw feel weak?", a: "You will not experience weakness in normal activities. The injections reduce excessive muscle force without affecting your ability to chew, speak, or perform everyday jaw functions." },
    { q: "Can this treatment help with headaches?", a: "Yes. Jaw clenching and teeth grinding are a common cause of tension headaches. Many patients report a significant reduction in headache frequency and severity following masseter injections." },
    { q: "How does this differ from jaw filler?", a: "Jaw slimming injections reduce the masseter muscle bulk to narrow the jaw. Jaw filler adds structure and definition to the jaw angle and chin. They achieve different results - Dr. Taganova will advise which (or what combination) is appropriate for you." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Jaw Slimming & Teeth Grinding Treatment Oxford",
    description: "Botulinum toxin injections into the masseter muscles to slim the jawline and relieve teeth grinding (bruxism). Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
    bodyLocation: "Masseter muscles, jaw",
  },
  relatedLinks: [
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { label: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { label: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function JawSlimmingPage() {
  return <TreatmentPageTemplate data={data} />;
}
