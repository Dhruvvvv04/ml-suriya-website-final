"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { credentials } from "@/lib/data/content";

const timeline = [
  { year: "1990s", title: "Engineering Foundation", desc: "Built technical expertise and problem-solving discipline through engineering education." },
  { year: "2000s", title: "Industrial Leadership", desc: "Led operations at Here Quality Excellence, Vadodara — driving manufacturing excellence." },
  { year: "2015", title: "ZED Journey Begins", desc: "Adopted the Zero Defect Zero Effect framework, integrating quality with spiritual principles." },
  { year: "2018", title: "ZED Master Trainer", desc: "Certified by QCI, Government of India as a ZED Master Trainer for quality excellence." },
  { year: "2020", title: "Spiritual Mission Launch", desc: "Began daily Dhyan & Swadhyaya sessions, open to all — Peaceful Profit Monk was born." },
  { year: "2023", title: "Published Author", desc: "Authored 'Zero Mind · Zero Waste · Zero Defect · Zero Effect' for the Government of India." },
  { year: "2024", title: "Meditation Master Trainer", desc: "Recognized as a Meditation Master Trainer, guiding thousands in daily practice." },
];

const values = [
  { title: "Holistic Vision", desc: "Seeing reality as it is — Samyak-Darshan — enables wise, ethical decisions in business and life." },
  { title: "Peaceful Profit", desc: "Profit and peace are not opposites. The 4R framework proves you can have both." },
  { title: "Inner Technology", desc: "Meditation and self-study (Dhyan & Swadhyaya) are the inner technologies for outer excellence." },
  { title: "Service First", desc: "All sessions are free and open to all. Knowledge shared is knowledge multiplied." },
];

export default function AboutPage() {
  const { ref: bioRef, isVisible: bioVis } = useReveal();
  const { ref: timelineRef, isVisible: timelineVis } = useReveal();
  const { ref: valuesRef, isVisible: valuesVis } = useReveal();

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
          <section className="px-6 pt-36 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                About
              </span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.8rem,_5vw,_4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                M L Suriya
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                A rare combination of engineer, entrepreneur, spiritual guide, and
                Government-certified ZED Master Trainer. He brings together ancient wisdom, modern
                management, and inner technology to help people grow their business and deepen their
                peace.
              </p>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <div
                ref={bioRef}
                className={`grid items-start gap-12 transition-all duration-700 md:grid-cols-2 ${
                  bioVis ? "visible opacity-100" : "translate-y-9 opacity-0"
                }`}
              >
                <div className="relative mx-auto h-80 w-80 md:h-[500px] md:w-[500px]">
                  <div className="h-full w-full rounded-[44%_56%_62%_38%/42%_46%_54%_58%] bg-gradient-to-br from-[var(--color-p-200)] to-[var(--color-p-400)] transition-all"
                    style={{ animation: "aboutBgShape 12s ease-in-out infinite alternate" }}
                  />
                  <div className="absolute inset-0 rounded-full border border-[rgba(107,53,200,0.12)]"
                    style={{ animation: "aboutRing 18s linear infinite" }}
                  />
                  <div className="absolute inset-8 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-2xl">
                    <span className="font-display text-8xl font-bold text-[var(--color-p-500)]">MLS</span>
                  </div>
                </div>
                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Biography
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Engineer. Entrepreneur.{" "}
                    <em className="not-italic text-[var(--color-p-600)]">Spiritual Guide.</em>
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
                    <p>
                      M L Suriya is the Managing Director of Here Quality Excellence Pvt. Ltd. in
                      Vadodara, Gujarat. With over 30 years of experience in industrial management,
                      he is a certified ZED Master Trainer by the Quality Council of India and a
                      recognized Meditation Master Trainer.
                    </p>
                    <p>
                      His unique approach — the 4R Framework (Rupees, Respect, Relation, Rest) —
                      bridges the gap between material success and spiritual well-being. He
                      conducts daily virtual Dhyan (meditation) and Swadhyaya (self-study) sessions
                      that are free and open to everyone.
                    </p>
                    <p>
                      He has authored books for the Government of India, including{" "}
                      <strong className="text-[var(--color-ink)]">
                        &ldquo;Zero Mind · Zero Waste · Zero Defect · Zero Effect&rdquo;
                      </strong>
                      , linking ancient Indian spiritual wisdom with modern quality excellence.
                    </p>
                    <p>
                      His mission is to help people realize that profit and peace are not
                      contradictory — they are complementary. Through the Peaceful Profit Monk
                      philosophy, he guides individuals and organizations toward holistic success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Credentials
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Certifications &amp;{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Recognition</em>
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="flex items-start gap-4 rounded-xl border border-white/90 bg-white/55 p-5 backdrop-blur-lg transition-all hover:-translate-y-0.5 hover:bg-white/80"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.1)] text-xl">
                      {cred.emoji}
                    </span>
                    <div>
                      <span className="block text-sm font-bold text-[var(--color-ink)]">
                        {cred.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-[var(--color-muted)]">
                        {cred.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <div
                ref={timelineRef}
                className={`mb-10 transition-all duration-700 ${
                  timelineVis ? "visible opacity-100" : "translate-y-9 opacity-0"
                }`}
              >
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Journey
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Professional{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Timeline</em>
                </h2>
              </div>
              <div className="relative">
                <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-[var(--color-p-500)] via-[var(--color-rose)] to-transparent" />
                <div className="space-y-8">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative flex gap-6 pl-12">
                      <div className="absolute left-[12px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-p-500)] bg-[var(--color-bg)]" />
                      <div className="flex-1">
                        <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">
                          {item.year}
                        </span>
                        <h3 className="mt-0.5 font-display text-xl font-bold text-[var(--color-ink)]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 pb-28">
            <div className="mx-auto max-w-[1160px]">
              <div
                ref={valuesRef}
                className={`mb-10 transition-all duration-700 ${
                  valuesVis ? "visible opacity-100" : "translate-y-9 opacity-0"
                }`}
              >
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Guiding Principles
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Vision, Mission &amp;{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Values</em>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="pillar rounded-xl border-none bg-[rgba(255,255,255,0.48)] p-6 backdrop-blur-lg transition-all hover:translate-x-1.5 hover:bg-[rgba(255,255,255,0.7)]"
                    style={{
                      borderLeft: "5px solid var(--color-p-500)",
                      boxShadow: "0 8px 28px rgba(107,53,200,0.1)",
                    }}
                  >
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[var(--color-p-600)]">
                      {v.title}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
