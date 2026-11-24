import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterPhraseProps = {
  phrases: string[];
  className?: string;
};

/**
 * Cycles phrases with a type-on effect. Never renders an empty string:
 * after a pause on the full phrase, it jumps straight to the first character
 * of the next phrase and types the rest.
 *
 * Reserves the longest phrase's box so layout never shifts between words.
 * Pair with whitespace-nowrap on className so every phrase stays one line.
 * Respects prefers-reduced-motion (static first phrase).
 * Prerender: initial state is phrases[0], matching the SSR HTML.
 */
export default function TypewriterPhrase({ phrases, className }: TypewriterPhraseProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");

  useEffect(() => {
    if (reduced || phrases.length < 2) {
      setText(phrases[0] ?? "");
      return;
    }

    const current = phrases[index] ?? "";
    const atFull = text === current;

    const delay = atFull ? 1700 : 72;

    const timer = window.setTimeout(() => {
      if (atFull) {
        const next = (index + 1) % phrases.length;
        const nextPhrase = phrases[next] ?? "";
        setIndex(next);
        // Always keep at least one character so the line never looks empty.
        setText(nextPhrase.slice(0, 1) || nextPhrase);
        return;
      }
      setText(current.slice(0, text.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [index, phrases, reduced, text]);

  const longest = phrases.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={className} aria-live="off">
      {/* Invisible sizer: longest phrase locks height; nowrap keeps one line. */}
      <span className="invisible select-none whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>
      <span className="absolute inset-0">
        {text}
        {!reduced ? <span className="type-caret" aria-hidden="true" /> : null}
      </span>
    </span>
  );
}
