const sourceLeaf =
  "M100 106C140 91 187 77 238 84C249 126 262 164 270 205C278 245 263 280 239 305C195 291 157 287 124 299C134 247 127 180 100 106Z";

const receiptLeaf =
  "M413 112C450 121 490 103 527 113C522 156 539 215 529 256C515 265 502 254 489 262C476 269 465 257 451 264C439 270 426 258 414 264C428 211 414 158 413 112Z";

export const actionThread =
  "M239 219C277 220 278 174 303 153C328 131 356 143 356 171C357 203 328 215 322 240C312 282 356 292 384 269C408 249 399 192 435 187";

export function ActionStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M88 292C153 327 225 346 295 325C362 305 439 322 549 286C483 339 401 354 310 348C220 359 140 335 88 292Z"
        fill={`url(#${prefix}-fine)`}
        opacity=".35"
      />
      <g stroke="var(--study-muted)" opacity=".3">
        <path d={sourceLeaf} transform="translate(-12 10)" strokeWidth=".9" />
        <path d={receiptLeaf} transform="translate(14 10)" strokeWidth=".9" />
        <path
          d="M253 234C306 302 366 312 429 222"
          strokeWidth="1"
          strokeDasharray="1 5"
        />
      </g>

      <g className="study-reveal">
        <path d={sourceLeaf} fill="var(--study-paper)" />
        <path d={sourceLeaf} fill={`url(#${prefix}-wash)`} />
        <path d={sourceLeaf} fill={`url(#${prefix}-glyphs)`} opacity=".52" />
        <path d={sourceLeaf} stroke="var(--study-ink)" strokeWidth="1.25" />
        <path
          d="M100 106C123 168 148 227 124 299C148 278 153 243 150 213C145 168 127 129 100 106Z"
          fill={`url(#${prefix}-hatch)`}
          opacity=".55"
        />
        {Array.from({ length: 8 }, (_, index) => (
          <path
            key={index}
            d={`M${107 + index * 4} ${109 + index * 5}C${128 + index * 4} 174 ${153 + index * 3} 246 ${130 + index * 3} ${294 - index * 3}`}
            stroke="var(--study-ink)"
            strokeWidth=".6"
            opacity={0.08 + index * 0.012}
          />
        ))}
        <path
          d="M137 135C159 129 192 126 220 129M143 146C162 141 184 140 207 141M150 165C173 162 208 163 230 168"
          stroke="var(--study-ink)"
          strokeWidth="1"
          opacity=".35"
        />
        <path
          d="M126 201C160 195 194 196 233 200L240 237C202 242 164 238 134 243C133 227 130 214 126 201Z"
          fill="var(--study-paper)"
          stroke="var(--study-ink)"
          strokeWidth="1.4"
        />
        <path
          d="M134 243C168 248 205 247 243 241L240 237C203 242 163 238 134 243Z"
          fill={`url(#${prefix}-hatch)`}
        />
        <text
          x="183"
          y="224"
          textAnchor="middle"
          className="study-label"
          fill="var(--study-ink)"
        >
          Submit
        </text>
        <text x="159" y="267" className="study-micro" fill="var(--study-muted)">
          role: button
        </text>
      </g>

      <g className="study-reveal" style={{ animationDelay: "180ms" }}>
        <path d={receiptLeaf} fill="var(--study-paper)" />
        <path d={receiptLeaf} fill={`url(#${prefix}-wash)`} />
        <path d={receiptLeaf} fill={`url(#${prefix}-glyphs)`} opacity=".33" />
        <path d={receiptLeaf} stroke="var(--study-ink)" strokeWidth="1.25" />
        <path
          d="M517 115C513 156 529 214 519 257L529 256C539 211 521 155 527 113Z"
          fill={`url(#${prefix}-hatch)`}
          opacity=".6"
        />
        <path
          d="M432 141C451 143 478 137 506 138M433 149C454 149 473 144 491 145M434 219C454 224 482 214 509 219M434 229C454 232 478 223 495 226"
          stroke="var(--study-muted)"
          strokeWidth=".9"
          opacity=".6"
        />
        <path
          d="M433 165C459 168 483 161 514 166L515 203C487 201 461 210 435 202Z"
          fill="var(--study-paper)"
        />
        <text
          x="474"
          y="190"
          className="study-label"
          fill="var(--study-ink)"
          textAnchor="middle"
        >
          Saved
        </text>
        <g className="study-micro">
          <text x="440" y="292" fill="var(--study-muted)">
            state: settled
          </text>
          <path d="M474 271V278" fill="none" stroke="var(--study-muted)" strokeWidth=".8" />
        </g>
      </g>

      <path d={actionThread} stroke="var(--study-muted)" strokeWidth=".8" opacity=".22" />
      <path
        d={actionThread}
        className="study-trace"
        pathLength="1"
        stroke="var(--study-accent)"
        strokeWidth="2.2"
      />
      <g fill="var(--study-paper)" stroke="var(--study-accent)" strokeWidth="1.5">
        <circle cx="239" cy="219" r="4" />
        <circle cx="435" cy="187" r="4" />
      </g>
      <g fill="var(--study-accent)">
        <circle cx="239" cy="219" r="1.5" />
        <circle cx="435" cy="187" r="1.5" />
      </g>
      <g className="study-micro">
        <path d="M354 282L366 321H396" fill="none" stroke="var(--study-muted)" strokeWidth=".7" />
        <text x="402" y="325" fill="var(--study-muted)">
          effect verified
        </text>
      </g>
      <text x="88" y="351" className="study-micro" fill="var(--study-muted)">
        one target · one observable effect
      </text>
    </g>
  );
}
