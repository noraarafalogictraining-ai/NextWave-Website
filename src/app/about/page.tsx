import type { Metadata } from "next";
import { Building2, Compass, Eye, Flag, Layers, MapPin, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FactsGrid from "@/components/FactsGrid";
import ValuesExplorer from "@/components/ValuesExplorer";
import Competencies from "@/components/Competencies";
import { company, customerSectors, products, strategy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "NextWave Digital: a Cairo-based technology company helping organizations manage their operations, customers and data.",
  alternates: { canonical: "/about" },
};

const journey = [
  {
    icon: Flag,
    when: "2017",
    title: "NextWave is founded",
    body: "NextWave Digital is founded in Cairo, Egypt.",
  },
  {
    icon: Layers,
    when: "Today",
    title: "Three connected product lines",
    body: `Approximately 650 people serve mid-sized and large organizations in Egypt and selected MENA markets through ${products.map((p) => p.name).join(", ").replace(/, ([^,]*)$/, " and $1")}.`,
  },
  {
    icon: Rocket,
    when: "2027",
    title: strategy.challenge,
    body: "The 2027 strategy sets out four priorities for the next stage of growth: Grow, Retain, Scale and Build.",
  },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[520px]" aria-hidden>
      <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-cyan/25 via-violet/25 to-azure/20 blur-3xl" />
      <svg viewBox="0 0 500 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ab-l" x1="0" x2="1"><stop offset="0" stopColor="#26D5F5" /><stop offset="1" stopColor="#A995FF" /></linearGradient>
        </defs>
        <circle cx="250" cy="200" r="150" fill="none" stroke="rgba(184,200,226,0.1)" />
        <circle cx="250" cy="200" r="96" fill="none" stroke="rgba(184,200,226,0.08)" strokeDasharray="2 8" />
        {["M250 200 L250 50", "M250 200 L120 275", "M250 200 L380 275"].map((d) => (
          <path key={d} d={d} stroke="url(#ab-l)" strokeWidth="1.8" strokeDasharray="6 9" className="animate-dash" fill="none" />
        ))}
      </svg>
      <div className="glass absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl">
        <Building2 className="h-8 w-8 text-cyan" />
        <span className="mt-2 text-xs font-semibold text-fg">NextWave</span>
      </div>
      {[
        { l: "Operations", c: "text-cyan", pos: "left-1/2 top-[12.5%] -translate-x-1/2 -translate-y-1/2" },
        { l: "Data", c: "text-violet", pos: "left-[24%] top-[69%] -translate-x-1/2 -translate-y-1/2" },
        { l: "Customers", c: "text-azure", pos: "left-[76%] top-[69%] -translate-x-1/2 -translate-y-1/2" },
      ].map((n, i) => (
        <div key={n.l} className={`absolute ${n.pos}`}>
          <div className="glass animate-float rounded-full px-4 py-2 text-sm font-semibold" style={{ animationDelay: `${i * -2.5}s` }}>
            <span className={n.c}>●</span> <span className="text-fg">{n.l}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NextWave"
        title={<>Technology for operations, customers and <span className="text-gradient">data.</span></>}
        lead={`${company.plain} Founded in 2017 and headquartered in Cairo, NextWave serves organizations in Egypt and selected MENA markets.`}
        aside={<HeroVisual />}
      />

      {/* ABOUT */}
      <section className="section bg-base-2" aria-labelledby="about-heading">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading id="about-heading" eyebrow="Who we are" title="A technology partner for growing organizations." />
          </Reveal>
          <Reveal delay={100} className="space-y-6">
            <p className="t-lead">{company.business}</p>
            <div className="surface p-6">
              <p className="t-label text-fg-3">Our customers</p>
              <p className="t-body mt-2">{company.customers}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Customer sectors">
                {customerSectors.map((s) => (
                  <li key={s} className="rounded-full border border-edge bg-fg/[0.04] px-3 py-1.5 text-sm text-fg-2">{s}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3 text-sm text-fg-2">
              <MapPin aria-hidden className="h-4 w-4 text-cyan" /> Headquartered in Cairo, Egypt
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="story-heading" eyebrow="Our story" title="From Cairo to selected MENA markets." />
          </Reveal>
          <ol className="relative mt-16 grid gap-6 lg:grid-cols-3">
            <span aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-cyan/0 via-cyan/50 to-violet/0 lg:block" />
            {journey.map(({ icon: I, when, title, body }, i) => (
              <Reveal as="li" key={when} delay={i * 110} className="relative">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/30 bg-base text-cyan shadow-[0_0_30px_-6px] shadow-cyan/50">
                  <I aria-hidden className="h-6 w-6" />
                </span>
                <div className="surface mt-6 p-7">
                  <p className="font-display text-3xl font-bold text-gradient">{when}</p>
                  <h3 className="t-card mt-3 text-fg">{title}</h3>
                  <p className="t-body mt-2">{body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section bg-base-2" aria-labelledby="glance-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="glance-heading" eyebrow="NextWave at a glance" title="The company in brief." />
          </Reveal>
          <div className="mt-12"><FactsGrid /></div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" aria-label="Mission and vision">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="surface relative h-full overflow-hidden p-9 sm:p-12">
              <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/12 text-cyan"><Compass aria-hidden className="h-6 w-6" /></span>
                <h2 className="t-label mt-8 text-cyan">Our Mission</h2>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug text-fg sm:text-[1.75rem]">{company.mission}</p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <article className="relative h-full overflow-hidden rounded-[var(--radius-card)] border border-violet/30 bg-gradient-to-br from-[#2a2170] via-raised to-base-2 p-9 sm:p-12">
              <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/30 blur-3xl" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet/15 text-violet"><Eye aria-hidden className="h-6 w-6" /></span>
                <h2 className="t-label mt-8 text-violet">Our Vision</h2>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug text-fg sm:text-[1.75rem]">{company.vision}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-base-2" aria-labelledby="values-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="values-heading" eyebrow="Our values" title="What guides how we work." lead="Select a value to see what it means at NextWave." />
          </Reveal>
          <Reveal className="mt-12"><ValuesExplorer /></Reveal>
        </div>
      </section>

      {/* COMPETENCIES */}
      <section className="section" aria-labelledby="comp-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="comp-heading" eyebrow="Our core competencies" title="The capabilities we build in every team." lead="Six core competencies describe how NextWave people work. Open a card to read more." />
          </Reveal>
          <Reveal className="mt-12"><Competencies /></Reveal>
        </div>
      </section>
    </>
  );
}
