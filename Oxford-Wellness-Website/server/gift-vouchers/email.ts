import { Resend } from "resend";
import {
  CLINIKO_BOOKINGS_URL,
  formatGbp,
  questionsWhatsAppHref,
  type GiftVoucherRecord,
  VOUCHER_VALIDITY_MONTHS,
} from "../../shared/gift-vouchers";

function fromAddress(): string {
  return (
    process.env.VOUCHER_FROM_EMAIL?.trim() ||
    "vouchers@theoxfordwellnessdoctor.com"
  );
}

function clinicNotify(): string {
  return process.env.CLINIC_NOTIFY_EMAIL?.trim() || "info@theoxfordwellnessdoctor.com";
}

function resendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  return new Resend(key);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDateEnGb(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(new Date(iso));
}

function voucherHtml(record: GiftVoucherRecord): string {
  const amount = formatGbp(record.amount);
  const messageBlock = record.message
    ? `<p style="margin:24px 0 0;font-size:15px;line-height:1.55;color:#5e6978;font-style:italic;">“${escapeHtml(record.message)}”</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" />
<title>Gift voucher ${escapeHtml(record.code)}</title></head>
<body style="margin:0;padding:0;background:#f7f8fa;font-family:Georgia,'Times New Roman',serif;color:#222c39;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f8fa;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #e4e8ee;">
        <tr><td style="padding:36px 36px 20px;border-bottom:1px solid #e4e8ee;">
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#5e6978;">The Oxford Wellness Doctor</p>
          <h1 style="margin:14px 0 0;font-size:28px;line-height:1.2;font-weight:600;color:#293c56;">Gift voucher</h1>
        </td></tr>
        <tr><td style="padding:28px 36px;">
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#5e6978;">For</p>
          <p style="margin:4px 0 0;font-size:20px;font-weight:600;">${escapeHtml(record.recipientName)}</p>
          <p style="margin:28px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#5e6978;">Amount</p>
          <p style="margin:6px 0 0;font-size:36px;font-weight:600;color:#293c56;">${amount}</p>
          <p style="margin:28px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#5e6978;">Voucher code</p>
          <p style="margin:8px 0 0;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:22px;letter-spacing:0.08em;color:#4376ad;">${escapeHtml(record.code)}</p>
          ${messageBlock}
          <p style="margin:28px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#5e6978;">
            Valid until ${escapeHtml(formatDateEnGb(record.expiresAt))} (${VOUCHER_VALIDITY_MONTHS} months from purchase).
            Put this towards any consultation or treatment with Dr Inga Taganova at Belsyre Court, Oxford.
          </p>
        </td></tr>
        <tr><td style="padding:8px 36px 36px;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.65;color:#222c39;">
          <p style="margin:0 0 10px;font-weight:600;">How to book</p>
          <ol style="margin:0;padding-left:18px;color:#5e6978;">
            <li style="margin-bottom:8px;">Book online at <a href="${CLINIKO_BOOKINGS_URL}" style="color:#4376ad;">Cliniko</a>.</li>
            <li style="margin-bottom:8px;">Add your voucher code in the booking notes, or message us on <a href="${questionsWhatsAppHref()}" style="color:#4376ad;">WhatsApp</a>.</li>
          </ol>
          <p style="margin:22px 0 0;font-size:12px;color:#8a93a0;">Skin, intimate and women's health, considered together by one doctor.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function clinicNotifyHtml(record: GiftVoucherRecord): string {
  return `<!DOCTYPE html><html><body style="font-family:Helvetica,Arial,sans-serif;color:#222;">
  <h2>New gift voucher purchase</h2>
  <ul>
    <li><strong>Code:</strong> ${escapeHtml(record.code)}</li>
    <li><strong>Amount:</strong> ${escapeHtml(formatGbp(record.amount))}</li>
    <li><strong>Buyer:</strong> ${escapeHtml(record.buyerName)} &lt;${escapeHtml(record.buyerEmail)}&gt;</li>
    <li><strong>Recipient:</strong> ${escapeHtml(record.recipientName)}${record.recipientEmail ? ` &lt;${escapeHtml(record.recipientEmail)}&gt;` : ""}</li>
    <li><strong>Send to:</strong> ${record.sendTo}</li>
    <li><strong>Message:</strong> ${escapeHtml(record.message || "—")}</li>
    <li><strong>Expires:</strong> ${escapeHtml(formatDateEnGb(record.expiresAt))}</li>
    <li><strong>SumUp checkout id:</strong> ${escapeHtml(record.checkoutId)}</li>
  </ul>
</body></html>`;
}

export async function sendVoucherEmails(record: GiftVoucherRecord): Promise<{ sent: boolean; reason?: string }> {
  const client = resendClient();
  if (!client) {
    return { sent: false, reason: "RESEND_API_KEY not set" };
  }

  const to =
    record.sendTo === "recipient" && record.recipientEmail
      ? record.recipientEmail
      : record.buyerEmail;

  const subject = `Your £${record.amount} gift voucher from The Oxford Wellness Doctor`;

  await client.emails.send(
    {
      from: `The Oxford Wellness Doctor <${fromAddress()}>`,
      to: [to],
      ...(record.sendTo === "recipient" && record.recipientEmail && record.buyerEmail !== record.recipientEmail
        ? { cc: [record.buyerEmail] }
        : {}),
      subject,
      html: voucherHtml(record),
    },
    { idempotencyKey: `owd-gv-customer-${record.checkoutId}` },
  );

  await client.emails.send(
    {
      from: `The Oxford Wellness Doctor <${fromAddress()}>`,
      to: [clinicNotify()],
      subject: `Gift voucher sold: ${formatGbp(record.amount)} (${record.code})`,
      html: clinicNotifyHtml(record),
    },
    { idempotencyKey: `owd-gv-clinic-${record.checkoutId}` },
  );

  return { sent: true };
}
