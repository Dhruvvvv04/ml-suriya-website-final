"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import { siteConfig } from "@/lib/data/site-config";

export default function ContactSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="relative z-10 px-6 py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1160px] transition-all duration-700 ${
          isVisible ? "visible opacity-100" : "translate-y-9 opacity-0"
        }`}
      >
        <div className="glass relative overflow-hidden rounded-2xl border border-white/80 bg-white/48 p-8 backdrop-blur-[22px] md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
              Get in Touch
            </span>
            <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
            <h2 className="font-display text-[clamp(2rem,_3.8vw,_3.2rem)] font-bold leading-[1.1] text-[var(--color-ink)]">
              Let&apos;s Connect{" "}
              <em className="not-italic text-[var(--color-p-600)]">for Peace &amp; Profit</em>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
              Reach out for guidance, courses, speaking engagements, or collaboration opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-6">
              <a
                href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white no-underline shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
