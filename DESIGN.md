---
name: The Oxford Wellness Doctor
description: Modern private medicine, set in understated British editorial design.
colors:
  oxford-navy: "hsl(215 35% 25%)"
  ink: "hsl(215 25% 18%)"
  dusty-blue: "hsl(211 44% 65%)"
  dusty-blue-ink: "hsl(215 35% 15%)"
  paper: "hsl(0 0% 100%)"
  cool-mist: "hsl(210 20% 97%)"
  mist-ink: "hsl(215 12% 42%)"
  pale-blue: "hsl(211 44% 94%)"
  pale-blue-ink: "hsl(211 40% 35%)"
  hairline: "hsl(215 20% 90%)"
  signal-red: "hsl(0 84% 60%)"
  pain-burgundy: "hsl(355 38% 26%)"
  pain-red: "hsl(4 62% 47%)"
  pain-ink: "hsl(355 22% 16%)"
  pain-blush: "hsl(8 50% 94%)"
  pain-mist: "hsl(12 28% 97%)"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "12px"
  md: "14px"
  lg: "16px"
  xl: "20px"
  panel: "24px"
  pill: "9999px"
spacing:
  gutter: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  gutter-xl: "64px"
  section: "64px"
  section-lg: "96px"
  page: "1200px"
  wide: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.dusty-blue}"
    textColor: "{colors.oxford-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "hsl(211 44% 65% / 0.9)"
    textColor: "{colors.oxford-navy}"
    rounded: "{rounded.pill}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.oxford-navy}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
    height: "36px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.mist-ink}"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.oxford-navy}"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

# Design System: The Oxford Wellness Doctor

## Overview

**Creative North Star: "Modern private medicine, understated British editorial"**

The Oxford Wellness Doctor should feel like modern private medicine expressed through understated British editorial design. The committed world is medical credibility, warmth, and understated Oxford character: generous white space, editorial composition and asymmetry, real photography, and hand-painted watercolour or gouache used only where it earns its place. The committed palette is muted Oxford blue, cream, warm stone, olive, and restrained dusty tones.

The tokens in this file are the implementation baseline in `Oxford-Wellness-Website/client/src/index.css` and the current pages. They are what the interface uses today. They are not permission to extend habits the direction rejects. Cream, warm stone, olive, and watercolour are committed and not yet tokens. Cormorant Garamond is loaded in `client/index.html` and declared as `--font-serif`, and no component uses it. Live headlines, navigation, and body copy are Montserrat.

Where a current pattern and the direction disagree, follow the direction. Do not grow the pill buttons, the 24px white panels, or the centred closing bands into the system.

**Key Characteristics:**

- Quiet Oxford navy and dusty blue on white and cool mist
- Real photography, not stock clinical scenes
- Asymmetric, editorial sections rather than repeated feature grids
- A secondary pain theme that never shares the primary hierarchy
- Generous page margins, with content held to 1200px or 1400px

## Colors

The live wellness palette is a narrow blue range: a deep navy for identity, a dusty blue for action, and near-white fields. Cream, warm stone, and olive are part of the committed direction and do not exist as tokens yet.

### Primary

- **Oxford Navy** (`hsl(215 35% 25%)`): Wordmark, primary headings on white, and the text on dusty-blue actions. This is the medical voice of the page.
- **Ink** (`hsl(215 25% 18%)`): Default text. Slightly softer than the navy, still clearly blue-black.

### Secondary

- **Dusty Blue** (`hsl(211 44% 65%)`): The action color. Filled booking buttons, the hero’s rotating line, and the focus ring. Its rarity is the point; it is not a surface color.
- **Dusty Blue Ink** (`hsl(215 35% 15%)`): Text on a dusty-blue field when the pain theme is not active and a darker word is required. On wellness buttons the label is Oxford Navy, not this ink.

### Tertiary

- **Pale Blue** (`hsl(211 44% 94%)`): A wash, used sparingly behind a highlight. Not a section background.
- **Pale Blue Ink** (`hsl(211 40% 35%)`): Text on that wash.

### Neutral

