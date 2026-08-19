"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
              ? "rgba(250, 246, 239, 0.8)"
              : "rgba(250, 246, 239, 0)",
            boxShadow: scrolled
              ? "0 10px 30px -12px rgba(20, 21, 26, 0.12)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5, ease: EASE }}
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-3 backdrop-blur-md transition-[padding] duration-500 sm:px-6",
            scrolled ? "sm:py-3" : "sm:py-4"
          )}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors duration-500",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 md:flex"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "group relative font-sans text-sm font-medium transition-colors duration-500",
                  scrolled
                    ? "text-ink-soft hover:text-ink"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-organic group-hover:w-full",
                    scrolled ? "bg-ink" : "bg-white"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              href={siteConfig.cta.href}
              variant="ghost"
              className="px-5 py-2.5 text-sm shadow-sm"
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
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.35, ease: EASE }}
              className={cn(
                "h-px w-6 rounded-full transition-colors duration-300",
                menuOpen || scrolled ? "bg-ink" : "bg-white"
              )}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "h-px w-6 rounded-full transition-colors duration-300",
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
                "h-px w-6 rounded-full transition-colors duration-300",
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-cream md:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col items-center gap-7"
            >
              {siteConfig.nav.map((item, i) => (
                <FadeIn key={item.href} delay={0.08 + i * 0.06} distance={16}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display text-3xl font-medium tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </FadeIn>
              ))}
            </nav>
            <FadeIn delay={0.08 + siteConfig.nav.length * 0.06} distance={16}>
              <Button
                href={siteConfig.cta.href}
                variant="primary"
                onClick={(e) => handleNavClick(e, siteConfig.cta.href)}
              >
                {siteConfig.cta.label}
              </Button>
            </FadeIn>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
