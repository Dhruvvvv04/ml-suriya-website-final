"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { aboutContent, credentials } from "@/lib/data/content";

export default function AboutSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="relative z-10 px-6 py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1160px] transition-all duration-700 ${
          isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
        }`}
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
              <div
                className="h-full w-full rounded-[44%_56%_62%_38%/42%_46%_54%_58%] bg-gradient-to-br from-[var(--color-p-200)] to-[var(--color-p-400)]"
                style={{ animation: "aboutBgShape 12s ease-in-out infinite alternate" }}
              />
              <div
                className="absolute inset-0 rounded-full border border-[rgba(107,53,200,0.12)]"
                style={{ animation: "aboutRing 18s linear infinite" }}
              />
              <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-2xl">
                <span className="font-display text-7xl font-bold text-[var(--color-p-500)]">MLS</span>
              </div>
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              {aboutContent.heading}
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              {aboutContent.body}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="flex items-start gap-3 rounded-xl border border-white/90 bg-white/55 p-3 backdrop-blur-lg transition-all hover:translate-x-1 hover:bg-white/80"
                >
                  <span className="mt-0.5 text-base">{cred.emoji}</span>
                  <div>
                    <span className="block text-xs font-semibold text-[var(--color-ink)]">
                      {cred.title}
                    </span>
                    <span className="block text-[0.6rem] text-[var(--color-muted)]">
                      {cred.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {aboutContent.philosophyIcons.map((item) => (
                <div
                  key={item.title}
                  className="story-card rounded-xl border border-white/90 bg-white/48 p-4 backdrop-blur-lg transition-all hover:-translate-y-0.5 hover:bg-white/70"
                  style={{ boxShadow: "0 4px 28px rgba(107,53,200,0.07)" }}
                >
                  <div className="mb-1 text-lg">{item.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--color-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
