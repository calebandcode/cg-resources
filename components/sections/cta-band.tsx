"use client";

import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/components/providers/smooth-scroll-provider";

export function CtaBand() {
  const scrollTo = useScrollTo();

  return (
    <div className="bg-ink text-cream py-16 sm:py-20 border-t border-white/10 text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent mb-3">
            Join The Institution
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
            Your Training Begins With A Decision.
          </h2>
          <p className="text-cream/70 text-base sm:text-lg max-w-xl mx-auto mb-8 font-sans">
            Join Classical Martial Arts and begin your journey in traditional Japanese budo and modern self-defense. The dojo is open.
          </p>
          <Button
            href="#pricing"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#pricing");
            }}
          >
            Start Your Journey →
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
