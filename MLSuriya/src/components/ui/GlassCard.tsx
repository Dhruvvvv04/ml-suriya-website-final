import { cn } from "@/lib/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl border border-white/80 bg-white/48 p-6 shadow-[0_8px_48px_rgba(107,53,200,0.1)] backdrop-blur-[22px] saturate-[1.6] transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-[0_12px_44px_rgba(107,53,200,0.13)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
