"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categories = ["All", "Events", "Awards", "Conferences", "Community"];

const galleryItems = [
  { category: "Events", title: "Daily Dhyan Session", gradient: "from-[var(--color-p-500)] to-[var(--color-rose)]" },
  { category: "Events", title: "Meditation Workshop", gradient: "from-[var(--color-p-600)] to-[var(--color-p-400)]" },
  { category: "Awards", title: "ZED Master Trainer Recognition", gradient: "from-[var(--color-gold)] to-[#f5d27a]" },
  { category: "Awards", title: "Government Certification", gradient: "from-[var(--color-coral)] to-[#f5a090]" },
  { category: "Conferences", title: "Quality Excellence Summit", gradient: "from-[var(--color-p-700)] to-[var(--color-p-500)]" },
  { category: "Conferences", title: "Spiritual Leadership Talk", gradient: "from-[var(--color-rose)] to-[#f5a8f8]" },
  { category: "Community", title: "Free Community Session", gradient: "from-[#7fdcc8] to-[#4ecdc4]" },
  { category: "Community", title: "Student Reading Program", gradient: "from-[var(--color-p-400)] to-[var(--color-p-200)]" },
  { category: "Events", title: "Peaceful Profit Masterclass", gradient: "from-[#2d1a5a] to-[#4a2d7f]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
      </div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[1160px]">
            <div className="mb-10">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Gallery</span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold leading-tight text-[var(--color-ink)]">
                Moments That{" "}
                <em className="not-italic text-[var(--color-p-600)]">Inspire</em>
              </h1>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--color-p-600)] text-white shadow-lg"
                      : "border border-[rgba(107,53,200,0.2)] bg-white/60 text-[var(--color-muted)] hover:border-[var(--color-p-500)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {filtered.map((item, i) => (
                <button
                  key={`${item.title}-${i}`}
                  onClick={() => setSelectedImage(i)}
                  className="group relative h-56 overflow-hidden rounded-2xl text-left transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`h-full w-full bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent p-5">
                    <span className="text-[0.55rem] font-bold uppercase tracking-wider text-white/70">{item.category}</span>
                    <span className="font-display mt-1 text-lg font-bold text-white">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
