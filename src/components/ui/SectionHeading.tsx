import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  highlight?: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  pretitle,
  title,
  highlight,
  description,
  light,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {pretitle && (
        <span
          className={cn(
            "mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.3em]",
            light ? "text-white/50" : "text-[var(--color-p-600)]",
          )}
        >
          {pretitle}
        </span>
      )}
      <div
        className={cn(
          "mb-3 h-0.5 w-9 rounded-full",
          light
            ? "bg-gradient-to-r from-white/30 to-white/10"
            : "bg-gradient-to-r from-[var(--color-p-500)] to-[var(--color-rose)]",
        )}
      />
      <h2
        className={cn(
          "font-display text-[clamp(2rem,_4.2vw,_3.6rem)] font-bold leading-[1.12] tracking-tight",
          light ? "text-white" : "text-[var(--color-ink)]",
        )}
      >
        {title}{" "}
        {highlight && (
          <em
            className={cn(
              "not-italic",
              light
                ? "bg-gradient-to-r from-[var(--color-p-300)] to-[var(--color-gold)] bg-clip-text text-transparent"
                : "text-[var(--color-p-600)]",
            )}
          >
            {highlight}
          </em>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-sm leading-relaxed",
            light ? "text-white/50" : "text-[var(--color-muted)]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
