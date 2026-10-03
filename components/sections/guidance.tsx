"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GUIDANCE_GOALS } from "@/lib/data/programmes";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Guidance() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentGoal = GUIDANCE_GOALS[selectedIdx];

  return (
    <section className="py-12 bg-[var(--bg2)] text-[var(--text)] transition-colors duration-300">
      <div className="w-[min(1200px,92%)] mx-auto">
        <FadeIn>
          <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[18px] p-7 sm:p-9 flex flex-col gap-6 shadow-sm">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.34em] text-[var(--accent)] font-semibold mb-2">
                Guidance
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--text)] mb-2">
                Find your path
              </h2>
              <p className="text-[var(--muted)] text-sm sm:text-base font-sans max-w-2xl">
                What are you training for? Select your goal and we will guide you to the right programme.
              </p>
            </div>

            {/* Goal Chips */}
            <div className="flex flex-wrap gap-2.5">
              {GUIDANCE_GOALS.map((goal, idx) => {
                const isSelected = idx === selectedIdx;
                return (
                  <button
                    key={goal.label}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider font-sans transition-all duration-300 border cursor-pointer z-10",
                      isSelected
                        ? "text-white shadow-md border-transparent"
                        : "bg-[var(--panel2)] border-[var(--line2)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)]"
                    )}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeGuidanceIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[var(--accent)] z-[-1]"
                      />
                    )}
                    {goal.label}
                  </button>
                );
              })}
            </div>

            {/* Selected Goal Result */}
            <div className="border-l-4 border-[var(--accent)] bg-[var(--panel2)] rounded-r-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <strong className="font-display uppercase tracking-wide text-lg sm:text-xl text-[var(--text)] block mb-1">
                    {currentGoal.name}
                  </strong>
                  <span className="text-[var(--muted)] text-sm font-sans block">
                    {currentGoal.desc}
                  </span>
                </motion.div>
              </AnimatePresence>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center font-display uppercase tracking-widest font-semibold text-xs px-5 py-2.5 rounded-lg border border-[var(--line2)] bg-transparent text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 shrink-0"
              >
                View programme details
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
