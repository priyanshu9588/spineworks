const formLeaf =
  "M91 108C124 98 167 79 218 83L244 105C244 149 269 191 269 235C270 264 256 295 235 312C189 297 150 301 115 316C132 252 122 173 91 108Z";
const receiptLeaf =
  "M414 94C455 103 496 84 548 94C538 143 558 208 551 265L539 276L525 269L511 279L497 272L483 281L469 274L455 282L441 275L427 281C434 218 415 154 414 94Z";
const connectionRibbon =
  "M251 226C290 226 294 113 346 112C393 110 391 181 425 184L425 193C384 190 383 125 348 125C306 124 302 235 251 235Z";

export const actionThread =
  "M251 230C296 230 296 118 347 118C389 116 387 188 426 188";

export function ActionStudy({ prefix }: { prefix: string }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <clipPath id={`${prefix}-form-clip`}><path d={formLeaf} /></clipPath>
        <clipPath id={`${prefix}-receipt-clip`}><path d={receiptLeaf} /></clipPath>
      </defs>
      <path
        d="M76 297C140 323 203 341 277 327C360 311 454 336 573 292C535 341 457 355 365 345C264 363 143 349 76 297Z"
        fill={`url(#${prefix}-fine)`} opacity=".36"
      />
      <g stroke="var(--study-muted)" strokeWidth=".8" opacity=".3">
        <path d={formLeaf} transform="translate(-11 11)" />
        <path d={receiptLeaf} transform="translate(10 10)" />
        <path d="M260 240C324 308 373 283 429 218" strokeDasharray="1 6" />
      </g>

      <g className="study-unfold">
        <path d={formLeaf} fill="var(--study-paper)" />
        <path d={formLeaf} fill={`url(#${prefix}-wash)`} />
        <path d={formLeaf} fill={`url(#${prefix}-glyphs)`} opacity=".48" />
        <path d={formLeaf} stroke="var(--study-ink)" strokeWidth="1.2" />
        <path
          d="M91 108C122 171 143 254 115 316C146 291 153 252 146 211C139 168 115 124 91 108Z"
          fill={`url(#${prefix}-hatch)`} opacity=".72"
        />
        <g clipPath={`url(#${prefix}-form-clip)`} stroke="var(--study-ink)" strokeWidth=".6" opacity=".16">
          {Array.from({ length: 10 }, (_, index) => (
            <path key={index} d={`M${95 + index * 4} ${106 + index * 2}C${138 + index * 3} 190 ${159 + index * 2} 264 ${116 + index * 4} 317`} />
          ))}
        </g>
        <path d="M218 83C219 92 225 100 230 109L244 105Z" fill={`url(#${prefix}-hatch)`} stroke="var(--study-ink)" strokeWidth=".8" />
        <g className="study-micro">
          <text x="144" y="122">form / draft</text>
          <path d="M141 132L212 128" fill="none" stroke="var(--study-muted)" strokeWidth=".7" />
        </g>
        <path
          d="M135 148C164 143 196 142 228 145L233 177C200 174 170 177 142 181Z"
          fill="var(--study-paper)" stroke="var(--study-muted)" strokeWidth=".8"
        />
        <path d="M149 163C164 160 185 159 202 160M206 152L208 169" stroke="var(--study-ink)" strokeWidth="1.1" opacity=".65" />
        <path
          d="M130 207C168 201 207 204 246 208L252 247C211 250 169 246 139 253Z"
          fill={`url(#${prefix}-hatch)`} opacity=".6" transform="translate(2 4)"
        />
        <path
          d="M130 207C168 201 207 204 246 208L252 247C211 250 169 246 139 253Z"
          fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth="1.4"
        />
        <path d="M143 214C172 210 208 212 235 214" stroke="var(--study-ink)" strokeWidth=".6" opacity=".3" />
        <text x="190" y="234" textAnchor="middle" className="study-label">Submit</text>
        <path d="M122 199L120 193L136 190M248 199L253 200L255 211M258 249L259 257L245 259M134 261L128 263L125 253" stroke="var(--study-accent)" strokeWidth="1.2" />
        <text x="148" y="281" className="study-micro">role: button</text>
      </g>

      <path d={connectionRibbon} fill={`url(#${prefix}-wash)`} />
      <path d={connectionRibbon} fill={`url(#${prefix}-hatch)`} opacity=".55" />
      <path d={connectionRibbon} stroke="var(--study-ink)" strokeWidth=".65" opacity=".2" />
      <g className="study-micro">
        <path d="M347 107V79H372" fill="none" stroke="var(--study-muted)" strokeWidth=".7" />
        <text x="378" y="83">click</text>
      </g>

      <g className="study-unfold" style={{ animationDelay: "180ms" }}>
        <path d={receiptLeaf} fill="var(--study-paper)" />
        <path d={receiptLeaf} fill={`url(#${prefix}-wash)`} />
        <path d={receiptLeaf} fill={`url(#${prefix}-glyphs)`} opacity=".36" />
        <path d={receiptLeaf} stroke="var(--study-ink)" strokeWidth="1.2" />
        <path d="M535 97C527 147 546 208 539 276L551 265C558 208 538 143 548 94Z" fill={`url(#${prefix}-hatch)`} opacity=".64" />
        <g clipPath={`url(#${prefix}-receipt-clip)`} stroke="var(--study-ink)" strokeWidth=".65" opacity=".18">
          {Array.from({ length: 6 }, (_, index) => (
            <path key={index} d={`M${534 + index * 3} 91C${523 + index * 3} 152 ${545 + index * 3} 226 ${537 + index * 3} 281`} />
          ))}
        </g>
        <text x="439" y="125" className="study-micro">observed state</text>
        <path d="M438 136C465 140 497 131 522 133M439 144C466 146 481 140 505 140" stroke="var(--study-muted)" strokeWidth=".75" opacity=".55" />
        <path d="M436 164C467 166 501 157 532 162L534 207C500 203 467 212 438 207Z" fill="var(--study-paper)" />
        <text x="486" y="191" textAnchor="middle" className="study-label">Saved</text>
        <path d="M445 217C460 219 476 216 489 214M446 225C460 227 471 224 480 223" stroke="var(--study-muted)" strokeWidth=".8" opacity=".6" />
        <g transform="translate(515 239)" stroke="var(--study-accent)">
          {Array.from({ length: 24 }, (_, index) => (
            <path key={index} d="M0-19V-15" strokeWidth=".7" transform={`rotate(${index * 15})`} opacity={index % 2 ? ".35" : ".65"} />
          ))}
          <circle r="12" fill="var(--study-paper)" strokeWidth=".8" />
          <path d="M-5 0L-1 4L6-5" strokeWidth="1.4" />
        </g>
      </g>

      <path d={actionThread} stroke="var(--study-muted)" strokeWidth=".8" opacity=".25" />
      <path d={actionThread} className="study-trace" pathLength="1" stroke="var(--study-accent)" strokeWidth="2" />
      <g fill="var(--study-paper)" stroke="var(--study-accent)" strokeWidth="1.3">
        <circle cx="251" cy="230" r="4.5" />
        <circle cx="426" cy="188" r="4.5" />
      </g>
      <g fill="var(--study-accent)"><circle cx="251" cy="230" r="1.5" /><circle cx="426" cy="188" r="1.5" /></g>
      <g className="study-micro">
        <path d="M260 248L291 303H319M481 286V303H454" fill="none" stroke="var(--study-muted)" strokeWidth=".7" />
        <text x="326" y="307">effect verified</text>
        <path d="M82 354H567M82 349V359M567 349V359" fill="none" stroke="var(--study-muted)" strokeWidth=".7" opacity=".35" />
        <text x="82" y="376">resolved target</text>
        <text x="567" y="376" textAnchor="end">observable outcome</text>
      </g>
    </g>
  );
}
