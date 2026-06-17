"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  { slug: "4r-framework-path-to-peaceful-profit", title: "The 4R Framework: A Path to Peaceful Profit", date: "2025", category: "Framework", content: "The 4R Framework — Rupees (सम्पत्ति), Respect (सम्मान), Relation (सम्बन्ध), and Rest (समाधि) — is a complete system for balancing material success with spiritual well-being. At its core, the framework recognizes that true prosperity isn't just about financial wealth. It's about creating harmony across all dimensions of life. Rupees represents lasting prosperity aligned with dharma and ethical enterprise. Respect is about earning dignity through integrity. Relation focuses on building genuine connections. Rest is the foundation — inner calm that makes everything else possible. When these four elements are in balance, life becomes a journey of peaceful profit." },
  { slug: "samyak-darshan-holistic-vision", title: "Understanding Samyak-Darshan: Holistic Vision for Modern Life", date: "2025", category: "Philosophy", content: "Samyak-Darshan, or Holistic Vision, is the Jain principle of seeing reality as it truly is — without distortion, prejudice, or attachment. In a world of constant noise and competing priorities, this ancient teaching offers a powerful lens for decision-making. When we see clearly, we act wisely. In business, Samyak-Darshan means understanding the full picture before making decisions. In personal life, it means perceiving situations with empathy and wisdom. This is the inner technology that makes all four Rs naturally available." },
  { slug: "zero-mind-foundation-zero-defect", title: "Zero Mind: The Foundation of Zero Defect", date: "2025", category: "Philosophy", content: "The Government of India's Zero Defect Zero Effect (ZED) framework is a quality excellence program. But before external quality can manifest, there must be internal quality. This is where Zero Mind comes in. Zero Mind is the state of mental clarity, free from clutter, bias, and distraction. From this state, Zero Waste (efficiency), Zero Defect (quality), and Zero Effect (sustainability) naturally follow. The ancient rishis understood this — inner purity leads to outer excellence. Zero Mind is the missing link between spirituality and quality." },
  { slug: "dhyan-swadhyaya-daily-practice", title: "Dhyan & Swadhyaya: Daily Practice for Inner Clarity", date: "2025", category: "Practice", content: "Two simple daily practices form the backbone of the Peaceful Profit Monk path: Dhyan (meditation) and Swadhyaya (self-study). Dhyan is the practice of sitting in silence, observing the mind, and connecting with your inner self. Just 15 minutes daily can transform your mental clarity and emotional stability. Swadhyaya is the study of sacred texts and self-reflection. It's about learning from the wisdom of those who came before us while also studying our own patterns and behaviors. Together, these practices build the inner foundation for outer success." },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="aura-orb aura-orb-1" /><div className="aura-orb aura-orb-2" /></div>
        <div className="relative z-10">
          <Header />
          <main className="flex min-h-screen items-center justify-center px-6 pt-20">
            <div className="glass w-full max-w-lg rounded-2xl p-8 text-center">
              <h1 className="font-display text-2xl font-bold text-[var(--color-ink)]">Post Not Found</h1>
              <Link href="/publications/blog" className="mt-4 inline-block font-semibold text-[var(--color-p-600)] no-underline">← Back to Blog</Link>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="aura-orb aura-orb-1" /><div className="aura-orb aura-orb-2" /></div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[760px]">
            <Link href="/publications/blog" className="mb-6 inline-block text-sm font-semibold text-[var(--color-p-600)] no-underline">← Back to Blog</Link>
            <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">{post.category} · {post.date}</span>
            <h1 className="font-display mt-3 text-[clamp(2rem,_4vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">{post.title}</h1>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
              <p>{post.content}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}