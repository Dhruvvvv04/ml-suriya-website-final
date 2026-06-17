"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/ui/FAQSection";
import { credentials } from "@/lib/data/content";

const iconBg: Record<string, string> = {
  v: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(196,181,253,0.25))",
  c: "linear-gradient(135deg, rgba(240,192,64,0.18), rgba(240,192,64,0.30))",
  g: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.25))",
  r: "linear-gradient(135deg, rgba(232,121,249,0.15), rgba(232,121,249,0.25))",
  m: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,191,36,0.25))",
};

const aboutFaqs = [
  { question: "Who is Mishrilal Suriya?", answer: "Mishrilal Suriya is a ZED Master Trainer, author, and thought leader who integrates engineering excellence with spiritual management. He is the creator of the 4R Framework and the Peaceful Profit Monk philosophy." },
  { question: "What is the 4R Framework?", answer: "The 4R Framework stands for Rupees, Respect, Relation, and Rest. It is a holistic business philosophy developed by Mishrilal Suriya to help entrepreneurs achieve financial success without sacrificing mental peace or personal relationships." },
  { question: "What does a ZED Master Trainer do?", answer: "As a ZED (Zero Defect Zero Effect) Master Trainer certified by the Quality Council of India, Mishrilal Suriya helps MSMEs implement sustainable and high-quality manufacturing practices that minimize environmental impact while maximizing efficiency." },
];

export default function AboutClient() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="px-6 pt-36 pb-16">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  The Journey
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                  Mishrilal{" "}
                  <em className="not-italic text-[var(--color-p-600)]">Suriya</em>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  A rare combination of engineer, entrepreneur, spiritual guide, and Government-certified ZED Master Trainer. He brings together ancient wisdom, modern management, and inner technology to help people grow their business and deepen their peace.
                </p>
              </RevealOnScroll>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[1160px]">
              <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20 items-start">
                {/* Image Section */}
                <RevealOnScroll direction="right">
                  <div className="md:sticky md:top-[120px]">
                    <div className="relative mb-8 w-full">
                      <div
                        className="absolute -bottom-4 -right-4 left-4 top-4 z-0 rounded-[40px]"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(139,92,246,0.14) 0%, rgba(240,192,64,0.10) 50%, rgba(232,121,249,0.08) 100%)",
                        }}
                      />
                      <Image
                        src="/image.png"
                        alt="Mishrilal Suriya"
                        width={500}
                        height={600}
                        className="relative z-10 w-full rounded-[30px] object-cover"
                        style={{
                          filter: "brightness(1.04) contrast(1.06) saturate(1.1) drop-shadow(0 18px 48px rgba(107,53,200,0.28))",
                        }}
                      />
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Content Section */}
                <div>
                  <RevealOnScroll>
                    <div className="prose prose-lg text-[var(--color-ink-2)] max-w-none space-y-6">
                      <p>
                        <strong>M L Suriya</strong> is a rare combination of engineer, entrepreneur, spiritual guide, and Government-certified ZED Master Trainer. He brings together ancient wisdom, modern management, and inner technology to help people grow their business and deepen their peace.
                      </p>
                      <p>
                        As the Managing Director of Here Quality Excellence Pvt. Ltd. based in Vadodara, he has devoted over three decades to guiding organisations toward excellence through Indian spiritual wisdom. His background as a Mechanical Engineer provides a foundation of precision and logic, which he seamlessly integrates with profound spiritual insights.
                      </p>
                      <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mt-10 mb-4">
                        Bridging Quality and Spirituality
                      </h3>
                      <p>
                        As a ZED Master Trainer certified by the Quality Council of India (Govt. of India) and a Master Trainer in Dhyan, he bridges engineering precision, quality management rigour, and Indian spiritual tradition into one unified practice. This unique approach is encapsulated in his "Zero Philosophy" — Zero Waste, Zero Defect, Zero Effect, driven by Zero Mind.
                      </p>
                      <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mt-10 mb-4">
                        The 4R Framework
                      </h3>
                      <p>
                        He is the creator of the 4R Framework, a practical guide to living a balanced and fulfilling life:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mt-4 text-[var(--color-muted)]">
                        <li><strong>Rupees (सम्पत्ति):</strong> Lasting prosperity aligned with dharma.</li>
                        <li><strong>Respect & Relations (सम्मान और सम्बन्ध):</strong> Harmony and empathy in interpersonal interactions.</li>
                        <li><strong>Rest (समाधि):</strong> Inner calm and recovery amidst responsibilities.</li>
                        <li><strong>Reading (पठन):</strong> Acquiring knowledge that builds clarity before action.</li>
                      </ul>
                      <p className="mt-6">
                        His daily virtual Swadhyaya and Dhyan sessions have been running consistently, offering a space for seekers to learn and practice these principles. Through listening and practice, anyone can access the 4R Framework and transform their approach to both life and business.
                      </p>
                    </div>
                  </RevealOnScroll>

                  <RevealOnScroll delay={0.2} className="mt-16">
                    <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-6">
                      Credentials & Expertise
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {credentials.map((cred, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 rounded-2xl border border-[rgba(139,92,246,0.15)] bg-white/40 p-4 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[var(--color-p-300)] hover:bg-white/60 hover:shadow-md"
                        >
                          <div
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg"
                            style={{ background: iconBg[cred.color] }}
                          >
                            {cred.emoji}
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-[var(--color-ink)]">
                              {cred.title}
                            </span>
                            <span className="block text-xs text-[var(--color-muted)]">
                              {cred.subtitle}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-dark relative z-10 py-24 text-white">
            <div className="mx-auto max-w-[1160px] px-6">
              <RevealOnScroll>
                <div className="mb-14 text-center">
                  <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                    Guiding Principles
                  </span>
                  <div className="mx-auto mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-coral)]" />
                  <h2 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-bold">
                    Mission & <em className="not-italic text-[var(--color-gold)]">Vision</em>
                  </h2>
                </div>
              </RevealOnScroll>
              
              <div className="grid gap-8 md:grid-cols-2">
                <RevealOnScroll delay={0.1}>
                  <div className="glass-dark p-8 rounded-3xl h-full border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-[4rem] opacity-10">👁️</div>
                    <h3 className="font-display text-2xl font-bold mb-4 text-[var(--color-gold)]">Our Vision</h3>
                    <p className="text-white/70 leading-relaxed">
                      To empower individuals and organizations to achieve the highest levels of quality excellence (Zero Defect, Zero Effect) through the integration of ancient spiritual wisdom and modern management practices, ultimately leading to a world where Profit and Peace coexist harmoniously.
                    </p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                  <div className="glass-dark p-8 rounded-3xl h-full border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-[4rem] opacity-10">🎯</div>
                    <h3 className="font-display text-2xl font-bold mb-4 text-[var(--color-gold)]">Our Mission</h3>
                    <p className="text-white/70 leading-relaxed">
                      To provide practical frameworks, rigorous training, and spiritual guidance that enable people to master their inner technology (Zero Mind) and apply it to create sustainable wealth (Rupees), meaningful relationships (Respect), continuous learning (Reading), and profound inner calm (Rest).
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </section>
        </main>

        {/* FAQ Section */}
        <RevealOnScroll>
          <FAQSection 
            title="Frequently Asked Questions" 
            subtitle="Learn more about Mishrilal Suriya and his mission."
            faqs={aboutFaqs} 
          />
        </RevealOnScroll>

        <Footer />
      </div>
    </div>
  );
}
