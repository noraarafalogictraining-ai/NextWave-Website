"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { priorities, type Priority } from "@/lib/content";

function Meter({ p }: { p: Priority }) {
  if (!p.target) {
    return (
      <div className="flex flex-wrap gap-1.5">
        {p.focus.map((f) => (
          <span key={f} className="rounded-full border px-2.5 py-1 text-xs text-fg-2" style={{ borderColor: `${p.accent}55` }}>{f}</span>
        ))}
      </div>
    );
  }
  if (!p.target.from) {
    // Growth target: there is no "current" level, so show the target itself.
    return (
      <div>
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-fg-2">{p.target.label} target</span>
          <span className="font-display text-lg font-semibold" style={{ color: p.accent }}>{p.target.to}</span>
        </div>
        <div className="mt-3 h-2.5 rounded-full" style={{ background: `linear-gradient(90deg, ${p.accent}22, ${p.accent})` }} aria-hidden />
        <div className="mt-1.5 text-[11px] text-fg-3" aria-hidden>New business + growth within existing relationships</div>
      </div>
    );
  }
  const from = parseFloat(p.target.from);
  const to = parseFloat(p.target.to);
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-fg-2">{p.target.label}</span>
        <span className="font-display text-lg font-semibold text-fg">
          {p.target.from} <span className="text-fg-3">→</span> <span style={{ color: p.accent }}>{p.target.to}</span>
        </span>
      </div>
      <div className="relative mt-3 h-2.5 overflow-hidden rounded-full bg-fg/10" aria-hidden>
        <span className="absolute inset-y-0 left-0 rounded-full bg-fg/25" style={{ width: `${from}%` }} />
        <span className="absolute inset-y-0 rounded-full" style={{ left: `${from}%`, width: `${to - from}%`, background: p.accent }} />
      </div>
      <div className="mt-1.5 flex justify-between text-[11px] text-fg-3" aria-hidden>
        <span>0%</span>
        <span>Current {p.target.from} · Target {p.target.to}</span>
      </div>
    </div>
  );
}

export default function StrategyDashboard() {
  const [open, setOpen] = useState<string | null>(null);

  // Open the panel named in the URL hash (e.g. /strategy#retain).
  useEffect(() => {
    const sync = () => {
      const k = window.location.hash.slice(1).toUpperCase();
      if (priorities.some((p) => p.key === k)) setOpen(k);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <div className="grid items-start gap-5 lg:grid-cols-2">
      {priorities.map((p, i) => {
        const expanded = open === p.key;
        return (
          <article key={p.key} id={p.key.toLowerCase()} className={`surface scroll-mt-32 overflow-hidden transition duration-300 ${expanded ? "bg-raised" : ""}`} style={expanded ? { borderColor: `${p.accent}66` } : undefined}>
            <span aria-hidden className="block h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="t-label text-fg-3">Priority 0{i + 1}</p>
                  <h3 className="mt-1 font-display text-3xl font-bold tracking-wide" style={{ color: p.accent }}>{p.key}</h3>
                  <p className="mt-1 text-fg-2">{p.title}</p>
                </div>
              </div>
              <div className="mt-6"><Meter p={p} /></div>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`dash-${p.key}`}
                onClick={() => setOpen(expanded ? null : p.key)}
                className="mt-6 flex w-full items-center justify-between rounded-xl border border-edge px-4 py-3 text-sm font-semibold text-fg transition hover:border-edge-strong"
              >
                {expanded ? "Hide details" : "View details"}
                <ChevronDown aria-hidden className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </button>
              <div id={`dash-${p.key}`} hidden={!expanded}>
                <dl className="mt-6 grid animate-fade-swap gap-5">
                  <div>
                    <dt className="t-label text-fg-3">Strategic objective</dt>
                    <dd className="mt-1.5 leading-7 text-fg">{p.text}</dd>
                  </div>
                  <div>
                    <dt className="t-label text-fg-3">Business target</dt>
                    <dd className="mt-1.5 leading-7 text-fg-2">
                      {p.target ? (p.target.from ? `${p.target.label}: from ${p.target.from} to ${p.target.to}.` : `${p.target.label}: ${p.target.to}.`) : "No numeric target. Progress is reflected in the talent pipeline, succession readiness and critical capabilities."}
                    </dd>
                  </div>
                  <div>
                    <dt className="t-label text-fg-3">Why it matters</dt>
                    <dd className="mt-1.5 leading-7 text-fg-2">{p.why}</dd>
                  </div>
                  <div>
                    <dt className="t-label text-fg-3">Focus areas</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {p.focus.map((f) => <span key={f} className="rounded-full bg-fg/[0.06] px-2.5 py-1 text-xs text-fg-2">{f}</span>)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
