const controlStem =
  "M174 359C166 329 181 299 207 277C238 251 256 225 266 194C278 155 296 113 327 77C306 118 295 157 284 198C273 240 252 270 223 294C198 315 184 336 184 359Z";

export const capabilityThread =
  "M178 358C172 330 190 303 216 284C245 261 266 226 276 194L278 185C324 161 381 157 417 96";

const controlLeaves = [
  {
    outline: "M274 183C292 141 328 127 362 126C387 126 404 108 417 96C431 126 413 158 383 173C348 190 312 174 278 194Z",
    fold: "M278 194C312 174 348 190 383 173C413 158 431 126 417 96C418 131 397 151 368 160C334 170 307 171 278 194Z",
    vein: "M278 185C324 161 381 157 417 96",
    fibers: "M285 173C313 146 349 137 370 135M291 184C323 177 349 183 376 171M310 164C329 145 350 139 370 135M336 158C357 139 388 132 404 117M352 164C377 164 398 150 409 133",
    label: "fill",
    role: "textbox",
    x: 417,
    y: 96,
  },
  {
    outline: "M244 250C274 206 320 216 352 209C380 203 398 187 416 184C434 216 413 247 381 260C339 278 290 245 249 262Z",
    fold: "M249 262C290 245 339 278 381 260C413 247 434 216 416 184C418 219 394 240 366 246C328 255 292 244 249 262Z",
    vein: "M249 254C305 228 364 266 416 184",
    fibers: "M260 237C291 220 321 227 345 218M270 250C303 253 328 269 358 261M290 239C317 224 344 234 369 220M329 244C354 231 381 225 397 209M359 250C386 246 406 226 412 210",
    label: "select",
    role: "combobox",
    x: 416,
    y: 184,
  },
  {
    outline: "M207 297C249 263 287 282 315 294C341 306 365 311 386 305C385 339 351 358 318 354C274 349 246 307 208 312Z",
    fold: "M208 312C246 307 274 349 318 354C351 358 385 339 386 305C373 330 344 339 317 336C275 330 247 301 208 312Z",
    vein: "M209 303C268 284 302 363 386 305",
    fibers: "M223 293C251 279 275 291 295 302M226 306C254 314 272 338 295 342M256 303C278 299 301 315 319 320M282 322C305 340 337 344 359 330M315 329C339 317 361 324 375 313",
    label: "click",
    role: "button",
    x: 386,
    y: 305,
  },
] as const;

