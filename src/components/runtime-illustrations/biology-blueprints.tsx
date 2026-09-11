import type { ReactNode } from "react";

const point = (cx: number, cy: number, radius: number, angle: number) =>
  `${(cx + Math.cos(angle) * radius).toFixed(2)} ${(cy + Math.sin(angle) * radius).toFixed(2)}`;

function Leader({ d, x, y, title, detail, align = "start" }: {
  d: string; x: number; y: number; title: string; detail?: string; align?: "start" | "end";
}) {
  return (
    <g className="bio-annotation">
      <path d={d} className="bio-leader" />
      <text x={x} y={y} textAnchor={align} className="bio-label">{title}</text>
      {detail && <text x={x} y={y + 20} textAnchor={align} className="bio-note">{detail}</text>}
    </g>
  );
}

function Node({ x, y, active = false }: { x: number; y: number; active?: boolean }) {
  return <g className={active ? "bio-node bio-node-active" : "bio-node"}><circle cx={x} cy={y} r="6" /><circle cx={x} cy={y} r="2" /></g>;
}

function Signal({ d, delay = 0 }: { d: string; delay?: number }) {
  const style = { animationDelay: `${delay}s` };
  return <g className="bio-motion-layer"><path d={d} pathLength="1" className="bio-flow-tail" style={style} /><path d={d} pathLength="1" className="bio-flow-head" style={style} /></g>;
}

function Pulse({ x, y, delay = 0, muted = false }: { x: number; y: number; delay?: number; muted?: boolean }) {
  return <circle cx={x} cy={y} r="9" className={`bio-motion-layer bio-pulse${muted ? " bio-pulse-muted" : ""}`} style={{ animationDelay: `${delay}s`, transformOrigin: `${x}px ${y}px` }} />;
}

/** A flared, engraved bone, positioned by its joint centres. */
function Bone({ a, b, width = 11, prefix }: {
  a: [number, number]; b: [number, number]; width?: number; prefix: string;
}) {
  const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const angle = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI - 90;
  const w = width;
  return (
    <g transform={`translate(${a[0]} ${a[1]}) rotate(${angle.toFixed(3)})`}>
      <path d={`M0 -3 C${-w * .5} ${-w} ${-w * 1.4} ${-w * .8} ${-w} 4 C${-w * .35} ${length * .34} ${-w * .42} ${length * .67} ${-w} ${length - 4} C${-w * 1.5} ${length + w} ${-w * .3} ${length + w} 0 ${length + 4} C${w * .55} ${length + w} ${w * 1.5} ${length + w * .6} ${w} ${length - 4} C${w * .36} ${length * .68} ${w * .34} ${length * .32} ${w} 4 C${w * 1.4} ${-w * .9} ${w * .35} ${-w} 0 -3Z`} className="bio-bone" fill={`url(#${prefix}-hatch)`} />
      <path d={`M${-w * .38} 7 Q${-w * .7} ${length * .4} ${-w * .32} ${length - 6} M${w * .43} 9 Q${w * .05} ${length * .57} ${w * .5} ${length - 4}`} className="bio-fine" />
      <path d={`M${-w * .7} 2 Q0 10 ${w * .7} 2 M${-w * .7} ${length} Q0 ${length - 8} ${w * .7} ${length}`} className="bio-fine" />
    </g>
  );
}

