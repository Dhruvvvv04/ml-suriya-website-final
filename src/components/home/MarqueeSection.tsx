"use client";

import { marqueeItems } from "@/lib/data/content";

export default function MarqueeSection() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative z-10 overflow-hidden border-b border-t border-[rgba(139,92,246,0.12)] bg-white/30 py-5 backdrop-blur-sm">
      <div className="marquee-anim flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-5">
            <span className="font-display text-[1.3rem] font-bold tracking-[-0.01em] text-[var(--color-p-600)]">
              {item}
            </span>
            <span className="text-[var(--color-p-300)]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
