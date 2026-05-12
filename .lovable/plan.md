## Goal

Make the landing page a true non-scrollable single screen showing only the two products and brand mark. Move all secondary content behind a minimal slide-in menu triggered from a top-right button.

## Landing page (`src/routes/index.tsx`)

Keep it to one viewport, no scroll:

```text
┌──────────────────────────────────────────────┐
│ [logo]                              [ menu ] │
├──────────────────────┬───────────────────────┤
│                      │                       │
│   Pouch (1.2 KG)     │   Sachets (30×42G)    │
│   ₹2,499  · Forge →  │   ₹1,899  · Forge →   │
│                      │                       │
└──────────────────────────────────────────────┘
```

Remove from the page:
- Left "Protein, Rewritten" column with stats, copy, taglines
- Footer strip with tagline + atelier/press/contact links
- Inline header nav links ("Cold-Forged Protein", "Edition 001")
- Top-right "Forge Now →" CTA (replaced by menu)

Each product panel keeps: product image, name, weight, price, a small "Forge →" action. No descriptions, no science, no educational copy.

## Top-right menu

- A single icon button (hamburger / two-line mark) in the top-right of the header.
- Clicking opens a minimal full-height slide-in panel from the right (built with the existing shadcn `Sheet` component to avoid adding deps).
- Panel content: large editorial links, monochrome, gold hover, mono labels.
  - Information
  - Contact
  - Privacy
- Closes on link click, Esc, or backdrop click (Sheet defaults).

## New routes (separate files for SSR/SEO)

Create three minimal pages, each with its own `head()` (title + description + og tags). Layout: small header with logo + "Close ✕" link back to `/`, generous whitespace, editorial typography matching the brand. No marketing copy beyond what each page needs.

- `src/routes/information.tsx` — short brand statement + product specs (ingredients, serving, origin) in a clean typographic layout.
- `src/routes/contact.tsx` — email, location, social handles. No form.
- `src/routes/privacy.tsx` — placeholder privacy policy text the user can edit later.

Navigation uses TanStack `<Link>` (no hash anchors).

## Technical notes

- Use `Sheet` from `src/components/ui/sheet.tsx` for the menu (already in project).
- Keep existing color tokens (`gold`, navy background) and fonts (Fraunces / Inter Tight / JetBrains Mono).
- Delete `src/components/Nav.tsx` and `src/components/Particles.tsx` if unused after the cleanup.
- Confirm landing fits in one viewport at the user's current 453×862 preview by using `h-screen overflow-hidden` and stacking the two product panels vertically on mobile, side-by-side on `md+`.
