"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AsciiArt } from "@/components/ui/n-ascii";
import { RuntimeShowcase } from "@/components/runtime-showcase";
import { BenchmarkShowcase } from "@/components/benchmark-showcase";
import hero from "./hero.module.css";

const introWord = "Spine";
const subscribeHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

const shell =
  "site-frame mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] grid-cols-4 gap-x-4 border-x px-4 md:w-[calc(100%-3rem)] md:grid-cols-8 md:gap-x-5 md:px-5 lg:w-[calc(100%-5rem)] lg:grid-cols-12 lg:gap-x-6 lg:px-6";

const topbarLink =
  "inline-flex min-h-11 items-center rounded-md px-3 text-xs text-muted hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

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
    let fontTimer = 0;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, duration);
      });

    const runIntro = async () => {
      await Promise.race([
        document.fonts.ready,
        new Promise<void>((resolve) => {
          fontTimer = window.setTimeout(resolve, 1000);
        }),
      ]);
      window.clearTimeout(fontTimer);
      if (cancelled) return;

      if (reduceMotion) {
        setIntroRevealed(true);
        await wait(0);
        setIsLoading(false);
        return;
      }

      await wait(80);

      for (let index = 0; index < introWord.length + 2; index += 1) {
        if (cancelled) return;
        setIntroBlockIndex(index);
        await wait(55);
      }

      setIntroRevealed(true);
      setIntroBlockIndex(null);
      await wait(250);

      if (!cancelled) setIsLoading(false);
    };

    runIntro();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.clearTimeout(fontTimer);
    };
  }, [hydrated, reduceMotion]);

  return (
    <>
      <AnimatePresence
        initial={false}
        onExitComplete={() => setLoaderExited(true)}
      >
        {showIntro && (
          <motion.div
            key="loader"
            className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-dvh overflow-hidden border-b border-line bg-canvas text-copy"
            exit={{ height: "3.25rem" }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
        {showIntro && (
          <motion.div
            key="loader-rails"
            className="pointer-events-none fixed inset-y-0 inset-x-0 z-[105] border-x border-line [--loader-rail-inset:1rem] md:[--loader-rail-inset:1.5rem] lg:[--loader-rail-inset:max(2.5rem,calc((100vw-1280px)/2))]"
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
          />
        )}
      {showIntro && (
        <motion.div
          key="loader-wordmark"
          exit="dissolved"
          className="pointer-events-none fixed inset-0 z-[110] grid place-items-center px-6 text-copy"
        >
          <span
            aria-label={introWord}
            className="inline-flex font-mono text-[clamp(2.5rem,5vw,4rem)] leading-none font-semibold tracking-[-.07em]"
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
                  <motion.span
                    className="relative inline-grid w-[1ch] place-items-center"
                    key={`${character}-${index}`}
                    initial={{ opacity: 1 }}
                    variants={{
                      dissolved: {
                        opacity: 0,
                        transition: {
                          duration: reduceMotion ? 0 : 0.36,
                          delay: reduceMotion ? 0 : index * 0.025,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <span className={showCharacter && !hasBlock ? "" : "text-transparent"}>
                      {character}
                    </span>
                    {hasBlock && (
                      <span className={`absolute inset-x-0 inset-y-[.08em] ${blockColor}`} />
                    )}
                  </motion.span>
                );
              })}
            </span>
          </span>
        </motion.div>
      )}
      </AnimatePresence>

        <a href="#content" className="fixed top-2 left-2 z-[130] inline-flex min-h-11 -translate-y-16 items-center bg-ink px-4 text-xs text-inverse focus:translate-y-0">Skip to content</a>

        <header className={`sticky top-0 z-[120] border-b text-copy ${pageReady ? "border-line bg-canvas/95 backdrop-blur-sm" : "border-transparent bg-transparent"}`}>
          <div className={`${shell} site-topbar min-h-[3.25rem] items-center ${pageReady ? "border-line" : "border-transparent"}`}>
            <a className="col-span-2 inline-flex min-h-11 w-fit items-center font-mono text-base font-semibold tracking-[-.06em] md:col-span-2 lg:col-span-3" href="#top" aria-label="Spine home">
              {!hydrated && <span>Spine</span>}
              {hydrated && !isLoading && (
                <motion.span
                  className="inline-flex font-mono text-base leading-none font-semibold tracking-[-.07em]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
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
            <nav className={`${pageReady ? "" : "invisible"} hidden h-full flex-wrap items-center justify-center gap-x-8 text-xs text-muted md:col-span-4 md:flex lg:col-span-6`} aria-label="Primary navigation">
              <a className={topbarLink} href="#runtime">Runtime</a>
              <a className={topbarLink} href="#benchmarks">Benchmarks</a>
            </nav>
            <a className={`${topbarLink} ${pageReady ? "" : "invisible"} col-span-2 justify-self-end gap-2 font-mono font-medium tracking-[-.02em] md:col-span-2 lg:col-span-3`} href="#runtime" aria-label="Explore Spine">Explore <span aria-hidden="true">↓</span></a>
          </div>
        </header>

      <main
        id="content"
        tabIndex={-1}
        className={`scroll-mt-13 overflow-x-clip bg-canvas text-copy ${pageReady ? "" : "[&_.site-frame]:border-x-transparent"}`}
      >
      <section id="top" aria-labelledby="hero-title" className="relative scroll-mt-13 border-b border-line bg-canvas">
        <div className={`${shell} ${hero.frame} border-line`}>
          {loaderExited && (
            <AsciiArt
              generated="flowers"
              className={`${hero.art} pointer-events-none absolute inset-0 h-full w-full overflow-hidden`}
            />
          )}
          <div className={`${hero.copy} col-span-full justify-self-center`}>
            <h1 id="hero-title" className={`${hero.title} font-mono font-light text-copy`}>The web<br />made <em className="not-italic">legible</em></h1>
            <p className={`${hero.description} text-muted`}>Spine gives your agent eyes and helps it understand and interact with the web.</p>
          </div>
        </div>
      </section>

      <section id="runtime" aria-labelledby="runtime-heading" className={`${shell} ${fullWidthDivider} scroll-mt-13 border-line`}>
        <RuntimeShowcase motionReady={loaderExited} />
      </section>

      <section id="benchmarks" aria-labelledby="benchmarks-heading" className={`${shell} ${fullWidthDivider} scroll-mt-13 border-line`}>
        <BenchmarkShowcase />
      </section>
      </main>

        <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-13 overflow-x-clip bg-contrast text-inverse">
          <div className={`${shell} border-inverse/15`}>
            <div className="col-span-full grid gap-y-6 py-10 md:grid-cols-8 md:gap-x-5 md:py-12 lg:grid-cols-12 lg:gap-x-6">
              <h2 id="contact-heading" className="min-w-0 max-w-3xl font-mono text-[clamp(2rem,4vw,4rem)] leading-[1.04] font-medium tracking-[-.065em] text-balance [overflow-wrap:anywhere] md:col-span-5 lg:col-span-8">Bring reliable web execution into <span className="text-accent-light">your agent stack</span></h2>
              <div className="min-w-0 [overflow-wrap:anywhere] md:col-span-3 lg:col-start-9 lg:col-span-4">
                <a href="#top" aria-label="Spine home" className="inline-flex min-h-11 items-center font-mono text-xl font-semibold tracking-[-.06em] text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Spine</a>
                <p className="mt-3 max-w-xs text-sm leading-6 text-inverse/75">A semantic web runtime for agents</p>
                <nav aria-label="Footer navigation" className="mt-4 flex flex-wrap gap-x-5">
                  <a href="#runtime" className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap text-xs text-inverse/75 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Runtime</a>
                  <a href="#benchmarks" className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap text-xs text-inverse/75 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Benchmarks</a>
                </nav>
              </div>
            </div>
            <div className="relative col-span-full flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 text-xs text-inverse/75 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:border-t before:border-inverse/15">
              <span>Agents need state, not screenshots</span>
              <a href="#top" className="inline-flex min-h-11 items-center gap-3 hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">Back to top <span aria-hidden="true">↑</span></a>
            </div>
          </div>
        </footer>
    </>
  );
}
