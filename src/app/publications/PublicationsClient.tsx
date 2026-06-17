"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll";
import { books } from "@/lib/data/content";

export default function PublicationsClient() {
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
              <RevealOnScroll>
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Publications
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                  Books, Articles &amp; <em className="not-italic text-[var(--color-p-600)]">Insights</em>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  Published works blending ancient wisdom with modern excellence.
                </p>
              </RevealOnScroll>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <div className="mb-10">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Books
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Published <em className="not-italic text-[var(--color-p-600)]">Works</em>
                  </h2>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <div
                  className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.14)] p-8"
                  style={{
                    background: "linear-gradient(145deg, var(--color-p-900) 0%, #20084a 50%, var(--color-p-900) 100%)",
                    boxShadow: "0 14px 42px rgba(24,10,48,0.35)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-[90px] -top-[90px] h-80 w-80 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(240,192,64,0.30) 0%, transparent 70%)",
                      filter: "blur(6px)",
                    }}
                  />
                  
                  <StaggerContainer className="relative z-10 grid gap-8 md:grid-cols-2">
                    {books.map((book) => (
                      <StaggerItem key={book.title}>
                        <div className="rounded-xl p-6 transition-all hover:bg-[rgba(255,255,255,0.05)]">
                          <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(240,192,64,0.2)] to-[rgba(139,92,246,0.2)] transition-transform hover:scale-[1.02]">
                            <span className="font-display px-4 text-center text-lg font-bold leading-tight text-white/80">
                              {book.title}
                            </span>
                          </div>
                          <span className="font-display block text-xl font-bold leading-tight text-white">
                            {book.title}
                          </span>
                          <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[rgba(240,192,64,0.86)]">
                            {book.subtitle}
                          </span>
                          <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.64)]">
                            {book.description}
                          </p>
                          <Link
                            href="/publications/books"
                            className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-p-300)] transition-all hover:translate-x-1"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </RevealOnScroll>
            </div>
          </section>

          <section className="px-6 pb-28">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <div className="mb-10">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                    Articles &amp; Blog
                  </span>
                  <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-[var(--color-ink)]">
                    Latest <em className="not-italic text-[var(--color-p-600)]">Insights</em>
                  </h2>
                </div>
                
                <div className="glass rounded-2xl p-8 border border-[rgba(139,92,246,0.15)] bg-white/40 backdrop-blur-md text-center max-w-2xl">
                  <span className="text-[3rem] mb-4 block">✍️</span>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)] mb-6">
                    Articles and blog posts coming soon. Stay connected for insights on the 
                    4R Framework, Zero Philosophy, and the Peaceful Profit Monk journey.
                  </p>
                  <Link href="/publications/blog" className="btn-secondary">
                    Visit Blog Space
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