function Observer({ prefix }: { prefix: string }) {
  return (
    <>
      <g className="bio-construction">
        <circle cx="353" cy="211" r="132" />
        <path d="M353 52V369M109 211H595" />
        <path d="M164 139 143 223 220 310M499 124 570 207 513 283" />
      </g>
      <path d="M136 223C208 115 288 95 362 107C443 112 519 146 576 208C481 310 294 355 136 223Z" className="bio-wash" />
      <path d="M136 223C208 115 288 95 362 107C443 112 519 146 576 208C481 310 294 355 136 223Z" className="bio-contour" />
      <path d="M148 212C245 78 417 71 574 192M151 239C270 358 461 328 568 225M169 268C291 360 444 336 531 277" className="bio-fine" />
      <path d="M140 221C161 216 168 223 176 239M572 208C552 206 547 216 542 229" className="bio-contour" />
      <circle cx="353" cy="211" r="95" className="bio-contour" />
      <circle cx="353" cy="211" r="88" className="bio-fine" />
      {Array.from({ length: 144 }, (_, index) => {
        const a = index * Math.PI / 72;
        const inner = 37 + 6 * Math.sin(index * 2.1);
        const mid = 62 + 8 * Math.cos(index * 1.7);
        const outer = 86 + 4 * Math.sin(index * .8);
        return <path key={index} d={`M${point(353, 211, inner, a)}Q${point(353, 211, mid, a + .027 * Math.sin(index))} ${point(353, 211, outer, a + .018)}`} className="bio-iris-fibre" />;
      })}
      <circle cx="353" cy="211" r="35" className="bio-pupil" />
      <circle cx="353" cy="211" r="43" className="bio-fine" strokeDasharray="2 5" />
      <path d="M126 176C185 128 223 134 260 162M479 171C516 163 542 183 565 196M172 248C209 266 232 259 263 270M466 265C505 255 516 238 546 232" className="bio-fine" />
      <path d="M204 141 225 147M211 135 232 140M220 130 243 133M459 148 475 153M475 153 488 151M504 179 516 173M219 268 229 279M239 272 249 286M481 255 484 270" className="bio-fine" />
      <path d="M81 324H177L276 253M389 184 493 91H626" className="bio-signal" />
      <Node x={81} y={324} active /><Node x={389} y={184} active />
      <Leader d="M156 162H74V124" x={62} y={103} title="Continue" detail="the visible control" />
      <Leader d="M626 91V106" x={493} y={135} title="button · enabled" detail="the meaning beneath" />
      <text x="93" y="350" className="bio-micro bio-annotation">PAGE → PERCEPTION</text>
      <g className="bio-motion-layer" clipPath={`url(#${prefix}-iris)`}>
        {[0, 1, 2].map(band => <g key={band} className="bio-iris-band" style={{ animationDelay: `${.8 + band * .17}s` }}>
          {Array.from({ length: 96 }, (_, i) => <path key={i} d={`M${point(353,211,38+band*17,i*Math.PI/48)}L${point(353,211,55+band*17,i*Math.PI/48+.025)}`} />)}
        </g>)}
      </g>
      <Signal d="M81 324H177L276 253" />
      <Pulse x={353} y={211} delay={.8} />
      <Signal d="M389 184 493 91H626" delay={1.55} />
      <Pulse x={626} y={91} delay={2.55} />
    </>
  );
}

