import { createLazyRoute, type LazyPage } from "@/lib/lazyRoute";

/** Exact-path lazy pages (homepage stays eager in App.tsx). */
export const Services = createLazyRoute(() => import("@/pages/services"));
export const About = createLazyRoute(() => import("@/pages/about"));
export const Contact = createLazyRoute(() => import("@/pages/contact"));
export const AIPreConsult = createLazyRoute(() => import("@/pages/ai-pre-consult"));
export const Shop = createLazyRoute(() => import("@/pages/shop"));
export const RecommendedSkincare = createLazyRoute(() => import("@/pages/recommended-skincare"));
export const HowWeHelp = createLazyRoute(() => import("@/pages/how-we-help"));
export const SymptomsAndTreatments = createLazyRoute(() => import("@/pages/symptoms-and-treatments"));
export const ProgrammeFinder = createLazyRoute(() => import("@/pages/programme-finder"));
export const SkinHealthProgramme = createLazyRoute(() => import("@/pages/programmes/skin-health-regeneration"));
export const IntimateWellnessProgramme = createLazyRoute(() => import("@/pages/programmes/intimate-wellness"));
export const Pricing = createLazyRoute(() => import("@/pages/pricing"));
export const PersonalisedTreatmentPlans = createLazyRoute(() => import("@/pages/personalised-treatment-plans"));
export const MenopauseClinic = createLazyRoute(() => import("@/pages/menopause-clinic"));
export const PerimenopauseOxford = createLazyRoute(() => import("@/pages/perimenopause-oxford"));
export const WomensHealthOxford = createLazyRoute(() => import("@/pages/womens-health-oxford"));
export const LongevityMedicineOxford = createLazyRoute(() => import("@/pages/longevity-medicine-oxford"));
export const SexualWellnessOxford = createLazyRoute(() => import("@/pages/sexual-wellness-oxford"));
export const PostpartumRecoveryOxford = createLazyRoute(() => import("@/pages/postpartum-recovery-oxford"));
export const SkinClinicOxford = createLazyRoute(() => import("@/pages/skin-clinic-oxford"));
export const MenopauseSkin = createLazyRoute(() => import("@/pages/menopause-skin"));
export const BlogIndex = createLazyRoute(() => import("@/pages/blog/index"));
export const BlogMenopauseSkin = createLazyRoute(() => import("@/pages/blog/menopause-skin-changes"));
export const BlogProfhiloVsFillers = createLazyRoute(() => import("@/pages/blog/profhilo-vs-dermal-fillers"));
export const BlogLipFillerNatural = createLazyRoute(() => import("@/pages/blog/lip-filler-natural-results"));
export const BlogMorpheus8Timeline = createLazyRoute(() => import("@/pages/blog/morpheus8-results-timeline"));
export const BlogWeightGainPeri = createLazyRoute(() => import("@/pages/blog/weight-gain-perimenopause"));
export const BlogChoosingClinic = createLazyRoute(() => import("@/pages/blog/choosing-aesthetics-clinic-oxford"));
export const BlogOver50 = createLazyRoute(() => import("@/pages/blog/aesthetic-treatments-over-50"));
export const BlogSciencePark = createLazyRoute(() => import("@/pages/blog/new-oxford-science-park-clinic"));
export const BlogPerimenopauseSymptoms = createLazyRoute(() => import("@/pages/blog/perimenopause-symptoms-oxford"));
export const BlogHRTConsultation = createLazyRoute(() => import("@/pages/blog/hrt-consultation-what-to-expect"));
export const BlogIntimateHealth = createLazyRoute(() => import("@/pages/blog/intimate-health-changes-menopause"));
export const BlogWomensHealthCheck = createLazyRoute(() => import("@/pages/blog/womens-health-check-oxford"));
export const BlogLongevityMedicine = createLazyRoute(() => import("@/pages/blog/longevity-medicine-for-women"));
export const BlogJawSlimming = createLazyRoute(() => import("@/pages/blog/jaw-slimming-treatment-oxford"));
export const BlogExcessiveSweating = createLazyRoute(() => import("@/pages/blog/excessive-sweating-treatment-oxford"));
export const BlogChemicalPeels = createLazyRoute(() => import("@/pages/blog/chemical-peels-oxford"));
export const BlogLumeccaIPL = createLazyRoute(() => import("@/pages/blog/lumecca-ipl-oxford"));
export const BlogFormaSkinTightening = createLazyRoute(() => import("@/pages/blog/forma-skin-tightening-oxford"));
export const BlogInModeFX = createLazyRoute(() => import("@/pages/blog/inmode-fx-body-contouring-oxford"));
export const BlogAntiWrinkleInjections = createLazyRoute(() => import("@/pages/blog/anti-wrinkle-injections-oxford"));
export const BlogPostpartumRecovery = createLazyRoute(() => import("@/pages/blog/postpartum-recovery-oxford"));
export const AntiWrinkle = createLazyRoute(() => import("@/pages/treatments/anti-wrinkle"));
export const DermalFillers = createLazyRoute(() => import("@/pages/treatments/dermal-fillers"));
export const LipFillers = createLazyRoute(() => import("@/pages/treatments/lip-fillers"));
export const Profhilo = createLazyRoute(() => import("@/pages/treatments/profhilo"));
export const Morpheus8 = createLazyRoute(() => import("@/pages/treatments/morpheus8"));
export const ExcessiveSweating = createLazyRoute(() => import("@/pages/treatments/excessive-sweating"));
export const ChemicalPeels = createLazyRoute(() => import("@/pages/treatments/chemical-peels"));
export const SkinBoosters = createLazyRoute(() => import("@/pages/treatments/skin-boosters"));
export const NeauviaNRose = createLazyRoute(() => import("@/pages/treatments/neauvia-n-rose"));
export const VotivaFormaV = createLazyRoute(() => import("@/pages/treatments/votiva-forma-v"));
export const VitaminB12 = createLazyRoute(() => import("@/pages/treatments/vitamin-b12"));
export const MedicalFormCompletion = createLazyRoute(() => import("@/pages/treatments/medical-form-completion"));
export const FormaFacelift = createLazyRoute(() => import("@/pages/treatments/forma-facelift"));
export const FormaPlusBody = createLazyRoute(() => import("@/pages/treatments/forma-plus-body"));
export const InModeFX = createLazyRoute(() => import("@/pages/treatments/inmode-fx"));
export const LumeccaIPL = createLazyRoute(() => import("@/pages/treatments/lumecca-ipl"));
export const FillerDissolving = createLazyRoute(() => import("@/pages/treatments/filler-dissolving"));
export const JawSlimming = createLazyRoute(() => import("@/pages/treatments/jaw-slimming"));
export const PrivacyPolicy = createLazyRoute(() => import("@/pages/privacy-policy"));
export const CookiePolicy = createLazyRoute(() => import("@/pages/cookie-policy"));
export const TermsAndConditions = createLazyRoute(() => import("@/pages/terms-and-conditions"));
export const ThankYou = createLazyRoute(() => import("@/pages/thank-you"));
export const CallPage = createLazyRoute(() => import("@/pages/call"));
export const Book = createLazyRoute(() => import("@/pages/book"));
export const GiftVouchers = createLazyRoute(() => import("@/pages/gift-vouchers"));
export const FlourishCompare = createLazyRoute(() => import("@/pages/flourish-compare"));
export const NotFound = createLazyRoute(() => import("@/pages/not-found"));
export const OxfordPainDoctorHome = createLazyRoute(() => import("@/pages/pain/home"));
export const PainBook = createLazyRoute(() => import("@/pages/pain/book"));
export const AboutDrRichard = createLazyRoute(() => import("@/pages/pain/about"));
export const PainHowWeHelp = createLazyRoute(() => import("@/pages/pain/how-we-help"));
export const PainLibrary = createLazyRoute(() => import("@/pages/pain/library"));
export const PainLibraryArticle = createLazyRoute(() => import("@/pages/pain/library-article"));

