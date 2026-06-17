"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { youTubeSessions, youTubeTopics } from "@/lib/data/content";

export default function YouTubeSection() {
  const { ref, isVisible } = useReveal();
  const { ref: ref2, isVisible: vis2 } = useReveal();

  return (
    <section
      className="relative overflow-hidden px-6 py-28"
      style={{
        background: "linear-gradient(145deg,var(--color-p-900) 0%,#1a082e 40%,#0f0520 100%)",
      }}
    >
      {[
        { w: 550, h: 550, t: -120, l: -120, bg: "rgba(255,0,0,0.22),rgba(139,92,246,0.25)" },
        { w: 450, h: 450, b: -100, r: -80, bg: "rgba(240,192,64,0.28),rgba(232,121,249,0.15)" },
        { w: 300, h: 300, t: "40%", r: "25%", bg: "rgba(255,80,80,0.18)" },
      ].map(({ w, h, t, b, l, r, bg }, i) => (
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
            background: `radial-gradient(circle, ${bg}, transparent 70%)`,
            filter: "blur(95px)",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1160px]">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
            }`}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,100,100,0.9)]">
              <span className="live-blink mr-2 inline-block h-2 w-2 rounded-full bg-[#ff4444] shadow-[0_0_10px_rgba(255,68,68,0.9)]" />
              Daily Sessions on YouTube
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[#ff4444] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-[1.18] text-white">
              Watch, Learn &amp;
              <br />
              <em className="bg-gradient-to-r from-[#ff6b6b] via-[var(--color-rose)] to-[var(--color-p-300)] bg-clip-text not-italic text-transparent">
                Transform Daily
              </em>
            </h2>
            <p className="mb-8 mt-4 text-sm font-light leading-relaxed text-[rgba(255,255,255,0.55)]">
              Join thousands for{" "}
              <strong className="text-[rgba(255,255,255,0.8)]">
                daily Dhyan &amp; Swadhyaya
              </strong>{" "}
              sessions on YouTube. Free and open to all.
            </p>

            <div className="flex flex-wrap gap-3">
              {youTubeTopics.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] px-4 py-2 text-xs text-[rgba(255,255,255,0.5)] backdrop-blur-md transition-colors hover:border-[rgba(255,255,255,0.25)] hover:text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={ref2}
            className={`grid gap-4 transition-all delay-200 duration-700 ${
              vis2 ? "visible opacity-100" : "translate-y-9 opacity-0"
            }`}
          >
            {youTubeSessions.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 backdrop-blur-lg transition-all hover:bg-[rgba(255,255,255,0.08)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.06)] text-xl">
                  {s.icon}
                </span>
                <div>
                  <span className="block text-sm font-semibold text-white">{s.title}</span>
                  <span className="mt-0.5 block text-xs text-[rgba(255,255,255,0.35)]">{s.tag}</span>
                </div>
                <div className="ml-auto">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] text-xs text-white/40 transition-colors hover:border-[#ff4444] hover:text-[#ff4444]">
                    ▶
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
