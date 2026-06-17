"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/site-config";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

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
            <div className="mb-14">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                Get in Touch
              </span>
              <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
              <h1 className="font-display text-[clamp(2.4rem,_4.2vw,_3.6rem)] font-bold text-[var(--color-ink)]">
                Let&apos;s Connect
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
                Reach out for guidance, courses, speaking engagements, or collaboration opportunities.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px] md:p-8">
                <h2 className="font-display mb-4 text-xl font-bold text-[var(--color-ink)]">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "subject", label: "Subject", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[rgba(107,53,200,0.15)] bg-white/70 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-p-500)] focus:ring-2 focus:ring-[rgba(139,92,246,0.15)]"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[rgba(107,53,200,0.15)] bg-white/70 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-p-500)] focus:ring-2 focus:ring-[rgba(139,92,246,0.15)]"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px]">
                  <h2 className="font-display mb-4 text-xl font-bold text-[var(--color-ink)]">Contact Info</h2>
                  <div className="space-y-4">
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-p-600)]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      {siteConfig.phone}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-p-600)]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      {siteConfig.email}
                    </a>
                    <p className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>

                <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] p-5 text-sm font-bold text-white no-underline shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Chat on WhatsApp
                </a>

                <div className="glass rounded-2xl border border-white/80 bg-white/48 p-6 backdrop-blur-[22px]">
                  <h2 className="font-display mb-4 text-xl font-bold text-[var(--color-ink)]">Location</h2>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Here Quality Excellence Pvt. Ltd.<br />
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
