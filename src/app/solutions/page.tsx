import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProductShowcase from "@/components/ProductShowcase";
import ProductNav from "@/components/ProductNav";
import ButtonLink from "@/components/ButtonLink";
import { AppFrame, ProductScreen } from "@/components/mockups";
import { company, products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Solutions",
  description: "NextWave One, NextWave Insights and NextWave Solutions: technology that helps companies manage their operations, customers and data.",
  alternates: { canonical: "/solutions" },
};

function HeroStack() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] pb-8" aria-hidden>
      <div className="absolute inset-[6%] rounded-full bg-gradient-to-tr from-violet/25 via-azure/20 to-cyan/20 blur-3xl" />
      <div className="relative translate-x-4 opacity-60 sm:translate-x-10">
        <AppFrame title="NextWave Solutions" active={4}>
          <ProductScreen product="nextwave-solutions" tab="workflows" />
        </AppFrame>
      </div>
      <div className="relative -mt-36 -translate-x-2 sm:-mt-44 sm:-translate-x-6">
        <AppFrame title="NextWave Insights · Business analytics" active={3}>
          <ProductScreen product="nextwave-insights" tab="analytics" />
        </AppFrame>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our solutions"
        title={<>Three product lines for <span className="text-gradient">smarter business.</span></>}
        lead={company.business}
        aside={<HeroStack />}
      >
        <a href={`#${products[0].id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-fg">
          Explore the product lines <ArrowDown aria-hidden className="h-4 w-4" />
        </a>
      </PageHero>

      <div className="relative">
        <ProductNav />
        {products.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            aria-labelledby={`${p.id}-heading`}
            className={`scroll-mt-28 overflow-x-clip py-20 sm:py-28 ${i % 2 === 0 ? "" : "bg-base-2"} ${i === 0 ? "-mt-[52px] pt-28 sm:pt-36" : ""}`}
          >
            <div className="container-x">
              <Reveal>
                <ProductShowcase product={p} index={i} reverse={i % 2 === 1} />
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="section" aria-labelledby="connected-heading">
        <div className="container-x">
          <Reveal className="glass relative overflow-hidden rounded-[var(--radius-panel)] p-8 text-center sm:p-14">
            <div aria-hidden className="bg-grid absolute inset-0" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow justify-center"><span aria-hidden className="h-px w-6 bg-cyan/70" />Connected by design</p>
              <h2 id="connected-heading" className="t-section mt-4">Each product line plays its part in our strategy.</h2>
              <p className="t-lead mt-5">
                {products.map((p) => `${p.name}: ${p.role.toLowerCase()}`).join(" · ")}.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/strategy">Explore Our Strategy</ButtonLink>
                <ButtonLink href="/about" variant="ghost" arrow={false}>About NextWave</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
