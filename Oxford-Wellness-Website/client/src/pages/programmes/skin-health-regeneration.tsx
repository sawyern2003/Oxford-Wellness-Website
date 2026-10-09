import ProgrammePage from "@/pages/programmes/ProgrammePage";
import { getProgrammeBySlug } from "@/data/programmes";

const programme = getProgrammeBySlug("skin-health-regeneration")!;

export default function SkinHealthProgramme() {
  return <ProgrammePage programme={programme} />;
}
