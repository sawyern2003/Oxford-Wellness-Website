import type { VercelRequest, VercelResponse } from "@vercel/node";
import { issueVoucherForCheckoutId } from "../../server/gift-vouchers/issue";
import { sumupConfigured } from "../../server/gift-vouchers/sumup";

/**
 * SumUp return_url callback. Body typically includes event_type and id.
 * Always retrieve the checkout before issuing.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
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

  const payload = (body || {}) as { id?: string; checkout_id?: string; event_type?: string };
  const checkoutId = String(payload.id || payload.checkout_id || "").trim();
  if (!checkoutId) {
    res.status(400).json({ message: "Missing checkout id." });
    return;
  }

  try {
    await issueVoucherForCheckoutId(checkoutId);
    res.status(200).json({ ok: true });
  } catch {
    console.error("gift-voucher webhook failed");
    // Acknowledge to avoid endless retries storm; complete page can retry.
    res.status(200).json({ ok: false });
  }
}
