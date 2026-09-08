"use client";

import { type PointerEvent, useId, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useInView, useSpring } from "motion/react";
import { runtimeFeatures } from "@/content/runtime-features";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import { SemanticStudy } from "./semantic-study";
import { ActionStudy, actionThread } from "./action-study";
import { SessionStudy, identityThread } from "./session-study";
import { CapabilityStudy } from "./capability-study";
import { DeltaStudy } from "./delta-study";
import "./runtime-artwork.css";

const studies = [SemanticStudy, ActionStudy, SessionStudy, CapabilityStudy, DeltaStudy];
const flowPaths = [
  "M97 180C179 174 185 233 267 239C306 240 320 162 361 132C375 121 391 112 407 108",
  actionThread,
  identityThread,
  "M178 358C172 330 190 303 216 284C245 261 266 226 276 194L278 185C324 161 381 157 417 96",
  "M254 226C294 238 330 233 373 217C402 206 428 186 446 161",
];

function subscribeVisibility(update: () => void) {
  document.addEventListener("visibilitychange", update);
  return () => document.removeEventListener("visibilitychange", update);
}

const readVisibility = () => document.visibilityState === "visible";
const serverVisibility = () => true;

export function RuntimeArtwork({ active }: { active: number }) {
  const prefix = `study-${useId().replaceAll(":", "")}`;
  const frameRef = useRef<HTMLDivElement>(null);
  const visible = useInView(frameRef, { margin: "80px" });
  const reducedMotion = useMotionPreference();
  const pageVisible = useSyncExternalStore(subscribeVisibility, readVisibility, serverVisibility);
  const [paused, setPaused] = useState(false);
  const [replay, setReplay] = useState(0);
  const tiltX = useSpring(0, { stiffness: 110, damping: 23 });
  const tiltY = useSpring(0, { stiffness: 110, damping: 23 });
  const animate = visible && pageVisible && !reducedMotion && !paused;
  const feature = runtimeFeatures[active];
  const Study = studies[active];

  function resetTilt() {
    tiltX.set(0);
    tiltY.set(0);
  }

  function followPointer(event: PointerEvent<HTMLDivElement>) {
    if (!animate || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -4);
    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 4);
  }

  return (
    <div
      ref={frameRef}
      className="runtime-study"
      data-paused={!visible || !pageVisible}
      data-still={paused || reducedMotion}
      onPointerMove={followPointer}
      onPointerLeave={resetTilt}
    >
      <div className="study-notation" aria-hidden="true">
        <span>Fig. {feature.number} <span className="study-notation-slash">/</span> {feature.verb}</span>
        <span className="study-registration">+</span>
      </div>
      <motion.div className="study-surface" style={{ rotateX: animate ? tiltX : 0, rotateY: animate ? tiltY : 0, transformPerspective: 1000 }}>
      <svg
        viewBox="0 0 640 420"
        className="study-drawing"
        role="img"
        aria-labelledby={`${prefix}-title ${prefix}-description`}
      >
        <title id={`${prefix}-title`}>{feature.title}</title>
        <desc id={`${prefix}-description`}>{feature.illustration}</desc>
        <defs>
          <pattern id={`${prefix}-glyphs`} width="36" height="32" patternUnits="userSpaceOnUse">
            <g fill="var(--study-ink)" fontFamily="var(--font-commit-mono), monospace" fontSize="8">
              <text x="1" y="8" opacity=".42">: + ·</text>
              <text x="5" y="19" opacity=".28">. : +</text>
              <text x="0" y="30" opacity=".38">+ · :</text>
            </g>
          </pattern>
          <pattern id={`${prefix}-fine`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".65" fill="var(--study-ink)" opacity=".35" />
          </pattern>
          <pattern id={`${prefix}-hatch`} width="5" height="5" patternTransform="rotate(28)" patternUnits="userSpaceOnUse">
            <path d="M0 0V5" stroke="var(--study-ink)" strokeWidth=".7" opacity=".3" />
          </pattern>
          <linearGradient id={`${prefix}-wash`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#d1dfd0" />
            <stop offset=".5" stopColor="#ecf1e6" />
            <stop offset="1" stopColor="#e0e9da" />
          </linearGradient>
        </defs>
        <g className="study-guide" aria-hidden="true">
          <path d="M24 34h10m-5-5v10M606 34h10m-5-5v10M24 386h10m-5-5v10M606 386h10m-5-5v10" />
        </g>
        <AnimatePresence initial={false} mode="wait">
          <motion.g
            key={`${feature.id}-${replay}`}
            data-study={feature.id}
            initial={{ opacity: 0, y: reducedMotion || paused ? 0 : 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion || paused ? 0 : 0.24, ease: "easeOut" }}
          >
            <Study prefix={prefix} />
            {animate && (
              <g className="study-flow" aria-hidden="true">
                <circle r="7" fill="var(--study-accent)" opacity=".09" />
                <path d="M-3 0H3M0-3V3" stroke="var(--study-accent)" strokeWidth="1.5" />
                <animateMotion path={flowPaths[active]} dur="7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.16;.24;.7;.8;1" dur="7s" repeatCount="indefinite" />
              </g>
            )}
          </motion.g>
        </AnimatePresence>
      </svg>
      </motion.div>
      <div className="study-notation study-notation-bottom">
        <div className="study-controls">
          {!reducedMotion && (
            <>
              <button type="button" className="study-control" aria-label="Replay illustration" onClick={() => { resetTilt(); setPaused(false); setReplay((value) => value + 1); }}>
                <span aria-hidden="true">↺</span> Replay
              </button>
              <button type="button" className="study-control" aria-label={paused ? "Play illustration animation" : "Pause illustration animation"} onClick={() => { resetTilt(); setPaused((value) => !value); }}>
                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" fill="currentColor">
                  {paused ? <path d="M3 1v10l8-5Z" /> : <path d="M2 1h3v10H2zM8 1h3v10H8z" />}
                </svg>
                {paused ? "Play" : "Pause"}
              </button>
            </>
          )}
        </div>
        <span aria-hidden="true">{feature.notation}</span>
      </div>
    </div>
  );
}
