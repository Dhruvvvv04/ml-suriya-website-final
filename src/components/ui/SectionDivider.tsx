import { cn } from "@/lib/utils/cn";

interface SectionDividerProps {
  className?: string;
  variant?: "default" | "subtle" | "bold";
}

export default function SectionDivider({
  className,
  variant = "default",
}: SectionDividerProps) {
  const variants = {
    default:
      "bg-gradient-to-r from-transparent via-[var(--color-p-400)] to-transparent opacity-35",
    subtle:
      "bg-gradient-to-r from-transparent via-[var(--color-p-300)] to-transparent opacity-20",
    bold:
      "bg-gradient-to-r from-transparent via-[var(--color-p-500)] via-[var(--color-rose)] to-transparent opacity-40",
  };

  return (
    <div
      className={cn("relative z-10 h-px", variants[variant], className)}
    />
  );
}
