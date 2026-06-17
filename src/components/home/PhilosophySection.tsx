"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { philosophyQuotes, philosophyValues } from "@/lib/data/content";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative z-10 py-28">
      <div className="mx-auto max-w-[1160px] px-6">
        <RevealOnScroll>
          <div className="mb-14">
            <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              Philosophy
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold text-[var(--color-ink)]">
              Inner Technology for{" "}
              <em className="not-italic text-[var(--color-p-600)]">Outer Excellence</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
              Ancient wisdom traditions form the spiritual backbone of all teachings —
              from Jain philosophy to the Bhagavad Gita.
            </p>
          </div>
        </RevealOnScroll>

        {/* Quote cards */}
        <div className="mb-14 grid gap-5 md:grid-cols-3">
          {philosophyQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: q.delay }}
              className="section-dark-alt group relative overflow-hidden rounded-2xl border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full opacity-50 transition-opacity group-hover:opacity-70"
                style={{
                  background: `radial-gradient(circle, ${q.glow} 0%, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />
              <div className="relative z-10">
                <span className="font-deva mb-3 block text-[2rem] font-bold leading-tight text-white/90">
                  {q.text}
                </span>
                <p className="font-display mb-3 text-sm font-normal italic leading-relaxed text-white/50">
                  {q.trans}
                </p>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/30">
                  {q.src}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {philosophyValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] transition-all duration-300 hover:-translate-y-1"
              style={{ borderLeft: `3px solid ${val.border}` }}
            >
              <span className="font-display block text-lg font-bold text-[var(--color-ink)]">
                {val.name}
              </span>
              <span className="mt-1 block text-sm text-[var(--color-p-500)]">
                {val.hi}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {val.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
