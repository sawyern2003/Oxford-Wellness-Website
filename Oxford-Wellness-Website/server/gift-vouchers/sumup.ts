import {
  encodeOrderPayload,
  type GiftVoucherOrderInput,
  VOUCHER_CURRENCY,
} from "../../shared/gift-vouchers";

const SUMUP_API = "https://api.sumup.com/v0.1";

export type SumUpCheckout = {
  id: string;
  status: "PENDING" | "FAILED" | "PAID" | "EXPIRED" | string;
  amount: number;
  currency: string;
  checkout_reference?: string;
  description?: string;
  date?: string;
  hosted_checkout_url?: string;
  hosted_checkout?: { enabled?: boolean };
};

export function sumupConfigured(): boolean {
  return Boolean(process.env.SUMUP_API_KEY?.trim() && process.env.SUMUP_MERCHANT_CODE?.trim());
}

function apiKey(): string {
  const key = process.env.SUMUP_API_KEY?.trim();
  if (!key) throw new Error("SUMUP_API_KEY is not set");
  return key;
}

function merchantCode(): string {
  const code = process.env.SUMUP_MERCHANT_CODE?.trim();
  if (!code) throw new Error("SUMUP_MERCHANT_CODE is not set");
  return code;
}

export async function createHostedCheckout(opts: {
  order: GiftVoucherOrderInput;
  checkoutReference: string;
  redirectUrl: string;
  returnUrl: string;
}): Promise<SumUpCheckout> {
  const body = {
    checkout_reference: opts.checkoutReference.slice(0, 64),
    amount: opts.order.amount,
    currency: VOUCHER_CURRENCY,
    merchant_code: merchantCode(),
    description: encodeOrderPayload(opts.order),
    redirect_url: opts.redirectUrl,
    return_url: opts.returnUrl,
    hosted_checkout: { enabled: true },
  };

  const res = await fetch(`${SUMUP_API}/checkouts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => ({}))) as SumUpCheckout & {
    detail?: string;
    title?: string;
    message?: string;
  };

  if (!res.ok) {
    const msg = data.detail || data.title || data.message || `SumUp create failed (${res.status})`;
    throw new Error(msg);
  }

  if (!data.hosted_checkout_url) {
    throw new Error(
      "SumUp did not return hosted_checkout_url. Enable Online Payments / Hosted Checkout for this merchant.",
    );
  }

  return data;
}

export async function retrieveCheckout(checkoutId: string): Promise<SumUpCheckout> {
  const res = await fetch(`${SUMUP_API}/checkouts/${encodeURIComponent(checkoutId)}`, {
    headers: { Authorization: `Bearer ${apiKey()}` },
  });
  const data = (await res.json().catch(() => ({}))) as SumUpCheckout & {
    detail?: string;
    message?: string;
  };
  if (!res.ok) {
    throw new Error(data.detail || data.message || `SumUp retrieve failed (${res.status})`);
  }
  return data;
}
