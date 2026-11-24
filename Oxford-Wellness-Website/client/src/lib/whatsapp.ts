const WHATSAPP_BASE = "https://wa.me/447739309380";

/** Build a WhatsApp deep link with pre-filled message text. */
export function whatsappHref(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function treatmentWhatsAppMessage(treatmentName: string): string {
  return `Hi, I'd like to ask about ${treatmentName}`;
}

export const CONSULTATION_WHATSAPP_MESSAGE =
  "Hi, I'd like to ask about a consultation";
