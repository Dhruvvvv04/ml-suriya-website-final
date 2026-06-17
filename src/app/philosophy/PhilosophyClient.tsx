"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { philosophyQuotes, philosophyValues, books, fourR } from "@/lib/data/content";

export default function PhilosophyClient() {
  const { ref, isVisible } = useReveal();

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
        <div className="aura-orb aura-orb-3" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <section className="px-6 pt-36 pb-16">
            <div className="mx-auto max-w-[1160px]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                Core Philosophy
              </span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.8rem,_5vw,_4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                Wisdom That{" "}
                <em className="not-italic text-[var(--color-p-600)]">Transforms</em>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                Rooted in ancient Indian philosophy and adapted for modern life — the teachings of
                Samyak-Darshan, the 4R Framework, and Zero Philosophy provide a complete system
                for inner peace and outer success.
              </p>
            </div>
          </section>

          <section ref={ref} className={`px-6 pb-20 transition-all duration-700 ${isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"}`}>
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Ancient Wisdom</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Philosophical <em className="not-italic text-[var(--color-p-600)]">Foundations</em>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {philosophyQuotes.map((q) => (
                  <div key={q.text} className="bq rounded-2xl border border-white/80 bg-white/48 p-8 backdrop-blur-lg transition-all hover:-translate-y-1" style={{ boxShadow: "0 8px 48px rgba(107,53,200,0.1)" }}>
                    <p className="font-deva text-2xl font-semibold leading-relaxed" style={{ color: q.glow }}>{q.text}</p>
                    <p className="mt-3 text-xs italic leading-relaxed text-[var(--color-muted)]">{q.trans}</p>
                    <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-wider text-[var(--color-p-500)]">{q.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Core Values</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Principles of <em className="not-italic text-[var(--color-p-600)]">Peaceful Profit</em>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {philosophyValues.map((v) => (
                  <div key={v.name} className="pillar rounded-xl border-none bg-[rgba(255,255,255,0.48)] p-6 backdrop-blur-lg transition-all hover:translate-x-1.5" style={{ borderLeft: `5px solid ${v.border}`, boxShadow: "0 8px 28px rgba(107,53,200,0.1)" }}>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[var(--color-p-600)]">{v.name}</span>
                    <span className="font-deva mb-2 block text-lg font-semibold text-[var(--color-ink)]">{v.hi}</span>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative z-10 overflow-hidden bg-[var(--color-p-900)] px-6 py-20">
            {[{w:600,h:600,t:-150,l:-150,bg:"rgba(107,53,200,0.55)"},{w:450,h:450,b:-100,r:-100,bg:"rgba(240,192,64,0.40)"},{w:350,h:350,t:"40%",l:"40%",bg:"rgba(232,121,249,0.30)"}].map(({w,h,t,b,l,r,bg},i)=>(
              <div key={i} className="pointer-events-none absolute rounded-full" style={{width:w,height:h,top:t,bottom:b,left:l,right:r,background:`radial-gradient(circle,${bg},transparent 70%)`,filter:"blur(100px)"}}/>
            ))}
            <div className="relative z-10 mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(196,181,253,0.8)]">The 4R Framework</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-white">The Path to <em className="bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-gold)] bg-clip-text not-italic text-transparent">Fulfilment</em></h2>
              </div>
              <div className="grid gap-6 md:grid-cols-4">
                {fourR.map((r, i) => (
                  <div key={r.key} className="fw-card rounded-xl border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-lg transition-all hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)]">
                    <span className="font-display block text-4xl font-bold text-white/60">{r.key}</span>
                    <div className="mb-3 mt-2 h-1 w-10 rounded-full" style={{background: i===0 ? "linear-gradient(90deg,#f0c040,#f5d27a)" : i===1 ? "linear-gradient(90deg,var(--color-p-400),var(--color-p-300))" : i===2 ? "linear-gradient(90deg,var(--color-coral),#f5a090)" : "linear-gradient(90deg,var(--color-rose),#f5a8f8)"}} />
                    <h3 className="font-display text-xl font-bold text-white">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.42)]">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Publications</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">Books &amp; <em className="not-italic text-[var(--color-p-600)]">Writings</em></h2>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.14)] p-8" style={{background:"linear-gradient(145deg,var(--color-p-900) 0%,#20084a 50%,var(--color-p-900) 100%)",boxShadow:"0 14px 42px rgba(24,10,48,0.35)"}}>
                <div className="pointer-events-none absolute -right-[90px] -top-[90px] h-80 w-80 rounded-full" style={{background:"radial-gradient(circle, rgba(240,192,64,0.30) 0%, transparent 70%)",filter:"blur(6px)"}} />
                <div className="relative z-10 grid gap-6 md:grid-cols-2">
                  {books.map((book) => (
                    <div key={book.title} className="rounded-xl p-4 transition-all hover:bg-[rgba(255,255,255,0.05)]">
                      <span className="font-display block text-xl font-bold leading-tight text-white">{book.title}</span>
                      <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[rgba(240,192,64,0.86)]">{book.subtitle}</span>
                      <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.64)]">{book.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
