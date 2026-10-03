"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/components/providers/smooth-scroll-provider";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { CloseIcon } from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) {
    event.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? "rgba(250, 246, 239, 0.88)"
              : "rgba(13, 16, 21, 0.4)",
            boxShadow: scrolled
              ? "0 10px 30px -12px rgba(13, 16, 21, 0.12)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5, ease: EASE }}
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-3 backdrop-blur-md transition-[padding] duration-500 sm:px-6 border",
            scrolled ? "sm:py-3 border-sand" : "sm:py-4 border-white/10"
          )}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent shrink-0 shadow-xs">
              <Image
                src="/assets/CMA-Logo.png"
                alt="CMA Logo"
                fill
                className="object-cover"
              />
            </div>
            <span
              className={cn(
                "font-display text-lg font-bold tracking-wider uppercase transition-colors duration-500",
                scrolled ? "text-ink" : "text-white"
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "group relative font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-500",
                  scrolled
                    ? "text-ink-soft hover:text-ink"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 ease-organic group-hover:w-full",
                    scrolled ? "bg-accent" : "bg-white"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href={siteConfig.cta.href}
              variant={scrolled ? "primary" : "ghost"}
              className="px-5 py-2.5 text-xs uppercase tracking-wider"
              onClick={(e) => handleNavClick(e, siteConfig.cta.href)}
            >
              {siteConfig.cta.label}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden cursor-pointer"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.35, ease: EASE }}
              className={cn(
                "h-0.5 w-6 rounded-full transition-colors duration-300",
                menuOpen || scrolled ? "bg-ink" : "bg-white"
              )}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "h-0.5 w-6 rounded-full transition-colors duration-300",
                scrolled && !menuOpen ? "bg-ink" : "bg-white",
                menuOpen && "bg-ink"
              )}
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.35, ease: EASE }}
              className={cn(
                "h-0.5 w-6 rounded-full transition-colors duration-300",
                menuOpen || scrolled ? "bg-ink" : "bg-white"
              )}
            />
          </button>
        </motion.div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-cream lg:hidden px-6 pt-5 pb-8 overflow-y-auto"
          >
            {/* Top Header Bar inside Drawer with Brand & Close Button */}
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <Link
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent shrink-0 shadow-xs">
                  <Image
                    src="/assets/CMA-Logo.png"
                    alt="CMA Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-display text-lg font-bold tracking-wider uppercase text-ink">
                  {siteConfig.name}
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 grid place-items-center rounded-full border border-sand bg-paper text-ink hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Mobile"
              className="flex flex-col items-center gap-4 my-auto py-6"
            >
              {siteConfig.nav.map((item, i) => (
                <FadeIn key={item.href} delay={0.03 + i * 0.03} distance={10}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display text-xl font-bold tracking-tight text-ink uppercase hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </FadeIn>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="flex flex-col items-center gap-3 pt-4 border-t border-sand">
              <Button
                href={siteConfig.cta.href}
                variant="primary"
                className="w-full py-3.5 text-center justify-center text-xs uppercase tracking-wider"
                onClick={(e) => handleNavClick(e, siteConfig.cta.href)}
              >
                {siteConfig.cta.label}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
