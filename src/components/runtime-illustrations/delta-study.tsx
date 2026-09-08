const previousDocument =
  "M117 119C195 86 270 111 359 103C356 173 372 238 397 307C316 332 235 318 151 346C157 266 143 190 117 119Z";

const currentDocument =
  "M164 88C249 65 338 92 432 84C418 161 438 248 460 323C371 343 282 324 189 346C209 257 200 167 164 88Z";

const liftedRegion =
  "M283 225C315 211 322 169 365 145C408 121 458 143 497 121C484 166 505 220 523 258C479 266 440 286 396 281C346 276 318 240 283 225Z";

export const deltaThread =
  "M225 313C236 280 250 250 277 226C310 205 337 219 366 217C404 215 429 186 451 169";

export function DeltaStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <clipPath id={`${prefix}-delta-page`}><path d={currentDocument} /></clipPath>
        <clipPath id={`${prefix}-delta-insert`}><path d={liftedRegion} /></clipPath>
      </defs>

      <path d="M147 317C234 337 401 333 525 279C487 332 393 354 302 361C239 366 185 349 147 317Z" fill={`url(#${prefix}-fine)`} opacity=".48" />

      <g className="study-reveal">
        <path d={previousDocument} fill="var(--study-paper)" fillOpacity=".45" stroke="var(--study-muted)" strokeWidth=".8" opacity=".6" />
        <path d={previousDocument} fill={`url(#${prefix}-glyphs)`} opacity=".22" />
        <path d="M135 124C161 191 174 263 159 332M143 126C171 200 181 266 169 325M153 130C180 205 189 267 181 318" stroke="var(--study-muted)" strokeWidth=".6" opacity=".3" />
        <path d="M154 149l44-8m-40 19 25-5M167 206l33-6m-29 17 23-5M183 287l20-4" stroke="var(--study-muted)" strokeWidth=".8" opacity=".5" />
        <path d={currentDocument} transform="translate(5 5)" fill={`url(#${prefix}-hatch)`} opacity=".4" />
        <path d={currentDocument} fill={`url(#${prefix}-wash)`} />
        <path d={currentDocument} fill={`url(#${prefix}-glyphs)`} opacity=".22" />
        <path d="M164 88C200 167 209 257 189 346C217 317 229 267 218 208C208 150 186 107 164 88Z" fill={`url(#${prefix}-hatch)`} opacity=".65" />
        <path d="M164 88C200 167 209 257 189 346" stroke="var(--study-ink)" strokeWidth="1.1" />
        <path d="M174 90C202 151 217 234 203 300M181 92C209 156 224 238 211 293" stroke="var(--study-ink)" strokeWidth=".65" opacity=".24" />
        <path d={currentDocument} stroke="var(--study-ink)" strokeWidth="1" />
        <path d={currentDocument} transform="translate(0 -3)" clipPath={`url(#${prefix}-delta-page)`} stroke="var(--study-paper)" strokeWidth="1.2" opacity=".9" />

        <text x="227" y="125" className="study-label">document</text>
        <path d="M229 140C274 134 316 141 353 139M231 151C265 147 293 151 318 151" stroke="var(--study-muted)" strokeWidth="1" opacity=".65" />
        <path d="M225 313C236 280 250 250 277 226C267 203 258 181 254 166M258 249C235 242 221 226 216 205M242 280C271 274 290 288 311 304" stroke="var(--study-ink)" strokeWidth="1.4" opacity=".42" />
        <path d="M277 226C294 233 309 240 331 242" stroke="var(--study-muted)" strokeWidth="1" strokeDasharray="2 4" opacity=".7" />
        <g fill="var(--study-paper)" stroke="var(--study-muted)" strokeWidth="1">
          <circle cx="254" cy="166" r="3.5" />
          <circle cx="216" cy="205" r="3.5" />
          <circle cx="311" cy="304" r="3.5" />
          <circle cx="331" cy="242" r="4" strokeDasharray="2 3" />
        </g>
        <path d="M268 167h31M221 205h29M318 303h43M318 312h28" stroke="var(--study-muted)" strokeWidth=".85" opacity=".55" />
        <text x="339" y="248" className="study-micro">closed</text>
      </g>

      <g className="study-unfold" style={{ animationDelay: "160ms" }}>
        <path d={liftedRegion} transform="translate(4 10)" fill="var(--study-ink)" opacity=".07" />
        <path d={liftedRegion} transform="translate(4 10)" fill={`url(#${prefix}-hatch)`} opacity=".65" />
        <path d={liftedRegion} fill="var(--study-paper)" />
        <path d={liftedRegion} fill={`url(#${prefix}-wash)`} />
        <path d={liftedRegion} fill={`url(#${prefix}-fine)`} opacity=".4" />
        <path d="M283 225C318 240 346 276 396 281C440 286 479 266 523 258C473 254 444 276 398 270C348 264 322 230 283 225Z" fill={`url(#${prefix}-hatch)`} />
        <path d="M283 225C318 240 346 276 396 281C440 286 479 266 523 258" stroke="var(--study-ink)" strokeWidth="1.2" />
        <path d={liftedRegion} stroke="var(--study-accent)" strokeWidth="1" />
        <path d="M497 121C489 136 483 145 471 150C484 151 494 146 500 137Z" fill={`url(#${prefix}-hatch)`} stroke="var(--study-ink)" strokeWidth=".65" />
        <path d="M329 189C349 149 398 134 445 140M338 195C364 158 397 144 432 147M344 202C371 173 391 162 410 158" stroke="var(--study-ink)" strokeWidth=".65" opacity=".27" />
        <path d={liftedRegion} transform="translate(0 -3)" clipPath={`url(#${prefix}-delta-insert)`} stroke="var(--study-paper)" strokeWidth="1.4" />

        <path d="M366 217C400 222 446 224 483 218M366 217C401 237 429 253 455 260" stroke="var(--study-accent)" strokeWidth="1.5" className="study-trace" pathLength="1" style={{ animationDelay: "220ms" }} />
        <path d={deltaThread} stroke="var(--study-paper)" strokeWidth="4.5" />
        <path d={deltaThread} stroke="var(--study-accent)" strokeWidth="1.85" className="study-trace" pathLength="1" style={{ animationDelay: "100ms" }} />

        <g fill="var(--study-paper)" stroke="var(--study-accent)" strokeWidth="1.2">
          <circle cx="277" cy="226" r="4" />
          <circle cx="366" cy="217" r="5" />
          <circle cx="451" cy="169" r="3.5" />
          <circle cx="483" cy="218" r="3.5" />
          <circle cx="455" cy="260" r="3.5" />
        </g>
        <circle cx="366" cy="217" r="1.7" fill="var(--study-accent)" />
        <g stroke="var(--study-accent)" strokeWidth="1" opacity=".72">
          <path d="M413 158h44m-44-7h25M433 206h48m-48-7h29M418 246h48m-48-7h29" />
          <path d="M400 150v8m-4-4h8M420 198v8m-4-4h8M405 238v8m-4-4h8" />
        </g>
      </g>

      <g className="study-reveal" style={{ animationDelay: "430ms" }}>
        <path d="M149 328L116 346H84M213 334l7 12M492 275l30 67h44" stroke="var(--study-muted)" strokeWidth=".75" />
        <text x="62" y="370" className="study-label study-label-muted">before</text>
        <text x="188" y="370" className="study-label">current</text>
        <text x="562" y="370" textAnchor="end" className="study-label">expanded: true</text>
        <text x="562" y="390" textAnchor="end" className="study-micro">new content, same document</text>
      </g>
    </g>
  );
}
