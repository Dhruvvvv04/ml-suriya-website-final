"use client";

import Link from "next/link";
import { useReveal } from "@/lib/hooks/useReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const events = [
  { title: "Daily Dhyan & Swadhyaya Sessions", desc: "Daily virtual meditation and self-study sessions open to all.", status: "Ongoing" },
  { title: "Peaceful Profit Masterclass", desc: "Business and spirituality integration masterclass.", status: "Monthly" },
  { title: "4R Framework Workshop", desc: "Introduction to the 4R path to fulfilment.", status: "Quarterly" },
  { title: "Corporate Wellness Programs", desc: "Spiritual clarity and stress management for organizations.", status: "By Request" },
];

const interviews = [
  { title: "Founder Spotlight", platform: "YouTube", desc: "M.L. Suriya's vision and journey." },
  { title: "Zero Mind Philosophy Talk", platform: "YouTube", desc: "Explaining the Zero Mind framework for quality excellence." },
  { title: "Peaceful Profit Discussion", platform: "YouTube", desc: "How profit meets peace in modern business." },
];

export default function MediaPage() {
  const { ref, isVisible } = useReveal();
  const { ref: ref2, isVisible: vis2 } = useReveal();

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <section className="px-6 pt-36 pb-16">
            <div className="mx-auto max-w-[1160px]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Media</span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.8rem,_5vw,_4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                Events &amp;{" "}
                <em className="not-italic text-[var(--color-p-600)]">Appearances</em>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                Speaking engagements, workshops, and media appearances sharing the message of
                peaceful profit and holistic living.
              </p>
            </div>
          </section>

          <section ref={ref} className={`px-6 pb-20 transition-all duration-700 ${isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"}`}>
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Events</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Speaking &amp;{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Workshops</em>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {events.map((e) => (
                  <div key={e.title} className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] transition-all hover:-translate-y-1">
                    <div className="mb-3 inline-block rounded-full bg-[var(--color-p-200)] px-3 py-1 text-[0.55rem] font-bold uppercase tracking-wider text-[var(--color-p-700)]">{e.status}</div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={ref2} className={`px-6 pb-20 transition-all duration-700 ${vis2 ? "visible opacity-100" : "translate-y-9 opacity-0"}`}>
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Media</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Interviews &amp;{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Features</em>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {interviews.map((i) => (
                  <div key={i.title} className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] transition-all hover:-translate-y-1">
                    <span className="text-[0.55rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">{i.platform}</span>
                    <h3 className="font-display mt-2 text-lg font-bold text-[var(--color-ink)]">{i.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 pb-28">
            <div className="mx-auto max-w-[1160px]">
              <div className="mb-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Gallery</span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2rem,_3.5vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Photo{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Gallery</em>
                </h2>
              </div>
              <Link
                href="/media/gallery"
                className="group relative flex h-64 items-center justify-center overflow-hidden rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, var(--color-p-700), var(--color-p-500))",
                }}
              >
                <span className="font-display text-3xl font-bold text-white/80 transition-all group-hover:scale-110">
                  View Full Gallery →
                </span>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