/** Exact pathname → lazy page (no trailing slash). */
const EXACT_PAGES: Record<string, LazyPage> = {
  "/about": About,
  "/how-we-help": HowWeHelp,
  "/symptoms-and-treatments": SymptomsAndTreatments,
  "/programme-finder": ProgrammeFinder,
  "/programmes/skin-health-regeneration": SkinHealthProgramme,
  "/programmes/intimate-wellness": IntimateWellnessProgramme,
  "/treatments": Services,
  "/treatments/anti-wrinkle-injections-oxford": AntiWrinkle,
  "/treatments/dermal-fillers-oxford": DermalFillers,
  "/treatments/lip-fillers-oxford": LipFillers,
  "/treatments/profhilo-oxford": Profhilo,
  "/treatments/morpheus8-oxford": Morpheus8,
  "/treatments/excessive-sweating-treatment-oxford": ExcessiveSweating,
  "/treatments/chemical-peels-oxford": ChemicalPeels,
  "/treatments/skin-boosters-oxford": SkinBoosters,
  "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford": NeauviaNRose,
  "/treatments/votiva-forma-v-oxford": VotivaFormaV,
  "/treatments/vitamin-b12-injection-oxford": VitaminB12,
  "/treatments/medical-form-completion-oxford": MedicalFormCompletion,
  "/treatments/forma-facelift-oxford": FormaFacelift,
  "/treatments/forma-plus-body-contouring-oxford": FormaPlusBody,
  "/treatments/inmode-fx-skin-tightening-oxford": InModeFX,
  "/treatments/lumecca-ipl-oxford": LumeccaIPL,
  "/treatments/filler-dissolving-oxford": FillerDissolving,
  "/treatments/jaw-slimming-teeth-grinding-oxford": JawSlimming,
  "/menopause-clinic-oxford": MenopauseClinic,
  "/perimenopause-oxford": PerimenopauseOxford,
  "/womens-health-oxford": WomensHealthOxford,
  "/longevity-medicine-oxford": LongevityMedicineOxford,
  "/sexual-wellness-oxford": SexualWellnessOxford,
  "/postpartum-recovery-oxford": PostpartumRecoveryOxford,
  "/skin-clinic-oxford": SkinClinicOxford,
  "/menopause-skin": MenopauseSkin,
  "/pricing": Pricing,
  "/personalised-treatment-plans": PersonalisedTreatmentPlans,
  "/blog": BlogIndex,
  "/blog/menopause-skin-changes": BlogMenopauseSkin,
  "/blog/profhilo-vs-dermal-fillers": BlogProfhiloVsFillers,
  "/blog/lip-filler-natural-results": BlogLipFillerNatural,
  "/blog/morpheus8-results-timeline": BlogMorpheus8Timeline,
  "/blog/weight-gain-perimenopause": BlogWeightGainPeri,
  "/blog/choosing-aesthetics-clinic-oxford": BlogChoosingClinic,
  "/blog/aesthetic-treatments-over-50": BlogOver50,
  "/blog/new-oxford-science-park-clinic": BlogSciencePark,
  "/blog/perimenopause-symptoms-oxford": BlogPerimenopauseSymptoms,
  "/blog/hrt-consultation-what-to-expect": BlogHRTConsultation,
  "/blog/intimate-health-changes-menopause": BlogIntimateHealth,
  "/blog/womens-health-check-oxford": BlogWomensHealthCheck,
  "/blog/longevity-medicine-for-women": BlogLongevityMedicine,
  "/blog/jaw-slimming-treatment-oxford": BlogJawSlimming,
  "/blog/excessive-sweating-treatment-oxford": BlogExcessiveSweating,
  "/blog/chemical-peels-oxford": BlogChemicalPeels,
  "/blog/lumecca-ipl-oxford": BlogLumeccaIPL,
  "/blog/forma-skin-tightening-oxford": BlogFormaSkinTightening,
  "/blog/inmode-fx-body-contouring-oxford": BlogInModeFX,
  "/blog/anti-wrinkle-injections-oxford": BlogAntiWrinkleInjections,
  "/blog/postpartum-recovery-oxford": BlogPostpartumRecovery,
  "/ai-consultation": AIPreConsult,
  "/call": CallPage,
  "/book": Book,
  "/oxford-pain-doctor": OxfordPainDoctorHome,
  "/oxford-pain-doctor/about": AboutDrRichard,
  "/oxford-pain-doctor/how-we-help": PainHowWeHelp,
  "/oxford-pain-doctor/library": PainLibrary,
  "/oxford-pain-doctor/contact": Contact,
  "/oxford-pain-doctor/book": PainBook,
  "/contact": Contact,
  "/gift-vouchers": GiftVouchers,
  "/flourish-compare": FlourishCompare,
  "/recommended-skincare": RecommendedSkincare,
  "/shop": Shop,
  "/privacy-policy": PrivacyPolicy,
  "/cookie-policy": CookiePolicy,
  "/terms-and-conditions": TermsAndConditions,
  "/thank-you": ThankYou,
};

function pageForPath(pathname: string): LazyPage | null {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return null;
  if (EXACT_PAGES[path]) return EXACT_PAGES[path];
  if (path.startsWith("/oxford-pain-doctor/library/")) return PainLibraryArticle;
  return NotFound;
}

/**
 * Resolve and await the lazy chunk for the current URL before hydrateRoot,
 * so Suspense does not blank prerendered markup.
 */
export function preloadPath(pathname: string): Promise<unknown> {
  const page = pageForPath(pathname);
  return page ? page.preload() : Promise.resolve();
}

/** True after preloadPath (SSR + first hydrate) so Router can skip Suspense. */
export function isPathPreloaded(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return true;
  return pageForPath(pathname)?.isLoaded() ?? false;
}
