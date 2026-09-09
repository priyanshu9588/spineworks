# Spine artwork prompts

These are prompts for you to run in ChatGPT. This deliverable contains prompts only; no raster image has been generated or delivered for it. The site currently uses a complete static SVG illustration. One generated image may optionally replace that primary SVG, with an optional refinement of the same image.

## Placement and delivery

The Runtime introduction spans the full section above the narrative and artwork. Place the selected image beside the first narrative on desktop and beneath that first narrative on mobile, replacing the primary SVG only. Keep the full Contact illustration once; later steps use compact detail views of the same example. Keep the primitive names and all explanations in HTML.

The later code-native scenes continue this exact example: pressing Continue on Contact leads to an observed Delivery page; the same session retains alex@example.com; the required Street address leaves Continue unavailable while empty; entering 12 Cedar Lane enables Continue. These are subsequent detail views, not requests for five separate generated artworks. The single generated asset shows the initial Contact page and what Spine knows about its Continue button.

- Canvas: **1536 × 1024 px, landscape 3:2**. Request that size; preserve the composition if ChatGPT returns a different resolution.
- Display: up to **720 px wide**, preserving the complete silhouette and the natural aspect ratio. The object should still read around 320 px wide.
- Art palette: dark-pine field **#104d3f**, deeper edges **#093d32**, warm ivory **#ffffed** and **#eeefda**, structural green **#1e6049**, pale mint **#d0eabb**.
- Keep the downloaded original. Export the selected image to **public/illustrations/runtime-semantics.webp** in sRGB, preserving fine edges. Start around WebP quality 88 and inspect at the intended display size.
- That path is a proposed destination. It is not an existing asset and should only be referenced in code after the real file has been delivered and inspected.
- The image may contain only the exact example text specified below. Keep section headings, explanatory captions, and accessible descriptions in HTML. Inspect every generated word before integration; correct inaccurate text or supply it as an HTML overlay.

## Prompt 1 — Generate the single supporting image

Paste this into ChatGPT's image generation conversation.

~~~text
Use case: stylized-concept
Asset type: one static editorial product image for Spine, a browser runtime that reads webpages as names, roles, and states.

Create a sculptural cutaway of a simple Contact webpage. A warm ivory page contains one email field and one green Continue button. A mint spine emerges from that exact button and reveals its name, role, and enabled state. Make this a single coherent object with the material presence of a photographed architectural model and an immediately understandable connection between a webpage control and its meaning.

Canvas and backdrop: landscape 3:2, target 1536 × 1024 pixels. Use an uninterrupted dark-pine field, #104d3f, with restrained #093d32 depth toward the outer edges. The entire object is visible, occupying about 70% of the canvas width and 80% of its height. Leave quiet margins around its silhouette.

Subject: one ivory Contact page made from a small number of thin, rigid laminated planes with straight edges. Give the surface a large Contact heading, one recessed field labeled Email containing alex@example.com, and one substantial raised green button labeled Continue. The email is already filled and Continue is enabled. Use generous spacing and large, readable text. The form belongs directly to the sculpted page surface, with no surrounding dashboard, toolbar, or nested card frame.

Cutaway and meaning: start one visible physical connection at the edge of the Continue button and carry it into a slender exposed mint spine along the page's right side. Three short branches point to three clear attribute rows: Name Continue, Role button, State enabled. All three rows describe the same Continue button. Keep that relationship traceable; do not connect the rows to the heading or email field. Leave the spine open, with depth along its edges and no rectangular panel behind it.

Composition: close, near-orthographic three-quarter view. The ivory Contact page sits slightly left of center, with its Continue button visually emphasized. The mint spine and its three attribute rows occupy the right foreground. Keep the attribute text upright relative to the image, outside the angled page, with consistent left alignment. Use a deliberate asymmetry and a strong continuous silhouette. The page, the button, and the button's meaning must remain recognizable at a small display size.

