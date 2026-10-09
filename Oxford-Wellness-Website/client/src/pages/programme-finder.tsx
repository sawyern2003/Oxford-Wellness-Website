import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import {
  emptyAnswers,
  quizSteps,
  type LeadDetails,
  type QuizAnswers,
} from "@/data/programmeQuiz";
import { scoreQuiz } from "@/lib/programmeScoring";
import {
  buildProgrammeLeadPayload,
  storeProgrammeLeadLocally,
  submitProgrammeLead,
} from "@/lib/programmeLeadSubmit";
import { ArrowLeft, ArrowRight, Check, Shield } from "lucide-react";

function toggleMulti(list: string[], id: string): string[] {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}

function ProgressSegments({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex gap-1.5 w-full max-w-xs mx-auto" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
            i <= current ? "bg-secondary" : "bg-secondary/20"
          }`}
        />
      ))}
    </div>
  );
}

function OptionCard({
  label,
  selected,
  multi,
  onClick,
}: {
  label: string;
  selected: boolean;
  multi?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl bg-white px-4 py-4 transition-all duration-200 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(33,55,84,0.06)] border ${
        selected
          ? "border-secondary ring-2 ring-secondary/25"
          : "border-transparent hover:border-secondary/30"
      }`}
    >
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center border transition-colors ${
          multi ? "rounded-md" : "rounded-full"
        } ${
          selected
            ? "bg-secondary border-secondary text-primary"
            : "bg-muted border-border"
        }`}
      >
        {selected && <Check size={12} strokeWidth={3} />}
      </span>
      <span
        className={`text-[15px] leading-snug ${
          selected ? "text-foreground font-medium" : "text-foreground/80"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export default function ProgrammeFinder() {
  useBreadcrumbSchema([{ name: "Programme Finder", path: "/programme-finder" }]);
  useSEO({
    title: "Programme Finder | Personalised Journeys | The Oxford Wellness Doctor",
    description:
      "Describe what has changed and find a personalised treatment programme. Educational guidance only – suitability confirmed in consultation with Dr Inga Taganova.",
    canonical: "https://www.theoxfordwellnessdoctor.com/programme-finder",
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(emptyAnswers);
  const [lead, setLead] = useState<LeadDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [phase, setPhase] = useState<"quiz" | "lead" | "result">("quiz");
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  const recommendation = useMemo(() => scoreQuiz(answers), [answers]);
  const step = quizSteps[stepIndex];
  const totalQuizSteps = quizSteps.length;
  // Lead counts as near-final segment after quiz
  const progressIndex =
    phase === "quiz"
      ? stepIndex
      : phase === "lead"
        ? totalQuizSteps
        : totalQuizSteps + 1;
  const progressTotal = totalQuizSteps + 2;

  const canContinue = () => {
    if (step.id === "intro") return true;
    if (step.id === "lifeStage") return !!answers.lifeStage;
    if (step.multi) {
      const key = step.id as keyof QuizAnswers;
      const val = answers[key];
      return Array.isArray(val) && val.length > 0;
    }
    return true;
  };

  const onNext = () => {
    if (stepIndex < quizSteps.length - 1) {
      setStepIndex((i) => i + 1);
      return;
    }
    setPhase("lead");
  };

  const onBack = () => {
    if (phase === "lead") {
      setPhase("quiz");
      return;
    }
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  };

  const onSubmitLead = async () => {
    setSubmitting(true);
    setSubmitMsg("");
    const payload = buildProgrammeLeadPayload(lead, answers, recommendation);
    storeProgrammeLeadLocally(payload);
    const result = await submitProgrammeLead(payload);
    setSubmitting(false);
    if (!result.ok) {
      setSubmitMsg(result.message);
    }
    setPhase("result");
  };

  return (
    <div className="pt-28 min-h-screen bg-muted">
      <div className="container mx-auto px-5 py-8 md:py-12 max-w-lg">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-8">
          {(phase === "lead" || (phase === "quiz" && stepIndex > 0)) && (
            <button
              type="button"
              onClick={onBack}
              aria-label="Back"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(33,55,84,0.08)] text-foreground hover:text-secondary transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div className="flex-1">
            <ProgressSegments current={progressIndex} total={progressTotal} />
          </div>
        </div>

        {phase === "quiz" && (
          <FadeIn>
            {stepIndex === 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">
                  Programme Finder
                </p>
                <h1 className="font-sans font-semibold text-3xl md:text-[2rem] text-foreground tracking-tight leading-snug mb-3">
                  Start with what has{" "}
                  <span className="text-secondary">changed</span>
                </h1>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  This recommendation is educational guidance only. Final suitability is confirmed during consultation with Dr Inga.
                </p>
              </div>
            )}

            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-[0_4px_24px_rgba(33,55,84,0.06)]">
              <h2 className="font-sans font-semibold text-xl md:text-2xl text-foreground tracking-tight mb-2 leading-snug">
                {step.title}
              </h2>
              {step.subtitle && (
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {step.subtitle}
                </p>
              )}

              {step.id === "intro" && (
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                  You will answer a few short questions about skin, body confidence, intimate wellbeing and your goals. There are no wrong answers.
                </p>
              )}

              {step.options && (
                <div className="space-y-3 mb-8">
                  {step.options.map((opt) => {
                    const key = step.id as keyof QuizAnswers;
                    const selected = step.multi
                      ? (answers[key] as string[])?.includes(opt.id)
                      : answers.lifeStage === opt.id;
                    return (
                      <OptionCard
                        key={opt.id}
                        label={opt.label}
                        selected={!!selected}
                        multi={step.multi}
                        onClick={() => {
                          if (step.id === "lifeStage") {
                            setAnswers((a) => ({ ...a, lifeStage: opt.id }));
                            return;
                          }
                          if (step.multi) {
                            setAnswers((a) => ({
                              ...a,
                              [key]: toggleMulti((a[key] as string[]) || [], opt.id),
                            }));
                          }
                        }}
                      />
                    );
                  })}
                </div>
              )}

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-[15px] font-medium"
                disabled={!canContinue()}
                onClick={onNext}
              >
                {stepIndex === quizSteps.length - 1
                  ? "See recommendation"
                  : "Next"}
                <ArrowRight size={16} />
              </Button>
            </div>
          </FadeIn>
        )}

        {phase === "lead" && (
          <FadeIn>
            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-[0_4px_24px_rgba(33,55,84,0.06)] space-y-5">
              <div>
                <h2 className="font-sans font-semibold text-xl md:text-2xl text-foreground tracking-tight mb-2">
                  Almost there
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leave your details so we can save your recommendation and help you book a consultation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    First name
                  </label>
                  <Input
                    className="rounded-xl h-11 bg-muted border-border/80 shadow-none"
                    value={lead.firstName}
                    onChange={(e) => setLead({ ...lead, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Last name
                  </label>
                  <Input
                    className="rounded-xl h-11 bg-muted border-border/80 shadow-none"
                    value={lead.lastName}
                    onChange={(e) => setLead({ ...lead, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <Input
                  type="email"
                  className="rounded-xl h-11 bg-muted border-border/80 shadow-none"
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Phone (optional)
                </label>
                <Input
                  className="rounded-xl h-11 bg-muted border-border/80 shadow-none"
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer rounded-2xl bg-muted p-4">
                <span
                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-colors ${
                    lead.consent
                      ? "bg-secondary border-secondary text-primary"
                      : "bg-white border-border"
                  }`}
                >
                  {lead.consent && <Check size={12} strokeWidth={3} />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={lead.consent}
                  onChange={(e) => setLead({ ...lead, consent: e.target.checked })}
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  I consent to The Oxford Wellness Doctor contacting me about this recommendation and consultation options.
                </span>
              </label>

              {submitMsg && <p className="text-sm text-red-600">{submitMsg}</p>}

              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
                <Shield size={12} className="text-secondary" />
                Your information is handled securely and never shared for marketing.
              </p>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-[15px] font-medium"
                disabled={
                  submitting ||
                  !lead.firstName ||
                  !lead.lastName ||
                  !lead.email ||
                  !lead.consent
                }
                onClick={onSubmitLead}
              >
                {submitting ? "Saving…" : "View my programme"}
                {!submitting && <ArrowRight size={16} />}
              </Button>
            </div>
          </FadeIn>
        )}

        {phase === "result" && (
          <FadeIn>
            <div className="rounded-3xl bg-secondary/15 p-5 md:p-6 mb-5">
              <div className="flex items-start gap-3 mb-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check size={20} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="font-sans font-semibold text-foreground">Assessment complete</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Suggested starting point based on your answers
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 md:p-6 shadow-[0_2px_12px_rgba(33,55,84,0.06)]">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                  Your programme
                </p>
                <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-3">
                  {recommendation.primary.programme.name}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                  {recommendation.primary.programme.overview}
                </p>
                {recommendation.primary.matchReasons.length > 0 && (
                  <ul className="space-y-2.5">
                    {recommendation.primary.matchReasons.map((r) => (
                      <li key={r} className="text-sm text-foreground/80 flex gap-2.5">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <Link href={recommendation.primary.programme.href}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-[15px] font-medium">
                  View programme <ArrowRight size={16} />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full rounded-full h-12 text-[15px] border-border bg-white shadow-[0_2px_8px_rgba(33,55,84,0.04)]"
                onClick={() =>
                  window.location.assign("/book")
                }
              >
                Book consultation
              </Button>
            </div>

            {recommendation.alternatives.length > 0 && (
              <div className="mb-8">
                <h3 className="font-sans font-semibold text-lg text-foreground tracking-tight mb-3 px-1">
                  Also worth considering
                </h3>
                <div className="space-y-3">
                  {recommendation.alternatives.map((alt) => (
                    <Link
                      key={alt.programme.id}
                      href={alt.programme.href}
                      className="block rounded-2xl bg-white p-5 shadow-[0_2px_10px_rgba(33,55,84,0.06)] hover:ring-2 hover:ring-secondary/25 transition-all"
                    >
                      <p className="font-sans font-semibold text-base text-foreground mb-1">
                        {alt.programme.name}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {alt.programme.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground leading-relaxed px-1">
              This recommendation is educational guidance only and does not constitute a medical diagnosis or prescription. Final suitability is confirmed during consultation with Dr Inga Taganova.
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
