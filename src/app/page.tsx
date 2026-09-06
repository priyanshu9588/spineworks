"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import GlobeBackground from "./globe";

const models = [
  ["Claude", "/models/claude.svg"],
  ["Qwen", "/models/qwen.svg"],
  ["Codex", "/models/codex.svg"],
  ["DeepSeek", "/models/deepseek.svg"],
  ["Kimi", "/models/kimi.svg"],
] as const;

const featureNames = [
  "Semantic structure",
  "Verified actions",
  "Native sessions",
  "Capability awareness",
  "Fewer round trips",
] as const;

export function CanvasGrid({ active, pattern }: { active: boolean; pattern?: string }) {
  void active;
  void pattern;
  return null;
}

export default function Home() {
  const [modelIndex, setModelIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setModelIndex((index) => (index + 1) % models.length), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const [modelName, modelLogo] = models[modelIndex];

  return <main className="site-shell" aria-label="Spine">
    <GlobeBackground />
    <div className="blank-stage">
      <nav className="topbar" aria-label="Main navigation">
        <a className="topbar-brand" href="#top">Spine</a>
        <div className="topbar-links">
          <a href="#about">About</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="opening-copy" id="top">
        <p className="opening-line">Your <span className="model-slot"><AnimatePresence mode="wait" initial={false}><motion.span key={modelLogo} className="model-mark" initial={{ opacity: 0, scale: .8, filter: "brightness(0) invert(1) blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "brightness(0) invert(1) blur(0px)" }} exit={{ opacity: 0, scale: .8, filter: "brightness(0) invert(1) blur(5px)" }} transition={{ duration: .1, ease: [0.2, 0.8, 0.2, 1] }}><Image src={modelLogo} alt={modelName} width={128} height={128} priority /></motion.span></AnimatePresence></span> doesn&apos;t know what the web looks like</p>
        <p className="subline">We give it eyes</p>
      </section>
      <section className="thesis-section" id="about" aria-labelledby="thesis-heading">
        <h2 id="thesis-heading">The browser was never built for agents.</h2>
        <p className="thesis-body">Today, agents decode a complicated page, infer what it means, and guess what to do next. That loop is slow, brittle, and difficult to verify.</p>
        <p className="thesis-close">That&apos;s why we made Spine.</p>
      </section>
      <section className="features-section" id="proof" aria-label="Feature grid">
        <div className="feature-grid">
          {featureNames.map((feature) => (
            <article className="feature-grid-cell" key={feature}>
              <span>{feature}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
    <footer className="site-footer" id="contact">
      <span>Spine</span>
    </footer>
  </main>;
}
