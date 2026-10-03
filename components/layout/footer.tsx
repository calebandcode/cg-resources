"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { useScrollTo } from "@/components/providers/smooth-scroll-provider";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import {
  YouTubeIcon,
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  LocationDotIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactDetails = [
  {
    label: "Direct Phone",
    value: "0912 274 5009",
    href: "tel:09122745009",
    icon: PhoneIcon,
  },
  {
    label: "Alternate Line",
    value: "0806 122 7444",
    href: "tel:08061227444",
    icon: PhoneIcon,
  },
  {
    label: "Official Email",
    value: "cma.nigeria@gmail.com",
    href: "mailto:cma.nigeria@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    label: "Dojo Locations",
    value: "National Stadium & Old Parade Ground, Abuja",
    icon: LocationDotIcon,
  },
];

export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-ink text-cream">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3b082c]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8">
        {/* =========================================================
            TOP CONTACT BANNER & DIRECT CONNECT CHANNELS
            ========================================================= */}
        <div className="pb-16 sm:pb-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Heading & Description */}
            <FadeIn className="w-full lg:col-span-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Connect &amp; Inquiries
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-cream leading-tight">
                Begin Your Martial Journey
              </h2>
              <p className="mt-4 text-cream/70 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
                Have questions about our training paths, belt progression, tuition packages, or walk-in sessions? Connect directly with the dojo leadership.
              </p>

              {/* Direct WhatsApp CTA Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Classical Martial Arts, I would like to inquire about joining the dojo."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 py-3.5 px-6 rounded-full bg-white text-ink font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Chat on WhatsApp Directly →
                </a>
              </div>
            </FadeIn>

            {/* Right: Direct Contact Cards Grid (Desktop & Tablet only) */}
            <FadeIn delay={0.1} className="hidden md:block lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm flex flex-col justify-between hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[0.68rem] font-bold uppercase tracking-widest text-cream/50 font-sans">
                          {item.label}
                        </span>
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-display text-sm sm:text-base font-bold text-cream hover:text-accent transition-colors block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-xs sm:text-sm font-medium text-cream/90 leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* =========================================================
            BOTTOM FOOTER: BRAND, LINKS & BULLETIN
            ========================================================= */}
        <div className="pt-14 sm:pt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Column 1: Brand & Social */}
          <FadeIn>
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-cream"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-accent">
                <Image
                  src="/assets/CMA-Logo.png"
                  alt="CMA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span>{siteConfig.fullName}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60 font-sans">
              {siteConfig.tagline}. Dedicated to authentic Japanese Budo and modern self-defense systems in Nigeria.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://youtube.com/@cma.online?si=bF-LjLg7xG8hPqzi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CMA on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors duration-300 hover:border-accent hover:text-white hover:bg-[#ff0000]"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@cma_online?_r=1&_t=ZS-9918CtPwpMK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CMA on TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors duration-300 hover:border-[#69c9d0] hover:text-white hover:bg-black"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CMA on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors duration-300 hover:border-accent hover:text-white hover:bg-[#e1306c]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063803791872"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CMA on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors duration-300 hover:border-[#1877f2] hover:text-white hover:bg-[#1877f2]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          {/* Column 2: Quick Links */}
          <FadeIn delay={0.05}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
              Quick Navigation
            </p>
            <ul className="mt-5 space-y-2.5 font-sans">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Column 3: Dojo Bulletin Newsletter */}
          <FadeIn delay={0.1}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
              Dojo Bulletin
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream/70 font-sans">
              Receive syllabus updates, seminar invitations, and grading announcements.
            </p>
            <NewsletterForm />
          </FadeIn>
        </div>

        {/* Copyright Bar */}
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-white/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between font-sans">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName} (CMA). All rights
            reserved.
          </p>
          <p>Discipline · Skill · Character · Excellence</p>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="mt-5 min-h-[84px]">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="text-sm text-accent font-medium font-sans"
          >
            Thank you for subscribing to CMA Dojo Bulletin.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: EASE }}
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              aria-invalid={status === "error"}
              className="w-full min-w-0 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-sans"
            />
            <Button
              type="submit"
              variant="ghost"
              disabled={status === "submitting"}
              className="shrink-0 px-5 py-2.5 text-xs uppercase tracking-wider"
            >
              {status === "submitting" ? "…" : "Subscribe"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-300 font-sans">
          Please provide a valid email address.
        </p>
      )}
    </div>
  );
}
