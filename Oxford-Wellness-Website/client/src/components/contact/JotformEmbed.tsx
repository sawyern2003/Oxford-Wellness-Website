import { useEffect, useRef } from "react";

const FORM_SCRIPT = "https://form.jotform.com/jsform/262755989244373";
const FORM_PAGE = "https://form.jotform.com/info_Doctor_info595/contact-the-oxford-wellness-doctor";

/**
 * Official Jotform script embed. The script inserts its iframe beside itself
 * and resizes that frame as the card form moves through its questions.
 */
export default function JotformEmbed() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const script = document.createElement("script");
    script.src = FORM_SCRIPT;
    script.async = true;
    mount.appendChild(script);

    return () => {
      mount.replaceChildren();
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-[20px] bg-muted">
      <div ref={mountRef} className="min-h-[640px] [&_iframe]:block [&_iframe]:w-full [&_iframe]:border-0" />
      <noscript>
        <p className="px-6 py-8 text-sm text-muted-foreground">
          <a href={FORM_PAGE} className="text-primary underline underline-offset-4">
            Open the enquiry form
          </a>
        </p>
      </noscript>
    </div>
  );
}
