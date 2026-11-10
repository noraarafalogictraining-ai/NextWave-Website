import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductMark from "@/components/ProductMark";
import CtaBand from "@/components/CtaBand";
import { articles, getArticle } from "@/lib/articles";
import { getProduct } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const idx = articles.findIndex((a) => a.slug === slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.excerpt}
        crumbs={[
          { href: "/insights", label: "Insights" },
          { href: `/insights/${article.slug}`, label: article.category },
        ]}
      >
        <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-mist">
          <span>By {article.author}</span>
          <span className="inline-flex items-center gap-1.5"><Clock aria-hidden className="h-4 w-4" /> {article.readingMinutes} min read</span>
        </p>
      </PageHero>

      <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <article className="prose-nw mx-auto w-full max-w-[70ch] lg:mx-0">
          {article.body.map((b, i) => {
            switch (b.type) {
              case "h2":
                return <h2 key={i}>{b.text}</h2>;
              case "ul":
                return (
                  <ul key={i}>
                    {b.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                );
              case "callout":
                return (
                  <aside key={i} className="my-9 rounded-2xl border-l-4 border-electric bg-surface px-6 py-5 font-display text-xl font-semibold leading-snug text-ink">
                    {b.text}
                  </aside>
                );
              default:
                return <p key={i}>{b.text}</p>;
            }
          })}
          <p className="!mt-10 border-t border-line pt-6 !text-sm !leading-6 !text-ink-3">
            This article reflects the perspective of NextWave Digital and is intended as general guidance for business leaders.
          </p>
          <Link href="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline">
            <ArrowLeft aria-hidden className="h-4 w-4" /> All insights
          </Link>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-line p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">Related solutions</h2>
            <ul className="mt-4 space-y-3">
              {article.related.map((s) => {
                const p = getProduct(s)!;
                return (
                  <li key={s}>
                    <Link href={`/solutions/${p.slug}`} className="group flex items-center gap-3 rounded-2xl p-2 transition hover:bg-surface">
                      <ProductMark product={p} />
                      <span>
                        <span className="block font-semibold text-ink group-hover:text-electric">{p.name}</span>
                        <span className="block text-xs text-ink-3">{p.category}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href={`/insights/${next.slug}`} className="group block rounded-3xl bg-navy-900 p-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">Read next</span>
            <span className="mt-2 block font-display text-lg font-semibold leading-snug">{next.title}</span>
            <ArrowRight aria-hidden className="mt-4 h-5 w-5 text-mist transition group-hover:translate-x-1 group-hover:text-cyan" />
          </Link>
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
