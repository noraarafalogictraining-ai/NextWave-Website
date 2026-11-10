import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, Briefcase, RadioTower, ConciergeBell, AlertCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ProductMark from "@/components/ProductMark";
import { industries } from "@/lib/industries";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Industries",
  description: "How NextWave solutions support retail, professional services, technology and telecommunications, and hospitality organizations.",
  alternates: { canonical: "/industries" },
};

const icons = { ShoppingBag, Briefcase, RadioTower, ConciergeBell } as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Built for organizations that <span className="text-gradient">run on service.</span></>}
        lead="Every sector faces its own pressures, but the core needs are shared: coordinated operations, a clear view of customers and reliable insight. Here is how NextWave solutions help."
        crumbs={[{ href: "/industries", label: "Industries" }]}
      >
        <nav aria-label="Industries on this page">
          <ul className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <li key={ind.id}>
                <a href={`#${ind.id}`} className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan/50">
                  {ind.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="py-12 sm:py-16">
        {industries.map((ind, idx) => {
          const Icon = icons[ind.icon];
          return (
            <section key={ind.id} id={ind.id} aria-labelledby={`${ind.id}-heading`} className="scroll-mt-24 py-10 sm:py-14">
              <div className="container-x">
                <Reveal className={`grid gap-8 rounded-[2rem] border border-line p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14 ${idx % 2 ? "bg-surface" : "bg-white"}`}>
                  <div>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet text-white">
                      <Icon aria-hidden className="h-7 w-7" />
                    </span>
                    <h2 id={`${ind.id}-heading`} className="mt-6 text-3xl font-semibold text-ink">{ind.name}</h2>
                    <p className="mt-4 text-lg leading-8 text-ink-2">{ind.intro}</p>
                    <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink-3">Common challenges</h3>
                    <ul className="mt-4 space-y-3">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex gap-3 text-ink-2">
                          <AlertCircle aria-hidden className="mt-1 h-4 w-4 shrink-0 text-electric" />
                          <span className="leading-7">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-3">How NextWave helps</h3>
                    <ul className="mt-4 space-y-3">
                      {ind.solutions.map((s) => {
                        const p = getProduct(s.product)!;
                        return (
                          <li key={s.product}>
                            <Link href={`/solutions/${p.slug}`} className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-electric/40 hover:shadow-[0_14px_36px_-22px_rgba(31,107,255,0.45)]">
                              <ProductMark product={p} />
                              <span className="flex-1">
                                <span className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                                  {p.name}
                                  <ArrowRight aria-hidden className="h-4 w-4 text-ink-3 transition group-hover:translate-x-1 group-hover:text-electric" />
                                </span>
                                <span className="mt-1 block text-[0.95rem] leading-7 text-ink-2">{s.how}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand title="Don't see your industry?" lead="NextWave solutions are designed around common business needs. Tell us about your organization and we will explore how we can help." />
    </>
  );
}
