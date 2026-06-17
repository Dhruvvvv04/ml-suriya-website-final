"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/ui/FAQSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { courseLevels } from "@/lib/data/courses";

const coursesFaqs = [
  { question: "Are these courses suitable for beginners?", answer: "Yes, the Foundation Course is perfectly designed for absolute beginners looking to find a balance between work and spiritual peace." },
  { question: "How is the Kevalya DIY course different from the Crash Course?", answer: "The Crash Course is a 7-day guided consistency program, while the Kevalya DIY is an advanced, self-driven 3-month transformative journey designed for deep mastery." },
  { question: "Do I need any prior meditation experience?", answer: "No prior experience is necessary. The courses guide you step-by-step from fundamental Swadhyaya concepts to advanced Dhyan practices." },
];

export default function CoursesClient() {
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
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[1160px]">
            <div className="mb-14">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                Course Levels
              </span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold leading-tight text-[var(--color-ink)]">
                Choose Your{" "}
                <em className="not-italic text-[var(--color-p-600)]">Path</em>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
                Three levels of guided transformation — from free introductory sessions to deep
                self-driven mastery. Each path is designed to bring you closer to peace and purpose.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {courseLevels.map((c) => (
                <Link
                  key={c.num}
                  href={c.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.85)] bg-white/48 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01]"
                  style={{
                    boxShadow: "0 8px 28px rgba(107,53,200,0.08)",
                    minHeight: 320,
                  }}
                >
                  <div className="course-level-tag mb-4 inline-block self-start rounded-full bg-gradient-to-r from-[var(--color-p-600)] to-[var(--color-p-500)] px-4 py-1.5 text-[0.55rem] font-bold uppercase tracking-wider text-white shadow-[0_2px_10px_rgba(107,53,200,0.3)] transition-all group-hover:scale-105">
                    {c.levelType}
                  </div>
                  <span className="font-display block text-2xl font-bold text-[var(--color-ink)]">
                    {c.num}. {c.name}
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--color-p-200)] px-3 py-1 text-[0.6rem] font-semibold text-[var(--color-p-700)]">
                      {c.level}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted)]">
                    {c.level}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-p-500)] transition-all group-hover:translate-x-1">
                      View Details
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <RevealOnScroll>
          <FAQSection 
            title="Course FAQs" 
            subtitle="Everything you need to know about starting your journey."
            faqs={coursesFaqs} 
          />
        </RevealOnScroll>

        <Footer />
      </div>
    </div>
  );
}
