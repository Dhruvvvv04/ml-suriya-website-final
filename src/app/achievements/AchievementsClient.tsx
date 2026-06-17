"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { achievementCounters } from "@/lib/data/content";

export default function AchievementsClient() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-3" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <section className="px-6 pt-36 pb-16">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Milestones
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                  Legacy &amp; <em className="not-italic text-[var(--color-p-600)]">Impact</em>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  A timeline of dedication to quality excellence and spiritual teaching.
                </p>
              </RevealOnScroll>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {achievementCounters.map((item, i) => (
                  <StaggerItem key={item.label}>
                    <div className="group relative overflow-hidden rounded-2xl border border-[rgba(139,92,246,0.15)] bg-white/40 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-p-300)] hover:bg-white/60 hover:shadow-lg">
                      <span className="relative z-10 mb-4 block text-4xl">{item.emoji}</span>
                      <div className="relative z-10 font-display text-5xl font-bold text-[var(--color-ink)]">
                        <AnimatedCounter end={item.end} suffix={item.suffix} />
                      </div>
                      <span className="relative z-10 mt-3 block text-sm font-bold text-[var(--color-ink-2)]">
                        {item.label}
                      </span>
                      <span className="relative z-10 mt-1 block text-xs text-[var(--color-muted)]">
                        {item.description}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="px-6 pb-28">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <div className="mb-10">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Timeline
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Journey of <em className="not-italic text-[var(--color-p-600)]">Excellence</em>
                  </h2>
                </div>
              </RevealOnScroll>

              <div className="space-y-8">
                {[
                  {
                    year: "Present",
                    title: "Managing Director, Here Quality Excellence",
                    desc: "Leading organizations towards Zero Defect and Zero Effect through spiritual management principles.",
                  },
                  {
                    year: "2020",
                    title: "Initiated Daily Dhyan & Swadhyaya",
                    desc: "Began the daily virtual sessions offering spiritual guidance and meditation practices open to all.",
                  },
                  {
                    year: "Certification",
                    title: "ZED Master Trainer",
                    desc: "Certified by the Quality Council of India (Govt. of India) to train and implement Zero Effect Zero Defect methodologies.",
                  },
                  {
                    year: "Publication",
                    title: "Authored Books on Quality and Spirituality",
                    desc: "Published seminal works linking ancient Indian wisdom with modern quality paradigms.",
                  },
                ].map((event, i) => (
                  <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                    <div className="group relative flex flex-col md:flex-row gap-6 md:gap-10 rounded-2xl border border-[rgba(139,92,246,0.1)] bg-white/40 p-6 md:p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/60 hover:shadow-md">
                      <div className="md:w-48 flex-shrink-0">
                        <span className="font-display text-2xl font-bold text-[var(--color-p-600)]">
                          {event.year}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">
                          {event.title}
                        </h3>
                        <p className="text-[var(--color-muted)] leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
