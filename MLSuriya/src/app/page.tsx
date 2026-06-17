"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AboutSection from "@/components/home/AboutSection";
import FourRSection from "@/components/home/FourRSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ServicesSection from "@/components/home/ServicesSection";
import StudentReadingSection from "@/components/home/StudentReadingSection";
import FeedbackSection from "@/components/home/FeedbackSection";
import YouTubeSection from "@/components/home/YouTubeSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#courses-card") {
      const el = document.getElementById("courses-card");
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
        <div className="aura-orb aura-orb-3" />
        <div className="aura-orb aura-orb-4" />
      </div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />

        <div
          className="relative z-10 h-px"
          style={{
            background:
              "linear-gradient(90deg,transparent,var(--color-p-400),var(--color-rose),transparent)",
            opacity: 0.35,
          }}
        />

        <FourRSection />

        <div
          className="relative z-10 h-px"
          style={{
            background:
              "linear-gradient(90deg,transparent,var(--color-p-400),var(--color-rose),transparent)",
            opacity: 0.35,
          }}
        />

        <PhilosophySection />
        <ServicesSection />
        <StudentReadingSection />
        <FeedbackSection />
        <YouTubeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
