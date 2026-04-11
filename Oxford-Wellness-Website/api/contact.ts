import type { VercelRequest, VercelResponse } from "@vercel/node";
import { submitContactJson } from "../server/contact-submit";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let body: unknown = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}") as unknown;
    } catch {
      res.status(400).json({ message: "Invalid JSON" });
      return;
    }
  }

  const { status, json } = await submitContactJson(body);
  res.status(status).json(json);
}
