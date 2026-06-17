"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { feedbackTopics } from "@/lib/data/content";

export default function FeedbackSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative z-10 px-6 pb-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1160px] transition-all duration-700 ${
          isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
        }`}
      >
        <div className="glass relative overflow-hidden rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] md:p-8">
          <div
            className="pointer-events-none absolute -bottom-30 -right-25 h-72 w-72 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
            }}
          />
          <span className="relative z-10 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
            How Course Has Helped People
          </span>
          <div className="relative z-10 mt-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
          <h2 className="font-display relative z-10 mt-3 text-[clamp(2rem,_3.8vw,_3rem)] font-bold leading-[1.12] text-[var(--color-ink)]">
            Feedback{" "}
            <em className="not-italic text-[var(--color-p-600)]">That Transforms</em>
          </h2>
          <p className="relative z-10 mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            Participants consistently report clarity, direction, and inner stability after completing
            the course journey.
          </p>
          <div className="relative z-10 mt-4 grid gap-3 md:grid-cols-2">
            {feedbackTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-xl border border-white/90 bg-white/62 px-4 py-3 text-sm font-medium text-[var(--color-ink-2)]"
                style={{ boxShadow: "0 4px 18px rgba(107,53,200,0.08)" }}
              >
                {topic}
              </div>
            ))}
            <div
              className="col-span-full rounded-xl border border-[rgba(139,92,246,0.3)] px-4 py-3 text-sm font-medium text-[var(--color-p-800)] md:col-span-2"
              style={{
                background: "linear-gradient(120deg, rgba(139,92,246,0.14), rgba(232,121,249,0.1))",
                boxShadow: "0 6px 18px rgba(107,53,200,0.12)",
              }}
            >
              Understanding your life purpose and experiencing endless happiness through the 4R
              framework.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
