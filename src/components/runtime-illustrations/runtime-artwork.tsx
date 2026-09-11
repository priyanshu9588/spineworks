"use client";

import { useId } from "react";
import { runtimeFeatures } from "@/content/runtime-features";
import { useBiologyMotion } from "@/hooks/use-biology-motion";
import { BiologyBlueprint } from "./biology-blueprints";
import "./runtime-artwork.css";
import "./biology-motion.css";

/** Five different anatomical studies, following one real sequence of page states. */
export function RuntimeArtwork({ active, motionReady = false }: { active: number; motionReady?: boolean }) {
  const prefix = `biology-${useId().replace(/:/g, "")}`;
  const index = active >= 0 && active < runtimeFeatures.length ? active : 0;
  const feature = runtimeFeatures[index];
  const { studyRef, paused, reducedMotion, togglePaused } = useBiologyMotion(motionReady);

  return (
    <div ref={studyRef} className="runtime-study" data-scene={feature.id} data-bio-motion="still">
      <div className="runtime-art-header">
        <span className="bio-persona"><span className="bio-persona-mark" aria-hidden="true" />{feature.persona}</span>
        <span className="bio-system">{feature.system}</span>
        {!reducedMotion && motionReady && <button type="button" className="bio-motion-toggle" onClick={togglePaused} aria-label={paused ? "Play illustration motion" : "Pause illustration motion"} title={paused ? "Play motion" : "Pause motion"}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">{paused ? <path d="m5 3 7 5-7 5V3Z" /> : <path d="M5 3v10M11 3v10" />}</svg>
        </button>}
      </div>
      <div className="runtime-art-object" role="img" aria-label={feature.illustration}>
        <BiologyBlueprint active={index} prefix={prefix} />
        <div className="runtime-readable-facts" aria-hidden="true">
          <dl><dt>{feature.beforeLabel}</dt><dd>{feature.before}</dd></dl>
          {feature.id === "capability"
            ? <span className="bio-evidence-divider" />
            : <svg className="bio-evidence-arrow" viewBox="0 0 32 16" fill="none"><path d="M1 8h28m-6-6 6 6-6 6" /></svg>}
          <dl><dt>{feature.afterLabel}</dt><dd className={feature.id === "delta" ? "bio-result-fact" : undefined}>{feature.after}</dd></dl>
        </div>
      </div>
      <div className="runtime-art-caption" aria-hidden="true">
        <span>{feature.caption}</span>
        <span className="bio-plate-number">{feature.number} / 05</span>
      </div>
    </div>
  );
}
