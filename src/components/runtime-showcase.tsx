"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { runtimeFeatures } from "@/content/runtime-features";
import { RuntimeArtwork } from "./runtime-illustrations/runtime-artwork";
import "./runtime-showcase.css";

const wideQuery = "(min-width: 1024px) and (min-height: 768px)";
const compactQuery = "(max-width: 767px) and (min-height: 600px)";
type RuntimeLayout = "wide" | "compact" | "inline";
const figureClearance = 16;
const pinReentryBuffer = 16;

function subscribeLayout(update: () => void) {
  const queries = [wideQuery, compactQuery].map((query) => window.matchMedia(query));
  for (const query of queries) query.addEventListener("change", update);
  return () => {
    for (const query of queries) query.removeEventListener("change", update);
  };
}

const readLayout = (): RuntimeLayout => window.matchMedia(wideQuery).matches
  ? "wide"
  : window.matchMedia(compactQuery).matches ? "compact" : "inline";
const serverLayout = (): RuntimeLayout => "inline";

export function RuntimeShowcase({ motionReady = false }: { motionReady?: boolean }) {
  const [active, setActive] = useState(0);
  const layout = useSyncExternalStore(subscribeLayout, readLayout, serverLayout);
  const [fits, setFits] = useState(true);
  const pinned = layout !== "inline" && fits;
  const story = useRef<HTMLDivElement>(null);
  const figure = useRef<HTMLElement>(null);
  const chapters = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const header = document.querySelector<HTMLElement>("header");
    const study = figure.current?.querySelector<HTMLElement>(".runtime-study")
      ?? chapters.current[0]?.querySelector<HTMLElement>(".runtime-study");
    const artHeader = study?.querySelector<HTMLElement>(".runtime-art-header");
    const artwork = study?.querySelector<SVGSVGElement>(".runtime-cutaway");
    const caption = study?.querySelector<HTMLElement>(".runtime-art-caption");
    const facts = study?.querySelector<HTMLElement>(".runtime-readable-facts");
    const steps = figure.current?.querySelector<HTMLElement>(".runtime-step-navigation");

    const update = () => {
      frame = 0;
      const plate = figure.current;
      const plateHeight = plate?.getBoundingClientRect().height;
      const headerHeight = header?.getBoundingClientRect().height ?? 52;
      const compact = layout === "compact";
      const viewportHeight = compact ? window.visualViewport?.height ?? window.innerHeight : window.innerHeight;
      const navigationHeight = compact ? 54 : 62;
      const stepsHeight = steps?.getBoundingClientRect().height ?? navigationHeight;
      const viewBox = artwork?.viewBox.baseVal;
      const artworkWidth = artwork?.getBoundingClientRect().width ?? 0;
      const artworkHeight = viewBox?.width
        ? (compact ? Math.min(artworkWidth, 320) : artworkWidth) * viewBox.height / viewBox.width
        : 0;
      const factsStyle = compact && facts ? window.getComputedStyle(facts) : null;
      const factsHeight = compact && facts && factsStyle
        ? facts.getBoundingClientRect().height + parseFloat(factsStyle.marginTop) + parseFloat(factsStyle.marginBottom)
        : 0;
      const studyHeight = compact
        ? artworkHeight + factsHeight
        : (artHeader?.getBoundingClientRect().height ?? 0) + artworkHeight
          + (caption?.getBoundingClientRect().height ?? 0);
      const minimumStageHeight = studyHeight + Math.max(navigationHeight, stepsHeight);
      const readingOffset = compact
        ? (plateHeight ?? minimumStageHeight) + 1
        : Math.min(viewportHeight * 0.27, 220);
      const readingLine = headerHeight + readingOffset;

      if (story.current) {
        for (const [property, value] of [
          ["--runtime-reading-offset", readingOffset],
          ["--runtime-reading-line", readingLine],
          ["--runtime-available-height", Math.max(0, viewportHeight - headerHeight)],
        ] as const) {
          const pixels = `${value}px`;
          if (story.current.style.getPropertyValue(property) !== pixels) {
            story.current.style.setProperty(property, pixels);
          }
        }
      }

      if (layout !== "inline" && artwork) {
        // Fit the natural content, independently of the stage that fills the viewport.
        const textWindow = compact
          ? Math.max(200, parseFloat(window.getComputedStyle(document.documentElement).fontSize) * 13)
          : 0;
        const requiredHeight = minimumStageHeight + headerHeight + figureClearance + textWindow;

        // Extra room on reentry prevents small layout differences from toggling modes.
        setFits((previous) => requiredHeight + (previous ? 0 : pinReentryBuffer) <= viewportHeight);
      }

      if (plateHeight && story.current) {
        const height = `${Math.ceil(plateHeight)}px`;
        if (story.current.style.getPropertyValue("--runtime-figure-height") !== height) {
          story.current.style.setProperty("--runtime-figure-height", height);
        }
      }
      let current = 0;

      for (let index = 0; index < chapters.current.length; index += 1) {
        const chapter = chapters.current[index];
        if (chapter && chapter.getBoundingClientRect().top <= readingLine) current = index;
      }

      setActive((previous) => previous === current ? previous : current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(schedule);
    if (story.current) observer.observe(story.current);
    if (figure.current) observer.observe(figure.current);
    if (study) observer.observe(study);
    if (header) observer.observe(header);
    // These can resize inside the filled stage without changing its outer height.
    for (const part of [artHeader, artwork, caption, facts, steps]) {
      if (part) observer.observe(part);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("resize", schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [layout, pinned]);

  return (
    <div ref={story} className="runtime-story col-span-full -mx-4 md:-mx-5 lg:-mx-6" data-pinned={pinned} data-layout={layout}>
      <div className="runtime-story-intro">
        <div className="runtime-intro-heading">
          <p className="runtime-eyebrow">The runtime</p>
          <h2 id="runtime-heading">Read the web.<br />Know what changed.</h2>
        </div>
        <div className="runtime-intro-summary">
          <p className="runtime-intro-copy">A shared language for page state, available actions, and their effects.</p>
          <p className="runtime-scroll-cue" aria-hidden="true">Scroll to explore <span>↓</span></p>
        </div>
      </div>

      {pinned && (
        <aside ref={figure} className="runtime-sticky-figure" aria-label="Runtime illustrations">
          <RuntimeArtwork active={active} motionReady={motionReady} />
          <nav className="runtime-step-navigation" aria-label="Runtime steps">
            {runtimeFeatures.map((feature, index) => (
              <a
                key={feature.id}
                href={`#runtime-step-${feature.id}`}
                aria-label={feature.title}
                aria-current={active === index ? "step" : undefined}
              >
                <span aria-hidden="true">{feature.number}</span>
                <span className="runtime-step-line" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </aside>
      )}

      <div className="runtime-narrative">
        <ol className="runtime-chapters" aria-label="Runtime primitives" role="list">
          {runtimeFeatures.map((feature, index) => (
            <li key={feature.id}>
              <article
                ref={(element) => { chapters.current[index] = element; }}
                id={`runtime-step-${feature.id}`}
                aria-labelledby={`runtime-title-${feature.id}`}
                tabIndex={-1}
                className="runtime-chapter"
                data-active={active === index}
              >
                <div className="runtime-chapter-copy">
                  <p className="runtime-chapter-number"><span>{feature.number}</span><span>{feature.verb}</span></p>
                  <h3 id={`runtime-title-${feature.id}`}>{feature.title}</h3>
                  <p className="runtime-chapter-description">{feature.description}</p>
                </div>
                {!pinned && <RuntimeArtwork active={index} motionReady={motionReady} />}
              </article>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}
