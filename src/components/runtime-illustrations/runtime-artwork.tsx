"use client";

import { useId } from "react";
import { runtimeFeatures } from "@/content/runtime-features";
import "./runtime-artwork.css";

const captions = [
  ["What you see", "What Spine reads"],
  ["Continue clicked", "Delivery observed"],
  ["One session", "Contact remembered"],
  ["Address empty", "Continue unavailable"],
  ["Address filled", "Continue enabled"],
] as const;

const sceneFacts = [
  [["name", "Continue"], ["role", "button"], ["state", "enabled"]],
  [["target", "Continue"], ["observed page", "Delivery"], ["result", "navigation complete"]],
  [["session", "01"], ["remembered", "alex@example.com"], ["current page", "Delivery"]],
  [["control", "Continue"], ["available", "no"], ["reason", "address required"]],
  [["changed field", "Street address"], ["before", "Continue disabled"], ["after", "Continue enabled"]],
] as const;

function StructuralLine({ d, width = 5 }: { d: string; width?: number }) {
  return (
    <g strokeLinejoin="round">
      <path d={d} transform="translate(4 6)" stroke="#2b765c" strokeWidth={width + 1} />
      <path d={d} stroke="#d0eabb" strokeWidth={width} />
    </g>
  );
}

function StructuralNode({ x, y, radius = 14 }: { x: number; y: number; radius?: number }) {
  return (
    <g>
      <circle cx={x + 4} cy={y + 6} r={radius} fill="#44896a" />
      <circle cx={x} cy={y} r={radius} fill="#dbedc6" stroke="#eff7d9" strokeWidth="1" />
    </g>
  );
}

/** Inline chapters use a close detail instead of repeating the full page illustration. */
function RuntimeDetail({ active }: { active: number }) {
  return (
    <svg className="runtime-cutaway-detail" viewBox="0 0 360 190" fill="none" aria-hidden="true" focusable="false">
      {active === 1 && (
        <g>
          <text x="25" y="59" className="detail-label">Contact</text>
          <path d="M29 82h143v57H29Z" fill="#508367" />
          <path d="M24 76h143v57H24Z" fill="#eef2d6" stroke="#fbffe9" />
          <text x="38" y="112" className="detail-value" fill="#225d42">Continue</text>
          <StructuralLine d="M178 104h23" width={2} />
          <path d="m195 98 6 6-6 6" stroke="#d0eabb" strokeWidth="2" />
          <text x="217" y="84" className="detail-label">Observed page</text>
          <text x="217" y="116" className="detail-value" fill="#eef2d6">Delivery</text>
        </g>
      )}
      {active === 2 && (
        <g>
          <text x="28" y="59" className="detail-value" fill="#c5ddbd">Contact</text>
          <text x="217" y="59" className="detail-value" fill="#eef2d6">Delivery</text>
          <StructuralLine d="M34 79H323" width={3} />
          <StructuralNode x={34} y={79} radius={5} />
          <StructuralNode x={323} y={79} radius={5} />
          <path d="m169 73 7 6-7 6" stroke="#eff7d9" strokeWidth="2" />
          <text x="28" y="119" className="detail-label">Same session · contact retained</text>
          <text x="28" y="151" className="detail-value" fill="#eef2d6">alex@example.com</text>
        </g>
      )}
      {active === 3 && (
        <g>
          <path d="M24 30H330v52H24Z" fill="#e5edd2" />
          <path d="M24 82H330v5H24Z" fill="#77a17d" />
          <text x="38" y="65" className="detail-value" fill="#225d42">Street address</text>
          <text x="26" y="110" className="detail-label">Fill available</text>
          <path d="M24 129H330" stroke="#8eb391" strokeWidth="1" />
          <text x="25" y="160" className="detail-value" fill="#b0c8ae">Continue</text>
          <text x="180" y="155" className="detail-label">Click unavailable</text>
          <text x="180" y="173" className="detail-label">Address required</text>
        </g>
      )}
      {active === 4 && (
        <g>
          <text x="27" y="48" className="detail-label">Street address filled</text>
          <text x="27" y="81" className="detail-value" fill="#eef2d6">Continue</text>
          <text x="27" y="133" className="detail-value" fill="#b0c8ae">disabled</text>
          <StructuralLine d="M145 125h42" width={2} />
          <path d="m181 119 6 6-6 6" stroke="#d0eabb" strokeWidth="2" />
          <path d="M208 103h129v52H208Z" fill="#508367" />
          <path d="M203 97h129v52H203Z" fill="#d0eabb" stroke="#e8f5d1" />
          <text x="218" y="133" className="detail-value" fill="#225d42">enabled</text>
        </g>
      )}
    </svg>
  );
}

