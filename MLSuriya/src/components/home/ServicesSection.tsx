"use client";

import Link from "next/link";
import { useReveal } from "@/lib/hooks/useReveal";
import { services } from "@/lib/data/content";
import { courseLevels } from "@/lib/data/courses";

export default function ServicesSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="services" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-[1160px]">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
          }`}
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
            What I Offer
          </span>
          <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
          <h2 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold text-[var(--color-ink)]">
            Pathways to{" "}
            <em className="not-italic text-[var(--color-p-600)]">Transformation</em>
          </h2>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {services.map((svc, i) => (
            <div
              key={svc.icon}
              className="svc-card group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1.5"
              style={{
                background: "linear-gradient(135deg,#2d1a5a 0%,#4a2d7f 50%,#3d2570 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                transitionDelay: `${i * 0.1}s`,
              }}
        >
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(240,192,64,0.35) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <span className="font-display relative z-10 block text-[clamp(2.5rem,_6vw,_3.8rem)] font-bold leading-none text-white/80">
              {svc.icon}
            </span>
            <h3 className="font-display relative z-10 mb-3 mt-3 text-lg font-bold text-[var(--color-gold)]">
              {svc.title}
            </h3>
            <p className="relative z-10 flex-1 text-sm font-light leading-relaxed text-[rgba(255,255,255,0.56)]">
              {svc.description}
            </p>
          </div>
          ))}
        </div>

        <div id="courses-card">
          <div className="mb-8">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              Course Levels
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
              Choose Your{" "}
              <em className="not-italic text-[var(--color-p-600)]">Path</em>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {courseLevels.map((c) => (
              <Link
                key={c.num}
                href={c.href}
                className="course-level-card group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.85)] bg-white/48 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
                style={{
                  boxShadow: "0 8px 28px rgba(107,53,200,0.08)",
                }}
              >
                <div className="course-level-tag mb-4 inline-block rounded-full bg-gradient-to-r from-[var(--color-p-600)] to-[var(--color-p-500)] px-3 py-1 text-[0.55rem] font-bold uppercase tracking-wider text-white shadow-[0_2px_10px_rgba(107,53,200,0.3)] transition-all group-hover:scale-105 group-hover:shadow-[0_8px_18px_rgba(240,192,64,0.45)]">
                  {c.levelType}
                </div>
                <span className="font-display block text-xl font-bold text-[var(--color-ink)]">
                  {c.num}. {c.name}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                  {c.level}
                </p>
                <div className="mt-5 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-p-500)] transition-all group-hover:translate-x-1">
                  Learn More
                  <span className="text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
