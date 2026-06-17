"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { aboutContent, credentials } from "@/lib/data/content";

const iconBg: Record<string, string> = {
  v: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(196,181,253,0.25))",
  c: "linear-gradient(135deg, rgba(240,192,64,0.18), rgba(240,192,64,0.30))",
  g: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.25))",
  r: "linear-gradient(135deg, rgba(232,121,249,0.15), rgba(232,121,249,0.25))",
  m: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,191,36,0.25))",
};

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-28">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          {/* Left — sticky portrait panel */}
          <RevealOnScroll>
            <div className="md:sticky md:top-[90px]">
              <div className="relative mb-8 w-full">
                <div
                  className="photo-bg-shape absolute -bottom-4 -right-4 left-4 top-4 z-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,92,246,0.14) 0%, rgba(240,192,64,0.10) 50%, rgba(232,121,249,0.08) 100%)",
                  }}
                />
                <div
                  className="photo-ring absolute -bottom-3 -left-3 right-3 top-[-12px] z-0"
                  style={{
                    borderRadius: "42% 58% 58% 42% / 48% 42% 58% 52%",
                    border: "1.5px solid rgba(139,92,246,0.22)",
                  }}
                />
                <Image
                  src="/image.png"
                  alt="Mishrilal Suriya - Peaceful Profit Monk"
                  width={500}
                  height={600}
                  className="photo-float relative z-10 w-full"
                  style={{
                    borderRadius: "44% 56% 52% 48% / 46% 44% 56% 54%",
                    filter:
                      "brightness(1.04) contrast(1.06) saturate(1.1) drop-shadow(0 18px 48px rgba(107,53,200,0.28))",
                  }}
                />
                {/* Floating badges */}
                <div className="badge-float-1 absolute right-[-18px] top-[12%] z-30 whitespace-nowrap rounded-full border border-white/95 bg-white/90 px-3.5 py-2 text-[0.72rem] font-semibold text-[var(--color-p-700)] shadow-[0_4px_20px_rgba(107,53,200,0.15)] backdrop-blur-[16px]">
                  ZED Master Trainer
                </div>
                <div className="badge-float-2 absolute bottom-[22%] left-[-16px] z-30 whitespace-nowrap rounded-full border border-white/95 bg-white/90 px-3.5 py-2 text-[0.72rem] font-semibold text-[var(--color-p-600)] shadow-[0_4px_20px_rgba(107,53,200,0.15)] backdrop-blur-[16px]">
                  Dhyan Master
                </div>
                <div className="badge-float-3 absolute bottom-[6%] right-2 z-30 whitespace-nowrap rounded-full border border-white/95 bg-white/90 px-3.5 py-2 text-[0.72rem] font-semibold text-[var(--color-p-800)] shadow-[0_4px_20px_rgba(107,53,200,0.15)] backdrop-blur-[16px]">
                  30+ Years
                </div>
              </div>

              {/* Name + title */}
              <div className="mb-6 text-center">
                <h3 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                  Mishrilal Suriya
                </h3>
                <span className="text-[0.78rem] font-medium uppercase tracking-[0.06em] text-[var(--color-muted)]">
                  Peaceful Profit Monk · ध्यान धन साधक
                </span>
              </div>

              {/* Credential pills */}
              <div className="flex flex-col gap-2">
                {credentials.slice(0, 5).map((cred, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 rounded-[14px] border border-white/90 bg-white/55 px-4 py-3 shadow-[0_2px_12px_rgba(107,53,200,0.06)] backdrop-blur-[14px] transition-all duration-300 hover:translate-x-1.5 hover:bg-white/82 hover:shadow-[0_6px_28px_rgba(107,53,200,0.13)]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] text-base"
                      style={{ background: iconBg[cred.color] }}
                    >
                      {cred.emoji}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[0.80rem] font-semibold leading-tight text-[var(--color-ink-2)]">
                        {cred.title}
                      </span>
                      <span className="text-[0.70rem] font-normal leading-tight text-[var(--color-muted)]">
                        {cred.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — story cards */}
          <div className="flex flex-col gap-6 pt-2">
            <RevealOnScroll>
              <div>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Who I Am
                </span>
                <div className="my-3 h-[2.5px] w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold leading-[1.12] text-[var(--color-ink)]">
                  Engineer.<br />
                  <em className="not-italic italic font-normal text-[var(--color-p-600)]">
                    Meditator.
                  </em>
                  <br />
                  Mentor.
                </h2>
              </div>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={0.1}>
              <div className="glass grid grid-cols-3 gap-3">
                {[
                  ["30+", "Years of Mastery"],
                  ["300+", "Organisations"],
                  ["2×", "Profit Growth"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-[14px] border border-white/88 p-4 text-center">
                    <span className="gradient-text block text-[2rem] font-bold">
                      {n}
                    </span>
                    <span className="mt-0.5 block text-[0.68rem] uppercase tracking-[0.06em] text-[var(--color-muted)]">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Story cards */}
            {aboutContent.storyCards.map((card, i) => (
              <RevealOnScroll key={i} delay={0.1 + i * 0.08}>
                <div className="relative overflow-hidden rounded-[20px] border border-white/88 bg-white/48 p-7 shadow-[0_4px_28px_rgba(107,53,200,0.07)] backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/68 hover:shadow-[0_12px_44px_rgba(107,53,200,0.13)]">
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-gradient-to-b from-[var(--color-p-400)] to-[var(--color-p-600)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="mb-3 block text-[1.4rem]">{card.icon}</span>
                  <div className="font-display mb-2 text-[1.15rem] font-semibold text-[var(--color-ink)]">
                    {card.title}
                  </div>
                  <p className="text-[0.92rem] font-light leading-[1.85] text-[var(--color-ink-2)]">
                    {card.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={0.3}>
              <Link
                href="/about"
                className="btn-secondary mt-2 inline-block self-start"
              >
                Read Full Story →
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
