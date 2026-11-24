import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterPhraseProps = {
  phrases: string[];
  className?: string;
};

export default function TypewriterPhrase({ phrases, className }: TypewriterPhraseProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || phrases.length < 2) {
      setText(phrases[0] ?? "");
      return;
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
  }, [deleting, index, phrases, reduced, text]);

  const longest = phrases.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={className}>
      <span className="invisible select-none" aria-hidden>
        {longest}
      </span>
      <span className="absolute inset-0">
        {text}
        <span className="type-caret" aria-hidden />
      </span>
    </span>
  );
}
