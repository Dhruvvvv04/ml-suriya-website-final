import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy of Mishrilal Suriya (Peaceful Profit Monk)",
};

export default function CookiePolicy() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="aura-orb aura-orb-1" /><div className="aura-orb aura-orb-2" /></div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[760px]">
            <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">Cookie Policy</h1>
            <p className="mt-2 text-xs text-[var(--color-muted)]">Last updated: January 2025</p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
              <p>This Cookie Policy explains how Mishrilal Suriya ("we", "our", "us") uses cookies and similar tracking technologies on our website.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us improve your browsing experience by remembering your preferences and understanding how you use our site.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">How We Use Cookies</h2>
              <p>We use essential cookies for the website to function properly. We may also use analytics cookies to understand how visitors interact with our site, helping us improve content and user experience.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Your Choices</h2>
              <p>You can control and manage cookies through your browser settings. Disabling certain cookies may affect the functionality of the website.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Third-Party Cookies</h2>
              <p>We may use third-party services (such as YouTube for embedded videos) that set their own cookies. We do not control these cookies and recommend reviewing the privacy policies of those services.</p>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">Contact</h2>
              <p>If you have questions about our use of cookies, please contact us at <strong>peacefulprofitmonk@gmail.com</strong>.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
