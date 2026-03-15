"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of just the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-[#121212]">
      {/* 500vh scrollable area */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        {/* Canvas animation background */}
        <ScrollyCanvas progress={scrollYProgress} />

        {/* Parallax text overlay */}
        <Overlay progress={scrollYProgress} />
      </div>

      {/* Content below the scroll-jacking section */}
      <div className="relative z-20 bg-[#121212]">
        <Projects />
      </div>
    </main>
  );
}
