import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
  external,
}: ButtonProps) {
  const base = cn(
    "inline-block rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] no-underline transition-all duration-300",
    variant === "primary" &&
      "bg-gradient-to-r from-[var(--color-p-700)] via-[var(--color-p-500)] to-[var(--color-rose)] bg-[length:200%] text-white shadow-[0_6px_24px_rgba(107,53,200,0.42)] hover:bg-[position:100%] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(107,53,200,0.55)]",
    variant === "secondary" &&
      "border border-[rgba(107,53,200,0.28)] bg-white/55 text-[var(--color-p-700)] backdrop-blur-md hover:border-[var(--color-p-500)] hover:bg-white/80 hover:-translate-y-0.5",
    className,
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={base}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
