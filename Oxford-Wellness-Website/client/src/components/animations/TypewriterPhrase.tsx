import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterPhraseProps = {
  phrases: string[];
  className?: string;
  /** Type the first phrase once, then leave it static (no delete / cycle). */
  once?: boolean;
};

export default function TypewriterPhrase({ phrases, className, once = false }: TypewriterPhraseProps) {
  const reduced = useReducedMotion();
  const first = phrases[0] ?? "";
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(() => (reduced || (!once && phrases.length < 2) ? first : ""));
  const [deleting, setDeleting] = useState(false);
  const done = once && text === first && first.length > 0;

  useEffect(() => {
    if (reduced) {
      setText(first);
      return;
    }

    // Legacy: single phrase with no once flag just shows the phrase.
    if (!once && phrases.length < 2) {
      setText(first);
      return;
    }

    if (once) {
      if (text === first) return;
      const timer = window.setTimeout(() => {
        setText(first.slice(0, text.length + 1));
      }, 72);
      return () => window.clearTimeout(timer);
    }

    const current = phrases[index];
    const atFull = text === current;
    const atEmpty = text.length === 0;

    let delay = deleting ? 32 : 72;
    if (atFull && !deleting) delay = 1700;
    if (atEmpty && deleting) delay = 320;

    const timer = window.setTimeout(() => {
      if (atFull && !deleting) {
        setDeleting(true);
        return;
      }
      if (atEmpty && deleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
        return;
      }
      const nextLength = deleting ? text.length - 1 : text.length + 1;
      setText(current.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, first, index, once, phrases, reduced, text]);

  const longest = once
    ? first
    : phrases.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={className}>
      <span className="invisible select-none" aria-hidden>
        {longest}
      </span>
      <span className="absolute inset-0">
        {text}
        {!done && !reduced ? <span className="type-caret" aria-hidden /> : null}
      </span>
    </span>
  );
}
