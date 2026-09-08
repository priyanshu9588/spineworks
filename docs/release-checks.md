# Release checks — 9 September 2026

Production: https://spineworks.vercel.app

The current revision replaces runtime tabs with five scroll-led chapters, refines the native SVG artwork, dissolves the intro wordmark in place, and improves the hero's proportions. A further [spacing audit](spacing-audit.md) reduces unused chapter space and brings benchmark results forward. Local checks used the optimized production server. Issues discovered during review were corrected and their affected checks repeated.

| # | Area | Checks and results |
| --- | --- | --- |
| 1 | Build | Next.js production build, TypeScript, ESLint, and diff checks pass. Transitive dependency updates resolve the reported js-yaml and sharp advisories; the full audit and production-only audit report zero vulnerabilities. |
| 2 | Responsive layout | 320×640, 375×812, 768×1024, 1024×768, 1440×900, and 2406×1347 render without horizontal overflow. Hero copy stays inside its frame. |
| 3 | Short windows and zoom | 844×390 and 1440×700 show inline artwork. Wide inline layouts pair each chapter with its own figure. Sticky mode begins at 1024px wide and 768px tall; it fits normal and 200% root text, with a worst measured bottom edge of 747.2px. Zoom-equivalent 720×450 and 1203×450 also unpin correctly. |
| 4 | Enlarged text | 320px and 375px were checked with both 200% root sizing and all HTML text/line heights doubled, with all three scopes expanded. A clipped footer heading was fixed; the rebuilt heading fits at 64px. The relocated benchmark record now uses a flexible label column: narrow value columns remain 125/158px wide instead of collapsing to 0/29px. Illustration captions wrap beside their controls. |
| 5 | Intro | Centered letters move 0px during the fade/blur dissolve; the header wordmark has no transform. The backdrop still lifts. Scrolling remains locked until the exit finishes, then restores. Sample completion times: 2.50s normal, 0.13s reduced motion, 3.50s with four deliberately stalled font requests. |
| 6 | Scroll narrative | All five scenes select correctly forward and backward. Fifteen rapid chapter jumps settle on the right scene. Resizing changes between one sticky figure and five inline figures. The compact final chapter reserves the measured figure height, and its anchored illustration remains fully visible. The sticky stage releases before benchmarks. Height measurements stabilize without observer errors; scroll updates never move keyboard focus. |
| 7 | Motion controls | Pause persists across desktop scenes. Play and Replay resume correctly. Cold and live reduced-motion preferences stop traces, paper reveals, and flow markers; changing the preference back restores controls. Mobile touch controls and offscreen suspension pass. |
| 8 | Keyboard and accessible content | Skip to content becomes visible and focuses main. All five numbered anchors focus their matching article with visible outlines. Enter/Space toggle benchmark disclosures. The five SVGs expose matching titles and meaningful descriptions. |
| 9 | Failure fallbacks | JavaScript disabled, all six script requests blocked, four font requests blocked, and fonts deliberately stalled were checked. The first two modes paint five real illustrations, retain visible navigation/copy, and keep native disclosures usable. |
| 10 | Benchmark accuracy | 98.81% (58,566/59,271), 95.16% (1,829/1,922), and 40/40 remain intact. Scales use raw counts. Scope, 26 August 2026 run date, denominator context, and compatibility caveat are preserved. |
| 11 | Browser engines | Chromium and WebKit 26.6 pass the relevant desktop, touch, scroll, and reduced-motion cases without JavaScript errors. Firefox could not launch on this host in the earlier review and remains unverified. |
| 12 | Local performance and network | Before the spacing refinement, Chrome's unthrottled local trace measured LCP 2.44s and CLS 0.02. The retained intro contributes to render delay; the animated rails account for most measured shift. All script, font, and stylesheet requests succeed. These local figures are not mobile or field measurements. |

## Previous public mobile audit

The following Lighthouse 13.4.1 results describe the earlier public release (`9e5dc30`), before the current scroll/hero revision. They are retained as a baseline, not measurements of the current revision.

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

## Deployment operation

The separate public repository is `priyanshu9588/spineworks`. Vercel production is published with the authenticated CLI and assigned to `spineworks.vercel.app`. Automatic Git-triggered deployments require a GitHub login connection in the Vercel account; direct CLI deployments work. Reference screenshots and local test artifacts are excluded from Git and deployment.
