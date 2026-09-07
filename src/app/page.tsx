"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { AsciiArt } from "@/components/ui/n-ascii";
import GrainCanvas from "./grain-canvas";

const introWord = "Spine";

const shell =
  "site-frame mx-auto grid w-[calc(100%-2rem)] max-w-[1120px] grid-cols-4 gap-x-4 border-x px-4 md:w-[calc(100%-3rem)] md:grid-cols-8 md:gap-x-5 md:px-5 lg:w-[calc(100%-5rem)] lg:grid-cols-12 lg:gap-x-6 lg:px-6";

const topbarLink =
  "inline-flex h-fit items-center rounded-md px-3 py-1.5 text-xs text-muted hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const fullWidthDivider =
  "relative after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:border-b after:border-line";

const fullWidthFrame =
  "relative before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:border-t before:border-line after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:border-b after:border-line";

const features = [
  {
    number: "01",
    verb: "Understand",
    title: "Semantic documents",
    description:
      "A compact view of roles, names, state, context, and supported actions rather than a screenshot or raw DOM dump.",
  },
  {
    number: "02",
    verb: "Act",
    title: "Verified actions",
    description:
      "Resolve an action against the current document, wait for the page to settle, and return the effect it produced.",
  },
  {
    number: "03",
    verb: "Persist",
    title: "Native sessions",
    description:
      "Keep cookies, navigation, forms, and page state inside one bounded runtime session across multiple turns.",
  },
  {
    number: "04",
    verb: "Know",
    title: "Capability maps",
    description:
      "Expose what each control supports, reject stale references, and refuse targets that cannot be resolved safely.",
  },
  {
    number: "05",
    verb: "Continue",
    title: "Semantic deltas",
    description:
      "Return the changed state after an action instead of making the agent consume the entire page again.",
  },
] as const;

const benchmarks = [
  {
    label: "JavaScript core",
    value: "98.81%",
    detail: "58,566 / 59,271 Test262 Spine Sync Core v1 executions passed.",
  },
  {
    label: "HTML parsing",
    value: "95.16%",
    detail: "1,829 / 1,922 applicable script-off WPT tree-construction tests passed.",
  },
  {
    label: "Semantic actions",
    value: "40 / 40",
    detail: "Every supported MiniWoB++ deterministic episode completed successfully.",
  },
] as const;

const processSteps = [
  ["Ingest", "Fetch the page, build a live DOM, and run supported scripts."],
  ["Understand", "Index roles, names, state, context, actions, and revisions."],
  ["Act", "Resolve one current target and dispatch one explicit action."],
  ["Verify", "Wait for effects, reject uncertainty, and return the delta."],
] as const;

function SemanticVisual() {
  return (
    <svg viewBox="0 0 640 500" className="h-[88%] w-[88%] drop-shadow-[0_1.2rem_1.2rem_var(--color-art-shadow)]">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="135" cy="250" r="66" />
        <path d="M69 250h132M135 184c-24 22-36 44-36 66s12 44 36 66M135 184c24 22 36 44 36 66s-12 44-36 66M135 184v132" opacity=".55" />
        <path d="M202 250h84M286 250c30 0 30-105 70-105h58M286 250h128M286 250c30 0 30 105 70 105h58" />
        <rect x="414" y="112" width="132" height="66" rx="4" />
        <rect x="414" y="217" width="162" height="66" rx="4" />
        <rect x="414" y="322" width="112" height="66" rx="4" />
      </g>
      <g fill="currentColor">
        <circle cx="286" cy="250" r="6" />
        <rect x="432" y="132" width="50" height="5" rx="2.5" />
        <rect x="432" y="147" width="88" height="4" rx="2" opacity=".45" />
        <rect x="432" y="237" width="76" height="5" rx="2.5" />
        <rect x="432" y="252" width="115" height="4" rx="2" opacity=".45" />
        <rect x="432" y="342" width="43" height="5" rx="2.5" />
        <rect x="432" y="357" width="68" height="4" rx="2" opacity=".45" />
      </g>
    </svg>
  );
}

