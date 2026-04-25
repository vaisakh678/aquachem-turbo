import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../_components/site-header";
import {
  GUIDE_CATEGORIES,
  getCategory,
  getGuidesInCategory,
} from "@/lib/guides";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return GUIDE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Guides — AquaChem" };
  return {
    title: `${cat.name} — AquaChem Guides`,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const guides = getGuidesInCategory(category);

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader current="guides" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <Breadcrumbs trail={[{ href: "/guides", label: "Guides" }, { label: cat.name }]} />

        <header className="mt-4 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{cat.name}</h1>
          <p className="mt-3 text-base text-zinc-600">{cat.description}</p>
        </header>

        {guides.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted">
            More guides in this category coming soon.
          </div>
        ) : (
          <section className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${cat.slug}/${g.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-soft to-zinc-100" />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h2 className="text-base font-semibold tracking-tight leading-snug">
                    {g.title}
                  </h2>
                  <p className="text-sm text-zinc-600 line-clamp-3">{g.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {g.readingMinutes} min read
                    </span>
                    <span className="inline-flex items-center gap-1 transition group-hover:text-foreground">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

function Breadcrumbs({
  trail,
}: {
  trail: Array<{ href?: string; label: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1">
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {i < trail.length - 1 && <ChevronRight className="h-3 w-3" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
