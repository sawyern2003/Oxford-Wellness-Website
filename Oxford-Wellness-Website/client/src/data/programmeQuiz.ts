export type ProgrammeId =
  | "skin-health-regeneration"
  | "weight-body-confidence"
  | "intimate-wellness";

export interface LeadDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  consent: boolean;
}

export interface QuizAnswers {
  primaryConcerns: string[];
  skinConcerns: string[];
  bodyConcerns: string[];
  intimateConcerns: string[];
  lifeStage: string;
  goals: string[];
  eventDate?: string;
  notes?: string;
}

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizStep {
  id: keyof QuizAnswers | "intro";
  title: string;
  subtitle?: string;
  multi?: boolean;
  options?: QuizOption[];
}

export const quizSteps: QuizStep[] = [
  {
    id: "intro",
    title: "Find your programme",
    subtitle:
      "Tell us what has changed. We will suggest a starting programme – educational guidance only. Final suitability is confirmed during consultation.",
  },
  {
    id: "primaryConcerns",
    title: "What would you most like help with?",
    subtitle: "Select all that apply.",
    multi: true,
    options: [
      { id: "skin", label: "Skin health and ageing" },
      { id: "intimate", label: "Intimate wellbeing" },
      { id: "body", label: "Weight or body confidence" },
      { id: "energy", label: "Energy and midlife changes" },
    ],
  },
  {
    id: "skinConcerns",
    title: "Any skin concerns?",
    subtitle: "Optional – select any that feel relevant.",
    multi: true,
    options: [
      { id: "texture", label: "Texture or dullness" },
      { id: "collagen", label: "Loss of firmness" },
      { id: "pigment", label: "Pigmentation or uneven tone" },
      { id: "hydration", label: "Dryness or dehydration" },
      { id: "lines", label: "Lines or expression concerns" },
      { id: "none-skin", label: "None of these" },
    ],
  },
  {
    id: "bodyConcerns",
    title: "Any body or weight concerns?",
    multi: true,
    options: [
      { id: "weight", label: "Weight that feels harder to manage" },
      { id: "midlife-weight", label: "Midlife metabolic change" },
      { id: "laxity", label: "Skin laxity after weight change" },
      { id: "contour", label: "Body contour confidence" },
      { id: "none-body", label: "None of these" },
    ],
  },
  {
    id: "intimateConcerns",
    title: "Any intimate wellbeing concerns?",
    subtitle: "This remains completely confidential.",
    multi: true,
    options: [
      { id: "dryness", label: "Dryness or discomfort" },
      { id: "confidence", label: "Intimate confidence" },
      { id: "postpartum", label: "Postpartum changes" },
      { id: "menopause-intimate", label: "Menopause-related changes" },
      { id: "none-intimate", label: "None of these" },
    ],
  },
  {
    id: "lifeStage",
    title: "Which stage feels closest to you?",
    options: [
      { id: "30s", label: "In my 30s" },
      { id: "perimenopause", label: "Perimenopause / 40s" },
      { id: "menopause", label: "Menopause / post-menopause" },
      { id: "postpartum", label: "Postpartum / recovery" },
      { id: "prefer-not", label: "Prefer not to say" },
    ],
  },
  {
    id: "goals",
    title: "What matters most in the outcome?",
    multi: true,
    options: [
      { id: "natural", label: "Looking and feeling like myself" },
      { id: "confidence", label: "Quiet confidence day to day" },
      { id: "guidance", label: "Clear medical guidance" },
      { id: "long-term", label: "A long-term plan, not a quick fix" },
    ],
  },
];

export const emptyAnswers: QuizAnswers = {
  primaryConcerns: [],
  skinConcerns: [],
  bodyConcerns: [],
  intimateConcerns: [],
  lifeStage: "",
  goals: [],
};
