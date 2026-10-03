"use client";

import React, { useRef, useState, useEffect } from "react";
import { SCHEDULE } from "@/lib/data/schedule";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

// Martial & theme icons corresponding directly to the inspiration timeline nodes
function MartialNodeIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "monday":
      // Foundations / Fist / Kata
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      );
    case "wednesday":
      // Kumite / Sparring
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
          <path d="M13 19l6-6" />
          <path d="M16 16l4 4" />
          <path d="M19 21l2-2" />
          <path d="M9.5 17.5L21 6V3h-3L6.5 14.5" />
          <path d="M11 19l-6-6" />
          <path d="M8 16l-4 4" />
          <path d="M5 21l-2-2" />
        </svg>
      );
    case "saturday-am":
      // Youth / Growth Sprout (inspired directly by the inspiration node icon)
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 10a6 6 0 0 0-6-6H3v3a6 6 0 0 0 6 6h3" />
          <path d="M12 14a6 6 0 0 1 6-6h3v3a6 6 0 0 1-6 6h-3" />
          <path d="M12 22V8" />
          <circle cx="12" cy="5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "saturday-pm":
      // Integrated Self-Defense / Shield & Control
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "sunday":
      // Weapons & Dan Masterclass Star
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return null;
  }
}

export function Schedule() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="schedule" className="bg-cream py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Training Calendar
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
            Weekly Schedule &amp; Sessions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
            Consistent training sessions hosted at National Stadium and Old Parade Ground, Abuja.
          </p>
        </FadeIn>

        {/* =========================================================================
            HORIZONTAL TIMELINE ROADMAP WITH SEAMLESS OVERLAY NAVIGATION BUTTONS
            ========================================================================= */}
        <FadeIn delay={0.15}>
          <div className="relative mt-12 sm:mt-16 group/timeline">
            {/* Left Floating Overlay Navigation Button */}
            <div
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center pr-6 transition-opacity duration-300 pointer-events-none",
                canScrollLeft ? "opacity-100" : "opacity-0"
              )}
            >
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll timeline left"
                className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-sand bg-paper/90 backdrop-blur-md shadow-lg flex items-center justify-center text-ink hover:bg-accent hover:text-white hover:border-accent active:scale-90 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Right Floating Overlay Navigation Button */}
            <div
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center pl-6 transition-opacity duration-300 pointer-events-none",
                canScrollRight ? "opacity-100" : "opacity-0"
              )}
            >
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll timeline right"
                className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-sand bg-paper/90 backdrop-blur-md shadow-lg flex items-center justify-center text-ink hover:bg-accent hover:text-white hover:border-accent active:scale-90 transition-all duration-200 cursor-pointer"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Timeline Track */}
            <div
              ref={scrollRef}
              onScroll={checkScrollability}
              className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 select-none pb-4 scroll-smooth"
            >
              <div className="relative min-w-[840px] xl:min-w-full w-full py-8">
                {/* Continuous Center Horizontal Axis Line */}
                <div className="absolute top-1/2 left-6 right-6 h-[1.5px] -translate-y-1/2 bg-ink/20 z-0" />

                {/* 5 Alternating Milestones */}
                <div className="grid grid-cols-5 gap-6 xl:gap-8 relative z-10">
                  {SCHEDULE.map((item, idx) => {
                    const isAbove = idx % 2 !== 0; // Alternating top & bottom

                    return (
                      <div
                        key={item.id}
                        className="group relative flex flex-col items-start"
                      >
                        {/* ==========================================
                            TOP ROW CONTENT (when isAbove is true)
                            ========================================== */}
                        <div
                          className={cn(
                            "w-full flex flex-col justify-end pb-4 transition-all duration-300 min-h-[110px]",
                            isAbove
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 pointer-events-none invisible"
                          )}
                        >
                          {isAbove && (
                            <div className="space-y-1 pr-2">
                              {/* Day Header */}
                              <div className="font-display text-2xl xl:text-3xl font-extrabold text-ink tracking-tight">
                                {item.day}
                              </div>

                              {/* Programme Title */}
                              <h4 className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider text-ink">
                                {item.programme}
                              </h4>

                              {/* Time & Venue Subtitle */}
                              <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                                {item.time} • {item.venue}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* ==========================================
                            TOP STEM CONNECTOR LINE
                            ========================================== */}
                        <div
                          className={cn(
                            "w-[1.5px] h-8 transition-colors duration-300 ml-6 -mb-1",
                            isAbove ? "bg-ink/30 group-hover:bg-accent" : "opacity-0"
                          )}
                        />

                        {/* ==========================================
                            CIRCULAR NODE (Directly on the axis line)
                            ========================================== */}
                        <div className="relative w-12 h-12 sm:w-13 sm:h-13 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-[#0d1015] text-white/90 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
                          <MartialNodeIcon type={item.id} className="w-5 h-5 xl:w-6 xl:h-6" />
                        </div>

                        {/* ==========================================
                            BOTTOM STEM CONNECTOR LINE
                            ========================================== */}
                        <div
                          className={cn(
                            "w-[1.5px] h-8 transition-colors duration-300 ml-6 -mt-1",
                            !isAbove ? "bg-ink/30 group-hover:bg-accent" : "opacity-0"
                          )}
                        />

                        {/* ==========================================
                            BOTTOM ROW CONTENT (when isAbove is false)
                            ========================================== */}
                        <div
                          className={cn(
                            "w-full flex flex-col justify-start pt-4 transition-all duration-300 min-h-[110px]",
                            !isAbove
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 pointer-events-none invisible"
                          )}
                        >
                          {!isAbove && (
                            <div className="space-y-1 pr-2">
                              {/* Day Header */}
                              <div className="font-display text-2xl xl:text-3xl font-extrabold text-ink tracking-tight">
                                {item.day}
                              </div>

                              {/* Programme Title */}
                              <h4 className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider text-ink">
                                {item.programme}
                              </h4>

                              {/* Time & Venue Subtitle */}
                              <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                                {item.time} • {item.venue}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