function Operator({ prefix }: { prefix: string }) {
  const fingers: [number, number][][] = [
    [[309, 286], [254, 234], [218, 206], [200, 177]],
    [[326, 278], [307, 178], [300, 126], [301, 85], [307, 55]],
    [[350, 276], [353, 166], [358, 111], [366, 70], [374, 44]],
    [[372, 283], [399, 180], [418, 127], [429, 96], [437, 76]],
    [[391, 298], [439, 223], [470, 188], [484, 168], [492, 153]],
  ];
  return (
    <>
      <g className="bio-construction"><path d="M345 37V386M186 284H480" /><circle cx="347" cy="284" r="97" strokeDasharray="3 7" /></g>
      <path d="M294 374C299 342 294 316 284 296C274 275 253 259 235 242C215 230 186 212 185 187C185 171 195 166 204 175C220 188 220 207 240 209L287 236C285 193 282 156 286 117C286 75 294 43 307 46C324 47 319 83 319 117L324 189C330 146 339 107 347 66C352 37 365 23 377 31C390 42 380 64 375 89L367 171C383 135 394 103 412 82C425 59 438 55 446 69C454 82 439 107 432 127L414 196C440 177 465 150 483 139C499 130 510 138 505 155C499 173 476 194 465 211C435 260 426 296 406 323L389 375" className="bio-skin" />
      {fingers.map((finger, digit) => <g key={digit} className={digit === 1 ? "bio-acting-finger" : undefined}>{finger.slice(0, -1).map((a, index) => <Bone key={index} a={a as [number, number]} b={finger[index + 1] as [number, number]} width={index === 0 ? 10 : 7 - index * .7} prefix={prefix} />)}</g>)}
      <Bone a={[324, 339]} b={[319, 379]} width={17} prefix={prefix} />
      <Bone a={[373, 337]} b={[373, 379]} width={14} prefix={prefix} />
      {[[-15, 0], [11, -5], [35, 5], [-4, 22], [23, 24]].map(([x, y], i) => <path key={i} d={`M${327+x} ${295+y}q12 -9 20 2q5 12 -5 19q-16 4 -20 -9Z`} className="bio-bone" fill={`url(#${prefix}-hatch)`} />)}
      <path d="M347 380C342 349 347 307 338 282C329 247 326 219 325 189M339 286C298 253 274 231 229 211M344 298C372 255 386 218 401 188M350 308C392 283 415 255 444 221" className="bio-nerve" />
      <path d="M72 298V114Q72 85 103 85H282M389 47H630Q662 47 662 80V313Q662 342 630 342H448" className="bio-signal" />
      <path d="m268 78 14 7-14 7m194 243-14 7 14 7" className="bio-signal" />
      <Node x={72} y={298} active /><Node x={389} y={47} active /><Node x={448} y={342} active />
      <Leader d="M72 249H94" x={101} y={252} title="Click Continue" detail="intent sent" />
      <Leader d="M662 192H643" x={633} y={217} align="end" title="Delivery loaded" detail="result observed" />
      <Signal d="M72 298V114Q72 85 103 85H282" delay={.15} />
      <Pulse x={282} y={85} delay={1.2} />
      <Signal d="M347 380C342 349 347 307 338 282C329 247 326 219 325 189" delay={.3} />
      <Signal d="M389 47H630Q662 47 662 80V313Q662 342 630 342H448" delay={1.8} />
      <Pulse x={448} y={342} delay={2.85} />
    </>
  );
}

function Keeper({ prefix }: { prefix: string }) {
  return (
    <>
      <g className="bio-construction"><path d="M359 29V386M190 74H525M190 342H525" /><path d="M213 55V363M507 55V363" strokeDasharray="2 8" /></g>
      <path d="M337 42C326 96 335 128 331 180C326 234 336 286 335 367L379 368C379 296 365 245 379 188C389 145 380 100 379 43" className="bio-skin" />
      {Array.from({ length: 11 }, (_, i) => {
        const y = 65 + i * 27;
        const shift = Math.sin(i * .61) * 8;
        const spread = 44 + Math.sin(i * .3) * 13;
        return (
          <g key={i} transform={`translate(${(357 + shift).toFixed(2)} ${y})`}>
            <path d={`M-16 -8C-30 -13 -33 -6 ${-spread} -13Q${-spread-16} -17 ${-spread-10} -7L-26 10C-16 20 12 20 25 10L${spread+10} -5Q${spread+20} -17 ${spread} -14C33 -7 29 -13 16 -8Q0 -17 -16 -8Z`} className="bio-bone" fill={`url(#${prefix}-hatch)`} />
            <path d="M-14 -4Q0 -10 15 -3L18 10Q0 21 -17 9Z" className="bio-fine" />
            <path d={`M-22 8C-54 19 -62 8 -99 20M22 8C53 20 67 9 100 20M-71 14-79 6M74 16 82 29`} className="bio-fine" />
            <path d="M-99 20C-62 8 -54 19 -22 8M22 8C53 20 67 9 100 20" className="bio-motion-layer bio-root-charge" style={{ animationDelay: `${.85 + i * .085}s` }} />
          </g>
        );
      })}
      <path d="M356 38C345 105 368 143 356 205C345 261 359 307 358 376" className="bio-tract" />
      <path d="M357 91H198V131H84M358 307H512V266H635" className="bio-signal" />
      <Node x={357} y={91} active /><Node x={358} y={307} active />
      <Leader d="M84 131V141" x={64} y={166} title="Contact" detail="session 01" />
      <Leader d="M635 266V249" x={647} y={214} align="end" title="Delivery" detail="session 01" />
      <g className="bio-annotation"><path d="M571 72V148M565 72H577M565 148H577" className="bio-leader" /><text x="591" y="105" className="bio-note">one</text><text x="591" y="124" className="bio-note">thread</text></g>
      <Signal d="M84 131H198V91H357" />
      <Signal d="M356 38C345 105 368 143 356 205C345 261 359 307 358 376" delay={.8} />
      <Signal d="M358 307H512V266H635" delay={1.9} />
      <Pulse x={357} y={91} delay={.85} /><Pulse x={635} y={266} delay={2.9} />
    </>
  );
}

