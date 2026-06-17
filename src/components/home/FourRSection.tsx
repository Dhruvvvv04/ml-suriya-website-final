"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { fourR } from "@/lib/data/content";

const cardStyles = [
  { glow: "rgba(240,192,64,0.9)", bar: "linear-gradient(90deg, #f0c040, #f5d27a)" },
  { glow: "rgba(139,92,246,0.9)", bar: "linear-gradient(90deg, var(--color-p-400), var(--color-p-300))" },
  { glow: "rgba(240,112,112,0.9)", bar: "linear-gradient(90deg, var(--color-coral), #f5a090)" },
  { glow: "rgba(232,121,249,0.9)", bar: "linear-gradient(90deg, var(--color-rose), #f5a8f8)" },
];

export default function FourRSection() {
  return (
    <section
      id="framework"
      className="relative z-10 overflow-hidden py-28"
      style={{ background: "var(--color-p-900)" }}
    >
      {/* Ambient orbs */}
      {[
        { w: 600, h: 600, t: -150, l: -150, bg: "rgba(107,53,200,0.55)", dur: 18 },
        { w: 450, h: 450, b: -100, r: -100, bg: "rgba(240,192,64,0.40)", dur: 22 },
        { w: 350, h: 350, t: "40%", l: "40%", bg: "rgba(232,121,249,0.30)", dur: 15 },
      ].map(({ w, h, t, b, l, r, bg, dur }, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: w,
            height: h,
            top: t,
            bottom: b,
            left: l,
            right: r,
            background: `radial-gradient(circle, ${bg} 0%, transparent 70%)`,
            filter: "blur(100px)",
            animation: `fwAmb ${dur}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1160px] px-6">
        {/* Header */}
        <div className="mb-14 grid items-end gap-8 md:grid-cols-2">
          <RevealOnScroll>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[rgba(196,181,253,0.8)]">
              The Framework
            </span>
            <div className="my-3 h-[2.5px] w-9 rounded-full bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold leading-[1.12] text-white">
              The{" "}
              <em
                className="not-italic italic font-normal"
                style={{
                  background: "linear-gradient(125deg, var(--color-p-300), var(--color-gold))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4R
              </em>{" "}
              Path
              <br />
              to Fulfilment
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <p className="max-w-[420px] text-base font-light leading-[1.85] text-white/52">
              Through Swadhyaya and Dhyan, these four dimensions of a
              flourishing life become naturally accessible to every sincere
              seeker.
            </p>
          </RevealOnScroll>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fourR.map((card, i) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.05] p-8 backdrop-blur-[18px] transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/[0.18] hover:bg-white/[0.10] hover:shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
            >
              {/* Glow orb */}
              <div
                className="pointer-events-none absolute -right-[30px] -top-[30px] h-[140px] w-[140px] rounded-full opacity-55"
                style={{
                  background: `radial-gradient(circle, ${cardStyles[i].glow} 0%, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />

              {/* Number */}
              <div className="font-display absolute right-5 top-4 text-[4rem] font-black leading-none text-white/[0.08]">
                {card.key}
              </div>

              <div
                className="mb-4 h-0.5 w-7 rounded-full"
                style={{ background: cardStyles[i].bar }}
              />
              <span className="font-display block text-[1.6rem] font-bold leading-none text-white">
                {card.title}
              </span>
              <span className="mt-1 block text-[0.95rem] text-[var(--color-gold)]">
                {card.devanagari}
              </span>
              <p className="mt-4 text-[0.84rem] leading-[1.75] text-white/46">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