- **Paper** (`hsl(0 0% 100%)`): The default page and panel field.
- **Cool Mist** (`hsl(210 20% 97%)`): Alternate section ground. Depth comes from this shift, not from shadow.
- **Mist Ink** (`hsl(215 12% 42%)`): Supporting copy and resting navigation links.
- **Hairline** (`hsl(215 20% 90%)`): Borders, input strokes, and the scrolled header rule.
- **Signal Red** (`hsl(0 84% 60%)`): Destructive actions only. It is not a brand color.

### Sister theme

The Oxford Pain Doctor recolors the same roles under `.theme-pain`. Use these only on `/oxford-pain-doctor`. Do not mix them into wellness pages, and do not let them lead the primary header, homepage, or footer.

- **Pain Burgundy** (`hsl(355 38% 26%)`): Pain primary.
- **Pain Red** (`hsl(4 62% 47%)`): Pain action.
- **Pain Ink** (`hsl(355 22% 16%)`): Pain text.
- **Pain Blush** (`hsl(8 50% 94%)`): Pain wash.
- **Pain Mist** (`hsl(12 28% 97%)`): Pain alternate ground.

**The One Voice Rule.** On a wellness screen, Oxford Navy speaks and Dusty Blue marks the action. A second accent, a gradient, or a pain red on a wellness page breaks the clinic in two.

**The Unbuilt Hues Rule.** Do not invent cream, warm stone, or olive as one-off hex values in a component. When those hues enter the system, they enter here as tokens first.

## Typography

**Display Font:** Montserrat (with sans-serif)
**Body Font:** Montserrat (with sans-serif)
**Label Font:** Montserrat, same family, tracked uppercase

**Character:** The live face is a single geometric sans, set tight on headings and quiet on labels. It reads as a contemporary clinic, not yet as an editorial page. Cormorant Garamond is available in the document and unused. An editorial serif, when it is introduced, belongs to display moments, not to body copy, labels, or buttons.

### Hierarchy

- **Display** (600, 2.15rem then 2.25rem then 2.75rem, line-height 1.15): The homepage headline only. Tracking tight.
- **Headline** (600, 1.875rem then 2.25rem, line-height about 1.2): Section titles. Tracking tight. Left-aligned with the section, not centred by default.
- **Title** (600, 1.25rem, line-height 1.3): A named subject inside a section, such as a programme or treatment name.
- **Body** (400, 15px, line-height 1.625): Prose. Hold it near 65–75 characters. Muted ink, not navy, for supporting paragraphs.
- **Label** (500, 11px, letter-spacing 0.18em, uppercase): The eyebrow above a section. One per section. It is not a badge.

**The Single Face Rule.** Until an editorial serif is actually in use, do not mix a second display family into one page. Do not set prices, buttons, or navigation in a script or serif.

## Layout

The page has two measures. `container-page` stops at 1200px and holds navigation and ordinary copy. `container-wide` stops at 1400px and holds editorial, image-led sections. Padding sits inside the max width: 20px, then 32px from 768px, 48px from 1024px, and 64px from 1280px.

Sections stack with 64px of vertical space, 96px from the medium breakpoint. The homepage hero is a 12-column split, copy in five columns and photograph in seven, image first on small screens. That asymmetry is the layout to extend.

The header is fixed. The first section clears it by about 7rem.

**The Composed Page Rule.** A section is a composition: one idea, one alignment, one measure. Do not centre a section just because the one before it was left-aligned, and do not turn every fact into a matching cell.

## Elevation & Depth

The public site is flat. Sections change by background, Paper against Cool Mist. Panels sit on that ground with no resting shadow. Shadow appears as a hover response, and on a few photographs as a soft offset.

A `.dark` token block exists in the stylesheet and is not the public surface. Do not design new wellness pages against it.

### Shadow Vocabulary

- **Hover lift** (`box-shadow: 0 22px 44px -22px hsl(215 35% 25% / 0.16)`): Only while a linked panel is hovered, with a 6px rise. Pain theme uses the same shadow tinted to Pain Burgundy at 0.2 alpha.
- **Photograph offset** (`box-shadow: 8px 16px 28px -18px rgba(33, 48, 68, 0.42)`): Clinic photographs on the location note. Not a card style.

**The Flat-by-Default Rule.** Surfaces are flat at rest. A shadow is a response to hover or a property of a photograph, never a way to separate stacked information.

## Shapes

