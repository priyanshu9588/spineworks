"use client";

import { useId } from "react";
import { runtimeFeatures } from "@/content/runtime-features";
import { RuntimeMotion } from "./runtime-motion";
import "./runtime-artwork.css";

const masterImage = "/illustrations/runtime-master-v3.webp";

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

/** The raster supplies the material; the fallback keeps its exact control positions. */
function MasterBase({ prefix }: { prefix: string }) {
  return (
    <g className="runtime-master-base">
      <defs>
        <linearGradient id={`${prefix}-ivory`} x1="173" y1="129" x2="973" y2="1114" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fffbea" />
          <stop offset="1" stopColor="#e6e4cd" />
        </linearGradient>
        <linearGradient id={`${prefix}-pine`} x1="247" y1="827" x2="889" y2="973" gradientUnits="userSpaceOnUse">
          <stop stopColor="#17614c" />
          <stop offset="1" stopColor="#064131" />
        </linearGradient>
      </defs>
      <rect width="1920" height="1280" fill="#075044" />
      <g className="runtime-master-fallback">
        <rect x="185" y="144" width="800" height="985" rx="12" fill="#022f26" opacity=".5" />
        <rect x="173" y="129" width="800" height="985" rx="12" fill={`url(#${prefix}-ivory)`} stroke="#fffdec" strokeWidth="5" />
        <rect x="250" y="569" width="643" height="164" rx="12" fill="#b3ae8c" />
        <rect x="258" y="577" width="629" height="150" rx="7" fill="#f5f2de" />
        <path d="M887 898H1277M1117 898V340M1117 412H1277M1117 655H1277" transform="translate(5 7)" fill="none" stroke="#023e2d" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M887 898H1277M1117 898V340M1117 412H1277M1117 655H1277" fill="none" stroke="#cde6b3" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="253" y="835" width="642" height="146" rx="12" fill="#092e23" />
        <rect x="247" y="827" width="642" height="146" rx="12" fill={`url(#${prefix}-pine)`} stroke="#689575" strokeWidth="4" />
      </g>
      <image
        href={masterImage}
        width="1920"
        height="1280"
        preserveAspectRatio="xMidYMid meet"
        onError={(event) => { event.currentTarget.style.display = "none"; }}
      />
    </g>
  );
}

/** State tints stay inside the photographed bevel, retaining its light and shadow. */
function ControlState({ active }: { active: number }) {
  return (
    <g className="runtime-control-state">
      {(active === 2 || active === 3) && (
        <rect x="256" y="833" width="629" height="135" rx="8" fill="#d9e2c6" opacity=".69" />
      )}
      {active === 4 && (
        <>
          <rect x="260" y="581" width="623" height="142" rx="5" fill="#bbd8a0" opacity=".2" />
          <rect x="261" y="581" width="621" height="142" rx="5" fill="none" stroke="#89a66a" strokeWidth="3" opacity=".65" />
          <rect x="255" y="834" width="630" height="132" rx="8" fill="none" stroke="#c9e3aa" strokeWidth="3" opacity=".7" />
        </>
      )}
    </g>
  );
}

function PageCutaway({ active, prefix }: { active: number; prefix: string }) {
  const delivery = active > 1;
  const enabled = active < 2 || active === 4;
  const inputValue = !delivery ? "alex@example.com" : active === 4 ? "12 Cedar Lane" : "Enter address";

  return (
    <svg className="runtime-cutaway" viewBox="0 0 1920 1280" fill="none" aria-hidden="true" focusable="false">
      <MasterBase prefix={`${prefix}-full`} />
      <ControlState active={active} />
      <g className="runtime-page-labels">
        <text x="250" y="320" className="cutaway-page-heading">{delivery ? "Delivery" : "Contact"}</text>
        <text x="252" y="384" className="cutaway-page-summary">
          {delivery ? "Contact: alex@example.com" : active === 1 ? "Continue clicked. Next: Delivery." : "Your details, one step at a time."}
        </text>
        <text x="251" y="535" className="cutaway-field-label">{delivery ? "Street address" : "Email"}</text>
        <text x="280" y="668" className="cutaway-field-value" data-placeholder={delivery && active !== 4}>{inputValue}</text>
        <g className="cutaway-button-label" data-enabled={enabled}>
          <text x="294" y="922">Continue</text>
          <path d="M780 900h64m-22-22 22 22-22 22" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      {sceneFacts[active].map(([label, value], index) => (
        <g className="cutaway-fact" key={label} transform={`translate(1340 ${412 + index * 243})`}>
          <text y="-36" className="cutaway-fact-label">{label}</text>
          <text y="36" className="cutaway-fact-value" data-long={value.length > 12}>{value}</text>
        </g>
      ))}
    </svg>
  );
}

