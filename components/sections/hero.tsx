"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/components/providers/smooth-scroll-provider";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const avatarTones = ["bg-sage", "bg-[#c9a68a]", "bg-[#e7e1d2]", "bg-white/70"];

export function Hero() {
  const scrollTo = useScrollTo();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink"
    >
      <AmbientBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 sm:px-8 lg:px-12"
      >
        <motion.p
          variants={item}
          className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-sage"
        >
          Yoga &amp; Meditation Coaching
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Wellness,
          <br />
          <span className="text-sage">Slowed Down.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream/70"
        >
          Online or in-person coaching designed around your breath, your
          body, and your pace — small, sustainable steps toward a calmer,
          stronger you.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            href={siteConfig.cta.href}
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(siteConfig.cta.href);
            }}
          >
            {siteConfig.cta.label}
          </Button>
          <Button
            href="#classes"
            variant="secondary"
            className="border-white/20 text-cream hover:border-white/40 hover:bg-white/5"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#classes");
            }}
          >
            Watch a Class
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex items-center gap-4 text-sm text-cream/60"
        >
          <div className="flex -space-x-3">
            {avatarTones.map((tone, i) => (
              <span
                key={i}
                className={`h-9 w-9 rounded-full border-2 border-ink ${tone}`}
              />
            ))}
          </div>
          <p>
            <span className="font-semibold text-cream">500+</span> students
            practicing with us
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollTo("#philosophy")}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="group absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-3"
      >
        <span className="font-display text-[10px] font-medium uppercase tracking-[0.3em] text-cream/50 transition-colors group-hover:text-cream/80">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-cream/80"
            animate={prefersReducedMotion ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
