const CONTROL_STEM =
  "M174 359C166 329 181 299 207 277C238 251 256 225 266 194C278 155 296 113 327 77C306 118 295 157 284 198C273 240 252 270 223 294C198 315 184 336 184 359Z";

const CONTROL_VEINS = [
  "M278 177C295 158 325 144 354 135C379 127 400 114 417 96",
  "M278 181C305 164 330 153 359 147C391 140 407 120 417 96",
  "M278 185C309 174 338 164 367 160C398 154 417 127 417 96",
  "M247 244C284 225 323 231 353 221C378 213 395 197 416 184",
  "M247 250C289 237 329 249 363 235C389 224 405 205 416 184",
  "M247 256C288 254 329 262 366 250C395 240 414 219 416 184",
  "M211 291C244 281 281 292 309 308C333 321 361 322 386 305",
  "M206 299C244 291 267 312 300 325C332 338 363 330 386 305",
  "M201 307C237 299 260 328 295 338C334 350 369 335 386 305",
] as const;

export function CapabilityStudy({ prefix }: { prefix: string }) {
  return (
    <g>
      <g fill="none" stroke="var(--study-muted)" strokeWidth="0.7" opacity="0.35">
        <path d="M171 363h77M175 357v12M241 360v6M197 360v6M219 360v6" />
      </g>

      <g className="study-reveal">
        <path d={CONTROL_STEM} fill={`url(#${prefix}-hatch)`} />
        <path
          d={CONTROL_STEM}
          fill="var(--study-ink)"
          fillOpacity="0.08"
          stroke="var(--study-ink)"
          strokeWidth="0.9"
        />
        <path
          d="M178 358C172 330 190 303 216 284C245 261 266 226 276 194C289 150 300 110 327 77"
          className="study-trace"
          pathLength="1"
          fill="none"
          stroke="var(--study-ink)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g fill="none" stroke="var(--study-ink)" strokeWidth="0.7" opacity="0.6">
          <path d="M180 348c5-19 18-33 35-46M195 317c13-16 33-28 46-46M235 269c17-21 33-48 41-75M278 184c9-34 19-66 35-95" />
          <path d="m175 337 11 3m-8-14 12 4m-7-14 12 5m-5-14 12 6m-4-14 12 7m0-17 11 7m0-17 11 7m0-17 11 7m0-17 12 6m-2-17 12 5m-4-17 11 5m-4-16 11 4m-6-15 11 4m-6-14 10 4m-6-14 10 4" />
        </g>
      </g>

      <g className="study-reveal" style={{ animationDelay: "140ms" }}>
        <path
          d="M274 183C292 141 330 133 362 126C386 120 402 105 417 96C426 128 411 156 383 168C345 184 313 170 278 190Z"
          fill={`url(#${prefix}-wash)`}
          stroke="var(--study-ink)"
          strokeWidth="1"
        />
        <path
          d="M288 177C325 147 379 161 417 96C421 136 401 158 369 167C339 175 313 169 288 177Z"
          fill={`url(#${prefix}-glyphs)`}
          opacity="0.58"
        />
        <path
          d="M244 250C275 206 324 220 352 212C381 204 399 188 416 184C428 216 409 244 381 256C336 276 292 242 249 260Z"
          fill={`url(#${prefix}-wash)`}
          stroke="var(--study-ink)"
          strokeWidth="1"
        />
        <path
          d="M258 248C311 230 363 258 416 184C424 218 400 242 373 250C329 263 296 242 258 248Z"
          fill={`url(#${prefix}-hatch)`}
          opacity="0.64"
        />
        <path
          d="M207 297C252 263 287 286 315 298C339 309 365 312 386 305C380 339 348 353 318 349C274 344 248 304 208 309Z"
          fill={`url(#${prefix}-wash)`}
          stroke="var(--study-ink)"
          strokeWidth="1"
        />
        <path
          d="M218 300C260 284 286 317 315 325C342 333 366 326 386 305C376 340 345 345 319 341C276 334 248 301 218 300Z"
          fill={`url(#${prefix}-fine)`}
          opacity="0.85"
        />
        <g fill="none" stroke="var(--study-ink)" strokeWidth="0.75" opacity="0.64">
          {CONTROL_VEINS.map((path) => <path key={path} d={path} />)}
        </g>
        <g fill="none" stroke="var(--study-accent)" strokeWidth="1.7" strokeLinecap="round">
          <path
            className="study-trace"
            pathLength="1"
            d="M278 185C324 161 381 157 417 96"
            style={{ animationDelay: "110ms" }}
          />
          <path
            className="study-trace"
            pathLength="1"
            d="M249 254C305 228 364 266 416 184"
            style={{ animationDelay: "210ms" }}
          />
          <path
            className="study-trace"
            pathLength="1"
            d="M209 303C268 284 302 363 386 305"
            style={{ animationDelay: "310ms" }}
          />
        </g>
      </g>

      <g className="study-reveal" style={{ animationDelay: "260ms" }}>
        <path
          d="M264 218C239 198 222 166 208 147"
          fill="none"
          stroke="var(--study-muted)"
          strokeWidth="1.4"
        />
        <path
          d="M194 132C178 109 154 102 133 108C148 132 167 145 186 145"
          fill={`url(#${prefix}-fine)`}
          stroke="var(--study-muted)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.65"
        />
        <path
          d="M135 110C155 114 170 129 186 140M207 147l-9-7m6 13 10-10m-23-1 10-10"
          fill="none"
          stroke="var(--study-muted)"
          strokeWidth="0.9"
        />
        <path
          d="M150 107V88h-35"
          fill="none"
          stroke="var(--study-muted)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
        />
        <text x="67" y="83" fill="var(--study-muted)" className="study-label">disabled</text>
        <text x="68" y="103" fill="var(--study-muted)" className="study-micro">no action</text>
      </g>

      <g className="study-reveal" style={{ animationDelay: "360ms" }}>
        <g fill="none" stroke="var(--study-muted)" strokeWidth="0.8">
          <path d="M418 96h37M417 184h38M388 305h67" />
        </g>
        <g fill="var(--study-accent)">
          <path d="m417 92 4 4-4 4-4-4ZM416 180l4 4-4 4-4-4ZM386 301l4 4-4 4-4-4Z" />
        </g>
        <g fill="var(--study-ink)" className="study-label">
          <text x="466" y="101">fill</text>
          <text x="466" y="189">select</text>
          <text x="466" y="310">click</text>
        </g>
        <g fill="var(--study-muted)" className="study-micro">
          <text x="466" y="121">textbox</text>
          <text x="466" y="209">combobox</text>
          <text x="466" y="330">button</text>
          <text x="171" y="385">available actions</text>
          <text x="331" y="77">current state</text>
        </g>
      </g>
    </g>
  );
}
