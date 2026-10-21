import type { VercelRequest, VercelResponse } from "@vercel/node";
import { belsyreRedirectLocation, isLikelyBot } from "../shared/belsyre-qr";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const header = req.headers["user-agent"];
  const userAgent = Array.isArray(header) ? header[0] : header;
  if (!isLikelyBot(userAgent)) {
    console.log(
      JSON.stringify({
        qr: "belsyre",
        day: new Date().toISOString().slice(0, 10),
      }),
    );
  }

  res.setHeader("Cache-Control", "no-store");
  res.redirect(302, belsyreRedirectLocation());
}
