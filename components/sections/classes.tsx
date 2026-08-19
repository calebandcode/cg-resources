"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

const EASE = [0.22, 1, 0.36, 1] as const;

type Category = "Yoga" | "Meditation" | "1:1 Coaching";
type Filter = "All" | Category;

const filters: Filter[] = ["All", "Yoga", "Meditation", "1:1 Coaching"];

const toneStyles: Record<Category, string> = {
  Yoga: "bg-gradient-to-br from-sage to-sage-dark",
  Meditation: "bg-gradient-to-br from-[#e3c3a1] to-[#b98a63]",
  "1:1 Coaching": "bg-gradient-to-br from-[#2f313b] to-ink",
};

interface ClassItem {
  id: string;
  number: string;
  category: Category;
  title: string;
  description: string;
  duration: string;
  level: string;
}

const classItems: ClassItem[] = [
  {
    id: "vinyasa-flow",
    number: "01",
    category: "Yoga",
    title: "Vinyasa Flow",
    description:
      "A dynamic, breath-linked flow that builds strength and steadies the mind.",
    duration: "60 min",
    level: "All levels",
  },
  {
    id: "restorative-yoga",
    number: "02",
    category: "Yoga",
    title: "Restorative Yoga",
    description:
      "Slow, supported poses held longer to release tension and deepen rest.",
    duration: "45 min",
    level: "Beginner",
  },
  {
    id: "guided-meditation",
    number: "03",
    category: "Meditation",
    title: "Guided Meditation",
    description:
      "Simple breathing and visualization techniques to quiet a busy mind.",
    duration: "20 min",
    level: "All levels",
  },
  {
    id: "breathwork",
    number: "04",
    category: "Meditation",
    title: "Breathwork Session",
    description:
      "Focused breathing practices to reduce stress and reset your nervous system.",
    duration: "30 min",
    level: "All levels",
  },
  {
    id: "one-on-one",
    number: "05",
    category: "1:1 Coaching",
    title: "Private Coaching",
    description:
      "Personalized sessions built around your goals, schedule, and body.",
    duration: "60 min",
    level: "Online or in-person",
  },
  {
    id: "mindful-movement",
    number: "06",
    category: "Yoga",
    title: "Mindful Movement",
    description:
      "Gentle, low-impact movement for strength, mobility, and body awareness.",
    duration: "45 min",
    level: "Beginner",
  },
];

export function Classes() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? classItems
      : classItems.filter((item) => item.category === active);

  return (
    <section id="classes" className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <FadeIn className="max-w-xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-sage-dark">
              Classes &amp; Programs
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Practices Shaped Around You
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter classes by category"
              className="inline-flex flex-wrap items-center gap-1 rounded-full border border-sand bg-white/70 p-1"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active === filter}
                  onClick={() => setActive(filter)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {active === filter && (
                    <motion.span
                      layoutId="active-filter-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-ink"
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10",
                      active === filter ? "text-cream" : "text-ink-soft"
                    )}
                  >
                    {filter}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <ClassCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ClassCard({ item }: { item: ClassItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="group cursor-default rounded-3xl bg-white p-3 shadow-sm transition-shadow duration-500 ease-organic hover:shadow-xl"
    >
      <div
        className={cn(
          "relative h-44 overflow-hidden rounded-2xl",
          toneStyles[item.category]
        )}
      >
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-ink">
          {item.category}
        </span>
        <span className="pointer-events-none absolute -bottom-6 -right-2 font-display text-8xl font-bold text-white/10 transition-transform duration-700 ease-organic group-hover:scale-110">
          {item.number}
        </span>
      </div>

      <div className="px-3 pb-4 pt-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{item.description}</p>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
          <span>{item.duration}</span>
          <span className="h-1 w-1 rounded-full bg-sand" />
          <span>{item.level}</span>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
          Learn more
          <span
            aria-hidden
            className="transition-transform duration-300 ease-organic group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
