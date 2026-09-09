# Spine artwork prompts

These are prompts for you to run in ChatGPT. This deliverable contains prompts only; no new image has been generated for it. The plan is one static supporting image, with an optional refinement of that same image.

## Placement and delivery

Use the selected image once in the Runtime introduction, beside the introduction on desktop and beneath it on mobile. Keep the readable product example and all explanations in HTML. The image should support that example without replacing it or appearing beside every primitive.

- Canvas: **1536 × 1024 px, landscape 3:2**. Request that size; preserve the composition if ChatGPT returns a different resolution.
- Display: up to **560 px wide**, preserving the full image and its natural aspect ratio. Keep the composition legible around 320 px wide.
- Palette: background **#f6f6f8**, deep green **#075e56**, active green **#0b7468**, pale mint **#d4ebe6**.
- Keep the downloaded original. Export the selected image to **public/illustrations/runtime-semantics.webp** in sRGB, preserving fine edges. Start around WebP quality 88 and inspect at the intended display size.
- That path is a proposed destination. It is not an existing asset and should only be referenced in code after the real file has been delivered and inspected.
- Keep headings, captions, control names, values, and semantic records in HTML. The bitmap contains no text. Use a short HTML caption such as “The page, understood as names, roles, and state.”

## Prompt 1 — Generate the single supporting image

Paste this into ChatGPT's image generation conversation.

~~~text
Use case: stylized-concept
Asset type: one static supporting illustration for Spine, a browser runtime for AI agents.

Create a carefully art-directed technical product illustration showing a browser interface being understood as structured semantic records. The image should feel precise, quiet, and made with the same care as a serious developer tool.

Canvas and backdrop: landscape 3:2, target 1536 × 1024 pixels. Use a flat, uninterrupted #f6f6f8 background that reaches every edge. Leave approximately 10% clear space around the complete composition. Keep both main objects fully visible.

Subject and composition: one compact browser surface on the left, one structured record surface on the right, with a clear left-to-right reading order. Give the browser slightly more visual weight. Align both surfaces on the same horizontal axis. Use a front-facing, nearly orthographic view with crisp, straight geometry.

The browser has a restrained top chrome bar and exactly three recognizable interface regions: a compact heading region, a rectangular input field, and one solid green action button. Leave their text areas empty. The record surface has exactly three neatly aligned rows. Each row has a small geometric marker, an empty area reserved for its label, and a small state indicator. Avoid paragraph-like placeholder stripes.

Connect each of the three browser regions to its corresponding record row with one thin, carefully routed connector. Preserve the same top-to-bottom order. The three connections must be distinct and traceable, with no crossings or unexplained branches. Emphasize the input field and its matching record using #0b7468; keep the other relationships quieter. The visual should communicate one interface, three meaningful elements, and their structured counterparts.

Style and materials: restrained editorial product rendering with smooth matte surfaces, narrow light-catching edges, and very shallow depth. Use subtle contact shadows only where they clarify separation. Refine spacing, edge consistency, proportions, and alignment. The quality should come from those details. Keep the silhouette and connections clear when the entire image is displayed at 320 pixels wide.

Color palette: #f6f6f8 for the background and light surfaces; #075e56 for structural edges and the darkest details; #0b7468 for the selected relationship and action button; #d4ebe6 for restrained surface tint and selected-state fill. Use small amounts of white for light-catching edges. Keep green accents selective.

Text: none. Do not render words, letters, numbers, code, logos, watermarks, or imitation writing anywhere. The website will supply all textual meaning in HTML outside the image.

Exclude: warped or folded paper, botanical forms, sketch marks, engraving, decorative crosshatching, floating blobs, mascots, gears, brains, circuit-board decoration, glass orbs, oversized bevels, glossy plastic, neon, bloom, colored background gradients, particles, extra windows, unrelated objects, and performance or benchmark claims.

Deliver one finished static image. The complete browser-to-record relationship must be understandable in a still frame.
~~~

## Prompt 2 — Refine the chosen result

Use this only if the first image has the right composition and needs a more cohesive finish. Attach that result as **Image 1: edit target**. You may also attach a current Spine screenshot as **Image 2: palette and finish reference**.

~~~text
Use case: precise-object-edit
Asset type: final polish of the existing static Spine illustration.

Image 1 is the edit target. If Image 2 is present, use it only as a reference for Spine's palette, visual restraint, and contrast.

Change only the color and surface finish of Image 1 so it sits naturally on Spine's landing page. Match the flat edge-to-edge background to #f6f6f8. Use #075e56 for dark structural details, #0b7468 for the existing selected relationship, and #d4ebe6 for pale surface tint. Make the surfaces matte and the existing edges crisp. Reduce any haze, decorative texture, excessive shine, or heavy shadow while preserving enough contrast to see the connections at a small display size.

Preserve exactly: the landscape 3:2 composition, framing, clear outer margins, browser and record surface positions, their proportions, all three interface regions, all three record rows, the selected relationship, and the three one-to-one connectors in their current routes. Keep every object fully visible. Do not add, remove, rearrange, or redesign the interface elements.

Keep the image completely free of text, numbers, code, logos, watermarks, and imitation writing. Keep the flat background and shallow depth. Add no paper effects, botanical forms, gradients, glow, particles, decorative objects, or extra panels. Return one refined static image of the same composition.
~~~

## Reference rationale

- [Supermemory](https://supermemory.ai/) pairs restrained page structure with a literal architecture diagram and one expressive image. Its [product page](https://supermemory.ai/product/) explains the system through concrete inputs and outputs.
- [Parallel](https://parallel.ai/) uses consistent, readable interface scenes to explain product behavior. Borrow the discipline of a clear example and coherent surfaces.
- [Browserbase](https://www.browserbase.com/) gives its brand imagery a distinct role while its product examples show browser operations. For Spine, keep the single supporting image subordinate to the product explanation.

These references inform hierarchy and clarity; their artwork, logos, and compositions should not be copied.
