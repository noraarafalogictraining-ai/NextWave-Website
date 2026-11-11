import type { Metadata } from "next";
import { Building2, Globe2, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import StrategyMap from "@/components/StrategyMap";
import StrategyDashboard from "@/components/StrategyDashboard";
import ButtonLink from "@/components/ButtonLink";
import { company, priorities, strategy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Strategy",
  description: "NextWave's 2027 strategy: Scale Without Losing What Made Us Successful. Four priorities: Grow, Retain, Scale and Build.",
  alternates: { canonical: "/strategy" },
};

function HeroBadge() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden>
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-tr from-cyan/25 via-violet/25 to-amber/10 blur-3xl" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        {priorities.map((p, i) => {
          const start = i * 90 + 6;
          const end = start + 78;
          const r = 160;
          const rad = (d: number) => ((d - 90) * Math.PI) / 180;
          const x1 = 200 + r * Math.cos(rad(start)), y1 = 200 + r * Math.sin(rad(start));
          const x2 = 200 + r * Math.cos(rad(end)), y2 = 200 + r * Math.sin(rad(end));
          return <path key={p.key} d={`M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`} stroke={p.accent} strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.9" />;
        })}
        <circle cx="200" cy="200" r="122" fill="none" stroke="rgba(184,200,226,0.1)" strokeDasharray="3 8" />
      </svg>
      {priorities.map((p, i) => {
        const a = ((i * 90 + 45 - 90) * Math.PI) / 180;
        return (
          <span key={p.key} className="absolute -translate-x-1/2 -translate-y-1/2 font-display text-sm font-bold tracking-widest" style={{ left: `${50 + 50 * Math.cos(a) * 0.98}%`, top: `${50 + 50 * Math.sin(a) * 0.98}%`, color: p.accent }}>
            {p.key}
          </span>
        );
      })}
      <div className="glass absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center">
        <span className="font-display text-3xl font-bold text-fg">2027</span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">Strategy</span>
      </div>
    </div>
  );
}

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow={`Our strategy · ${strategy.title}`}
        title={<>Scale Without Losing <span className="text-gradient">What Made Us Successful.</span></>}
        lead={strategy.context.join(" ")}
        aside={<HeroBadge />}
      >
        <ButtonLink href="#strategy-map">Explore the priorities</ButtonLink>
      </PageHero>

      <section id="strategy-map" className="section scroll-mt-20 bg-base-2" aria-labelledby="map-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="map-heading" eyebrow="Strategy map" title="Four priorities. One direction." lead="Select a priority to see its objective, target and why it matters." />
          </Reveal>
          <Reveal className="mt-14"><StrategyMap /></Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="dash-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="dash-heading" eyebrow="Strategy dashboard" title="The 2027 priorities in detail." />
          </Reveal>
          <Reveal className="mt-12"><StrategyDashboard /></Reveal>
        </div>
      </section>

      <section className="section bg-base-2" aria-labelledby="context-heading">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading id="context-heading" eyebrow="Competitive context" title="Where NextWave competes." />
          </Reveal>
          <div className="grid gap-4">
            {[
              { icon: Globe2, label: "Market", text: strategy.context[0] },
              { icon: Building2, label: "Customers", text: company.customers },
              { icon: Target, label: "The 2027 challenge", text: strategy.context[1] },
            ].map(({ icon: I, label, text }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="surface flex gap-5 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan"><I aria-hidden className="h-5 w-5" /></span>
                  <div>
                    <h3 className="t-label text-fg-3">{label}</h3>
                    <p className="mt-2 text-lg leading-8 text-fg">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
