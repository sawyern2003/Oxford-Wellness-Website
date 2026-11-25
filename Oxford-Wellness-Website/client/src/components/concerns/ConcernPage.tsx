import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { useJsonLdSchema, createFAQPageSchema } from "@/hooks/useJsonLdSchema";
import type { ConcernPageData } from "@/data/concerns";
import { CONSULTATION_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/whatsapp";

const WHATSAPP_URL = whatsappHref(CONSULTATION_WHATSAPP_MESSAGE);
const BASE = "https://www.theoxfordwellnessdoctor.com";

export default function ConcernPage({ data }: { data: ConcernPageData }) {
  const path = `/concerns/${data.slug}`;

  useBreadcrumbSchema([
    { name: "How we can help", path: "/concerns" },
    { name: data.name, path },
  ]);

  useSEO({
    title: data.title,
    description: data.metaDescription,
    canonical: `${BASE}${path}`,
  });

  useJsonLdSchema(createFAQPageSchema(data.faqs), `concern-faq-${data.slug}`);

  return (
    <div className="min-h-screen bg-background pt-28">
      <section className="container-page py-12 md:py-16 max-w-3xl">
        <nav className="text-sm text-muted-foreground mb-5 flex items-center gap-2">
          <Link href="/concerns" className="hover:text-secondary transition-colors">
            How we can help
          </Link>
          <span>/</span>
          <span>{data.name}</span>
        </nav>

        <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-6 leading-snug">
          {data.name}
        </h1>
        <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-8">
          {data.intro}
        </p>
        <Link href="/book">
          <Button className="js-book-cta bg-primary text-white hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-medium">
            Book a consultation
          </Button>
        </Link>
      </section>

      <section className="border-t border-border/60 py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
            {data.signsHeading}
          </h2>
          <ul className="space-y-3">
            {data.signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2.5" />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/40 py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
            {data.consultationHeading}
          </h2>
          {data.consultationBody.map((p) => (
            <p key={p.slice(0, 24)} className="text-[15px] text-muted-foreground leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
            {data.relatedHeading}
          </h2>
          <ul className="space-y-3">
            {data.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/40 py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
            Common questions
          </h2>
          <div className="divide-y divide-border">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="font-sans font-medium text-base text-foreground leading-snug mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
            Book a consultation
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Appointments with Dr Inga Taganova, GP, are at Belsyre Court, Oxford. Book online or
            message us on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/book">
              <Button className="js-book-cta bg-primary text-white hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-medium">
                Book a consultation
              </Button>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="js-whatsapp-cta text-sm font-medium text-primary underline underline-offset-4"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
