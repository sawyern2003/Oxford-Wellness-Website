import { FormEvent, useMemo, useState } from "react";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import {
  formatGbp,
  questionsWhatsAppHref,
  VOUCHER_MAX_AMOUNT,
  VOUCHER_MIN_AMOUNT,
  VOUCHER_PRESET_AMOUNTS,
  VOUCHER_VALIDITY_MONTHS,
  voucherWhatsAppHref,
  type VoucherSendTo,
} from "@shared/gift-vouchers";
import { CHECKOUT_SESSION_KEY } from "@/lib/giftVoucherSession";

type AmountMode = "preset" | "custom";

export default function GiftVouchersPage() {
  useBreadcrumbSchema([{ name: "Gift vouchers", path: "/gift-vouchers" }]);
  useSEO({
    title: "Gift Vouchers | The Oxford Wellness Doctor",
    description:
      "Buy an online gift voucher for skin, intimate and women's health with Dr Inga Taganova at Belsyre Court, Oxford. Choose £50, £100, £250 or a custom amount.",
    canonical: "https://www.theoxfordwellnessdoctor.com/gift-vouchers",
  });

  const [amountMode, setAmountMode] = useState<AmountMode>("preset");
  const [preset, setPreset] = useState<number>(VOUCHER_PRESET_AMOUNTS[1]);
  const [customAmount, setCustomAmount] = useState("75");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendTo, setSendTo] = useState<VoucherSendTo>("buyer");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amount = useMemo(() => {
    if (amountMode === "preset") return preset;
    const n = Number(customAmount);
    return Number.isFinite(n) ? Math.round(n) : NaN;
  }, [amountMode, preset, customAmount]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/gift-vouchers/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          buyerName,
          buyerEmail,
          recipientName,
          recipientEmail: sendTo === "recipient" ? recipientEmail : undefined,
          message: message.trim() || undefined,
          sendTo,
        }),
      });
      const data = (await res.json()) as {
        message?: string;
        fallback?: string;
        whatsappUrl?: string;
        hostedCheckoutUrl?: string;
        checkoutId?: string;
      };

      if (data.fallback === "whatsapp" && data.whatsappUrl) {
        window.location.href = data.whatsappUrl;
        return;
      }

      if (!res.ok || !data.hostedCheckoutUrl || !data.checkoutId) {
        if (data.whatsappUrl) {
          window.location.href = data.whatsappUrl;
          return;
        }
        setError(data.message || "Could not start checkout.");
        return;
      }

      try {
        sessionStorage.setItem(CHECKOUT_SESSION_KEY, data.checkoutId);
      } catch {
        /* ignore */
      }
      window.location.href = data.hostedCheckoutUrl;
    } catch {
      setError("Something went wrong. You can continue on WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-10 md:pb-14">
        <div className="container-page">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Gift vouchers
            </p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-4 max-w-2xl">
              Give care that considers the whole picture
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">
              Skin, intimate and women&apos;s health, considered together by one doctor — Dr Inga
              Taganova at Belsyre Court, Oxford. A voucher puts the choice in their hands.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page max-w-3xl">
          <form onSubmit={onSubmit} className="space-y-10">
            <div>
              <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">
                Choose an amount
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {VOUCHER_PRESET_AMOUNTS.map((value) => {
                  const selected = amountMode === "preset" && preset === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setAmountMode("preset");
                        setPreset(value);
                      }}
                      className={`rounded-2xl border px-4 py-5 text-left transition-colors ${
                        selected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-muted/40 text-foreground hover:border-primary/40"
                      }`}
                    >
                      <span className="block text-lg font-semibold">{formatGbp(value)}</span>
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setAmountMode("custom")}
                  className={`rounded-2xl border px-4 py-5 text-left transition-colors ${
                    amountMode === "custom"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-muted/40 text-foreground hover:border-primary/40"
                  }`}
                >
                  <span className="block text-lg font-semibold">Custom</span>
                  <span className={`block text-xs mt-1 ${amountMode === "custom" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    £{VOUCHER_MIN_AMOUNT}–£{VOUCHER_MAX_AMOUNT}
                  </span>
                </button>
              </div>
              {amountMode === "custom" ? (
                <div className="mt-4 max-w-xs">
                  <Label htmlFor="custom-amount">Custom amount (whole pounds)</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    min={VOUCHER_MIN_AMOUNT}
                    max={VOUCHER_MAX_AMOUNT}
                    step={1}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              ) : null}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="buyer-name">Your name</Label>
                <Input
                  id="buyer-name"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="mt-2"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <Label htmlFor="buyer-email">Your email</Label>
                <Input
                  id="buyer-email"
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="mt-2"
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <Label htmlFor="recipient-name">Recipient name</Label>
                <Input
                  id="recipient-name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Short message (optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 min-h-[88px]"
                  maxLength={280}
                  placeholder="A line they will see on the voucher"
                />
              </div>
            </div>

            <fieldset>
              <legend className="font-sans font-semibold text-base text-foreground mb-3">
                Send the voucher to
              </legend>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className={`flex-1 rounded-2xl border px-4 py-3 cursor-pointer ${sendTo === "buyer" ? "border-primary bg-muted/50" : "border-border"}`}>
                  <input
                    type="radio"
                    name="sendTo"
                    className="mr-2"
                    checked={sendTo === "buyer"}
                    onChange={() => setSendTo("buyer")}
                  />
                  Me (I will forward it)
                </label>
                <label className={`flex-1 rounded-2xl border px-4 py-3 cursor-pointer ${sendTo === "recipient" ? "border-primary bg-muted/50" : "border-border"}`}>
                  <input
                    type="radio"
                    name="sendTo"
                    className="mr-2"
                    checked={sendTo === "recipient"}
                    onChange={() => setSendTo("recipient")}
                  />
                  The recipient
                </label>
              </div>
              {sendTo === "recipient" ? (
                <div className="mt-4 max-w-md">
                  <Label htmlFor="recipient-email">Recipient email</Label>
                  <Input
                    id="recipient-email"
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              ) : null}
            </fieldset>

            {error ? (
              <p className="text-sm text-destructive" role="alert">
                {error}{" "}
                <a className="underline" href={Number.isFinite(amount) ? voucherWhatsAppHref(amount) : questionsWhatsAppHref()}>
                  Open WhatsApp
                </a>
              </p>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-11 text-sm font-medium"
              >
                {submitting
                  ? "Starting checkout…"
                  : Number.isFinite(amount)
                    ? `Buy ${formatGbp(amount)} voucher`
                    : "Buy voucher"}
              </Button>
              <a
                href={Number.isFinite(amount) ? voucherWhatsAppHref(amount) : questionsWhatsAppHref()}
                className="js-whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-border px-7 h-11 text-sm font-medium bg-white w-full sm:w-auto"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp instead
                </Button>
              </a>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-foreground tracking-tight mb-6">
            How it works
          </h2>
          <ol className="space-y-5 text-[15px] text-muted-foreground leading-relaxed list-decimal pl-5">
            <li>Choose an amount and complete payment online (or message us on WhatsApp).</li>
            <li>A voucher email is sent instantly with a unique code.</li>
            <li>
              The recipient books online and adds the code in the booking notes, or shares it via{" "}
              <a href={questionsWhatsAppHref()} className="text-primary underline underline-offset-4">
                WhatsApp
              </a>
              .
            </li>
            <li>
              Valid for {VOUCHER_VALIDITY_MONTHS} months and can be put towards any consultation or
              treatment with Dr Inga.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
            Short terms
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
            Gift vouchers are non-refundable and cannot be exchanged for cash. They are valid for{" "}
            {VOUCHER_VALIDITY_MONTHS} months from the purchase date and may be used towards
            consultations or treatments at The Oxford Wellness Doctor.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-border pl-4">
            Placeholder for Nicholas to confirm — final voucher terms may be updated before Christmas
            trading.
          </p>
          <p className="mt-8 text-[15px] text-muted-foreground">
            Questions?{" "}
            <a href={questionsWhatsAppHref()} className="text-primary underline underline-offset-4 js-whatsapp-cta">
              Message us on WhatsApp
            </a>
            {" · "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              Contact
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
