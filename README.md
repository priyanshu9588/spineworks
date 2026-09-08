# Spine

A semantic web runtime for agents. This is the Spine landing page, with interactive runtime illustrations and scoped benchmark results.

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

The page includes keyboard-accessible runtime tabs, illustration pause/replay controls, reduced-motion support, native benchmark disclosures, and a readable page before JavaScript loads.

## Deployment

The `spineworks` Vercel project serves the production site. Deploy the current `main` branch with `vercel --prod`. Automatic Git deployments require a GitHub login connection in the Vercel account. Local reference screenshots are excluded from version control and deployment.

The original landing-page history is retained from https://github.com/ronishrohan/spine-site.
