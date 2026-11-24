import { lazy, Suspense } from "react";
import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import PainDoctorBanner from "@/components/layout/PainDoctorBanner";
import { isPainRoute, PAIN_BOOK_HREF, SHOW_PAIN_DOCTOR } from "@/lib/brand";
import CookieConsent from "@/components/analytics/CookieConsent";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/utils";

const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const AIPreConsult = lazy(() => import("@/pages/ai-pre-consult"));
const Shop = lazy(() => import("@/pages/shop"));
const RecommendedSkincare = lazy(() => import("@/pages/recommended-skincare"));
const HowWeHelp = lazy(() => import("@/pages/how-we-help"));
const SymptomsAndTreatments = lazy(() => import("@/pages/symptoms-and-treatments"));
const ProgrammeFinder = lazy(() => import("@/pages/programme-finder"));
const SkinHealthProgramme = lazy(() => import("@/pages/programmes/skin-health-regeneration"));
const IntimateWellnessProgramme = lazy(() => import("@/pages/programmes/intimate-wellness"));
const Pricing = lazy(() => import("@/pages/pricing"));
const PersonalisedTreatmentPlans = lazy(() => import("@/pages/personalised-treatment-plans"));
const MenopauseClinic = lazy(() => import("@/pages/menopause-clinic"));
const PerimenopauseOxford = lazy(() => import("@/pages/perimenopause-oxford"));
const WomensHealthOxford = lazy(() => import("@/pages/womens-health-oxford"));
const LongevityMedicineOxford = lazy(() => import("@/pages/longevity-medicine-oxford"));
const SexualWellnessOxford = lazy(() => import("@/pages/sexual-wellness-oxford"));
const PostpartumRecoveryOxford = lazy(() => import("@/pages/postpartum-recovery-oxford"));
const SkinClinicOxford = lazy(() => import("@/pages/skin-clinic-oxford"));
const MenopauseSkin = lazy(() => import("@/pages/menopause-skin"));
const BlogIndex = lazy(() => import("@/pages/blog/index"));
const BlogMenopauseSkin = lazy(() => import("@/pages/blog/menopause-skin-changes"));
const BlogProfhiloVsFillers = lazy(() => import("@/pages/blog/profhilo-vs-dermal-fillers"));
const BlogLipFillerNatural = lazy(() => import("@/pages/blog/lip-filler-natural-results"));
const BlogMorpheus8Timeline = lazy(() => import("@/pages/blog/morpheus8-results-timeline"));
const BlogWeightGainPeri = lazy(() => import("@/pages/blog/weight-gain-perimenopause"));
const BlogChoosingClinic = lazy(() => import("@/pages/blog/choosing-aesthetics-clinic-oxford"));
const BlogOver50 = lazy(() => import("@/pages/blog/aesthetic-treatments-over-50"));
const BlogSciencePark = lazy(() => import("@/pages/blog/new-oxford-science-park-clinic"));
const BlogPerimenopauseSymptoms = lazy(() => import("@/pages/blog/perimenopause-symptoms-oxford"));
const BlogHRTConsultation = lazy(() => import("@/pages/blog/hrt-consultation-what-to-expect"));
const BlogIntimateHealth = lazy(() => import("@/pages/blog/intimate-health-changes-menopause"));
const BlogWomensHealthCheck = lazy(() => import("@/pages/blog/womens-health-check-oxford"));
const BlogLongevityMedicine = lazy(() => import("@/pages/blog/longevity-medicine-for-women"));
const BlogJawSlimming = lazy(() => import("@/pages/blog/jaw-slimming-treatment-oxford"));
const BlogExcessiveSweating = lazy(() => import("@/pages/blog/excessive-sweating-treatment-oxford"));
const BlogChemicalPeels = lazy(() => import("@/pages/blog/chemical-peels-oxford"));
const BlogLumeccaIPL = lazy(() => import("@/pages/blog/lumecca-ipl-oxford"));
const BlogFormaSkinTightening = lazy(() => import("@/pages/blog/forma-skin-tightening-oxford"));
const BlogInModeFX = lazy(() => import("@/pages/blog/inmode-fx-body-contouring-oxford"));
const BlogAntiWrinkleInjections = lazy(() => import("@/pages/blog/anti-wrinkle-injections-oxford"));
const BlogPostpartumRecovery = lazy(() => import("@/pages/blog/postpartum-recovery-oxford"));
const AntiWrinkle = lazy(() => import("@/pages/treatments/anti-wrinkle"));
const DermalFillers = lazy(() => import("@/pages/treatments/dermal-fillers"));
const LipFillers = lazy(() => import("@/pages/treatments/lip-fillers"));
const Profhilo = lazy(() => import("@/pages/treatments/profhilo"));
const Morpheus8 = lazy(() => import("@/pages/treatments/morpheus8"));
const ExcessiveSweating = lazy(() => import("@/pages/treatments/excessive-sweating"));
const ChemicalPeels = lazy(() => import("@/pages/treatments/chemical-peels"));
const SkinBoosters = lazy(() => import("@/pages/treatments/skin-boosters"));
const NeauviaNRose = lazy(() => import("@/pages/treatments/neauvia-n-rose"));
const VotivaFormaV = lazy(() => import("@/pages/treatments/votiva-forma-v"));
const VitaminB12 = lazy(() => import("@/pages/treatments/vitamin-b12"));
const MedicalFormCompletion = lazy(() => import("@/pages/treatments/medical-form-completion"));
const FormaFacelift = lazy(() => import("@/pages/treatments/forma-facelift"));
const FormaPlusBody = lazy(() => import("@/pages/treatments/forma-plus-body"));
const InModeFX = lazy(() => import("@/pages/treatments/inmode-fx"));
const LumeccaIPL = lazy(() => import("@/pages/treatments/lumecca-ipl"));
const FillerDissolving = lazy(() => import("@/pages/treatments/filler-dissolving"));
const JawSlimming = lazy(() => import("@/pages/treatments/jaw-slimming"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const TermsAndConditions = lazy(() => import("@/pages/terms-and-conditions"));
const ThankYou = lazy(() => import("@/pages/thank-you"));
const GiftVouchers = lazy(() => import("@/pages/gift-vouchers"));
const GiftVouchersThankYou = lazy(() => import("@/pages/gift-vouchers-thank-you"));
const CallPage = lazy(() => import("@/pages/call"));
const Book = lazy(() => import("@/pages/book"));
const NotFound = lazy(() => import("@/pages/not-found"));
const OxfordPainDoctorHome = lazy(() => import("@/pages/pain/home"));
const PainBook = lazy(() => import("@/pages/pain/book"));
const AboutDrRichard = lazy(() => import("@/pages/pain/about"));
const PainHowWeHelp = lazy(() => import("@/pages/pain/how-we-help"));
const PainLibrary = lazy(() => import("@/pages/pain/library"));
const PainLibraryArticle = lazy(() => import("@/pages/pain/library-article"));

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/how-we-help" component={HowWeHelp} />
        <Route path="/symptoms-and-treatments" component={SymptomsAndTreatments} />
        <Route path="/programme-finder" component={ProgrammeFinder} />
        <Route path="/programmes/skin-health-regeneration" component={SkinHealthProgramme} />
        <Route path="/programmes/intimate-wellness" component={IntimateWellnessProgramme} />
        <Route path="/treatments" component={Services} />
        <Route path="/treatments/anti-wrinkle-injections-oxford" component={AntiWrinkle} />
        <Route path="/treatments/dermal-fillers-oxford" component={DermalFillers} />
        <Route path="/treatments/lip-fillers-oxford" component={LipFillers} />
        <Route path="/treatments/profhilo-oxford" component={Profhilo} />
        <Route path="/treatments/morpheus8-oxford" component={Morpheus8} />
        <Route path="/treatments/excessive-sweating-treatment-oxford" component={ExcessiveSweating} />
        <Route path="/treatments/chemical-peels-oxford" component={ChemicalPeels} />
        <Route path="/treatments/skin-boosters-oxford" component={SkinBoosters} />
        <Route path="/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" component={NeauviaNRose} />
        <Route path="/treatments/votiva-forma-v-oxford" component={VotivaFormaV} />
        <Route path="/treatments/vitamin-b12-injection-oxford" component={VitaminB12} />
        <Route path="/treatments/medical-form-completion-oxford" component={MedicalFormCompletion} />
        <Route path="/treatments/forma-facelift-oxford" component={FormaFacelift} />
        <Route path="/treatments/forma-plus-body-contouring-oxford" component={FormaPlusBody} />
        <Route path="/treatments/inmode-fx-skin-tightening-oxford" component={InModeFX} />
        <Route path="/treatments/lumecca-ipl-oxford" component={LumeccaIPL} />
        <Route path="/treatments/filler-dissolving-oxford" component={FillerDissolving} />
        <Route path="/treatments/jaw-slimming-teeth-grinding-oxford" component={JawSlimming} />
        <Route path="/menopause-clinic-oxford" component={MenopauseClinic} />
        <Route path="/perimenopause-oxford" component={PerimenopauseOxford} />
        <Route path="/womens-health-oxford" component={WomensHealthOxford} />
        <Route path="/longevity-medicine-oxford" component={LongevityMedicineOxford} />
        <Route path="/sexual-wellness-oxford" component={SexualWellnessOxford} />
        <Route path="/postpartum-recovery-oxford" component={PostpartumRecoveryOxford} />
        <Route path="/skin-clinic-oxford" component={SkinClinicOxford} />
        <Route path="/menopause-skin" component={MenopauseSkin} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/personalised-treatment-plans" component={PersonalisedTreatmentPlans} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/menopause-skin-changes" component={BlogMenopauseSkin} />
        <Route path="/blog/profhilo-vs-dermal-fillers" component={BlogProfhiloVsFillers} />
        <Route path="/blog/lip-filler-natural-results" component={BlogLipFillerNatural} />
        <Route path="/blog/morpheus8-results-timeline" component={BlogMorpheus8Timeline} />
        <Route path="/blog/weight-gain-perimenopause" component={BlogWeightGainPeri} />
        <Route path="/blog/choosing-aesthetics-clinic-oxford" component={BlogChoosingClinic} />
        <Route path="/blog/aesthetic-treatments-over-50" component={BlogOver50} />
        <Route path="/blog/new-oxford-science-park-clinic" component={BlogSciencePark} />
        <Route path="/blog/perimenopause-symptoms-oxford" component={BlogPerimenopauseSymptoms} />
        <Route path="/blog/hrt-consultation-what-to-expect" component={BlogHRTConsultation} />
        <Route path="/blog/intimate-health-changes-menopause" component={BlogIntimateHealth} />
        <Route path="/blog/womens-health-check-oxford" component={BlogWomensHealthCheck} />
        <Route path="/blog/longevity-medicine-for-women" component={BlogLongevityMedicine} />
        <Route path="/blog/jaw-slimming-treatment-oxford" component={BlogJawSlimming} />
        <Route path="/blog/excessive-sweating-treatment-oxford" component={BlogExcessiveSweating} />
        <Route path="/blog/chemical-peels-oxford" component={BlogChemicalPeels} />
        <Route path="/blog/lumecca-ipl-oxford" component={BlogLumeccaIPL} />
        <Route path="/blog/forma-skin-tightening-oxford" component={BlogFormaSkinTightening} />
        <Route path="/blog/inmode-fx-body-contouring-oxford" component={BlogInModeFX} />
        <Route path="/blog/anti-wrinkle-injections-oxford" component={BlogAntiWrinkleInjections} />
        <Route path="/blog/postpartum-recovery-oxford" component={BlogPostpartumRecovery} />
        <Route path="/ai-consultation" component={AIPreConsult} />
        <Route path="/call" component={CallPage} />
        <Route path="/book" component={Book} />
        <Route path="/oxford-pain-doctor">
          {SHOW_PAIN_DOCTOR ? <OxfordPainDoctorHome /> : <Redirect to="/" />}
        </Route>
        <Route path="/oxford-pain-doctor/about">
          {SHOW_PAIN_DOCTOR ? <AboutDrRichard /> : <Redirect to="/" />}
        </Route>
        <Route path="/oxford-pain-doctor/how-we-help">
          {SHOW_PAIN_DOCTOR ? <PainHowWeHelp /> : <Redirect to="/" />}
        </Route>
        <Route path="/oxford-pain-doctor/library/:slug">
          {(params) =>
            SHOW_PAIN_DOCTOR ? <PainLibraryArticle slug={params.slug} /> : <Redirect to="/" />
          }
        </Route>
        <Route path="/oxford-pain-doctor/library">
          {SHOW_PAIN_DOCTOR ? <PainLibrary /> : <Redirect to="/" />}
        </Route>
        <Route path="/oxford-pain-doctor/contact">
          {SHOW_PAIN_DOCTOR ? <Contact /> : <Redirect to="/" />}
        </Route>
        <Route path="/oxford-pain-doctor/book">
          {SHOW_PAIN_DOCTOR ? <PainBook /> : <Redirect to="/" />}
        </Route>
        <Route path="/oxford-pain-doctor/*">
          {SHOW_PAIN_DOCTOR ? <NotFound /> : <Redirect to="/" />}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/recommended-skincare" component={RecommendedSkincare} />
        <Route path="/shop" component={Shop} />
        <Route path="/gift-vouchers/thank-you" component={GiftVouchersThankYou} />
        <Route path="/gift-vouchers" component={GiftVouchers} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const [location] = useLocation();
  const isCallPage = location === "/call";
  const isBookPage = location === "/book" || location === PAIN_BOOK_HREF;
  const pain = isPainRoute(location);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
      <div
        className={cn(
          "min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/15 selection:text-foreground",
          pain && "theme-pain"
        )}
      >
        {!isCallPage ? <Navbar /> : null}
        <main className="flex-grow">
          <Router />
        </main>
        {SHOW_PAIN_DOCTOR && !isCallPage && !pain && !isBookPage ? <PainDoctorBanner /> : null}
        {!isCallPage ? <Footer /> : null}
        {!isCallPage && !isBookPage ? <FloatingButtons /> : null}
        <CookieConsent />
        <Toaster />
        <CustomCursor />
      </div>
      </SmoothScroll>
    </QueryClientProvider>
  );
}

export default App;