/** A nested viewport crops the same material without stretching its geometry. */
function MasterCrop({
  prefix,
  subject,
  active,
  x,
  y,
  width,
}: {
  prefix: string;
  subject: "field" | "button";
  active: number;
  x: number;
  y: number;
  width: number;
}) {
  const field = subject === "field";
  const cropWidth = field ? 650 : 651;
  const cropHeight = field ? 170 : 158;

  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={width * cropHeight / cropWidth}
      viewBox={field ? "247 566 650 170" : "245 822 651 158"}
      preserveAspectRatio="xMidYMid meet"
      overflow="hidden"
    >
      {!field && (
        <defs>
          <clipPath id={`${prefix}-button-crop`}>
            <rect x="247" y="825" width="647" height="151" rx="12" />
          </clipPath>
        </defs>
      )}
      <g clipPath={field ? undefined : `url(#${prefix}-button-crop)`}>
        <MasterBase prefix={prefix} />
        <ControlState active={active} />
      </g>
    </svg>
  );
}

function DetailArrow({ d }: { d: string }) {
  return <path d={d} stroke="#cce5b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />;
}

/** Compact scenes show the same carved controls, with labels sized for a phone. */
function RuntimeDetail({ active, prefix }: { active: number; prefix: string }) {
  return (
    <svg className="runtime-cutaway-detail" viewBox="0 0 360 190" fill="none" aria-hidden="true" focusable="false">
      {active === 1 && (
        <g>
          <text x="24" y="57" className="detail-label">Contact</text>
          <MasterCrop prefix={`${prefix}-action`} subject="button" active={1} x={22} y={83} width={164} />
          <text x="36" y="111" className="detail-control-value">Continue</text>
          <DetailArrow d="M195 104h19m-6-6 6 6-6 6" />
          <text x="228" y="78" className="detail-label">Observed page</text>
          <text x="228" y="115" className="detail-value">Delivery</text>
          <text x="24" y="150" className="detail-label">clicked</text>
        </g>
      )}
      {active === 2 && (
        <g>
          <text x="28" y="37" className="detail-value">Contact</text>
          <text x="226" y="37" className="detail-value">Delivery</text>
          <path d="M31 56H331" stroke="#173e2d" strokeWidth="5" />
          <DetailArrow d="M29 53H329m-153-5 6 5-6 5" />
          <text x="28" y="85" className="detail-label">Same session · contact retained</text>
          <MasterCrop prefix={`${prefix}-session`} subject="field" active={0} x={26} y={103} width={308} />
          <text x="42" y="153" className="detail-value detail-value-on-ivory">alex@example.com</text>
        </g>
      )}
      {active === 3 && (
        <g>
          <MasterCrop prefix={`${prefix}-capability-field`} subject="field" active={3} x={24} y={24} width={310} />
          <text x="40" y="74" className="detail-value detail-value-on-ivory">Street address</text>
          <text x="26" y="125" className="detail-label">Fill available</text>
          <MasterCrop prefix={`${prefix}-capability-button`} subject="button" active={3} x={25} y={147} width={145} />
          <text x="37" y="173" className="detail-control-value detail-value-disabled">Continue</text>
          <text x="190" y="157" className="detail-label">Click unavailable</text>
          <text x="190" y="176" className="detail-label">Address required</text>
        </g>
      )}
      {active === 4 && (
        <g>
          <text x="27" y="42" className="detail-label">Street address filled</text>
          <text x="27" y="75" className="detail-value">Continue</text>
          <MasterCrop prefix={`${prefix}-delta-before`} subject="button" active={3} x={25} y={103} width={132} />
          <text x="39" y="127" className="detail-control-value detail-value-disabled">disabled</text>
          <DetailArrow d="M174 119h17m-6-6 6 6-6 6" />
          <MasterCrop prefix={`${prefix}-delta-after`} subject="button" active={4} x={207} y={103} width={132} />
          <text x="224" y="127" className="detail-control-value">enabled</text>
        </g>
      )}
    </svg>
  );
}

export function RuntimeArtwork({ active, motionReady = false }: { active: number; motionReady?: boolean }) {
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
        <RuntimeMotion enabled={motionReady && index === 0}>
          <PageCutaway active={index} prefix={prefix} />
        </RuntimeMotion>
        {index > 0 && <RuntimeDetail active={index} prefix={prefix} />}
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