function ActionVisual() {
  return (
    <svg viewBox="0 0 640 500" className="h-[88%] w-[88%] drop-shadow-[0_1.2rem_1.2rem_var(--color-art-shadow)]">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="72" y="76" width="496" height="348" rx="6" />
        <path d="M72 130h496" />
        <circle cx="102" cy="103" r="5" /><circle cx="122" cy="103" r="5" /><circle cx="142" cy="103" r="5" />
        <rect x="117" y="185" width="190" height="72" rx="4" />
        <rect x="333" y="185" width="190" height="72" rx="4" opacity=".35" />
        <path d="M212 257v37h180v-37" strokeDasharray="6 8" />
        <rect x="237" y="294" width="130" height="54" rx="4" />
        <circle cx="499" cy="374" r="24" />
        <path d="m488 374 8 8 16-18" strokeWidth="3" />
      </g>
      <path d="m292 201 21 48 11-18 20 18 10-10-19-19 18-10-61-9Z" fill="currentColor" />
      <rect x="262" y="315" width="80" height="5" rx="2.5" fill="currentColor" />
    </svg>
  );
}

function SessionVisual() {
  return (
    <svg viewBox="0 0 640 500" className="h-[88%] w-[88%] drop-shadow-[0_1.2rem_1.2rem_var(--color-art-shadow)]">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="106" y="80" width="448" height="300" rx="6" opacity=".24" />
        <rect x="96" y="90" width="448" height="300" rx="6" opacity=".5" />
        <rect x="86" y="100" width="448" height="300" rx="6" />
        <path d="M86 154h448M134 207h78M134 250h152M134 293h108M134 336h172" />
        <path d="M344 206h144v130H344zM368 309v-48l28 18 27-42 40 28" />
        <circle cx="368" cy="309" r="5" /><circle cx="396" cy="279" r="5" /><circle cx="423" cy="237" r="5" /><circle cx="463" cy="265" r="5" />
      </g>
      <circle cx="118" cy="127" r="6" fill="currentColor" />
      <rect x="134" y="122" width="74" height="10" rx="5" fill="currentColor" opacity=".6" />
    </svg>
  );
}

function CapabilityVisual() {
  return (
    <svg viewBox="0 0 640 500" className="h-[88%] w-[88%] drop-shadow-[0_1.2rem_1.2rem_var(--color-art-shadow)]">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="320" cy="250" r="154" /><circle cx="320" cy="250" r="98" strokeDasharray="4 8" /><circle cx="320" cy="250" r="35" />
        <path d="M320 96v119M320 285v119M166 250h119M355 250h119" />
        <rect x="272" y="50" width="96" height="46" rx="4" /><rect x="474" y="227" width="96" height="46" rx="4" />
        <rect x="272" y="404" width="96" height="46" rx="4" /><rect x="70" y="227" width="96" height="46" rx="4" />
      </g>
      <g fill="currentColor">
        <circle cx="320" cy="250" r="9" /><rect x="293" y="70" width="54" height="6" rx="3" />
        <rect x="495" y="247" width="54" height="6" rx="3" /><rect x="293" y="424" width="54" height="6" rx="3" /><rect x="91" y="247" width="54" height="6" rx="3" />
      </g>
    </svg>
  );
}

function DeltaVisual() {
  return (
    <svg viewBox="0 0 640 500" className="h-[88%] w-[88%] drop-shadow-[0_1.2rem_1.2rem_var(--color-art-shadow)]">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="82" y="91" width="196" height="318" rx="5" opacity=".45" /><rect x="362" y="91" width="196" height="318" rx="5" />
        <path d="M278 250h84m-20-18 20 18-20 18M111 138h138M111 178h88M111 218h121M111 258h72M111 298h138M111 338h103" opacity=".55" />
        <path d="M391 138h138M391 178h88M391 218h121M391 298h138M391 338h103" />
        <rect x="382" y="242" width="156" height="40" rx="3" strokeDasharray="5 6" />
      </g>
      <circle cx="397" cy="262" r="5" fill="currentColor" /><rect x="412" y="259" width="88" height="6" rx="3" fill="currentColor" />
    </svg>
  );
}

