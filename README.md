# Spine

A semantic web runtime for agents. This is the Spine landing page, with a scroll-led runtime narrative, native ink-and-paper illustrations, and scoped benchmark results.

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

The page includes five runtime chapters with a shared illustration that advances on scroll. Numbered anchors support keyboard navigation; phones and short windows show an illustration with each chapter. The intro wordmark dissolves in place while its backdrop lifts away.

Illustrations include pause/replay controls, follow live reduced-motion preferences, and stop animating offscreen or in hidden tabs. Content, illustrations, and native benchmark disclosures remain readable without JavaScript. A bounded font wait prevents stalled font requests from holding the intro open.

See [release checks](docs/release-checks.md) for the launch test matrix and measured results.
The [spacing audit](docs/spacing-audit.md) documents the layout findings, before/after measurements, and refinements.

## Deployment

The `spineworks` Vercel project serves the production site. Deploy the current `main` branch with `vercel --prod`. Automatic Git deployments require a GitHub login connection in the Vercel account. Local reference screenshots are excluded from version control and deployment.

The original landing-page history is retained from https://github.com/ronishrohan/spine-site.
