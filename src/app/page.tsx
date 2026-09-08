"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { AsciiArt } from "@/components/ui/n-ascii";
import { RuntimeShowcase } from "@/components/runtime-showcase";
import { BenchmarkShowcase } from "@/components/benchmark-showcase";

const introWord = "Spine";
const repositoryUrl = "https://github.com/priyanshu9588/spineworks";
const subscribeHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

const shell =
  "site-frame mx-auto grid w-[calc(100%-2rem)] max-w-[1120px] grid-cols-4 gap-x-4 border-x px-4 md:w-[calc(100%-3rem)] md:grid-cols-8 md:gap-x-5 md:px-5 lg:w-[calc(100%-5rem)] lg:grid-cols-12 lg:gap-x-6 lg:px-6";

const topbarLink =
  "inline-flex h-fit items-center rounded-md px-3 py-1.5 text-xs text-muted hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const fullWidthDivider =
  "relative after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:border-b after:border-line";

export default function Home() {
  const hydrated = useSyncExternalStore(subscribeHydration, clientSnapshot, serverSnapshot);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderExited, setLoaderExited] = useState(false);
  const [introBlockIndex, setIntroBlockIndex] = useState<number | null>(null);
  const [introRevealed, setIntroRevealed] = useState(false);
  const reduceMotion = useReducedMotion();
  const showIntro = hydrated && isLoading;
  const pageReady = !hydrated || loaderExited;

  useEffect(() => {
    if (!hydrated) return;
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
  }, [hydrated, reduceMotion]);

  useEffect(() => {
    if (!showIntro) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro]);

  return (
    <LayoutGroup id="site-loader">
      <AnimatePresence
        initial={false}
        onExitComplete={() => setLoaderExited(true)}
      >
        {showIntro && (
          <motion.div
            key="loader"
            className="fixed inset-x-0 top-0 z-[100] h-dvh overflow-hidden border-b border-line bg-canvas text-copy"
            exit={{ height: "3.25rem" }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
        {showIntro && (
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
      {showIntro && (
        <div className="pointer-events-none fixed inset-0 z-[110] grid place-items-center px-6 text-copy">
          <motion.span
            layoutId="spine-wordmark"
            aria-label={introWord}
            className="inline-flex font-mono text-[clamp(2.5rem,5vw,4rem)] leading-none font-semibold tracking-[-.07em]"
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
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

        <a href="#content" className="fixed top-2 left-2 z-[130] -translate-y-16 bg-ink px-4 py-2 text-xs text-inverse focus:translate-y-0">Skip to content</a>

        <header className={`sticky top-0 z-[120] border-b text-copy ${pageReady ? "border-line bg-canvas/95 backdrop-blur-sm" : "border-transparent bg-transparent"}`}>
          <div className={`${shell} h-[3.25rem] items-center ${pageReady ? "border-line" : "border-transparent"}`}>
            <a className="col-span-2 inline-flex w-fit items-center font-mono text-base font-semibold tracking-[-.06em] md:col-span-2 lg:col-span-3" href="#top" aria-label="Spine home">
              {!hydrated && <span>Spine</span>}
              {hydrated && !isLoading && (
                <motion.span
                  layoutId="spine-wordmark"
                  className="inline-flex font-mono text-base leading-none font-semibold tracking-[-.07em]"
                  transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  <span aria-hidden="true" className="inline-flex">
                    {Array.from(introWord).map((character, index) => (
                      <span className="inline-grid w-[1ch] place-items-center" key={`${character}-${index}`}>
                        {character}
                      </span>
                    ))}
                  </span>
                </motion.span>
              )}
            </a>
            <nav className={`${pageReady ? "" : "invisible"} hidden h-full items-center justify-center gap-8 text-xs text-muted md:col-span-4 md:flex lg:col-span-6`} aria-label="Primary navigation">
              <a className={topbarLink} href="#runtime">Runtime</a>
              <a className={topbarLink} href="#benchmarks">Benchmarks</a>
            </nav>
            <a className={`${topbarLink} ${pageReady ? "" : "invisible"} col-span-2 justify-self-end gap-2 font-mono font-medium tracking-[-.02em] md:col-span-2 lg:col-span-3`} href={repositoryUrl}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </header>

      <main
        id="content"
        tabIndex={-1}
        className={`scroll-mt-13 overflow-x-clip bg-canvas text-copy ${pageReady ? "" : "[&_.site-frame]:border-x-transparent"}`}
      >
      <section id="top" className="relative h-[60vh] scroll-mt-13 overflow-hidden border-b border-line bg-canvas">
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

      <section id="runtime" aria-labelledby="runtime-heading" className={`${shell} ${fullWidthDivider} scroll-mt-13 border-line`}>
        <RuntimeShowcase />
      </section>

      <section id="benchmarks" aria-labelledby="benchmarks-heading" className={`${shell} ${fullWidthDivider} scroll-mt-13 border-line`}>
        <BenchmarkShowcase />
      </section>
      </main>

        <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-13 overflow-x-clip bg-contrast text-inverse">
          <div className={`${shell} border-inverse/15`}>
            <div className="col-span-full grid gap-y-10 py-12 md:grid-cols-8 md:gap-x-5 md:py-16 lg:grid-cols-12 lg:gap-x-6">
              <h2 id="contact-heading" className="max-w-3xl font-mono text-[clamp(2rem,4vw,4rem)] leading-[1.04] font-medium tracking-[-.065em] text-balance md:col-span-5 lg:col-span-8">Bring reliable web execution into <span className="text-accent-light">your agent stack</span></h2>
              <div className="md:col-span-3 lg:col-start-10 lg:col-span-3">
                <a href="#top" aria-label="Spine home" className="inline-flex min-h-11 items-center font-mono text-xl font-semibold tracking-[-.06em] text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Spine</a>
                <p className="mt-3 max-w-xs text-sm leading-6 text-inverse/75">A semantic web runtime for agents</p>
                <nav aria-label="Footer navigation" className="mt-4 flex flex-wrap gap-x-5">
                  <a href="#runtime" className="inline-flex min-h-11 items-center text-xs text-inverse/75 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Runtime</a>
                  <a href="#benchmarks" className="inline-flex min-h-11 items-center text-xs text-inverse/75 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Benchmarks</a>
                  <a href={repositoryUrl} className="inline-flex min-h-11 items-center gap-2 text-xs text-inverse/75 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">GitHub <span aria-hidden="true">↗</span></a>
                </nav>
              </div>
            </div>
            <div className="relative col-span-full flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 text-xs text-inverse/75 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:border-t before:border-inverse/15">
              <span>Agents need state, not screenshots</span>
              <a href="#top" className="inline-flex min-h-11 items-center gap-3 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Back to top <span aria-hidden="true">↑</span></a>
            </div>
          </div>
        </footer>
    </LayoutGroup>
  );
}
