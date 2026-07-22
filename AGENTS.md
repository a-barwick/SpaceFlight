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

- `corepack pnpm dev` — local development server
- `corepack pnpm format` / `corepack pnpm format:check` — format or check formatting
- `corepack pnpm lint` — ESLint
- `corepack pnpm check` — Svelte and TypeScript checks
- `corepack pnpm test:unit` — Vitest
- `corepack pnpm test:e2e` — Playwright
- `corepack pnpm build` — static production build
- `corepack pnpm validate` — formatting, lint, checks, unit tests, and build
- `amp orb services ensure` — start the supervised Vite server and print its portal URL in an Amp orb

Fresh Amp orbs run `.agents/setup`; resumed orbs run `.agents/resume`. Use the Corepack-pinned pnpm rather than relying on an arbitrary globally installed pnpm version.

## Validation requirements

Run formatting, linting, Svelte checks, unit tests, Playwright tests, and a production build. Inspect changed experiences at desktop and mobile widths, including keyboard navigation, contrast, landmarks, and reduced-motion behavior.

## Scope exclusions

No authentication, database, CMS, live APIs, accounts, runtime AI, 3D rendering, launch-tracker behavior, generalized plugin system, or speculative infrastructure. Build one strong reusable archival pattern before adding breadth.
