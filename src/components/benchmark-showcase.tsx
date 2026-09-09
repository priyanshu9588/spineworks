"use client";

import { useId, useRef } from "react";
import { useInView } from "motion/react";
import "./benchmark-showcase.css";

const results = [
  {
    id: "javascript",
    label: "JavaScript core",
    source: "Test262",
    value: "98.81%",
    numeral: "98.81",
    suffix: "%",
    passed: 58566,
    total: 59271,
    count: "58,566 / 59,271",
    outcome: "executions passed",
    scope: "Test262 Spine Sync Core v1 executions. 58,566 of 59,271 executions passed in this benchmark run.",
  },
  {
    id: "html",
    label: "HTML parsing",
    source: "WPT",
    value: "95.16%",
    numeral: "95.16",
    suffix: "%",
    passed: 1829,
    total: 1922,
    count: "1,829 / 1,922",
    outcome: "tests passed",
    scope: "Applicable script-off WPT tree-construction tests only. 1,829 of 1,922 tests passed in this benchmark run.",
  },
  {
    id: "semantic",
    label: "Semantic actions",
    source: "MiniWoB++",
    value: "40 / 40",
    numeral: "40",
    suffix: "/ 40",
    passed: 40,
    total: 40,
    count: "Supported episodes",
    outcome: "completed successfully",
    scope: "40 supported MiniWoB++ deterministic episodes. Every supported episode completed successfully.",
  },
] as const;

function BenchmarkResult({ result, index }: { result: (typeof results)[number]; index: number }) {
  const rowRef = useRef<HTMLElement>(null);
  const hasEntered = useInView(rowRef, { once: true, amount: 0.2 });
  const visible = useInView(rowRef, { margin: "48px" });
  const scopeId = useId();
  const proportion = `${(result.passed / result.total) * 100}%`;

  return (
    <article
      ref={rowRef}
      className="benchmark-result"
      data-entered={hasEntered}
      data-paused={!visible}
    >
      <div className="benchmark-result-heading">
        <span className="benchmark-result-index" aria-hidden="true">0{index + 1}</span>
        <h3>{result.label}</h3>
        <span className="benchmark-result-source">{result.source}</span>
      </div>

      <div className="benchmark-result-reading">
        <strong className="benchmark-value">
          <span className="benchmark-sr-only">{result.value}</span>
          <span className="benchmark-value-display" aria-hidden="true" style={{ animationDelay: `${index * 65}ms` }}>
            <span>{result.numeral}</span>
            <span className="benchmark-value-suffix">{result.suffix}</span>
          </span>
        </strong>
        <p className="benchmark-count">
          <span>{result.count}</span>
          <span>{result.outcome}</span>
        </p>
      </div>

      <div className="benchmark-scale" aria-hidden="true">
        <div className="benchmark-scale-track">
          <span
            className="benchmark-scale-fill"
            style={{ width: proportion, animationDelay: `${index * 65 + 100}ms` }}
          />
          <span
            className="benchmark-scale-marker"
            style={{ left: proportion, animationDelay: `${index * 65 + 750}ms` }}
          />
        </div>
        <div className="benchmark-scale-ticks">
          {Array.from({ length: 41 }, (_, tick) => <span key={tick} />)}
        </div>
        <div className="benchmark-scale-extents"><span>0</span><span>100%</span></div>
      </div>

      <details className="benchmark-scope">
        <summary aria-controls={scopeId}>
          <span>Test scope</span>
          <span className="benchmark-scope-mark" aria-hidden="true" />
        </summary>
        <div id={scopeId} className="benchmark-scope-body">
          <p>{result.scope}</p>
        </div>
      </details>
    </article>
  );
}

export function BenchmarkShowcase() {
  return (
    <div className="benchmark-showcase col-span-full -mx-4 md:-mx-5 lg:-mx-6">
      <div className="benchmark-intro">
        <div>
          <p className="benchmark-eyebrow"><span>Benchmarks</span><span>03 surfaces</span></p>
          <h2 id="benchmarks-heading">Capability,<br /><span>measured.</span></h2>
          <p className="benchmark-intro-copy">Three tested surfaces.<br />The full denominator, every time.</p>
          <p className="benchmark-caveat">These results describe the tested surfaces, not complete browser compatibility.</p>
        </div>
      </div>

      <div className="benchmark-results">
        {results.map((result, index) => <BenchmarkResult key={result.id} result={result} index={index} />)}
      </div>

      <div className="benchmark-record">
        <p className="benchmark-record-title">Pinned revisions.<br />Preserved receipts.</p>
        <dl>
          <div><dt>Run</dt><dd><time dateTime="2026-08-26">26 August 2026</time></dd></div>
          <div><dt>Denominators</dt><dd>Frozen</dd></div>
          <div><dt>Evidence</dt><dd>Local receipts retained</dd></div>
        </dl>
      </div>
    </div>
  );
}
