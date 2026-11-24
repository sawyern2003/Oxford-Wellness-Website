import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { sendBookConversionWithValue } from "@/lib/googleAds";
import {
  CLINIKO_BOOKINGS_URL,
  formatGbp,
  questionsWhatsAppHref,
} from "@shared/gift-vouchers";
import { CHECKOUT_SESSION_KEY } from "@/lib/giftVoucherSession";

type CompleteState =
  | { phase: "loading" }
  | { phase: "ok"; code: string; amount: number; recipientName: string; expiresAt: string; emailed?: boolean }
  | { phase: "pending"; message: string }
  | { phase: "error"; message: string };

function readCheckoutId(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("checkout_id") || params.get("id");
    if (fromQuery) return fromQuery;
    return sessionStorage.getItem(CHECKOUT_SESSION_KEY);
  } catch {
    return null;
  }
}

export default function GiftVouchersThankYouPage() {
  useSEO({
    title: "Gift Voucher Confirmation | The Oxford Wellness Doctor",
    description: "Thank you for purchasing a gift voucher from The Oxford Wellness Doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/gift-vouchers/thank-you",
  });

  const [state, setState] = useState<CompleteState>({ phase: "loading" });
  const conversionSent = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function complete() {
      const checkoutId = readCheckoutId();
      if (!checkoutId) {
        setState({
          phase: "error",
          message: "We could not find your checkout. If you were charged, please message us on WhatsApp with your receipt.",
        });
        return;
      }

      try {
        const res = await fetch("/api/gift-vouchers/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkoutId }),
        });
        const data = (await res.json()) as {
          message?: string;
          status?: string;
          code?: string;
          amount?: number;
          recipientName?: string;
          expiresAt?: string;
          emailed?: boolean;
        };

        if (cancelled) return;

        if (res.ok && data.code && data.amount != null && data.recipientName && data.expiresAt) {
          setState({
            phase: "ok",
            code: data.code,
            amount: data.amount,
            recipientName: data.recipientName,
            expiresAt: data.expiresAt,
            emailed: data.emailed,
          });
          if (!conversionSent.current) {
            conversionSent.current = true;
            sendBookConversionWithValue(data.amount, "GBP");
          }
          return;
        }

        if (data.status === "PENDING") {
          setState({
            phase: "pending",
            message: data.message || "Payment is still confirming. This page will refresh shortly.",
          });
          return;
        }

        setState({
          phase: "error",
          message: data.message || "We could not confirm the voucher yet.",
        });
      } catch {
        if (!cancelled) {
          setState({
            phase: "error",
            message: "Something went wrong confirming your voucher.",
          });
        }
      }
    }

    complete();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (state.phase !== "pending") return;
    const timer = window.setTimeout(() => {
      window.location.reload();
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [state.phase]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="container-page max-w-xl text-center">
        {state.phase === "loading" || state.phase === "pending" ? (
          <>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Gift voucher
            </p>
            <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Confirming your payment
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {state.phase === "pending"
                ? state.message
                : "One moment while we confirm your voucher with SumUp."}
            </p>
          </>
        ) : null}

        {state.phase === "ok" ? (
          <>
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-5" />
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Voucher ready
            </p>
            <h1 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Thank you
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              {formatGbp(state.amount)} gift voucher for {state.recipientName}
              {state.emailed === false
                ? " — payment is confirmed; email delivery will follow once mail is configured."
                : " — the voucher email is on its way."}
            </p>
            <div className="rounded-3xl bg-muted/50 px-6 py-6 text-left mb-8">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Code</p>
              <p className="font-mono text-xl tracking-wider text-brand-accent-text mb-4">{state.code}</p>
              <p className="text-sm text-muted-foreground">
                Valid until{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(state.expiresAt))}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={CLINIKO_BOOKINGS_URL} className="js-book-cta">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-11 text-sm">
                  Book online
                </Button>
              </a>
              <a href={questionsWhatsAppHref()} className="js-whatsapp-cta" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-7 h-11 text-sm bg-white">
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </>
        ) : null}

        {state.phase === "error" ? (
          <>
            <h1 className="font-sans font-semibold text-3xl text-foreground tracking-tight mb-4">
              We need a quick check
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">{state.message}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/gift-vouchers">
                <Button className="bg-primary text-primary-foreground rounded-full px-7 h-11 text-sm">
                  Back to vouchers
                </Button>
              </Link>
              <a href={questionsWhatsAppHref()} className="js-whatsapp-cta" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-7 h-11 text-sm bg-white">
                  WhatsApp us
                </Button>
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