function Guide({ prefix }: { prefix: string }) {
  return (
    <>
      <g className="bio-construction"><circle cx="329" cy="249" r="151" /><circle cx="329" cy="249" r="123" strokeDasharray="3 6" /><path d="M153 249H660M329 43V386" /></g>
      <path d="M329 249 465 110A194 194 0 0 1 520 279Z" className="bio-range" />
      {Array.from({length:31},(_,i)=>{
        const a=-.88+i*.037;
        return <path key={i} d={`M${point(329,249,182,a)}L${point(329,249,i%5===0?195:189,a)}`} className="bio-fine" />;
      })}
      <path d="M253 72C274 119 267 176 298 213Q308 231 301 251C311 279 347 289 369 278L515 314M290 57C318 118 303 165 338 216Q366 227 367 247L526 273" className="bio-skin" />
      <Bone a={[267, 70]} b={[319, 215]} width={22} prefix={prefix} />
      <g className="bio-joint-movement">
        <Bone a={[353, 255]} b={[514, 290]} width={15} prefix={prefix} />
        <Bone a={[350, 274]} b={[503, 316]} width={10} prefix={prefix} />
      </g>
      <circle cx="329" cy="249" r="28" className="bio-contour" /><circle cx="329" cy="249" r="17" className="bio-fine" /><path d="M310 229Q340 247 313 265M321 224Q350 245 326 272" className="bio-fine" />
      <path d="M329 249 471 104H636" className="bio-signal" />
      <path d="M329 249 456 343H631" className="bio-unavailable" />
      <Node x={329} y={249} active /><Node x={471} y={104} active />
      <path d="M626 335 640 349M640 335 626 349" className="bio-stop" />
      <Leader d="M542 104V94" x={468} y={64} title="Fill street address" detail="available now" />
      <Leader d="M497 343V320" x={491} y={365} title="Click Continue" detail="address required" />
      <text x="69" y="190" className="bio-label bio-annotation">Possible moves</text><text x="69" y="213" className="bio-note bio-annotation">on this page</text>
      <path d="M329 249 509 291" className="bio-motion-layer bio-range-scan" />
      <Signal d="M329 249 471 104H636" delay={1.5} />
      <Pulse x={471} y={104} delay={2.4} />
      <Pulse x={633} y={342} delay={3.4} muted />
    </>
  );
}

