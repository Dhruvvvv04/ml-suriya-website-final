import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  { slug: "4r-framework-path-to-peaceful-profit", title: "The 4R Framework: A Path to Peaceful Profit", excerpt: "Discover how the 4R framework — Rupees, Respect, Relation, Rest — creates a complete system for balancing material success with spiritual well-being.", date: "2025", category: "Framework" },
  { slug: "samyak-darshan-holistic-vision", title: "Understanding Samyak-Darshan: Holistic Vision for Modern Life", excerpt: "The Jain principle of right perception offers a powerful lens for making wise, ethical decisions in both business and personal life.", date: "2025", category: "Philosophy" },
  { slug: "zero-mind-foundation-zero-defect", title: "Zero Mind: The Foundation of Zero Defect", excerpt: "Before Zero Waste and Zero Defect comes Zero Mind — the inner technology that makes external quality possible.", date: "2025", category: "Philosophy" },
  { slug: "dhyan-swadhyaya-daily-practice", title: "Dhyan & Swadhyaya: Daily Practice for Inner Clarity", excerpt: "The simple daily practices of meditation and self-study that transform your mind, your work, and your relationships.", date: "2025", category: "Practice" },
];

export default function BlogPage() {
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
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Blog</span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold leading-tight text-[var(--color-ink)]">Insights &amp; <em className="not-italic text-[var(--color-p-600)]">Reflections</em></h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/publications/blog/${post.slug}`} className="glass group rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] no-underline transition-all hover:-translate-y-1">
                  <span className="text-[0.55rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">{post.category} · {post.date}</span>
                  <h2 className="font-display mt-2 text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-p-600)]">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-p-500)] group-hover:translate-x-1 transition-all">Read More →</span>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
