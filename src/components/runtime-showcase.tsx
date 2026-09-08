"use client";

import { type KeyboardEvent, useRef, useState } from "react";
import { motion } from "motion/react";
import { runtimeFeatures } from "@/content/runtime-features";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import { RuntimeArtwork } from "./runtime-illustrations/runtime-artwork";

export function RuntimeShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const feature = runtimeFeatures[active];
  const reducedMotion = useMotionPreference();

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;

    switch (event.key) {
      case "ArrowDown":
        next = (index + 1) % runtimeFeatures.length;
        break;
      case "ArrowUp":
        next = (index - 1 + runtimeFeatures.length) % runtimeFeatures.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = runtimeFeatures.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="col-span-full -mx-4 grid md:-mx-5 lg:-mx-6 lg:grid-cols-12">
      <div className="border-b border-line lg:col-span-5 lg:border-r lg:border-b-0">
        <div className="px-4 py-8 md:px-5 md:py-10 lg:px-6 lg:py-12">
          <p className="mb-5 text-[10px] tracking-[.1em] text-accent uppercase">The runtime</p>
          <h2 id="runtime-heading" className="font-mono text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.08] font-medium tracking-[-.06em] text-copy">Read the web.<br />Know what changed.</h2>
          <p className="mt-5 max-w-xs text-xs leading-5 text-muted">A shared language for page state, available actions, and their effects.</p>
        </div>
        <div role="tablist" aria-label="Runtime primitives" aria-orientation="vertical" className="border-t border-line">
          {runtimeFeatures.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => { tabs.current[index] = element; }}
              id={`runtime-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="runtime-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`group relative grid min-h-15 w-full cursor-pointer grid-cols-[2.5rem_1fr_auto] items-center border-b border-line px-4 text-left text-xs tracking-[-.02em] transition-colors duration-200 last:border-b-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none md:px-5 lg:px-6 ${active === index ? "bg-accent-soft/35 text-accent-strong" : "text-muted hover:bg-accent-soft/15 hover:text-copy"}`}
            >
              {active === index && <motion.span layoutId="runtime-active-rail" aria-hidden="true" className="absolute inset-y-0 left-0 w-0.5 bg-accent" transition={{ duration: reducedMotion ? 0 : 0.24, ease: "easeOut" }} />}
              <span aria-hidden="true" className={`text-[10px] tabular-nums ${active === index ? "text-accent" : "text-muted"}`}>{item.number}</span>
              <span className={active === index ? "font-medium" : ""}>{item.title}</span>
              <span aria-hidden="true" className={`text-base transition-all duration-200 motion-reduce:transition-none ${active === index ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"}`}>↗</span>
            </button>
          ))}
        </div>
      </div>
      <div id="runtime-panel" role="tabpanel" aria-labelledby={`runtime-tab-${feature.id}`} tabIndex={0} className="min-w-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent lg:col-span-7">
        <RuntimeArtwork active={active} />
        <div className="min-h-40 border-t border-line px-4 py-6 md:px-5 lg:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-mono text-xl leading-tight font-medium tracking-[-.045em] text-copy">{feature.title}</h3>
            <span aria-hidden="true" className="shrink-0 text-[10px] text-muted tabular-nums">{feature.number} / 05</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}
