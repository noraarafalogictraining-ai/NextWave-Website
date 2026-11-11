"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTabKeys } from "@/lib/useTabs";
import { priorities, type Priority } from "@/lib/content";

const pos = [
  { left: "18%", top: "20%" },
  { left: "82%", top: "20%" },
  { left: "18%", top: "80%" },
  { left: "82%", top: "80%" },
];

function Target({ p }: { p: Priority }) {
  if (!p.target) {
    return <p className="text-sm text-fg-2">Capability priority. No numeric target is set.</p>;
  }
  return (
    <div className="flex items-end gap-4">
      {p.target.from && (
        <>
          <span className="font-display text-3xl font-semibold text-fg-3">{p.target.from}</span>
          <ArrowRight aria-hidden className="mb-2 h-5 w-5 text-fg-3" />
        </>
      )}
      <span className="font-display text-5xl font-semibold" style={{ color: p.accent }}>{p.target.to}</span>
      <span className="mb-1.5 text-sm text-fg-2">{p.target.label}{p.target.from ? "" : " target"}</span>
      {p.target.from && <span className="sr-only">: from {p.target.from} to {p.target.to}</span>}
    </div>
  );
}

export default function StrategyMap() {
  const [active, setActive] = useState(0);
  const { tabProps } = useTabKeys(priorities.length, active, setActive);
  const p = priorities[active];

  const nodeButton = (q: Priority, i: number) => {
    const on = i === active;
    return (
      <button
        key={q.key}
        id={`map-tab-${q.key}`}
        aria-controls="map-panel"
        {...tabProps(i)}
        className={`group relative rounded-2xl border text-left transition duration-300 h-full w-full p-4 md:w-44 xl:w-52 ${
          on ? "bg-raised" : "border-edge bg-base-2/80 hover:border-edge-strong"
        }`}
        style={on ? { borderColor: `${q.accent}99`, boxShadow: `0 0 0 4px ${q.accent}1a, 0 20px 50px -20px ${q.accent}` } : undefined}
      >
        <span className="t-label text-fg-3">0{i + 1}</span>
        <span className="mt-1 block font-display text-2xl font-bold tracking-wide" style={{ color: on ? q.accent : "#fff" }}>{q.key}</span>
        <span className="mt-1 block text-sm text-fg-2">{q.title}</span>
      </button>
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
      {/* One set of controls: a diagram from md up, a stacked grid on small screens. */}
      <div>
        <div className="mb-4 rounded-2xl border border-cyan/30 bg-raised p-4 text-center md:hidden">
          <span className="block font-display text-sm font-bold tracking-[0.16em] text-fg">NEXTWAVE</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">Corporate strategy</span>
        </div>
        <div role="tablist" aria-label="Strategic priorities" className="relative grid w-full grid-cols-2 gap-3 md:block md:aspect-[4/3]">
          <svg viewBox="0 0 400 300" className="absolute inset-0 hidden h-full w-full md:block" aria-hidden>
            <defs>
              <radialGradient id="core-g" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#1d3a72" />
                <stop offset="1" stopColor="#101F3D" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="150" r="120" fill="none" stroke="rgba(184,200,226,0.08)" />
            <circle cx="200" cy="150" r="80" fill="none" stroke="rgba(184,200,226,0.07)" strokeDasharray="2 7" />
            {priorities.map((q, i) => {
              const x = parseFloat(pos[i].left) * 4;
              const y = parseFloat(pos[i].top) * 3;
              const on = i === active;
              return (
                <g key={q.key}>
                  <line x1="200" y1="150" x2={x} y2={y} stroke={on ? q.accent : "rgba(184,200,226,0.2)"} strokeWidth={on ? 2 : 1} strokeDasharray="5 6" className={on ? "animate-dash" : ""} style={{ transition: "stroke 0.3s" }} />
                  {on && <circle cx={x} cy={y} r="3" fill={q.accent} />}
                </g>
              );
            })}
            <circle cx="200" cy="150" r="56" fill="url(#core-g)" stroke="rgba(38,213,245,0.45)" />
            <circle cx="200" cy="150" r="66" fill="none" stroke="rgba(38,213,245,0.25)" className="animate-pulse-soft" />
          </svg>
          <div aria-hidden className="absolute left-1/2 top-1/2 hidden w-32 -translate-x-1/2 -translate-y-1/2 text-center md:block">
            <span className="block font-display text-sm font-bold tracking-[0.16em] text-fg">NEXTWAVE</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">Corporate strategy</span>
          </div>
          {priorities.map((q, i) => (
            <div
              key={q.key}
              className="md:absolute md:left-[var(--l)] md:top-[var(--t)] md:-translate-x-1/2 md:-translate-y-1/2"
              style={{ ["--l" as string]: pos[i].left, ["--t" as string]: pos[i].top }}
            >
              {nodeButton(q, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div id="map-panel" role="tabpanel" aria-labelledby={`map-tab-${p.key}`} aria-live="polite" className="glass relative overflow-hidden p-8">
        <span aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-colors duration-500" style={{ background: p.accent, opacity: 0.22 }} />
        <div key={p.key} className="relative animate-fade-swap">
          <p className="t-label" style={{ color: p.accent }}>Priority 0{active + 1}</p>
          <h3 className="mt-2 font-display text-4xl font-bold tracking-wide text-fg">{p.key}</h3>
          <p className="mt-1 text-fg-2">{p.title}</p>
          <div className="hairline my-6" />
          <p className="t-label text-fg-3">Strategic objective</p>
          <p className="mt-2 text-lg leading-8 text-fg">{p.text}</p>
          <p className="t-label mt-6 text-fg-3">Target</p>
          <div className="mt-2"><Target p={p} /></div>
          <p className="t-label mt-6 text-fg-3">Why it matters</p>
          <p className="t-body mt-2">{p.why}</p>
        </div>
      </div>
    </div>
  );
}
