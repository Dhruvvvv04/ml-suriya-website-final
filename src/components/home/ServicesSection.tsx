"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/lib/data/content";
import { courses } from "@/lib/data/courses";

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-28">
      <div className="mx-auto max-w-[1160px] px-6">
        <RevealOnScroll>
          <div className="mb-14">
            <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              What I Offer
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold text-[var(--color-ink)]">
              Pathways to{" "}
              <em className="not-italic text-[var(--color-p-600)]">Transformation</em>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1.5"
              style={{
                background: "linear-gradient(135deg,#2d1a5a 0%,#4a2d7f 50%,#3d2570 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
            >
              {/* Glow orb */}
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full transition-transform duration-700 group-hover:scale-110"
                style={{
                  background: "radial-gradient(circle, rgba(240,192,64,0.35) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <span className="font-display relative z-10 mb-4 block text-[clamp(2.5rem,6vw,3.8rem)] font-bold leading-none text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                {svc.icon}
              </span>
              <h3 className="font-display relative z-10 mb-3 text-lg font-bold text-[var(--color-gold)]">
                {svc.title}
              </h3>
              <p className="relative z-10 flex-1 text-sm font-light leading-relaxed text-white/60">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Courses Section */}
        <div id="courses">
          <RevealOnScroll>
            <div className="mb-10 text-center">
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                Structured Learning
              </span>
              <div className="mx-auto mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                Choose Your{" "}
                <em className="not-italic text-[var(--color-p-600)]">Path</em>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link
                  href={`/courses/${c.id}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/80 bg-white/48 p-8 backdrop-blur-[22px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(107,53,200,0.12)]"
                >
                  <div className="mb-5 inline-block rounded-full bg-gradient-to-r from-[var(--color-p-600)] to-[var(--color-p-500)] px-3.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(107,53,200,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(240,192,64,0.45)]">
                    {c.level} Level
                  </div>
                  <span className="font-display block text-2xl font-bold text-[var(--color-ink)]">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-[0.8rem] uppercase tracking-wider text-[var(--color-p-500)]">
                    {c.subtitle}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                    {c.focus}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[rgba(107,53,200,0.1)] pt-6">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                      {c.duration}
                    </span>
                    <div className="flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-p-600)] transition-transform duration-300 group-hover:translate-x-1">
                      Explore Course
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
