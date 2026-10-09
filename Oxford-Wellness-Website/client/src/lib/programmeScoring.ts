import { getProgrammeById, type Programme } from "@/data/programmes";
import type { ProgrammeId, QuizAnswers } from "@/data/programmeQuiz";

export interface ScoredProgramme {
  programme: Programme;
  score: number;
  matchReasons: string[];
}

export interface RecommendationResult {
  primary: ScoredProgramme;
  alternatives: ScoredProgramme[];
}

const NONE = new Set(["none-skin", "none-body", "none-intimate"]);

function add(
  scores: Record<ProgrammeId, number>,
  reasons: Record<ProgrammeId, string[]>,
  id: ProgrammeId,
  points: number,
  reason: string,
) {
  scores[id] += points;
  if (reason && !reasons[id].includes(reason)) reasons[id].push(reason);
}

export function scoreQuiz(answers: QuizAnswers): RecommendationResult {
  const scores: Record<ProgrammeId, number> = {
    "skin-health-regeneration": 1,
    "intimate-wellness": 1,
    "weight-body-confidence": 1,
  };
  const reasons: Record<ProgrammeId, string[]> = {
    "skin-health-regeneration": [],
    "intimate-wellness": [],
    "weight-body-confidence": [],
  };

  for (const c of answers.primaryConcerns) {
    if (c === "skin") add(scores, reasons, "skin-health-regeneration", 5, "Skin health is a primary concern");
    if (c === "body" || c === "energy")
      add(scores, reasons, "weight-body-confidence", 5, "Body confidence or midlife change is a priority");
    if (c === "intimate")
      add(scores, reasons, "intimate-wellness", 5, "Intimate wellbeing is a primary concern");
  }

  for (const c of answers.skinConcerns) {
    if (NONE.has(c)) continue;
    add(scores, reasons, "skin-health-regeneration", 2, "Specific skin concerns selected");
  }

  for (const c of answers.bodyConcerns) {
    if (NONE.has(c)) continue;
    add(scores, reasons, "weight-body-confidence", 2, "Body or weight concerns selected");
  }

  for (const c of answers.intimateConcerns) {
    if (NONE.has(c)) continue;
    add(scores, reasons, "intimate-wellness", 3, "Intimate wellbeing concerns selected");
  }

  if (answers.lifeStage === "perimenopause" || answers.lifeStage === "menopause") {
    add(scores, reasons, "skin-health-regeneration", 1, "Midlife stage often affects skin quality");
    add(scores, reasons, "weight-body-confidence", 1, "Midlife stage often affects metabolism");
    add(scores, reasons, "intimate-wellness", 1, "Midlife stage can affect intimate comfort");
  }
  if (answers.lifeStage === "postpartum") {
    add(scores, reasons, "intimate-wellness", 2, "Postpartum stage selected");
    add(scores, reasons, "weight-body-confidence", 1, "Postpartum body confidence support may help");
  }

  if (answers.goals.includes("long-term") || answers.goals.includes("guidance")) {
    add(scores, reasons, "skin-health-regeneration", 0.5, "Looking for guided, long-term care");
    add(scores, reasons, "weight-body-confidence", 0.5, "Looking for guided, long-term care");
    add(scores, reasons, "intimate-wellness", 0.5, "Looking for guided, long-term care");
  }

  const ranked = (Object.keys(scores) as ProgrammeId[])
    .map((id) => {
      const programme = getProgrammeById(id)!;
      return {
        programme,
        score: scores[id],
        matchReasons: reasons[id].slice(0, 3),
      };
    })
    .sort((a, b) => b.score - a.score);

  return {
    primary: ranked[0],
    alternatives: ranked.slice(1, 3),
  };
}
