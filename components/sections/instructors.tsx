"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHIEF_INSTRUCTOR, INSTRUCTORS } from "@/lib/data/instructors";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

export function Instructors() {
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const streamContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Framer Motion scroll hook tied to the pinned section container
  const { scrollYProgress } = useScroll({
    target: streamContainerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the smooth horizontal movement stopping perfectly on the last card
  const x = useTransform(scrollYProgress, (progress) => {
    if (!trackRef.current) return "0px";
    const totalWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const distance = Math.max(0, totalWidth - viewportWidth);
    return `-${progress * distance}px`;
  });

  return (
    <section id="instructors" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Leadership &amp; Faculty
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Led by Experience. Built on Discipline.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-soft font-sans max-w-2xl leading-relaxed">
            A dedicated senior instruction team covering every classical and modern discipline in the CMA curriculum.
          </p>
        </FadeIn>

        {/* =========================================================
            1. CHIEF INSTRUCTOR / FOUNDER SPOTLIGHT CARD
            (Retaining exact position and display as founder)
            ========================================================= */}
        <FadeIn delay={0.08}>
          <div className="mt-10 sm:mt-12 rounded-[32px] border border-sand bg-paper overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-[320px_1fr]">
            <div className="relative bg-gradient-to-br from-accent to-[#59040b] grid place-items-center min-h-[240px] sm:min-h-[280px] p-6 text-white">
              <span className="font-display text-7xl sm:text-8xl font-black opacity-90">
                {CHIEF_INSTRUCTOR.monogram}
              </span>
              <span className="absolute top-4 right-4 text-white/20 text-2xl tracking-[0.3em] font-sans [writing-mode:vertical-rl] select-none">
                武道
              </span>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-accent mb-1 block">
                Institutional Founder &amp; Head of Dojo
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink uppercase tracking-wide">
                {CHIEF_INSTRUCTOR.name}
              </h3>
              <p className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest my-2">
                {CHIEF_INSTRUCTOR.rank}
              </p>

              {/* Bio with Mobile Truncation / Read More Toggle */}
              <div className="mb-5 sm:mb-6">
                <p
                  className={cn(
                    "text-ink-soft text-xs sm:text-sm md:text-base leading-relaxed font-sans transition-all duration-300",
                    !isBioExpanded && "line-clamp-3 md:line-clamp-none"
                  )}
                >
                  {CHIEF_INSTRUCTOR.bio}
                </p>
                <button
                  type="button"
                  onClick={() => setIsBioExpanded(!isBioExpanded)}
                  className="mt-2 text-xs font-bold text-accent hover:text-accent-dark md:hidden inline-flex items-center gap-1 cursor-pointer"
                >
                  {isBioExpanded ? "Show less ↑" : "Read more ↓"}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                {CHIEF_INSTRUCTOR.stats.map((st) => (
                  <div
                    key={st.label}
                    className="rounded-xl sm:rounded-2xl border border-sand bg-cream-100 py-2 px-1.5 sm:py-3 sm:px-6 text-center min-w-0 sm:min-w-[110px]"
                  >
                    <b className="font-display text-base sm:text-2xl text-accent font-bold block leading-none">
                      {st.value}
                    </b>
                    <span className="text-[0.55rem] sm:text-[0.65rem] uppercase tracking-wider text-ink-muted font-bold block mt-1 leading-tight">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          2. SCROLL-PINNED HORIZONTAL FACULTY STREAM (Side-by-Side Cards)
          ========================================================= */}
      <div ref={streamContainerRef} className="relative h-[320vh] sm:h-[360vh] lg:h-[400vh] mt-6 sm:mt-8">
        <div className="sticky top-16 sm:top-20 h-[calc(100dvh-4.5rem)] max-h-[850px] min-h-[580px] flex flex-col justify-center py-2 sm:py-4 overflow-hidden">
          {/* Horizontal Sliding Cards Track */}
          <div className="w-full my-auto overflow-hidden py-3">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 sm:gap-8 px-4 sm:px-8 lg:px-12 w-max items-center"
            >
              {INSTRUCTORS.map((inst, idx) => {
                const bgGradient =
                  inst.bgGradient || "from-[#3b082c] via-[#2b0520] to-[#180212]";

                return (
                  <div
                    key={inst.id}
                    className="flex flex-row items-stretch gap-3.5 sm:gap-4 shrink-0 group select-none"
                  >
                    {/* LEFT CARD: Portrait Image Card */}
                    <div
                      className={cn(
                        "w-[260px] sm:w-[320px] lg:w-[360px] h-[400px] sm:h-[450px] lg:h-[480px]",
                        "rounded-[28px] sm:rounded-[34px] overflow-hidden relative shadow-2xl border border-white/10 shrink-0",
                        "bg-gradient-to-b",
                        bgGradient
                      )}
                    >
                      {inst.image ? (
                        <>
                          <Image
                            src={inst.image}
                            alt={inst.name}
                            fill
                            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                            className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Rich bottom gradient blend */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pointer-events-none">
                            <span className="text-[0.68rem] font-bold uppercase tracking-wider text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                              {inst.title}
                            </span>
                            <span className="text-[0.65rem] font-sans font-semibold text-white/70">
                              0{idx + 1}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col justify-between p-6 relative">
                          <span className="text-white/20 text-4xl tracking-[0.3em] font-sans [writing-mode:vertical-rl] self-end select-none">
                            指導員
                          </span>
                          <div className="text-center my-auto">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center font-display text-3xl sm:text-4xl font-bold text-white shadow-xl ring-1 ring-white/20">
                              {inst.monogram}
                            </div>
                            <span className="text-xs uppercase tracking-widest text-white/70 font-semibold block mt-4">
                              {inst.title}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[0.68rem] text-white/60">
                            <span>Senior Faculty</span>
                            <span>0{idx + 1}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RIGHT CARD: Quote & Bio Card (Black / Dark Charcoal) */}
                    <div
                      className={cn(
                        "w-[300px] sm:w-[420px] lg:w-[480px] h-[400px] sm:h-[450px] lg:h-[480px]",
                        "rounded-[28px] sm:rounded-[34px] bg-[#0c0d14] text-white p-6 sm:p-8 lg:p-10",
                        "flex flex-col justify-between shadow-2xl border border-white/10 shrink-0 relative overflow-hidden"
                      )}
                    >
                      {/* Top Quote Content */}
                      <div className="space-y-3 sm:space-y-4">
                        <span className="font-serif text-3xl sm:text-5xl text-accent/80 leading-none block select-none">
                          “
                        </span>
                        <p className="text-white/90 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                          {inst.quote || inst.bio[0]}
                        </p>
                        {inst.bio[1] && (
                          <p className="text-white/60 text-xs sm:text-sm font-sans leading-relaxed hidden sm:block">
                            {inst.bio[1]}
                          </p>
                        )}
                      </div>

                      {/* Bottom Name & Role Credentials */}
                      <div className="pt-4 border-t border-white/15">
                        <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-wide leading-tight">
                          {inst.name}
                        </h4>
                        <p className="text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mt-1">
                          {inst.role}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="inline-block text-[0.65rem] font-semibold text-white/75 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                            {inst.title}
                          </span>
                          <span className="text-[0.65rem] text-white/50 uppercase tracking-widest font-mono">
                            CMA Certified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
