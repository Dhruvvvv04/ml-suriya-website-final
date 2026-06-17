"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroContent, credentials } from "@/lib/data/content";

const dotColors: Record<string, string> = {
  v: "var(--color-p-500)",
  c: "var(--color-coral)",
  g: "var(--color-gold)",
  r: "var(--color-rose)",
  m: "#7fdcc8",
};
const dotShadows: Record<string, string> = {
  v: "rgba(139,92,246,0.7)",
  c: "rgba(240,112,112,0.7)",
  g: "rgba(240,192,64,0.7)",
  r: "rgba(232,121,249,0.7)",
  m: "rgba(127,220,200,0.7)",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden pt-[78px]" style={{ isolation: "isolate" }}>
      <div className="w-full">
        <div
          className="relative z-10 grid min-h-[640px] items-stretch"
          style={{
            gridTemplateColumns: "1.06fr 0.94fr",
            background:
              "linear-gradient(112deg, rgba(255,255,255,0.96) 0%, rgba(251,247,255,0.93) 56%, rgba(77,35,145,0.92) 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.75)",
            boxShadow: "0 28px 76px rgba(52,28,96,0.25)",
          }}
        >
          {/* Left content */}
          <motion.div
            className="relative z-20 flex flex-col justify-start px-6 py-8 md:px-12 md:py-14"
            style={{
              background: "linear-gradient(140deg, rgba(255,255,255,0.97), rgba(249,244,255,0.95))",
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Om symbol */}
            <motion.div className="relative mb-5 w-[82px]" variants={itemVariants as any}>
              <div
                className="absolute left-8 top-8 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(240,120,64,0.35)]"
                style={{ animation: "jainRing 10s linear infinite" }}
              />
              <div
                className="absolute left-8 top-8 h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(139,92,246,0.22)]"
                style={{ animation: "jainRing 16s linear infinite reverse" }}
              />
              <div
                className="absolute left-8 top-8 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[rgba(232,121,249,0.14)]"
                style={{ animation: "jainRing 24s linear infinite" }}
              />
              <div className="om-animate relative z-20 flex h-16 w-16 items-center justify-center text-[2.4rem] leading-none">
                <span className="gradient-text-gold">ॐ</span>
              </div>
            </motion.div>

            <motion.span
              className="mb-4 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]"
              variants={itemVariants}
            >
              {heroContent.subtitle}
            </motion.span>

            <motion.h1
              className="font-display text-[clamp(3.5rem,7.5vw,7rem)] font-bold leading-[0.95] tracking-[-0.02em] text-[var(--color-ink)]"
              variants={itemVariants}
            >
              {heroContent.title}
              <span
                className="font-display block text-[clamp(2.8rem,6vw,5.8rem)] italic font-light leading-[1.05]"
                style={{
                  background: "linear-gradient(125deg, var(--color-p-700) 0%, var(--color-p-500) 40%, var(--color-rose) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {heroContent.titleAccent}
              </span>
            </motion.h1>

            <motion.span
              className="mt-3 mb-6 block text-2xl font-medium tracking-[0.04em] text-[var(--color-muted)]"
              variants={itemVariants}
            >
              {heroContent.tagline}
            </motion.span>

            <motion.p
              className="mb-8 max-w-[620px] text-base font-light leading-[1.58] text-[var(--color-ink-2)]"
              variants={itemVariants}
            >
              For over{" "}
              <strong className="font-semibold text-[var(--color-p-600)]">30 years</strong>,
              guiding 300+ organisations to double their profits — through peace, dharma &amp; the
              timeless science of meditation. Govt. of India certified ZED Master Trainer.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mb-8 grid grid-cols-3 gap-3"
              variants={itemVariants}
            >
              {heroContent.stats.map(({ number, label }) => (
                <div
                  key={label}
                  className="rounded-[14px] border border-white/84 bg-white/52 p-4 text-center shadow-[0_4px_20px_rgba(107,53,200,0.08)] backdrop-blur-[18px]"
                >
                  <span className="gradient-text block text-[3rem] font-bold leading-none">
                    {number}
                  </span>
                  <span className="mt-1.5 block text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              <a href={heroContent.ctaHref} className="btn-primary">
                {heroContent.cta}
              </a>
              <a href={heroContent.secondaryHref} className="btn-secondary">
                {heroContent.secondaryCta}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — portrait + overlay */}
          <div className="relative hidden min-h-full items-end overflow-hidden md:flex">
            {/* Gradient overlays */}
            <div
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  "linear-gradient(240deg, rgba(47,20,90,0.18) 2%, rgba(47,20,90,0.62) 72%), linear-gradient(0deg, rgba(36,18,70,0.74) 0%, rgba(36,18,70,0) 42%)",
              }}
            />
            {/* Portrait */}
            <div className="absolute inset-0 z-10 overflow-hidden">
              <Image
                src="/image.png"
                alt="Mishrilal Suriya - Entrepreneur, Author, Thought Leader"
                fill
                priority
                className="photo-float object-cover"
                style={{
                  objectPosition: "52% 16%",
                  filter: "brightness(0.94) contrast(1.08) saturate(1.06)",
                }}
              />
            </div>

            {/* Overlay cards */}
            <motion.div
              className="relative z-30 mx-[5.5%] mb-5 flex w-[89%] flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Credentials grid */}
              <div
                className="glass rounded-[20px] p-5"
                style={{
                  background: "rgba(67,38,120,0.54)",
                  border: "1px solid rgba(255,255,255,0.32)",
                  boxShadow: "0 10px 38px rgba(10,4,22,0.35)",
                }}
              >
                <span className="mb-3.5 block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-p-500)]">
                  Credentials &amp; Expertise
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 rounded-xl border border-white/90 bg-white/55 px-3.5 py-3"
                    >
                      <div
                        className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{
                          background: dotColors[cred.color],
                          boxShadow: `0 0 8px ${dotShadows[cred.color]}`,
                        }}
                      />
                      <div>
                        <span className="block text-[0.72rem] font-semibold leading-tight text-[var(--color-ink)]">
                          {cred.title}
                        </span>
                        <span className="mt-0.5 block text-[0.63rem] text-[var(--color-muted)]">
                          {cred.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* YouTube CTA */}
              <a
                href={heroContent.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/50 px-4 py-3.5 no-underline shadow-[0_4px_24px_rgba(107,53,200,0.09)] backdrop-blur-[18px] transition-all hover:bg-white/70"
              >
                <div className="play-glow flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#cc0000] to-[#ff4444]">
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "7px solid transparent",
                      borderBottom: "7px solid transparent",
                      borderLeft: "12px solid #fff",
                      marginLeft: 3,
                    }}
                  />
                </div>
                <div>
                  <span className="block text-[0.72rem] font-semibold leading-tight text-[var(--color-ink)]">
                    {heroContent.youtubeLabel}
                  </span>
                  <span className="mt-0.5 block text-[0.6rem] text-[var(--color-muted)]">
                    {heroContent.youtubeChannel}
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-1.5 rounded-full border border-[rgba(255,80,80,0.25)] bg-[rgba(255,68,68,0.07)] px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[rgba(255,80,80,0.9)]">
                  <div className="live-blink h-[5px] w-[5px] rounded-full bg-[#ff4444]" />
                  Daily Live
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile credentials — below hero on small screens */}
        <div className="px-4 py-6 md:hidden">
          <div className="grid grid-cols-1 gap-2.5">
            {credentials.slice(0, 4).map((cred, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/90 bg-white/55 p-3"
              >
                <div
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{
                    background: dotColors[cred.color],
                    boxShadow: `0 0 8px ${dotShadows[cred.color]}`,
                  }}
                />
                <div>
                  <span className="block text-[0.72rem] font-semibold leading-tight text-[var(--color-ink)]">
                    {cred.title}
                  </span>
                  <span className="mt-0.5 block text-[0.63rem] text-[var(--color-muted)]">
                    {cred.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
