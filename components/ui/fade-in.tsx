"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, handy inside a parent with staggerChildren. */
  delay?: number;
  /** Distance (px) the content travels upward as it reveals. */
  distance?: number;
  as?: "div" | "li";
}

const makeVariants = (distance: number, delay: number): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  },
});

/**
 * Gentle fade + upward-translate reveal, triggered once as the element
 * scrolls into view. This is the site's one scroll-reveal primitive —
 * reused across sections so every reveal feels consistent and unhurried.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  distance = 24,
  as = "div",
}: FadeInProps) {
  const variants = makeVariants(distance, delay);
  const viewport = { once: true, margin: "-10% 0px -10% 0px" as const };

  if (as === "li") {
    return (
      <motion.li
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
