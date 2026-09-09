# Spacing audit — 9 September 2026

The main issue was fixed-height space around short text, compounded by benchmark metadata appearing before results on mobile. Adding decoration would not improve the reading flow. This revision uses a denser shared grid, content-aware minimum heights, and earlier access to evidence.

Measurements below compare the first scroll-led release (`2549d9f`) with the spacing refinement. Both were measured after hydration with reduced motion enabled so animation timing did not affect the comparison.

| Area | Before | After |
| --- | --- | --- |
| Hero, 1440×900 | 487px | 433px |
| Hero, 2406×1347 | 609px | 545px |
| Hero, 375×812 | 439px | 391px |
| Ordinary runtime chapter, 1440×900 | 468px | 324px |
| Ordinary runtime chapter, 2406×1347 | 576px | 352px |
| Entire runtime, 1440×900 | 2645px | 2261px, 15% shorter |
| Entire runtime, 2406×1347 | 3185px | 2373px, 26% shorter |
| Desktop benchmark section | 805px | 736px |
| First benchmark result, 375px | 518px into the section | 282px into the section |
| Footer, 1440×900 | 376px | 344px |

## Approaches applied

1. **Size reading steps around their content.** Ordinary desktop chapters use a bounded 36svh minimum instead of 52svh. Description text increases from 14px to 16px. All sections can grow when text is enlarged.
2. **Keep the illustration aligned with reading.** The activation line derives from the sticky figure's height. A ResizeObserver measures that figure, and the last chapter reserves its height plus 16px, allowing the final illustration to remain fully visible when reached by an anchor.
3. **Use one consistent grid.** Runtime and Benchmarks share a 5/7 desktop split. The footer uses all twelve columns instead of leaving column nine unused. The 1280px maximum width remains appropriate for readable typography and a fully visible illustration.
4. **Bring proof forward.** On mobile, benchmark results come before the run record. On larger screens, the record follows its introduction directly in the left column. Metric rows use tighter spacing while disclosure controls retain their 44px minimum height.
5. **Remove repeated instructions and oversized padding.** Inline layouts do not need a separate scroll cue. The mobile runtime introduction, hero, and footer have smaller vertical spacing.

## Checks

The refined hero and footer fit 320, 375, 1440, and 2406px widths, including doubled HTML text on narrow screens. Runtime progression, anchors, final-scene visibility, resizing, and enlarged descriptions pass at 1024×768, 1440×900, and 2406×1347. Height measurements stabilize without ResizeObserver errors. WebKit checks confirm the new benchmark order and flexible metadata columns at 320/375px with both 200% root text and doubled HTML text/line heights, with all scopes expanded. See [release checks](release-checks.md) for browser, fallback, accessibility, and deployment validation.

## Screenshot follow-up

The next screenshot review identified excess space under “Pinned revisions. Preserved receipts.” The right-hand results determined the grid's total height, so reducing only the left column's padding could not resolve it. This follow-up reduces metric type, row padding, and scale height from 768px upward. Mobile results retain their larger reading size. Disclosure controls still have a 44px minimum height, and rows can expand with their content.

| Area | Previous release (`8bf772e`) | Follow-up |
| --- | --- | --- |
| Benchmark section, 1440px and 2406px | 736px | 538px, 27% shorter |
| Space below the final run-record line, 1440px and 2406px | 222px | 25px |
| Benchmark section, 768px | 666px | 514px |

These rounded measurements use the optimized Chromium build with reduced motion, loaded fonts, and closed disclosures. Opening the disclosures intentionally grows the section.

The cut numeral edges had two causes: staggered digits remained partly hidden when the animation paused offscreen, and tight tracking extended glyph ink past the mask even after the animation finished. Each complete value and suffix now moves together through a small, unmasked lift at full opacity. Footer navigation uses nonwrapping links inside its wrapping flex row, keeping “GitHub” and its arrow together.

## Wide, short viewport follow-up

The next screenshot reproduced at 1360×545. Below 768px viewport height, the runtime uses five inline illustrations. Its desktop columns still gave each SVG the full right-column width, creating a 583px row beside 200px of top-aligned copy.

Wide inline chapters now center their copy beside the artwork. The SVG retains its complete viewBox and aspect ratio within a viewport-aware display-height cap; its paper background and column border still fill the row. Descriptions use 16px type, matching the pinned layout. Enlarged text can grow the row naturally. Mobile stacking and the existing pinned sequence are unchanged.

| Measurement | Before | After |
| --- | --- | --- |
| Semantic chapter, 1360×545 | 583px | 460px |
| Space below its description, 1360×545 | 415px | 159px |
| Semantic chapter, 1440×700 | 589px | 460px |

Measurements use loaded fonts on the optimized Chromium build. At 1360×545 the anchored chapter occupies y=76–536px, keeping the entire illustration and its controls visible below the header. At very short 1280×390, rows reduce to 420px and remain in normal scroll flow. All five chapters select correctly and Pause, Play, and Replay work at these three viewport sizes, with 44px control targets and no page errors or horizontal overflow.

## Final static product treatment

The later art-direction revision replaces those paper drawings and their animation controls with a single consistent workspace example. At 1360×545, the resulting inline row measures 443px; the text remains centered. At 1440×900, the full runtime measures 2114px and its shared figure holds the same 443px height across all five states. Inspector panels reserve their natural height on desktop, avoiding shifts when scrolling between chapters. Below a 440px figure content width, inactive panels collapse and later chapters show only their compact record instead of repeating the full browser. Text-enlargement checks caught and fixed a narrow field label overlapping its value column.

These measurements supersede the earlier paper-illustration dimensions above. The hero's glyph field is also static; no repeated drawing loop remains.
