# Generated Spine artwork

The current material master was generated with **GPT Image 2.5 Sunburst** through Runway, at 1920 × 1280 with `xhigh` quality. **Seedance 2.5** uses a hosted 4:3 reference to animate a four-second reading sequence. Exact labels, form values, and button states are drawn by the site; the generation contains no text.

## Assets

- Original master: `output/imagegen/spine-runtime-master-v3.png`
- Optimized still: `public/illustrations/runtime-master-v3.webp`
- Geometry-preserving motion reference: `public/illustrations/runtime-motion-source-v3.webp`
- Web animation: `public/illustrations/runtime-read-v3.mp4` (1110 × 740, 4.04 seconds, H.264, silent).
- Standalone labeled video: `public/illustrations/runtime-read-v3-preview.mp4` (1110 × 740).
- Shareable animated GIF: `public/illustrations/runtime-read-v3-preview.gif` (720 × 480, 12 fps).

The website loads the smaller text-free video and keeps labels crisp in SVG. The standalone MP4/GIF include those same labels for sharing; the heavier GIF is not loaded by the landing page.

The 4:3 reference adds 80 pixels of reflected background above and below the original. The model receives direct HTTPS URLs, with no binary or base64 upload. Runway credentials stay outside the repository and frontend. Original generation outputs are downloaded because provider URLs expire.

## Image prompt

```text
Use @spine as a reference for the beautiful matte ivory, dark pine, pale mint, shallow laminated thickness, recessed field, raised button, and precise soft product lighting. Improve the composition into a clear cutaway with room for real typography. No text or symbols anywhere in the generated image.

1920 by 1280 landscape. The key correction: the ivory page must be a NARROW PORTRAIT RECTANGLE on the LEFT, and the mint spine must stand EXPOSED ON THE DARK PINE BACKGROUND to its RIGHT. Do not put ivory behind the spine. Do not repeat the wide landscape slab from the reference. The rightmost quarter must stay dark and empty for three semantic attribute labels added by the website. Think of one recognizable page on the left physically connected to its machine-readable meaning on the right.

Frontal orthographic product rendering. Main face parallel to the image plane, no tilt, skew, lens distortion or camera angle. Main ivory page face approximately x190 to 1020 and y140 to 1120. It must occupy less than 55 percent of the full image width. Its top third is plain ivory with enough space for a heading and a field label. One recessed rectangular field spans approximately x270 to 940 and y510 to 670. One raised dark-green rectangular button spans approximately x270 to 940 and y810 to 980. Both control faces are blank and horizontal. Preserve visible narrow bevels around these surfaces. Show just one thin offset backing layer and contact shadow at the right and bottom edges.

A single mint connection starts at the right edge of THAT BUTTON around y900, exits the right edge of the ivory page, and joins a slender freestanding vertical mint spine around x1150. Three short horizontal mint branches end near x1320 at approximately y480, y690, and y900. The spine and all its branches are surrounded by the uninterrupted dark-pine background, with no board or panel behind them. The topology is one button to one spine to exactly three distinct branches. Keep x1390 to 1840 completely clear for upright HTML labels. Leave quiet margins and keep the whole object inside the image.

Refined architectural-model material, matte warm ivory #ffffed and #eeefda, dark pine field #104d3f with #093d32 depth at outer edges, structural green #1e6049 on the button/backing, pale mint #d0eabb on the exposed spine. Precise thin dark cut edges, calm clean faces, soft directional upper-left studio light, subtle contact shadows. Material detail should be tactile and premium, not gritty. The whole image should be clear at 320 pixels wide. Preserve the reference's credible craftsmanship while making the proportions and exposed connection unmistakably more deliberate.

No letters, numbers, fake text, logos, symbols, UI placeholder lines, watermarks, extra controls, windows, floating cards, mazes, chips, circuit boards, paper curls, botanical shapes, glass, chrome, gloss, neon, glow, particles, decorative gradients, unrelated props, or ornamental branches. The site will supply all text, exact field values, button-state colors, and the three attribute labels as crisp accessible overlays. Deliver ONE finished blank master image, reusable as a Contact or Delivery page.
```

## Motion prompt

```text
Animate the supplied text-free architectural product image for exactly four seconds with a completely locked orthographic camera. Preserve every page edge, field and button position, exposed mint spine and its three branches, surface texture, background, and lighting direction. All physical geometry remains stationary. Keep the original framing, including the quiet pine margins at the top and bottom.

Hold the initial image for 0.6 seconds. From 0.6 to 1.2 seconds, a narrow restrained mint reflection gently emphasizes the rim of the existing green button. From 1.2 to 2.2 seconds, this realistic material reflection travels along the EXISTING mint connection from the button into the exposed vertical spine and its exactly three branches. Hold this mild material emphasis until 3.3 seconds. Between 3.3 and 4 seconds, smoothly return the illumination to its original level. First and last frames must be identical in composition, material appearance, and exposure.

The motion explains reading the button's semantic attributes; it is not a click or page navigation. No button press, no camera pan or zoom, no moving page or controls, no floating or stretching shapes, no changing geometry, no new objects, no letters, words, numbers or symbols. No neon bloom, glowing halos, particles, ornamental traces, lens flare, flicker, dark fades, scene cuts, flashy transition, or soundtrack. Maintain premium matte ivory and dark pine with pale mint structure throughout. Quiet, deliberate, and exceptionally precise.
```

## Design references

Visited [Supermemory](https://supermemory.ai/), [Browserbase](https://www.browserbase.com/), and [Parallel](https://parallel.ai/). Supermemory pairs a restrained monochrome film with explicit system diagrams. Browserbase shows an actual operation and its result. Parallel keeps a highlighted source visible with the corresponding evidence. For Spine, one consistent material object supplies character while the Continue-to-name/role/state relationship supplies the explanation. No competitor assets or code are used.

## Generation record

- Preliminary GPT Image 2 reference: task `542fdb06-58f1-4671-bdac-ce5534482328`, 20 credits. Superseded by the user's GPT Image 2.5 selection.
- GPT Image 2.5 Sunburst master: task `e57dd45b-dcc9-4e49-ad91-84328ddca284`, 29 credits including one hosted reference.
- Seedance 2.5 motion: task `12f3dd3b-4dfc-41dc-9d20-166b389a959c`, 120 credits, four seconds at 1112 × 834, silent, identical first/last reference URLs.

Confirmed generation cost: **169 credits ($1.69 at the documented $0.01 per credit)** across the initial reference, final master, and final clip.

These prompts use Runway API version `2024-11-06`. No credentials or expiring signed output URLs are included here.
