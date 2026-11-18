import { Link } from "wouter";
import imgSkin from "@/assets/lifestyle-window-earring.jpg";
import imgBody from "@/assets/lifestyle-street-coffee-flip.jpg";
import imgIntimate from "@/assets/lifestyle-loafers.jpg";

const treatmentThemes = [
  {
    title: "Women's Health & Menopause",
    href: "/treatments#womens-health",
    image: imgIntimate,
    description: "Menopause, perimenopause and intimate health, with treatment considered after assessment.",
  },
  {
    title: "Skin & Aesthetics",
    href: "/treatments#skin",
    image: imgSkin,
    description: "Injectables, skin boosters and skin treatments carried out by Dr Inga.",
  },
  {
    title: "Weight & Body",
    href: "/treatments#body",
    image: imgBody,
    description: "Doctor-led weight loss consultation and non-surgical body contouring for improved confidence and wellbeing.",
  },
];

function scrollToSection(href: string) {
  const hash = href.split("#")[1];
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
}

export function TreatmentMenuPanel({ onNavigate }: { onNavigate: (href: string) => void }) {
  const handleClick = (href: string) => {
    scrollToSection(href);
    onNavigate(href);
  };

  return (
    <div
      id="how-can-we-help"
      className="treatment-menu absolute inset-x-0 top-full z-50 border-t border-border bg-white shadow-lg"
      role="menu"
    >
      <div className="container-page py-6">
        <div className="grid grid-cols-3 gap-6 max-w-4xl">
          {treatmentThemes.map((theme) => (
            <Link
              key={theme.href}
              href={theme.href}
              role="menuitem"
              onClick={() => handleClick(theme.href)}
              className="group block rounded-lg overflow-hidden bg-white border border-border hover:border-primary transition-all duration-300 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={theme.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-sans font-semibold text-base text-primary mb-2 group-hover:text-secondary transition-colors">
                  {theme.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/treatments"
            role="menuitem"
            onClick={() => onNavigate("/treatments")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all treatments →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TreatmentMenuMobile({ onNavigate }: { onNavigate: (href: string) => void }) {
  const handleClick = (href: string) => {
    scrollToSection(href);
    onNavigate(href);
  };

  return (
    <div className="mb-1 border-b border-border/50 pb-2">
      <p className="py-3 text-base font-medium text-primary">Treatments</p>
      <div className="space-y-2">
        {treatmentThemes.map((theme) => (
          <Link
            key={theme.href}
            href={theme.href}
            onClick={() => handleClick(theme.href)}
            className="group flex items-center gap-3 rounded-md py-2 pl-3 pr-2 text-sm transition-colors hover:bg-accent"
          >
            <img
              src={theme.image}
              alt=""
              className="h-12 w-12 shrink-0 rounded object-cover"
            />
            <span className="font-medium text-foreground group-hover:text-primary">
              {theme.title}
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/treatments"
        onClick={() => onNavigate("/treatments")}
        className="block rounded-md py-2 pl-3 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors mt-2"
      >
        View all treatments →
      </Link>
    </div>
  );
}
