"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { achievementCounters } from "@/lib/data/content";

export default function AchievementsCounterSection() {
  return (
    <section className="section-dark relative z-10 overflow-hidden py-24">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -left-[150px] -top-[150px] h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[450px] w-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(240,192,64,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1160px] px-6">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/50">
              Legacy of Excellence
            </span>
            <div className="mx-auto mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-white/30 to-white/10" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold leading-[1.12] text-white">
              Numbers That{" "}
              <em className="not-italic" style={{
                background: "linear-gradient(125deg, var(--color-p-300), var(--color-gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Inspire
              </em>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievementCounters.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-[18px] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1]"
            >
              {/* Glow orb */}
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-40 transition-opacity group-hover:opacity-60"
                style={{
                  background: `radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />

              <span className="relative z-10 mb-4 block text-4xl">{item.emoji}</span>

              <div className="relative z-10 font-display text-5xl font-bold text-white">
                <AnimatedCounter
                  end={item.end}
                  suffix={item.suffix}
                  duration={2.5}
                />
              </div>

              <span className="relative z-10 mt-3 block text-sm font-bold text-white/80">
                {item.label}
              </span>
              <span className="relative z-10 mt-1 block text-xs text-white/40">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
