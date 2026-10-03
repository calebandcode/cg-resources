"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/components/providers/smooth-scroll-provider";

const EASE = [0.22, 1, 0.36, 1] as const;

const slides = [
  "/assets/images/nujahan.jpg",
  "/assets/images/marilyn-kids.jpg",
  "/assets/images/lovefeastgroup.jpg",
  "/assets/images/marian-seatup.jpg",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export function Hero() {
  const [current, setCurrent] = useState(0);
  const scrollTo = useScrollTo();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-cream"
    >
      {/* Background Slideshow */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide}
            className={`absolute inset-0 bg-cover bg-center ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-108 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url('${slide}')`,
              transitionProperty: "opacity, transform",
              transitionDuration: "1400ms, 6500ms",
              transitionTimingFunction: "ease, linear",
            }}
          />
        );
      })}

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#05070a]/95 via-[#05070a]/70 to-[#05070a]/35 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#05070a]/90 via-transparent to-transparent pointer-events-none" />

      {/* Foreground Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8"
      >
        <motion.p
          variants={item}
          className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
          Nigeria&apos;s Premier Martial Arts Institution
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 sm:mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          The Way of
          <br />
          the <span className="text-accent">Warrior.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg leading-relaxed text-[#c8cfd8] font-sans"
        >
          Classical Martial Arts is a structured martial arts and self-development institution built around discipline, skill, character, fitness and self-protection. Not simply a place to learn fighting — a system to build the complete human being.
        </motion.p>

        <motion.div variants={item} className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <Button
            href="#programmes"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#programmes");
            }}
          >
            Explore Programmes
          </Button>
          <Button
            href="#pricing"
            variant="secondary"
            className="border-white/35 text-white hover:border-accent hover:text-accent hover:bg-white/5"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#pricing");
            }}
          >
            Start Training
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Slide Indicator Bars (Desktop only) */}
      <div className="hidden md:flex absolute z-10 right-[5%] bottom-12 gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "w-12 bg-accent"
                : "w-8 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="group absolute inset-x-0 bottom-3 sm:bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-2 sm:gap-3 cursor-pointer"
      >
        <span className="font-display text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.3em] text-cream/50 transition-colors group-hover:text-cream/80">
          Scroll
        </span>
        <span className="relative h-7 sm:h-10 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={prefersReducedMotion ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
