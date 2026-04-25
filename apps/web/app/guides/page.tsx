import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../_components/site-header";
import { GUIDE_CATEGORIES, GUIDES } from "@/lib/guides";
import { ArrowRight, Wrench, Beaker, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides — AquaChem",
  description:
    "How-to guides for pool owners: troubleshoot problems, understand chemistry, and keep maintenance routines tight.",
};

const TINT_STYLES: Record<string, { card: string; icon: string; chip: string }> = {
  rose:    { card: "from-rose-50",    icon: "bg-rose-100 text-rose-700",       chip: "bg-rose-100 text-rose-700" },
  sky:     { card: "from-sky-50",     icon: "bg-sky-100 text-sky-700",         chip: "bg-sky-100 text-sky-700" },
  emerald: { card: "from-emerald-50", icon: "bg-emerald-100 text-emerald-700", chip: "bg-emerald-100 text-emerald-700" },
};

const ICONS = {
  troubleshooting: Wrench,
  chemistry: Beaker,
  maintenance: Sparkles,
} as const;

export default function GuidesHubPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader current="guides" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
            Guides
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pool care, written for actual pool owners.
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            Every article pairs with the live AquaChem advisor — see the exact dose,
            not a vague "add some shock."
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {GUIDE_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.slug as keyof typeof ICONS];
            const style = TINT_STYLES[cat.tint];
            const count = GUIDES.filter((g) => g.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/guides/${cat.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className={`h-1.5 bg-gradient-to-r ${style.card} to-transparent`} />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${style.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">{cat.name}</h2>
                    <p className="mt-1 text-sm text-zinc-600">{cat.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 font-medium ${style.chip}`}>
                      {count} {count === 1 ? "guide" : "guides"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted transition group-hover:text-foreground">
                      Browse <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        <footer className="mt-16 text-center text-xs text-muted">
          New guides ship weekly. Want to suggest a topic?
        </footer>
      </main>
    </div>
  );
}
