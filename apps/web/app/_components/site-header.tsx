import Link from "next/link";
import { Droplets } from "lucide-react";
import { UnitSystemToggle } from "./unit-system-toggle";

type Current = "advisor" | "learn" | "guides";

export function SiteHeader({ current }: { current?: Current }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 transition hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
            <Droplets className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-semibold tracking-tight">AquaChem</div>
            <div className="text-xs text-muted">Pool chemistry advisor</div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1 rounded-full border border-border bg-white p-1 text-sm">
            <NavLink href="/" active={current === "advisor"}>
              Advisor
            </NavLink>
            <NavLink href="/guides" active={current === "guides"}>
              Guides
            </NavLink>
            <NavLink href="/learn" active={current === "learn"}>
              Learn
            </NavLink>
          </nav>
          <UnitSystemToggle />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3.5 py-1.5 font-medium transition ${
        active
          ? "bg-primary-soft text-primary"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}
