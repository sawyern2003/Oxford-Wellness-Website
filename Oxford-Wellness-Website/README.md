# The Oxford Wellness Doctor — website

Vite + React static site with prerendered routes for SEO.

## Environment variables

Copy `.env.example` to `.env` for local development. On Vercel, set variables under
**Project → Settings → Environment Variables** (Production and Preview as needed).
Vite embeds `VITE_*` values at **build** time — change them, then redeploy.

| Variable | Required | Purpose |
|---|---|---|
| `PORT` | No | Dev/server port (default 3000) |
| `SENDGRID_API_KEY` | For contact form | SendGrid API key for `POST /api/contact` |
| `VITE_GOOGLE_ADS_ID` | No | Google Ads ID, e.g. `AW-XXXXXXX`. If unset, Ads tracking is off. |
| `VITE_GADS_BOOK_LABEL` | No | Conversion label for Glowday / booking clicks |
| `VITE_GADS_WHATSAPP_LABEL` | No | Conversion label for WhatsApp clicks |
| `VITE_GADS_TEL_LABEL` | No | Conversion label for `tel:` clicks |

### Google Ads + Consent Mode v2

When `VITE_GOOGLE_ADS_ID` is set:

1. `gtag.js` loads site-wide with Consent Mode defaults **denied**.
2. The existing cookie banner Accept / Reject updates consent (`granted` / `denied`) and persists the choice.
3. Conversions fire only after Accept, for Glowday links (primary), WhatsApp, and phone clicks.
4. `gclid` / `gbraid` / `wbraid` from the landing URL are stored and, after consent, appended to Glowday links when missing.

## Scripts

```bash
npm run dev      # local development
npm run build    # production build + prerender
```
