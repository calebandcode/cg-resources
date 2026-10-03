"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

const EASE = [0.22, 1, 0.36, 1] as const;

interface BenefitItem {
  title: string;
  label: string;
  desc: string;
  image: string;
}

const benefits: BenefitItem[] = [
  {
    label: "Structured Progression",
    title: "Clear Rank Advancement",
    desc: "Clear grading, official technical syllabus, and recognized certification pathways from white belt to master ranks.",
    image: "/assets/images/sensei-richqrd-01.webp",
  },
  {
    label: "Multiple Disciplines",
    title: "5 Arts Under One Roof",
    desc: "Train Karate, Aikido, Jiujutsu, Judo, and Kobudo under a single institution with unified martial principles.",
    image: "/assets/images/lovefeastgroup.jpg",
  },
  {
    label: "Member Discounts",
    title: "20% Tuition Savings",
    desc: "Exclusive 20% discount on additional specialized CMA masterclasses, seminars, and auxiliary martial arts programmes.",
    image: "/assets/images/bbmc.jpg",
  },
  {
    label: "Family Benefits",
    title: "Multi-Child Packages",
    desc: "Generous tuition benefits and integrated family training packages for multiple children practicing budo together.",
    image: "/assets/images/marilyn-kids.jpg",
  },
  {
    label: "Training Resources",
    title: "Manuals & Equipment",
    desc: "Comprehensive syllabus manuals, specialized weapons access, protective training equipment, and technical video guides included.",
    image: "/assets/images/weapons.jpg",
  },
  {
    label: "Instructor Pathway",
    title: "Certified Pedagogy",
    desc: "Certified professional development and leadership coaching for dedicated practitioners who aspire to teach and lead dojos.",
    image: "/assets/images/instructor.jpg",
  },
];

export function Benefits() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentBenefit = benefits[selectedIdx];

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mobileScrollRef,
    offset: ["start start", "end end"],
  });

  // Dynamically calculate exact pixel distance to stop cleanly on the last card
  const x = useTransform(scrollYProgress, (progress) => {
    if (!mobileTrackRef.current) return "0px";
    const totalWidth = mobileTrackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const distance = Math.max(0, totalWidth - viewportWidth);
    return `-${progress * distance}px`;
  });

  return (
    <section className="bg-cream-100">
      {/* =========================================================
          1. DESKTOP INTERACTIVE FEATURE BANNER (lg and above)
          ========================================================= */}
      <div className="hidden lg:block py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Institutional Advantages
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Why Train With Classical Martial Arts?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
              Membership is more than access to classes. It is entry into a structured institution of lifelong physical and mental development.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-14 rounded-[40px] bg-gradient-to-br from-[#121620] via-[#1c2230] to-[#0c0f16] text-white shadow-2xl overflow-hidden relative border border-white/10 isolate">
              <div className="grid grid-cols-12 items-center relative z-10">
                {/* Desktop Left Column: Dynamic Hero Martial Artist Imagery */}
                <div className="col-span-5 relative h-[480px] w-full overflow-hidden bg-black/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBenefit.image}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentBenefit.image}
                        alt={currentBenefit.title}
                        fill
                        sizes="450px"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Gradient blend into the dark container */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#121620]/40 to-[#121620] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#121620]/30 via-transparent to-[#121620]/60 pointer-events-none" />
                </div>

                {/* Right Column */}
                <div className="col-span-7 p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {currentBenefit.title}
                  </h3>

                  <div className="min-h-[56px] mt-3">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={selectedIdx}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="text-white/85 text-base font-sans leading-relaxed max-w-xl"
                      >
                        {currentBenefit.desc}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                    {benefits.map((benefit, idx) => {
                      const isSelected = idx === selectedIdx;
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
                          key={benefit.label}
                          type="button"
                          onClick={() => setSelectedIdx(idx)}
                          className={cn(
                            "py-3.5 px-5 rounded-full font-display text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer text-center",
                            isSelected
                              ? "bg-white text-accent scale-105 rotate-0 ring-2 ring-accent shadow-xl z-10"
                              : cn(
                                  "bg-white/95 text-[#121620] hover:text-accent hover:scale-105 hover:rotate-0",
                                  rotationClass
                                )
                          )}
                        >
                          {benefit.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* =========================================================
          2. MOBILE SCROLL-PINNED HORIZONTAL STREAM (Sticky Reel)
          ========================================================= */}
      <div ref={mobileScrollRef} className="relative h-[280vh] lg:hidden">
        <div className="sticky top-16 sm:top-20 h-[calc(100dvh-4.5rem)] max-h-[700px] flex flex-col justify-between pt-4 pb-4 px-4 sm:px-6 overflow-hidden">
          {/* Header - Stays in sight throughout the horizontal scroll */}
          <div className="shrink-0 max-w-md">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">
              Institutional Advantages
            </p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-tight">
              Why Train With Classical Martial Arts?
            </h2>
          </div>

          {/* Horizontal Sliding Cards Track */}
          <div className="w-full my-auto overflow-hidden py-2">
            <motion.div ref={mobileTrackRef} style={{ x }} className="flex gap-4 pr-4 sm:pr-6 w-max">
              {benefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="w-[82vw] max-w-[320px] shrink-0 h-[380px] sm:h-[400px] rounded-[24px] overflow-hidden flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#121620] via-[#1a2232] to-[#0c0f16] text-white shadow-xl relative border border-white/10"
                >
                  {/* Top Details */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-sm font-sans leading-relaxed mt-2 line-clamp-3">
                      {benefit.desc}
                    </p>
                  </div>

                  {/* Bottom Image */}
                  <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden shadow-lg mt-3 border border-white/10">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="320px"
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[0.65rem] font-semibold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        {benefit.label}
                      </span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                        CMA Standard
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
