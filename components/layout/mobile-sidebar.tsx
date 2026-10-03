"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CloseIcon, YouTubeIcon, TikTokIcon, InstagramIcon, FacebookIcon } from "@/components/ui/icons";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileSidebar({ isOpen, onClose, activeSection }: MobileSidebarProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[140] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-[100dvh] w-[min(340px,86vw)] bg-[var(--panel)] border-l border-[var(--line)] z-[150] flex flex-col p-6 overflow-y-auto transition-transform duration-400 ease-[cubic-bezier(0.22,0.9,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
        aria-label="Mobile menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/CMA-Logo.png"
              alt="CMA Logo"
              width={42}
              height={42}
              className="rounded-lg object-cover border-2 border-[var(--accent)]"
            />
            <span className="font-display font-semibold tracking-wider text-base text-[var(--text)]">
              CMA
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--line2)] bg-[var(--panel2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col">
          {siteConfig.nav.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-baseline gap-3 py-3.5 px-2 border-b border-[var(--line)] font-display uppercase tracking-wider text-base transition-all duration-200 ${
                  isActive
                    ? "text-[var(--accent)] pl-3"
                    : "text-[var(--muted)] hover:text-[var(--accent)] hover:pl-3"
                }`}
              >
                <span className={`text-xs ${isActive ? "text-[var(--accent)]" : "text-[var(--faint)]"}`}>
                  {item.num}
                </span>
                {item.label}
              </a>
            );
          })}
          <a
            href="/assets/forecast/forecast.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-baseline gap-3 py-3.5 px-2 border-b border-[var(--line)] font-display uppercase tracking-wider text-base text-[var(--muted)] hover:text-[var(--accent)] hover:pl-3 transition-all duration-200"
          >
            <span className="text-xs text-[var(--faint)]">08</span>
            Forecast
          </a>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-8 flex flex-col gap-4">
          <a
            href="#pricing"
            onClick={onClose}
            className="w-full text-center py-3 rounded-lg bg-[var(--accent)] text-white font-display text-sm uppercase tracking-widest font-semibold hover:shadow-[0_12px_28px_rgba(229,50,62,0.35)] transition-all duration-200"
          >
            Join CMA
          </a>

          <div className="flex gap-2.5 justify-center pt-2">
            <a
              href="https://youtube.com/@cma.online?si=bF-LjLg7xG8hPqzi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CMA on YouTube"
              className="w-10 h-10 rounded-xl border border-[var(--line2)] bg-[var(--panel2)] grid place-items-center text-[var(--muted)] hover:text-white hover:bg-[#ff0000] hover:border-[#ff0000] transition-all duration-200"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@cma_online?_r=1&_t=ZS-9918CtPwpMK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CMA on TikTok"
              className="w-10 h-10 rounded-xl border border-[var(--line2)] bg-[var(--panel2)] grid place-items-center text-[var(--muted)] hover:text-white hover:bg-black hover:border-[#69c9d0] transition-all duration-200"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CMA on Instagram"
              className="w-10 h-10 rounded-xl border border-[var(--line2)] bg-[var(--panel2)] grid place-items-center text-[var(--muted)] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#dc2743] transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063803791872"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CMA on Facebook"
              className="w-10 h-10 rounded-xl border border-[var(--line2)] bg-[var(--panel2)] grid place-items-center text-[var(--muted)] hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] transition-all duration-200"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
