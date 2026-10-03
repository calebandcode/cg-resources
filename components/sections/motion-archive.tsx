"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PARTNERS, Partner } from "@/lib/data/partners";
import { FadeIn } from "@/components/ui/fade-in";

function getInitials(name: string) {
  if (!name) return "CMA";
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function LogoCard({ partner }: { partner: Partner }) {
  const [error, setError] = useState(false);

  return (
    <div
      title={partner.name}
      className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-paper border border-sand flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-accent shadow-sm"
    >
      {!error && partner.logo ? (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
          <Image
            src={partner.logo}
            alt={partner.name || "Partner"}
            fill
            sizes="80px"
            loading="lazy"
            className="object-contain"
            onError={() => setError(true)}
          />
        </div>
      ) : (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full grid place-items-center bg-cream-100 text-accent font-display text-sm font-bold text-center p-2">
          {getInitials(partner.name)}
        </div>
      )}
    </div>
  );
}

export function MotionArchive() {
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section id="motion" className="bg-cream py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 sm:mb-12">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Affiliations &amp; Collaborations
            </p>
            <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              CMA in motion.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-ink-soft font-sans">
              Training · Collaboration · Competition · Community. A moving visual archive of CMA&apos;s work, partners and events.
            </p>
          </div>
        </FadeIn>

        {/* Marquee Row 1 */}
        <FadeIn delay={0.08}>
          <div className="cma-marquee-wrap relative overflow-hidden py-6 mb-6 bg-paper border border-sand rounded-3xl before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-24 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-paper before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-24 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-paper after:to-transparent">
            <div className="flex items-center gap-6 w-max px-6 cma-marquee-left">
              {duplicatedPartners.map((partner, idx) => (
                <LogoCard key={`row1-${partner.name}-${idx}`} partner={partner} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Marquee Row 2 */}
        <FadeIn delay={0.12}>
          <div className="cma-marquee-wrap relative overflow-hidden py-6 bg-paper border border-sand rounded-3xl before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-24 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-paper before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-24 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-paper after:to-transparent">
            <div className="flex items-center gap-6 w-max px-6 cma-marquee-right">
              {duplicatedPartners.map((partner, idx) => (
                <LogoCard key={`row2-${partner.name}-${idx}`} partner={partner} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
