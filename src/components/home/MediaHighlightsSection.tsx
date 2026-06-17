"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { mediaHighlights } from "@/lib/data/content";

const statusColors: Record<string, string> = {
  Ongoing: "bg-green-100 text-green-800",
  Monthly: "bg-[var(--color-p-200)] text-[var(--color-p-700)]",
  Quarterly: "bg-amber-100 text-amber-800",
  "By Request": "bg-rose-100 text-rose-800",
};

export default function MediaHighlightsSection() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <RevealOnScroll>
          <div className="mb-14">
            <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              Events & Media
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold text-[var(--color-ink)]">
              Speaking &{" "}
              <em className="not-italic text-[var(--color-p-600)]">Engagements</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
              Workshops, sessions, and appearances sharing the message of peaceful
              profit and holistic living.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          {mediaHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_44px_rgba(107,53,200,0.13)]"
            >
              {item.status && (
                <div
                  className={`mb-3 inline-block rounded-full px-3 py-1 text-[0.55rem] font-bold uppercase tracking-wider ${
                    statusColors[item.status] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {item.status}
                </div>
              )}
              <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/media" className="btn-secondary">
            View All Events & Media
          </Link>
        </div>
      </div>
    </section>
  );
}
