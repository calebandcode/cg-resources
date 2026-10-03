"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 7000;

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  tone: string;
}

const testimonials: Testimonial[] = [
  {
    id: "emma",
    quote:
      "I used to lack physical confidence. After joining CMA, the structured grading and weekly dojo check-ins completely transformed my fitness, discipline, and stamina.",
    name: "Emma R.",
    role: "Karate Member · Since 2023",
    initials: "ER",
    tone: "bg-accent",
  },
  {
    id: "daniel",
    quote:
      "The Jiujutsu and Integrated Self-Defense techniques changed how I handle high-pressure situations. Practical skills, real mastery, and zero ego.",
    name: "Daniel K.",
    role: "Self-Defense Client",
    initials: "DK",
    tone: "bg-gold",
  },
  {
    id: "priya",
    quote:
      "The classical budo training under Shihandai Johnson and his instructors is exceptional. My flexibility, focus, and mental calm have reached new heights.",
    name: "Priya S.",
    role: "Aikido & Karate Practitioner",
    initials: "PS",
    tone: "bg-ink",
  },
  {
    id: "jordan",
    quote:
      "CMA isn't about aggression — it's about building the complete human being through discipline, respect, and courage. That shift meant everything to my family.",
    name: "Jordan M.",
    role: "Parent & Adult Member",
    initials: "JM",
    tone: "bg-[#8a1a20]",
  },
];

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -48 : 48 }),
};

export function Testimonials() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const pausedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const length = testimonials.length;
  const active = testimonials[index];

  function go(newIndex: number, dir: number) {
    setSlide([(newIndex + length) % length, dir]);
  }

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setSlide(([i]) => [(i + 1) % length, 1]);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, length]);

  function handleDragEnd(_event: unknown, info: PanInfo) {
    if (info.offset.x < -60) go(index + 1, 1);
    else if (info.offset.x > 60) go(index - 1, -1);
  }

  return (
    <section id="testimonials" className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:px-8 sm:py-32">
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Student Testimonials
          </p>
          <h2 className="mx-auto mt-6 max-w-lg font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            What Our Martial Artists Say
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ink-soft font-sans">
            Hear from members who turned steady discipline and regular practice into real transformation.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="relative mx-auto mt-16 max-w-2xl"
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onFocus={() => (pausedRef.current = true)}
            onBlur={() => (pausedRef.current = false)}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-7xl text-accent/20 sm:-top-12"
            >
              &ldquo;
            </span>

            <div className="relative min-h-[220px] sm:min-h-[190px]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: EASE }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <div aria-live="polite">
                    <Stars />
                    <p className="mt-5 text-balance font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                      {active.quote}
                    </p>
                    <div className="mt-7 flex items-center justify-center gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white",
                          active.tone
                        )}
                      >
                        {active.initials}
                      </span>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-ink">
                          {active.name}
                        </p>
                        <p className="text-xs text-ink-muted">{active.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(index - 1, -1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-ink transition-colors duration-300 hover:border-accent hover:text-accent hover:bg-cream cursor-pointer"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    className="p-1.5 cursor-pointer"
                  >
                    <span
                      className={cn(
                        "block h-1.5 rounded-full transition-all duration-500 ease-organic",
                        i === index ? "w-6 bg-accent" : "w-1.5 bg-sand"
                      )}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(index + 1, 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-ink transition-colors duration-300 hover:border-accent hover:text-accent hover:bg-cream cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-gold">
          <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
