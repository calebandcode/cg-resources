/**
 * Central place for brand + navigation content.
 */
export const siteConfig = {
  name: "CMA",
  fullName: "Classical Martial Arts",
  tagline: "The Way of the Warrior",
  url: "https://cmaonline.ng",
  description:
    "Nigeria's premier classical martial arts institution. Karate, Aikido, Jiujutsu, Judo, Kobudo & Integrated Self-Defense in Abuja.",
  motto: "Discipline · Skill · Character · Excellence",
  nav: [
    { num: "01", label: "Home", href: "#home" },
    { num: "02", label: "About", href: "#about" },
    { num: "03", label: "Programmes", href: "#programmes" },
    { num: "04", label: "Schedule", href: "#schedule" },
    { num: "05", label: "Membership", href: "#pricing" },
    { num: "06", label: "Instructors", href: "#instructors" },
    { num: "07", label: "Venues", href: "#venues" },
    { num: "08", label: "Contact", href: "#contact" },
  ],
  cta: { label: "Join CMA", href: "#pricing" },
  whatsappNumber: "2349122745009",
  email: "cma.nigeria@gmail.com",
  phones: [
    { display: "0912 274 5009", raw: "09122745009" },
    { display: "0806 122 7444", raw: "08061227444" },
  ],
};

export type SiteConfig = typeof siteConfig;
