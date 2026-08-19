/**
 * Central place for brand + navigation content so every component
 * (navbar, footer, metadata) reads from one source of truth.
 *
 * NOTE: "Asha" is a placeholder brand name (Sanskrit for "hope") —
 * swap it for the client's real name whenever it's confirmed.
 */
export const siteConfig = {
  name: "Asha",
  tagline: "Wellness, Slowed Down",
  description:
    "Yoga and meditation coaching designed around you — online or in person.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Classes", href: "#classes" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  cta: { label: "Book a Session", href: "#contact" },
};

export type SiteConfig = typeof siteConfig;