The token radius is 1rem. From it, the scale resolves to 12px, 14px, 16px, and 20px. Marketing pages then override that scale: linked panels use 24px corners, and the buttons people actually press are full pills.

That override is the current habit. The direction rejects repetitive rounded rectangles and excessive pills. New work uses the smaller radius scale, or a square editorial crop, and does not add another pill or another 24px panel to match the homepage.

Photographs on the homepage are cropped to 24px. Location photographs use a near-square crop. Prefer the photograph’s own frame over a uniform rounded mask.

**The No New Pill Rule.** A pill is already the live button. Do not use it for badges, filters, icons, or status. If a control is not a primary or outline action, it is not a pill.

## Components

### Buttons

Live marketing actions are pills, 44px tall on the page and 36px in the header, Montserrat medium at 14px. The shared button primitive defaults to a 14px radius and an Oxford Navy fill; the pages override that. Follow the page-level action, and do not spread the primitive’s navy fill.

- **Shape:** Pill on current actions (9999px). Do not add new pill controls.
- **Primary:** Dusty Blue field, Oxford Navy label, 28px horizontal padding, 44px tall.
- **Hover / Focus:** The field drops to 90% opacity and the control rises 2px. Focus is a 1px Dusty Blue ring. Transition about 200ms.
- **Outline:** Paper field, Hairline border, Ink label. Same height and padding. Header outline uses a faint Oxford Navy border.

### Cards / Containers

The homepage “how we can help” blocks are white panels with a 24px radius, a 4:3 photograph, and 28–32px of type padding. At rest they have no border and no shadow. On hover they rise 6px and take the hover lift, over 450ms with a strong ease-out.

Treat this as a current pattern, not a template. A new fact does not need a panel.

- **Corner style:** 24px on these panels today. Prefer not to repeat it.
- **Background:** Paper on Cool Mist.
- **Shadow strategy:** Flat at rest. Hover lift only.
- **Border:** None on these panels.
- **Internal padding:** 28px, 32px from the medium breakpoint.

### Inputs / Fields

- **Style:** 36px tall, Hairline stroke, transparent field, 14px radius, 12px horizontal padding. Placeholder is Mist Ink.
- **Focus:** 1px Dusty Blue ring. No glow.
- **Error / Disabled:** Disabled drops to 50% opacity. Error uses Signal Red when a form actually needs it.

### Navigation

The header is fixed, Paper at 80% opacity, tightening to 95% with a blur and a Hairline rule after a short scroll. The wordmark is Montserrat semibold, 15px, Oxford Navy, tracking tight. Links are 14px, Mist Ink at rest, Oxford Navy and medium weight when active or hovered. Desktop shows from 1024px. Below that, a full-width Paper sheet lists the same links with Hairline dividers.

“Pain Doctor” may appear as one link. It must not be styled as a second wordmark or a competing primary action. On pain routes the header swaps to The Oxford Pain Doctor and the pain palette. Wellness routes keep the wellness header.

### Eyebrow

The section label is 11px, medium, uppercase, tracked at 0.18em, Mist Ink, with 16px beneath it. One eyebrow per section. It is not a chip and not a category system.

## Do's and Don'ts

### Do:

- **Do** compose the page. One idea per section, asymmetric when the content has a photograph and a text column.
- **Do** use real photography of people, Oxford, and the clinic. Leave room around it.
- **Do** keep Oxford Navy for identity and Dusty Blue for the single action.
- **Do** hold copy to the 1200px measure and image-led sections to 1400px.
- **Do** keep The Oxford Pain Doctor on `/oxford-pain-doctor`, in its own burgundy and red, visibly secondary.
- **Do** introduce cream, warm stone, olive, or a watercolour detail as a system token before using it on a page.

### Don't:

- **Don't** use generic AI-generated clinic layouts, SaaS-style cards, or feature grids.
- **Don't** repeat rounded rectangles, or add pill badges, centred sections, and decorative elements that do not do work.
- **Don't** use generic luxury-aesthetics styling, spa clichés, corporate healthcare imagery, or unnecessary gradients.
- **Don't** turn every piece of information into a card or a component.
- **Don't** give The Oxford Pain Doctor equal weight in the primary hierarchy, or use its red on a wellness page.
