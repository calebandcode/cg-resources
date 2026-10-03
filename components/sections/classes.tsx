"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { PROGRAMMES, Programme, GUIDANCE_GOALS } from "@/lib/data/programmes";
import { YouTubeIcon } from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

// Curated palette inspired directly by the reference expandable accordion design
const cardTheme: Record<
  string,
  {
    bg: string;
    text: string;
    badge: string;
    accentGlow: string;
  }
> = {
  karate: {
    bg: "bg-gradient-to-b from-[#421024] to-[#280815]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(225, 29, 72, 0.3)",
  },
  aikido: {
    bg: "bg-gradient-to-b from-[#e11d48] to-[#9f1239]",
    text: "text-white",
    badge: "bg-white/20 text-white border-white/30",
    accentGlow: "rgba(244, 63, 94, 0.4)",
  },
  jiujutsu: {
    bg: "bg-gradient-to-b from-[#114b54] to-[#08282d]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(20, 184, 166, 0.3)",
  },
  judo: {
    bg: "bg-gradient-to-b from-[#141820] to-[#090b0f]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(100, 116, 139, 0.3)",
  },
  kobudo: {
    bg: "bg-gradient-to-b from-[#3f4651] to-[#242930]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(148, 163, 184, 0.3)",
  },
  selfdefense: {
    bg: "bg-gradient-to-b from-[#471542] to-[#240822]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(192, 38, 211, 0.3)",
  },
  instructor: {
    bg: "bg-gradient-to-b from-[#46321b] to-[#261a0d]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(217, 119, 6, 0.3)",
  },
  culture: {
    bg: "bg-gradient-to-b from-[#162942] to-[#0b1624]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    accentGlow: "rgba(59, 130, 246, 0.3)",
  },
};

interface ClassesProps {
  onSelectProgramme: (prog: Programme) => void;
}

