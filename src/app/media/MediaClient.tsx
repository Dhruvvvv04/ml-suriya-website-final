"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll";
import { mediaHighlights } from "@/lib/data/content";

const statusColors: Record<string, string> = {
  Ongoing: "bg-green-100 text-green-800",
  Monthly: "bg-[var(--color-p-200)] text-[var(--color-p-700)]",
  Quarterly: "bg-amber-100 text-amber-800",
  "By Request": "bg-rose-100 text-rose-800",
};

export default function MediaClient() {
  const events = mediaHighlights.filter(h => h.type === "event" || h.type === "workshop");
  const interviews = mediaHighlights.filter(h => h.type === "interview" || h.type === "appearance");

  // Fallback if no interviews
  const displayInterviews = interviews.length > 0 ? interviews : [
    { title: "Founder Spotlight", platform: "YouTube", desc: "M.L. Suriya's vision and journey." },
    { title: "Zero Mind Philosophy Talk", platform: "YouTube", desc: "Explaining the Zero Mind framework for quality excellence." },
    { title: "Peaceful Profit Discussion", platform: "YouTube", desc: "How profit meets peace in modern business." },
  ];

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
              <RevealOnScroll>
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Media
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                  Events &amp;{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Appearances</em>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  Speaking engagements, workshops, and media appearances sharing the message of
                  peaceful profit and holistic living.
                </p>
              </RevealOnScroll>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <div className="mb-10">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Events
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Speaking &amp;{" "}
                    <em className="not-italic text-[var(--color-p-600)]">Workshops</em>
                  </h2>
                </div>
              </RevealOnScroll>
              
              <StaggerContainer className="grid gap-6 md:grid-cols-2">
                {events.map((e) => (
                  <StaggerItem key={e.title}>
                    <div className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] transition-all hover:-translate-y-1 hover:shadow-md">
                      {e.status && (
                        <div className={`mb-3 inline-block rounded-full px-3 py-1 text-[0.55rem] font-bold uppercase tracking-wider ${statusColors[e.status] || "bg-gray-100 text-gray-800"}`}>
                          {e.status}
                        </div>
                      )}
                      <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{e.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{e.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <div className="mb-10">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Media
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Interviews &amp;{" "}
                    <em className="not-italic text-[var(--color-p-600)]">Features</em>
                  </h2>
                </div>
              </RevealOnScroll>
              
              <StaggerContainer className="grid gap-6 md:grid-cols-3">
                {displayInterviews.map((i: any, index) => (
                  <StaggerItem key={index}>
                    <div className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] transition-all hover:-translate-y-1 hover:shadow-md">
                      <span className="text-[0.55rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">{i.platform || "Media"}</span>
                      <h3 className="font-display mt-2 text-lg font-bold text-[var(--color-ink)]">{i.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{i.desc || i.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="px-6 pb-28">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <div className="mb-10">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Gallery
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Photo{" "}
                    <em className="not-italic text-[var(--color-p-600)]">Gallery</em>
                  </h2>
                </div>
                
                <Link
                  href="/media/gallery"
                  className="group relative flex h-64 items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, var(--color-p-700), var(--color-p-500))",
                    boxShadow: "0 14px 42px rgba(107,53,200,0.2)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                  
                  {/* Gallery icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm mix-blend-overlay">
                    <div className="grid grid-cols-3 gap-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="w-24 h-24 bg-white rounded-lg" />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <span className="font-display text-4xl font-bold text-white mb-2 transition-transform group-hover:-translate-y-1">
                      View Full Gallery
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-widest text-white/70 transition-transform group-hover:translate-y-1">
                      Explore Photos →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
