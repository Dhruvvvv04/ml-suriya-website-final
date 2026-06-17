"use client";

import { useState, useEffect } from "react";
import { useReveal } from "@/lib/hooks/useReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const milestones = [
  { year: "2020", title: "Spiritual Mission Launched", desc: "Began daily Dhyan & Swadhyaya sessions open to all." },
  { year: "2018", title: "ZED Master Trainer", desc: "Certified by QCI, Government of India." },
  { year: "2023", title: "Published Author", desc: "Authored book for Government of India." },
  { year: "2024", title: "300+ Organizations", desc: "Served 300+ organizations with spiritual & quality guidance." },
  { year: "2024", title: "Meditation Master", desc: "Recognized as Meditation Master Trainer." },
];

const achievements = [
  { emoji: "🏛️", title: "ZED Master Trainer", desc: "QCI · Government of India Certified", count: 1 },
  { emoji: "🧘", title: "Meditation Sessions", desc: "Daily sessions since 2020", count: 1800 },
  { emoji: "📖", title: "Books Published", desc: "Including for Government of India", count: 2 },
  { emoji: "🏭", title: "Organizations Served", desc: "Quality & spiritual guidance", count: 300 },
  { emoji: "🎯", title: "Years of Mastery", desc: "Engineering to spiritual leadership", count: 30 },
  { emoji: "📺", title: "YouTube Sessions", desc: "Free for all", count: 4 },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <>{count}{suffix}</>;
}

export default function AchievementsPage() {
  const { ref, isVisible } = useReveal();
  const { ref: counterRef, isVisible: counterVis } = useReveal();

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <section className="px-6 pt-36 pb-16">
            <div className="mx-auto max-w-[1160px]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Achievements</span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.8rem,_5vw,_4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                A Legacy of{" "}
                <em className="not-italic text-[var(--color-p-600)]">Excellence</em>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                Over three decades of service bridging spiritual wisdom with industrial excellence —
                recognized by government bodies and thousands of practitioners worldwide.
              </p>
            </div>
          </section>

          <section ref={counterRef} className={`px-6 pb-20 transition-all duration-700 ${counterVis ? "visible opacity-100" : "translate-y-9 opacity-0"}`}>
            <div className="mx-auto max-w-[1160px]">
              <div className="grid gap-6 md:grid-cols-3">
                {achievements.slice(0, 3).map((a) => (
                  <div key={a.title} className="glass rounded-2xl border border-white/80 bg-white/48 p-6 text-center backdrop-blur-[22px]">
                    <span className="text-4xl">{a.emoji}</span>
                    <div className="font-display mt-4 text-5xl font-bold text-[var(--color-p-600)]">
                      <AnimatedCounter end={a.count} suffix={a.count > 1 ? "+" : ""} />
                    </div>
                    <span className="mt-2 block text-sm font-bold text-[var(--color-ink)]">{a.title}</span>
                    <span className="mt-1 block text-xs text-[var(--color-muted)]">{a.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Recognition</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Awards &amp;{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Certifications</em>
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {achievements.map((a) => (
                  <div key={a.title} className="flex items-start gap-4 rounded-xl border border-white/90 bg-white/55 p-5 backdrop-blur-lg transition-all hover:-translate-y-0.5 hover:bg-white/80">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.1)] text-2xl">{a.emoji}</span>
                    <div>
                      <span className="block text-sm font-bold text-[var(--color-ink)]">{a.title}</span>
                      <span className="mt-0.5 block text-xs text-[var(--color-muted)]">{a.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={ref} className={`px-6 pb-28 transition-all duration-700 ${isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"}`}>
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Journey</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Key{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Milestones</em>
                </h2>
              </div>
              <div className="relative">
                <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-[var(--color-p-500)] via-[var(--color-rose)] to-transparent" />
                <div className="space-y-8">
                  {milestones.map((m) => (
                    <div key={m.year} className="relative flex gap-6 pl-12">
                      <div className="absolute left-[12px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-p-500)] bg-[var(--color-bg)]" />
                      <div className="flex-1">
                        <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">{m.year}</span>
                        <h3 className="mt-0.5 font-display text-xl font-bold text-[var(--color-ink)]">{m.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
