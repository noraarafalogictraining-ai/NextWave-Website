import type { Metadata } from "next";
import { ArrowDown, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import HeroVisual from "@/components/HeroVisual";
import CtaBand from "@/components/CtaBand";
import ButtonLink from "@/components/ButtonLink";
import ProductMark, { accentClasses } from "@/components/ProductMark";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Solutions",
  description: "FlowOps, Customer360 and InsightIQ: an integrated digital ecosystem for operations, customer relationships and business intelligence.",
  alternates: { canonical: "/solutions" },
};

const compareRows = [
  { label: "Core question", values: ["How is our work getting done?", "How well do we know our customers?", "What is the data telling us?"] },
  { label: "Primary users", values: ["Operations managers and delivery teams", "Sales, account and service teams", "Leaders, analysts and managers"] },
  { label: "Focus", values: ["Workflows, tasks and execution", "Profiles, interactions and relationships", "Dashboards, analytics and trends"] },
  { label: "Main outcome", values: ["Consistent, visible operations", "Stronger, more consistent relationships", "Faster, better-informed decisions"] },
];

const flow = [
  "Customer360 records customer needs and interactions.",
  "FlowOps turns commitments into coordinated work.",
  "InsightIQ shows how operations and relationships affect performance.",
  "Leaders act on insight — and the cycle improves.",
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>An integrated <span className="text-gradient">digital ecosystem</span> for your business.</>}
        lead="Three solutions that each solve a core business challenge, and work even better together: FlowOps manages business operations, Customer360 connects customer relationships, and InsightIQ turns business information into actionable insights."
        crumbs={[{ href: "/solutions", label: "Solutions" }]}
        aside={<div className="hidden lg:block"><HeroVisual /></div>}
      >
        <a href="#products" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">
          Explore the solutions <ArrowDown aria-hidden className="h-4 w-4" />
        </a>
      </PageHero>

      <section id="products" className="scroll-mt-24 py-20 sm:py-24" aria-label="Products">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW THEY WORK TOGETHER */}
      <section className="bg-surface py-20 sm:py-24" aria-labelledby="together-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="together-heading" eyebrow="How they work together" title="Each solution has a role. Together they cover the whole business." />
          </Reveal>

          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[720px] text-left">
              <caption className="sr-only">Comparison of FlowOps, Customer360 and InsightIQ</caption>
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-48 p-6 text-sm font-semibold text-ink-3"><span className="sr-only">Attribute</span></th>
                  {products.map((p) => (
                    <th key={p.slug} scope="col" className="p-6">
                      <div className="flex items-center gap-3">
                        <ProductMark product={p} />
                        <div>
                          <p className="font-display text-lg font-semibold text-ink">{p.name}</p>
                          <p className={`text-sm font-medium ${accentClasses[p.accent].text}`}>{p.role}</p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.label} className="border-b border-line last:border-0">
                    <th scope="row" className="p-6 align-top text-sm font-semibold text-ink">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className="p-6 align-top text-[0.95rem] leading-7 text-ink-2">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <h3 className="text-2xl font-semibold text-ink">A connected cycle of improvement</h3>
              <p className="mt-3 text-lg leading-8 text-ink-2">
                When customer knowledge, operational execution and business insight are connected, each one strengthens the others.
                Organizations can start with one solution and add the others as their needs develop.
              </p>
              <div className="mt-7"><ButtonLink href="/contact">Talk to our team</ButtonLink></div>
            </Reveal>
            <ol className="space-y-3">
              {flow.map((f, i) => (
                <Reveal as="li" key={f} delay={i * 80} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric text-sm font-semibold text-white">{i + 1}</span>
                  <p className="pt-1 text-ink-2">{f}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading id="services-heading" eyebrow="Subscription software + services" title="More than software." lead="Our solutions are offered on a subscription basis and supported by enterprise technology services, so clients have the help they need to adopt them successfully." />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Solution consultation", "Implementation support", "Onboarding and enablement", "Ongoing customer success", "Configuration to your processes", "Regular value reviews"].map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-2xl bg-surface px-5 py-4 font-medium text-ink">
                  <Check aria-hidden className="h-5 w-5 text-electric" /> {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Find the right combination for your business." cta="Request a Demonstration" />
    </>
  );
}
