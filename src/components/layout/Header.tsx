"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/data/site-config";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 py-3 shadow-[0_4px_32px_rgba(107,53,200,0.08)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6">
        <Link href="/" className="group relative flex items-center gap-3 no-underline">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-p-600)] to-[var(--color-p-400)] text-white shadow-[0_4px_16px_rgba(107,53,200,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="font-deva text-[1.4rem] font-bold leading-none" style={{ marginLeft: "1px" }}>ॐ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[1.3rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]">
              M L <em className="not-italic text-[var(--color-p-600)]">Suriya</em>
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Peaceful Profit Monk
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link relative py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                  isActive ? "text-[var(--color-p-600)]" : "text-[var(--color-ink-2)] hover:text-[var(--color-p-500)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Connect
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/80 bg-white/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-5 rounded-full bg-[var(--color-p-700)] transition-colors"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-5 rounded-full bg-[var(--color-p-700)] transition-colors"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-5 rounded-full bg-[var(--color-p-700)] transition-colors"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full border-b border-white/40 bg-white/95 px-6 pb-8 pt-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-xl font-bold text-[var(--color-ink)] transition-colors hover:text-[var(--color-p-600)]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[rgba(139,92,246,0.1)]">
                <Button href="/contact" variant="primary" className="w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                  Connect
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
