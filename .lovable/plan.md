## Direction

Drop the pitch-black navy and italic serif. The page becomes a statement: pale, cold, architectural. Big block letters. Two products framed like museum objects. Still single-screen, no scroll, menu in top-right.

## Palette

Move off pure dark. New tokens in `src/styles.css`:

- `--background`: bone / off-white `oklch(0.94 0.01 240)` (page) — with an alternate "ice blue" wash `oklch(0.92 0.02 230)`
- `--foreground`: near-black ink `oklch(0.14 0.02 250)`
- `--accent`: cold steel blue `oklch(0.55 0.08 240)`
- `--signal`: blood red `oklch(0.5 0.22 27)` used sparingly (price, hover)
- Remove gold-on-navy as the dominant pairing. Gold disappears or becomes a tiny mono accent only.

Result: a gallery-white canvas, not a nightclub.

## Typography

Block letters, no italics anywhere.

- Display: swap Fraunces (italic serif) → a heavy geometric/grotesk like **Archivo Black** or **Space Grotesk 700**, ALL CAPS, tight tracking, huge sizes.
- Body / labels: Inter Tight or JetBrains Mono kept for micro-labels.
- Remove `.font-display { font-style: italic }` rule entirely.

Typographic moves:
- Brand wordmark "FROSTBLOOD" set as oversized type behind/around the products, not just the logo PNG.
- Statement line baked into layout: e.g. `PROTEIN. REWRITTEN.` running edge-to-edge.

## Layout (single viewport, no scroll)

```text
┌──────────────────────────────────────────────────────┐
│ FROSTBLOOD                                  [ MENU ] │
├──────────────────────────────────────────────────────┤
│  PROTEIN.                                            │
│  REWRITTEN.            [ pouch ]      [ sachets ]    │
│                         1.2 KG         30 × 42G      │
│  ── 001 / COLD          ₹2,499         ₹1,899        │
│                         FORGE →        FORGE →       │
│                                                      │
│  EDITION 001 — COLD-FORGED        IN / CN / EU       │
└──────────────────────────────────────────────────────┘
```

- Asymmetric grid: left third is type (statement + index marks), right two-thirds holds the two products side-by-side, separated by a hairline.
- Mobile: statement on top, products stacked beneath, still fits `100dvh` with `overflow-hidden`.
- Hairline rules in cold blue, not gold. Generous negative space.

## Products

Each panel is restrained:
- Product image centered, no glow, soft drop shadow only.
- Mono label top-left (`VESSEL I` / `VESSEL II`), weight top-right.
- Name in block caps under image.
- Price in signal red. "FORGE →" as a thin underlined link, not a boxed button.

## Menu (unchanged behavior, restyled)

- Top-right `[ MENU ]` text button, no border, underline on hover.
- Sheet panel becomes white-on-ink (inverse of page) for contrast — uppercase block links: INFORMATION / CONTACT / PRIVACY, numbered 01–03.
- Close as `[ CLOSE ]` text, top-right.

## Sub-pages

`information.tsx`, `contact.tsx`, `privacy.tsx` inherit the same palette + block type. PageShell keeps logo top-left and `[ CLOSE ]` top-right. Italic display class removed; section labels stay mono uppercase.

## Files to change

- `src/styles.css` — repaint tokens, swap font stack, remove italic on `.font-display`, retire gold-heavy gradients/shadows, add `--signal` red and `--ice` background.
- `src/routes/__root.tsx` — load new Google fonts (Archivo Black / Space Grotesk), drop Fraunces.
- `src/routes/index.tsx` — new asymmetric layout with statement column + two product cells; remove gold border treatments and boxed Forge buttons.
- `src/routes/information.tsx` (and the shared `PageShell`), `contact.tsx`, `privacy.tsx` — restyle headings to block caps, swap accent colors.

No new components, no new routes, no behavior changes.

## Open choice

One thing worth confirming before I build: background tone.

- A. Bone white `oklch(0.94 0.01 240)` — gallery / editorial
- B. Pale ice blue `oklch(0.92 0.03 230)` — colder, more "Frostblood"
- C. Warm off-white `oklch(0.95 0.015 90)` — softer, fashion-editorial

I'll default to **B (pale ice)** unless you say otherwise when approving.
