import type { IconName } from "@/components/symptoms/SymptomIcon";

export interface SymptomLink {
  label: string;
  href: string;
}

/** A named treatment plus the reason it is recommended for this symptom. */
export interface Recommendation {
  name: string;
  href: string;
  why: string;
}

export interface Symptom {
  id: string;
  label: string;
  icon: IconName;
  /** The physiology behind the symptom, in plain language. */
  whatsHappening: string;
  recommended: Recommendation[];
  /** Shown when the honest answer includes onward referral. */
  note?: string;
}

export const symptoms: Symptom[] = [
  {
    id: "hot-flushes",
    label: "Hot flushes",
    icon: "hot-flushes",
    whatsHappening:
      "Falling and fluctuating oestrogen narrows the range of temperature your brain treats as comfortable, so a small rise triggers a full cooling response – flushing, sweating and a racing heart.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Maps your pattern and triggers, and assesses whether hormone therapy is clinically appropriate for you.",
      },
      {
        name: "Perimenopause assessment",
        href: "/perimenopause-oxford",
        why: "For flushes that start while you are still having periods, where a single blood test is rarely conclusive.",
      },
    ],
    note: "Where HRT is indicated, Dr Inga confirms your suitability and arranges specialist prescribing – we do not currently prescribe hormone therapy in clinic.",
  },
  {
    id: "night-sweats",
    label: "Night sweats & sleep",
    icon: "night-sweats",
    whatsHappening:
      "Night sweats interrupt the deep sleep stages your body uses to recover. Broken sleep then raises cortisol, which worsens mood, appetite and brain fog the next day – so the cycle reinforces itself.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Treats the hormonal driver and reviews caffeine, alcohol and medication timing rather than sedating the symptom.",
      },
      {
        name: "Blood testing where indicated",
        href: "/womens-health-oxford",
        why: "Thyroid function, ferritin and B12 are checked when they could be contributing to broken sleep.",
      },
    ],
  },
  {
    id: "mood",
    label: "Mood changes",
    icon: "mood",
    whatsHappening:
      "Oestrogen influences serotonin and dopamine signalling. As levels swing, mood can drop or become volatile in a way that feels unfamiliar and out of proportion to what is happening in your life.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Distinguishes hormonal mood change from depression, which is frequently mistaken for it in midlife.",
      },
      {
        name: "Vitamin B12 injection",
        href: "/treatments/vitamin-b12-injection-oxford",
        why: "Considered where low B12 is contributing to low mood and poor concentration.",
      },
    ],
  },
  {
    id: "anxiety",
    label: "Anxiety & emotional changes",
    icon: "anxiety",
    whatsHappening:
      "New or worsening anxiety, irritability and a lower tolerance for stress are common in perimenopause. Palpitations and a sense of dread can arrive without any obvious trigger.",
    recommended: [
      {
        name: "Perimenopause assessment",
        href: "/perimenopause-oxford",
        why: "Separates hormonal anxiety from other causes and sets out what will actually change it.",
      },
      {
        name: "Vitamin B12 injection",
        href: "/treatments/vitamin-b12-injection-oxford",
        why: "Where deficiency is adding to the physical symptoms of anxiety and fatigue.",
      },
    ],
  },
  {
    id: "brain-fog",
    label: "Brain fog",
    icon: "brain-fog",
    whatsHappening:
      "Word-finding difficulty, losing your thread mid-sentence and struggling to hold detail are recognised features of the transition. Oestrogen receptors are dense in the regions of the brain handling memory and verbal recall.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Addresses the hormonal picture and the sleep quality that drives most of the day-to-day fog.",
      },
      {
        name: "Vitamin B12 injection",
        href: "/treatments/vitamin-b12-injection-oxford",
        why: "B12 deficiency is a common and easily corrected contributor to poor concentration.",
      },
    ],
    note: "For most women this is not early dementia and it improves. We say so plainly, then treat what is treatable.",
  },
  {
    id: "fatigue",
    label: "Fatigue",
    icon: "fatigue",
    whatsHappening:
      "Persistent tiredness in midlife rarely has a single cause. Disrupted sleep, hormonal change, iron or B12 deficiency, thyroid dysfunction and the metabolic shift of perimenopause often overlap.",
    recommended: [
      {
        name: "Vitamin B12 injection",
        href: "/treatments/vitamin-b12-injection-oxford",
        why: "Intramuscular B12 bypasses digestion; many women notice a difference within 24–48 hours.",
      },
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Arranges the blood tests that identify treatable causes instead of leaving fatigue unexplained.",
      },
      {
        name: "Longevity medicine",
        href: "/longevity-medicine-oxford",
        why: "For energy, muscle and metabolic health considered over decades rather than weeks.",
      },
    ],
  },
  {
    id: "weight",
    label: "Weight changes",
    icon: "weight",
    whatsHappening:
      "Falling oestrogen shifts where the body stores fat – from hips and thighs towards the abdomen – while muscle mass and insulin sensitivity decline. The same diet and exercise that worked at 35 stops working at 48.",
    recommended: [
      {
        name: "Medical weight management",
        href: "/treatments/medical-weight-loss-oxford",
        why: "UK-licensed GLP-1 treatment where clinically suitable, prescribed and monitored monthly by a GP.",
      },
      {
        name: "Weight & Body Confidence programme",
        href: "/programmes/weight-body-confidence",
        why: "Combines medical oversight with nutrition and muscle work, so the change holds.",
      },
      {
        name: "Forma Plus Body",
        href: "/treatments/forma-plus-body-contouring-oxford",
        why: "For skin laxity that becomes apparent after significant weight loss.",
      },
    ],
  },
  {
    id: "joint-pain",
    label: "Joint & muscle pain",
    icon: "joint-pain",
    whatsHappening:
      "Oestrogen has an anti-inflammatory role and supports cartilage and connective tissue. Its decline can bring stiffness – worst in the morning – and aching in the hands, shoulders, hips and knees.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Distinguishes menopausal arthralgia from inflammatory arthritis, which needs different treatment.",
      },
      {
        name: "Longevity medicine",
        href: "/longevity-medicine-oxford",
        why: "Strength and movement guidance that protects bone and muscle for the long term.",
      },
    ],
    note: "Where the pattern suggests inflammatory arthritis, we refer to rheumatology rather than treating it here.",
  },
  {
    id: "vaginal-dryness",
    label: "Vaginal dryness & irritation",
    icon: "vaginal-dryness",
    whatsHappening:
      "Vaginal and vulval tissue is highly oestrogen-dependent. As levels fall the tissue thins, loses elasticity and produces less natural lubrication – causing dryness, itching, stinging and sensitivity.",
    recommended: [
      {
        name: "Neauvia N Rose",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
        why: "Medical-grade hyaluronic acid rehydrates the tissue directly; results last 9–12 months.",
      },
      {
        name: "Votiva Forma V",
        href: "/treatments/votiva-forma-v-oxford",
        why: "Non-surgical radiofrequency stimulates collagen to restore tissue quality and natural lubrication.",
      },
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Gynaecological assessment of the tissue, and discussion of local oestrogen options.",
      },
    ],
  },
  {
    id: "painful-sex",
    label: "Painful sex",
    icon: "painful-sex",
    whatsHappening:
      "Thinning tissue, reduced lubrication and loss of elasticity make penetration uncomfortable or painful. Pain then creates anticipatory tension, which makes the next time harder again.",
    recommended: [
      {
        name: "Neauvia N Rose",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
        why: "Restores hydration and volume where thinning tissue is the cause of the discomfort.",
      },
      {
        name: "Votiva Forma V",
        href: "/treatments/votiva-forma-v-oxford",
        why: "Improves tissue tone and comfort over a course of three sessions.",
      },
      {
        name: "Intimate Wellness programme",
        href: "/programmes/intimate-wellness",
        why: "A discreet, sequenced plan when comfort, confidence and pelvic floor tension all play a part.",
      },
    ],
  },
  {
    id: "low-libido",
    label: "Low libido",
    icon: "low-libido",
    whatsHappening:
      "Desire in midlife is shaped by hormones, sleep, mood, physical comfort and relationship context together. Falling oestrogen and testosterone matter, but so does the experience of pain or exhaustion.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Works through the inputs in order, including whether testosterone is worth considering.",
      },
      {
        name: "Intimate Wellness programme",
        href: "/programmes/intimate-wellness",
        why: "Treats comfort first, since pain during sex suppresses desire on its own.",
      },
    ],
    note: "Testosterone for low libido is prescribed off-licence in the UK; where it is appropriate we arrange specialist referral.",
  },
  {
    id: "urinary",
    label: "Urinary symptoms",
    icon: "urinary",
    whatsHappening:
      "The bladder and urethra share the same oestrogen sensitivity as vaginal tissue. Urgency, going more often, leaking when you cough or exercise, and recurrent urine infections all become more common after menopause.",
    recommended: [
      {
        name: "Votiva Forma V",
        href: "/treatments/votiva-forma-v-oxford",
        why: "Radiofrequency tightening can improve mild stress incontinence and urgency.",
      },
      {
        name: "Postpartum recovery",
        href: "/postpartum-recovery-oxford",
        why: "Where pelvic floor weakness dates from childbirth rather than menopause alone.",
      },
    ],
    note: "Recurrent infection and moderate or severe incontinence are referred to urogynaecology.",
  },
  {
    id: "breast-tenderness",
    label: "Breast tenderness",
    icon: "breast-tenderness",
    whatsHappening:
      "Fluctuating oestrogen and progesterone in perimenopause can make breasts feel swollen, heavy or sore – often unpredictably, and sometimes more intensely than at any point previously.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Examination by a formally trained gynaecologist, then cyclical tenderness managed within your wider plan.",
      },
      {
        name: "Women's health assessment",
        href: "/womens-health-oxford",
        why: "Where symptoms sit alongside other changes that are worth assessing together.",
      },
    ],
    note: "Any new lump, skin change or one-sided pain is assessed promptly and referred for imaging where indicated.",
  },
  {
    id: "skin-hair-nails",
    label: "Skin, hair & nail changes",
    icon: "skin-hair-nails",
    whatsHappening:
      "Skin can lose a significant proportion of its collagen in the years around menopause. The result is thinning, dryness, loss of firmness and slower healing, often alongside hair shedding and brittle nails.",
    recommended: [
      {
        name: "Profhilo",
        href: "/treatments/profhilo-oxford",
        why: "Bio-remodelling hyaluronic acid stimulates collagen and elastin – particularly suited to menopausal skin.",
      },
      {
        name: "Morpheus8",
        href: "/treatments/morpheus8-oxford",
        why: "Radiofrequency microneedling remodels collagen deeper in the tissue for laxity and texture.",
      },
      {
        name: "Skin boosters",
        href: "/treatments/skin-boosters-oxford",
        why: "Injectable hydration for dull, crepey or papery skin without adding volume.",
      },
      {
        name: "Skin Health & Regeneration programme",
        href: "/programmes/skin-health-regeneration",
        why: "Sequences the above over months, with home care, instead of a single treatment.",
      },
    ],
  },
  {
    id: "irregular-periods",
    label: "Irregular periods",
    icon: "irregular-periods",
    whatsHappening:
      "Cycles becoming shorter, longer, heavier or unpredictable is usually the first sign of perimenopause, as ovulation becomes less consistent and hormone levels swing from month to month.",
    recommended: [
      {
        name: "Perimenopause assessment",
        href: "/perimenopause-oxford",
        why: "A full gynaecological history, and clarity on which bleeding patterns need investigating.",
      },
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "For planning the years ahead once the pattern of change is established.",
      },
    ],
    note: "Bleeding after sex, between periods, or any bleeding after menopause is referred urgently.",
  },
  {
    id: "digestive",
    label: "Digestive changes & bloating",
    icon: "digestive",
    whatsHappening:
      "Oestrogen and progesterone affect gut motility and the gut microbiome. Many women notice new bloating, altered bowel habit or food sensitivities that were never an issue before.",
    recommended: [
      {
        name: "Specialist menopause consultation",
        href: "/menopause-clinic-oxford",
        why: "Excludes the causes that need excluding before anything is attributed to hormones.",
      },
      {
        name: "Weight & Body Confidence programme",
        href: "/programmes/weight-body-confidence",
        why: "Practical work on meal composition, fibre, protein and timing rather than an elimination diet.",
      },
    ],
  },
];

