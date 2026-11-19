import TreatmentLandingPage from "@/components/treatments/TreatmentLandingPage";
import { medicalFormCompletionData } from "@/data/treatments/medical-form-completion";

export default function MedicalFormCompletionPage() {
  return <TreatmentLandingPage data={medicalFormCompletionData} />;
}
