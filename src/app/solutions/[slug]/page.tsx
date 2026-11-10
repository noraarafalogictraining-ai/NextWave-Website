import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import ProductScreen from "@/components/ProductScreen";
import ProductMark, { accentClasses } from "@/components/ProductMark";
import CtaBand from "@/components/CtaBand";
import { getProduct, products } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.category}`,
    description: `${p.tagline} ${p.summary}`,
    alternates: { canonical: `/solutions/${p.slug}` },
    openGraph: { title: `${p.name} | NextWave Digital`, description: p.summary },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const a = accentClasses[product.accent];
  const others = products.filter((p) => p.slug !== product.slug);
  const demoHref = `/contact?interest=${product.slug}`;

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={
          <>
            {product.name}
            <span className="mt-3 block text-2xl font-medium text-gradient sm:text-3xl">{product.tagline}</span>
          </>
        }
        lead={product.summary}
        crumbs={[
          { href: "/solutions", label: "Solutions" },
          { href: `/solutions/${product.slug}`, label: product.name },
        ]}
        aside={<ProductScreen slug={product.slug} />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={demoHref}>Request a Demonstration</ButtonLink>
          <ButtonLink href="#features" variant="ghost-dark" arrow={false}>View key features</ButtonLink>
        </div>
      </PageHero>

      {/* OVERVIEW */}
      <section className="py-20 sm:py-24" aria-labelledby="overview-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <ProductMark product={product} size="lg" />
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${a.text}`}>Product overview</p>
                <h2 id="overview-heading" className="mt-1 text-3xl font-semibold text-ink">Why {product.name}</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-8 text-ink-2">
            {product.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 bg-surface py-20 sm:py-24" aria-labelledby="features-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="features-heading" eyebrow="Key features" title={`What ${product.name} does`} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(13,21,48,0.3)]">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${a.soft} ${a.text} font-display text-sm font-bold`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-ink-2">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES + BENEFITS */}
      <section className="py-20 sm:py-24" aria-label="Challenges and benefits">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-line p-8 sm:p-10">
              <p className="eyebrow">Business challenges addressed</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">Problems {product.name} helps solve</h2>
              <ul className="mt-7 space-y-4">
                {product.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-ink-2">
                    <AlertCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-ink-3" />
                    <span className="leading-7">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
              <p className="eyebrow-dark">Business benefits</p>
              <h2 className="mt-3 text-2xl font-semibold">What changes for your business</h2>
              <ul className="mt-7 space-y-5">
                {product.benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span>
                      <span className="block font-semibold">{b.title}</span>
                      <span className="block text-[0.95rem] leading-7 text-mist">{b.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-surface py-20 sm:py-24" aria-labelledby="usecases-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="usecases-heading" eyebrow="Example use cases" title={`How organizations use ${product.name}`} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-white p-7">
                  <Lightbulb aria-hidden className={`h-6 w-6 ${a.text}`} />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{u.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-ink-2">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS WITH */}
      <section className="py-20 sm:py-24" aria-labelledby="related-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="related-heading" eyebrow="Part of the NextWave ecosystem" title={`${product.name} works even better with`} />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 80}>
                <Link href={`/solutions/${o.slug}`} className="card-glow group flex items-center gap-5 p-6">
                  <ProductMark product={o} />
                  <span className="flex-1">
                    <span className="block font-display text-lg font-semibold text-ink">{o.name}</span>
                    <span className="block text-sm text-ink-2">{o.role}</span>
                  </span>
                  <ArrowRight aria-hidden className="h-5 w-5 text-ink-3 transition group-hover:translate-x-1 group-hover:text-electric" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`See ${product.name} in action.`}
        lead={`Request a demonstration and our team will show how ${product.name} could support your organization.`}
        cta="Request a Demonstration"
        href={demoHref}
      />
    </>
  );
}
