import ProgrammePage from "@/pages/programmes/ProgrammePage";
import { getProgrammeBySlug } from "@/data/programmes";

const programme = getProgrammeBySlug("intimate-wellness")!;

export default function IntimateWellnessProgramme() {
  return <ProgrammePage programme={programme} />;
}
