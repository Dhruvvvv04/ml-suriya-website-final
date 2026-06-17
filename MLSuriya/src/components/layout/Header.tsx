"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { navigation } from "@/lib/data/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(22,10,46,0.08)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-[var(--color-ink-2)] no-underline"
        >
          M L Suriya
        </Link>

        <ul className="hidden items-center gap-10 md:flex" role="list">
          {navigation.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "nav-link relative text-[1.05rem] font-semibold tracking-wide text-[var(--color-ink-2)] no-underline",
                  pathname === link.href && "after:w-full",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+919427611171"
          className="hidden rounded-full bg-gradient-to-r from-[var(--color-p-700)] to-[var(--color-p-500)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white no-underline shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl md:inline-block"
        >
          Call Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-[var(--color-ink-2)] transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-[var(--color-ink-2)] transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-[var(--color-ink-2)] transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </nav>

      {open && (
        <div className="fixed left-0 right-0 top-16 border-t border-[rgba(22,10,46,0.08)] bg-white/98 shadow-xl md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4" role="list">
            {navigation.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-bold text-[var(--color-ink-2)] no-underline transition-colors hover:bg-[var(--color-p-200)]",
                    pathname === link.href && "text-[var(--color-p-600)]",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="tel:+919427611171"
                className="inline-block rounded-lg bg-gradient-to-r from-[var(--color-p-700)] to-[var(--color-p-500)] px-4 py-2.5 font-bold text-white no-underline"
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
