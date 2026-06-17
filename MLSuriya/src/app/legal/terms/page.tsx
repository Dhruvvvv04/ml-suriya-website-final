import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions of Mishrilal Suriya (Peaceful Profit Monk)",
};

export default function TermsAndConditions() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="aura-orb aura-orb-1" /><div className="aura-orb aura-orb-2" /></div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[760px]">
            <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">Terms and Conditions</h1>
            <p className="mt-2 text-xs text-[var(--color-muted)]">Last updated: January 2025</p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
              <p>By accessing and using the Mishrilal Suriya website, you agree to comply with and be bound by the following terms and conditions.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Use of Content</h2>
              <p>All content on this website, including text, images, videos, and course materials, is for informational and educational purposes only. You may not reproduce, distribute, or republish any content without prior written permission.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Course Registration</h2>
              <p>By registering for any course or program, you agree to provide accurate information and adhere to the specific terms outlined at the time of registration. Fees, if applicable, are non-refundable unless stated otherwise.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Limitation of Liability</h2>
              <p>Mishrilal Suriya shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or participation in any program.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Changes</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Contact</h2>
              <p>For questions regarding these terms, please contact us at <strong>peacefulprofitmonk@gmail.com</strong>.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
