# AquaChem

Pool water chemistry advisor. Enter your test kit readings and pool volume — get per-chemical dosing recommendations, action badges, and plain-language explanations. A second page catalogs every chemical with formulas, alt names, descriptions, and an interactive "effects of adding" calculator.

## Structure

pnpm + Turborepo monorepo.

### Apps

- **`apps/web`** — Next.js 16 web app (configured for static export).
  - `/` — Advisor. Water test inputs → live dosing recommendations from `@repo/chemistry`.
  - `/learn` — Reference catalog. Categories of pool chemicals with descriptions, formulas, and a live per-entry effects calculator.

### Packages

- **`@repo/chemistry`** — pool chemistry engine. Exposes `getAdviceBundle`, LSI, default targets, and chemical / dosing types. Vitest tested.
- **`@repo/learn`** — reference content: categories of chemicals with descriptions, alt names, formulas, and dosing specs.
- **`@repo/unitconv`** — unit conversion helpers (mass, volume, flow rate). Vitest tested.
- **`@repo/ui`** — stub shared component library.
- **`@repo/eslint-config`, `@repo/typescript-config`** — shared configs.

## Development

```sh
pnpm install
pnpm dev                  # turbo dev across the workspace
pnpm --filter web dev     # just the web app
```

## Build

```sh
pnpm --filter web build                 # static export to apps/web/out/
pnpm --filter @repo/chemistry test      # chemistry tests
pnpm --filter @repo/unitconv test       # unitconv tests
pnpm check-types                        # workspace-wide tsc
```

The web app uses `output: "export"` in `next.config.ts`, so `build` emits a pure static bundle deployable to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.) — no Node server required.

## License

ISC.
