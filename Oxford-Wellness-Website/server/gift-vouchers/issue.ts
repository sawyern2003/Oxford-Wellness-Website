import {
  addMonthsIso,
  decodeOrderPayload,
  type GiftVoucherRecord,
  VOUCHER_VALIDITY_MONTHS,
} from "../../shared/gift-vouchers";
import { voucherCodeFromCheckoutId } from "./code";
import { sendVoucherEmails } from "./email";
import { retrieveCheckout, type SumUpCheckout } from "./sumup";

async function postSheetWebhook(record: GiftVoucherRecord): Promise<void> {
  const url = process.env.VOUCHER_SHEET_WEBHOOK_URL?.trim();
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: record.code,
        amount: record.amount,
        currency: "GBP",
        buyerName: record.buyerName,
        buyerEmail: record.buyerEmail,
        recipientName: record.recipientName,
        recipientEmail: record.recipientEmail || "",
        message: record.message || "",
        sendTo: record.sendTo,
        purchasedAt: record.purchasedAt,
        expiresAt: record.expiresAt,
        checkoutId: record.checkoutId,
        checkoutReference: record.checkoutReference,
      }),
    });
  } catch {
    // Non-fatal; do not log PII.
  }
}

export function buildRecordFromCheckout(checkout: SumUpCheckout): GiftVoucherRecord | null {
  const order = decodeOrderPayload(checkout.description);
  if (!order) return null;
  if (Number(checkout.amount) !== order.amount) return null;

  const purchasedAt = checkout.date || new Date().toISOString();
  return {
    ...order,
    code: voucherCodeFromCheckoutId(checkout.id),
    purchasedAt,
    expiresAt: addMonthsIso(purchasedAt, VOUCHER_VALIDITY_MONTHS),
    checkoutId: checkout.id,
    checkoutReference: checkout.checkout_reference || "",
  };
}

/**
 * Confirm PAID status with SumUp, then issue voucher emails (idempotent per checkout id).
 */
export async function issueVoucherForCheckoutId(checkoutId: string): Promise<{
  ok: boolean;
  status: string;
  record?: GiftVoucherRecord;
  message?: string;
  emailed?: boolean;
}> {
  const checkout = await retrieveCheckout(checkoutId);
  if (checkout.status !== "PAID") {
    return {
      ok: false,
      status: checkout.status,
      message:
        checkout.status === "PENDING"
          ? "Payment is still pending."
          : `Checkout status is ${checkout.status}.`,
    };
  }

  const record = buildRecordFromCheckout(checkout);
  if (!record) {
    return {
      ok: false,
      status: checkout.status,
      message: "Could not read voucher details from the checkout.",
    };
  }

  const emailResult = await sendVoucherEmails(record);
  await postSheetWebhook(record);

  return {
    ok: true,
    status: checkout.status,
    record: {
      ...record,
      // Avoid returning emails to the browser beyond what's needed.
      buyerEmail: record.buyerEmail,
      recipientEmail: record.recipientEmail,
    },
    emailed: emailResult.sent,
    message: emailResult.sent ? undefined : emailResult.reason,
  };
}
