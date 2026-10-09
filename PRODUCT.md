# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Women in midlife around Oxford seeking doctor-led care for changes in their skin, body confidence, intimate wellbeing and healthy ageing, with continuity of care from Dr Inga Taganova.

Secondary: people with persistent or complex pain who want specialist assessment and a personal plan with Dr Richard Sawyer. They are a real audience. The Oxford Pain Doctor stays visible as part of the wider clinic, and it must not compete equally with The Oxford Wellness Doctor in the primary site hierarchy.

## Product Purpose

The Oxford Wellness Doctor’s website is how those patients find the clinic, choose an appropriate way in, and book or enquire. It also hosts The Oxford Pain Doctor as a secondary, clearly distinct service.

Success is a visitor who knows who will see them, which of the four pathways fits, and how to take the next step, without being offered a result, price, credential, or clinical service the clinic has not already published.

## Positioning

Patients have four natural ways into the clinic:

- Treatments — when they already know which treatment they are interested in.
- Concerns — when they know what they would like to improve but do not necessarily know which treatment is appropriate.
- Signature Plans — when they are looking for a broader, more comprehensive approach.
- Treatment Finder — when they are unsure where to begin.

Do not assume every patient needs a programme. Do not assume every patient needs a separate consultation before treatment. The appropriate pathway depends on the treatment, concern and clinical requirements.

A neighbouring aesthetics site cannot truthfully copy the mechanism: wellness care is doctor-led, with continuity from Dr Inga Taganova, a GMC-registered GP (4727817) and MRCGP, with gynaecology training. Pain medicine is not one of her treatments. It is a separate consultant-led service, The Oxford Pain Doctor, led by Dr Richard Sawyer, Consultant in Anaesthesia and Pain Medicine, at `/oxford-pain-doctor`.

Do not position The Oxford Wellness Doctor as a hormone-prescribing or HRT service unless this is explicitly changed in future product context.

## Operating Context

Current clinic: Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ. Any Science Park address is historical. Do not surface it as the current clinic location.

In-clinic care is at Belsyre Court. Public contact routes include phone 07739 309380, info@theoxfordwellnessdoctor.com, the contact form, and `/book`. The site’s published online booking link is Glowday (`Oxford-Wellness-Website/client/src/lib/booking.ts`).

The live interface still uses programme routes (Programme Finder and three programme pages) and a treatment catalog. Those pages are the current implementation, not proof that every patient needs a programme.

Pain care lives under `/oxford-pain-doctor` (about, how we help, library, contact, book). It can be hidden with `SHOW_PAIN_DOCTOR` in `Oxford-Wellness-Website/client/src/lib/brand.ts`. It remains part of the wider clinic and stays visually and hierarchically distinct.

Opening hours are unverified existing content. The site currently publishes Friday 16:00–20:00 and Saturday 09:00–13:00. Leave that copy unchanged. It is not a confirmed product fact.

## Capabilities and Constraints

The site is a public marketing and information site: treatments, concerns, signature plans, a treatment finder, educational pages, contact, and booking handoff. It is not a patient portal.

Do not invent testimonials, review counts, prices, licences, or clinical outcomes. Copy that is already published in the site source may be reused only as written there.

Do not present a Science Park address as the current clinic. Do not fold Dr Sawyer’s pain practice into Dr Inga’s treatment list, or the reverse. Do not give the pain service equal weight in the primary navigation or homepage hierarchy.

Do not position the clinic as a hormone-prescribing or HRT service unless future product context explicitly changes that.

Undecided: opening hours. Published hours stay as they are until confirmed.

## Brand Commitments

Public names: The Oxford Wellness Doctor and The Oxford Pain Doctor. Domain: https://www.theoxfordwellnessdoctor.com/

Dr Inga Taganova remains a GMC-registered GP, number 4727817, MRCGP, with gynaecology training, and wellness patients have continuity of care from her.

Dr Richard Sawyer remains the pain lead: Consultant in Anaesthesia and Pain Medicine. That service stays on this site at `/oxford-pain-doctor`, visible and secondary.

The Oxford Wellness Doctor should feel like modern private medicine expressed through understated British editorial design.

The visual world should combine medical credibility, warmth and humanity, understated Oxford character, generous white space, editorial composition and asymmetry, real photography, and hand-painted watercolour or gouache details used selectively. The committed palette is muted Oxford blue, cream, warm stone, olive, and restrained dusty tones.

Avoid generic AI-generated clinic layouts, SaaS-style cards and feature grids, repetitive rounded rectangles, excessive pill badges, excessive centred sections, generic luxury-aesthetics styling, spa clichés, corporate healthcare imagery, unnecessary gradients, and decorative UI elements without purpose.

Pages should feel composed rather than templated. Not every piece of information needs to become a card or component.

## Evidence on Hand

Confirmed product copy, routes, prices, and clinical descriptions live in the site source under `Oxford-Wellness-Website/`. Practitioner portraits and Belsyre Court photographs are in that tree.

There is no licence to add testimonials, review counts, prices, licences, or outcome claims that are not already in that source or supplied later. There is no licence to describe the clinic as an HRT or hormone-prescribing service.

## Product Principles

1. Write and design for women in midlife first. The Oxford Pain Doctor is a secondary service on the same site, visible and distinct, never co-equal in the primary hierarchy.
2. Offer four ways in: Treatments, Concerns, Signature Plans, and Treatment Finder. Do not assume a programme, and do not assume a separate consultation before treatment.
3. Keep the two practices distinct. Dr Inga provides continuity of wellness care. Dr Sawyer leads pain medicine.
4. Publish only confirmed clinic facts. Belsyre Court is the current address. Science Park is historical. Never invent proof, prices, licences, or outcomes.
5. Do not position The Oxford Wellness Doctor as a hormone-prescribing or HRT service unless future product context explicitly says so.
