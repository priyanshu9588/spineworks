# Launch checks — 9 September 2026

Production: https://spineworks.vercel.app

The release was checked across 12 areas. Failures found during testing were fixed and the affected checks were repeated on the rebuilt site. Local browser tests used the optimized production server; the public Vercel deployment was checked separately.

| # | Area | Checks and results |
| --- | --- | --- |
| 1 | Production build | Next.js build, TypeScript, ESLint, and diff checks passed. Vercel also completed a fresh `npm ci` and production build. Full dependency audit: zero reported vulnerabilities. |
| 2 | Responsive layout | 320, 375, 768, 1024, 1440, and 1920px viewports passed without horizontal overflow. Benchmarks stack beneath their introduction on phones and remain in the right column on desktop. |
| 3 | Enlarged text | All six widths were repeated at 200% text sizing, with every benchmark scope expanded. No benchmark text clipping or overflow. |
| 4 | Keyboard navigation | Arrow Up/Down, Home/End, wrapping, roving tab focus, visible focus indicators, and Enter/Space disclosures passed. The skip link moves focus to main content. |
| 5 | Accessible presentation | All five illustrations resolve their accessible titles/descriptions. Tab/panel labels match. Small-label contrast was improved; the deployed Lighthouse accessibility audit reports 100. |
| 6 | Intro and hydration | Fresh normal and reduced-motion loads completed without hydration/page errors. The normal intro restores scrolling; reduced motion removes the wordmark flight. Content and navigation remain readable before JavaScript runs. |
| 7 | Motion controls | Pause, Play, Replay, pointer tilt/reset, pause persistence across scenes, offscreen suspension, live reduced-motion changes, and fourteen rapid tab changes passed. Both runtime and ASCII hero stop when reduced motion is enabled. |
| 8 | Browser engines | Chromium and WebKit 26.6 passed desktop, reduced-motion, and 375px touch scenarios. Firefox 155 could not launch because the host could not access its temporary profile; Firefox remains unverified. |
| 9 | Failure fallbacks | Disabled JavaScript, blocked script requests, and failed web-font requests were tested. The page remains readable and scrollable, the wordmark/navigation remain visible, and native benchmark disclosures still work. |
| 10 | Benchmark accuracy | Verified 98.81% (58,566/59,271), 95.16% (1,829/1,922), and 40/40. Scale proportions use raw counts. Scope, run date, denominator context, and compatibility caveat remain intact. |
| 11 | Public routes and sharing | Homepage, favicon, Open Graph image, robots, and sitemap return HTTP 200 with appropriate types; an unknown route returns 404. Canonical/share URLs point to the production domain. GitHub links point to the separate public repository. |
| 12 | Deployed smoke and performance | Public desktop, 375px normal-motion, 320px reduced-motion, and no-JavaScript checks passed, with no page errors or failed asset requests in normal operation. All scopes and artwork controls worked. Mobile Lighthouse results below. |

## Measured mobile audit

Lighthouse 13.4.1, navigation audit of the public HTTPS deployment using its default simulated mobile settings:

| Metric | Result |
| --- | --- |
| Performance | 93 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |
| First contentful paint | 1.6 seconds |
| Largest contentful paint | 3.0 seconds |
| Total blocking time | 50 milliseconds |
| Cumulative layout shift | 0 |

These are synthetic launch measurements, not field data or a guarantee for every device. The preserved intro and animated ASCII field contribute to the largest-contentful-paint timing. No Firefox compatibility claim is made.

## Deployment operation

The `main` branch is pushed to the separate `priyanshu9588/spineworks` repository. Vercel production was published with the authenticated CLI and assigned to `spineworks.vercel.app`. Automatic Git-triggered deployments require adding a GitHub login connection in the Vercel account; direct CLI deployments work.
