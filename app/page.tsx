"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Classes } from "@/components/sections/classes";
import { Schedule } from "@/components/sections/schedule";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Instructors } from "@/components/sections/instructors";
import { Venues } from "@/components/sections/venues";
import { MotionArchive } from "@/components/sections/motion-archive";
import { Programme } from "@/lib/data/programmes";
import {
  MembershipModal,
  MembershipModalData,
} from "@/components/modals/membership-modal";
import { VideoModal } from "@/components/modals/video-modal";

export default function Home() {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<MembershipModalData | null>(null);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Classes onSelectProgramme={setSelectedProgramme} />
        <Schedule />
        <Benefits />
        <Pricing onSelectPlan={setSelectedPlan} />
        <Instructors />
        <Venues />
        <MotionArchive />
      </main>
      <Footer />
      <BackToTop />

      {/* Interactive Modals */}
      <MembershipModal
        data={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
      <VideoModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
      />
    </>
  );
}
