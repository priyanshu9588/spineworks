const documentLeaf =
  "M158 99C210 64 287 74 342 97C405 122 457 123 492 164C527 205 508 261 475 297C439 337 365 345 302 328C242 312 174 322 144 277C113 230 124 157 158 99Z";

const quietBranches =
  "M218 315C229 272 247 233 265 205C284 176 294 143 292 107M265 205C235 188 216 161 210 130M241 248C203 246 178 229 161 207M278 182C316 182 342 161 364 144M229 280C266 280 288 291 312 308";

const expandedBranch =
  "M254 226C294 238 330 233 373 217C402 206 428 186 446 161M373 217C412 221 454 216 490 206M373 217C407 236 432 253 454 271";

const changedPatch =
  "M285 225C329 210 347 164 397 145C448 126 500 139 521 178C543 218 514 263 470 283C419 307 366 271 335 251C317 240 298 237 285 225Z";

export function DeltaStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M131 268C189 327 280 351 378 343C441 338 491 312 527 282C492 332 434 359 350 364C253 368 165 329 131 268Z"
        fill={`url(#${prefix}-fine)`}
        opacity=".4"
      />
      <g transform="translate(-17 10)" opacity=".32">
        <path d={documentLeaf} fill={`url(#${prefix}-glyphs)`} opacity=".4" />
        <path d={documentLeaf} stroke="var(--study-muted)" strokeWidth="1" />
        <path d={quietBranches} stroke="var(--study-muted)" strokeWidth="1.2" />
      </g>

      <g className="study-reveal">
        <path d={documentLeaf} fill="var(--study-paper)" />
        <path d={documentLeaf} fill={`url(#${prefix}-wash)`} />
        <path d={documentLeaf} fill={`url(#${prefix}-glyphs)`} opacity=".5" />
        <path d={documentLeaf} stroke="var(--study-ink)" strokeWidth="1.1" opacity=".55" />
        <path
          d="M158 99C129 171 134 233 157 266C185 305 245 303 302 328C242 312 174 322 144 277C113 230 124 157 158 99Z"
          fill={`url(#${prefix}-hatch)`}
          opacity=".35"
        />
        <path
          d="M167 101C146 146 137 204 153 249M178 95C154 147 146 192 156 226M189 91C170 129 160 165 160 193"
          stroke="var(--study-muted)"
          strokeWidth=".6"
          opacity=".3"
        />
        <path
          d={quietBranches}
          transform="translate(-8 6)"
          stroke="var(--study-muted)"
          strokeWidth="1"
          opacity=".16"
        />
        <path d={quietBranches} stroke="var(--study-ink)" strokeWidth="1.6" opacity=".38" />
        <g fill="var(--study-paper)" stroke="var(--study-muted)" strokeWidth="1" opacity=".8">
          <ellipse cx="210" cy="130" rx="9" ry="4" transform="rotate(52 210 130)" />
          <ellipse cx="161" cy="207" rx="9" ry="4" transform="rotate(24 161 207)" />
          <ellipse cx="292" cy="107" rx="9" ry="4" transform="rotate(93 292 107)" />
          <ellipse cx="364" cy="144" rx="9" ry="4" transform="rotate(-31 364 144)" />
          <ellipse cx="312" cy="308" rx="9" ry="4" transform="rotate(31 312 308)" />
        </g>
        <path
          d="M245 233C283 247 317 242 347 231"
          stroke="var(--study-muted)"
          strokeWidth="1.1"
          strokeDasharray="2 4"
          opacity=".45"
        />
        <circle cx="347" cy="231" r="5" stroke="var(--study-muted)" strokeWidth="1" opacity=".4" />
      </g>

      <g className="study-reveal" style={{ animationDelay: "160ms" }}>
        <path d={changedPatch} fill="var(--study-paper)" fillOpacity=".78" />
        <path d={changedPatch} fill={`url(#${prefix}-fine)`} opacity=".55" />
        <path d={changedPatch} stroke="var(--study-accent)" strokeWidth=".8" opacity=".42" />
        <path
          d="M326 225C352 190 377 173 405 161M341 232C367 185 398 164 425 155M354 239C379 195 412 171 445 159M369 249C393 222 442 184 467 173M386 258C415 234 467 203 490 196M406 269C435 249 474 228 503 221"
          stroke="var(--study-accent)"
          strokeWidth=".65"
          opacity=".22"
        />
        <path d={expandedBranch} stroke="var(--study-accent)" strokeWidth=".9" opacity=".2" />
        <path
          d={expandedBranch}
          className="study-trace"
          pathLength="1"
          stroke="var(--study-accent)"
          strokeWidth="2.1"
        />
        <g fill="var(--study-paper)" stroke="var(--study-accent)" strokeWidth="1.3">
          <ellipse cx="446" cy="161" rx="12" ry="5" transform="rotate(-54 446 161)" />
          <ellipse cx="490" cy="206" rx="12" ry="5" transform="rotate(-9 490 206)" />
          <ellipse cx="454" cy="271" rx="12" ry="5" transform="rotate(37 454 271)" />
          <circle cx="373" cy="217" r="5" />
        </g>
        <path
          d="M440 169L452 153M479 208L501 204M445 264L463 278"
          stroke="var(--study-accent)"
          strokeWidth=".85"
        />
        <circle cx="373" cy="217" r="1.8" fill="var(--study-accent)" />
        <path d="M493 266L524 305H566" stroke="var(--study-accent)" strokeWidth=".8" />
        <text
          x="560"
          y="332"
          textAnchor="end"
          className="study-label"
          fill="var(--study-ink)"
        >
          expanded: true
        </text>
      </g>

      <g stroke="var(--study-muted)" strokeWidth=".7">
        <path d="M123 276L93 322V338" opacity=".5" />
        <path d="M209 303L215 337" />
      </g>
      <text x="67" y="363" className="study-label study-label-muted">
        before
      </text>
      <text x="184" y="363" className="study-label" fill="var(--study-ink)">
        current
      </text>
      <text x="349" y="362" className="study-micro" fill="var(--study-muted)">
        return only what changed
      </text>
    </g>
  );
}
