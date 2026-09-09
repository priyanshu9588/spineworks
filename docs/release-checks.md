# Release checks — 9 September 2026

Production: https://spineworks.vercel.app

The current working revision gives the architectural SVG illustration a concrete subject: a Contact page, its Continue button, and the Delivery step that follows. The exposed spine connects the visible control or field to named facts. Inline layouts show the complete object once, followed by four compact details; narrow screens place the first scene's name, role, and state in readable HTML below the artwork. The green palette, intro dissolve, stationary ASCII hero, and scoped benchmark evidence remain.

## Current Contact / Continue illustrations

The current app revision is `06c8d28`. Its Contact / Continue subject passed seven targeted WebKit 26.6 scenarios against the optimized local production server at `http://127.0.0.1:3000`; the subsequent header adjustment passed the focused checks below. The production build, TypeScript, and lint also pass. The earlier 12-case matrix below was not repeated for these bounded changes.

| # | Viewport | Scenario and result |
| --- | --- | --- |
| 1 | 1440×900 | All five full scenes, native keyboard links, forward/reverse scroll selection, and the complete final figure pass. Resizing to 375px and back restores the appropriate layouts. At 1440×768, 200% root text switches to inline figures and restoring text restores pinning. |
| 2 | 1024×768 | All five full scenes, native keyboard links, forward/reverse selection, and complete final-figure visibility pass. |
| 3 | 320×812 | The full semantic illustration and four new detail SVGs remain contained. All five native anchors pass; the first scene's name, role, and state values are readable at 13px. |
| 4 | 375×812 | All five native anchors and compact illustrations pass. The first figure is 377.2px high; each later detail is 231.6px high. |
| 5 | 320×812, 200% root text | Semantic fact values grow to 26px and wrap into a vertical list. All five anchors, artwork bounds, captions, and chapter text pass. A viewport capture shows the complete first figure between 113.8px and 794.5px, below the 105px header. |
| 6 | 320×812, JavaScript disabled | All five illustrations, the readable semantic facts, and native anchors render correctly. |
| 7 | 1440×900, JavaScript disabled | One full illustration followed by four compact details renders in normal flow; all five native anchors pass. |

- Each scene was checked against its actual source and facts: Contact has an enabled Continue button; the action retains that source and reports observed Delivery; the session retains `alex@example.com`; an empty address makes Continue unavailable; filling `12 Cedar Lane` changes Continue from disabled to enabled. Visible compact details and accessible descriptions match this sequence.
- Every full SVG has seven independent definitions. All gradient, pattern, and mask references resolve within their own SVG, including hidden full illustrations. No duplicate IDs, missing references, or cross-figure references occurred. Visible SVG text, HTML facts, and captions remain contained; there is no horizontal page overflow, fake focusable control, SMIL animation, or running artwork animation.
- WebKit reports no page errors, console errors, or unexpected asset failures. The full final figure, including navigation, spans 53.0–724.9px at 1440×900 and 53.0–588.8px at 1024×768. All five desktop scenes, all four mobile details, the mobile semantic facts, and the enlarged-text viewport were visually reviewed.
- Chromium production checks independently pass ten forward/backward native keyboard selections at each desktop size, with matching scenes, a complete final figure, and no artwork animation, errors, or overflow. Additional checks at 390×844, 320×812 with 200% root text, and 1360×545 confirm readable mobile facts and contained SVG text. All five full scenes and the mobile semantic illustration were visually reviewed in Chromium.

The enlarged-text viewport capture also exposed a header wordmark/GitHub collision. The header now grows with its contents and wraps complete links. Five focused WebKit checks pass: 320px with 200% root text both with and without JavaScript, 768px and 1024px with 200% root text, and normal 1440px. Rendered links and painted text stay within the header without intersecting, and the page has no horizontal overflow or browser errors. The enlarged mobile header is 105px high with JavaScript and 109px without it; the enlarged tablet/desktop header is 113px high. At 1024×768 with 200% root text, the last native anchor focuses its article and places the complete figure at 113.0–690.0px, directly below the header. Normal 1440×900 retains 53.0–724.9px. Chromium independently passes the corresponding enlarged header checks and normal 390px/1440px checks. Enlarged mobile and tablet/desktop header captures were visually reviewed.

Local reports: `/private/tmp/spine-browser-qa/architecture-meaning-webkit-report.json` and `/private/tmp/spine-browser-qa/architecture-header-webkit-report.json`. Screenshots use the `architecture-meaning-` and `architecture-header-` prefixes in the same directory. These local artifacts are excluded from the repository and deployment.

## Historical: carved architectural subject (`d6ea4f2`)

This earlier local revision used an abstract carved page structure. Its functional results below precede the concrete Contact / Continue refinement.

Validation used the optimized local production server at `http://127.0.0.1:3000`. All 12 WebKit 26.6 functional scenarios passed. The carved-subject replacement and native-link scrolling adjustment then passed five targeted production rechecks; the broad matrix was not repeated for those bounded changes.

