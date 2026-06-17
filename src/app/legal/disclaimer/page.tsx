import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer of Mishrilal Suriya (Peaceful Profit Monk)",
};

export default function Disclaimer() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="aura-orb aura-orb-1" /><div className="aura-orb aura-orb-2" /></div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[760px]">
            <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">Disclaimer</h1>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
              <p>The information provided on this website is for general informational and educational purposes only. It is not intended as professional, financial, legal, or medical advice.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Spiritual Guidance</h2>
              <p>The spiritual and philosophical content shared by Mishrilal Suriya is based on personal experience and traditional teachings. Individual results may vary. Participation in any meditation, dhyan, or self-development program is voluntary and at your own discretion.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">External Links</h2>
              <p>This website may contain links to external websites. We do not endorse or assume responsibility for the content or practices of any third-party sites.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">No Guarantees</h2>
              <p>We make no warranties or representations regarding the accuracy, completeness, or reliability of any content on this site. Use of the site and its content is at your own risk.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Contact</h2>
              <p>If you have concerns about any content on this site, please reach out at <strong>peacefulprofitmonk@gmail.com</strong>.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
