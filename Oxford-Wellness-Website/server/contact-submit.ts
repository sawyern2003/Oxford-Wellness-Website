import { z } from "zod";
import sgMail from "@sendgrid/mail";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Treatment interest is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactJsonResponse = { message: string };

export async function submitContactJson(
  body: unknown,
): Promise<{ status: number; json: ContactJsonResponse }> {
  try {
    const data = contactSchema.parse(body);

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return {
        status: 500,
        json: { message: "Email service is not configured" },
      };
    }

    sgMail.setApiKey(apiKey);

    const msg = {
      to: "info@theoxfordwellnessdoctor.com",
      from: "info@theoxfordwellnessdoctor.com",
      replyTo: data.email,
      subject: `New Enquiry: ${data.subject} - ${data.firstName} ${data.lastName}`,
      text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nTreatment Interest: ${data.subject}\n\nMessage:\n${data.message}`,
      html: `
          <h2>New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Treatment Interest:</strong> ${data.subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
    };

    await sgMail.send(msg);
    return { status: 200, json: { message: "Your enquiry has been sent successfully" } };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return {
        status: 400,
        json: { message: error.errors[0]?.message ?? "Invalid request" },
      };
    }
    const err = error as { response?: { body?: unknown } };
    console.error("SendGrid error:", err?.response?.body || error);
    return {
      status: 500,
      json: {
        message: "Failed to send your message. Please try again or contact us directly.",
      },
    };
  }
}
