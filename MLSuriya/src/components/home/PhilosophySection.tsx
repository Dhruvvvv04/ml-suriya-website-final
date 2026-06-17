"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { philosophyQuotes, philosophyValues, books } from "@/lib/data/content";

export default function PhilosophySection() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="philosophy" className="relative z-10 px-6 py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1160px] transition-all duration-700 ${
          isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
        }`}
      >
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
          Core Philosophy
        </span>
        <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {philosophyQuotes.map((q) => (
            <div
              key={q.text}
              className="bq rounded-2xl border border-white/80 bg-white/48 p-8 backdrop-blur-lg transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(107,53,200,0.14)]"
              style={{ boxShadow: "0 8px 48px rgba(107,53,200,0.1)" }}
            >
              <p className="font-deva text-2xl font-semibold leading-relaxed" style={{ color: q.glow }}>
                {q.text}
              </p>
              <p className="mt-3 text-xs italic leading-relaxed text-[var(--color-muted)]">{q.trans}</p>
              <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-wider text-[var(--color-p-500)]">
                {q.src}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {philosophyValues.map((v) => (
            <div
              key={v.name}
              className="pillar rounded-xl border-none bg-[rgba(255,255,255,0.48)] p-6 backdrop-blur-lg transition-all hover:translate-x-1.5 hover:bg-[rgba(255,255,255,0.7)]"
              style={{
                borderLeft: `5px solid ${v.border}`,
                boxShadow: "0 8px 28px rgba(107,53,200,0.1)",
              }}
            >
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[var(--color-p-600)]">
                {v.name}
              </span>
              <span className="font-deva mb-2 block text-lg font-semibold text-[var(--color-ink)]">
                {v.hi}
              </span>
              <p className="text-xs leading-relaxed text-[var(--color-muted)]">{v.body}</p>
            </div>
          ))}
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.14)] p-6 md:p-8"
          style={{
            background: "linear-gradient(145deg,var(--color-p-900) 0%,#20084a 50%,var(--color-p-900) 100%)",
            boxShadow: "0 14px 42px rgba(24,10,48,0.35)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-[90px] -top-[90px] h-80 w-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(240,192,64,0.30) 0%, transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          <div className="relative z-10">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(196,181,253,0.78)]">
              Books Published
            </span>
            <div className="mb-4 h-0.5 w-9 rounded-full bg-gradient-to-r from-[rgba(196,181,253,0.8)] to-[rgba(240,192,64,0.85)]" />
          </div>
          <div className="relative z-10 grid gap-4 md:grid-cols-2">
            {books.map((book) => (
              <div
                key={book.title}
                className="rounded-xl p-4 transition-all hover:bg-[rgba(255,255,255,0.05)]"
              >
                <span className="font-display block text-lg font-bold leading-tight text-white">
                  {book.title}
                </span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[rgba(240,192,64,0.86)]">
                  {book.subtitle}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-[rgba(255,255,255,0.64)]">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
