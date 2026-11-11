import Link from "next/link";
import { ArrowRight, Layers, LayoutDashboard, LineChart, Plug } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FactsGrid from "@/components/FactsGrid";
import { AppFrame, HeroComposite, ProductScreen } from "@/components/mockups";
import { company, priorities, products, strategy } from "@/lib/content";

const accent = {
  cyan: { text: "text-cyan", ring: "hover:border-cyan/40", dot: "bg-cyan" },
  violet: { text: "text-violet", ring: "hover:border-violet/40", dot: "bg-violet" },
  blue: { text: "text-azure", ring: "hover:border-azure/40", dot: "bg-azure" },
} as const;

const why = [
  {
    icon: Layers,
    title: "Three connected product lines",
    body: "Operations, data and customized technology from one company, designed to work together.",
  },
  {
    icon: LayoutDashboard,
    title: "Operations and customers in one place",
    body: "NextWave One brings customers, daily operations and workflows together, so teams share the same picture.",
  },
  {
    icon: LineChart,
    title: "Data that supports decisions",
    body: "NextWave Insights helps organizations analyze their data, identify trends and make better decisions.",
  },
  {
    icon: Plug,
    title: "Solutions shaped around specific needs",
    body: "NextWave Solutions addresses specific requirements and connects existing systems with NextWave products.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-aurora relative -mt-16 overflow-hidden pt-16 lg:-mt-[76px] lg:pt-[76px]">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <p className="eyebrow animate-rise">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px] shadow-cyan" />
              NextWave Digital
            </p>
            <h1 className="t-hero mt-6 animate-rise [animation-delay:80ms]">
              <span className="block sm:whitespace-nowrap">Smarter Business.</span>
              <span className="text-gradient block sm:whitespace-nowrap">Better Experiences.</span>
            </h1>
            <p className="t-lead mt-7 max-w-xl animate-rise [animation-delay:160ms]">
              {company.plain} Three connected product lines help organizations run their operations, understand their customers and act on their data.
            </p>
            <div className="mt-10 flex flex-col gap-3 animate-rise [animation-delay:240ms] sm:flex-row">
              <ButtonLink href="/solutions">Explore Our Solutions</ButtonLink>
              <ButtonLink href="/about" variant="ghost" arrow={false}>Discover NextWave</ButtonLink>
            </div>
          </div>
          <div className="animate-rise [animation-delay:200ms]">
            <HeroComposite />
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section relative bg-base-2" aria-labelledby="solutions-heading">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              id="solutions-heading"
              eyebrow="Our solutions"
              title="Three product lines. One connected business."
              lead={company.business}
            />
            <ButtonLink href="/solutions" variant="ghost" className="self-start lg:self-auto">View all solutions</ButtonLink>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((p, i) => {
              const a = accent[p.accent];
              return (
                <Reveal key={p.id} delay={i * 90} className="h-full">
                  <Link href={`/solutions#${p.id}`} className={`surface card-hover group flex h-full flex-col overflow-hidden ${a.ring}`}>
                    <div className="relative h-56 overflow-hidden border-b border-edge bg-base/60 p-4">
                      <div className="pointer-events-none w-[122%] origin-top-left scale-[0.82] transition-transform duration-500 group-hover:-translate-y-1 sm:w-[111%] sm:scale-[0.9] lg:w-[128%] lg:scale-[0.78]">
                        <AppFrame title={p.name} active={i} tag={p.sub}>
                          <ProductScreen product={p.id} tab={p.tabs[0].id} />
                        </AppFrame>
                      </div>
                      <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base-2 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className={`t-label ${a.text}`}>{p.sub}</p>
                      <h3 className="t-card mt-2 text-2xl text-fg">{p.name}</h3>
                      <p className="t-body mt-3">{p.body}</p>
                      <p className="mt-4 border-l-2 border-edge-strong pl-3 text-sm leading-6 text-fg-3">{p.value}</p>
                      <span className={`mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold ${a.text}`}>
                        Explore {p.name}
                        <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY NEXTWAVE */}
      <section className="section relative overflow-hidden" aria-labelledby="why-heading">
        <div aria-hidden className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow="Why NextWave?"
              title={<>Technology for the way <span className="text-gradient">businesses actually work.</span></>}
              lead="NextWave helps organizations manage their operations, customers and data more effectively, with technology that improves performance and creates lasting customer value."
            />
            <div className="mt-10 hidden lg:block">
              <AppFrame title="NextWave Insights · Trend monitor" active={3}>
                <ProductScreen product="nextwave-insights" tab="trends" />
              </AppFrame>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {why.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="surface card-hover group h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:bg-cyan group-hover:text-base">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="t-card mt-6 text-fg">{title}</h3>
                  <p className="t-body mt-3">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section relative bg-base-2" aria-labelledby="glance-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="glance-heading" eyebrow="NextWave at a glance" title="A growing technology company, rooted in Cairo." align="center" />
          </Reveal>
          <div className="mt-14">
            <FactsGrid />
          </div>
        </div>
      </section>

      {/* OUR DIRECTION */}
      <section className="section relative overflow-hidden" aria-labelledby="direction-heading">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div className="container-x relative">
          <Reveal className="glass relative overflow-hidden rounded-[var(--radius-panel)] p-8 sm:p-12 lg:p-16">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow"><span aria-hidden className="h-px w-6 bg-cyan/70" />Our direction · {strategy.title}</p>
                <h2 id="direction-heading" className="t-section mt-4">{strategy.challenge}</h2>
                <p className="t-lead mt-5">Four strategic priorities guide how NextWave grows over the coming years.</p>
                <div className="mt-9">
                  <ButtonLink href="/strategy">Explore Our Strategy</ButtonLink>
                </div>
              </div>
              <ol className="grid grid-cols-2 gap-4">
                {priorities.map((p, i) => (
                  <li key={p.key}>
                    <Link href={`/strategy#${p.key.toLowerCase()}`} className="surface card-hover group block h-full p-5 sm:p-6">
                      <span className="t-label text-fg-3">0{i + 1}</span>
                      <span className="mt-2 block font-display text-2xl font-bold tracking-wide sm:text-3xl" style={{ color: p.accent }}>{p.key}</span>
                      <span className="mt-2 block text-sm leading-6 text-fg-2">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
