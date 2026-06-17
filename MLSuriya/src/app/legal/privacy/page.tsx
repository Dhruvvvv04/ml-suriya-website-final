import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Mishrilal Suriya (Peaceful Profit Monk)",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="aura-orb aura-orb-1" /><div className="aura-orb aura-orb-2" /></div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[760px]">
            <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">Privacy Policy</h1>
            <p className="mt-2 text-xs text-[var(--color-muted)]">Last updated: January 2025</p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
              <p>
                Mishrilal Suriya ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you fill out a contact form, subscribe to our newsletter, or register for courses. This may include your name, email address, phone number, and any other information you choose to provide.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide our services, send periodic emails regarding our content and offerings, and improve our website experience.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Data Protection</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Third-Party Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Contact</h2>
              <p>If you have questions about this Privacy Policy, please contact us at <strong>peacefulprofitmonk@gmail.com</strong>.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
