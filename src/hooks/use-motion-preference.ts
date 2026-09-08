"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(update: () => void) {
  const preference = window.matchMedia(query);
  preference.addEventListener("change", update);
  return () => preference.removeEventListener("change", update);
}

const readPreference = () => window.matchMedia(query).matches;
// Keep the server and first client render identical; enable motion after hydration.
const serverPreference = () => true;

export function useMotionPreference() {
  return useSyncExternalStore(subscribe, readPreference, serverPreference);
}
