import { Link, useLocation } from "wouter";
import { helpPaths, programmeFinderPath } from "@/data/helpPaths";
import { cn } from "@/lib/utils";

function PathLink({
  title,
  body,
  action,
  href,
  onNavigate,
}: {
  title: string;
  body: string;
  action: string;
  href: string;
  onNavigate?: () => void;
}) {
  const [location] = useLocation();
  const current = location === href || location.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group block min-w-0 rounded-2xl p-4 -m-1 hover:bg-muted/70 transition-colors"
    >
      <p
        className={cn(
          "font-sans font-semibold text-[15px] tracking-tight leading-snug mb-2",
          current ? "text-secondary" : "text-foreground"
        )}
      >
        {title}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{body}</p>
      <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
        {action}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

export default function HowCanWeHelp({
  onNavigate,
  heading,
  row = false,
}: {
  onNavigate?: () => void;
  /** Page header uses an h1. The nav panel does not, because the button already names it. */
  heading?: "h1" | "p";
  /** Desktop menu: all four paths in one row, inside the header width. */
  row?: boolean;
}) {
  const Title = heading === "h1" ? "h1" : "p";
  const paths = row ? [...helpPaths, programmeFinderPath] : helpPaths;

  return (
    <div>
      {heading ? (
        <Title className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-8">
          How can we help?
        </Title>
      ) : null}
      <div className={cn("grid gap-6 md:gap-8", row ? "grid-cols-4" : "md:grid-cols-3")}>
        {paths.map((path) => (
          <PathLink key={path.href} {...path} onNavigate={onNavigate} />
        ))}
      </div>
      {row ? null : (
        <div className="mt-6 pt-6 border-t border-border">
          <PathLink {...programmeFinderPath} onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}
