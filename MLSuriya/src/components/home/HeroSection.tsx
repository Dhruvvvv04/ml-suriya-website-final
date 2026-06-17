"use client";

import Button from "@/components/ui/Button";
import { heroContent } from "@/lib/data/content";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-start overflow-hidden pt-[78px]"
      style={{ isolation: "isolate" }}
    >
      <div className="w-full">
        <div
          className="relative z-10 mx-auto grid min-h-[640px] max-w-[1160px] items-stretch px-6"
          style={{
            display: "grid",
            gridTemplateColumns: "1.06fr 0.94fr",
          }}
        >
          <div className="flex flex-col justify-center px-0 py-16 md:px-8 md:py-20">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-p-500)]">
              {heroContent.subtitle}
            </span>
            <h1 className="font-display text-[clamp(2.8rem,_8vw,_5.5rem)] font-bold leading-[0.92] tracking-tight text-[var(--color-ink)]">
              {heroContent.title.split(" ")[0]}{" "}
              <span className="text-[var(--color-p-500)]">
                {heroContent.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={heroContent.ctaHref}>{heroContent.cta}</Button>

              <a
                href={heroContent.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/50 px-4 py-3 text-sm no-underline shadow-[0_4px_24px_rgba(107,53,200,0.09)] backdrop-blur-lg transition-all hover:bg-white/80"
                style={{ border: "1px solid rgba(255,255,255,0.8)" }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#cc0000] to-[#ff4444] shadow-[0_3px_12px_rgba(255,68,68,0.45)]">
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
                  <span className="block text-xs font-semibold text-[var(--color-ink)]">
                    {heroContent.youtubeLabel}
                  </span>
                  <span className="mt-[0.08rem] block text-[0.6rem] text-[var(--color-muted)]">
                    {heroContent.youtubeChannel}
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2.5">
              {[
                ["v", "ZED Master Trainer", "QCI · Govt. of India Certified"],
                ["c", "Meditation Master Trainer", "Daily Dhyan & Swadhyaya Sessions"],
                ["g", "Managing Director", "Here Quality Excellence · Vadodara"],
                ["r", "Author & Engineer", "Published by Government of India"],
                ["m", "Spiritual Mission · Since 2020", "Vadodara, Gujarat, India"],
                ["v", "30+ Years of Mastery", "Peace, Dharma & Profit Growth"],
              ].map(([color, title, sub], i) => {
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
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/90 bg-white/55 p-3"
                  >
                    <div
                      className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{
                        background: dotColors[color],
                        boxShadow: `0 0 8px ${dotShadows[color]}`,
                      }}
                    />
                    <div>
                      <span className="block text-[0.72rem] font-semibold leading-tight text-[var(--color-ink)]">
                        {title}
                      </span>
                      <span className="mt-[0.1rem] block text-[0.63rem] text-[var(--color-muted)]">
                        {sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div
                className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(107,53,200,0.15)]"
                style={{ animation: "jainRing 10s linear infinite" }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(107,53,200,0.08)]"
                style={{ animation: "jainRing 16s linear infinite reverse" }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(240,192,64,0.06)]"
                style={{ animation: "jainRing 24s linear infinite" }}
              />

              <div className="om-animate relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-[rgba(232,121,249,0.1)] backdrop-blur-xl">
                <span className="font-deva text-6xl">ॐ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
