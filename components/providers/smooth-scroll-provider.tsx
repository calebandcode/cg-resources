"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import Lenis from "lenis";
import { frame, cancelFrame } from "framer-motion";

// A ref (rather than state) so mounting/tearing down Lenis never triggers
// a re-render — consumers only read `.current` imperatively, on click.
const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/**
 * Access the active Lenis instance ref (`.current` is null before mount
 * or if the user prefers reduced motion, in which case native scrolling
 * is already in effect).
 */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Smoothly scrolls to a target (selector, element or offset), using
 * Lenis when available and falling back to native smooth scroll
 * otherwise — so callers never need to branch on that themselves.
 */
export function useScrollTo() {
  const lenisRef = useLenis();

  return (target: string | HTMLElement, offset = -96) => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(target, { offset, duration: 1.4 });
      return;
    }
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

/**
 * Wraps the app in a Lenis smooth-scroll instance.
 *
 * - Ticks Lenis through Framer Motion's `frame` scheduler instead of its
 *   own rAF loop, so scroll-driven Framer Motion animations (useScroll,
 *   whileInView, etc.) stay perfectly in sync with the smoothed scroll.
 * - Bails out entirely for users with `prefers-reduced-motion: reduce`,
 *   leaving native (instant/native-smooth) scrolling in place.
 * - Exposes the instance via a ref-backed context so components (e.g.
 *   the navbar) can drive smooth anchor scrolling with `useScrollTo`.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // gentle ease-out cubic
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    lenisRef.current = instance;

    function onFrame(data: { timestamp: number }) {
      instance.raf(data.timestamp);
    }

    frame.update(onFrame, true);

    return () => {
      cancelFrame(onFrame);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
