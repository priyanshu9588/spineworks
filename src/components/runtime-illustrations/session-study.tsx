const sessionLeaves = [
  {
    outline:
      "M109 111C151 90 204 91 253 79C262 141 279 205 270 274C219 279 166 294 123 308C136 240 127 169 109 111Z",
    fold:
      "M109 111C133 167 147 244 123 308C148 287 160 248 151 201C143 161 128 129 109 111Z",
    label: "cookies",
    x: 191,
    y: 181,
    detail: "sid: a7f2",
    lines: "M141 132C167 126 201 122 232 118M144 142C163 138 183 134 207 132M157 215C180 211 216 206 248 200M159 226C180 222 205 218 226 214",
  },
  {
    outline:
      "M231 88C286 90 342 109 396 108C382 173 378 232 389 297C335 291 283 295 228 318C244 234 244 161 231 88Z",
    fold:
      "M231 88C245 162 244 239 228 318C252 295 264 264 264 216C263 160 250 113 231 88Z",
    label: "form",
    x: 318,
    y: 196,
    detail: "draft: kept",
    lines: "M268 130C299 134 331 140 367 139M269 141C288 143 312 147 339 148M271 230C301 232 335 230 363 230M270 241C289 242 310 240 333 241",
  },
  {
    outline:
      "M379 121C429 111 479 94 532 94C527 150 545 216 552 282C499 284 450 305 398 322C401 247 399 183 379 121Z",
    fold:
      "M379 121C400 187 403 251 398 322C418 294 429 260 422 216C416 174 400 139 379 121Z",
    label: "location",
    x: 474,
    y: 187,
    detail: "/workspace",
    lines: "M415 141C443 134 477 128 509 128M418 152C440 146 463 143 485 141M433 220C460 216 496 209 528 211M435 232C457 227 483 222 503 223",
  },
] as const;

export const identityThread =
  "M64 328C96 328 106 297 138 291C164 286 185 285 185 272C185 258 166 258 166 275C166 295 211 316 253 302C288 290 319 286 319 269C319 254 302 254 302 270C302 298 364 319 415 302C449 291 476 289 478 275C481 260 463 258 462 274C460 293 493 302 528 286C552 275 567 255 583 245";

export function SessionStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M80 293C179 324 287 333 405 318C462 311 511 302 559 280C524 326 452 347 357 349C228 356 136 335 80 293Z"
        fill={`url(#${prefix}-fine)`}
        opacity=".5"
      />
      <path
        d="M72 334C220 362 403 369 570 294"
        stroke="var(--study-muted)"
        strokeWidth=".7"
        opacity=".2"
      />
      {sessionLeaves.map((leaf, index) => (
        <g
          key={leaf.label}
          className="study-reveal"
          style={{ animationDelay: `${index * 110}ms` }}
        >
          <path
            d={leaf.outline}
            transform="translate(6 5)"
            fill={`url(#${prefix}-hatch)`}
            opacity=".35"
          />
          <path d={leaf.outline} fill="var(--study-paper)" />
          <path d={leaf.outline} fill={`url(#${prefix}-wash)`} />
          <path d={leaf.outline} fill={`url(#${prefix}-glyphs)`} opacity=".38" />
          <path d={leaf.fold} fill={`url(#${prefix}-hatch)`} opacity=".5" />
          <path d={leaf.outline} stroke="var(--study-ink)" strokeWidth="1.15" />
          <path d={leaf.fold} stroke="var(--study-ink)" strokeWidth=".65" opacity=".38" />
          <path d={leaf.lines} stroke="var(--study-muted)" strokeWidth=".9" opacity=".65" />
          <path
            d={`M${leaf.x - 57} ${leaf.y - 22}Q${leaf.x} ${leaf.y - 27} ${leaf.x + 58} ${leaf.y - 23}L${leaf.x + 58} ${leaf.y + 10}Q${leaf.x} ${leaf.y + 13} ${leaf.x - 57} ${leaf.y + 10}Z`}
            fill="var(--study-paper)"
          />
          <text
            x={leaf.x}
            y={leaf.y}
            className="study-label"
            textAnchor="middle"
            fill="var(--study-ink)"
          >
            {leaf.label}
          </text>
          <text
            x={leaf.x}
            y={leaf.y + 24}
            className="study-micro"
            textAnchor="middle"
            fill="var(--study-muted)"
          >
            {leaf.detail}
          </text>
          <path
            d={`M${leaf.x - 6} ${leaf.y - 68}L${leaf.x + 6} ${leaf.y - 70}`}
            stroke="var(--study-ink)"
            strokeWidth="2"
            opacity=".5"
          />
        </g>
      ))}

      <g stroke="var(--study-ink)" strokeWidth=".7" opacity=".16">
        <path d="M116 115C142 178 153 249 132 299M122 116C149 179 161 247 140 293" />
        <path d="M237 98C253 170 251 251 236 308M244 110C260 183 258 255 244 300" />
        <path d="M386 125C409 191 412 255 405 311M394 133C418 203 419 261 413 301" />
      </g>
      <path d={identityThread} stroke="var(--study-paper)" strokeWidth="5" />
      <path d={identityThread} stroke="var(--study-muted)" strokeWidth=".9" opacity=".35" />
      <path
        d={identityThread}
        className="study-trace"
        pathLength="1"
        stroke="var(--study-accent)"
        strokeWidth="1.9"
      />
      <g fill="var(--study-ink)" opacity=".6">
        <circle cx="175" cy="271" r="1.6" />
        <circle cx="310" cy="268" r="1.6" />
        <circle cx="470" cy="274" r="1.6" />
      </g>
      <g fill="var(--study-accent)">
        <circle cx="64" cy="328" r="2.2" />
        <circle cx="583" cy="245" r="2.2" />
      </g>
      <path d="M351 314V345H378" stroke="var(--study-muted)" strokeWidth=".75" />
      <text x="386" y="350" className="study-label" fill="var(--study-ink)">
        one session
      </text>
      <text x="80" y="365" className="study-micro" fill="var(--study-muted)">
        state carried from turn to turn
      </text>
    </g>
  );
}
