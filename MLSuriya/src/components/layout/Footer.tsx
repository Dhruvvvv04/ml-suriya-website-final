import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/data/site-config";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[var(--color-p-900)]">
      <div className="mx-auto max-w-[1160px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight text-white/70 no-underline"
            >
              M L Suriya
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              {siteConfig.tagline}
            </p>
            <div className="mt-5">
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/60 no-underline transition-colors hover:bg-white/20"
              >
                <svg width="16" height="12" viewBox="0 0 24 18" fill="currentColor">
                  <path d="M23.5 2.8A3 3 0 0 0 21.2.5C19.4 0 12 0 12 0S4.6 0 2.8.5A3 3 0 0 0 .5 2.8 31.6 31.6 0 0 0 0 9a31.6 31.6 0 0 0 .5 6.2 3 3 0 0 0 2.3 2.3c1.8.5 9.2.5 9.2.5s7.4 0 9.2-.5a3 3 0 0 0 2.3-2.3 31.6 31.6 0 0 0 .5-6.2 31.6 31.6 0 0 0-.5-6.2ZM9.5 12.8V5.2L16 9l-6.5 3.8Z" />
                </svg>
                YouTube Channel
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 no-underline transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
              Resources
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 no-underline transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 no-underline transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-white/40 no-underline transition-colors hover:text-white/70"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/40 no-underline transition-colors hover:text-white/70"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-white/20">
              Here Quality Excellence Pvt. Ltd.
              <br />
              Vadodara, Gujarat, India
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Mishrilal Suriya. All Rights Reserved.
          </p>
          <p className="mt-1 text-[10px] leading-relaxed text-white/10">
            All content, publications, photographs, trademarks, logos, and intellectual property
            displayed on this website are protected under applicable copyright laws. Unauthorized
            reproduction, distribution, or use of any material without written permission is
            prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}
