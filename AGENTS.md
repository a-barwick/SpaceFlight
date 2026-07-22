# SpaceFlight

SpaceFlight is a curated, image-led historical archive of the companies, vehicles, and missions shaping modern commercial spaceflight.

## Information architecture

- Company → Vehicle → Mission
- `mission` is the generic internal term; public copy uses the historically accurate term (flight, attempt, expedition, and so on).
- Repository-backed structured content lives in `src/lib/content`; presentation code must not contain historical records.

## Content and citations

- Explain historical significance concisely and distinguish verified outcomes, company claims, and future ambitions.
- Do not invent facts. Clearly label fixture copy and intentional media placeholders.
- Sources and citations are first-class content. Prefer primary sources and attach citation references to claims.
- Preserve source titles, publishers, URLs, and access dates.

## Commands

- `pnpm dev` — local development server
- `pnpm format` / `pnpm format:check` — format or check formatting
- `pnpm lint` — ESLint
- `pnpm check` — Svelte and TypeScript checks
- `pnpm test:unit` — Vitest
- `pnpm test:e2e` — Playwright
- `pnpm build` — static production build
- `pnpm validate` — formatting, lint, checks, unit tests, and build

## Validation requirements

Run formatting, linting, Svelte checks, unit tests, Playwright tests, and a production build. Inspect changed experiences at desktop and mobile widths, including keyboard navigation, contrast, landmarks, and reduced-motion behavior.

## Scope exclusions

No authentication, database, CMS, live APIs, accounts, runtime AI, 3D rendering, launch-tracker behavior, generalized plugin system, or speculative infrastructure. Build one strong reusable archival pattern before adding breadth.
