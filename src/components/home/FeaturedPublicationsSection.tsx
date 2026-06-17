"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { books } from "@/lib/data/content";

export default function FeaturedPublicationsSection() {
  return (
    <section className="relative z-10 overflow-hidden py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <RevealOnScroll>
          <div className="mb-14">
            <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              Published Works
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold text-[var(--color-ink)]">
              Featured{" "}
              <em className="not-italic text-[var(--color-p-600)]">Publications</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
              Published works blending ancient wisdom with modern excellence —
              available for readers seeking clarity and transformation.
            </p>
          </div>
        </RevealOnScroll>

        <div
          className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.14)] p-8 md:p-10"
          style={{
            background: "linear-gradient(145deg, var(--color-p-900) 0%, #20084a 50%, var(--color-p-900) 100%)",
            boxShadow: "0 14px 42px rgba(24,10,48,0.35)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute -right-[90px] -top-[90px] h-80 w-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(240,192,64,0.30) 0%, transparent 70%)",
              filter: "blur(6px)",
            }}
          />

          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            {books.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-xl p-6 transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)]"
              >
                {/* Book visual */}
                <div className="mb-5 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[rgba(240,192,64,0.2)] to-[rgba(139,92,246,0.2)] transition-transform duration-300 group-hover:scale-[1.02]">
                  <span className="font-display px-6 text-center text-xl font-bold leading-tight text-white/80">
                    {book.title}
                  </span>
                </div>

                <span className="font-display block text-xl font-bold leading-tight text-white">
                  {book.title}
                </span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[rgba(240,192,64,0.86)]">
                  {book.subtitle}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.64)]">
                  {book.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 mt-8 text-center">
            <Link
              href="/publications"
              className="btn-secondary inline-block border-white/30 text-white/80 backdrop-blur-none hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              View All Publications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
