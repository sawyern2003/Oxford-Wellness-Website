/**
 * Glowday booking URLs for each treatment.
 * Treatment-specific URLs should be obtained from the clinic's Glowday page.
 * Where a specific URL is not available, the general booking link is used.
 */

export const GLOWDAY_GENERAL = "https://www.glowday.com/clinic/the-oxford-wellness-doctor/inga-taganova";

export interface BookingUrlConfig {
  glowdayUrl: string;
  hasSpecificUrl: boolean;
}

export const BOOKING_URLS: Record<string, BookingUrlConfig> = {
  "morpheus8-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "profhilo-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "dermal-fillers-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "lip-fillers-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "sexual-wellness-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "menopause-clinic-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "womens-health-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "votiva-forma-v-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "neauvia-n-rose-intimate-rejuvenation-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "anti-wrinkle-injections-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "skin-boosters-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "chemical-peels-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "lumecca-ipl-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "forma-facelift-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "forma-plus-body-contouring-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "inmode-fx-skin-tightening-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "filler-dissolving-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "jaw-slimming-teeth-grinding-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "excessive-sweating-treatment-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "vitamin-b12-injection-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  },
  "medical-form-completion-oxford": {
    glowdayUrl: GLOWDAY_GENERAL,
    hasSpecificUrl: false
  }
};

export function getBookingUrl(slug: string): string {
  return BOOKING_URLS[slug]?.glowdayUrl || GLOWDAY_GENERAL;
}

export function getTreatmentsNeedingGlowdayLinks(): string[] {
  return Object.entries(BOOKING_URLS)
    .filter(([_, config]) => !config.hasSpecificUrl)
    .map(([slug]) => slug);
}
