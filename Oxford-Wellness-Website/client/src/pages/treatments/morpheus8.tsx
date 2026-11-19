import TreatmentLandingPage from "@/components/treatments/TreatmentLandingPage";
import { morpheus8Data } from "@/data/treatments/morpheus8";

export default function Morpheus8Page() {
  return <TreatmentLandingPage data={morpheus8Data} />;
}
