"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Blob {
  className: string;
  color: string;
  animate: { x: number[]; y: number[]; scale: number[] };
  duration: number;
}

const blobs: Blob[] = [
  {
    className: "-left-[10%] -top-[15%] h-[55vw] w-[55vw] max-w-2xl",
    color: "var(--color-sage)",
    animate: { x: [0, 40, -10, 0], y: [0, 30, 60, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 22,
  },
  {
    className: "-right-[15%] top-[5%] h-[45vw] w-[45vw] max-w-xl",
    color: "#c9a68a",
    animate: { x: [0, -30, 20, 0], y: [0, 40, -20, 0], scale: [1, 0.94, 1.06, 1] },
    duration: 26,
  },
  {
    className: "bottom-[-20%] left-[20%] h-[50vw] w-[50vw] max-w-2xl",
    color: "#e7e1d2",
    animate: { x: [0, 20, -30, 0], y: [0, -30, 10, 0], scale: [1, 1.05, 0.98, 1] },
    duration: 30,
  },
];

/**
 * Slow, breathing gradient-blob backdrop for dark sections (Hero, Contact).
 * Blobs drift on an infinite loop — evoking a slow inhale/exhale rather than
 * decoration for its own sake. Freezes to a static frame for users who
 * prefer reduced motion, and a soft grain + vignette keep foreground text
 * legible regardless of blob position.
 */
export function AmbientBackground({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-ink", className)}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full blur-3xl", blob.className)}
          style={{ backgroundColor: blob.color, opacity: 0.35 }}
          animate={prefersReducedMotion ? undefined : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle film-grain texture for warmth/depth */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Bottom vignette so content stays legible over any blob position */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink" />
    </div>
  );
}
