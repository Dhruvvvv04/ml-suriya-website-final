import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
      </div>
      <div className="relative z-10 text-center">
        <span className="font-deva text-8xl font-bold text-[var(--color-p-300)]">404</span>
        <h1 className="font-display mt-4 text-3xl font-bold text-[var(--color-ink)]">Page Not Found</h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary mt-8 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
