export type ConcernLink = {
  label: string;
  href: string;
};

export type ConcernFaq = {
  q: string;
  a: string;
};

export type ConcernPageData = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  signsHeading: string;
  signs: string[];
  consultationHeading: string;
  consultationBody: string[];
  relatedHeading: string;
  related: ConcernLink[];
  faqs: ConcernFaq[];
};

export const concernsHubIntro =
  "Many people arrive with a symptom rather than a treatment name. This guide gathers common midlife concerns and shows how a consultation with Dr Inga Taganova, GP, can help you make sense of what you are noticing.";

export const concerns: ConcernPageData[] = [
  {
    slug: "hot-flushes-night-sweats",
    name: "Hot flushes and night sweats",
    title: "Hot Flushes and Night Sweats | The Oxford Wellness Doctor",
    metaDescription:
      "Doctor-led help for hot flushes and night sweats in Oxford. How a consultation with Dr Inga Taganova, GP, can clarify midlife change and next steps.",
    intro:
      "Sudden heat, flushed skin and night sweats that break sleep are among the most familiar midlife changes. They can feel disruptive at work, at home and overnight. A calm, doctor-led consultation helps you understand what may be driving them and which options are worth considering.",
    signsHeading: "Common signs",
    signs: [
      "Sudden waves of heat in the face, neck or chest",
      "Flushing that comes with or without sweating",
      "Night sweats that wake you or soak bedding",
      "Feeling unsettled or anxious as a flush begins",
      "Broken sleep that leaves you tired the next day",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "Dr Inga Taganova, GP, takes a careful history of your symptoms, cycle changes and wider health. The aim is to understand the pattern, rule in or out other contributors, and discuss options that fit your preferences and medical background.",
      "Nothing is decided in advance of that conversation. You leave with a clearer picture of what is happening and a plan you have agreed together.",
    ],
    relatedHeading: "Related consultations",
    related: [
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
      { label: "Perimenopause consultation", href: "/perimenopause-oxford" },
      { label: "Women's health consultation", href: "/womens-health-oxford" },
    ],
    faqs: [
      {
        q: "Are hot flushes always menopause?",
        a: "They are common in perimenopause and menopause, but other factors can contribute. A consultation looks at the whole picture rather than assuming a single cause.",
      },
      {
        q: "Can night sweats affect my daytime energy?",
        a: "Yes. Broken sleep often shows up as fatigue, irritability or difficulty concentrating the next day. Addressing night sweats and sleep together is often useful.",
      },
      {
        q: "Do I need a treatment on the first visit?",
        a: "No. The first appointment is for assessment and discussion. Any next steps are agreed with you afterwards.",
      },
    ],
  },
  {
    slug: "sleep",
    name: "Sleep",
    title: "Sleep Concerns in Midlife | The Oxford Wellness Doctor",
    metaDescription:
      "Support for midlife sleep change in Oxford. Learn how a consultation with Dr Inga Taganova, GP, explores night sweats, waking and daytime fatigue.",
    intro:
      "Sleep often shifts in midlife. You may fall asleep easily and wake at 3am, or struggle to settle because of night sweats or a busy mind. When rest is fragmented, everything else feels harder. A consultation gives space to untangle what is disrupting sleep and what may help.",
    signsHeading: "Common signs",
    signs: [
      "Difficulty falling or staying asleep",
      "Waking hot or sweaty during the night",
      "Early morning waking with a racing mind",
      "Daytime fatigue or reliance on caffeine",
      "Irritability or low mood linked to poor rest",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "Dr Inga Taganova, GP, looks at sleep alongside hormones, stress, alcohol, screens and other health factors. The consultation is practical and specific to your pattern of nights.",
      "You may leave with lifestyle guidance, a plan for further review, or discussion of clinic options that relate to the underlying drivers of poor sleep.",
    ],
    relatedHeading: "Related consultations",
    related: [
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
      { label: "Perimenopause consultation", href: "/perimenopause-oxford" },
      { label: "Longevity consultation", href: "/longevity-medicine-oxford" },
    ],
    faqs: [
      {
        q: "Is midlife insomnia always hormonal?",
        a: "Hormonal change is a common contributor, but sleep is also shaped by stress, caffeine, alcohol, pain and routine. A consultation considers those factors together.",
      },
      {
        q: "Should I track my sleep before I come?",
        a: "A simple note of bedtimes, waking and night sweats for a week or two can be helpful, but it is not required.",
      },
      {
        q: "Will I be offered a quick fix?",
        a: "The focus is on understanding your sleep and agreeing realistic next steps. There is no pressure toward a particular treatment.",
      },
    ],
  },
  {
    slug: "low-libido",
    name: "Low libido",
    title: "Low Libido in Midlife | The Oxford Wellness Doctor",
    metaDescription:
      "Confidential help for low libido in midlife. How a consultation with Dr Inga Taganova, GP, explores desire, comfort and related changes in Oxford.",
    intro:
      "A change in desire can feel lonely to talk about, yet it is common in midlife. Low libido may sit alongside dryness, discomfort, fatigue or relationship strain. A confidential consultation gives you room to describe what has changed without rush or judgement.",
    signsHeading: "Common signs",
    signs: [
      "Less interest in sex than before",
      "Desire that feels distant or effortful",
      "Avoiding intimacy because of discomfort",
      "Feeling disconnected from your body",
      "Worry about what the change means for your relationship",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "Dr Inga Taganova, GP, explores desire in the context of hormones, sleep, mood, intimate comfort and life load. The conversation is private and paced to what you want to share.",
      "Where physical comfort is part of the picture, related clinic options can be discussed. Any treatment is considered only after assessment.",
    ],
    relatedHeading: "Related consultations and treatments",
    related: [
      { label: "Intimate health consultation", href: "/sexual-wellness-oxford" },
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
      { label: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
    ],
    faqs: [
      {
        q: "Is low libido a normal part of ageing?",
        a: "Desire can change for many reasons in midlife. It is common, and it is also something you can discuss and address if it matters to you.",
      },
      {
        q: "Do I need to bring my partner?",
        a: "No. Most people attend alone. You can bring someone if you prefer.",
      },
      {
        q: "What if the issue is mainly discomfort?",
        a: "That is important to say. Intimate comfort and desire often interact, and the consultation can look at both.",
      },
    ],
  },
  {
    slug: "vaginal-dryness",
    name: "Vaginal dryness",
    title: "Vaginal Dryness | The Oxford Wellness Doctor",
    metaDescription:
      "Confidential care for vaginal dryness in Oxford. How a consultation with Dr Inga Taganova, GP, assesses comfort and discusses suitable next steps.",
    intro:
      "Vaginal dryness and related discomfort can make everyday life and intimacy harder. Many women wait a long time before seeking help. A private consultation with Dr Inga Taganova, GP, focuses on what you are noticing and which approaches may restore comfort.",
    signsHeading: "Common signs",
    signs: [
      "Dryness, burning or irritation",
      "Discomfort during intimacy",
      "A feeling of fragility or tightness",
      "Recurrent irritation that does not settle",
      "Avoiding activities that used to feel easy",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "The consultation is confidential and practical. Dr Inga assesses symptoms, timing and any related midlife changes, then discusses options that may include supportive care in clinic where suitable.",
      "Procedures such as Forma V or Neauvia N Rose are only considered after assessment. Suitability is never assumed from a webpage.",
    ],
    relatedHeading: "Related consultations and treatments",
    related: [
      { label: "Intimate health consultation", href: "/sexual-wellness-oxford" },
      { label: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
      { label: "Neauvia N Rose", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
    ],
    faqs: [
      {
        q: "Is vaginal dryness only a menopause issue?",
        a: "It is common around menopause, but it can appear earlier or for other reasons. A consultation looks at your individual history.",
      },
      {
        q: "Will I need an examination?",
        a: "Sometimes an examination helps. It is discussed first and only proceeds with your consent.",
      },
      {
        q: "How soon might I notice a difference?",
        a: "That depends on the approach agreed. Dr Inga will explain what is realistic for your situation.",
      },
    ],
  },
  {
    slug: "brain-fog",
    name: "Brain fog",
    title: "Brain Fog in Midlife | The Oxford Wellness Doctor",
    metaDescription:
      "Help for midlife brain fog in Oxford. How a consultation with Dr Inga Taganova, GP, explores concentration, memory lapses and related symptoms.",
    intro:
      "Brain fog can feel unsettling: misplaced words, lost threads in meetings, a sense that thinking takes more effort. In midlife it often arrives with sleep change, hot flushes or fatigue. A consultation helps separate what is common from what needs a closer look.",
    signsHeading: "Common signs",
    signs: [
      "Difficulty finding words or finishing thoughts",
      "Short-term memory lapses that feel new",
      "Trouble concentrating for sustained periods",
      "Mental fatigue by mid-afternoon",
      "Worry that something more serious is wrong",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "Dr Inga Taganova, GP, reviews cognitive symptoms alongside sleep, mood, cycle change and general health. The aim is a clear, grounded explanation and a plan that matches what you are experiencing.",
      "Where further review is needed, that is discussed openly. Where midlife change is the likely driver, you leave with practical next steps.",
    ],
    relatedHeading: "Related consultations",
    related: [
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
      { label: "Perimenopause consultation", href: "/perimenopause-oxford" },
      { label: "Women's health consultation", href: "/womens-health-oxford" },
      { label: "Longevity consultation", href: "/longevity-medicine-oxford" },
    ],
    faqs: [
      {
        q: "Does brain fog mean I am developing dementia?",
        a: "In midlife, concentration change is often linked to sleep and hormonal transition. A consultation helps place your symptoms in context and advise if further assessment is needed.",
      },
      {
        q: "Can improving sleep help my thinking?",
        a: "Often yes. Sleep and cognitive clarity are closely linked, which is why both are considered together.",
      },
      {
        q: "What should I bring to the appointment?",
        a: "A brief note of when symptoms started and what makes them better or worse is useful. Bring any recent test results if you have them.",
      },
    ],
  },
  {
    slug: "weight-changes-midlife",
    name: "Weight changes in midlife",
    title: "Weight Changes in Midlife | The Oxford Wellness Doctor",
    metaDescription:
      "In-person advice for midlife weight changes in Oxford. A consultation with Dr Inga Taganova, GP, focused on understanding change without blood tests or diagnosis.",
    intro:
      "Many women notice weight redistribute in midlife even when habits have barely changed. Clothes fit differently. Energy dips. The conversation around weight can feel loaded. An in-person consultation offers measured advice for understanding what you are seeing.",
    signsHeading: "Common signs",
    signs: [
      "Weight gain around the middle despite similar habits",
      "Clothes fitting differently across the torso",
      "Slower recovery after exercise",
      "Frustration that previous approaches no longer work",
      "A sense that body composition has shifted with midlife",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "This is an in-person advice consultation with Dr Inga Taganova, GP. It focuses on listening to your history, discussing midlife body change, and practical advice that fits your day-to-day life.",
      "There are no blood tests and no diagnosis in this appointment. It is advice only. If other clinic pathways may be relevant later, that can be discussed without pressure.",
    ],
    relatedHeading: "Related consultations",
    related: [
      { label: "Women's health consultation", href: "/womens-health-oxford" },
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
      { label: "Longevity consultation", href: "/longevity-medicine-oxford" },
      { label: "Personalised treatment plans", href: "/personalised-treatment-plans" },
    ],
    faqs: [
      {
        q: "Is this a weight-loss programme?",
        a: "No. It is an in-person advice consultation about midlife weight change. It does not include blood tests or diagnosis.",
      },
      {
        q: "Why do habits that worked before stop working?",
        a: "Sleep, stress, muscle mass and hormonal transition all influence how the body holds weight. The consultation explores those connections in plain language.",
      },
      {
        q: "Will I be weighed or measured?",
        a: "Only if you want to be, and only as part of a conversation you are comfortable with. The focus is advice, not a target.",
      },
    ],
  },
  {
    slug: "fatigue",
    name: "Fatigue",
    title: "Fatigue in Midlife | The Oxford Wellness Doctor",
    metaDescription:
      "Doctor-led help for midlife fatigue in Oxford. How a consultation with Dr Inga Taganova, GP, explores energy, sleep and related women's health concerns.",
    intro:
      "Midlife fatigue is more than a busy week. It can feel like a deep drain that rest does not fix. When energy falls away, work, family and exercise all suffer. A consultation looks for patterns across sleep, hormones, mood and daily load.",
    signsHeading: "Common signs",
    signs: [
      "Persistent tiredness despite reasonable sleep opportunity",
      "Afternoon crashes that feel out of proportion",
      "Needing more recovery after ordinary days",
      "Low motivation linked to physical exhaustion",
      "Fatigue that arrived with other midlife changes",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "Dr Inga Taganova, GP, takes a structured history of your energy, sleep, cycle and wider health. The goal is to understand contributors you can act on and to identify when further review is wise.",
      "You leave with a clearer explanation and agreed next steps, which may include lifestyle guidance or related clinic consultations.",
    ],
    relatedHeading: "Related consultations",
    related: [
      { label: "Women's health consultation", href: "/womens-health-oxford" },
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
      { label: "Perimenopause consultation", href: "/perimenopause-oxford" },
      { label: "Vitamin B12 injection", href: "/treatments/vitamin-b12-injection-oxford" },
    ],
    faqs: [
      {
        q: "When is fatigue a reason to seek medical advice?",
        a: "If tiredness is new, persistent or affecting daily life, it is worth a review. A consultation helps decide what can be addressed in clinic and what needs wider investigation.",
      },
      {
        q: "Can poor sleep alone explain my fatigue?",
        a: "It often plays a large part, but it is rarely the only factor. Looking at sleep, hormones and daily demands together is usually more useful.",
      },
      {
        q: "Will I leave with a long list of supplements?",
        a: "Not as a default. Recommendations are specific to your history and kept proportionate.",
      },
    ],
  },
  {
    slug: "menopause-skin-changes",
    name: "Menopause skin changes",
    title: "Menopause Skin Changes | The Oxford Wellness Doctor",
    metaDescription:
      "Doctor-led care for menopause skin changes in Oxford. Dryness, dullness and midlife texture change with Dr Inga Taganova, GP.",
    intro:
      "Skin often tells the story of midlife: dryness, dullness, fine texture change, a face that looks more tired than you feel. These shifts are common and treatable with a careful plan. A consultation connects what you see in the mirror with what is happening hormonally and practically.",
    signsHeading: "Common signs",
    signs: [
      "Dryness or tightness that skincare alone does not settle",
      "Dullness or loss of glow",
      "Finer creasing and changes in firmness",
      "Uneven tone or new sensitivity",
      "A sense that your usual routine no longer works",
    ],
    consultationHeading: "How a consultation helps",
    consultationBody: [
      "Dr Inga Taganova, GP, assesses skin change in the context of menopause and your wider health. You discuss what bothers you most and which clinic approaches may suit, from skin quality treatments to a broader menopause review.",
      "Any procedure is considered after assessment. The plan stays proportionate to your goals.",
    ],
    relatedHeading: "Related consultations and treatments",
    related: [
      { label: "Menopause and skin", href: "/menopause-skin" },
      { label: "Skin clinic", href: "/skin-clinic-oxford" },
      { label: "Profhilo", href: "/treatments/profhilo-oxford" },
      { label: "Menopause consultation", href: "/menopause-clinic-oxford" },
    ],
    faqs: [
      {
        q: "Why does midlife change the skin so noticeably?",
        a: "Collagen, oil production and hydration all shift with hormonal transition. That shows up as dryness, dullness and changes in firmness.",
      },
      {
        q: "Do I need a full aesthetics plan?",
        a: "Not necessarily. Some people need skincare guidance and a single supportive treatment. Others prefer a wider plan. The consultation decides with you.",
      },
      {
        q: "Can skin changes improve without injectables?",
        a: "Often yes. Routine, peels and energy-based treatments can help. Injectables are discussed only when they may add something useful.",
      },
    ],
  },
];

export function getConcern(slug: string): ConcernPageData | undefined {
  return concerns.find((c) => c.slug === slug);
}

export const CONCERN_PATHS = concerns.map((c) => `/concerns/${c.slug}`);