function FeatureVisual({ active }: { active: number }) {
  const visuals = [<SemanticVisual key="semantic" />, <ActionVisual key="action" />, <SessionVisual key="session" />, <CapabilityVisual key="capability" />, <DeltaVisual key="delta" />];

  return (
    <div className="relative aspect-[1.35] overflow-hidden bg-accent-deep text-inverse md:aspect-[1.7]">
      <GrainCanvas variant="feature" />
      <div className="absolute inset-[7%] z-10 grid place-items-center">
        {visuals[active]}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderExited, setLoaderExited] = useState(false);
  const [introBlockIndex, setIntroBlockIndex] = useState<number | null>(null);
  const [introRevealed, setIntroRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, duration);
      });

    const runIntro = async () => {
      await document.fonts.ready;
      if (cancelled) return;

      if (reduceMotion) {
        setIntroRevealed(true);
        await wait(0);
        setIsLoading(false);
        return;
      }

      await wait(200);

      for (let index = 0; index < introWord.length + 2; index += 1) {
        if (cancelled) return;
        setIntroBlockIndex(index);
        await wait(80);
      }

      setIntroRevealed(true);
      setIntroBlockIndex(null);
      await wait(800);

      if (!cancelled) setIsLoading(false);
    };

    runIntro();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!isLoading) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  return (
    <LayoutGroup id="site-loader">
      <AnimatePresence
        initial={false}
        onExitComplete={() => setLoaderExited(true)}
      >
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-x-0 top-0 z-[100] h-dvh overflow-hidden border-b border-line bg-canvas text-copy"
            exit={{ height: "3.25rem" }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
        {isLoading && (
          <motion.div
            key="loader-rails"
            className="pointer-events-none fixed inset-y-0 inset-x-0 z-[105] border-x border-line [--loader-rail-inset:1rem] md:[--loader-rail-inset:1.5rem] lg:[--loader-rail-inset:max(2.5rem,calc((100vw-1120px)/2))]"
            exit={{
              left: "var(--loader-rail-inset)",
              right: "var(--loader-rail-inset)",
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        )}
      </AnimatePresence>
      {isLoading && (
        <div className="pointer-events-none fixed inset-0 z-[110] grid place-items-center px-6 text-copy">
          <motion.span
            layoutId="spine-wordmark"
            aria-label={introWord}
            className="inline-flex font-mono text-[clamp(3.5rem,8vw,6rem)] leading-none font-semibold tracking-[-.07em]"
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <span aria-hidden="true" className="inline-flex">
              {Array.from(introWord).map((character, index) => {
                const trailOffset = introBlockIndex === null ? -1 : introBlockIndex - index;
                const hasBlock = trailOffset >= 0 && trailOffset <= 2;
                const showCharacter = introRevealed
                  || (introBlockIndex !== null && index < introBlockIndex - 2);
                const blockColor = trailOffset === 0
                  ? "bg-copy"
                  : trailOffset === 1
                    ? "bg-muted"
                    : "bg-faint";

                return (
                  <span className="relative inline-grid w-[1ch] place-items-center" key={`${character}-${index}`}>
                    <span className={showCharacter && !hasBlock ? "" : "text-transparent"}>
                      {character}
                    </span>
                    {hasBlock && (
                      <span className={`absolute inset-x-0 inset-y-[.08em] ${blockColor}`} />
                    )}
                  </span>
                );
              })}
            </span>
          </motion.span>
        </div>
      )}

      <main
        id="content"
        className={`overflow-x-clip bg-canvas text-copy ${loaderExited ? "" : "[&_.site-frame]:border-x-transparent"}`}
      >
        <a href="#content" className="fixed top-2 left-2 z-[130] -translate-y-16 bg-ink px-4 py-2 text-xs text-inverse focus:translate-y-0">Skip to content</a>

        <header className={`sticky top-0 z-[120] border-b ${loaderExited ? "border-line bg-canvas/95 backdrop-blur-sm" : "border-transparent bg-transparent"}`}>
          <div className={`${shell} h-[3.25rem] items-center ${loaderExited ? "border-line" : "border-transparent"}`}>
            <a className="col-span-2 inline-flex w-fit items-center font-mono text-base font-semibold tracking-[-.06em] md:col-span-2 lg:col-span-3" href="#top" aria-label="Spine home">
              {!isLoading && (
                <motion.span
                  layoutId="spine-wordmark"
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  Spine
                </motion.span>
              )}
            </a>
            <nav className={`${loaderExited ? "" : "invisible"} hidden h-full items-center justify-center gap-8 text-xs text-muted md:col-span-4 md:flex lg:col-span-6`} aria-label="Primary navigation">
              <a className={topbarLink} href="#how">How it works</a>
              <a className={topbarLink} href="#runtime">Runtime</a>
              <a className={topbarLink} href="#benchmarks">Benchmarks</a>
            </nav>
            <a className={`${topbarLink} ${loaderExited ? "" : "invisible"} col-span-2 justify-self-end font-mono font-medium tracking-[-.02em] md:col-span-2 lg:col-span-3`} href="#contact">Contact us</a>
          </div>
        </header>

      <section id="top" className="relative h-[60vh] overflow-hidden border-b border-line bg-canvas">
        <div className={`${shell} relative h-full content-center overflow-hidden border-line py-8 text-center md:py-12 lg:py-16`}>
          {loaderExited && (
            <AsciiArt
              generated="flowers"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
            />
          )}
          <h1 className="relative z-10 col-span-4 m-0 justify-self-center font-mono text-[clamp(3.1rem,7vw,7rem)] leading-[.9] font-light tracking-[-.075em] text-copy text-balance md:col-span-8 lg:col-start-2 lg:col-span-10">The web<br />made <em className="not-italic">legible</em></h1>
          <p className="relative z-10 col-span-4 mt-8 max-w-[38rem] justify-self-center text-sm leading-6 text-muted md:col-start-2 md:col-span-6 lg:col-start-4 lg:col-span-6">Spine gives your agent eyes and helps it understand and interact with the web.</p>
        </div>
      </section>

      <section id="how" className={`${shell} ${fullWidthDivider} border-line`}>
        <ol className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, copy], index) => (
            <li className={`border-line py-8 ${index < 3 ? "border-b" : ""} ${index < 2 ? "md:border-b" : "md:border-b-0"} ${index % 2 === 1 ? "md:border-l md:pl-5" : "md:pr-5"} ${index > 0 ? "lg:border-l lg:pl-6" : ""} ${index < 3 ? "lg:pr-6" : ""} lg:border-b-0`} key={title}>
              <h2 className="font-mono text-xl leading-none font-medium tracking-[-.045em]">{title}</h2>
              <p className="mt-3 max-w-xs text-xs leading-5 text-muted">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="runtime" className={`${shell} ${fullWidthDivider} border-line`}>
        <div className="col-span-full -mx-4 grid md:-mx-5 lg:-mx-6 lg:grid-cols-12">
          <div className="border-b border-line lg:col-span-5 lg:border-r lg:border-b-0">
            <p className="max-w-sm px-4 py-10 text-sm leading-6 text-muted md:px-5 lg:px-6">The interface is built around current meaning and observable effects, not browser chrome.</p>
            <div className="border-t border-line" role="tablist" aria-label="Runtime primitives">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  className={`group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-center border-b border-line px-4 py-4 text-left font-mono text-xs tracking-[-.02em] focus-visible:bg-accent-soft/40 focus-visible:outline-none md:px-5 lg:px-6 ${activeFeature === index ? "text-copy" : "text-subtle hover:text-copy"}`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onFocus={() => setActiveFeature(index)}
                  role="tab"
                  aria-selected={activeFeature === index}
                >
                  <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1 bg-accent ${activeFeature === index ? "opacity-100" : "opacity-0 group-focus-visible:opacity-100"}`} />
                  <span className={`font-mono text-[.52rem] ${activeFeature === index ? "text-accent" : "text-faint"}`}>{feature.number}</span>
                  <b className="font-medium">{feature.title}</b>
                  <i className={`not-italic ${activeFeature === index ? "text-accent" : "text-faint"}`}>+</i>
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-hidden lg:col-span-7">
            <FeatureVisual active={activeFeature} />
            <div className="min-h-36 border-t border-line px-4 py-6 md:px-5 lg:px-6">
              <h3 className="font-mono text-[clamp(1.5rem,2.2vw,2.25rem)] leading-none font-medium tracking-[-.055em]">{features[activeFeature].title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{features[activeFeature].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="benchmarks" className={`${shell} ${fullWidthDivider} border-line`}>
        <div className="col-span-4 py-10 md:col-span-6 md:py-14 lg:col-span-8 lg:py-16">
          <h2 className="max-w-3xl font-mono text-[clamp(1.9rem,3.2vw,3.4rem)] leading-[.98] font-medium tracking-[-.06em]">Capability-specific results, <em className="text-accent not-italic">with the denominator intact</em></h2>
          <p className="mt-6 max-w-lg text-sm leading-6 text-muted">Pinned revisions and preserved receipts. These results describe the tested surfaces, not complete browser compatibility.</p>
        </div>
        <p className="col-span-4 self-end pb-10 text-xs leading-5 text-subtle md:col-start-7 md:col-span-2 md:pb-14 lg:col-start-10 lg:col-span-3 lg:pb-16">Standard benchmark run · 26 August 2026</p>
        <div className={`${fullWidthFrame} col-span-full grid grid-cols-1 md:grid-cols-3`}>
          {benchmarks.map((benchmark, index) => (
            <article className={`min-h-64 py-8 md:py-10 ${index > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""} ${index === 0 ? "md:pr-6" : ""} ${index === 1 ? "md:px-6" : ""} ${index === 2 ? "md:pl-6" : ""}`} key={benchmark.label}>
              <span className="text-sm font-medium text-accent">{benchmark.label}</span>
              <strong className="mt-10 block font-mono text-[clamp(2.5rem,4vw,4.25rem)] leading-[.86] font-medium tracking-[-.075em] tabular-nums">{benchmark.value}</strong>
              <p className="mt-5 min-h-12 max-w-xs text-xs leading-5 text-muted">{benchmark.detail}</p>
            </article>
          ))}
        </div>
        <p className="col-span-full justify-self-center py-4 text-center text-xs leading-5 text-subtle md:whitespace-nowrap">Measured against pinned revisions with frozen denominators and retained local receipts.</p>
      </section>

      <section id="contact" className={`${shell} ${fullWidthDivider} border-line py-12 md:py-16`}>
        <h2 className="col-span-4 font-mono text-[clamp(2rem,4vw,4rem)] leading-[.94] font-medium tracking-[-.065em] md:col-span-8 lg:col-span-8">Bring reliable web execution into your agent stack</h2>
      </section>

        <footer className="bg-contrast text-inverse">
          <div className={`${shell} border-inverse/15`}>
            <div className="col-span-4 py-10 md:col-span-5 lg:col-span-6">
              <span className="font-mono text-xl font-semibold tracking-[-.06em] text-accent-light">Spine</span>
              <p className="mt-5 max-w-xs font-mono text-xl leading-6 tracking-[-.04em]">A semantic web runtime for agents</p>
            </div>
            <div className="relative col-span-full py-4 text-center text-[.65rem] text-inverse/55 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:border-t before:border-inverse/15">
              <span>Agents need state, not screenshots</span>
            </div>
          </div>
        </footer>
      </main>
    </LayoutGroup>
  );
}
