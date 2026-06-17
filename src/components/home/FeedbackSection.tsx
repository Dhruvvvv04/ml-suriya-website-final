"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { feedbackTopics, readingPoints } from "@/lib/data/content";

export default function FeedbackSection() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Feedback Topics */}
          <RevealOnScroll direction="right">
            <div className="glass h-full rounded-2xl border border-[rgba(240,192,64,0.3)] p-8 md:p-10">
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                Participant Feedback
              </span>
              <div className="mb-6 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-gold)]" />
              <h3 className="font-display mb-8 text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-tight text-[var(--color-ink)]">
                What we learn in{" "}
                <em className="not-italic text-[var(--color-p-600)]">Swadhyaya</em>
              </h3>

              <ul className="space-y-4">
                {feedbackTopics.map((topic, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-p-200)] to-[var(--color-p-300)] text-[0.6rem] text-[var(--color-p-700)] shadow-sm">
                      ✓
                    </div>
                    <span className="text-[0.95rem] font-medium leading-relaxed text-[var(--color-ink-2)]">
                      {topic}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Right — Reading Focus */}
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="glass h-full rounded-2xl border border-[rgba(139,92,246,0.3)] bg-gradient-to-br from-white/60 to-[rgba(139,92,246,0.05)] p-8 md:p-10">
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                The Fourth R
              </span>
              <div className="mb-6 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h3 className="font-display mb-8 text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-tight text-[var(--color-ink)]">
                The Power of{" "}
                <em className="not-italic text-[var(--color-p-600)]">Reading</em>
              </h3>

              <div className="space-y-5">
                {readingPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + 0.1 * i, duration: 0.5 }}
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-white/80 hover:bg-white/40"
                  >
                    <div className="font-display flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-p-100)] text-lg font-bold text-[var(--color-p-600)] transition-transform group-hover:scale-110">
                      {i + 1}
                    </div>
                    <p className="pt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