export function Classes({ onSelectProgramme }: ClassesProps) {
  const [activeId, setActiveId] = useState<string>("karate");
  const [selectedGoalIdx, setSelectedGoalIdx] = useState(0);
  const currentGoal = GUIDANCE_GOALS[selectedGoalIdx];

  return (
    <section id="programmes" className="bg-cream-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching the reference style */}
        <FadeIn className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Training Paths &amp; Disciplines
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            More than a dojo. A pathway to authentic mastery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
            Classical Martial Arts is designed to give practitioners, athletes, and leaders access to authentic traditional budo, from foundational training to black belt mastery.
          </p>
        </FadeIn>

        {/* =========================================================
            1. DESKTOP EXPANDABLE HORIZONTAL ACCORDION (lg and above)
            ========================================================= */}
        <div className="hidden lg:flex -space-x-3 xl:-space-x-4 mt-12 h-[560px] w-full items-stretch select-none isolate">
          {PROGRAMMES.map((item, idx) => {
            const isExpanded = item.id === activeId;
            const theme = cardTheme[item.id] || cardTheme.karate;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                style={{
                  zIndex: isExpanded ? 30 : 10 + (PROGRAMMES.length - idx),
                }}
                className={cn(
                  "relative rounded-[28px] overflow-hidden cursor-pointer shadow-lg",
                  "transition-[flex-grow,box-shadow,filter] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[flex-grow]",
                  theme.bg,
                  theme.text,
                  isExpanded
                    ? "flex-[4.2] shadow-2xl p-8 ring-1 ring-white/20"
                    : "flex-1 min-w-[76px] xl:min-w-[90px] p-5 hover:brightness-110"
                )}
              >
                {/* Collapsed State: Vertical Typography */}
                <div
                  className={cn(
                    "absolute inset-0 p-5 flex flex-col justify-between items-center text-center transition-all duration-300 ease-out",
                    isExpanded
                      ? "opacity-0 scale-95 pointer-events-none"
                      : "opacity-100 scale-100 pointer-events-auto"
                  )}
                >
                  <div className="pt-2">
                    <h4 className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 whitespace-nowrap opacity-90">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-display text-xs font-bold text-white/90">
                    {item.letter}
                  </div>
                </div>

                {/* Expanded State: Fixed-width layout container prevents text reflow during width expansion */}
                <div
                  className={cn(
                    "flex flex-col justify-between h-full relative z-10 w-[380px] xl:w-[440px] max-w-full transition-all duration-400 ease-out",
                    isExpanded
                      ? "opacity-100 translate-y-0 delay-100 pointer-events-auto"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  )}
                >
                  {/* Top Details */}
                  <div>
                    <span
                      className={cn(
                        "inline-block text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-2.5 backdrop-blur-sm",
                        theme.badge
                      )}
                    >
                      {item.tag}
                    </span>
                    <h3 className="font-display text-3xl xl:text-4xl font-extrabold uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-white/85 text-sm sm:text-base font-sans leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Seamless Thumbnail with Centered Play Button */}
                  <div className="mt-4">
                    {item.image && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProgramme(item);
                        }}
                        className="relative h-56 xl:h-60 w-full rounded-2xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          loading="lazy"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Seamless Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Centered Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-accent flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                            <YouTubeIcon className="w-6 h-6 text-accent ml-0.5" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                          <span className="text-xs font-semibold text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            {item.badgeText || "Watch Video"}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-white/90 group-hover:text-white transition-colors">
                            Watch Technique &rarr;
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            2. MOBILE VERTICAL EXPANDABLE ACCORDION (Stacked & Overlapped)
            ========================================================= */}
        <div className="flex flex-col -space-y-3 mt-8 lg:hidden isolate">
          {PROGRAMMES.map((item, idx) => {
            const isExpanded = item.id === activeId;
            const theme = cardTheme[item.id] || cardTheme.karate;

            return (
              <div
                key={item.id}
                style={{
                  zIndex: isExpanded ? 30 : 10 + (PROGRAMMES.length - idx),
                }}
                className={cn(
                  "rounded-[22px] transition-all duration-300 overflow-hidden shadow-md",
                  theme.bg,
                  theme.text,
                  isExpanded ? "ring-1 ring-white/20 shadow-xl" : "hover:brightness-105"
                )}
              >
                {/* Collapsed Header Bar (Clickable, Clean: Title Only) */}
                <button
                  type="button"
                  onClick={() => setActiveId(isExpanded ? "" : item.id)}
                  className="w-full py-3.5 px-5 sm:px-6 flex items-center justify-start text-left cursor-pointer"
                >
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                </button>

                {/* Expanded Content Drawer (Streamlined Height) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 border-t border-white/10">
                        <p className="text-white/85 text-xs sm:text-sm font-sans leading-relaxed mt-2 mb-3">
                          {item.description}
                        </p>

                        {item.image && (
                          <div
                            onClick={() => onSelectProgramme(item)}
                            className="relative h-36 sm:h-40 w-full rounded-xl overflow-hidden group cursor-pointer"
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 400px"
                              loading="lazy"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                            {/* Centered Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-11 h-11 rounded-full bg-white/90 text-accent flex items-center justify-center shadow-xl">
                                <YouTubeIcon className="w-4 h-4 text-accent ml-0.5" />
                              </div>
                            </div>
                            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
                              <span className="text-[0.65rem] font-semibold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                                {item.badgeText || "Watch Video"}
                              </span>
                              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/90">
                                Play Reel &rarr;
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. FIND YOUR PATH (Ultra-Compact on Mobile, Hero on Desktop)
            ========================================================= */}
        <FadeIn delay={0.15}>
          <div className="mt-12 sm:mt-16 rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#3b082c] via-[#480c36] to-[#25051c] text-white shadow-2xl overflow-hidden relative border border-white/10 isolate">
            {/* Mobile Background Image Glow (Crossfades dynamically without adding vertical height) */}
            <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGoal.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.22 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentGoal.image}
                    alt={currentGoal.name}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#3b082c]/80 via-[#3b082c]/60 to-[#25051c]/90" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
              {/* Desktop Left Column: Full-Height Martial Artist Imagery */}
              <div className="hidden lg:block lg:col-span-5 relative h-[480px] w-full overflow-hidden bg-black/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentGoal.image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentGoal.image}
                      alt={currentGoal.name}
                      fill
                      sizes="450px"
                      className="object-cover object-top sm:object-center"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Gradient blend into the purple container */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b082c]/40 to-[#3b082c] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#3b082c]/30 via-transparent to-[#3b082c]/60 pointer-events-none" />
              </div>

              {/* Right Column / Mobile Full Container */}
              <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                {/* Heading */}
                <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  What Do You Want to Master?
                </h3>

                {/* Dynamic Subtitle Text */}
                <div className="min-h-[44px] sm:min-h-[56px] mt-2 sm:mt-3">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={selectedGoalIdx}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="text-white/85 text-xs sm:text-sm lg:text-base font-sans leading-relaxed max-w-xl"
                    >
                      {currentGoal.desc}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* 2-Column Grid on Mobile and Desktop */}
                <div className="mt-5 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 max-w-lg">
                  {GUIDANCE_GOALS.map((goal, idx) => {
                    const isSelected = idx === selectedGoalIdx;
                    const rotations = [
                      "-rotate-2",
                      "rotate-2",
                      "-rotate-1",
                      "rotate-3",
                      "-rotate-2",
                      "rotate-1",
                    ];
                    const rotationClass = rotations[idx % rotations.length];

                    return (
                      <button
                        key={goal.label}
                        type="button"
                        onClick={() => setSelectedGoalIdx(idx)}
                        className={cn(
                          "py-2.5 px-3 sm:py-3.5 sm:px-5 rounded-xl sm:rounded-full font-display text-[0.72rem] sm:text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer text-center",
                          isSelected
                            ? "bg-white text-accent scale-105 rotate-0 ring-2 ring-accent shadow-xl z-10"
                            : cn(
                                "bg-white/95 text-[#3b082c] hover:text-accent hover:scale-105 hover:rotate-0",
                                rotationClass
                              )
                        )}
                      >
                        {goal.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