export function CapabilityStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        {controlLeaves.map((leaf, index) => (
          <clipPath id={`${prefix}-control-${index}`} key={leaf.label}>
            <path d={leaf.outline} />
          </clipPath>
        ))}
      </defs>

      <path d="M177 360C240 355 329 365 393 335C360 371 263 383 177 366Z" fill={`url(#${prefix}-fine)`} opacity=".46" />
      <path d="M443 77V346" stroke="var(--study-muted)" strokeWidth=".65" strokeDasharray="1 7" opacity=".28" />

      <g className="study-reveal">
        <path d={controlStem} transform="translate(4 3)" fill={`url(#${prefix}-hatch)`} opacity=".45" />
        <path d={controlStem} fill={`url(#${prefix}-wash)`} stroke="var(--study-ink)" strokeWidth="1.1" />
        <path d={controlStem} fill={`url(#${prefix}-hatch)`} opacity=".6" />
        <path d="M178 358C172 330 190 303 216 284C245 261 266 226 276 194C289 150 300 110 327 77" className="study-trace" pathLength="1" stroke="var(--study-ink)" strokeWidth="2" />
        <path d="M184 345C190 321 212 307 230 289C256 263 275 228 283 196M286 178C296 139 308 108 321 89" stroke="var(--study-paper)" strokeWidth="1.3" />
        <path d="m175 337 11 3m-7-15 11 4m-6-15 11 5m-3-16 11 6m0-16 11 7m1-17 11 7m0-17 11 7m0-17 11 7m-2-17 11 6m-3-17 11 5m-5-17 11 4m-5-16 10 4m-5-15 10 4" stroke="var(--study-ink)" strokeWidth=".6" opacity=".5" />
        <path d="m321 78 10-3-5 9" fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth=".85" />
      </g>

      {controlLeaves.map((leaf, index) => (
        <g key={leaf.label} className="study-unfold" style={{ animationDelay: `${110 + index * 90}ms` }}>
          <path d={leaf.outline} transform="translate(4 6)" fill={`url(#${prefix}-hatch)`} opacity=".4" />
          <path d={leaf.outline} fill={`url(#${prefix}-wash)`} />
          <path d={leaf.outline} fill={`url(#${prefix}-glyphs)`} opacity=".25" />
          <path d={leaf.fold} fill="var(--study-ink)" opacity=".08" />
          <path d={leaf.fold} fill={`url(#${prefix}-hatch)`} opacity=".75" />
          <path d={leaf.fibers} stroke="var(--study-ink)" strokeWidth=".7" opacity=".55" />
          <path d={leaf.outline} stroke="var(--study-ink)" strokeWidth="1.05" />
          <path d={leaf.fold} stroke="var(--study-ink)" strokeWidth=".55" opacity=".45" />
          <path d={leaf.vein} stroke="var(--study-paper)" strokeWidth="4" opacity=".75" />
          <path d={leaf.vein} className="study-trace" pathLength="1" stroke="var(--study-accent)" strokeWidth="1.8" style={{ animationDelay: `${130 + index * 110}ms` }} />
          <g clipPath={`url(#${prefix}-control-${index})`} stroke="var(--study-paper)" strokeWidth=".8" opacity=".65">
            <path d={leaf.outline} transform="translate(0 -3)" />
          </g>
        </g>
      ))}

      <g className="study-reveal" style={{ animationDelay: "390ms" }}>
        <g transform="rotate(-19 340 150)">
          <path d="M318 149h39" stroke="var(--study-paper)" strokeWidth="15" />
          <path d="M320 153h34M320 143v7m5-7v7m5-7v7m5-7v7m5-7v7M353 140v15m-3-15h6m-6 15h6" stroke="var(--study-ink)" strokeWidth="1.15" />
        </g>
        <g transform="rotate(-8 341 232)">
          <path d="M316 231h51" stroke="var(--study-paper)" strokeWidth="15" />
          <path d="M317 227h26M317 233h18m22-5 4 4 4-4" stroke="var(--study-ink)" strokeWidth="1.1" />
          <circle cx="347" cy="231" r="2" fill="var(--study-accent)" />
        </g>
        <g transform="rotate(16 321 319)">
          <ellipse cx="321" cy="319" rx="16" ry="7" fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth=".8" />
          <ellipse cx="321" cy="319" rx="10" ry="3.5" fill={`url(#${prefix}-hatch)`} stroke="var(--study-accent)" strokeWidth=".85" />
          <path d="m318 318 2 2 4-3" stroke="var(--study-accent)" strokeWidth="1.3" />
        </g>
      </g>

      <g className="study-reveal" style={{ animationDelay: "280ms" }}>
        <path d="M263 218C240 199 224 168 208 147" stroke="var(--study-muted)" strokeWidth="1.3" />
        <path d="M194 132C178 109 154 102 133 108C148 132 167 145 186 145" fill={`url(#${prefix}-fine)`} stroke="var(--study-muted)" strokeWidth=".85" strokeDasharray="2 4" />
        <path d="M135 110C155 114 170 129 186 140M150 118l6 13m6-7 10 13M207 147l-9-7m6 13 10-10m-23-1 10-10" stroke="var(--study-muted)" strokeWidth=".85" />
        <path d="M151 106V86h-31" stroke="var(--study-muted)" strokeWidth=".7" strokeDasharray="2 4" />
        <text x="63" y="77" className="study-label study-label-muted">unavailable</text>
        <text x="63" y="98" className="study-micro">disabled control</text>
      </g>

      <g className="study-reveal" style={{ animationDelay: "460ms" }}>
        {controlLeaves.map((leaf) => (
          <g key={leaf.label}>
            <path d={`M${leaf.x} ${leaf.y}H462`} stroke="var(--study-muted)" strokeWidth=".75" />
            <circle cx={leaf.x} cy={leaf.y} r="4.2" fill="var(--study-paper)" stroke="var(--study-accent)" strokeWidth="1.2" />
            <circle cx={leaf.x} cy={leaf.y} r="1.6" fill="var(--study-accent)" />
            <text x="476" y={leaf.y + 5} className="study-label">{leaf.label}</text>
            <text x="476" y={leaf.y + 26} className="study-micro">{leaf.role}</text>
          </g>
        ))}
        <path d="M178 359v11m-23 0h74m-74-3v6m74-6v6" stroke="var(--study-muted)" strokeWidth=".75" />
        <text x="155" y="394" className="study-micro">known controls, clear actions</text>
        <text x="337" y="76" className="study-micro">current state</text>
      </g>
    </g>
  );
}
