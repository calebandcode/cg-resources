import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} (${siteConfig.name}) — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Classical Martial Arts",
    "CMA",
    "Karate Abuja",
    "Aikido Nigeria",
    "Jujutsu",
    "Judo",
    "Kobudo",
    "Self Defense Abuja",
    "Martial Arts Nigeria",
  ],
  authors: [{ name: siteConfig.fullName }],
  metadataBase: new URL(siteConfig.url || "https://cmaonline.ng"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: `${siteConfig.name} — ${siteConfig.fullName} | Train With Tradition`,
    description: siteConfig.description,
    url: "https://cmaonline.ng/",
    siteName: siteConfig.fullName,
    locale: "en_NG",
    images: [
      {
        url: "/assets/social-preview.png",
        width: 1200,
        height: 680,
        alt: `${siteConfig.fullName}, Abuja Nigeria`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.fullName} | Train With Tradition`,
    description: siteConfig.description,
    images: ["/assets/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream font-sans text-ink selection:bg-accent selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
