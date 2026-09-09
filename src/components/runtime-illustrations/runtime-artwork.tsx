"use client";

import { useId } from "react";
import { runtimeFeatures } from "@/content/runtime-features";
import "./runtime-artwork.css";

const captions = [
  ["The page", "Its meaning"],
  ["An intention", "An observed effect"],
  ["Many steps", "One continuous session"],
  ["A control", "Its possibilities"],
  ["A new state", "Only what changed"],
] as const;

const documentChannels = "M86 54V330 M86 124H310 M156 124V58H240 M242 124V89H289 M86 206H310 M146 206V166H209 M222 206V245H278 M86 295H310 M140 295V330H203 M238 295V268H293";

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
          <StructuralLine d="M103 93H241" width={4} />
          <circle cx="71" cy="99" r="34" stroke="#317e5e" strokeWidth="5" />
          <circle cx="67" cy="93" r="34" stroke="#d0eabb" strokeWidth="4" />
          <circle cx="67" cy="93" r="20" stroke="#d0eabb" strokeWidth="1.5" />
          <StructuralNode x={67} y={93} radius={5} />
          <path d="m222 86 9 7-9 7" stroke="#d0eabb" strokeWidth="2" />
          <StructuralNode x={279} y={93} radius={36} />
          <path d="m261 93 12 13 26-28" stroke="#1e6049" strokeWidth="4" />
        </g>
      )}
      {active === 2 && (
        <g>
          <StructuralLine d="M39 93H315" width={5} />
          {[65, 177, 289].map((x, i) => (
            <g key={x}>
              <StructuralNode x={x} y={93} radius={24} />
              <text className="cutaway-index" x={x} y="101" textAnchor="middle">{i + 1}</text>
            </g>
          ))}
          <path d="M65 132v14h224v-14" stroke="#8cb49a" strokeWidth="1" />
        </g>
      )}
      {active === 3 && (
        <g>
          <StructuralLine d="M83 93h77V35h90M160 93h90M160 93v59" width={4} />
          <path d="M160 152h90" stroke="#a2bfa3" strokeWidth="2" strokeDasharray="3 5" />
          <StructuralNode x={71} y={93} radius={17} />
          <StructuralNode x={271} y={35} radius={22} />
          <StructuralNode x={271} y={93} radius={22} />
          <path d="M266 27v16m10-16v16m-10-8h10" stroke="#1e6049" strokeWidth="2" />
          <path d="m263 90 8 8 8-8" stroke="#1e6049" strokeWidth="2" />
          <circle cx="271" cy="152" r="22" stroke="#a2bfa3" strokeWidth="1.5" strokeDasharray="2 4" />
          <path d="m265 146 12 12m0-12-12 12" stroke="#a2bfa3" strokeWidth="1.5" />
        </g>
      )}
      {active === 4 && (
        <g>
          <path d="M55 42h236M55 57h201M55 138h236M55 153h172" stroke="#8aaf91" strokeWidth="2" />
          <path d="M50 81h260v36H50Z" fill="#60916e" />
          <path d="M46 75h260v36H46Z" fill="#d0eabb" />
          <path d="M64 93h177m35-9v18m-9-9h18" stroke="#1e6049" strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}

/** A single cutaway, seen through five lenses. All geometry is deliberately static. */
function PageCutaway({ active, prefix }: { active: number; prefix: string }) {
  const paint = (name: string) => `url(#${prefix}-${name})`;

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
        <mask id={`${prefix}-channels`}>
          <path d={documentChannels} stroke="white" strokeWidth="21" />
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

      {/* The document hierarchy is cut into one continuous architectural surface. */}
      <g transform="matrix(.94 .22 -.38 .82 205 37)">
        <path d="m0 370 8 8h340l-8-8Zm340-370 8 8v370l-8-8Z" fill={paint("edge")} stroke="#4b7059" strokeWidth=".6" />
        <path d="M0 0H340V370H0Z" fill={paint("paper")} stroke="#eef5d8" strokeWidth="1.2" />
        <path d="M0 0H340V370H0Z" fill={paint("grain")} mask={paint("texture")} />
        <path d={documentChannels} transform="translate(-1 -1)" stroke="#faffea" strokeWidth="24" />
        <path d={documentChannels} stroke="#164733" strokeWidth="21" />
        <g mask={paint("channels")}>
          <path d={documentChannels} transform="translate(4 6)" stroke="#789b76" strokeWidth="20" />
          <path d={documentChannels} transform="translate(4 6)" stroke={paint("grain")} strokeWidth="20" />
        </g>
        {(active === 1 || active === 3) && <path d="M238 298H308" stroke="#c5e4ad" strokeWidth="9" />}
        {active === 4 && <path d="M190 209H308" stroke="#c5e4ad" strokeWidth="9" />}
      </g>

      {/* Exposed ribs join the surface directly to its underlying structure. */}
      <g>
        <path d="M449 213 466 217 484 209M418 280 438 284 455 272M384 353 408 358 425 336" stroke="#174c38" strokeWidth="9" />
        <path d="M449 207 466 211 484 203M418 274 438 278 455 266M384 347 408 352 425 330" stroke="#a8cda0" strokeWidth="4" />
      </g>

      {/* A free-standing spine replaces the familiar floating inspector card. */}
      <g transform="matrix(.94 .22 -.38 .82 467 149)">

        {active === 0 && (
          <g>
            <StructuralLine d="M40 30V235" width={13} />
            <StructuralLine d="M40 55H87M40 132H87M40 210H87" width={7} />
            {[55, 132, 210].map((y) => <StructuralNode key={y} x={87} y={y} radius={13} />)}
            <text x="116" y="63" className="cutaway-role">structure</text>
            <text x="116" y="140" className="cutaway-role">state</text>
            <text x="116" y="218" className="cutaway-role">action</text>
          </g>
        )}
        {active === 1 && (
          <g>
            <StructuralLine d="M40 30V235M40 60H67M40 205H152" width={7} />
            <StructuralLine d="M115 60h60v103" width={4} />
            <circle cx="96" cy="66" r="34" stroke="#388264" strokeWidth="7" />
            <circle cx="92" cy="60" r="34" stroke="#d0eabb" strokeWidth="5" />
            <circle cx="92" cy="60" r="21" stroke="#d0eabb" strokeWidth="1.5" />
            <StructuralNode x={92} y={60} radius={5} />
            <StructuralNode x={175} y={205} radius={42} />
            <path d="m152 205 15 15 29-32" stroke="#1b5a43" strokeWidth="5" />
          </g>
        )}
        {active === 2 && (
          <g>
            <StructuralLine d="M40 30V235" width={9} />
            <StructuralLine d="M40 55H153V132H83V210H178" width={5} />
            {[ [83, 55], [153, 132], [83, 210] ].map(([x, y], i) => (
              <g key={y}>
                <StructuralNode x={x} y={y} radius={22} />
                <text x={x} y={y + 7} className="cutaway-index" textAnchor="middle">{i + 1}</text>
              </g>
            ))}
            <path d="m169 201 9 9-9 9" stroke="#d0eabb" strokeWidth="3" />
          </g>
        )}
        {active === 3 && (
          <g>
            <StructuralLine d="M40 30V235" width={11} />
            <StructuralLine d="M40 55H146M40 132H146" width={6} />
            <path d="M40 210H146" stroke="#9ebca3" strokeWidth="3" strokeDasharray="3 6" />
            <StructuralNode x={174} y={55} radius={30} />
            <path d="M168 44v22m12-22v22m-12-11h12m-15-11h6m-6 22h6m6-22h6m-6 22h6" stroke="#1c5740" strokeWidth="2" />
            <StructuralNode x={174} y={132} radius={30} />
            <path d="m163 128 11 11 11-11" stroke="#1c5740" strokeWidth="3" />
            <circle cx="174" cy="210" r="30" stroke="#a3c29a" strokeWidth="1.5" strokeDasharray="2 4" />
            <path d="m165 201 18 18m0-18-18 18" stroke="#a3c29a" strokeWidth="2" />
          </g>
        )}
        {active === 4 && (
          <g>
            <StructuralLine d="M40 30V235" width={11} />
            <path d="M40 55h149M40 210h149" stroke="#8eb59b" strokeWidth="2" strokeDasharray="3 6" />
            <StructuralLine d="M40 132h47" width={6} />
            <path d="M87 108h134v55H87Z" fill="#649c73" />
            <path d="M83 102h134v55H83Z" fill="#d3edb4" />
            <path d="M83 157h134v6H83Z" fill={paint("hatch")} />
            <path d="M103 129h65m25-9v18m-9-9h18" stroke="#1d5b40" strokeWidth="3" />
          </g>
        )}
      </g>

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
        <span>Inside the runtime</span>
        <span>{feature.number} / 05</span>
      </div>
      <div className="runtime-art-object" role="img" aria-label={feature.illustration}>
        <PageCutaway active={index} prefix={prefix} />
        {index > 0 && <RuntimeDetail active={index} />}
      </div>
      <div className="runtime-art-caption" aria-hidden="true">
        <span>{caption[0]}</span>
        <svg viewBox="0 0 64 16" fill="none"><path d="M0 8h62m-7-7 7 7-7 7" /></svg>
        <span>{caption[1]}</span>
      </div>
    </div>
  );
}
