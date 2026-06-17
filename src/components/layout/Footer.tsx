"use client";

import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/data/site-config";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 overflow-hidden bg-[var(--color-p-900)] pt-20 pb-10 text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-transparent opacity-50 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[rgba(240,192,64,0.1)] to-transparent opacity-40 blur-[100px]" />

      <div className="mx-auto max-w-[1160px] px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3 no-underline">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-p-600)] to-[var(--color-p-400)] text-white shadow-[0_4px_16px_rgba(107,53,200,0.3)] transition-transform duration-300 group-hover:scale-105">
                <span className="font-deva text-[1.5rem] font-bold leading-none" style={{ marginLeft: "1px" }}>ॐ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[1.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                  M L <em className="not-italic text-[var(--color-p-400)]">Suriya</em>
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href={siteConfig.socialLinks.youtube}
                target="_blank" 
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#ff0000] hover:text-white"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a 
                href={siteConfig.socialLinks.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#0077b5] hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={siteConfig.socialLinks.whatsapp}
                target="_blank" 
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/50 mb-2">Explore</span>
              {footerLinks.navigation.slice(0, 5).map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/50 mb-2">Resources</span>
              {footerLinks.resources.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="mt-2" />
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/50 mb-2">Connect</span>
              {footerLinks.navigation.slice(5).map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/50 mb-2">Legal</span>
              {footerLinks.legal.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider variant="subtle" className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} Mishrilal Suriya. All Rights Reserved.</p>
          <p>Made with clarity & peace.</p>
        </div>
      </div>
    </footer>
  );
}
