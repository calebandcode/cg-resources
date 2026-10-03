"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { LocationDotIcon, PhoneIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface VenueData {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  address: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  scheduleHighlights: string;
  facilities: string[];
  contactPhone: {
    display: string;
    raw: string;
  };
}

const VENUES: VenueData[] = [
  {
    id: "stadium",
    name: "Moshood Abiola National Stadium",
    subtitle: "Main Headquarters & National Training Center",
    badge: "Package A Arena",
    address: "Velodrome, Package A, Moshood Abiola National Stadium, Constitution Avenue, Abuja",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Moshood+Abiola+National+Stadium+Velodrome+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Moshood+Abiola+National+Stadium+Velodrome+Abuja",
    scheduleHighlights: "Mon, Wed, Sat & Sun Training Sessions",
    facilities: ["Olympic Tatami Mats", "Weapons Training Hall", "Spectator Seating", "Ample Parking"],
    contactPhone: {
      display: "0912 274 5009",
      raw: "09122745009",
    },
  },
  {
    id: "parade-ground",
    name: "Old Parade Ground Sports Complex",
    subtitle: "Garki City Center Martial Arts Dojo",
    badge: "Garki Area 10",
    address: "FCT Sports Complex, Old Parade Ground, Area 10, Garki, Abuja",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Old+Parade+Ground+Area+10+Garki+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Old+Parade+Ground+Area+10+Garki+Abuja",
    scheduleHighlights: "Specialized Weekend & Evening Classes",
    facilities: ["Dedicated Martial Hall", "Close Combat Dojo", "Central City Access", "Secure Facility"],
    contactPhone: {
      display: "0806 122 7444",
      raw: "08061227444",
    },
  },
];

export function Venues() {
  const [selectedId, setSelectedId] = useState<string>(VENUES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeVenue = VENUES.find((v) => v.id === selectedId) || VENUES[0];

  function handleCopyAddress(venue: VenueData, e: React.MouseEvent) {
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(venue.address);
      setCopiedId(venue.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }

  return (
    <section id="venues" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Training Locations
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Training venues.
          </h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
            Two dedicated training locations in Abuja.
          </p>
        </FadeIn>

        {/* =========================================================
            UNIFIED INTERACTIVE CARD: TABS + REACTIVE GOOGLE MAP
            ========================================================= */}
        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-[28px] sm:rounded-[36px] border border-sand bg-paper overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Interactive Venue Tabs & Details (5 cols on desktop, full-width on mobile) */}
              <div className="w-full lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-paper">
                <div>
                  <div className="mb-6">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-ink-soft">
                      Select Dojo Location
                    </span>
                  </div>

                  {/* Venue Tab Selectors */}
                  <div className="space-y-4">
                    {VENUES.map((venue) => {
                      const isSelected = venue.id === selectedId;
                      const isCopied = copiedId === venue.id;

                      return (
                        <div
                          key={venue.id}
                          onClick={() => setSelectedId(venue.id)}
                          className={cn(
                            "rounded-2xl p-5 border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group",
                            isSelected
                              ? "bg-cream-100 border-accent shadow-sm ring-1 ring-accent/30"
                              : "bg-white border-sand hover:border-sand/80 hover:bg-cream/40 opacity-85 hover:opacity-100"
                          )}
                        >
                          {/* Active Indicator Bar */}
                          {isSelected && (
                            <motion.div
                              layoutId="venueActiveIndicator"
                              className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}

                          <div className="relative z-10">
                            <h3 className="font-display text-base sm:text-xl font-bold uppercase tracking-wide text-ink">
                              {venue.name}
                            </h3>

                            <p className="text-xs sm:text-sm text-ink-soft font-sans leading-relaxed mt-2">
                              {venue.address}
                            </p>

                            <div className="mt-3">
                              <button
                                type="button"
                                onClick={(e) => handleCopyAddress(venue, e)}
                                className={cn(
                                  "inline-flex items-center gap-1.5 text-[0.68rem] font-sans font-medium px-2.5 py-1 rounded-md border transition-all cursor-pointer",
                                  isCopied
                                    ? "bg-green-600 text-white border-green-600 font-semibold"
                                    : "border-sand text-ink-soft hover:text-accent hover:border-accent bg-white/80"
                                )}
                              >
                                {isCopied ? (
                                  "✓ Address copied"
                                ) : (
                                  <>
                                    <svg
                                      className="w-3 h-3 text-ink-muted"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                    </svg>
                                    Copy address
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Venue Action & Phone Footer (Desktop only) */}
                <div className="hidden lg:flex mt-8 pt-6 border-t border-sand items-center gap-3">
                  <a
                    href={activeVenue.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-ink text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-accent transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer"
                  >
                    <LocationDotIcon className="w-4 h-4" />
                    Get Directions ↗
                  </a>

                  <a
                    href={`tel:${activeVenue.contactPhone.raw}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-sand bg-cream text-ink font-display text-xs font-bold tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    <span>{activeVenue.contactPhone.display}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Synchronized Google Map Viewport (Desktop only) */}
              <div className="hidden lg:block lg:col-span-7 relative min-h-[540px] bg-[#1a1f2c] border-l border-sand overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVenue.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <iframe
                      title={`Live Map of ${activeVenue.name}`}
                      src={activeVenue.mapEmbedUrl}
                      className="w-full h-full border-0 filter contrast-[1.05]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Bottom Direct Map Link */}
                <a
                  href={activeVenue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-white text-ink text-xs font-display font-bold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-2xl hover:bg-accent hover:text-white transition-all duration-200"
                >
                  <span>Open Full Map</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
