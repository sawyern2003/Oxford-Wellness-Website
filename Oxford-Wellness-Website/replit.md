# The Oxford Wellness Doctor - Website

## Overview
Professional medical aesthetics clinic website for The Oxford Wellness Doctor, led by Dr. Inga Taganova. The site emphasizes safety, personalized care, and a holistic approach to women's wellness.

## Architecture
- **Frontend**: React + Vite + TypeScript with Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server
- **Email**: SendGrid integration for contact form submissions
- **Routing**: wouter for client-side routing

## Key Pages
- Home (`/`) - Hero, about preview, services overview, testimonials
- About (`/about`) - Dr. Taganova's background, statistics, patient stories
- Treatments (`/treatments`) - 18+ treatment cards with detail modals + links to 9 sub-pages
- Menopause Clinic (`/menopause-clinic-oxford`) - HRT, perimenopause, women's health (1,500 words, 12 FAQs)
- Pricing (`/pricing`) - Transparent pricing tables for all treatments by category
- Blog (`/blog`) - Hub page + 11 long-form posts (Wegovy vs Mounjaro, menopause skin, Botox first time, Oxford Science Park clinic, etc.)
- Pre-Consultation (`/ai-consultation`) - AI-powered pre-consultation tool
- Contact (`/contact`) - Contact form (SendGrid), info, Glowday booking iframe

## Contact Details
- Address: John Eccles House, Robert Robinson Avenue, Oxford Science Park, Littlemore, Oxford OX4 4GP
- Email: info@theoxfordwellnessdoctor.com
- Phone: 07739 309380
- Hours: Friday 4pm-8pm, Saturday 9am-1pm

## Social Media
- Instagram: https://www.instagram.com/theoxfordwellnessdoctor/?hl=en
- Facebook: https://www.facebook.com/theoxfordwellnessdoctor/

## Backend API
- `POST /api/contact` - Sends contact form enquiry via SendGrid to info@theoxfordwellnessdoctor.com

## Environment Variables
- `SENDGRID_API_KEY` - SendGrid API key for email delivery (stored as secret)

## SEO Implementation
- `useSEO` hook (`client/src/hooks/useSEO.ts`) sets unique title, description, OG tags, and canonical per page
- `useBreadcrumbSchema` hook (`client/src/hooks/useBreadcrumbSchema.ts`) injects BreadcrumbList JSON-LD on all internal pages
- JSON-LD structured data in `index.html`: `MedicalBusiness` + `LocalBusiness` + `Physician` @graph with `areaServed` (12 locations) and `medicalSpecialty`
- `robots.txt` and `sitemap.xml` served dynamically from Express (`server/routes.ts`) — 30 pages in sitemap
- Treatments hub page (`/treatments`) has H1/H2/H3 hierarchy, FAQ accordion per category, "Why Choose Us" section, FAQ JSON-LD schema, and internal links to all 9 sub-pages
- 9 individual treatment sub-pages in `client/src/pages/treatments/` using shared `TreatmentPageTemplate` component
- Each treatment sub-page injects @graph with: `MedicalProcedure` (with bodyLocation, preparation, followUp), `FAQPage`, and `BreadcrumbList` (3-level: Home > Treatments > [Name])
- Menopause Clinic page uses TreatmentPageTemplate with 2-level breadcrumb (Home > Menopause Clinic)
- All 11 blog posts use `BlogPostTemplate` which injects `Article` + `BreadcrumbList` (Home > Blog > Post title)
- Treatment sub-pages (18 total): anti-wrinkle, dermal-fillers, lip-fillers, profhilo, morpheus8, medical-weight-loss, excessive-sweating, chemical-peels, skin-boosters, neauvia-n-rose, vitamin-b12, medical-form-completion, forma-facelift, forma-plus-body, inmode-fx, lumecca-ipl, filler-dissolving, jaw-slimming
- All pages have unique meta titles and descriptions targeting Oxford / Oxfordshire local SEO
- BreadcrumbList schema on: all treatment sub-pages, menopause clinic, blog posts, blog hub, about, pricing, contact, pre-consultation, treatments hub

