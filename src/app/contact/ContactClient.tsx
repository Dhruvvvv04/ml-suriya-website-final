"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import FAQSection from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/data/site-config";

const contactFaqs = [
  { question: "How can I book Mishrilal Suriya for a speaking event?", answer: "You can book Mishrilal Suriya by filling out the contact form on this page or directly messaging via WhatsApp." },
  { question: "Are consulting services available for MSMEs?", answer: "Yes, consulting services are available, particularly regarding the Zero Defect Zero Effect (ZED) framework." },
  { question: "How long does it typically take to get a response?", answer: "We aim to respond to all inquiries within 24-48 business hours." },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Failed to submit form. Server response:", errorData);
        alert("Failed to send: " + (errorData.details || errorData.error || "Unknown error"));
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
      alert("An error occurred. Please try again or use WhatsApp.");
    }
  };

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-4" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <section className="px-6 pt-36 pb-16">
            <div className="mx-auto max-w-[1160px]">
              <RevealOnScroll>
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-p-600)]">
                  Contact
                </span>
                <div className="mb-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]" />
                <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-ink)]">
                  Get in <em className="not-italic text-[var(--color-p-600)]">Touch</em>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  Connect for speaking engagements, workshops, and general inquiries.
                </p>
              </RevealOnScroll>
            </div>
          </section>

          <section className="px-6 pb-28">
            <div className="mx-auto max-w-[1160px]">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
                {/* Contact Information */}
                <div>
                  <RevealOnScroll>
                    <div className="mb-10">
                      <h2 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-6">
                        Direct Connections
                      </h2>
                      
                      <div className="space-y-6">
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="group flex items-center gap-4 rounded-xl border border-[rgba(139,92,246,0.15)] bg-white/40 p-4 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[var(--color-p-300)] hover:bg-white/60 hover:shadow-md"
                        >
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-p-100)] to-[var(--color-p-200)] text-[var(--color-p-600)]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-muted)]">Email</span>
                            <span className="text-base font-medium text-[var(--color-ink)]">{siteConfig.email}</span>
                          </div>
                        </a>

                        <a 
                          href={siteConfig.socialLinks.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-4 rounded-xl border border-[rgba(37,211,102,0.15)] bg-white/40 p-4 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#25D366]/40 hover:bg-white/60 hover:shadow-md"
                        >
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/20 text-[#25D366]">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                          </div>
                          <div>
                            <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-muted)]">WhatsApp</span>
                            <span className="text-base font-medium text-[var(--color-ink)]">Chat with us</span>
                          </div>
                        </a>

                        <div className="rounded-xl border border-[rgba(139,92,246,0.15)] bg-white/40 p-6 shadow-sm backdrop-blur-md">
                          <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2">Office Location</h3>
                          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                            Here Quality Excellence Pvt. Ltd.<br />
                            Vadodara, Gujarat<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Form & Map */}
                <div>
                  <RevealOnScroll delay={0.2}>
                    <div className="glass rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(107,53,200,0.08)] md:p-10 mb-8">
                      <h2 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-6">
                        Send a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--color-ink-2)]">Name</label>
                            <input
                              type="text"
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full rounded-xl border border-[rgba(107,53,200,0.15)] bg-white/60 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-p-500)] focus:bg-white focus:ring-2 focus:ring-[var(--color-p-200)]"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--color-ink-2)]">Email</label>
                            <input
                              type="email"
                              id="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full rounded-xl border border-[rgba(107,53,200,0.15)] bg-white/60 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-p-500)] focus:bg-white focus:ring-2 focus:ring-[var(--color-p-200)]"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--color-ink-2)]">Message</label>
                          <textarea
                            id="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full resize-none rounded-xl border border-[rgba(107,53,200,0.15)] bg-white/60 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-p-500)] focus:bg-white focus:ring-2 focus:ring-[var(--color-p-200)]"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={status !== "idle"}
                          className="btn-primary mt-2 w-full text-center disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                          {status === "idle" && "Send Message"}
                          {status === "submitting" && "Sending..."}
                          {status === "success" && "Message Sent ✓"}
                        </button>
                      </form>
                    </div>
                  </RevealOnScroll>
                  
                  {/* Map placeholder */}
                  <RevealOnScroll delay={0.3}>
                    <div className="w-full h-64 bg-[var(--color-p-200)] rounded-[2rem] overflow-hidden relative shadow-[0_20px_60px_rgba(107,53,200,0.08)]">
                      <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Vadodara,Gujarat,India&zoom=12&size=800x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x3d2870&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:landscape|element:geometry|color:0xf7f5fe&style=feature:poi|element:geometry|color:0xddd6fe&style=feature:road|element:geometry|color:0xffffff&style=feature:water|element:geometry|color:0xc4b5fd&key=placeholder')] bg-cover bg-center opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-[var(--color-p-700)] text-sm shadow-lg flex items-center gap-2">
                          <span className="text-xl">📍</span> Vadodara, Gujarat
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <RevealOnScroll>
          <FAQSection 
            title="Questions?" 
            subtitle="Find quick answers to common questions about booking and consulting."
            faqs={contactFaqs} 
          />
        </RevealOnScroll>

        <Footer />
      </div>
    </div>
  );
}
