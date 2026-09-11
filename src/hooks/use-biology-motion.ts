"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useMotionPreference } from "./use-motion-preference";

let manuallyPaused = false;
const pauseListeners = new Set<() => void>();

function subscribeToPause(update: () => void) {
  pauseListeners.add(update);
  return () => {
    pauseListeners.delete(update);
  };
}

const readPause = () => manuallyPaused;
const serverPause = () => false;

function togglePaused() {
  manuallyPaused = !manuallyPaused;
  for (const update of [...pauseListeners]) update();
}

/** Shares the manual preference while gating each study by its own visibility. */
export function useBiologyMotion(ready: boolean) {
  const studyRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const paused = useSyncExternalStore(subscribeToPause, readPause, serverPause);
  const reducedMotion = useMotionPreference();

  useEffect(() => {
    const study = studyRef.current;
    if (!study) return;

    const artwork = study.querySelector<SVGSVGElement>(".runtime-cutaway");
    let disposed = false;

    const updateMotion = () => {
      if (disposed) return;

      const state = !ready || reducedMotion
        ? "still"
        : paused || document.hidden || !visibleRef.current
          ? "paused"
          : "running";

      study.dataset.bioMotion = state;
      study.style.setProperty("--bio-play-state", state === "running" ? "running" : "paused");
    };

    const observer = artwork && typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver((entries) => {
        if (disposed) return;
        const entry = entries.find((item) => item.target === artwork);
        if (!entry) return;

        visibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.6;
        updateMotion();
      }, { threshold: [0, 0.6, 1] })
      : null;

    document.addEventListener("visibilitychange", updateMotion);
    if (artwork) observer?.observe(artwork);
    updateMotion();

    return () => {
      disposed = true;
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updateMotion);
      // Keep the CSS timeline intact when a preference change reruns this effect.
    };
  }, [paused, ready, reducedMotion]);

  return { studyRef, paused, reducedMotion, togglePaused };
}
