const leaves = [
  {
    label: "cookies", turn: "turn 01", detail: "retained", x: 169, y: 166,
    outline: "M90 109C136 91 189 86 241 93C239 153 261 213 250 286C202 280 146 296 105 313C125 242 113 163 90 109Z",
    fold: "M90 109C118 172 136 255 105 313C140 286 146 249 137 205C129 158 108 126 90 109Z",
    rules: "M121 130C150 122 185 120 216 122M135 214C162 210 199 209 230 211M138 223C163 219 188 219 211 219",
    curl: "M93 115C126 188 138 259 113 304M102 118C134 188 143 252 122 295M111 124C141 190 149 249 131 286",
    hole: [161, 269],
  },
  {
    label: "form", turn: "turn 02", detail: "draft: retained", x: 319, y: 144,
    outline: "M225 77C278 67 335 77 390 94C368 154 381 219 392 287C339 280 282 283 232 304C249 229 245 150 225 77Z",
    fold: "M225 77C247 151 253 235 232 304C261 278 272 240 265 198C259 145 243 97 225 77Z",
    rules: "M264 102C292 99 325 103 357 110M274 190C299 186 334 190 363 195M275 199C299 196 321 199 344 202",
    curl: "M232 83C253 152 262 234 240 296M240 90C262 164 268 236 249 286M249 105C270 179 275 237 258 277",
    hole: [316, 255],
  },
  {
    label: "location", turn: "turn 03", detail: "/next", x: 475, y: 164,
    outline: "M380 116C430 102 481 98 536 108C527 161 546 225 557 287C505 286 455 303 399 320C414 245 404 176 380 116Z",
    fold: "M380 116C405 181 422 259 399 320C428 294 442 254 432 211C421 162 398 130 380 116Z",
    rules: "M414 137C443 129 480 129 512 134M433 214C460 210 493 208 528 212M436 223C460 220 483 219 507 221",
    curl: "M387 122C414 188 428 260 408 311M396 129C424 195 436 258 418 301M406 141C434 209 442 260 427 291",
    hole: [488, 272],
  },
] as const;

export const identityThread =
  "M52 330C98 327 113 299 141 285C164 274 178 278 177 265C175 249 156 253 158 269C161 295 224 316 265 292C300 272 333 269 332 253C331 237 313 241 314 256C316 287 383 315 438 297C471 286 505 287 505 271C505 255 487 256 487 273C487 298 539 319 587 295";

export function SessionStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        {leaves.map((leaf, index) => <clipPath id={`${prefix}-session-${index}`} key={leaf.label}><path d={leaf.outline} /></clipPath>)}
      </defs>
      <path
        d="M78 297C164 321 260 337 360 327C435 320 503 317 566 283C526 333 456 356 364 350C245 367 137 343 78 297Z"
        fill={`url(#${prefix}-fine)`} opacity=".42"
      />
      <path d="M63 332C219 374 423 369 583 302" stroke="var(--study-muted)" strokeWidth=".7" opacity=".25" />
      <g className="study-micro">
        <path d="M147 64C244 39 388 44 502 75" fill="none" stroke="var(--study-muted)" strokeWidth=".7" strokeDasharray="1 6" opacity=".55" />
        <path d="M499 70L506 76L497 78" fill="none" stroke="var(--study-muted)" strokeWidth=".7" />
      </g>

      {leaves.map((leaf, index) => (
        <g key={leaf.label} className="study-unfold" style={{ animationDelay: `${index * 110}ms` }}>
          <path d={leaf.outline} transform="translate(7 6)" fill={`url(#${prefix}-hatch)`} stroke="var(--study-muted)" strokeWidth=".7" opacity=".3" />
          <path d={leaf.outline} fill="var(--study-paper)" />
          <path d={leaf.outline} fill={`url(#${prefix}-wash)`} />
          <path d={leaf.outline} fill={`url(#${prefix}-glyphs)`} opacity=".4" />
          <path d={leaf.fold} fill={`url(#${prefix}-hatch)`} opacity=".65" />
          <path d={leaf.outline} stroke="var(--study-ink)" strokeWidth="1.1" />
          <path d={leaf.fold} stroke="var(--study-ink)" strokeWidth=".6" opacity=".35" />
          <path d={leaf.curl} clipPath={`url(#${prefix}-session-${index})`} stroke="var(--study-ink)" strokeWidth=".6" opacity=".23" />
          <path d={leaf.rules} stroke="var(--study-muted)" strokeWidth=".8" opacity=".65" />
          <path
            d={`M${leaf.x - 60} ${leaf.y - 23}Q${leaf.x} ${leaf.y - 27} ${leaf.x + 59} ${leaf.y - 21}L${leaf.x + 61} ${leaf.y + 29}Q${leaf.x} ${leaf.y + 28} ${leaf.x - 58} ${leaf.y + 33}Z`}
            clipPath={`url(#${prefix}-session-${index})`}
            fill="var(--study-paper)"
          />
          <text x={leaf.x} y={leaf.y} className="study-label" textAnchor="middle">{leaf.label}</text>
          <text x={leaf.x} y={leaf.y + 21} className="study-micro" textAnchor="middle">{leaf.detail}</text>
          <g className="study-micro">
            <path d={`M${leaf.x - 19} ${leaf.y - 38}H${leaf.x + 18}`} fill="none" stroke="var(--study-muted)" strokeWidth=".7" opacity=".45" />
            <text x={leaf.x} y={leaf.y - 46} textAnchor="middle">{leaf.turn}</text>
          </g>
          <g transform={`translate(${leaf.hole[0] - 10} ${leaf.hole[1] - 38})`} stroke="var(--study-ink)" opacity=".5">
            <path d="M0 0V10M3 0V10M8 0V10M12 0V10M15 0V10M21 0V10M25 0V10" strokeWidth=".8" />
          </g>
          <text x={leaf.hole[0] + 35} y={leaf.hole[1] - 29} className="study-micro" textAnchor="middle">a7f2</text>
          <path
            d={`M${leaf.hole[0] - 17} ${leaf.hole[1] - 9}C${leaf.hole[0] - 23} ${leaf.hole[1] - 15} ${leaf.hole[0] - 17} ${leaf.hole[1] - 25} ${leaf.hole[0] - 5} ${leaf.hole[1] - 27}`}
            stroke="var(--study-muted)" strokeWidth=".7" opacity=".35"
          />
        </g>
      ))}

      <path d={identityThread} stroke="var(--study-paper)" strokeWidth="5" />
      <path d={identityThread} stroke="var(--study-muted)" strokeWidth=".8" opacity=".3" />
      <path d={identityThread} className="study-trace" pathLength="1" stroke="var(--study-accent)" strokeWidth="1.9" />
      <g fill="var(--study-ink)">
        <circle cx="168" cy="263" r="1.8" /><circle cx="322" cy="251" r="1.8" /><circle cx="496" cy="269" r="1.8" />
      </g>
      <g fill="var(--study-accent)"><circle cx="52" cy="330" r="2" /><circle cx="587" cy="295" r="2" /></g>
      <path d="M321 318V337M313 337H329" stroke="var(--study-muted)" strokeWidth=".7" />
      <text x="321" y="360" className="study-label" textAnchor="middle">same session</text>
      <g className="study-micro">
        <text x="73" y="374">state carried forward</text>
        <text x="575" y="374" textAnchor="end">identity preserved</text>
      </g>
    </g>
  );
}
