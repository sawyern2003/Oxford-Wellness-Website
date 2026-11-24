import type { VercelRequest, VercelResponse } from "@vercel/node";
import { randomUUID } from "crypto";
import {
  validateGiftVoucherOrder,
  voucherWhatsAppHref,
} from "../../shared/gift-vouchers";
import { clientKey, rateLimit } from "../../server/gift-vouchers/rate-limit";
import { createHostedCheckout, sumupConfigured } from "../../server/gift-vouchers/sumup";

function siteOrigin(req: VercelRequest): string {
  const fromEnv =
    process.env.SITE_URL?.trim() ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "");
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const proto = (req.headers["x-forwarded-proto"] as string) || "https";
  const host = (req.headers["x-forwarded-host"] as string) || (req.headers.host as string) || "www.theoxfordwellnessdoctor.com";
  return `${proto}://${host}`.replace(/\/$/, "");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  if (!rateLimit(`gv-create:${clientKey(req)}`, { limit: 8, windowMs: 60_000 })) {
    res.status(429).json({ message: "Too many requests. Please wait a moment." });
    return;
  }

  let body: unknown = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      res.status(400).json({ message: "Invalid JSON" });
      return;
    }
  }

  const parsed = validateGiftVoucherOrder(body);
  if (!parsed.ok) {
    res.status(400).json({ message: parsed.message });
    return;
  }

  if (!sumupConfigured()) {
    res.status(200).json({
      fallback: "whatsapp",
      whatsappUrl: voucherWhatsAppHref(parsed.order.amount),
      message: "Online card checkout is not configured yet. Continue on WhatsApp.",
    });
    return;
  }

  const origin = siteOrigin(req);
  const checkoutReference = `owd-gv-${randomUUID().replace(/-/g, "").slice(0, 20)}`;
  // Client also stores checkout id; thank-you prefers id from sessionStorage.
  const redirectUrl = `${origin}/gift-vouchers/thank-you?ref=${encodeURIComponent(checkoutReference)}`;
  const returnUrl = `${origin}/api/gift-vouchers/webhook`;

  try {
    const checkout = await createHostedCheckout({
      order: parsed.order,
      checkoutReference,
      redirectUrl,
      returnUrl,
    });

    res.status(200).json({
      checkoutId: checkout.id,
      checkoutReference,
      hostedCheckoutUrl: checkout.hosted_checkout_url,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Could not start checkout";
    // No PII in logs.
    console.error("gift-voucher create-checkout failed");
    res.status(502).json({
      message: "Could not start card payment. You can buy via WhatsApp instead.",
      fallback: "whatsapp",
      whatsappUrl: voucherWhatsAppHref(parsed.order.amount),
      detail: message,
    });
  }
}