function Messenger() {
  const branches = [
    "M244 239C203 234 203 196 175 186L134 164M176 186 176 148 154 123M176 148 199 124M148 173 105 183M134 164 130 127",
    "M249 213C240 180 259 157 245 128L221 91M246 130 265 101 262 68M265 102 293 89M225 98 193 81M237 113 212 113",
    "M275 203C289 161 313 164 326 136L346 99M321 146 310 119 316 91M339 113 369 111M310 119 286 108",
    "M238 261C211 270 190 261 172 284L140 320M173 284 150 277 114 290M153 305 162 337M126 285 107 270M194 268 196 292",
    "M272 282C265 317 290 333 271 365M278 335 314 351 330 376M289 340 296 316M273 359 251 371",
  ];
  return (
    <>
      <g className="bio-construction"><circle cx="269" cy="241" r="120" strokeDasharray="3 7" /><path d="M80 241H631M269 56V377" /></g>
      {branches.map((d,i)=><g key={i}><path d={d} className="bio-dendrite" /><path d={d} className="bio-fine" transform="translate(4 2)" /></g>)}
      <path d="M248 206C258 200 279 193 289 209C300 226 307 230 327 244C306 253 291 260 286 282C274 300 258 281 244 280C224 283 220 270 233 253C245 240 231 225 248 206Z" className="bio-cell" />
      <path d="M252 214C263 205 282 214 285 231C294 252 278 278 257 272C239 266 245 248 243 235Z" className="bio-fine" />
      <circle cx="268" cy="241" r="14" className="bio-contour" /><circle cx="271" cy="237" r="5" className="bio-fine" />
      <path d="M323 244C372 251 394 282 458 274C489 269 510 281 524 295" className="bio-axon" />
      {[[343,253,18],[383,269,9],[423,276,0],[463,274,7]].map(([x,y,angle],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${angle})`}><rect x="-2" y="-8" width="28" height="16" rx="7" className="bio-myelin" /><path d="M5 -7V7M10 -7V7M15 -7V7M20 -7V7" className="bio-fine" /><rect x="-2" y="-8" width="28" height="16" rx="7" className="bio-motion-layer bio-myelin-charge" style={{ animationDelay: `${1.5+i*.17}s` }} /></g>)}
      <path d="M524 295C533 289 536 284 544 284M524 295C535 299 535 308 545 312M524 295C533 319 521 325 527 334" className="bio-contour" />
      {[ [544,284], [545,312], [527,334] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" className="bio-synapse" />)}
      <path d="M571 257C552 281 577 297 565 315C554 336 564 355 587 369M581 249C562 280 587 299 575 319C566 337 578 352 595 361" className="bio-contour" />
      {[ [555,290], [558,314], [548,336] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.5" className="bio-signal-dot bio-neurotransmitter" style={{ animationDelay: `${2.35+i*.13}s` }} />)}
      <g className="bio-state-graph">
        <path d="M403 175H662M403 111H662" className="bio-construction" />
        <path d="M404 175H520" className="bio-unavailable" />
        <g className="bio-result-state">
          <path d="M520 175V111H657" className="bio-signal" />
          <Node x={520} y={111} active />
        </g>
        <path d="M520 82V199" className="bio-event-line" />
        <g className="bio-annotation"><text x="402" y="197" className="bio-note">disabled</text><text x="587" y="97" className="bio-label">enabled</text><text x="437" y="55" className="bio-label">Address filled</text><text x="437" y="75" className="bio-note">12 Cedar Lane</text></g>
      </g>
      <text x="78" y="361" className="bio-micro bio-annotation">CHANGE → NEXT ACTION</text>
      <Signal d="M134 164 175 186C203 196 203 234 244 239" />
      <Signal d="M262 68 265 101 245 128C259 157 240 180 249 213" delay={.18} />
      <Signal d="M346 99 326 136C313 164 289 161 275 203" delay={.36} />
      <Pulse x={268} y={241} delay={1.15} />
      <Signal d="M323 244C372 251 394 282 458 274C489 269 510 281 524 295" delay={1.4} />
      <Pulse x={544} y={284} delay={2.35} />
      <Signal d="M404 175H520V111H657" delay={2.6} />
      <Pulse x={657} y={111} delay={3.65} />
    </>
  );
}

export function BiologyBlueprint({ active, prefix }: { active: number; prefix: string }) {
  let subject: ReactNode;
  switch (active) {
    case 1: subject = <Operator prefix={prefix} />; break;
    case 2: subject = <Keeper prefix={prefix} />; break;
    case 3: subject = <Guide prefix={prefix} />; break;
    case 4: subject = <Messenger />; break;
    default: subject = <Observer prefix={prefix} />;
  }
  return (
    <svg className="runtime-cutaway bio-blueprint" viewBox="0 0 720 420" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`${prefix}-iris`}><circle cx="353" cy="211" r="95" /></clipPath>
        <pattern id={`${prefix}-hatch`} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-24)"><path d="M0 0V5" className="bio-hatch" /></pattern>
        <pattern id={`${prefix}-grid`} width="35" height="35" patternUnits="userSpaceOnUse"><path d="M35 0H0V35" className="bio-grid-line" /></pattern>
      </defs>
      <rect x="35" y="24" width="650" height="371" fill={`url(#${prefix}-grid)`} />
      <g className="bio-registration"><path d="M35 40V24H51M669 24H685V40M35 379V395H51M669 395H685V379" />{Array.from({length:24},(_,i)=><path key={i} d={`M${61+i*26} 395v${i%4===0?-7:-3}`} />)}</g>
      <g className="bio-specimen">{subject}</g>
    </svg>
  );
}
