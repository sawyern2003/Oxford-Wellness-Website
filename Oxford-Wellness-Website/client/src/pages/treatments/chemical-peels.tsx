import TreatmentLandingPage from "@/components/treatments/TreatmentLandingPage";
import { chemicalPeelsData } from "@/data/treatments/chemical-peels";

export default function ChemicalPeelsPage() {
  return <TreatmentLandingPage data={chemicalPeelsData} />;
}
