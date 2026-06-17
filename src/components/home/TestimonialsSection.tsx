"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { testimonials } from "@/lib/data/content";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              What People Say
            </span>
            <div className="mx-auto mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold text-[var(--color-ink)]">
              Voices of{" "}
              <em className="not-italic text-[var(--color-p-600)]">Transformation</em>
            </h2>
          </div>
        </RevealOnScroll>

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="glass relative min-h-[260px] overflow-hidden rounded-2xl p-8 md:p-12">
            {/* Decorative quote marks */}
            <span
              className="font-display absolute left-6 top-4 text-[6rem] leading-none opacity-[0.08] md:left-10 md:top-6"
              style={{
                background: "linear-gradient(135deg, var(--color-p-400), var(--color-rose))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative z-10"
              >
                <p className="font-display text-xl font-medium leading-relaxed text-[var(--color-ink)] md:text-2xl md:leading-relaxed">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-p-500)] to-[var(--color-rose)] opacity-80" />
                  <div>
                    <span className="block text-sm font-bold text-[var(--color-ink)]">
                      {testimonials[current].name}
                    </span>
                    {testimonials[current].role && (
                      <span className="block text-xs text-[var(--color-muted)]">
                        {testimonials[current].role}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]"
                    : "w-2 bg-[var(--color-p-200)] hover:bg-[var(--color-p-300)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
