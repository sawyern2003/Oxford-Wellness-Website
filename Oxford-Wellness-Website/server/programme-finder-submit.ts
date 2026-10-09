import { z } from "zod";
import sgMail from "@sendgrid/mail";

const programmeFinderSchema = z.object({
  lead: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    consent: z.boolean(),
  }),
  answers: z.record(z.any()).optional(),
  recommendation: z
    .object({
      primaryId: z.string(),
      primaryName: z.string(),
      alternativeIds: z.array(z.string()).optional(),
      alternativeNames: z.array(z.string()).optional(),
    })
    .optional(),
  matchReasons: z.array(z.string()).optional(),
  timestamp: z.string().optional(),
  pageUrl: z.string().optional(),
});

export type ProgrammeFinderJsonResponse = { message: string };

export async function submitProgrammeFinderJson(
  body: unknown,
): Promise<{ status: number; json: ProgrammeFinderJsonResponse }> {
  try {
    const data = programmeFinderSchema.parse(body);

    if (!data.lead.consent) {
      return { status: 400, json: { message: "Consent is required to send your enquiry." } };
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return { status: 500, json: { message: "Email service is not configured" } };
    }

    sgMail.setApiKey(apiKey);

    const primary = data.recommendation?.primaryName || "Not recorded";
    const alternatives = (data.recommendation?.alternativeNames || []).join(", ") || "None";
    const reasons = (data.matchReasons || []).join("; ") || "None";

    const msg = {
      to: "info@theoxfordwellnessdoctor.com",
      from: "info@theoxfordwellnessdoctor.com",
      replyTo: data.lead.email,
      subject: `Programme Finder: ${primary} – ${data.lead.firstName} ${data.lead.lastName}`,
      text: `Programme Finder enquiry\n\nName: ${data.lead.firstName} ${data.lead.lastName}\nEmail: ${data.lead.email}\nPhone: ${data.lead.phone || "–"}\n\nPrimary recommendation: ${primary}\nAlternatives: ${alternatives}\nMatch reasons: ${reasons}\n\nNote: Educational guidance only. Final suitability confirmed in consultation.\n\nAnswers JSON:\n${JSON.stringify(data.answers || {}, null, 2)}`,
      html: `
        <h2>Programme Finder Enquiry</h2>
        <p><strong>Name:</strong> ${data.lead.firstName} ${data.lead.lastName}</p>
        <p><strong>Email:</strong> ${data.lead.email}</p>
        <p><strong>Phone:</strong> ${data.lead.phone || "–"}</p>
        <hr />
        <p><strong>Primary recommendation:</strong> ${primary}</p>
        <p><strong>Alternatives:</strong> ${alternatives}</p>
        <p><strong>Match reasons:</strong> ${reasons}</p>
        <p><em>Educational guidance only. Final suitability is confirmed during consultation.</em></p>
        <pre style="white-space:pre-wrap;font-size:12px;">${JSON.stringify(data.answers || {}, null, 2)}</pre>
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
    console.error("Programme finder SendGrid error:", error);
    return {
      status: 500,
      json: {
        message: "Failed to send your enquiry. Please try again or contact us directly.",
      },
    };
  }
}
