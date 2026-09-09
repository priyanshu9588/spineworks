# Spine artwork prompts

These are prompts for you to run in ChatGPT. This deliverable contains prompts only; no raster image has been generated or delivered for it. The site currently uses a complete static SVG illustration. One generated image may optionally replace that primary SVG, with an optional refinement of the same image.

## Placement and delivery

The Runtime introduction spans the full section above the narrative and artwork. Place the selected image beside the first narrative on desktop and beneath that first narrative on mobile, replacing the primary SVG only. Keep the full illustration once; later steps use compact detail views of the same visual system. Keep the primitive names and all explanations in HTML.

- Canvas: **1536 × 1024 px, landscape 3:2**. Request that size; preserve the composition if ChatGPT returns a different resolution.
- Display: up to **720 px wide**, preserving the complete silhouette and the natural aspect ratio. The object should still read around 320 px wide.
- Art palette: dark-pine field **#104d3f**, deeper edges **#093d32**, warm ivory **#ffffed** and **#eeefda**, structural green **#1e6049**, pale mint **#d0eabb**.
- Keep the downloaded original. Export the selected image to **public/illustrations/runtime-semantics.webp** in sRGB, preserving fine edges. Start around WebP quality 88 and inspect at the intended display size.
- That path is a proposed destination. It is not an existing asset and should only be referenced in code after the real file has been delivered and inspected.
- Keep headings, captions, control names, values, and semantic records in HTML. The bitmap contains no text. A possible HTML caption is “The structure beneath the page.”

## Prompt 1 — Generate the single supporting image

Paste this into ChatGPT's image generation conversation.

~~~text
Use case: stylized-concept
Asset type: one static editorial image for Spine, a browser runtime that exposes the meaningful structure beneath webpages.

Create a monumental architectural cutaway of a webpage. A dense ivory surface opens to reveal an elegant mint structural spine inside it. Make this a single memorable sculptural object with the clarity of a technical section drawing and the material presence of a photographed architectural model.

Canvas and backdrop: landscape 3:2, target 1536 × 1024 pixels. Use an uninterrupted dark-pine field, #104d3f, with restrained #093d32 depth toward the outer edges. The entire object is visible, occupying about 70% of the canvas width and 80% of its height. Leave quiet margins around its silhouette.

Subject: one upright rectangular page mass made from a few thin, rigid laminated planes. Carve one broad branching document tree into its ivory face: an off-center vertical trunk with three major branch levels and a few shorter nested forks. Use thick recessed channels, deliberate right-angle turns, unequal branch lengths, and squared terminations. Give the cuts visible dark-green interiors, narrow shadow walls, and fine ivory edge highlights. Leave generous uninterrupted ivory between branches. The surface contains no letters, paragraph stripes, newspaper layout, controls, or enclosing panel frames.

Cutaway: the three main channels continue toward the page's right edge and meet the three ordered branch levels of one slender exposed mint spine. Keep each connection visible and physically attached to the same object. The branching relief inside the page is more intricate; its continuation into the exposed spine is clear and simple. Preserve that continuity so the image reads as a webpage revealing its underlying structure. Use broad architectural cuts with tangible depth rather than thin circuit traces or a collection of separate shapes.

Composition: close, near-orthographic three-quarter view. The broad ivory page mass sits slightly left of center; its revealed mint spine occupies the right foreground. Use a deliberate asymmetry and a strong continuous silhouette. The small number of exposed layers creates depth while the overall form remains simple enough to recognize as a thumbnail.

Materials and rendering: finely finished matte ivory composite, narrow ink-dark cut edges, precise layered thickness, and a softly lit mint structural insert. Use restrained photographic light from the upper left to reveal the geometry. Add a subtle monochrome halftone in the recessed faces and contact shadow, like an exacting editorial print. Keep the broad surfaces calm and the edges sharp. Mint should feel luminous through contrast and material lightness, without glow or bloom.

Palette: #104d3f dark pine with #093d32 at deeper edges, #ffffed and #eeefda warm ivory surfaces, #1e6049 structural green, and #d0eabb pale mint. The visual hierarchy is dark field, large warm ivory mass, selective mint structure.

Text: none. No words, letters, numbers, code, logos, watermarks, imitation writing, or numerical claims. All product language will appear in HTML outside the image.

Exclude: floating component cards, form fields, toolbars, admin dashboards, disconnected windows, diagrams made from rounded UI boxes, paper curls, warped sheets, botanical forms, brains, gears, circuit boards, generic abstract blobs, glass orbs, chrome, glossy plastic, neon, decorative multicolor gradients, particle clouds, decorative arrows, and unrelated props.

Deliver one finished still image with a forceful silhouette, tangible geometric depth, and restrained detail.
~~~

## Prompt 2 — Refine the chosen result

Use this only if the first image has the right object and composition. Attach that result as **Image 1: edit target**. You may also attach a current Spine screenshot as **Image 2: palette and finish reference**.

~~~text
Use case: precise-object-edit
Asset type: final material and contrast refinement of the existing static Spine editorial image.

Image 1 is the edit target. If Image 2 is present, use it only as a reference for Spine's palette, visual restraint, and contrast.

Change only the material finish and contrast of Image 1. Unify the uninterrupted dark-pine background at #104d3f, with restrained #093d32 depth toward its outer edges. Give the existing broad page surfaces a matte warm ivory finish using #ffffed and #eeefda, precise ink-dark cut edges, and restrained #1e6049 structural details. Make the existing internal spine a clear, softly lit #d0eabb pale mint. Preserve the established upper-left lighting direction. Keep halftone subtle and confined to the existing recesses and contact shadow.

The result should retain a strong dark-field / ivory-mass / mint-spine hierarchy when reduced to 320 pixels wide. Remove any haze, bloom, excessive shine, gritty surface noise, or muddy contrast. Keep the object's material depth.

Preserve exactly: the landscape 3:2 framing, camera angle, outer silhouette, quiet margins, single joined object, cutaway position, number and arrangement of layers, three branch levels, physical connections, and relative proportions. Do not add, remove, separate, or rearrange structural elements.

Keep the image completely free of text, numbers, code, logos, watermarks, and imitation writing. Add no UI cards, controls, windows, paper curls, botanical forms, decorative multicolor gradients, glowing effects, particles, or props. Return one refined still image of the same object.
~~~

## Reference rationale

- [Supermemory](https://supermemory.ai/) gives one expressive monochrome image room to carry character within a restrained page. Its architecture diagram still makes the underlying system legible.
- [Browserbase](https://www.browserbase.com/) uses a distinctive pixel treatment consistently enough to feel like a visual identity. For Spine, the restrained halftone and architectural material treatment should have that same consistency.
- [Parallel](https://parallel.ai/) keeps product meaning concrete. Preserve a clear relationship between the outer page and its exposed structure while the surrounding HTML explains the primitives.

These references inform hierarchy and clarity; their artwork, logos, and compositions should not be copied.
