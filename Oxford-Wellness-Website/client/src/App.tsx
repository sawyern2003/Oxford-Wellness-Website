import { Switch, Route } from "wouter";
import { useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AIPreConsult from "@/pages/ai-pre-consult";
import Shop from "@/pages/shop";
import Pricing from "@/pages/pricing";
import MenopauseClinic from "@/pages/menopause-clinic";
import PerimenopauseOxford from "@/pages/perimenopause-oxford";
import WomensHealthOxford from "@/pages/womens-health-oxford";
import SexualWellnessOxford from "@/pages/sexual-wellness-oxford";
import PostpartumRecoveryOxford from "@/pages/postpartum-recovery-oxford";
import BlogIndex from "@/pages/blog/index";
import BlogWegovyVsMounjaro from "@/pages/blog/wegovy-vs-mounjaro-comparison";
import BlogMenopauseSkin from "@/pages/blog/menopause-skin-changes";
import BlogProfhiloVsFillers from "@/pages/blog/profhilo-vs-dermal-fillers";
import BlogLipFillerNatural from "@/pages/blog/lip-filler-natural-results";
import BlogMorpheus8Timeline from "@/pages/blog/morpheus8-results-timeline";
import BlogWeightGainPeri from "@/pages/blog/weight-gain-perimenopause";
import BlogChoosingClinic from "@/pages/blog/choosing-aesthetics-clinic-oxford";
import BlogOver50 from "@/pages/blog/aesthetic-treatments-over-50";
import BlogSciencePark from "@/pages/blog/new-oxford-science-park-clinic";
import AntiWrinkle from "@/pages/treatments/anti-wrinkle";
import DermalFillers from "@/pages/treatments/dermal-fillers";
import LipFillers from "@/pages/treatments/lip-fillers";
import Profhilo from "@/pages/treatments/profhilo";
import Morpheus8 from "@/pages/treatments/morpheus8";
import MedicalWeightLoss from "@/pages/treatments/medical-weight-loss";
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
import LumeccaIPL from "@/pages/treatments/lumecca-ipl";
import FillerDissolving from "@/pages/treatments/filler-dissolving";
import JawSlimming from "@/pages/treatments/jaw-slimming";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";
import ThankYou from "@/pages/thank-you";
import CallPage from "@/pages/call";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/treatments" component={Services} />
      <Route path="/treatments/anti-wrinkle-injections-oxford" component={AntiWrinkle} />
      <Route path="/treatments/dermal-fillers-oxford" component={DermalFillers} />
      <Route path="/treatments/lip-fillers-oxford" component={LipFillers} />
      <Route path="/treatments/profhilo-oxford" component={Profhilo} />
      <Route path="/treatments/morpheus8-oxford" component={Morpheus8} />
      <Route path="/treatments/medical-weight-loss-oxford" component={MedicalWeightLoss} />
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
      <Route path="/sexual-wellness-oxford" component={SexualWellnessOxford} />
      <Route path="/postpartum-recovery-oxford" component={PostpartumRecoveryOxford} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/wegovy-vs-mounjaro-comparison" component={BlogWegovyVsMounjaro} />
      <Route path="/blog/menopause-skin-changes" component={BlogMenopauseSkin} />
      <Route path="/blog/profhilo-vs-dermal-fillers" component={BlogProfhiloVsFillers} />
      <Route path="/blog/lip-filler-natural-results" component={BlogLipFillerNatural} />
      <Route path="/blog/morpheus8-results-timeline" component={BlogMorpheus8Timeline} />
      <Route path="/blog/weight-gain-perimenopause" component={BlogWeightGainPeri} />
      <Route path="/blog/choosing-aesthetics-clinic-oxford" component={BlogChoosingClinic} />
      <Route path="/blog/aesthetic-treatments-over-50" component={BlogOver50} />
      <Route path="/blog/new-oxford-science-park-clinic" component={BlogSciencePark} />
      <Route path="/ai-consultation" component={AIPreConsult} />
      <Route path="/call" component={CallPage} />
      <Route path="/contact" component={Contact} />
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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground">
        {!isCallPage ? <Navbar /> : null}
        <main className="flex-grow">
          <Router />
        </main>
        {!isCallPage ? <Footer /> : null}
        {!isCallPage ? <FloatingButtons /> : null}
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
