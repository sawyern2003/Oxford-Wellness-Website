export type AtAGlanceIcon =
  | "calendar"
  | "hourglass"
  | "bed"
  | "clipboard"
  | "syringe"
  | "timer"
  | "stethoscope"
  | "briefcase";

export interface AtAGlanceItem {
  label: string;
  value: string;
  icon: AtAGlanceIcon;
}

export interface TreatmentGlance {
  treatmentName: string;
  summary: string;
  highlights: string[];
  atAGlance: AtAGlanceItem[];
}

const GLANCE_DATA: Record<string, TreatmentGlance> = {
  "/treatments/anti-wrinkle-injections-oxford": {
    treatmentName: "Anti-Wrinkle Injections",
    summary:
      "Botulinum toxin relaxes facial muscles to smooth dynamic lines – forehead, frown, and crow's feet – with natural-looking results from a GMC-registered doctor.",
    highlights: [
      "Forehead lines",
      "Frown lines between the brows",
      "Crow's feet",
      "Bunny lines and gummy smile",
      "Brow lift and lip lines",
    ],
    atAGlance: [
      { label: "Session time", value: "15–20 minutes", icon: "syringe" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "3–7 days; full at 14 days", icon: "hourglass" },
      { label: "Results last", value: "3–4 months", icon: "calendar" },
    ],
  },
  "/treatments/dermal-fillers-oxford": {
    treatmentName: "Dermal Fillers",
    summary:
      "Hyaluronic acid fillers restore lost volume, soften deep lines, and contour the face – delivered with a conservative, natural-looking approach.",
    highlights: [
      "Cheek volume and contour",
      "Nasolabial and marionette lines",
      "Tear trough hollowing",
      "Jawline and chin definition",
      "Temple hollowing",
    ],
    atAGlance: [
      { label: "Session time", value: "30–45 minutes", icon: "timer" },
      { label: "Downtime", value: "Mild swelling 3–5 days", icon: "bed" },
      { label: "Results visible", value: "Immediate; settles in 2–4 weeks", icon: "hourglass" },
      { label: "Results last", value: "6–18 months", icon: "calendar" },
    ],
  },
  "/treatments/lip-fillers-oxford": {
    treatmentName: "Lip Fillers",
    summary:
      "Premium hyaluronic acid adds subtle volume, definition, and hydration – never an overfilled look.",
    highlights: [
      "Natural volume and fullness",
      "Cupid's bow and border definition",
      "Asymmetry correction",
      "Vertical lip lines",
      "Hydration for thin or ageing lips",
    ],
    atAGlance: [
      { label: "Session time", value: "Approx. 30 minutes", icon: "timer" },
      { label: "Downtime", value: "Swelling 24–48 hours", icon: "bed" },
      { label: "Results visible", value: "Immediate; final at 2 weeks", icon: "hourglass" },
      { label: "Results last", value: "6–12 months", icon: "calendar" },
    ],
  },
  "/treatments/profhilo-oxford": {
    treatmentName: "Profhilo",
    summary:
      "Pure hyaluronic acid bio-remodels skin from within – stimulating collagen and elastin for lasting hydration, firmness, and radiance.",
    highlights: [
      "Skin laxity and loss of firmness",
      "Fine lines from dehydration",
      "Dull, dehydrated skin",
      "Crepey texture on face and neck",
      "Ageing hands",
    ],
    atAGlance: [
      { label: "Session time", value: "15–20 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "2–4 weeks; peak after 2nd session", icon: "hourglass" },
      { label: "Sessions needed", value: "2 sessions, 4 weeks apart", icon: "calendar" },
    ],
  },
  "/treatments/morpheus8-oxford": {
    treatmentName: "Morpheus8",
    summary:
      "RF microneedling tightens skin, reduces wrinkles and scars, and remodels collagen deep in the tissue – without surgery.",
    highlights: [
      "Loose skin on face, neck, and jowls",
      "Deep wrinkles and folds",
      "Acne scars and uneven texture",
      "Large pores",
      "Stretch marks and body laxity",
    ],
    atAGlance: [
      { label: "Session time", value: "30–60 minutes", icon: "timer" },
      { label: "Downtime", value: "Redness 2–5 days", icon: "bed" },
      { label: "Results visible", value: "3–6 months", icon: "hourglass" },
      { label: "Sessions needed", value: "3 sessions, 4–6 weeks apart", icon: "calendar" },
    ],
  },
  "/treatments/medical-weight-loss-oxford": {
    treatmentName: "Medical Weight Loss",
    summary:
      "Medically supervised Wegovy and Mounjaro GLP-1 injections for significant, sustained weight loss under close doctor monitoring.",
    highlights: [
      "Obesity or overweight with related health conditions",
      "Appetite reduction and improved fullness",
      "Wegovy – avg. 15–17% body weight loss",
      "Mounjaro – avg. 20–25% body weight loss",
      "Support for menopause-related weight gain",
    ],
    atAGlance: [
      { label: "Consultation", value: "Full medical assessment", icon: "stethoscope" },
      { label: "Dosing", value: "Weekly self-injection at home", icon: "syringe" },
      { label: "Results visible", value: "Progressive over weeks", icon: "hourglass" },
      { label: "Follow-up", value: "Monthly monitoring", icon: "calendar" },
    ],
  },
  "/treatments/excessive-sweating-treatment-oxford": {
    treatmentName: "Excessive Sweating",
    summary:
      "Botulinum toxin blocks sweat gland signals, dramatically reducing hyperhidrosis in underarms, hands, feet, and face.",
    highlights: [
      "Underarm hyperhidrosis",
      "Palmar (hand) sweating",
      "Plantar (foot) sweating",
      "Forehead and scalp sweating",
      "Up to 87% reduction in underarms",
    ],
    atAGlance: [
      { label: "Session time", value: "Approx. 30 minutes", icon: "timer" },
      { label: "Downtime", value: "Minimal", icon: "briefcase" },
      { label: "Results visible", value: "5–7 days; full at 2 weeks", icon: "hourglass" },
      { label: "Results last", value: "6–9 months", icon: "calendar" },
    ],
  },
  "/treatments/chemical-peels-oxford": {
    treatmentName: "Chemical Peels",
    summary:
      "Medical-grade peels resurface skin to improve acne, pigmentation, fine lines, and dullness – applied by a GMC doctor.",
    highlights: [
      "Acne and breakouts",
      "Hyperpigmentation and sun damage",
      "Fine lines and dull skin",
      "Melasma",
      "Rough texture and enlarged pores",
    ],
    atAGlance: [
      { label: "Session time", value: "15–30 minutes", icon: "timer" },
      { label: "Downtime", value: "2–7 days (peel depth dependent)", icon: "bed" },
      { label: "Results visible", value: "After peeling completes", icon: "hourglass" },
      { label: "Sessions needed", value: "3–6 peels, 4 weeks apart", icon: "calendar" },
    ],
  },
  "/treatments/skin-boosters-oxford": {
    treatmentName: "Skin Boosters",
    summary:
      "Injectable hyaluronic acid deeply hydrates skin, improving elasticity, glow, and texture – without adding volume.",
    highlights: [
      "Dehydrated, dull skin",
      "Fine surface lines",
      "Crepey or papery texture",
      "Loss of radiance",
      "Face, neck, décolletage, and hands",
    ],
    atAGlance: [
      { label: "Session time", value: "20–30 minutes", icon: "timer" },
      { label: "Downtime", value: "Marks resolve in 24–48 hours", icon: "bed" },
      { label: "Results visible", value: "Builds over initial course", icon: "hourglass" },
      { label: "Sessions needed", value: "2–3 sessions, 3–4 weeks apart", icon: "calendar" },
    ],
  },
  "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford": {
    treatmentName: "Neauvia N Rose",
    summary:
      "Medical-grade hyaluronic acid restores hydration, comfort, and tissue integrity in the intimate area – especially for menopause-related changes.",
    highlights: [
      "Vaginal dryness and discomfort",
      "Reduced sensitivity during intimacy",
      "Loss of volume or laxity",
      "Postpartum changes",
      "Vulvovaginal atrophy",
    ],
    atAGlance: [
      { label: "Session time", value: "30–45 minutes", icon: "timer" },
      { label: "Downtime", value: "Minimal", icon: "bed" },
      { label: "Results visible", value: "Within days", icon: "hourglass" },
      { label: "Results last", value: "9–12 months", icon: "calendar" },
    ],
  },
  "/treatments/votiva-forma-v-oxford": {
    treatmentName: "Votiva Forma V",
    summary:
      "Non-surgical radiofrequency improves vaginal laxity, dryness, and intimate wellness by stimulating collagen remodeling.",
    highlights: [
      "Vaginal laxity post-childbirth",
      "Dryness and reduced lubrication",
      "Reduced sensation during intimacy",
      "Mild stress urinary incontinence",
      "Menopause-related tissue thinning",
    ],
    atAGlance: [
      { label: "Session time", value: "20–30 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "8–12 weeks", icon: "hourglass" },
      { label: "Sessions needed", value: "3 sessions, 4 weeks apart", icon: "calendar" },
    ],
  },
  "/treatments/vitamin-b12-injection-oxford": {
    treatmentName: "Vitamin B12 Injection",
    summary:
      "Intramuscular B12 bypasses digestion for fast absorption – boosting energy, mood, immunity, and metabolic function.",
    highlights: [
      "Persistent fatigue",
      "Brain fog and poor concentration",
      "Low mood",
      "Immunity and metabolic support",
      "Vegan/vegetarian diets; menopausal fatigue",
    ],
    atAGlance: [
      { label: "Session time", value: "10–15 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "24–48 hours for many", icon: "hourglass" },
      { label: "Maintenance", value: "Monthly typical", icon: "calendar" },
    ],
  },
  "/treatments/medical-form-completion-oxford": {
    treatmentName: "Medical Form Completion",
    summary:
      "GMC-registered GP completes, reviews, and signs medical forms and official certifications at a private Oxford appointment.",
    highlights: [
      "Camp America and overseas programme forms",
      "Adoption medical reports",
      "DVLA driving licence certificates",
      "Fitness-to-travel letters",
      "Life assurance and occupational health forms",
    ],
    atAGlance: [
      { label: "Session time", value: "30 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Outcome", value: "Forms completed at appointment", icon: "clipboard" },
      { label: "Availability", value: "Fri 4–8pm; Sat 9am–1pm", icon: "calendar" },
    ],
  },
  "/treatments/forma-facelift-oxford": {
    treatmentName: "Forma Facelift",
    summary:
      "Non-invasive radiofrequency tightens and lifts facial skin with zero downtime – immediate firmness plus long-term collagen stimulation.",
    highlights: [
      "Forehead lifting",
      "Cheeks and mid-face",
      "Jowls and lower face",
      "Neck laxity",
      "Under-eye and décolletage",
    ],
    atAGlance: [
      { label: "Session time", value: "Approx. 45 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "Immediate; builds over 3–6 months", icon: "hourglass" },
      { label: "Sessions needed", value: "6–8 weekly sessions", icon: "calendar" },
    ],
  },
  "/treatments/forma-plus-body-contouring-oxford": {
    treatmentName: "Forma Plus Body",
    summary:
      "Non-invasive radiofrequency firms loose body skin on arms, abdomen, thighs, and knees – with zero downtime.",
    highlights: [
      "Inner arm laxity",
      "Abdominal skin post-pregnancy",
      "Inner thigh laxity",
      "Sagging skin around knees",
      "Buttocks and bra-line tightening",
    ],
    atAGlance: [
      { label: "Session time", value: "30–60 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "Progressive over months", icon: "hourglass" },
      { label: "Sessions needed", value: "6–8 sessions", icon: "calendar" },
    ],
  },
  "/treatments/inmode-fx-skin-tightening-oxford": {
    treatmentName: "InMode FX",
    summary:
      "Non-invasive RF body contouring reduces cellulite, targets stubborn fat, and firms loose skin with zero downtime.",
    highlights: [
      "Cellulite and dimpled skin",
      "Stubborn fat on abdomen and thighs",
      "Loose or crepey skin",
      "Post-pregnancy body changes",
      "General body contouring",
    ],
    atAGlance: [
      { label: "Session time", value: "30–60 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "Peak 3–6 months after course", icon: "hourglass" },
      { label: "Sessions needed", value: "6–8 weekly sessions", icon: "calendar" },
    ],
  },
  "/treatments/lumecca-ipl-oxford": {
    treatmentName: "Lumecca IPL",
    summary:
      "High-power IPL clears pigmentation, rosacea, thread veins, and acne for brighter, more even skin.",
    highlights: [
      "Sun spots and age spots",
      "Rosacea and redness",
      "Thread veins",
      "Post-inflammatory pigmentation",
      "Uneven tone and photorejuvenation",
    ],
    atAGlance: [
      { label: "Session time", value: "Under 30 minutes (face)", icon: "timer" },
      { label: "Downtime", value: "Redness settles within hours", icon: "bed" },
      { label: "Results visible", value: "1–2 sessions for many concerns", icon: "hourglass" },
      { label: "Sessions needed", value: "3–5 for complex cases", icon: "calendar" },
    ],
  },
  "/treatments/filler-dissolving-oxford": {
    treatmentName: "Filler Dissolving",
    summary:
      "Hyaluronidase safely dissolves unwanted or migrated hyaluronic acid filler under medical supervision.",
    highlights: [
      "Overfilled or unnatural appearance",
      "Filler migration",
      "Lumps or irregular texture",
      "Asymmetry",
      "Emergency vascular occlusion",
    ],
    atAGlance: [
      { label: "Session time", value: "Patch test + treatment", icon: "timer" },
      { label: "Downtime", value: "Swelling 24–48 hours", icon: "bed" },
      { label: "Results visible", value: "24–48 hours", icon: "hourglass" },
      { label: "Before new filler", value: "Wait 4–6 weeks", icon: "calendar" },
    ],
  },
  "/treatments/jaw-slimming-teeth-grinding-oxford": {
    treatmentName: "Jaw Slimming & Teeth Grinding",
    summary:
      "Masseter botulinum toxin injections slim a wide jawline and relieve teeth grinding – quick, minimally invasive, progressive results.",
    highlights: [
      "Wide or square jawline",
      "Teeth grinding (bruxism)",
      "Jaw clenching and TMJ tension",
      "Jaw pain and headaches",
      "Cosmetic and therapeutic benefits",
    ],
    atAGlance: [
      { label: "Session time", value: "15–30 minutes", icon: "timer" },
      { label: "Downtime", value: "None", icon: "briefcase" },
      { label: "Results visible", value: "4–6 weeks (slimming)", icon: "hourglass" },
      { label: "Results last", value: "4–6 months", icon: "calendar" },
    ],
  },
};

export function getTreatmentGlance(canonical: string): TreatmentGlance | undefined {
  const path = canonical.replace("https://www.theoxfordwellnessdoctor.com", "");
  return GLANCE_DATA[path];
}
