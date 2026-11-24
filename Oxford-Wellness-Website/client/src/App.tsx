import { Suspense } from "react";
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
// Eager homepage: avoids Suspense fallback={null} blanking prerendered
// content during hydrate (major CLS). Other routes stay lazy + preloaded in main.tsx.
import Home from "@/pages/home";
import {
  Services,
  About,
  Contact,
  AIPreConsult,
  Shop,
  RecommendedSkincare,
  HowWeHelp,
  SymptomsAndTreatments,
  ProgrammeFinder,
  SkinHealthProgramme,
  IntimateWellnessProgramme,
  Pricing,
  PersonalisedTreatmentPlans,
  MenopauseClinic,
  PerimenopauseOxford,
  WomensHealthOxford,
  LongevityMedicineOxford,
  SexualWellnessOxford,
  PostpartumRecoveryOxford,
  SkinClinicOxford,
  MenopauseSkin,
  BlogIndex,
  BlogMenopauseSkin,
  BlogProfhiloVsFillers,
  BlogLipFillerNatural,
  BlogMorpheus8Timeline,
  BlogWeightGainPeri,
  BlogChoosingClinic,
  BlogOver50,
  BlogSciencePark,
  BlogPerimenopauseSymptoms,
  BlogHRTConsultation,
  BlogIntimateHealth,
  BlogWomensHealthCheck,
  BlogLongevityMedicine,
  BlogJawSlimming,
  BlogExcessiveSweating,
  BlogChemicalPeels,
  BlogLumeccaIPL,
  BlogFormaSkinTightening,
  BlogInModeFX,
  BlogAntiWrinkleInjections,
  BlogPostpartumRecovery,
  AntiWrinkle,
  DermalFillers,
  LipFillers,
  Profhilo,
  Morpheus8,
  ExcessiveSweating,
  ChemicalPeels,
  SkinBoosters,
  NeauviaNRose,
  VotivaFormaV,
  VitaminB12,
  MedicalFormCompletion,
  FormaFacelift,
  FormaPlusBody,
  InModeFX,
  LumeccaIPL,
  FillerDissolving,
  JawSlimming,
  PrivacyPolicy,
  CookiePolicy,
  TermsAndConditions,
  ThankYou,
  CallPage,
  Book,
  GiftVouchers,
  NotFound,
  OxfordPainDoctorHome,
  PainBook,
  AboutDrRichard,
  PainHowWeHelp,
  PainLibrary,
  PainLibraryArticle,
  isPathPreloaded,
} from "@/routes/lazyPages";

function Router() {
  const [location] = useLocation();
  // Homepage is eager and outside Suspense so SSR/prerender writes it into
  // <main> directly (no React streaming placeholder). That lets hydrateRoot
  // keep the prerendered layout instead of blanking large regions (CLS ~0.98).
  if (location === "/" || location === "") {
    return <Home />;
  }

  const routes = (
      <Switch>
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
        <Route path="/gift-vouchers" component={GiftVouchers} />
        <Route path="/recommended-skincare" component={RecommendedSkincare} />
        <Route path="/shop" component={Shop} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
  );

  // After preloadPath (SSR + first hydrate) skip Suspense so markup matches
  // the inlined prerender HTML (no streaming boundary comments → no #418).
  if (isPathPreloaded(location)) {
    return routes;
  }
  return <Suspense fallback={null}>{routes}</Suspense>;
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
