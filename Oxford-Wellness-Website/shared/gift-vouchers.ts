/** Easy-to-edit gift voucher amounts and limits (GBP, whole pounds). */
export const VOUCHER_PRESET_AMOUNTS = [50, 100, 250] as const;

export const VOUCHER_MIN_AMOUNT = 25;
export const VOUCHER_MAX_AMOUNT = 1000;
export const VOUCHER_CURRENCY = "GBP" as const;
export const VOUCHER_VALIDITY_MONTHS = 12;

export const CLINIKO_BOOKINGS_URL =
  "https://the-oxford-wellness-doctor.uk3.cliniko.com/bookings";

export const VOUCHER_WHATSAPP_NUMBER = "447861933979";

export type VoucherSendTo = "buyer" | "recipient";

export type GiftVoucherOrderInput = {
  amount: number;
  buyerName: string;
  buyerEmail: string;
  recipientName: string;
  recipientEmail?: string;
  message?: string;
  sendTo: VoucherSendTo;
};

export type GiftVoucherRecord = GiftVoucherOrderInput & {
  code: string;
  purchasedAt: string;
  expiresAt: string;
  checkoutId: string;
  checkoutReference: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isWholePoundAmount(value: number): boolean {
  return Number.isInteger(value) && value >= VOUCHER_MIN_AMOUNT && value <= VOUCHER_MAX_AMOUNT;
}

export function validateGiftVoucherOrder(
  raw: unknown,
): { ok: true; order: GiftVoucherOrderInput } | { ok: false; message: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, message: "Invalid request body." };
  }
  const body = raw as Record<string, unknown>;

  const amount = typeof body.amount === "number" ? body.amount : Number(body.amount);
  if (!Number.isFinite(amount) || !isWholePoundAmount(amount)) {
    return {
      ok: false,
      message: `Amount must be a whole pound between £${VOUCHER_MIN_AMOUNT} and £${VOUCHER_MAX_AMOUNT}.`,
    };
  }

  const buyerName = String(body.buyerName ?? "").trim();
  const buyerEmail = String(body.buyerEmail ?? "").trim().toLowerCase();
  const recipientName = String(body.recipientName ?? "").trim();
  const sendTo = body.sendTo === "recipient" ? "recipient" : "buyer";
  const message = String(body.message ?? "").trim().slice(0, 280);
  const recipientEmail = String(body.recipientEmail ?? "").trim().toLowerCase();

  if (buyerName.length < 2 || buyerName.length > 80) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!EMAIL_RE.test(buyerEmail)) {
    return { ok: false, message: "Please enter a valid email for yourself." };
  }
  if (recipientName.length < 2 || recipientName.length > 80) {
    return { ok: false, message: "Please enter the recipient's name." };
  }
  if (sendTo === "recipient") {
    if (!EMAIL_RE.test(recipientEmail)) {
      return { ok: false, message: "Please enter a valid recipient email." };
    }
  }

  return {
    ok: true,
    order: {
      amount,
      buyerName,
      buyerEmail,
      recipientName,
      recipientEmail: sendTo === "recipient" ? recipientEmail : undefined,
      message: message || undefined,
      sendTo,
    },
  };
}

export function voucherWhatsAppPurchaseMessage(amount: number): string {
  return `Hello, I'd like to buy a £${amount} gift voucher`;
}

export function voucherWhatsAppHref(amount: number): string {
  return `https://wa.me/${VOUCHER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    voucherWhatsAppPurchaseMessage(amount),
  )}`;
}

export function questionsWhatsAppHref(): string {
  return `https://wa.me/${VOUCHER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I have a question about gift vouchers",
  )}`;
}

function utf8ToBase64Url(text: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(text, "utf8").toString("base64url");
  }
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToUtf8(value: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "base64url").toString("utf8");
  }
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** Compact payload stored in SumUp checkout description (no secrets). */
export function encodeOrderPayload(order: GiftVoucherOrderInput): string {
  const payload = {
    a: order.amount,
    bn: order.buyerName,
    be: order.buyerEmail,
    rn: order.recipientName,
    re: order.recipientEmail || "",
    m: order.message || "",
    s: order.sendTo === "recipient" ? "r" : "b",
  };
  return `OWDGV1.${utf8ToBase64Url(JSON.stringify(payload))}`;
}

export function decodeOrderPayload(description: string | undefined | null): GiftVoucherOrderInput | null {
  if (!description || !description.startsWith("OWDGV1.")) return null;
  try {
    const json = base64UrlToUtf8(description.slice("OWDGV1.".length));
    const raw = JSON.parse(json) as Record<string, unknown>;
    const parsed = validateGiftVoucherOrder({
      amount: raw.a,
      buyerName: raw.bn,
      buyerEmail: raw.be,
      recipientName: raw.rn,
      recipientEmail: raw.re || undefined,
      message: raw.m || undefined,
      sendTo: raw.s === "r" ? "recipient" : "buyer",
    });
    return parsed.ok ? parsed.order : null;
  } catch {
    return null;
  }
}

export function addMonthsIso(isoDate: string, months: number): string {
  const d = new Date(isoDate);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d.toISOString();
}

export function formatGbp(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}
