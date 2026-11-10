import { Layers, LineChart, HeartHandshake, TrendingUp, Eye, Clock, Link2, Compass } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import HeroVisual from "@/components/HeroVisual";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { products } from "@/lib/products";
import { company } from "@/lib/site";

const reasons = [
  {
    icon: Layers,
    title: "Integrated Digital Solutions",
    body: "Operations, customer relationships and analytics designed to work as one connected ecosystem rather than isolated tools.",
  },
  {
    icon: LineChart,
    title: "Practical Business Intelligence",
    body: "Clear dashboards and reports that answer real business questions and support decisions while they still matter.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centered Technology",
    body: "Solutions built around how your teams serve customers, with implementation and support focused on adoption and value.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Business Performance",
    body: "Subscription software and services that grow with your organization, from a single team to the whole enterprise.",
  },
];

const impact = [
  { icon: Eye, title: "Clearer visibility", body: "Leaders see operations, customers and performance in one place, instead of piecing together reports from different teams." },
  { icon: Clock, title: "Faster, better decisions", body: "Timely, trusted information shortens the path from question to action." },
  { icon: Link2, title: "Stronger connections", body: "Commercial, operational and service teams share the same information and work toward the same outcomes." },
  { icon: Compass, title: "Confident growth", body: "Consistent processes and reliable insight help organizations scale without losing control of quality." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden text-white">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div className="container-x relative grid items-center gap-10 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24 lg:pt-24">
          <div className="max-w-2xl">
            <p className="eyebrow-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
              {company.slogan}
            </p>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
              Technology That Moves <span className="text-gradient">Business Forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-mist sm:text-xl">
              Connect your operations, understand your customers, and turn data into smarter business decisions with NextWave Digital.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/solutions">Explore Our Solutions</ButtonLink>
              <ButtonLink href="/about" variant="ghost-dark" arrow={false}>Discover NextWave</ButtonLink>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="py-20 sm:py-28" aria-labelledby="solutions-heading">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              id="solutions-heading"
              eyebrow="Our solutions"
              title="Three solutions. One connected business."
              lead="Each NextWave solution addresses a core part of how organizations run. Together, they connect the whole picture."
            />
            <ButtonLink href="/solutions" variant="outline" className="self-start lg:self-auto">See how they work together</ButtonLink>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NEXTWAVE */}
      <section className="bg-surface py-20 sm:py-28" aria-labelledby="why-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              id="why-heading"
              align="center"
              eyebrow="Why NextWave?"
              title="Technology that fits how your business works."
              lead="We combine practical software with a clear understanding of business operations, so our clients see value in everyday work, not only in project plans."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="group h-full rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(13,21,48,0.25)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric transition group-hover:bg-electric group-hover:text-white">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-ink-2">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="impact-heading">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
        <div aria-hidden className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet/20 blur-3xl" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeading
              dark
              id="impact-heading"
              eyebrow="Our impact"
              title={<>From scattered information to <span className="text-gradient">connected performance.</span></>}
              lead="NextWave supports business performance by connecting the three things every organization depends on: how work gets done, how customers are served and how decisions are made."
            />
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <ol className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Operate", "FlowOps"],
                  ["Engage", "Customer360"],
                  ["Decide", "InsightIQ"],
                ].map(([verb, name], i) => (
                  <li key={verb} className="relative">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-cyan">0{i + 1}</p>
                    <p className="mt-1 font-display text-xl font-semibold">{verb}</p>
                    <p className="text-sm text-mist">with {name}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {impact.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 transition hover:border-cyan/40">
                  <Icon aria-hidden className="h-7 w-7 text-cyan" />
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-mist">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
