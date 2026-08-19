"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactDetails = [
  { label: "Email", value: "hello@ashastudio.com" },
  { label: "Phone", value: "+1 (000) 000-0000" },
  { label: "Location", value: "Online worldwide · in-person by appointment" },
];

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Please share your name.";
    if (!values.email.trim()) next.email = "Please share an email.";
    else if (!EMAIL_PATTERN.test(values.email))
      next.email = "That email doesn't look quite right.";
    if (!values.message.trim()) next.message = "Tell us a little about you.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Simulated submission — swap for a real endpoint (API route, Resend,
    // Formspree, etc.) once one exists. Kept client-only for this template.
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  }

  function reset() {
    setStatus("idle");
    setErrors({});
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-sage">
              Contact
            </p>
            <h2 className="mt-6 max-w-md font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
              Let&apos;s Find Your Rhythm
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-cream/70">
              Have a question about coaching, pricing, or which class fits
              you best? Send a note — we&apos;ll get back to you within a day
              or two.
            </p>

            <dl className="mt-10 space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-4 text-sm">
                  <dt className="w-20 shrink-0 text-cream/40">
                    {detail.label}
                  </dt>
                  <dd className="text-cream/80">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="flex flex-col items-start py-10"
                  >
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-ink"
                      aria-hidden
                    >
                      ✓
                    </motion.span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                      Message sent
                    </h3>
                    <p className="mt-2 max-w-xs text-cream/70">
                      Thank you for reaching out — we&apos;ll be in touch
                      soon.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 text-sm font-semibold text-sage underline-offset-4 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <FormField
                      label="Name"
                      value={values.name}
                      error={errors.name}
                      onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                    />
                    <FormField
                      label="Email"
                      type="email"
                      value={values.email}
                      error={errors.email}
                      onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                    />
                    <FormField
                      label="Message"
                      as="textarea"
                      value={values.message}
                      error={errors.message}
                      onChange={(v) =>
                        setValues((s) => ({ ...s, message: v }))
                      }
                    />

                    <Button
                      type="submit"
                      variant="ghost"
                      disabled={status === "submitting"}
                      className="mt-2 justify-center"
                    >
                      {status === "submitting" ? "Sending…" : "Submit Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  as?: "input" | "textarea";
}

function FormField({
  label,
  value,
  error,
  onChange,
  type = "text",
  as = "input",
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  const sharedClassName = cn(
    "w-full rounded-xl border bg-white/[0.06] px-4 py-3 text-cream placeholder:text-cream/40 transition-colors duration-300 focus:outline-none focus:ring-1",
    error
      ? "border-red-300/60 focus:border-red-300/60 focus:ring-red-300/60"
      : "border-white/15 focus:border-sage focus:ring-sage"
  );

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-cream/60">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(sharedClassName, "resize-none")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={sharedClassName}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
