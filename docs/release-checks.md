# Release checks — 9 September 2026

Production: https://spineworks.vercel.app

The current revision replaces the decorative paper drawings with static HTML product views. One illustrative Atlas workspace connects semantic reading, verified actions, session continuity, capability state, and deltas. The green palette, scroll-led chapters, intro dissolve, and scoped benchmark evidence remain. Local checks use the optimized production server.

## Static product views

- Runtime figures have no animation, perspective tilt, moving traces, playback controls, or focusable mock form controls. The hero's ASCII field is static and redraws only on resize.
- All five inspector panels reserve a common natural height. The active state changes instantly on scroll. Pinning also checks the actual figure and header dimensions, so enlarged content falls back to normal flow when it cannot fit.
- Wide inline rows are 443px tall at 1360×545, with centered copy. The pinned figure stays 443px tall across all five states at 1024×768 and 1440×900. On phones, the full browser appears once; later chapters show the compact records from the same example.
- Production build, TypeScript, ESLint, and diff checks pass. Chromium verifies all five states forward and backward at those three desktop sizes, including exact example descriptions, a single visible inspector, constant frame height, no old artwork, no artwork animations or mock controls in the tab order, and an unchanged hero field after a timed observation. Benchmark values remain intact. No page errors or horizontal overflow occur.
- All 12 WebKit cases pass across narrow and desktop layouts, reduced motion, five text-enlargement cases, and JavaScript disabled. A field label overlapping its value at 200% text was fixed and the six affected narrow cases repeated. Mobile examples now measure 685/343/370/376/376px; later states no longer reserve unused height. Every scene has the correct state and description, no artwork animation or focusable mock control, and no painted text clipping or page overflow.
- Chromium keyboard checks activate all five native step links with visible focus outlines and a fully visible figure. At 1024×768, increasing root text to 200% switches from one pinned view to five inline views; restoring text size switches back without errors. Secondary text contrast is at least 4.5:1 on the backgrounds where it appears.
- [Artwork prompts](artwork-prompts.md) contain one optional ChatGPT generation prompt and a refinement prompt for the same supporting image. No raster assets were generated or inserted during this revision.

The sections below record earlier revisions and their verification. They are historical results, including checks for animation controls that the static revision removes.

## Runtime whitespace follow-up

A later screenshot exposed excessive blank space in the wide, short-window layout. Inline chapter copy now centers beside a bounded, uncropped illustration; the paper column stretches with enlarged text. At 1360×545 and 1440×700, each normal row is 460px instead of 583–589px. See the [spacing audit](spacing-audit.md) for measurements and the cause.

Production build, TypeScript, ESLint, and diff checks pass. Chromium verifies all five chapter anchors and Pause/Play/Replay controls at 1360×545, 1440×700, and 1280×390. The first two sizes show the complete artwork and its controls together; the very short window retains normal document scrolling. No horizontal overflow or page errors occur.

All 12 focused WebKit scenarios pass: short-wide layouts at 1360×545, 1440×700, and 1024×767; the 1024×768 pinned layout and live switching in both directions; 320/375px mobile; 200% root sizing and doubled HTML text; and two no-JavaScript cases. All five native chapter anchors work, drawings remain uncropped, text and artwork stay within their panels, and normal-motion controls remain usable. Enlarged wide text grows rows naturally to 558–566px. No painted clipping, overflow, or browser errors occur. Actual wide and mobile screenshots were visually reviewed.

## Benchmark screenshot follow-up validation

The follow-up keeps complete benchmark values visible throughout their animation, compacts desktop metric rows, and prevents footer labels from breaking within a word. Desktop benchmarks measure 538px instead of 736px; space beneath the run record is 25px instead of 222px.

- Production build, TypeScript, ESLint, and diff checks pass.
- Chromium checks at 320, 375, 768, 1024, and 1440px confirm that every complete value stays readable during entry, an offscreen pause, immediate reentry, and the settled state. No clipping, horizontal overflow, or page errors occurred.
- Ten WebKit scenarios cover desktop widths of 768/1024/1440/2406, 320/375px with 200% root sizing and doubled HTML text, and JavaScript disabled at 320/1440px. Values and expanded scopes remain contained; normal and reduced motion both render correctly. Native keyboard disclosures retain their 44px minimum targets. Benchmark figures, denominators, date, and caveat remain unchanged.
- Seventeen focused footer scenarios across Chromium and WebKit verify whole-link wrapping at narrow, tablet, and desktop widths, both text-enlargement modes, and a deliberately constrained 150px navigation column. Labels and arrows stay together, focus styles remain visible, and hit areas stay at least 44px tall.
- Actual production-build screenshots were reviewed at desktop and mobile sizes. A Chromium element screenshot taller than the viewport included displaced fixed navigation; the normal viewport screenshot was checked separately and renders correctly.

The follow-up app commit is `505d5d0`, published as `dpl_BF1Entf5gYmpjhZbvAXr2JBBQyGa` and assigned to `spineworks.vercel.app`. Vercel's fresh installation, TypeScript check, and production build pass; dependency audit reports zero vulnerabilities. Public checks at 1440×900 and 375×812 with normal motion confirm the new numeral markup, 538px desktop section, whole footer links, working disclosures, and no overflow or page errors. At 320×640 with JavaScript disabled, all complete values and native disclosures remain usable; the expected blocked script preload was excluded from asset-failure checks. Public desktop and mobile screenshots were inspected, and the live benchmark section was opened for review.

The table below records the earlier broader audit. Those checks were not all rerun for this bounded follow-up; its verification is listed above.

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

## Previous public mobile audit (`8bf772e`)

Lighthouse 13.4.1 tested the public HTTPS deployment of `8bf772e` with default simulated mobile settings. No run warnings were reported.

| Metric | Result |
| --- | --- |
| Performance | 91 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |
| First contentful paint | 2.0 seconds |
| Largest contentful paint | 3.1 seconds |
| Total blocking time | 20 milliseconds |
| Cumulative layout shift | 0.013 |
| Speed index | 3.8 seconds |

These are synthetic measurements of the release before the screenshot follow-up, not field data or a guarantee for every device. The intentional intro contributes to render delay, and its animated rails contribute a small layout-shift score. The earlier `9e5dc30` release scored 93/100/100/100 with 3.0s LCP, 50ms blocking time, and zero measured CLS. Lighthouse was not repeated for the bounded benchmark and footer layout changes.

## Previous public deployment verification (`8bf772e`)

That release used deployment `dpl_9h1hbJirGrtoqnYH6L8hZ8LbfRae`, assigned to `spineworks.vercel.app`. Vercel completed a fresh installation and production build with zero reported dependency vulnerabilities.

- Desktop 1440×900, mobile 375×812 with normal motion, and 320×640 with reduced motion pass without page errors, failed asset requests, or horizontal overflow.
- All five desktop scenes advance correctly; mobile shows five inline illustrations. All three benchmark disclosures open. The run record follows the results in document order.
- The no-JavaScript public page paints five illustrations and keeps native disclosures usable.
- Homepage, icon, Open Graph image, robots, and sitemap return HTTP 200 with their expected content types; an unknown route returns 404.

## Deployment operation

The separate public repository is `priyanshu9588/spineworks`. Vercel production is published with the authenticated CLI and assigned to `spineworks.vercel.app`. Automatic Git-triggered deployments require a GitHub login connection in the Vercel account; direct CLI deployments work. Reference screenshots and local test artifacts are excluded from Git and deployment.
