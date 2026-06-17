"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ctaContent } from "@/lib/data/content";

export default function CTASection() {
  return (
    <section className="section-dark relative z-10 overflow-hidden py-28">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(240,192,64,0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="mb-3 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/50">
            {ctaContent.pretitle}
          </span>
          <div className="mx-auto mb-4 h-0.5 w-9 rounded-full bg-gradient-to-r from-white/30 to-white/10" />

          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-bold leading-[1.1] text-white">
            {ctaContent.title}{" "}
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(125deg, var(--color-p-300), var(--color-gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {ctaContent.highlight}
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/50">
            {ctaContent.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={ctaContent.primaryHref} className="btn-primary">
              {ctaContent.primaryCta}
            </Link>
            <a
              href={ctaContent.secondaryHref}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary border-white/30 text-white/80 backdrop-blur-none hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              {ctaContent.secondaryCta}
            </a>
          </div>

          {/* Hindi quote */}
          <div className="mx-auto mt-12 max-w-md rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-sm">
            <p className="font-deva text-base leading-relaxed text-white/40">
              किसी को भी स्वाध्याय सुनकर जीवन में 4R — सम्पत्ति, सम्मान, सम्बन्ध, समाधि — सुलभ हो जाता है।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
