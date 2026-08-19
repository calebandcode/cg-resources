import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";

/**
 * Temporary placeholder sections.
 * Each remaining section in the execution plan (Classes, Testimonials,
 * Contact, Footer) will replace its matching block below — they exist now
 * only so the navbar's transparent → scrolled transition and anchor
 * scrolling can be seen working end to end.
 */
function Placeholder({
  id,
  label,
  dark = false,
}: {
  id: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-screen items-center justify-center px-6 ${
        dark ? "bg-ink text-cream" : "bg-cream text-ink"
      }`}
    >
      <p className="font-display text-sm uppercase tracking-[0.3em] opacity-40">
        {label} — coming in a later step
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Philosophy />
      <Placeholder id="classes" label="Classes" dark />
      <Placeholder id="testimonials" label="Testimonials" />
      <Placeholder id="contact" label="Contact" dark />
    </main>
  );
}