## Image Optimization (Phase 9)
- All images converted to WebP format with SEO-friendly keyword-rich filenames
- `attached_assets/`: `dr-taganova-patient-consultation-oxford-clinic.webp`, `dr-inga-taganova-gmc-doctor-oxford.webp`, `oxford-wellness-doctor-branding.webp`, `morpheus8-skin-tightening-treatment-oxford.webp`
- `client/src/assets/`: `oxford-aesthetics-clinic-oxford-science-park.webp` (hero), `womens-wellness-menopause-clinic-oxford.webp`, `regenerative-medicine-profhilo-skin-booster-oxford.webp`, `medical-aesthetics-botox-dermal-fillers-oxford.webp`
- Compression results: hero 1.7MB→160KB (91% ↓), consultation photo 2.6MB→80KB (97% ↓), WhatWeOffer images ~1.2MB→20-72KB (94-98% ↓)
- All below-the-fold `<img>` tags have `loading="lazy"` + explicit `width`/`height` attributes; hero image uses `fetchPriority="high"`
- Comprehensive descriptive alt text on every image (includes clinic name, location, treatment type, Dr. Taganova's name/GMC number where relevant)
- Two `ImageObject` schema entries added to the @graph in index.html: hero image + Dr. Taganova portrait

## Exact Pricing (Price Sheet — Phase 11)
All prices corrected site-wide to match the official price sheet. No "from £X" used where an exact price exists.
- Anti-Wrinkle: £190 (1 area), £250 (2 areas), £300 (3 areas); add-ons £50; Dimpled Chin £150
- Jaw Slimming: £250 | Excessive Sweating (armpits): £500 | Filler Dissolving: £200
- Dermal Filler (1.0ml): £300 | Lip Filler (0.7ml): £200
- Profhilo / HA Skinbooster: £250 | Polynucleotide Skin Boosters: £350
- Chemical Peels: Obagi Blue Peel Radiance £100, Perfect Peel £350
- Morpheus8: Tummy £300, Eyes/Mouth £400, Face/Neck/Décolletage £650, Stretch Marks £800, Resurfacing add-on £300
- Lumecca IPL: Photofacial (hands) £80, Small area £150, Medium area £223
- Forma Facelift: £150 | Forma Plus Body: £500 | InMode FX: £150
- Vitamin B12: £35 | Medical Form Completion: £50
- Medical Weight Loss Consultation: £50; medication price at consultation
- Neauvia N Rose: £350
All treatment sub-pages, services.tsx, and pricing.tsx updated to reflect exact prices.

## Phase 10 Additions
- **FloatingButtons** (`client/src/components/layout/FloatingButtons.tsx`) — global sticky CTA + WhatsApp buttons, appear after 300px scroll; expandable menu (Book Online + phone); WhatsApp links to wa.me/447739309380
- **Trust badges strip** in Footer — GMC Registered (No. 4727817), Fully Insured, 20+ Years Clinical Experience — rendered above main footer grid (3 badges)
- **New pages**: `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`, `/thank-you`, custom 404 (`not-found.tsx`) all styled to match brand
- **Contact form**: GDPR consent checkbox added (required); submit button disabled until consent given; redirects to `/thank-you` on success
- **Home page**: Google Reviews trust strip added between testimonials and location sections (Google logo, 5★ 47 reviews, 2 snippet cards, "See All Reviews" CTA)
- **Sitemap**: 3 legal pages added (priority 0.3, yearly); 9 new treatment sub-pages added; now 42 pages total
- **Treatments page**: Unified single card layout — all 18 treatments display consistently with name, price, description, "ideal for", and "View Treatment Guide" link to their dedicated sub-page

## Important Notes
- SendGrid requires verified sender identity for info@theoxfordwellnessdoctor.com
- Navigation order: Home, About, Treatments, Pre-Consultation, Shop, Contact, Book Now
- "Book Now" button links to Glowday booking
- Navy/blue color palette with serif typography
- No database needed - site is primarily informational with email-only contact form

## Design Preferences
- No italic body text (except prices)
- Medical-themed icons (not AI-generated looking)
- Professional, authentic aesthetic
