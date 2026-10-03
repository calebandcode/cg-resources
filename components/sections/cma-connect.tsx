"use client";

import React from "react";
import { FadeIn } from "@/components/ui/fade-in";

export function CmaConnect() {
  return (
    <section id="forecast" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Digital Platform
          </p>
          <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            CMA CONNECT
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-ink-soft font-sans">
            A comprehensive digital portal connecting students, instructors, and grading histories.
          </p>
        </FadeIn>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Registration */}
          <FadeIn delay={0.05}>
            <div className="h-full rounded-3xl border border-sand bg-paper p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="font-display text-sm font-bold text-accent mb-3 block">01</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-ink mb-2">
                  Member Registration
                </h3>
                <p className="text-ink-soft text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                  Seamless online profile creation and multi-discipline programme enrollment.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Belt Tracking */}
          <FadeIn delay={0.1}>
            <a
              href="/assets/forecast/forecast.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-3xl border border-sand bg-paper p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-accent transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-sm font-bold text-accent mb-3 block">02</span>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-ink group-hover:text-accent transition-colors duration-200">
                    Belt Tracking &amp; Forecast
                  </h3>
                  <span className="text-accent text-sm font-bold">→</span>
                </div>
                <p className="text-ink-soft text-xs sm:text-sm md:text-base font-sans leading-relaxed mt-2">
                  Kyu-dan progression pathways, syllabus requirements, and grading history analytics.
                </p>
              </div>
            </a>
          </FadeIn>

          {/* Card 3: Attendance & Payments */}
          <FadeIn delay={0.15}>
            <div className="h-full rounded-3xl border border-sand bg-paper p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="font-display text-sm font-bold text-accent mb-3 block">03</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-ink mb-2">
                  Attendance &amp; Billing
                </h3>
                <p className="text-ink-soft text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                  Digital dojo check-in, equipment starter kit requests, and recurring billing.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
