import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  children: ReactNode;
  openOnDesktop?: boolean;
  className?: string;
};

export default function BioDisclosure({ title, children, openOnDesktop = false, className }: Props) {
  const [open, setOpen] = useState(
    () => openOnDesktop && typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );
  const panelId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm font-medium text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        {title}
        <ChevronDown
          aria-hidden
          size={16}
          strokeWidth={1.75}
          className={cn("transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", open && "rotate-180")}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-label={title}
        inert={!open}
        className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <div className="pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