export interface TreatmentApproach {
  id: string;
  title: string;
  icon: IconName;
  description: string;
}

export const treatmentApproaches: TreatmentApproach[] = [
  {
    id: "menopause-assessment",
    title: "Specialist Menopause Assessment",
    icon: "assessment",
    description:
      "A 45-minute assessment with a formally trained gynaecologist and specialist menopause lead. Where hormone therapy is clinically appropriate, Dr Inga confirms your suitability and arranges specialist prescribing.",
  },
  {
    id: "non-hormonal",
    title: "Non-Hormonal Symptom Management",
    icon: "non-hormonal",
    description:
      "Hormone therapy is not suitable or wanted by everyone. For those women we build an evidence-based non-hormonal plan, guided by NICE and British Menopause Society recommendations.",
  },
  {
    id: "nutrition",
    title: "Nutrition & Metabolic Health",
    icon: "nutrition",
    description:
      "Protein, fibre, insulin sensitivity, bone and cardiovascular protection – nutrition guidance built for the decades after menopause rather than a short-term diet.",
  },
  {
    id: "weight-management",
    title: "Medical Weight Management",
    icon: "weight-management",
    description:
      "UK-licensed GLP-1 treatment where clinically suitable, prescribed and monitored by a GMC-registered doctor with monthly review, always alongside nutrition and muscle work.",
  },
  {
    id: "movement-sleep",
    title: "Movement, Sleep & Nervous System",
    icon: "sleep",
    description:
      "Strength training to protect bone and muscle, and sleep and stress strategies that address cortisol rather than mask it.",
  },
  {
    id: "intimate-health",
    title: "Intimate & Vaginal Health",
    icon: "intimate",
    description:
      "Discreet, gynaecologist-led care for dryness, discomfort and laxity – including regenerative hyaluronic acid and non-surgical radiofrequency, delivered personally by Dr Inga.",
  },
  {
    id: "skin-health",
    title: "Skin Health & Collagen Support",
    icon: "skin",
    description:
      "Treatments chosen for hormonally ageing skin – bio-remodelling, radiofrequency microneedling, injectable hydration and pigmentation care – sequenced over months.",
  },
  {
    id: "testing",
    title: "Testing & Nutrient Support",
    icon: "testing",
    description:
      "Where clinically indicated we arrange blood tests – thyroid, ferritin, B12, vitamin D and hormone levels – and treat what we find.",
  },
];
