// Treatment navigation data for homepage featured links and related treatments cross-linking

export interface TreatmentLink {
  name: string;
  href: string;
}

// Key treatments to feature on homepage
export const featuredTreatments = {
  womensHealth: [
    { name: "Menopause Consultation", href: "/menopause-clinic-oxford" },
    { name: "Perimenopause Consultation", href: "/perimenopause-oxford" },
    { name: "Intimate Health", href: "/sexual-wellness-oxford" },
    { name: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
  ],
  skin: [
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { name: "Anti-Wrinkle", href: "/treatments/anti-wrinkle-injections-oxford" },
  ],
  body: [
    { name: "Forma Plus", href: "/treatments/forma-plus-body-contouring-oxford" },
    { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
  ],
};

// Related treatments for cross-linking
export const relatedTreatments: Record<string, TreatmentLink[]> = {
  // Skin & Aesthetics cross-links
  "profhilo-oxford": [
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { name: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
  ],
  "morpheus8-oxford": [
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
    { name: "Forma Facelift", href: "/treatments/forma-facelift-oxford" },
    { name: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
  ],
  "dermal-fillers-oxford": [
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
    { name: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
    { name: "Filler Dissolving", href: "/treatments/filler-dissolving-oxford" },
  ],
  "lip-fillers-oxford": [
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { name: "Filler Dissolving", href: "/treatments/filler-dissolving-oxford" },
  ],
  "skin-boosters-oxford": [
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { name: "Forma Facelift", href: "/treatments/forma-facelift-oxford" },
  ],
  "anti-wrinkle-injections-oxford": [
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { name: "Jaw Treatment", href: "/treatments/jaw-slimming-teeth-grinding-oxford" },
    { name: "Excessive Sweating", href: "/treatments/excessive-sweating-treatment-oxford" },
  ],
  "filler-dissolving-oxford": [
    { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
    { name: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
  ],
  "jaw-slimming-teeth-grinding-oxford": [
    { name: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { name: "Excessive Sweating", href: "/treatments/excessive-sweating-treatment-oxford" },
  ],
  "forma-facelift-oxford": [
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
    { name: "Lumecca IPL", href: "/treatments/lumecca-ipl-oxford" },
  ],
  "lumecca-ipl-oxford": [
    { name: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
    { name: "Forma Facelift", href: "/treatments/forma-facelift-oxford" },
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
  ],
  "chemical-peels-oxford": [
    { name: "Lumecca IPL", href: "/treatments/lumecca-ipl-oxford" },
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { name: "Profhilo", href: "/treatments/profhilo-oxford" },
  ],
  "excessive-sweating-treatment-oxford": [
    { name: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
    { name: "Jaw Treatment", href: "/treatments/jaw-slimming-teeth-grinding-oxford" },
  ],

  // Women's Health cross-links
  "menopause-clinic-oxford": [
    { name: "Perimenopause Consultation", href: "/perimenopause-oxford" },
    { name: "Women's Health Consultation", href: "/womens-health-oxford" },
    { name: "Intimate Health", href: "/sexual-wellness-oxford" },
  ],
  "perimenopause-oxford": [
    { name: "Menopause Consultation", href: "/menopause-clinic-oxford" },
    { name: "Women's Health Consultation", href: "/womens-health-oxford" },
  ],
  "womens-health-oxford": [
    { name: "Menopause Consultation", href: "/menopause-clinic-oxford" },
    { name: "Perimenopause Consultation", href: "/perimenopause-oxford" },
  ],
  "sexual-wellness-oxford": [
    { name: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
    { name: "Neauvia N Rose", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
    { name: "Post-Birth Recovery", href: "/postpartum-recovery-oxford" },
  ],
  "postpartum-recovery-oxford": [
    { name: "Intimate Health", href: "/sexual-wellness-oxford" },
    { name: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
    { name: "Women's Health Consultation", href: "/womens-health-oxford" },
  ],
  "votiva-forma-v-oxford": [
    { name: "Intimate Health Consultation", href: "/sexual-wellness-oxford" },
    { name: "Neauvia N Rose", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
  ],
  "neauvia-n-rose-intimate-rejuvenation-oxford": [
    { name: "Intimate Health Consultation", href: "/sexual-wellness-oxford" },
    { name: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
  ],
  "vitamin-b12-injection-oxford": [
    { name: "Women's Health Consultation", href: "/womens-health-oxford" },
    { name: "Medical Form Completion", href: "/treatments/medical-form-completion-oxford" },
  ],
  "medical-form-completion-oxford": [
    { name: "Women's Health Consultation", href: "/womens-health-oxford" },
  ],

  // Body cross-links
  "forma-plus-body-contouring-oxford": [
    { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
  ],
  "inmode-fx-skin-tightening-oxford": [
    { name: "Forma Plus", href: "/treatments/forma-plus-body-contouring-oxford" },
    { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
  ],
};
