import { whatsappHref } from "@/lib/whatsapp";

/**
 * Gift voucher catalogue for /gift-vouchers.
 *
 * TODO (Nicholas):
 * 1. Set CONSULTATION_VOUCHER_PRICE once the consultation voucher fee is confirmed.
 * 2. Paste each SumUp payment-link URL into sumUpPaymentLink below.
 *    Leave null until the real link exists; the Buy button falls back to WhatsApp.
 * Do NOT invent SumUp URLs.
 */

/** Consultation voucher fee in GBP. null = show “Price to be confirmed” on the card. */
export const CONSULTATION_VOUCHER_PRICE: number | null = null;

export type GiftVoucherId = "consultation" | "gbp100" | "gbp250" | "gbp500";

export interface GiftVoucher {
  id: GiftVoucherId;
  name: string;
  /** Phrase after “Hello, I'd like to buy …” in the WhatsApp prefill. */
  whatsappLabel: string;
  description: string;
  /** Fixed amount in GBP, or null when the price is still to be confirmed. */
  amountGbp: number | null;
  /**
   * SumUp Online payment link for this voucher.
   * null → Buy opens WhatsApp with a prefilled message instead.
   */
  sumUpPaymentLink: string | null;
}

export const GIFT_VOUCHERS: GiftVoucher[] = [
  {
    id: "gbp100",
    name: "£100 gift voucher",
    whatsappLabel: "a £100 gift voucher",
    description: "Credit towards any consultation or treatment at The Oxford Wellness Doctor.",
    amountGbp: 100,
    // TODO: paste SumUp payment link for the £100 voucher
    sumUpPaymentLink: null,
  },
  {
    id: "gbp250",
    name: "£250 gift voucher",
    whatsappLabel: "a £250 gift voucher",
    description: "Credit towards any consultation or treatment at The Oxford Wellness Doctor.",
    amountGbp: 250,
    // TODO: paste SumUp payment link for the £250 voucher
    sumUpPaymentLink: null,
  },
  {
    id: "gbp500",
    name: "£500 gift voucher",
    whatsappLabel: "a £500 gift voucher",
    description: "Credit towards any consultation or treatment at The Oxford Wellness Doctor.",
    amountGbp: 500,
    // TODO: paste SumUp payment link for the £500 voucher
    sumUpPaymentLink: null,
  },
  {
    id: "consultation",
    name: "A consultation with Dr Inga",
    whatsappLabel: "a consultation voucher with Dr Inga",
    description:
      "A private consultation with Dr Inga Taganova: time to be heard, and a plan that considers skin, intimate health and women’s health together.",
    amountGbp: CONSULTATION_VOUCHER_PRICE,
    // TODO: paste SumUp payment link for the consultation voucher
    sumUpPaymentLink: null,
  },
];

export function formatVoucherPrice(voucher: GiftVoucher): string {
  if (voucher.amountGbp == null) return "Price to be confirmed";
  return `£${voucher.amountGbp}`;
}

/** Buy destination: SumUp link when set, otherwise WhatsApp with a prefilled message. */
export function giftVoucherBuyHref(voucher: GiftVoucher): string {
  if (voucher.sumUpPaymentLink) return voucher.sumUpPaymentLink;
  return whatsappHref(`Hello, I'd like to buy ${voucher.whatsappLabel}.`);
}

export function giftVoucherOpensExternally(voucher: GiftVoucher): boolean {
  return Boolean(voucher.sumUpPaymentLink);
}
