"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  {
    value: "4k+",
    label: "practitioners trained across dojos",
  },
  {
    value: "500+",
    label: "masterclasses & grading sessions",
  },
  {
    value: "98%",
    label: "student retention & discipline rate",
  },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            DESKTOP COMPOSITION (lg and above)
            ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Top Left (8 cols): 3 Stat Metrics with vertical dividers */}
          <div className="col-span-8 pr-4">
            <FadeIn>
              <div className="grid grid-cols-3 gap-6 pt-2 pb-10">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.value}
                    className={idx > 0 ? "border-l border-sand/70 pl-6 xl:pl-8" : ""}
                  >
                    <div className="font-display text-4xl xl:text-5xl font-extrabold text-ink tracking-tight">
                      {stat.value}
                    </div>
                    <p className="mt-2.5 text-xs xl:text-sm text-ink-soft font-sans leading-relaxed max-w-[210px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Bottom Row inside Left Column: Card 1 (Left) + Card 2 (Center) */}
            <div className="grid grid-cols-8 gap-6 items-end pt-4">
              {/* Card 1: Bottom-Left Card */}
              <FadeIn delay={0.1} className="col-span-4">
                <div className="relative h-[380px] xl:h-[420px] w-full rounded-[36px] overflow-hidden bg-[#e8ecf2] shadow-md transition-transform duration-500 hover:scale-[1.02] group">
                  <Image
                    src="/assets/images/sensei-richqrd-01.webp"
                    alt="Classical Martial Arts Kata"
                    fill
                    sizes="(max-width: 1280px) 300px, 350px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </FadeIn>

              {/* Card 2: Center Middle Card (Offset higher) */}
              <FadeIn delay={0.15} className="col-span-4">
                <div className="relative h-[280px] xl:h-[310px] w-full rounded-[32px] overflow-hidden bg-[#e8ecf2] shadow-md transition-transform duration-500 hover:scale-[1.02] group mb-6">
                  <Image
                    src="/assets/images/karate.jpg"
                    alt="Traditional Kumite Technique"
                    fill
                    sizes="(max-width: 1280px) 260px, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column (4 cols): Card 3 (Top-Right) + Statement Headline (Bottom-Right) */}
          <div className="col-span-4 flex flex-col justify-between h-full space-y-10">
            {/* Card 3: Top-Right Taller Card */}
            <FadeIn delay={0.2}>
              <div className="relative h-[380px] xl:h-[420px] w-full rounded-[36px] overflow-hidden bg-[#e8ecf2] shadow-md transition-transform duration-500 hover:scale-[1.02] group">
                <Image
                  src="/assets/images/hannah-kumite.jpg"
                  alt="Dynamic Martial Focus"
                  fill
                  sizes="(max-width: 1280px) 320px, 380px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </FadeIn>

            {/* Bottom Right Statement Headline */}
            <FadeIn delay={0.25} className="pt-2">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent mb-3">
                About CMA
              </p>
              <h2 className="font-display text-2xl xl:text-3xl font-extrabold tracking-tight text-ink leading-[1.25]">
                More than a dojo. CMA is a comprehensive training system integrating multiple disciplines for holistic development —{" "}
                <span className="text-ink/40 font-normal">
                  body, mind, and character.
                </span>
              </h2>
            </FadeIn>
          </div>
        </div>

        {/* =========================================================
            MOBILE & TABLET COMPOSITION (lg:hidden)
            ========================================================= */}
        <div className="lg:hidden space-y-10">
          {/* Top 3 Stat Metrics */}
          <FadeIn>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-b border-sand/70 pb-8">
              {stats.map((stat, idx) => (
                <div
                  key={stat.value}
                  className={idx > 0 ? "border-l border-sand/70 pl-3 sm:pl-6" : ""}
                >
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 text-[0.7rem] sm:text-xs text-ink-soft font-sans leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 3 Staggered Visual Cards on Mobile */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-end">
              {/* Mobile Card 1 */}
              <div className="col-span-4 relative h-48 sm:h-64 rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#e8ecf2] shadow-sm">
                <Image
                  src="/assets/images/sensei-richqrd-01.webp"
                  alt="Classical Martial Arts Kata"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              {/* Mobile Card 2 */}
              <div className="col-span-4 relative h-36 sm:h-48 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#e8ecf2] shadow-sm mb-2">
                <Image
                  src="/assets/images/karate.jpg"
                  alt="Traditional Kumite Technique"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              {/* Mobile Card 3 */}
              <div className="col-span-4 relative h-52 sm:h-72 rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#e8ecf2] shadow-sm">
                <Image
                  src="/assets/images/hannah-kumite.jpg"
                  alt="Dynamic Martial Focus"
                  fill
                  sizes="33vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </FadeIn>

          {/* Mobile Statement Headline */}
          <FadeIn delay={0.15}>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent mb-2">
                About CMA
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-snug">
                More than a dojo. CMA is a comprehensive training system integrating multiple disciplines for holistic development —{" "}
                <span className="text-ink/40 font-normal">
                  body, mind, and character.
                </span>
              </h2>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
