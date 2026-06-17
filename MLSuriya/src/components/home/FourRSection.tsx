"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { fourR } from "@/lib/data/content";

export default function FourRSection() {
  const { ref, isVisible } = useReveal();
  const { ref: ref2, isVisible: vis2 } = useReveal();

  return (
    <section className="relative z-10 overflow-hidden bg-[var(--color-p-900)] px-6 py-28">
      {[{ w: 600, h: 600, t: -150, l: -150, bg: "rgba(107,53,200,0.55)" }, { w: 450, h: 450, b: -100, r: -100, bg: "rgba(240,192,64,0.40)" }, { w: 350, h: 350, t: "40%", l: "40%", bg: "rgba(232,121,249,0.30)" }].map(({ w, h, t, b, l, r, bg }, i) => (
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
            filter: "blur(100px)",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1160px]">
        <div className="mb-14 grid items-end gap-12 md:grid-cols-2">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
            }`}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(196,181,253,0.8)]">
              The Framework
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold leading-[1.12] tracking-tight text-white">
              The{" "}
              <em className="bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-gold)] bg-clip-text not-italic text-transparent">
                4R
              </em>{" "}
              Path
              <br />
              to Fulfilment
            </h2>
          </div>
          <p
            ref={ref2}
            className={`max-w-[420px] text-sm leading-relaxed text-[rgba(255,255,255,0.52)] transition-all delay-150 duration-700 ${
              vis2 ? "visible opacity-100" : "translate-y-9 opacity-0"
            }`}
          >
            A complete framework integrating spiritual insight with practical life management for
            lasting prosperity and peace.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {fourR.map((r, i) => (
            <div
              key={r.key}
              className="fw-card group rounded-xl border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.1)]"
              style={{
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <span className="font-display block text-4xl font-bold text-white/60">
                {r.key}
              </span>
              <div className="mb-3 mt-2 h-1 w-10 rounded-full"
                style={{
                  background: i === 0 ? "linear-gradient(90deg,#f0c040,#f5d27a)" : i === 1 ? "linear-gradient(90deg,var(--color-p-400),var(--color-p-300))" : i === 2 ? "linear-gradient(90deg,var(--color-coral),#f5a090)" : "linear-gradient(90deg,var(--color-rose),#f5a8f8)"
                }}
              />
              <h3 className="font-display text-xl font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[rgba(255,255,255,0.42)]">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
