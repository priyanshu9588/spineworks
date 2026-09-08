const SOURCE_CONTOUR =
  "M73 87C120 55 184 61 224 92C267 125 247 176 293 211C270 231 253 249 235 281C209 326 151 358 89 336C126 303 97 279 68 256C103 225 89 195 60 179C96 155 104 119 73 87Z";

const SOURCE_FOLDS = [
  "M78 87C165 62 207 126 191 174C181 211 232 227 285 218",
  "M69 109C152 85 188 139 178 181C167 224 220 242 275 225",
  "M76 137C132 124 163 153 160 184C156 235 203 248 264 235",
  "M62 179C119 156 138 186 141 211C146 249 202 259 253 247",
  "M78 206C105 199 123 222 130 244C145 272 196 280 242 264",
  "M69 256C134 231 146 311 226 289",
  "M95 294C146 268 153 326 212 313",
  "M94 333C135 314 167 349 189 331",
] as const;

const DOCUMENT_FIBERS = [
  "M262 223C300 210 312 151 348 124C365 111 386 105 407 108",
  "M265 227C305 215 320 165 351 140C368 126 389 118 407 108",
  "M267 231C313 225 330 176 358 155C379 139 397 124 407 108",
  "M269 235C311 239 350 215 383 209C404 206 428 209 444 218",
  "M270 239C324 247 353 231 386 226C410 222 427 217 444 218",
  "M268 243C311 254 335 249 366 244C402 238 425 226 444 218",
  "M265 246C299 263 317 285 343 303C361 316 382 322 404 317",
  "M262 251C290 268 307 302 337 322C359 337 384 332 404 317",
  "M257 256C281 275 297 313 329 333C354 348 387 338 404 317",
] as const;

export function SemanticStudy({ prefix }: { prefix: string }) {
  return (
    <g>
      <defs>
        <clipPath id={`${prefix}-source-clip`}>
          <path d={SOURCE_CONTOUR} />
        </clipPath>
        <pattern
          id={`${prefix}-source-glyphs`}
          href={`#${prefix}-glyphs`}
          patternTransform="scale(.76)"
        />
      </defs>

      <g fill="none" stroke="var(--study-muted)" strokeWidth="0.7" opacity="0.35">
        <path d="M321 70v291" strokeDasharray="1 7" />
      </g>

      <g className="study-reveal">
        <path d={SOURCE_CONTOUR} fill={`url(#${prefix}-wash)`} />
        <path
          d={SOURCE_CONTOUR}
          fill={`url(#${prefix}-source-glyphs)`}
          opacity="0.98"
        />
        <g clipPath={`url(#${prefix}-source-clip)`}>
          <path
            d="M91 69C222 40 165 163 197 198C216 221 253 220 289 212L301 271C230 257 239 319 129 357L81 329C209 284 162 249 111 215C185 184 176 105 91 69Z"
            fill={`url(#${prefix}-hatch)`}
            opacity="0.86"
          />
          <path
            d="M92 64C177 57 220 123 200 178C188 213 230 232 292 217L295 232C237 249 174 229 179 189C186 131 161 94 91 88Z"
            fill="var(--study-ink)"
            opacity="0.1"
          />
          <path
            d="M62 179C128 151 135 192 140 217C147 253 210 265 274 240L268 255C205 286 129 261 121 230C113 202 91 195 63 207Z"
            fill="var(--study-ink)"
            opacity="0.12"
          />
          <path
            d="M61 236C129 229 156 314 233 284L209 323C157 344 125 279 75 280Z"
            fill={`url(#${prefix}-fine)`}
            opacity="0.9"
          />
        </g>
        <path
          d={SOURCE_CONTOUR}
          fill="none"
          stroke="var(--study-ink)"
          strokeWidth="0.9"
          opacity="0.42"
        />
        <g fill="none" stroke="var(--study-ink)" strokeWidth="0.8" opacity="0.55">
          {SOURCE_FOLDS.map((path) => <path key={path} d={path} />)}
        </g>
        <path
          d="M71 91C106 69 139 65 165 71M87 334C118 345 148 343 169 337"
          fill="none"
          stroke="var(--study-paper)"
          strokeWidth="3"
          opacity="0.75"
        />
      </g>

      <g className="study-reveal" style={{ animationDelay: "110ms" }}>
        <path
          d="M252 222C294 216 303 142 349 116C371 103 392 102 414 107C397 125 384 149 359 169C327 194 311 230 278 239C324 237 353 199 393 198C414 198 435 205 452 218C421 233 401 247 370 252C334 258 307 256 276 247C309 263 323 298 351 306C371 312 391 313 410 316C388 343 356 352 330 337C297 318 286 275 251 252Z"
          fill={`url(#${prefix}-wash)`}
        />
        <path
          d="M283 232C314 208 332 162 364 142C386 129 399 116 407 108C394 147 353 176 332 204C315 226 301 236 283 232ZM288 243C341 217 377 204 444 218C401 237 353 257 288 243ZM276 251C325 265 333 320 404 317C375 351 351 341 329 325C306 307 299 276 276 251Z"
          fill={`url(#${prefix}-fine)`}
          opacity="0.48"
        />
        <g fill="none" stroke="var(--study-ink)" strokeWidth="0.72" opacity="0.54">
          {DOCUMENT_FIBERS.map((path) => <path key={path} d={path} />)}
        </g>
        <path
          className="study-trace"
          pathLength="1"
          d="M97 180C179 174 185 233 267 239C306 240 320 162 361 132C375 121 391 112 407 108M267 239C334 241 368 212 444 218M267 239C318 260 319 333 369 331C383 331 394 325 404 317"
          fill="none"
          stroke="var(--study-ink)"
          strokeWidth="1.65"
          strokeLinecap="round"
        />
        <path
          d="M258 223C271 222 279 230 281 240C280 253 269 259 259 255C250 251 248 232 258 223Z"
          fill={`url(#${prefix}-hatch)`}
          stroke="var(--study-ink)"
          strokeWidth="0.8"
        />
      </g>

      <g className="study-reveal" style={{ animationDelay: "280ms" }}>
        <g fill="none" stroke="var(--study-muted)" strokeWidth="0.85">
          <path d="M407 108h24M444 218h20M404 317h27" />
          <path d="M262 257v99M92 344v12" strokeDasharray="2 4" />
        </g>
        <g fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth="1.25">
          <path d="m407 104 4 4-4 4-4-4ZM444 214l4 4-4 4-4-4ZM404 313l4 4-4 4-4-4Z" />
        </g>
        <g fill="var(--study-ink)">
          <text x="440" y="112" className="study-label">heading</text>
          <text x="473" y="222" className="study-label">textbox</text>
          <text x="440" y="321" className="study-label">button</text>
        </g>
        <g fill="var(--study-muted)" className="study-micro">
          <text x="440" y="132">name · Welcome</text>
          <text x="473" y="242">state · empty</text>
          <text x="440" y="341">action · submit</text>
          <text x="72" y="376">the page</text>
          <text x="233" y="376">document</text>
        </g>
      </g>
    </g>
  );
}
