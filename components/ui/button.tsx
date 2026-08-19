"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium tracking-tight transition-colors duration-300 ease-organic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-dark disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-cream hover:bg-ink/85",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-white",
  ghost: "bg-white/90 text-ink hover:bg-white",
};

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  /** Renders as a Next.js Link when provided, otherwise a <button>. */
  href?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

const motionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
};

/**
 * Pill-shaped CTA button used across the site (nav, hero, forms).
 * Renders a Next.js `<Link>` when `href` is supplied, else a `<button>`.
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { variant = "primary", className, children, href, onClick, type, disabled, ...rest },
    ref
  ) => {
    const classes = cn(baseStyles, variantStyles[variant], className);

    if (href) {
      return (
        <motion.div {...motionProps} className="inline-block">
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            onClick={onClick}
            className={classes}
            {...rest}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type ?? "button"}
        disabled={disabled}
        onClick={onClick}
        className={classes}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
