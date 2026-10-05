# Contributor Instructions

Read these files before changing architecture or content:

1. `docs/METHODOLOGY.md`
2. `docs/ARCHITECTURE.md`
3. `docs/CONTENT-MODEL.md`
4. `docs/SOURCES.md`
5. `docs/QUESTION-CATALOG.md`
6. `docs/ROADMAP.md`

## Non-negotiable content rules

- Steelman each worldview before critique.
- Never make a hostile Christian secondary source the sole authority for what another tradition teaches.
- Prefer primary texts, then major thinkers within the tradition, then high-quality academic scholarship for historical/contextual claims.
- Identify internal diversity when it materially changes the answer.
- Keep descriptive material distinct from Christian analysis.
- Reformed Christianity is one of the competing worldview columns, not an invisible neutral judge.
- For non-Christian entries use: **View**, **What it explains well**, **Christian response**, **Pressure point**.
- For Christian entries use: **Christian view**, **What it explains well**, **Strongest objection**, **Christian reply**.
- Do not use numeric worldview scores, red-X/green-check verdict graphics, or caricature labels.
- Cite substantive claims and quotations with stable source identifiers and precise locators where possible.

## Engineering rules

- Preserve static-first architecture.
- Keep theological content out of UI components.
- Define and validate content schemas centrally.
- Avoid a global state library unless a concrete need appears.
- Prefer URL-addressable state for shareable comparisons.
- Keep JavaScript optional for reading core content.
- Build accessible semantic HTML before adding visual complexity.
