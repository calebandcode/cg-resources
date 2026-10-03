"use client";

import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { BookOpenIcon } from "@/components/ui/icons";

export function Gear() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Dojo Gear
          </p>
          <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            Equipment &amp; Training Resources
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-ink-soft font-sans mb-8 sm:mb-10">
            Everything you need to train properly. Starter kits included in beginner packages.
          </p>
        </FadeIn>

        <div className="flex flex-wrap gap-5 sm:gap-6">
          <FadeIn delay={0.05} className="flex-1 min-w-[180px] sm:min-w-[200px]">
            <div className="rounded-3xl border border-sand bg-paper p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-accent transition-all duration-300">
              <span className="block text-4xl mb-3">🥋</span>
              <h3 className="font-display font-bold uppercase tracking-wider text-lg sm:text-xl text-ink">
                Uniforms (Gi)
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex-1 min-w-[180px] sm:min-w-[200px]">
            <div className="rounded-3xl border border-sand bg-paper p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-accent transition-all duration-300">
              <span className="block text-4xl mb-3 text-accent flex justify-center">
                <BookOpenIcon className="w-10 h-10" />
              </span>
              <h3 className="font-display font-bold uppercase tracking-wider text-lg sm:text-xl text-ink">
                Manuals &amp; Syllabus
              </h3>
            </div>
          </FadeIn>
        </div>

        <p className="text-ink-muted text-xs sm:text-sm mt-6 font-sans">
          Full equipment catalogue with pricing available at the dojo.
        </p>
      </div>
    </section>
  );
}
