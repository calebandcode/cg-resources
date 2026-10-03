"use client";

import React, { useEffect, useState } from "react";
import { Programme } from "@/lib/data/programmes";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/ui/icons";

interface VideoModalProps {
  programme: Programme | null;
  onClose: () => void;
}

export function VideoModal({ programme, onClose }: VideoModalProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    setActiveIdx(0);
  }, [programme]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && programme && programme.videos.length > 1) {
        setActiveIdx((prev) => (prev - 1 + programme.videos.length) % programme.videos.length);
      }
      if (e.key === "ArrowRight" && programme && programme.videos.length > 1) {
        setActiveIdx((prev) => (prev + 1) % programme.videos.length);
      }
    }

    if (programme) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [programme, onClose]);

  if (!programme || !programme.videos || programme.videos.length === 0) return null;

  const currentVideo = programme.videos[activeIdx] || programme.videos[0];
  const videoCount = programme.videos.length;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-ink/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative z-10 w-full max-w-4xl bg-ink border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 text-cream">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-ink">
          <div>
            <p className="font-display text-[0.65rem] text-accent uppercase tracking-widest font-semibold">
              Now Playing
            </p>
            <h4 className="font-display text-base sm:text-xl font-bold tracking-wide text-cream">
              {programme.title}{" "}
              <span className="text-xs sm:text-sm font-normal text-cream/60">
                • {videoCount} video{videoCount > 1 ? "s" : ""}
              </span>
            </h4>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full border border-white/15 bg-white/5 text-cream hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 cursor-pointer"
          >
            <CloseIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            key={currentVideo.id}
            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-ink border-t border-white/10">
          <div className="flex items-center gap-2">
            {programme.videos.map((vid, idx) => (
              <button
                key={vid.id + idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to video ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIdx
                    ? "w-8 bg-accent"
                    : "w-4 bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {videoCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx((prev) => (prev - 1 + videoCount) % videoCount)
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-display uppercase tracking-wider text-cream/80 hover:text-white hover:border-accent transition-colors duration-200 cursor-pointer"
                >
                  <ChevronLeftIcon className="w-3.5 h-3.5" />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % videoCount)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-display uppercase tracking-wider text-cream/80 hover:text-white hover:border-accent transition-colors duration-200 cursor-pointer"
                >
                  Next
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