Materials and rendering: finely finished matte ivory composite, narrow ink-dark cut edges, precise layered thickness, and a softly lit mint structural insert. Use restrained photographic light from the upper left to reveal the geometry. Add a subtle monochrome halftone in the recessed faces and contact shadow, like an exacting editorial print. Keep the broad surfaces calm and the edges sharp. Mint should feel luminous through contrast and material lightness, without glow or bloom.

Palette: #104d3f dark pine with #093d32 at deeper edges, #ffffed and #eeefda warm ivory surfaces, #1e6049 structural green, and #d0eabb pale mint. The visual hierarchy is dark field, large warm ivory mass, selective mint structure.

Text, verbatim:
On the ivory page:
"Contact"
"Email"
"alex@example.com"
"Continue"

Beside the mint spine, in three upright rows with separate label and value columns:
"Name"  "Continue"
"Role"  "button"
"State" "enabled"

Use a clean, restrained monospace face. Render the email address exactly. Continue appears once on the button and once as the Name value. Keep the words button and enabled lowercase. Add no other text, code, logos, watermarks, imitation writing, or numerical claims.

Exclude: abstract chip shapes, carved mazes, branching document-tree decoration, Aa letter specimens, newspaper layouts, paragraph stripes, floating component cards, admin dashboards, additional fields or controls, extra browser windows, paper curls, warped sheets, botanical forms, brains, gears, circuit boards, generic icons or blobs, glass orbs, chrome, glossy plastic, neon, decorative multicolor gradients, particle clouds, and unrelated props.

Deliver one finished still image of the initial Contact stage. Preserve tangible geometric depth and restrained detail while making the Continue-to-name/role/state relationship immediately clear.
~~~

## Prompt 2 — Refine the chosen result

Use this only if the first image has the right object and composition. Attach that result as **Image 1: edit target**. You may also attach a current Spine screenshot as **Image 2: palette and finish reference**.

~~~text
Use case: precise-object-edit
Asset type: final material and contrast refinement of the existing static Spine editorial image.

Image 1 is the edit target. If Image 2 is present, use it only as a reference for Spine's palette, visual restraint, and contrast.

Change only the material finish and contrast of Image 1. Unify the uninterrupted dark-pine background at #104d3f, with restrained #093d32 depth toward its outer edges. Give the existing broad page surfaces a matte warm ivory finish using #ffffed and #eeefda, precise ink-dark cut edges, and restrained #1e6049 structural details. Make the existing internal spine a clear, softly lit #d0eabb pale mint. Preserve the established upper-left lighting direction. Keep halftone subtle and confined to the existing recesses and contact shadow.

The result should retain a strong dark-field / ivory-page / mint-spine hierarchy when reduced to 320 pixels wide. Remove any haze, bloom, excessive shine, gritty surface noise, or muddy contrast. Keep the object's material depth and the legibility of the existing text.

Preserve exactly: the landscape 3:2 framing, camera angle, outer silhouette, quiet margins, single joined Contact page, layer arrangement, email field, enabled green Continue button, one connection from that button to the open mint spine, three attribute branches, and relative proportions. Preserve the upright alignment of the attribute rows. Do not add, remove, separate, or rearrange elements.

Preserve the exact existing text: Contact; Email; alex@example.com; Continue on the button; and the three attribute rows Name Continue, Role button, State enabled. Keep button and enabled lowercase. Add no text, code, logos, watermarks, extra controls, cards, windows, abstract trees or chip mazes, newspaper details, paper curls, botanical forms, decorative multicolor gradients, glowing effects, particles, or props. Return one refined still image of the same Contact stage.
~~~

## Reference rationale

- [Supermemory](https://supermemory.ai/) gives one expressive monochrome image room to carry character within a restrained page. Its architecture diagram still makes the underlying system legible.
- [Browserbase](https://www.browserbase.com/) uses a distinctive pixel treatment consistently enough to feel like a visual identity. For Spine, the restrained halftone and architectural material treatment should have that same consistency.
- [Parallel](https://parallel.ai/) keeps product meaning concrete. Here, the visible Continue button and its exact name, role, and state provide that clarity while the surrounding HTML explains the primitives.

These references inform hierarchy and clarity; their artwork, logos, and compositions should not be copied.
