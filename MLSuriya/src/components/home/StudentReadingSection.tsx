"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { readingPoints } from "@/lib/data/content";

export default function StudentReadingSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative z-10 px-6 py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1160px] transition-all duration-700 ${
          isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
        }`}
      >
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <div className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] md:p-8">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              To Offer Students
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2rem,_3.8vw,_3.2rem)] font-bold leading-[1.1] text-[var(--color-ink)]">
              Reading{" "}
              <em className="not-italic text-[var(--color-p-600)]">(4th R)</em>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              A focused reading practice for students under the 4R model, designed to improve
              understanding, values, and lifelong growth.
            </p>
            <ul className="mt-4 space-y-2 pl-4 text-sm leading-relaxed text-[var(--color-ink-2)]">
              {readingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="glass relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] md:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(240,192,64,0.24) 0%, transparent 72%)",
                filter: "blur(4px)",
              }}
            />
            <span className="relative z-10 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-p-600)]">
              Worth Rupees (4R)
            </span>
            <p className="font-display relative z-10 text-2xl leading-tight text-[var(--color-ink)] md:text-3xl">
              You are not just a student, <br />
              <span className="text-[var(--color-p-500)]">you are an investment.</span>
            </p>
            <p className="relative z-10 mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              What you read today determines what you earn tomorrow — in Rupees, Respect, Relations,
              and Rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