| # | Viewport | Scenario and result |
| --- | --- | --- |
| 1 | 1440×900 | Pinned scenes track all five chapters forward and backward. Native keyboard links and the final anchored figure pass. |
| 2 | 1024×768 | Pinned layout, forward/reverse selection, keyboard links, and complete final-figure visibility pass. |
| 3 | 1360×545 | Five inline scenes use one full SVG followed by four detail SVGs; all native anchors pass. |
| 4 | 1440×768 | Root text at 200% changes one pinned figure to five inline figures. Restoring text size restores pinning and complete final-figure visibility. |
| 5 | 320×812 | Narrow layout, all five native anchors, visible SVGs, and wrapping captions pass. |
| 6 | 375×812 | The first illustration measures 322.4px high; each later detail measures 201.6px. All chapter anchors pass. |
| 7 | 768×1024 | Tablet layout remains inline, with the full object followed by four details and working native anchors. |
| 8 | 320×812 | Root font size at 200% preserves readable, contained text and all five visible illustrations. |
| 9 | 375×812 | Every HTML font size and line height doubled from its computed value remains contained. All five anchors pass. |
| 10 | 1440×900 | Doubled HTML text fits the pinned layout; forward/reverse selection and the full final figure pass. |
| 11 | 320×812 | JavaScript disabled still renders all five inline illustrations, unique SVG definitions, and native anchors. |
| 12 | 1440×900 | JavaScript disabled uses the full illustration plus four inline details. All native chapter anchors pass. |

The final pinned chapter uses the reading-line offset rather than reserving an additional full figure height. Native last-anchor measurements, including the navigation beneath the artwork, were:

| Viewport | Figure top–bottom | Last chapter height |
| --- | --- | --- |
| 1440×900 | 53.0–724.9px | 468.0px |
| 1024×768 | 53.0–588.8px | 344.6px |
| 1440×900, doubled HTML text | 105.0–812.1px | 665.0px |

These figure bounds remained unchanged after reverse scrolling and another native last-anchor activation. The sticky top follows the actual header height; the last chapter's scroll margin is the measured reading line minus 1px.

- Every visible SVG and its painted text remain within their frames. Hidden full illustrations are excluded from painted-containment checks, but their definitions and references are still validated. The carved full SVG has eight unique definitions; every gradient, pattern, and mask reference resolves within its own SVG. No duplicate IDs, missing references, or cross-figure references were found.
- Runtime artwork has zero element animations, SMIL animations, playback controls, or focusable mock controls. The hero ASCII text remained identical after a two-second observation. No horizontal page overflow, painted text clipping, hydration errors, JavaScript errors, console errors, or failed asset requests occurred in the functional matrix.
- After replacing the `Aa` surface with the carved structure, targeted checks passed at 1440×900 and 1024×768 across all five full views, 375×812, 320×812 with 200% root text, and 1440×900 without JavaScript. The old subject is absent, the new mask resolves correctly, and the carved artwork was visually reviewed at desktop and narrow sizes.
- The keyboard adjustment also passed on both desktop sizes in WebKit: focused runtime links use immediate scrolling, while focusing header navigation restores `scroll-behavior: smooth`. Chromium production checks separately passed 12 rapid focus-and-Enter chapter jumps at each desktop size, with matching focus, scene selection, and complete figure visibility. Its stationary-hero, benchmark-value, and native benchmark-disclosure checks also passed.

Local reports: `/private/tmp/spine-browser-qa/architecture-production-webkit-report.json` and `/private/tmp/spine-browser-qa/architecture-subject-webkit-report.json`. Screenshots use the `architecture-production-` and `architecture-subject-` prefixes in the same directory. These local artifacts are excluded from the repository and deployment.

## Historical: static product views (`071b71c`)

This earlier revision replaced decorative paper drawings with static HTML product views. One illustrative Atlas workspace connected semantic reading, verified actions, session continuity, capability state, and deltas. The results and deployment below describe that previous revision.

- Runtime figures have no animation, perspective tilt, moving traces, playback controls, or focusable mock form controls. The hero's ASCII field is static and redraws only on resize.
- All five inspector panels reserve a common natural height. The active state changes instantly on scroll. Pinning also checks the actual figure and header dimensions, so enlarged content falls back to normal flow when it cannot fit.
- Wide inline rows are 443px tall at 1360×545, with centered copy. The pinned figure stays 443px tall across all five states at 1024×768 and 1440×900. On phones, the full browser appears once; later chapters show the compact records from the same example.
- Production build, TypeScript, ESLint, and diff checks pass. Chromium verifies all five states forward and backward at those three desktop sizes, including exact example descriptions, a single visible inspector, constant frame height, no old artwork, no artwork animations or mock controls in the tab order, and an unchanged hero field after a timed observation. Benchmark values remain intact. No page errors or horizontal overflow occur.
- All 12 WebKit cases pass across narrow and desktop layouts, reduced motion, five text-enlargement cases, and JavaScript disabled. A field label overlapping its value at 200% text was fixed and the six affected narrow cases repeated. Mobile examples now measure 685/343/370/376/376px; later states no longer reserve unused height. Every scene has the correct state and description, no artwork animation or focusable mock control, and no painted text clipping or page overflow.
- Chromium keyboard checks activate all five native step links with visible focus outlines and a fully visible figure. At 1024×768, increasing root text to 200% switches from one pinned view to five inline views; restoring text size switches back without errors. Secondary text contrast is at least 4.5:1 on the backgrounds where it appears.
- [Artwork prompts](artwork-prompts.md) contain one optional ChatGPT generation prompt and a refinement prompt for the same supporting image. No raster assets were generated or inserted during this revision.

App commit `071b71c` is published as `dpl_CRkc6cVgHobTWe39MkX974dxyQxg`, assigned to `spineworks.vercel.app`. Vercel's installation, TypeScript check, and production build pass; dependency audit reports zero vulnerabilities. Public checks at 1360×545 and 375×812 with normal motion, plus 1440×900 without JavaScript, confirm the static product views, stationary hero when JavaScript is enabled, unchanged benchmark figures, correct descriptions, no old drawings or playback controls, and no page errors, unexpected asset failures, or horizontal overflow. Public desktop and mobile screenshots were visually reviewed. The existing browser preview was reloaded to show the new release.

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
