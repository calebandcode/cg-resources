"use client";

import { motion, type Variants } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    index: "01",
    title: "Breath First",
    description:
      "Every session starts with the breath — the simplest, most direct way back into the body.",
  },
  {
    index: "02",
    title: "Move With Intention",
    description:
      "No forcing, no rushing. Just steady, sustainable movement that meets you where you are.",
  },
  {
    index: "03",
    title: "Honest Conversation",
    description:
      "Coaching isn't just poses — it's real talk about stress, habits, and what balance actually looks like for you.",
  },
];

const statementReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE },
  },
};

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-32 lg:px-12">
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-sage-dark">
            Our Philosophy
          </p>
        </FadeIn>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          variants={statementReveal}
          className="mt-8 max-w-4xl font-display text-3xl font-medium leading-[1.3] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
        >
          We believe stillness isn&apos;t the absence of movement —{" "}
          <span className="text-sage-dark">it&apos;s where real change begins.</span>{" "}
          Our coaching blends conscious breath, gentle movement, and honest
          conversation to help you feel more like yourself again.
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          style={{ transformOrigin: "left" }}
          className="mt-16 h-px w-full bg-sand sm:mt-20"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-16">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.index} delay={i * 0.12}>
              <span className="font-display text-sm font-semibold text-ink-muted">
                {pillar.index}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">
                {pillar.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
