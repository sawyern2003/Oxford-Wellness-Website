import ProgrammePage from "@/pages/programmes/ProgrammePage";
import { getProgrammeBySlug } from "@/data/programmes";

const programme = getProgrammeBySlug("weight-body-confidence")!;

export default function WeightBodyProgramme() {
  return <ProgrammePage programme={programme} />;
}
