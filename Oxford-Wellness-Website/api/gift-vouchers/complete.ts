import type { VercelRequest, VercelResponse } from "@vercel/node";
import { clientKey, rateLimit } from "../../server/gift-vouchers/rate-limit";
import { issueVoucherForCheckoutId } from "../../server/gift-vouchers/issue";
import { sumupConfigured } from "../../server/gift-vouchers/sumup";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  if (!rateLimit(`gv-complete:${clientKey(req)}`, { limit: 20, windowMs: 60_000 })) {
    res.status(429).json({ message: "Too many requests. Please wait a moment." });
    return;
  }

  if (!sumupConfigured()) {
    res.status(503).json({ message: "Payments are not configured." });
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

  const checkoutId = String((body as { checkoutId?: string })?.checkoutId ?? "").trim();
  if (!checkoutId || checkoutId.length > 80) {
    res.status(400).json({ message: "Missing checkout id." });
    return;
  }

  try {
    const result = await issueVoucherForCheckoutId(checkoutId);
    if (!result.ok || !result.record) {
      res.status(409).json({
        message: result.message || "Payment not confirmed yet.",
        status: result.status,
      });
      return;
    }

    res.status(200).json({
      status: result.status,
      code: result.record.code,
      amount: result.record.amount,
      recipientName: result.record.recipientName,
      expiresAt: result.record.expiresAt,
      emailed: result.emailed,
      message: result.message,
    });
  } catch {
    console.error("gift-voucher complete failed");
    res.status(502).json({ message: "Could not confirm the voucher just now." });
  }
}
