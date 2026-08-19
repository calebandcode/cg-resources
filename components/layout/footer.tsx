"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useScrollTo } from "@/components/providers/smooth-scroll-provider";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const EASE = [0.22, 1, 0.36, 1] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactDetails = [
  { label: "Email", value: "hello@ashastudio.com" },
  { label: "Phone", value: "+1 (000) 000-0000" },
  { label: "Location", value: "Online worldwide" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="border-t border-white/10 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <FadeIn>
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="font-display text-xl font-semibold tracking-tight text-cream"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {siteConfig.tagline}. {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors duration-300 hover:border-white/30 hover:text-cream"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="text-sm text-cream/70">
                  {detail.value}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
              Stay Connected
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              Mindful tips and class updates, roughly once a month.
            </p>
            <NewsletterForm />
          </FadeIn>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Built with intention.</p>
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
    // Simulated subscribe — swap for a real newsletter provider
    // (Mailchimp, Resend Audiences, Beehiiv, etc.) when one exists.
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
            className="text-sm text-sage"
          >
            Thanks — check your inbox to confirm.
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
              className="w-full min-w-0 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
            />
            <Button
              type="submit"
              variant="ghost"
              disabled={status === "submitting"}
              className="shrink-0 px-5 py-2.5 text-sm"
            >
              {status === "submitting" ? "…" : "Subscribe"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-300">
          That email doesn&apos;t look quite right.
        </p>
      )}
    </div>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M14 8.5h2.5V5H14c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.5.5-.5.5-.5z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
