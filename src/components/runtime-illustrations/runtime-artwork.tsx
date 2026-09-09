"use client";

import { useId } from "react";
import { runtimeFeatures } from "@/content/runtime-features";
import { RuntimeInspector } from "./runtime-inspector";
import "./runtime-artwork.css";

export function RuntimeArtwork({ active }: { active: number }) {
  const descriptionId = useId();
  const feature = runtimeFeatures[active] ?? runtimeFeatures[0];
  const saved = active > 0 && active < 4;
  const region = active === 4 ? "North America" : "Europe";

  return (
    <div className="runtime-study" data-scene={feature.id}>
      <div className="demo-shell" role="img" aria-labelledby={descriptionId}>
        <p id={descriptionId} className="demo-sr-only">{feature.illustration}</p>
        <div className="demo-toolbar" aria-hidden="true">
          <span className="demo-location">
            <svg viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2.5" width="12" height="11" rx="1.5" />
              <path d="M2 6h12M5 4.3h.1M7 4.3h.1" />
            </svg>
            workspace / settings
          </span>
          <span className="demo-session"><span /> Session 01</span>
        </div>

        <div className="demo-content" aria-hidden="true">
          <div className="demo-page">
            <div className="demo-page-heading">
              <span className="demo-page-kicker">Atlas</span>
              <strong>Workspace settings</strong>
            </div>
            <div className="demo-fields">
              <div className="demo-field" data-emphasis={active === 0 || active === 3}>
                <span className="demo-field-label">Workspace name</span>
                <div className="demo-input"><span>Atlas</span></div>
              </div>
              <div className="demo-field" data-emphasis={active === 0 || active === 3} data-changed={active === 4}>
                <span className="demo-field-label">Region</span>
                <div className="demo-input">
                  <span>{region}</span>
                  <svg viewBox="0 0 12 12" fill="none"><path d="m3 4.5 3 3 3-3" /></svg>
                </div>
              </div>
            </div>
            <div className="demo-page-actions">
              <span className="demo-save" data-disabled={saved}>Save changes <span>↗</span></span>
              <span className="demo-page-status" data-saved={saved}>
                <span className="demo-status-symbol">{saved ? "✓" : "·"}</span>
                {saved ? "Saved" : "Unsaved changes"}
              </span>
            </div>
          </div>
          <div className="demo-inspector-stage">
            {runtimeFeatures.map((item, index) => (
              <div className="demo-inspector-panel" data-visible={active === index} key={item.id}>
                <RuntimeInspector active={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="demo-footer" aria-hidden="true">
          <span>{feature.number} <span className="demo-footer-divider">/</span> {feature.verb}</span>
          <span>Illustrative example</span>
        </div>
      </div>
    </div>
  );
}
