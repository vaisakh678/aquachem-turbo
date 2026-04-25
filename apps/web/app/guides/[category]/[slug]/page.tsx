import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../_components/site-header";
import { GUIDES, getCategory, getGuide } from "@/lib/guides";
import { CloudyPoolWaterArticle } from "../../_content/cloudy-pool-water";
import { ChevronRight, Clock, Calendar } from "lucide-react";

const ARTICLE_BODIES: Record<string, () => React.ReactNode> = {
  "cloudy-pool-water": CloudyPoolWaterArticle,
};

export function generateStaticParams() {
  return GUIDES.map((g) => ({ category: g.category, slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const meta = getGuide(category, slug);
  if (!meta) return { title: "Guides — AquaChem" };
  return {
    title: `${meta.title} — AquaChem`,
    description: meta.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const cat = getCategory(category);
  const meta = getGuide(category, slug);
  const Body = ARTICLE_BODIES[slug];
  if (!cat || !meta || !Body) notFound();

  const publishedFmt = new Date(meta.publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader current="guides" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <Breadcrumbs
          trail={[
            { href: "/guides", label: "Guides" },
            { href: `/guides/${cat.slug}`, label: cat.name },
            { label: meta.title },
          ]}
        />

        <header className="mt-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {meta.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {publishedFmt}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {meta.readingMinutes} min read
            </span>
            <Link
              href={`/guides/${cat.slug}`}
              className="rounded-full bg-primary-soft px-2 py-0.5 text-primary"
            >
              {cat.name}
            </Link>
          </div>
        </header>

        <div className="mt-8">
          <Body />
        </div>

        <hr className="my-12 border-border" />

        <RelatedNav currentSlug={slug} categorySlug={cat.slug} />
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
              <span className="line-clamp-1 max-w-[20ch] text-foreground">
                {item.label}
              </span>
            )}
            {i < trail.length - 1 && <ChevronRight className="h-3 w-3 flex-none" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function RelatedNav({
  currentSlug,
  categorySlug,
}: {
  currentSlug: string;
  categorySlug: string;
}) {
  const others = GUIDES.filter(
    (g) => g.category === categorySlug && g.slug !== currentSlug,
  );
  if (others.length === 0) {
    return (
      <div className="text-center text-sm text-muted">
        <Link href={`/guides/${categorySlug}`} className="hover:text-foreground transition">
          ← Back to all guides
        </Link>
      </div>
    );
  }
  return (
    <section>
      <div className="text-xs font-medium uppercase tracking-wider text-muted">
        Read this next
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {others.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${categorySlug}/${g.slug}`}
              className="block rounded-lg border border-border bg-card p-4 transition hover:bg-zinc-50"
            >
              <div className="text-sm font-medium">{g.title}</div>
              <div className="mt-1 text-xs text-muted line-clamp-2">{g.excerpt}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
