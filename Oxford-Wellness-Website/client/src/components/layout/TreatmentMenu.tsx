import { Link } from "wouter";
import { treatmentsByTheme } from "@/data/treatmentsNav";

export function TreatmentMenuPanel({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <div
      id="how-can-we-help"
      className="treatment-menu absolute inset-x-0 top-full z-50 border-t border-border bg-white shadow-lg"
      role="menu"
    >
      <div className="container-page py-6">
        <div className="grid grid-cols-3 gap-8 max-w-5xl">
          {treatmentsByTheme.map((theme) => (
            <div key={theme.id}>
              <Link
                href={`/treatments#${theme.id}`}
                onClick={() => onNavigate(`/treatments#${theme.id}`)}
                className="block font-sans font-semibold text-sm text-primary mb-3 hover:text-secondary transition-colors"
              >
                {theme.title}
              </Link>
              <ul className="space-y-2">
                {theme.treatments.map((treatment) => (
                  <li key={treatment.href}>
                    <Link
                      href={treatment.href}
                      role="menuitem"
                      onClick={() => onNavigate(treatment.href)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {treatment.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-border">
          <Link
            href="/treatments"
            role="menuitem"
            onClick={() => onNavigate("/treatments")}
            className="text-sm font-medium text-primary hover:text-secondary transition-colors"
          >
            View all treatments →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TreatmentMenuMobile({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <div className="mb-1 border-b border-border/50 pb-2">
      <p className="py-3 text-base font-medium text-primary">Treatments</p>
      {treatmentsByTheme.map((theme) => (
        <div key={theme.id} className="mb-4">
          <Link
            href={`/treatments#${theme.id}`}
            onClick={() => onNavigate(`/treatments#${theme.id}`)}
            className="block font-sans font-semibold text-sm text-primary mb-2 pl-3 py-1"
          >
            {theme.title}
          </Link>
          <ul className="space-y-1">
            {theme.treatments.map((treatment) => (
              <li key={treatment.href}>
                <Link
                  href={treatment.href}
                  onClick={() => onNavigate(treatment.href)}
                  className="block py-1.5 pl-6 pr-3 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors rounded-md"
                >
                  {treatment.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href="/treatments"
        onClick={() => onNavigate("/treatments")}
        className="block rounded-md py-2 pl-3 text-sm font-medium text-primary hover:bg-accent transition-colors"
      >
        View all treatments →
      </Link>
    </div>
  );
}
