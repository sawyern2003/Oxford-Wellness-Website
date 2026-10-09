import type { LeadDetails, QuizAnswers } from "@/data/programmeQuiz";
import type { RecommendationResult } from "@/lib/programmeScoring";

export interface ProgrammeLeadPayload {
  lead: LeadDetails;
  answers: QuizAnswers;
  recommendation: {
    primaryId: string;
    primaryName: string;
    alternativeIds: string[];
    alternativeNames: string[];
  };
  matchReasons: string[];
  eventDate?: string;
  timestamp: string;
  utm?: Record<string, string>;
  referrer?: string;
  pageUrl?: string;
}

function collectUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export function buildProgrammeLeadPayload(
  lead: LeadDetails,
  answers: QuizAnswers,
  recommendation: RecommendationResult,
): ProgrammeLeadPayload {
  return {
    lead,
    answers,
    recommendation: {
      primaryId: recommendation.primary.programme.id,
      primaryName: recommendation.primary.programme.name,
      alternativeIds: recommendation.alternatives.map((a) => a.programme.id),
      alternativeNames: recommendation.alternatives.map((a) => a.programme.name),
    },
    matchReasons: recommendation.primary.matchReasons,
    eventDate: answers.eventDate ? String(answers.eventDate) : undefined,
    timestamp: new Date().toISOString(),
    utm: collectUtm(),
    referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
    pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
  };
}

/**
 * Adapter for programme-finder lead submission.
 * Uses the existing SendGrid-backed API pattern via /api/programme-finder.
 */
export async function submitProgrammeLead(
  payload: ProgrammeLeadPayload,
): Promise<{ ok: boolean; message: string }> {
  try {
    const response = await fetch("/api/programme-finder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { message?: string };
    if (!response.ok) {
      return {
        ok: false,
        message: result.message || "Unable to save your enquiry. Please try again.",
      };
    }
    return { ok: true, message: result.message || "Saved" };
  } catch {
    return {
      ok: false,
      message: "Unable to save your enquiry. Please check your connection and try again.",
    };
  }
}

export const PROGRAMME_LEAD_STORAGE_KEY = "owd-programme-finder-lead";

export function storeProgrammeLeadLocally(payload: ProgrammeLeadPayload) {
  try {
    sessionStorage.setItem(PROGRAMME_LEAD_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage failures (private browsing, etc.)
  }
}
