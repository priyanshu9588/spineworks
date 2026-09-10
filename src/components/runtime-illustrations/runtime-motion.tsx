"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import "./runtime-motion.css";

/** A short material study plays once while its semantic scene is in view. */
export function RuntimeMotion({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  const film = useRef<HTMLVideoElement>(null);
  const completed = useRef(false);
  const reduceMotion = useMotionPreference();

  useEffect(() => {
    const container = scene.current;
    const video = film.current;
    if (!container || !video || !enabled || reduceMotion || completed.current) return;

    let visible = false;
    let failed = false;
    let disposed = false;

    const showStill = () => { container.dataset.playing = "false"; };
    const synchronize = () => {
      if (disposed || completed.current || failed) return;
      if (visible && !document.hidden) {
        if (video.paused) {
          void video.play().catch(() => {
            // Autoplay and loading failures leave the complete still illustration intact.
            if (!disposed) showStill();
          });
        }
      } else {
        video.pause();
        showStill();
      }
    };
    const showFilm = () => {
      if (!disposed && !completed.current && visible && !document.hidden) container.dataset.playing = "true";
    };
    const finish = () => { completed.current = true; showStill(); };
    const fail = () => { failed = true; showStill(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.6;
      synchronize();
    }, { threshold: [0, 0.6] });

    observer.observe(container);
    video.addEventListener("playing", showFilm);
    video.addEventListener("pause", showStill);
    video.addEventListener("waiting", showStill);
    video.addEventListener("stalled", showStill);
    video.addEventListener("ended", finish);
    video.addEventListener("error", fail);
    document.addEventListener("visibilitychange", synchronize);

    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", synchronize);
      video.removeEventListener("playing", showFilm);
      video.removeEventListener("pause", showStill);
      video.removeEventListener("waiting", showStill);
      video.removeEventListener("stalled", showStill);
      video.removeEventListener("ended", finish);
      video.removeEventListener("error", fail);
      video.pause();
      showStill();
    };
  }, [enabled, reduceMotion]);

  return (
    <div ref={scene} className="runtime-master-scene">
      <video
        ref={film}
        className="runtime-motion-video"
        src="/illustrations/runtime-read-v3.mp4"
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      />
      {children}
    </div>
  );
}