/** A single cutaway, seen through five lenses. All geometry is deliberately static. */
function PageCutaway({ active, prefix }: { active: number; prefix: string }) {
  const paint = (name: string) => `url(#${prefix}-${name})`;
  const delivery = active > 1;
  const enabled = active < 2 || active === 4;
  const inputValue = !delivery ? "alex@example.com" : active === 4 ? "12 Cedar Lane" : "Enter address";

  return (
    <svg className="runtime-cutaway" viewBox="0 0 720 500" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${prefix}-paper`} x1="0" y1="0" x2="330" y2="370" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffed" />
          <stop offset=".48" stopColor="#eeefda" />
          <stop offset="1" stopColor="#b8cabb" />
        </linearGradient>
        <linearGradient id={`${prefix}-edge`} x1="0" y1="0" x2="330" y2="370" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d5e4c6" />
          <stop offset="1" stopColor="#587c65" />
        </linearGradient>
        <radialGradient id={`${prefix}-shadow`}>
          <stop stopColor="#001d18" stopOpacity=".85" />
          <stop offset="1" stopColor="#001d18" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${prefix}-fade`} x2="0" y2="1">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <pattern id={`${prefix}-grain`} width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".5" fill="#062f26" opacity=".28" />
        </pattern>
        <pattern id={`${prefix}-hatch`} width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 4 4 0" stroke="#062f26" strokeWidth=".7" opacity=".45" />
        </pattern>
        <mask id={`${prefix}-texture`}>
          <rect width="340" height="370" fill={paint("fade")} />
        </mask>
      </defs>

      <ellipse cx="353" cy="405" rx="284" ry="67" fill={paint("shadow")} transform="rotate(10 353 405)" />

      {/* One exposed structural layer behind the page. */}
      {[1].map((layer) => (
        <g key={layer} transform={`matrix(.94 .22 -.38 .82 ${205 + layer * 24} ${37 + layer * 27})`}>
          <path d="M0 0H340V370H0Z" fill="#4f8b70" stroke="#a8cba4" strokeWidth=".8" />
          <path d="m0 370 8 8h340l-8-8Zm340-370 8 8v370l-8-8Z" fill={paint("edge")} />
          <path d="m0 373 340 0m-337 3h340m0-371v369" stroke="#163f31" strokeWidth=".75" />
          <path d="M25 30H314M25 53H225M25 310H310M25 333H310" stroke="#b1d3ab" strokeWidth="1" opacity=".5" />
        </g>
      ))}

      {/* One recognizable web control gives the cutaway a concrete subject. */}
      <g transform="matrix(.94 .22 -.38 .82 205 37)">
        <path d="m0 370 8 8h340l-8-8Zm340-370 8 8v370l-8-8Z" fill={paint("edge")} stroke="#4b7059" strokeWidth=".6" />
        <path d="M0 0H340V370H0Z" fill={paint("paper")} stroke="#eef5d8" strokeWidth="1.2" />
        <path d="M0 0H340V370H0Z" fill={paint("grain")} mask={paint("texture")} />
        <text x="28" y="85" fill="#164d3a" fontSize="40" letterSpacing="-2">{delivery ? "Delivery" : "Contact"}</text>
        <text x="28" y="114" fill="#5a785e" fontSize="12">{delivery ? "Contact: alex@example.com" : active === 1 ? "Continue clicked. Next: Delivery." : "Your details, one step at a time."}</text>
        <text x="28" y="158" fill="#3f694e" fontSize="14">{delivery ? "Street address" : "Email"}</text>
        <path d="M28 176H312V227H28Z" fill="#799b7c" />
        <path d="M32 181H312V227H32Z" fill={active === 4 ? "#d9edc4" : "#e4e9d2"} />
        <path d="M28 228H313" stroke="#faffed" strokeWidth="1.5" />
        <text x="44" y="208" fill={delivery && active !== 4 ? "#708569" : "#23563f"} fontSize="17" letterSpacing="-.5">{inputValue}</text>
        <path d="M29 274H318V344H29Z" fill={enabled ? "#113f2d" : "#849a79"} />
        <path d="M24 266H313V336H24Z" fill={enabled ? "#1e6049" : "#bbccb0"} stroke={enabled ? "#6ba884" : "#cfe0c1"} strokeWidth="1" />
        <path d="M24 267H313" stroke={enabled ? "#90c79e" : "#edf6dc"} strokeWidth="1" />
        <text x="44" y="312" fill={enabled ? "#f0f5d9" : "#56764f"} fontSize="31" fontWeight="500" letterSpacing="-1.5">Continue</text>
        <path d="M260 301h27m-10-10 10 10-10 10" stroke={enabled ? "#d0eabb" : "#7a9670"} strokeWidth="2" />
        {active === 4 && <path d="M28 172H312V231H28Z" stroke="#7eb48a" strokeWidth="2" />}
      </g>

      {/* The exposed spine connects the subject of each reading to its observed facts. */}
      <g className="cutaway-connection">
        {active === 2 ? (
          <>
            <path d="M453 204 475 209 487 192" stroke="#174c38" strokeWidth="10" />
            <path d="M453 198 475 203 487 186" stroke="#d0eabb" strokeWidth="5" />
          </>
        ) : active === 4 ? (
          <>
            <path d="M420 277 443 283 455 267" stroke="#174c38" strokeWidth="10" />
            <path d="M420 271 443 277 455 261" stroke="#d0eabb" strokeWidth="5" />
          </>
        ) : <>
        <path d="M385 356 407 362 425 336" stroke="#174c38" strokeWidth="10" />
        <path d="M385 350 407 356 425 330" stroke="#d0eabb" strokeWidth="5" />
        </>}
      </g>

      <g transform="matrix(.94 .22 -.38 .82 467 149)">
        <StructuralLine d="M40 30V235" width={13} />
        <StructuralLine d="M40 55H87M40 132H87M40 210H87" width={7} />
        {[55, 132, 210].map((y) => <StructuralNode key={y} x={87} y={y} radius={13} />)}
      </g>
      {/* Upright values stay readable and can be matched directly to the page. */}
      {sceneFacts[active].map(([label, value], index) => (
        <g className="cutaway-fact" key={label} transform={`translate(${551 - index * 29} ${203 + index * 64})`}>
          <text className="cutaway-fact-label">{label}</text>
          <text y="26" className="cutaway-fact-value" data-long={value.length > 12}>{value}</text>
        </g>
      ))}

    </svg>
  );
}

export function RuntimeArtwork({ active }: { active: number }) {
  const prefix = `cutaway-${useId().replace(/:/g, "")}`;
  const index = active >= 0 && active < runtimeFeatures.length ? active : 0;
  const feature = runtimeFeatures[index];
  const caption = captions[index];

  return (
    <div className="runtime-study" data-scene={feature.id}>
      <div className="runtime-art-header" aria-hidden="true">
        <span>One page, understood</span>
        <span>{feature.number} / 05</span>
      </div>
      <div className="runtime-art-object" role="img" aria-label={feature.illustration}>
        <PageCutaway active={index} prefix={prefix} />
        {index > 0 && <RuntimeDetail active={index} />}
        <dl className="runtime-readable-facts" aria-hidden="true">
          {sceneFacts[0].map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </div>
      <div className="runtime-art-caption" aria-hidden="true">
        <span>{caption[0]}</span>
        <svg viewBox="0 0 64 16" fill="none"><path d="M0 8h62m-7-7 7 7-7 7" /></svg>
        <span>{caption[1]}</span>
      </div>
    </div>
  );
}
