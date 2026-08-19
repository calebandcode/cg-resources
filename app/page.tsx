import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Classes } from "@/components/sections/classes";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Philosophy />
      <Classes />
      <Testimonials />
      <Contact />
    </main>
  );
}
