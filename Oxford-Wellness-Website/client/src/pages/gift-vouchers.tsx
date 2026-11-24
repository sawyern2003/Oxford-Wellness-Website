import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  formatVoucherPrice,
  giftVoucherBuyHref,
  giftVoucherOpensExternally,
  GIFT_VOUCHERS,
  type GiftVoucher,
} from "@/data/giftVouchers";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { useSEO } from "@/hooks/useSEO";
import { whatsappHref } from "@/lib/whatsapp";

const CLINIC_EMAIL = "info@theoxfordwellnessdoctor.com";
const QUESTIONS_WHATSAPP = whatsappHref(
  "Hello, I have a question about gift vouchers",
);

const HOW_IT_WORKS = [
  {
    title: "Choose and pay",
    body: "Select a voucher and pay securely with SumUp. While payment links are being set up, you can message us on WhatsApp instead.",
  },
  {
    title: "Add a personal note",
    body: `Include the recipient’s name and an optional short message in the SumUp payment note — or send them by WhatsApp or email to ${CLINIC_EMAIL}.`,
  },
  {
    title: "We send the voucher",
    body: `The clinic emails the voucher from ${CLINIC_EMAIL} within one working day.`,
  },
  {
    title: "They book when ready",
    body: "The recipient books online or by WhatsApp and mentions the voucher when they arrange their visit.",
  },
];

function VoucherCard({ voucher, index }: { voucher: GiftVoucher; index: number }) {
  const href = giftVoucherBuyHref(voucher);
  const external = giftVoucherOpensExternally(voucher);
  const priceLabel = formatVoucherPrice(voucher);
  const pricePending = voucher.amountGbp == null;

  return (
    <FadeIn delay={index * 0.06}>
      <article className="h-full flex flex-col rounded-3xl bg-muted/40 p-7 md:p-8">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">
          Gift voucher
        </p>
        <h2 className="font-sans font-semibold text-xl md:text-2xl text-foreground tracking-tight mb-3">
          {voucher.name}
        </h2>
        <p
          className={
            pricePending
              ? "text-sm font-medium text-muted-foreground mb-4"
              : "font-sans font-semibold text-2xl text-primary tracking-tight mb-4"
          }
        >
          {priceLabel}
        </p>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 flex-1">
          {voucher.description}
        </p>
        <a
          href={href}
          {...(external
            ? { className: "block" }
            : {
                target: "_blank",
                rel: "noopener noreferrer",
                className: "js-whatsapp-cta block",
              })}
        >
          <Button className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-11 text-sm font-medium">
            Buy
          </Button>
        </a>
      </article>
    </FadeIn>
  );
}

export default function GiftVouchers() {
  useBreadcrumbSchema([{ name: "Gift vouchers", path: "/gift-vouchers" }]);
  useSEO({
    title: "Gift Vouchers | The Oxford Wellness Doctor",
    description:
      "Gift a consultation with Dr Inga Taganova, or credit towards any treatment at The Oxford Wellness Doctor in Oxford. A considered present for someone you care for.",
    canonical: "https://www.theoxfordwellnessdoctor.com/gift-vouchers",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container-page py-12 md:py-16">
        <FadeIn className="max-w-2xl mb-14 md:mb-16">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            A gift of care
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
            Gift vouchers
          </h1>
          <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-4">
            Skin, intimate and women’s health are rarely separate. A voucher from The Oxford Wellness
            Doctor gives someone time with Dr Inga Taganova, GP — or credit they can put towards the
            care that fits them.
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Quietly suited to Christmas, or any moment when you want to offer something thoughtful
            rather than hurried.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-20 md:mb-24">
          {GIFT_VOUCHERS.map((voucher, index) => (
            <VoucherCard key={voucher.id} voucher={voucher} index={index} />
          ))}
        </div>

        <FadeIn className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            How it works
          </p>
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-foreground tracking-tight mb-8">
            Simple from purchase to booking
          </h2>
          <ol className="space-y-6">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-base text-foreground tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn className="max-w-2xl mb-16 md:mb-20">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
            Terms
          </h2>
          <ul className="space-y-2 text-[15px] text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Valid for 12 months from the date of purchase</li>
            <li>Transferable</li>
            <li>Non-refundable</li>
            <li>Cannot be exchanged for cash</li>
          </ul>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 max-w-2xl">
            <h2 className="font-sans font-semibold text-2xl tracking-tight mb-3">
              Questions before you buy?
            </h2>
            <p className="text-primary-foreground/75 text-[15px] mb-6 leading-relaxed max-w-xl">
              Message us on WhatsApp, or email{" "}
              <a
                href={`mailto:${CLINIC_EMAIL}`}
                className="underline underline-offset-2 hover:text-white"
              >
                {CLINIC_EMAIL}
              </a>
              .
            </p>
            <a
              href={QUESTIONS_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="js-whatsapp-cta inline-block"
            >
              <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-7 h-11 text-sm font-medium">
                WhatsApp the clinic
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
