import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AIPreConsult from "@/pages/ai-pre-consult";
import Shop from "@/pages/shop";
import RecommendedSkincare from "@/pages/recommended-skincare";
import HowWeHelp from "@/pages/how-we-help";
import SymptomsAndTreatments from "@/pages/symptoms-and-treatments";
import ProgrammeFinder from "@/pages/programme-finder";
import SkinHealthProgramme from "@/pages/programmes/skin-health-regeneration";
import IntimateWellnessProgramme from "@/pages/programmes/intimate-wellness";
import Pricing from "@/pages/pricing";
import PersonalisedTreatmentPlans from "@/pages/personalised-treatment-plans";
import MenopauseClinic from "@/pages/menopause-clinic";
import PerimenopauseOxford from "@/pages/perimenopause-oxford";
import WomensHealthOxford from "@/pages/womens-health-oxford";
import LongevityMedicineOxford from "@/pages/longevity-medicine-oxford";
import SexualWellnessOxford from "@/pages/sexual-wellness-oxford";
import PostpartumRecoveryOxford from "@/pages/postpartum-recovery-oxford";
import SkinClinicOxford from "@/pages/skin-clinic-oxford";
import MenopauseSkin from "@/pages/menopause-skin";
import BlogIndex from "@/pages/blog/index";
import BlogMenopauseSkin from "@/pages/blog/menopause-skin-changes";
import BlogProfhiloVsFillers from "@/pages/blog/profhilo-vs-dermal-fillers";
import BlogLipFillerNatural from "@/pages/blog/lip-filler-natural-results";
import BlogMorpheus8Timeline from "@/pages/blog/morpheus8-results-timeline";
import BlogWeightGainPeri from "@/pages/blog/weight-gain-perimenopause";
import BlogChoosingClinic from "@/pages/blog/choosing-aesthetics-clinic-oxford";
import BlogOver50 from "@/pages/blog/aesthetic-treatments-over-50";
import BlogSciencePark from "@/pages/blog/new-oxford-science-park-clinic";
import BlogPerimenopauseSymptoms from "@/pages/blog/perimenopause-symptoms-oxford";
import BlogHRTConsultation from "@/pages/blog/hrt-consultation-what-to-expect";
import BlogIntimateHealth from "@/pages/blog/intimate-health-changes-menopause";
import BlogWomensHealthCheck from "@/pages/blog/womens-health-check-oxford";
import BlogLongevityMedicine from "@/pages/blog/longevity-medicine-for-women";
import BlogJawSlimming from "@/pages/blog/jaw-slimming-treatment-oxford";
import BlogExcessiveSweating from "@/pages/blog/excessive-sweating-treatment-oxford";
import BlogChemicalPeels from "@/pages/blog/chemical-peels-oxford";
import BlogLumeccaIPL from "@/pages/blog/lumecca-ipl-oxford";
import BlogFormaSkinTightening from "@/pages/blog/forma-skin-tightening-oxford";
import BlogInModeFX from "@/pages/blog/inmode-fx-body-contouring-oxford";
import BlogAntiWrinkleInjections from "@/pages/blog/anti-wrinkle-injections-oxford";
import BlogPostpartumRecovery from "@/pages/blog/postpartum-recovery-oxford";
import AntiWrinkle from "@/pages/treatments/anti-wrinkle";
import DermalFillers from "@/pages/treatments/dermal-fillers";
import LipFillers from "@/pages/treatments/lip-fillers";
import Profhilo from "@/pages/treatments/profhilo";
import Morpheus8 from "@/pages/treatments/morpheus8";
import ExcessiveSweating from "@/pages/treatments/excessive-sweating";
import ChemicalPeels from "@/pages/treatments/chemical-peels";
import SkinBoosters from "@/pages/treatments/skin-boosters";
import NeauviaNRose from "@/pages/treatments/neauvia-n-rose";
import VotivaFormaV from "@/pages/treatments/votiva-forma-v";
import VitaminB12 from "@/pages/treatments/vitamin-b12";
import MedicalFormCompletion from "@/pages/treatments/medical-form-completion";
import FormaFacelift from "@/pages/treatments/forma-facelift";
import FormaPlusBody from "@/pages/treatments/forma-plus-body";
import InModeFX from "@/pages/treatments/inmode-fx";
import CelluliteTreatment from "@/pages/treatments/cellulite";
import LumeccaIPL from "@/pages/treatments/lumecca-ipl";
import FillerDissolving from "@/pages/treatments/filler-dissolving";
import JawSlimming from "@/pages/treatments/jaw-slimming";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";
import ThankYou from "@/pages/thank-you";
import CallPage from "@/pages/call";
import Book from "@/pages/book";
import NotFound from "@/pages/not-found";
import OxfordPainDoctorHome from "@/pages/pain/home";
import PainBook from "@/pages/pain/book";
import AboutDrRichard from "@/pages/pain/about";
import PainHowWeHelp from "@/pages/pain/how-we-help";
import PainLibrary from "@/pages/pain/library";
import PainLibraryArticle from "@/pages/pain/library-article";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import PainDoctorBanner from "@/components/layout/PainDoctorBanner";
import { isPainRoute, PAIN_BOOK_HREF, SHOW_PAIN_DOCTOR } from "@/lib/brand";
import CookieConsent from "@/components/analytics/CookieConsent";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/utils";

function Router() {
  return (
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
      <Route path="/treatments/cellulite-treatment-oxford" component={CelluliteTreatment} />
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
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
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
