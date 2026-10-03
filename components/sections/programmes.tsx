"use client";

import React from "react";
import Image from "next/image";
import { PROGRAMMES, Programme } from "@/lib/data/programmes";
import { FadeIn } from "@/components/ui/fade-in";
import { YouTubeIcon } from "@/components/ui/icons";

interface ProgrammesProps {
  onSelectProgramme: (prog: Programme) => void;
}

export function Programmes({ onSelectProgramme }: ProgrammesProps) {
  return (
    <section id="programmes" className="py-24 sm:py-28 bg-[var(--bg2)] text-[var(--text)] transition-colors duration-300">
      <div className="w-[min(1200px,92%)] mx-auto">
        <FadeIn>
          <p className="flex items-center gap-3.5 font-display text-xs uppercase tracking-[0.34em] text-[var(--accent)] font-semibold mb-3 before:content-[''] before:w-8 before:h-[1px] before:bg-[var(--accent)]">
            Training paths
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--text)] mb-3.5">
            Eight programmes. One institution.
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl mb-12">
            Each programme is designed to develop specific skills, character traits, and physical capabilities.
          </p>
        </FadeIn>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMMES.map((prog, idx) => (
            <FadeIn key={prog.id} delay={idx * 0.06}>
              <article
                onClick={() => onSelectProgramme(prog)}
                className="group cursor-pointer bg-[var(--panel)] border border-[var(--line)] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[var(--shadow)] hover:border-[var(--line2)] transition-all duration-350"
              >
                {/* Media Container */}
                <div className="relative h-48 overflow-hidden bg-[var(--panel2)]">
                  {prog.image ? (
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover saturate-[0.92] group-hover:scale-108 transition-transform duration-600 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--accent)] to-[#5c0d13] grid place-items-center">
                      <span className="font-display text-5xl font-bold text-white/90 shadow-sm">
                        {prog.fallbackMonogram}
                      </span>
                    </div>
                  )}

                  {/* Top Letter Badge */}
                  <span className="absolute top-3.5 left-3.5 z-10 w-9 h-9 grid place-items-center rounded-lg bg-[var(--accent)] text-white font-display font-bold text-base shadow-[0_6px_16px_rgba(0,0,0,0.4)]">
                    {prog.letter}
                  </span>

                  {/* YouTube Top Badge */}
                  <span className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[0.6rem] uppercase tracking-wider text-white font-medium">
                    <YouTubeIcon className="w-3.5 h-3.5 text-[#ff0000]" />
                    Watch
                  </span>

                  {/* Media Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                  {/* Subtitle Tag */}
                  <span className="absolute left-4 bottom-3 z-10 font-display text-[0.72rem] tracking-[0.2em] uppercase text-[#ffd7d9]">
                    {prog.tag}
                  </span>

                  {/* Hover Layer with Play Button */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white grid place-items-center shadow-lg group-hover:scale-100 scale-90 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-[var(--accent)] border-y-[7px] border-y-transparent ml-1" />
                      </div>
                      <div>
                        <span className="font-display text-white text-xs uppercase tracking-wider block font-semibold">
                          Play {prog.title}
                        </span>
                        <small className="text-white/70 text-[0.62rem] uppercase tracking-widest block font-sans">
                          {prog.badgeText || "Click to watch"}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--text)] mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed font-sans flex-1">
                    {prog.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
