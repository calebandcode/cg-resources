"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MEMBERSHIP_PLANS,
  BEGINNER_PACKAGES,
  WALK_IN_RATES,
} from "@/lib/data/pricing";
import { FadeIn } from "@/components/ui/fade-in";
import { WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

// 1. Membership Themes
const membershipThemes: Record<
  string,
  {
    bg: string;
    text: string;
    badge: string;
    tag: string;
    starterText: string;
  }
> = {
  karate: {
    bg: "bg-gradient-to-b from-[#421024] to-[#280815]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Traditional Shotokan",
    starterText: "Starter Kit (Uniform Gi + Manual): ₦80,000",
  },
  aikido: {
    bg: "bg-gradient-to-b from-[#e11d48] to-[#9f1239]",
    text: "text-white",
    badge: "bg-white/20 text-white border-white/30",
    tag: "Harmony & Redirection",
    starterText: "Starter Kit (Uniform Gi + Manual): ₦80,000",
  },
  jiujutsu: {
    bg: "bg-gradient-to-b from-[#114b54] to-[#08282d]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Grappling & Submissions",
    starterText: "Starter Kit (Uniform Gi + Manual): ₦70,000",
  },
  judo: {
    bg: "bg-gradient-to-b from-[#141820] to-[#090b0f]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Throws & Dynamic Locks",
    starterText: "Starter Kit (Uniform Gi + Manual): ₦70,000",
  },
  kobudo: {
    bg: "bg-gradient-to-b from-[#3f4651] to-[#242930]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Okinawan Weapons Art",
    starterText: "Starter Pack + Weapons Access: ₦80,000",
  },
  selfdefense: {
    bg: "bg-gradient-to-b from-[#471542] to-[#240822]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Integrated 5-Art System",
    starterText: "Complete 5-Discipline Program: ₦180,000",
  },
};

// 2. Starter Packages Themes
const starterThemes: Record<
  string,
  {
    bg: string;
    text: string;
    badge: string;
    tag: string;
    shortTitle: string;
    letter: string;
  }
> = {
  "karate-adult": {
    bg: "bg-gradient-to-b from-[#421024] to-[#280815]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Adult Shotokan Starter",
    shortTitle: "Karate (Adult)",
    letter: "K",
  },
  "karate-child": {
    bg: "bg-gradient-to-b from-[#4a1525] to-[#2b0812]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Youth & Teen Starter",
    shortTitle: "Karate (Youth)",
    letter: "Y",
  },
  "aikido-adult": {
    bg: "bg-gradient-to-b from-[#e11d48] to-[#9f1239]",
    text: "text-white",
    badge: "bg-white/20 text-white border-white/30",
    tag: "Aikido Starter Kit",
    shortTitle: "Aikido (Adult)",
    letter: "A",
  },
  "jiujutsu-adult": {
    bg: "bg-gradient-to-b from-[#114b54] to-[#08282d]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Jiujutsu Gi & Pack",
    shortTitle: "Jiujutsu (Adult)",
    letter: "J",
  },
  "judo-adult": {
    bg: "bg-gradient-to-b from-[#141820] to-[#090b0f]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Judo Gi & Pack",
    shortTitle: "Judo (Adult)",
    letter: "D",
  },
  "kobudo-adult": {
    bg: "bg-gradient-to-b from-[#3f4651] to-[#242930]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Kobudo Weapons Pack",
    shortTitle: "Kobudo (Adult)",
    letter: "W",
  },
  "isd-complete": {
    bg: "bg-gradient-to-b from-[#471542] to-[#240822]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "5-Discipline Full Kit",
    shortTitle: "Self-Defense",
    letter: "S",
  },
};

// 3. Walk-in & Private Themes
const walkinThemes: Record<
  string,
  {
    bg: string;
    text: string;
    badge: string;
    tag: string;
    shortTitle: string;
    letter: string;
    desc: string;
  }
> = {
  "adult-walkin": {
    bg: "bg-gradient-to-b from-[#141820] to-[#090b0f]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Adult Group Drop-in",
    shortTitle: "Adult Walk-in",
    letter: "A",
    desc: "Single-session dojo access to regular adult martial training at National Stadium or Old Parade Ground.",
  },
  "child-walkin": {
    bg: "bg-gradient-to-b from-[#114b54] to-[#08282d]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "Youth Group Drop-in",
    shortTitle: "Child Walk-in",
    letter: "C",
    desc: "Single-session access to youth and family training sessions with certified dojo instructors.",
  },
  "private-adult": {
    bg: "bg-gradient-to-b from-[#e11d48] to-[#9f1239]",
    text: "text-white",
    badge: "bg-white/20 text-white border-white/30",
    tag: "1-on-1 Adult Masterclass",
    shortTitle: "Private (Adult)",
    letter: "P",
    desc: "One-on-one tailored masterclass focusing on technique precision, kata bunkai, or Dan grading syllabus.",
  },
  "private-child": {
    bg: "bg-gradient-to-b from-[#46321b] to-[#261a0d]",
    text: "text-white",
    badge: "bg-white/15 text-white border-white/20",
    tag: "1-on-1 Youth Coaching",
    shortTitle: "Private (Youth)",
    letter: "Y",
    desc: "Dedicated personal coaching for young practitioners to build confidence, discipline, and belt advancement.",
  },
};

function getWhatsAppUrl(
  programme: string,
  pkg: string,
  price: string,
  period?: string
) {
  const isRateOnRequest = price === "Contact us" || price === "On request";
  const msg = isRateOnRequest
    ? `Hello CMA, I am interested in registering for ${programme} — ${pkg}. Could you please share the registration steps and details? Thank you.`
    : `Hello CMA, I am interested in registering for ${programme} — ${pkg} (${price}${period ? ` ${period}` : ""
    }). Please guide me on enrollment and how to begin training. Thank you!`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    msg
  )}`;
}

interface PricingProps {
  onSelectPlan?: (data: any) => void;
}

const CATEGORIES = [
  { id: "memberships", label: "Core Memberships", shortLabel: "Memberships" },
  { id: "starter", label: "Starter Packages", shortLabel: "Starters" },
  { id: "walkin", label: "Drop-in & Private", shortLabel: "Drop-in" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export function Pricing({ onSelectPlan }: PricingProps = {}) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("memberships");

  const [activePlanId, setActivePlanId] = useState<string>("karate");
  const [activeStarterId, setActiveStarterId] = useState<string>("karate-adult");
  const [activeWalkinId, setActiveWalkinId] = useState<string>("adult-walkin");

  return (
    <section id="pricing" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <FadeIn className="max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Investment &amp; Membership
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Membership Options &amp; Pathways
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
              Transparent investment structures for adult and youth martial artists. Select any category below to explore tuition options and starter bundles.
            </p>
          </FadeIn>

          {/* Animated Segmented Category Switcher */}
          <FadeIn delay={0.1} className="w-full sm:w-auto shrink-0 mt-3 md:mt-0">
            <div className="relative grid grid-cols-3 sm:flex p-1 sm:p-1.5 rounded-2xl bg-paper border border-sand shadow-sm gap-1 w-full sm:w-auto">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "relative flex items-center justify-center text-center px-2 sm:px-4 py-2.5 rounded-xl font-display text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer whitespace-nowrap z-10",
                      isActive
                        ? "text-white"
                        : "text-ink-soft hover:text-ink"
                    )}
                  >
                    {/* Animated Sliding Background Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activePricingTabIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-ink shadow-sm z-[-1]"
                      />
                    )}
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span className="sm:hidden">{cat.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* =========================================================
            ANIMATED TAB CONTENT WRAPPER
            ========================================================= */}
        <AnimatePresence mode="wait">
          {/* =========================================================
              VIEW 1: CORE MEMBERSHIPS EXPANDABLE ACCORDION
              ========================================================= */}
          {activeCategory === "memberships" && (
            <motion.div
              key="view-memberships"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {/* Desktop Horizontal Expandable Accordion (lg+) */}
              <div className="hidden lg:flex -space-x-3 xl:-space-x-4 mt-12 h-[580px] w-full items-stretch select-none isolate">
                {MEMBERSHIP_PLANS.map((plan, idx) => {
                  const isExpanded = plan.id === activePlanId;
                  const theme = membershipThemes[plan.id] || membershipThemes.karate;
                  const mainWhatsAppUrl = getWhatsAppUrl(
                    plan.programme,
                    "Monthly Membership",
                    plan.monthlyPrice,
                    "/month"
                  );

                  return (
                    <div
                      key={plan.id}
                      onClick={() => setActivePlanId(plan.id)}
                      style={{
                        zIndex: isExpanded ? 30 : 10 + (MEMBERSHIP_PLANS.length - idx),
                      }}
                      className={cn(
                        "relative rounded-[28px] overflow-hidden cursor-pointer shadow-lg",
                        "transition-[flex-grow,box-shadow,filter] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[flex-grow]",
                        theme.bg,
                        theme.text,
                        isExpanded
                          ? "flex-[4.2] shadow-2xl p-8 ring-1 ring-white/20"
                          : "flex-1 min-w-[76px] xl:min-w-[90px] p-5 hover:brightness-110"
                      )}
                    >
                      {/* Collapsed State: Vertical Typography */}
                      <div
                        className={cn(
                          "absolute inset-0 p-5 flex flex-col justify-between items-center text-center transition-all duration-300 ease-out",
                          isExpanded
                            ? "opacity-0 scale-95 pointer-events-none"
                            : "opacity-100 scale-100 pointer-events-auto"
                        )}
                      >
                        <div className="pt-2">
                          <h4 className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 whitespace-nowrap opacity-90">
                            {plan.programme}
                          </h4>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-display text-xs font-bold text-white/90">
                          {plan.chip}
                        </div>
                      </div>

                      {/* Expanded State: Fixed-width layout container */}
                      <div
                        className={cn(
                          "flex flex-col justify-between h-full relative z-10 w-[380px] xl:w-[440px] max-w-full transition-all duration-400 ease-out",
                          isExpanded
                            ? "opacity-100 translate-y-0 delay-100 pointer-events-auto"
                            : "opacity-0 translate-y-3 pointer-events-none"
                        )}
                      >
                        {/* Top Details */}
                        <div>
                          <span
                            className={cn(
                              "inline-block text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-2.5 backdrop-blur-sm",
                              theme.badge
                            )}
                          >
                            {theme.tag}
                          </span>

                          <h3 className="font-display text-3xl xl:text-4xl font-extrabold uppercase tracking-wide">
                            {plan.programme}
                          </h3>

                          <span className="text-xs uppercase tracking-wider text-white/70 font-medium block mt-1">
                            {plan.fromLabel}
                          </span>

                          {/* Price Header */}
                          <div className="font-display text-4xl xl:text-5xl font-extrabold text-white leading-none my-3">
                            {plan.monthlyPrice}
                            <small className="text-sm font-sans font-medium text-white/80 ml-1.5">
                              /month
                            </small>
                          </div>

                          <p className="text-xs sm:text-sm text-white/85 mb-4 font-sans leading-relaxed">
                            {plan.childNote}{" "}
                            {plan.childPriceHighlight && (
                              <b className="text-white font-bold bg-white/20 px-2 py-0.5 rounded-full ml-1">
                                {plan.childPriceHighlight}
                              </b>
                            )}
                          </p>

                          {/* Tiered Billing Intervals */}
                          <div className="border-t border-white/20 pt-3 space-y-2 font-sans">
                            <p className="text-[0.7rem] uppercase tracking-wider font-bold text-white/60 mb-1">
                              Flexible Billing Intervals
                            </p>
                            {plan.periods.map((period) => {
                              const periodWhatsAppUrl = getWhatsAppUrl(
                                plan.programme,
                                period.label,
                                period.price,
                                period.billingNote
                              );

                              return (
                                <a
                                  key={period.label}
                                  href={periodWhatsAppUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex justify-between items-center text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer"
                                >
                                  <span className="font-medium">
                                    {period.label} ({period.billingNote})
                                  </span>
                                  <b className="font-display text-sm font-bold text-white">
                                    {period.price}
                                  </b>
                                </a>
                              );
                            })}
                          </div>
                        </div>

                        {/* Bottom Starter Highlight & Action Button */}
                        <div className="pt-4 border-t border-white/20 space-y-3">
                          <div className="text-[0.72rem] text-white/80 font-sans flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[0.65rem] shrink-0">
                              ✓
                            </span>
                            <span>{theme.starterText}</span>
                          </div>

                          {/* Direct WhatsApp Action Button */}
                          <a
                            href={mainWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-ink font-display text-xs font-bold uppercase tracking-wider shadow-md hover:bg-accent hover:text-white hover:shadow-xl transition-all duration-200 cursor-pointer"
                          >
                            <WhatsAppIcon className="w-4 h-4" />
                            Register for {plan.programme} on WhatsApp →
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Overlapping Accordion (< lg) */}
              <div className="flex flex-col -space-y-3 mt-8 lg:hidden isolate">
                {MEMBERSHIP_PLANS.map((plan, idx) => {
                  const isExpanded = plan.id === activePlanId;
                  const theme = membershipThemes[plan.id] || membershipThemes.karate;
                  const mainWhatsAppUrl = getWhatsAppUrl(
                    plan.programme,
                    "Monthly Membership",
                    plan.monthlyPrice,
                    "/month"
                  );

                  return (
                    <div
                      key={plan.id}
                      style={{
                        zIndex: isExpanded ? 30 : 10 + (MEMBERSHIP_PLANS.length - idx),
                      }}
                      className={cn(
                        "rounded-[22px] transition-all duration-300 overflow-hidden shadow-md",
                        theme.bg,
                        theme.text,
                        isExpanded ? "ring-1 ring-white/20 shadow-xl" : "hover:brightness-105"
                      )}
                    >
                      {/* Header Toggle */}
                      <button
                        type="button"
                        onClick={() => setActivePlanId(isExpanded ? "" : plan.id)}
                        className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer"
                      >
                        <div>
                          <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide">
                            {plan.programme}
                          </h4>
                          <p className="text-[0.68rem] text-white/70 font-sans">
                            {theme.tag}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-lg sm:text-xl font-bold">
                            {plan.monthlyPrice}
                          </div>
                          <span className="text-[0.65rem] text-white/70 block">
                            /month
                          </span>
                        </div>
                      </button>

                      {/* Expanded Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-2 border-t border-white/15 space-y-4">
                              <p className="text-xs text-white/85 font-sans leading-relaxed">
                                {plan.childNote}{" "}
                                {plan.childPriceHighlight && (
                                  <b className="text-white font-bold bg-white/20 px-2 py-0.5 rounded-full ml-1">
                                    {plan.childPriceHighlight}
                                  </b>
                                )}
                              </p>

                              {/* Periods */}
                              <div className="space-y-1.5 pt-1">
                                {plan.periods.map((period) => {
                                  const periodWhatsAppUrl = getWhatsAppUrl(
                                    plan.programme,
                                    period.label,
                                    period.price,
                                    period.billingNote
                                  );

                                  return (
                                    <a
                                      key={period.label}
                                      href={periodWhatsAppUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex justify-between items-center text-xs text-white/90 bg-white/10 hover:bg-white/20 px-3 py-2.5 rounded-xl transition-colors"
                                    >
                                      <span>
                                        {period.label} ({period.billingNote})
                                      </span>
                                      <b className="font-display font-bold">{period.price}</b>
                                    </a>
                                  );
                                })}
                              </div>

                              <div className="text-[0.72rem] text-white/80 font-sans">
                                ✓ {theme.starterText}
                              </div>

                              <a
                                href={mainWhatsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-ink font-display text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer shadow-md"
                              >
                                <WhatsAppIcon className="w-4 h-4" />
                                Register on WhatsApp →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* =========================================================
              VIEW 2: STARTER PACKAGES EXPANDABLE ACCORDION
              ========================================================= */}
          {activeCategory === "starter" && (
            <motion.div
              key="view-starter"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {/* Desktop Horizontal Expandable Accordion (lg+) */}
              <div className="hidden lg:flex -space-x-3 xl:-space-x-4 mt-12 h-[580px] w-full items-stretch select-none isolate">
                {BEGINNER_PACKAGES.map((pkg, idx) => {
                  const isExpanded = pkg.id === activeStarterId;
                  const theme = starterThemes[pkg.id] || starterThemes["karate-adult"];
                  const pkgWhatsAppUrl = getWhatsAppUrl(
                    pkg.title,
                    pkg.ribbon,
                    pkg.price,
                    "starter package"
                  );

                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setActiveStarterId(pkg.id)}
                      style={{
                        zIndex: isExpanded ? 30 : 10 + (BEGINNER_PACKAGES.length - idx),
                      }}
                      className={cn(
                        "relative rounded-[28px] overflow-hidden cursor-pointer shadow-lg",
                        "transition-[flex-grow,box-shadow,filter] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[flex-grow]",
                        theme.bg,
                        theme.text,
                        isExpanded
                          ? "flex-[4.2] shadow-2xl p-8 ring-1 ring-white/20"
                          : "flex-1 min-w-[70px] xl:min-w-[80px] p-5 hover:brightness-110"
                      )}
                    >
                      {/* Collapsed State */}
                      <div
                        className={cn(
                          "absolute inset-0 p-5 flex flex-col justify-between items-center text-center transition-all duration-300 ease-out",
                          isExpanded
                            ? "opacity-0 scale-95 pointer-events-none"
                            : "opacity-100 scale-100 pointer-events-auto"
                        )}
                      >
                        <div className="pt-2">
                          <h4 className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 whitespace-nowrap opacity-90">
                            {theme.shortTitle}
                          </h4>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-display text-xs font-bold text-white/90">
                          {theme.letter}
                        </div>
                      </div>

                      {/* Expanded State */}
                      <div
                        className={cn(
                          "flex flex-col justify-between h-full relative z-10 w-[380px] xl:w-[440px] max-w-full transition-all duration-400 ease-out",
                          isExpanded
                            ? "opacity-100 translate-y-0 delay-100 pointer-events-auto"
                            : "opacity-0 translate-y-3 pointer-events-none"
                        )}
                      >
                        <div>
                          <span
                            className={cn(
                              "inline-block text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-2.5 backdrop-blur-sm",
                              theme.badge
                            )}
                          >
                            {theme.tag}
                          </span>

                          <h3 className="font-display text-2xl xl:text-3xl font-extrabold uppercase tracking-wide">
                            {pkg.title}
                          </h3>

                          <span className="text-xs uppercase tracking-wider text-white/70 font-medium block mt-1">
                            Starter Package (One-time)
                          </span>

                          {/* Price */}
                          <div className="font-display text-4xl xl:text-5xl font-extrabold text-white leading-none my-3">
                            {pkg.price}
                          </div>

                          {/* Starter Inclusions Box */}
                          <div className="border-t border-white/20 pt-3 space-y-2.5 font-sans mt-4">
                            <p className="text-[0.7rem] uppercase tracking-wider font-bold text-white/60 mb-1">
                              Included in this Starter Kit
                            </p>
                            <div className="flex items-center gap-2 text-xs text-white/90">
                              <span className="text-accent font-bold">✓</span>
                              <span>Official CMA Uniform Gi &amp; Belt</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/90">
                              <span className="text-accent font-bold">✓</span>
                              <span>Technical Syllabus &amp; Grading Manual</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/90">
                              <span className="text-accent font-bold">✓</span>
                              <span>Official Member Registration Form</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/90">
                              <span className="text-accent font-bold">✓</span>
                              <span>First Month Tuition Payment Included</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="pt-4 border-t border-white/20">
                          <a
                            href={pkgWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-ink font-display text-xs font-bold uppercase tracking-wider shadow-md hover:bg-accent hover:text-white hover:shadow-xl transition-all duration-200 cursor-pointer"
                          >
                            <WhatsAppIcon className="w-4 h-4" />
                            Claim Starter Package →
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Overlapping Accordion (< lg) */}
              <div className="flex flex-col -space-y-3 mt-8 lg:hidden isolate">
                {BEGINNER_PACKAGES.map((pkg, idx) => {
                  const isExpanded = pkg.id === activeStarterId;
                  const theme = starterThemes[pkg.id] || starterThemes["karate-adult"];
                  const pkgWhatsAppUrl = getWhatsAppUrl(
                    pkg.title,
                    pkg.ribbon,
                    pkg.price,
                    "starter package"
                  );

                  return (
                    <div
                      key={pkg.id}
                      style={{
                        zIndex: isExpanded ? 30 : 10 + (BEGINNER_PACKAGES.length - idx),
                      }}
                      className={cn(
                        "rounded-[22px] transition-all duration-300 overflow-hidden shadow-md",
                        theme.bg,
                        theme.text,
                        isExpanded ? "ring-1 ring-white/20 shadow-xl" : "hover:brightness-105"
                      )}
                    >
                      {/* Header Toggle */}
                      <button
                        type="button"
                        onClick={() => setActiveStarterId(isExpanded ? "" : pkg.id)}
                        className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer"
                      >
                        <div>
                          <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide">
                            {pkg.title}
                          </h4>
                          <p className="text-[0.68rem] text-white/70 font-sans">
                            {theme.tag}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-lg sm:text-xl font-bold">
                            {pkg.price}
                          </div>
                          <span className="text-[0.65rem] text-white/70 block">
                            one-time
                          </span>
                        </div>
                      </button>

                      {/* Expanded Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-2 border-t border-white/15 space-y-4">
                              <div className="space-y-2 text-xs text-white/90 font-sans">
                                <p className="text-[0.7rem] uppercase tracking-wider font-bold text-white/60 mb-1">
                                  Included in this Starter Kit:
                                </p>
                                <div>✓ Official CMA Uniform Gi &amp; Belt</div>
                                <div>✓ Technical Syllabus &amp; Grading Manual</div>
                                <div>✓ Official Member Registration Form</div>
                                <div>✓ First Month Tuition Payment Included</div>
                              </div>

                              <a
                                href={pkgWhatsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-ink font-display text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer shadow-md"
                              >
                                <WhatsAppIcon className="w-4 h-4" />
                                Claim Starter Package →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* =========================================================
              VIEW 3: WALK-IN & PRIVATE SESSIONS EXPANDABLE ACCORDION
              ========================================================= */}
          {activeCategory === "walkin" && (
            <motion.div
              key="view-walkin"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {/* Desktop Horizontal Expandable Accordion (lg+) */}
              <div className="hidden lg:flex -space-x-3 xl:-space-x-4 mt-12 h-[540px] w-full items-stretch select-none isolate">
                {WALK_IN_RATES.map((rate, idx) => {
                  const isExpanded = rate.id === activeWalkinId;
                  const theme = walkinThemes[rate.id] || walkinThemes["adult-walkin"];
                  const rateWhatsAppUrl = getWhatsAppUrl(
                    "CMA Session",
                    rate.title,
                    rate.price,
                    "per session"
                  );

                  return (
                    <div
                      key={rate.id}
                      onClick={() => setActiveWalkinId(rate.id)}
                      style={{
                        zIndex: isExpanded ? 30 : 10 + (WALK_IN_RATES.length - idx),
                      }}
                      className={cn(
                        "relative rounded-[28px] overflow-hidden cursor-pointer shadow-lg",
                        "transition-[flex-grow,box-shadow,filter] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[flex-grow]",
                        theme.bg,
                        theme.text,
                        isExpanded
                          ? "flex-[3.8] shadow-2xl p-8 ring-1 ring-white/20"
                          : "flex-1 min-w-[80px] xl:min-w-[90px] p-5 hover:brightness-110"
                      )}
                    >
                      {/* Collapsed State */}
                      <div
                        className={cn(
                          "absolute inset-0 p-5 flex flex-col justify-between items-center text-center transition-all duration-300 ease-out",
                          isExpanded
                            ? "opacity-0 scale-95 pointer-events-none"
                            : "opacity-100 scale-100 pointer-events-auto"
                        )}
                      >
                        <div className="pt-2">
                          <h4 className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 whitespace-nowrap opacity-90">
                            {theme.shortTitle}
                          </h4>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-display text-xs font-bold text-white/90">
                          {theme.letter}
                        </div>
                      </div>

                      {/* Expanded State */}
                      <div
                        className={cn(
                          "flex flex-col justify-between h-full relative z-10 w-[380px] xl:w-[440px] max-w-full transition-all duration-400 ease-out",
                          isExpanded
                            ? "opacity-100 translate-y-0 delay-100 pointer-events-auto"
                            : "opacity-0 translate-y-3 pointer-events-none"
                        )}
                      >
                        <div>
                          <span
                            className={cn(
                              "inline-block text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-2.5 backdrop-blur-sm",
                              theme.badge
                            )}
                          >
                            {theme.tag}
                          </span>

                          <h3 className="font-display text-2xl xl:text-3xl font-extrabold uppercase tracking-wide">
                            {rate.title}
                          </h3>

                          {/* Price */}
                          <div className="font-display text-4xl xl:text-5xl font-extrabold text-white leading-none my-3">
                            {rate.price}
                            <small className="text-sm font-sans font-medium text-white/80 ml-1.5">
                              /session
                            </small>
                          </div>

                          <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed mt-4">
                            {theme.desc}
                          </p>
                        </div>

                        {/* Action Button */}
                        <div className="pt-4 border-t border-white/20">
                          <a
                            href={rateWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-ink font-display text-xs font-bold uppercase tracking-wider shadow-md hover:bg-accent hover:text-white hover:shadow-xl transition-all duration-200 cursor-pointer"
                          >
                            <WhatsAppIcon className="w-4 h-4" />
                            Book Session on WhatsApp →
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Overlapping Accordion (< lg) */}
              <div className="flex flex-col -space-y-3 mt-8 lg:hidden isolate">
                {WALK_IN_RATES.map((rate, idx) => {
                  const isExpanded = rate.id === activeWalkinId;
                  const theme = walkinThemes[rate.id] || walkinThemes["adult-walkin"];
                  const rateWhatsAppUrl = getWhatsAppUrl(
                    "CMA Session",
                    rate.title,
                    rate.price,
                    "per session"
                  );

                  return (
                    <div
                      key={rate.id}
                      style={{
                        zIndex: isExpanded ? 30 : 10 + (WALK_IN_RATES.length - idx),
                      }}
                      className={cn(
                        "rounded-[22px] transition-all duration-300 overflow-hidden shadow-md",
                        theme.bg,
                        theme.text,
                        isExpanded ? "ring-1 ring-white/20 shadow-xl" : "hover:brightness-105"
                      )}
                    >
                      {/* Header Toggle */}
                      <button
                        type="button"
                        onClick={() => setActiveWalkinId(isExpanded ? "" : rate.id)}
                        className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer"
                      >
                        <div>
                          <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide">
                            {rate.title}
                          </h4>
                          <p className="text-[0.68rem] text-white/70 font-sans">
                            {theme.tag}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-lg sm:text-xl font-bold">
                            {rate.price}
                          </div>
                          <span className="text-[0.65rem] text-white/70 block">
                            /session
                          </span>
                        </div>
                      </button>

                      {/* Expanded Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-2 border-t border-white/15 space-y-4">
                              <p className="text-xs text-white/85 font-sans leading-relaxed">
                                {theme.desc}
                              </p>

                              <a
                                href={rateWhatsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-ink font-display text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer shadow-md"
                              >
                                <WhatsAppIcon className="w-4 h-4" />
                                Book Session on WhatsApp →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
