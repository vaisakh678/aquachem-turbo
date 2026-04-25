import type { Metadata } from "next";
import { LEARN_CONTENT, type LearnCategory, type LearnEntry } from "@repo/learn";
import { SiteHeader } from "../_components/site-header";
import { EffectsOfAdding } from "../_components/effects-of-adding";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn — AquaChem",
  description:
    "Plain-language explanations of the chemicals and concepts behind pool water chemistry.",
};

const TINT_STYLES: Record<string, { chip: string; dot: string; band: string }> = {
  orange: { chip: "bg-orange-50 text-orange-700 ring-orange-200",   dot: "bg-orange-400",   band: "from-orange-50" },
  teal:   { chip: "bg-teal-50 text-teal-700 ring-teal-200",         dot: "bg-teal-400",     band: "from-teal-50" },
  purple: { chip: "bg-purple-50 text-purple-700 ring-purple-200",   dot: "bg-purple-400",   band: "from-purple-50" },
  indigo: { chip: "bg-indigo-50 text-indigo-700 ring-indigo-200",   dot: "bg-indigo-400",   band: "from-indigo-50" },
  brown:  { chip: "bg-amber-50 text-amber-800 ring-amber-200",      dot: "bg-amber-500",    band: "from-amber-50" },
  mint:   { chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",dot: "bg-emerald-400",  band: "from-emerald-50" },
  cyan:   { chip: "bg-cyan-50 text-cyan-700 ring-cyan-200",         dot: "bg-cyan-400",     band: "from-cyan-50" },
  blue:   { chip: "bg-sky-50 text-sky-700 ring-sky-200",            dot: "bg-sky-400",      band: "from-sky-50" },
  gray:   { chip: "bg-zinc-100 text-zinc-700 ring-zinc-200",        dot: "bg-zinc-400",     band: "from-zinc-50" },
  green:  { chip: "bg-green-50 text-green-700 ring-green-200",      dot: "bg-green-400",    band: "from-green-50" },
  yellow: { chip: "bg-yellow-50 text-yellow-800 ring-yellow-200",   dot: "bg-yellow-400",   band: "from-yellow-50" },
  pink:   { chip: "bg-pink-50 text-pink-700 ring-pink-200",         dot: "bg-pink-400",     band: "from-pink-50" },
  red:    { chip: "bg-rose-50 text-rose-700 ring-rose-200",         dot: "bg-rose-400",     band: "from-rose-50" },
};

function tintFor(tint: string) {
  return TINT_STYLES[tint] ?? TINT_STYLES.gray;
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function LearnPage() {
  const categories = LEARN_CONTENT.categories;
  const entryCount = categories.reduce((sum, c) => sum + c.entries.length, 0);

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader current="learn" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
            <BookOpen className="h-3.5 w-3.5" />
            Learn
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pool chemistry, explained plainly.
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            {entryCount} chemicals across {categories.length} categories — what they do,
            when to use them, and how they interact with your water.
          </p>
        </section>

        {/* Category TOC */}
        <nav className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const style = tintFor(cat.tint);
            return (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition hover:-translate-y-0.5 ${style.chip}`}
              >
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${style.dot}`} />
                {cat.name}
                <span className="text-[10px] opacity-60">· {cat.entries.length}</span>
              </a>
            );
          })}
        </nav>

        {/* Category sections */}
        <div className="mt-14 flex flex-col gap-16">
          {categories.map((cat) => (
            <CategorySection key={cat.slug} category={cat} />
          ))}
        </div>

        <footer className="mt-16 text-center text-xs text-muted">
          Reference material only. Always verify dosing with your test kit and product label.
        </footer>
      </main>
    </div>
  );
}

function CategorySection({ category }: { category: LearnCategory }) {
  const style = tintFor(category.tint);
  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${style.dot}`} />
        <h2 className="text-xl font-semibold tracking-tight">{category.name}</h2>
        <span className="text-sm text-muted">
          {category.entries.length} {category.entries.length === 1 ? "entry" : "entries"}
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {category.entries.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} tint={category.tint} />
        ))}
      </div>
    </section>
  );
}

function EntryCard({ entry, tint }: { entry: LearnEntry; tint: string }) {
  const style = tintFor(tint);
  const paragraphs = splitParagraphs(entry.description);
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]">
      <div className={`h-1 bg-gradient-to-r ${style.band} to-transparent`} />
      <div className="flex flex-col gap-4 p-6">
        <header>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight">{entry.name}</h3>
            {entry.chemicalFormula && (
              <span className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-700">
                {entry.chemicalFormula}
              </span>
            )}
          </div>
          {entry.alternativeNames.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {entry.alternativeNames.map((alt) => (
                <span
                  key={alt}
                  className="inline-flex items-center rounded-full border border-border bg-white px-2 py-0.5 text-[11px] text-muted"
                >
                  {alt}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="flex flex-col gap-3 text-sm leading-relaxed text-zinc-700">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {entry.dosingSpec && (
          <EffectsOfAdding chemicalName={entry.name} spec={entry.dosingSpec} />
        )}
      </div>
    </article>
  );
}
