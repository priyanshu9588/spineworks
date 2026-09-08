const pageContour =
  "M79 88C131 70 182 83 231 72C238 114 258 168 259 217C260 253 251 288 240 320C190 309 148 325 99 314C114 253 105 161 79 88Z";

export const semanticThread =
  "M237 212C276 211 285 218 320 217C355 216 374 214 400 214";

const resolvedNodes = [
  { y: 111, role: "heading", name: "Welcome", detail: "h1", delay: "170ms" },
  { y: 214, role: "textbox", name: "Email", detail: "empty", delay: "260ms" },
  { y: 317, role: "button", name: "Submit", detail: "enabled", delay: "350ms" },
] as const;

export function SemanticStudy({ prefix }: { prefix: string }) {
  return (
    <g>
      <defs>
        <clipPath id={`${prefix}-page-clip`}><path d={pageContour} /></clipPath>
      </defs>

      <g className="study-guide">
        <path d="M320 56v312" strokeDasharray="1 7" />
        <path d="M81 354h180M395 354h184" />
        <path d="M81 350v8M261 350v8M395 350v8M579 350v8" />
      </g>

      <g className="study-reveal">
        <path d={pageContour} transform="translate(-15 14)" fill={`url(#${prefix}-fine)`} stroke="var(--study-muted)" strokeWidth=".7" opacity=".36" />
        <path d={pageContour} transform="translate(-7 7)" fill="var(--study-paper)" stroke="var(--study-muted)" strokeWidth=".7" opacity=".7" />
        <path d={pageContour} fill={`url(#${prefix}-wash)`} stroke="var(--study-ink)" strokeWidth="1.1" />
        <g clipPath={`url(#${prefix}-page-clip)`}>
          <path d="M65 80H112C141 174 142 247 119 335H79Z" fill={`url(#${prefix}-hatch)`} opacity=".6" />
          <path d="M97 115C122 180 129 258 111 317" fill="none" stroke="var(--study-ink)" strokeWidth=".65" opacity=".32" />
          <path d="M100 286h162v45H100Z" fill={`url(#${prefix}-glyphs)`} opacity=".45" />
          <path d="M85 115C139 104 190 117 242 107" fill="none" stroke="var(--study-ink)" strokeWidth=".8" opacity=".3" />
        </g>
        <g fill="var(--study-ink)" opacity=".44">
          <circle cx="102" cy="99" r="1.5" /><circle cx="111" cy="97.5" r="1.5" /><circle cx="120" cy="96.5" r="1.5" />
        </g>
        <path d="M210 77C211 90 222 102 240 104C230 107 219 106 208 102Z" fill={`url(#${prefix}-hatch)`} opacity=".75" />
        <path d="M210 77C218 78 225 74 231 72L240 104C224 103 216 96 210 77Z" fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth=".7" />
        <text x="119" y="154" className="study-label">Welcome</text>
        <path d="M120 166h94M120 173h66" stroke="var(--study-ink)" strokeWidth="1" opacity=".28" />
        <path d="M116 193C157 188 191 195 231 190L238 223C193 226 163 219 119 225Z" fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth=".8" />
        <text x="129" y="213" className="study-micro">Email</text>
        <path d="M127 205v11" stroke="var(--study-accent)" strokeWidth="1" />
        <path d="M122 249C157 245 191 251 225 247L228 277C188 280 158 273 123 279Z" fill="var(--study-ink)" />
        <text x="176" y="269" textAnchor="middle" className="study-label" style={{ fill: "var(--study-paper)" }}>Submit</text>
        <path d="M124 280C159 274 189 282 228 279" stroke="var(--study-ink)" strokeWidth=".7" opacity=".4" />
      </g>

      <g fill="none" stroke="var(--study-ink)">
        <g strokeWidth=".7" opacity=".18">
          <path d="M215 145C270 123 282 114 320 114C356 114 367 104 400 108M217 153C274 147 285 125 320 123C355 121 371 112 400 116" />
          <path d="M235 204C277 196 282 210 320 211C357 210 369 206 400 210M238 220C279 225 290 224 320 223C355 222 370 218 400 218" />
          <path d="M228 272C273 278 287 321 320 322C355 323 374 321 400 321M226 264C278 264 284 309 320 309C356 309 372 313 400 313" />
        </g>
        <path className="study-trace" pathLength="1" d="M215 149C268 133 282 119 320 119C355 119 374 112 400 112M237 212C276 211 285 218 320 217H400M228 266C275 268 284 316 320 316H400" strokeWidth="1.2" opacity=".65" />
        <path className="study-trace" pathLength="1" d={semanticThread} strokeWidth="1.45" />
        <path d="M312 110C310 147 330 165 328 211C327 249 312 278 317 322" strokeWidth=".7" opacity=".23" />
      </g>

      {resolvedNodes.map((node, index) => (
        <g key={node.role} className="study-unfold" style={{ animationDelay: node.delay }}>
          <path d={`M400 ${node.y - 28}C445 ${node.y - 37} 504 ${node.y - 21} 565 ${node.y - 31}L579 ${node.y + 24}C515 ${node.y + 35} 457 ${node.y + 21} 410 ${node.y + 33}Z`} transform="translate(0 5)" fill={`url(#${prefix}-fine)`} opacity=".5" />
          <path d={`M397 ${node.y - 33}C449 ${node.y - 43} 508 ${node.y - 28} 565 ${node.y - 36}C562 ${node.y - 16} 568 ${node.y + 8} 577 ${node.y + 22}C516 ${node.y + 34} 456 ${node.y + 18} 406 ${node.y + 28}C412 ${node.y + 7} 407 ${node.y - 18} 397 ${node.y - 33}Z`} fill={`url(#${prefix}-wash)`} stroke="var(--study-ink)" strokeWidth=".75" />
          <path d={`M397 ${node.y - 33}C407 ${node.y - 18} 412 ${node.y + 7} 406 ${node.y + 28}L417 ${node.y + 26}C423 ${node.y + 2} 416 ${node.y - 22} 408 ${node.y - 35}Z`} fill={`url(#${prefix}-hatch)`} opacity=".7" />
          <path d={`M424 ${node.y - 7}C467 ${node.y - 12} 514 ${node.y - 4} 554 ${node.y - 9}`} stroke="var(--study-ink)" strokeWidth=".6" opacity=".24" />
          <circle cx="400" cy={node.y} r="4" fill="var(--study-paper)" stroke="var(--study-ink)" strokeWidth="1.2" />
          <circle cx="400" cy={node.y} r="1.4" fill="var(--study-accent)" />
          <text x="427" y={node.y - 17} className="study-label">{node.role}</text>
          <text x="429" y={node.y + 10} className="study-micro">{node.name} · {node.detail}</text>
          <text x="321" y={node.y - 12} className="study-micro" textAnchor="middle" style={{ fontSize: "9px" }}>0{index + 1}</text>
        </g>
      ))}

      <g className="study-micro">
        <text x="81" y="375">the visible page</text>
        <text x="395" y="375">names, roles, state</text>
      </g>
    </g>
  );
}
