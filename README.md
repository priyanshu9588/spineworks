# Spine

A semantic web runtime for agents. This is the Spine landing page, with a scroll-led runtime narrative, static product examples, and scoped benchmark results.

- Website: https://spineworks.vercel.app
- Repository: https://github.com/priyanshu9588/spineworks

## Development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The site uses Next.js 16, React 19, Tailwind CSS 4, Motion, and locally served Commit Mono fonts.

## Validation

```sh
npm run lint
npm run build
npm run start
```

The page includes five runtime chapters following one illustrative workspace through semantic reading, verified actions, session continuity, capabilities, and changed state. A static browser and inspector advance with the desktop scroll sequence. Numbered anchors support keyboard navigation; small or short windows keep examples in the document flow. The intro wordmark dissolves in place while its backdrop lifts away.

Runtime examples and the hero's ASCII field are static. Mock controls are part of a described image, not interactive form elements. The inspector reserves its natural content height across states, and pinning falls back to inline when the complete frame cannot fit below the header. Content, product views, and native benchmark disclosures remain readable without JavaScript. A bounded font wait prevents stalled font requests from holding the intro open.

The [artwork prompts](docs/artwork-prompts.md) provide one optional ChatGPT image prompt and a refinement prompt. No generated asset is required to render the current site.

See [release checks](docs/release-checks.md) for the launch test matrix and measured results.
The [spacing audit](docs/spacing-audit.md) documents the layout findings, before/after measurements, and refinements.

## Deployment

The `spineworks` Vercel project serves the production site. Deploy the current `main` branch with `vercel --prod`. Automatic Git deployments require a GitHub login connection in the Vercel account. Local reference screenshots are excluded from version control and deployment.

The original landing-page history is retained from https://github.com/ronishrohan/spine-site.
