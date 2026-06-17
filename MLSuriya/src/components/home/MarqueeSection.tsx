"use client";

import { marqueeItems } from "@/lib/data/content";

export default function MarqueeSection() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-r from-[var(--color-p-700)] via-[var(--color-p-600)] to-[var(--color-p-700)] py-3">
      <div
        className="flex gap-12"
        style={{
          animation: "mq 32s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-shrink-0 whitespace-nowrap text-sm font-semibold tracking-wide text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
