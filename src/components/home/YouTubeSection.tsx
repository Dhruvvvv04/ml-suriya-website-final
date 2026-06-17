"use client";

import { motion } from "framer-motion";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll";
import { youTubeSessions, youTubeTopics, heroContent } from "@/lib/data/content";

export default function YouTubeSection() {
  return (
    <section className="relative z-10 overflow-hidden py-28">
      {/* Ambient backgrounds */}
      <div
        className="pointer-events-none absolute -left-[10%] top-[20%] h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left content */}
          <div>
            <RevealOnScroll>
              <div className="mb-8">
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Live Broadcasts
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[#ff0000] to-[var(--color-rose)]" />
                <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold leading-tight text-[var(--color-ink)]">
                  Join the Daily{" "}
                  <em className="not-italic text-[#ff0000]">Live Sessions</em>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                  Start your day with profound clarity. Join the global community for daily 
                  Dhyan (Meditation) and Swadhyaya (Self-study) sessions.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerContainer className="mb-10 grid grid-cols-2 gap-4">
              {youTubeSessions.map((session, i) => (
                <StaggerItem key={i}>
                  <div className="flex h-full flex-col justify-center rounded-xl border border-[rgba(139,92,246,0.15)] bg-white/40 p-4 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[var(--color-p-300)] hover:bg-white/60 hover:shadow-md">
                    <span className="mb-2 block text-2xl">{session.icon}</span>
                    <span className="font-display block text-[1.05rem] font-bold leading-tight text-[var(--color-ink)]">
                      {session.title}
                    </span>
                    <span className="mt-1 block text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)]">
                      {session.tag}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <RevealOnScroll delay={0.2}>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={heroContent.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full bg-[#ff0000] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,0,0,0.4)]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Subscribe to Channel
                </a>
                <span className="text-[0.75rem] font-medium text-[var(--color-muted)]">
                  Free & Open to All
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — Interactive UI */}
          <RevealOnScroll direction="left" delay={0.2} className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            {/* Background elements */}
            <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-gradient-to-br from-[#ff0000]/10 to-transparent opacity-50 blur-2xl" />
            
            <div className="glass relative z-10 overflow-hidden rounded-[2rem] border border-white/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              {/* Video placeholder */}
              <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-[1.5rem] bg-zinc-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600181516264-3ea807feea33?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="play-pulse absolute h-16 w-16 rounded-full" />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Live Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <div className="live-blink h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
                  Live Now
                </div>
              </div>

              {/* Channel Info */}
              <div className="mt-4 px-3 pb-2">
                <h4 className="font-display text-lg font-bold text-[var(--color-ink)]">
                  Daily Swadhyaya & Dhyan
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {youTubeTopics.map((topic, i) => (
                    <span 
                      key={i}
                      className="rounded-full border border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.05)] px-2.5 py-1 text-[0.65rem] font-medium text-[var(--color-p-700)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 z-20 flex items-center gap-3 rounded-2xl border border-white/90 bg-white/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl md:-right-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0000]/10 text-xl">
                📺
              </div>
              <div>
                <span className="block text-sm font-bold text-[var(--color-ink)]">1.8k+</span>
                <span className="block text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)]">Sessions</span>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
