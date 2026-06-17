import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { books } from "@/lib/data/content";

export default function BooksPage() {
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
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">Books</span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold leading-tight text-[var(--color-ink)]">Published <em className="not-italic text-[var(--color-p-600)]">Works</em></h1>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {books.map((book) => (
                <div key={book.title} className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] md:p-8">
                  <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(240,192,64,0.15)] to-[rgba(139,92,246,0.15)]">
                    <span className="font-display px-6 text-center text-xl font-bold leading-snug text-[var(--color-p-600)]">{book.title}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">{book.title}</h2>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[var(--color-p-500)]">{book.subtitle}</span>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{book.description}</p>
                  <div className="mt-6">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-p-600)]">Key Themes</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Zero Mind", "Quality Excellence", "Spiritual Wisdom", "Inner Technology"].map((t) => (
                        <span key={t} className="rounded-full bg-[var(--color-p-200)] px-3 py-1 text-[0.55rem] font-semibold text-[var(--color-p-700)]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-[var(--color-muted)]">For inquiries about these publications, please <a href="/contact" className="font-semibold text-[var(--color-p-600)]">get in touch</a>.</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
