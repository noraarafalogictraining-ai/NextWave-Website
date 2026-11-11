import type { ReactNode } from "react";
import {
  LayoutDashboard, Workflow, Users, BarChart3, LineChart, Sparkles, Plug, GitBranch, Puzzle, Bell, Search, CheckCircle2,
  Circle, Database, Cloud, Server, Boxes, ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------ primitives */

export function Bar({ w, tone = "bg-fg/15", h = "h-2" }: { w: string; tone?: string; h?: string }) {
  return <span className={`block ${h} rounded-full ${tone}`} style={{ width: w }} />;
}

function Pill({ children, tone }: { children: ReactNode; tone: string }) {
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${tone}`}>{children}</span>;
}

export function LineSpark({ id, color = "#26D5F5", second = "#A995FF", className = "h-28 w-full" }: { id: string; color?: string; second?: string; className?: string }) {
  return (
    <svg viewBox="0 0 300 110" className={className} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`${id}-a`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.4" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[22, 55, 88].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(184,200,226,0.08)" />)}
      <path d="M0 92 C 35 84, 60 66, 98 70 S 160 44, 200 47 S 262 22, 300 16 L300 110 L0 110 Z" fill={`url(#${id}-a)`} />
      <path d="M0 92 C 35 84, 60 66, 98 70 S 160 44, 200 47 S 262 22, 300 16" fill="none" stroke={color} strokeWidth="2.5" />
      <path d="M0 101 C 50 96, 84 86, 124 83 S 202 71, 240 64 S 282 57, 300 52" fill="none" stroke={second} strokeWidth="1.8" strokeDasharray="5 5" />
    </svg>
  );
}

export function Bars({ heights, tone = "from-azure/50 to-cyan/90", className = "h-20" }: { heights: number[]; tone?: string; className?: string }) {
  return (
    <div className={`flex items-end gap-1.5 ${className}`} aria-hidden>
      {heights.map((h, i) => <span key={i} className={`flex-1 rounded-t-[3px] bg-gradient-to-t ${tone}`} style={{ height: `${h}%` }} />)}
    </div>
  );
}

function Donut({ parts, size = 84 }: { parts: { v: number; c: string }[]; size?: number }) {
  const r = 15.9;
  let off = 25;
  return (
    <svg viewBox="0 0 42 42" width={size} height={size} aria-hidden>
      <circle cx="21" cy="21" r={r} fill="none" stroke="rgba(184,200,226,0.1)" strokeWidth="5" />
      {parts.map((p, i) => {
        const el = <circle key={i} cx="21" cy="21" r={r} fill="none" stroke={p.c} strokeWidth="5" strokeDasharray={`${p.v} ${100 - p.v}`} strokeDashoffset={off} strokeLinecap="round" />;
        off -= p.v;
        return el;
      })}
    </svg>
  );
}

/* ------------------------------------------------------------- app frame */

const navIcons = [LayoutDashboard, Workflow, Users, BarChart3, Plug];

export function AppFrame({ title, active = 0, children, className = "", tag = "Illustrative preview" }: { title: string; active?: number; children: ReactNode; className?: string; tag?: string }) {
  return (
    <div className={`glass overflow-hidden ${className}`} aria-hidden>
      <div className="flex items-center gap-3 border-b border-edge px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
        </span>
        <span className="truncate text-xs font-semibold text-fg-2">{title}</span>
        <span className="ml-auto hidden items-center gap-2 sm:flex">
          <span className="flex h-6 w-28 items-center gap-1.5 rounded-md bg-fg/[0.06] px-2 text-fg-3"><Search className="h-3 w-3" /><Bar w="60%" tone="bg-fg/10" h="h-1.5" /></span>
          <Bell className="h-3.5 w-3.5 text-fg-3" />
          <span className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan to-violet" />
        </span>
      </div>
      <div className="grid grid-cols-[44px_1fr]">
        <div className="flex flex-col items-center gap-3 border-r border-edge py-4">
          {navIcons.map((I, i) => (
            <span key={i} className={`flex h-7 w-7 items-center justify-center rounded-lg ${i === active ? "bg-cyan/15 text-cyan" : "text-fg-3"}`}><I className="h-3.5 w-3.5" /></span>
          ))}
        </div>
        <div className="min-w-0 p-4 sm:p-5">{children}</div>
      </div>
      <div className="border-t border-edge px-4 py-1.5 text-right text-[10px] uppercase tracking-[0.18em] text-fg-3">{tag}</div>
    </div>
  );
}

function PanelTitle({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <span className="text-[11px] font-semibold text-fg">{children}</span>
      {right}
    </div>
  );
}

/* ------------------------------------------------------- NextWave One */

function OneOperations() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2.5">
        {[["Requests", "bg-cyan"], ["In progress", "bg-azure"], ["Completed", "bg-violet"]].map(([l, t]) => (
          <div key={l} className="rounded-xl bg-fg/[0.04] p-2.5">
            <span className="text-[10px] text-fg-3">{l}</span>
            <span className={`mt-2 block h-1.5 w-full rounded-full ${t} opacity-80`} />
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-fg/[0.04] p-3">
        <PanelTitle right={<Pill tone="bg-cyan/15 text-cyan">This week</Pill>}>Operations overview</PanelTitle>
        <Bars heights={[45, 60, 52, 75, 68, 82, 70, 88, 79, 92]} className="h-20" />
      </div>
      <div className="space-y-2">
        {[["Onboarding request", "On track", "bg-cyan/15 text-cyan"], ["Service update", "In review", "bg-violet/15 text-violet"], ["Account setup", "Done", "bg-fg/10 text-fg-2"]].map(([n, s, t]) => (
          <div key={n} className="flex items-center justify-between rounded-lg border border-edge px-3 py-2">
            <span className="text-[11px] text-fg-2">{n}</span>
            <Pill tone={t}>{s}</Pill>
          </div>
        ))}
      </div>
    </div>
  );
}

function OneWorkflows() {
  const cols = [
    { n: "To do", t: "bg-cyan", c: 3 },
    { n: "In progress", t: "bg-azure", c: 2 },
    { n: "Done", t: "bg-violet", c: 3 },
  ];
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {cols.map((col) => (
        <div key={col.n} className="space-y-2 rounded-xl bg-fg/[0.04] p-2">
          <div className="flex items-center gap-1.5 px-1 pb-1">
            <span className={`h-1.5 w-1.5 rounded-full ${col.t}`} />
            <span className="truncate text-[10px] font-semibold text-fg-2">{col.n}</span>
          </div>
          {Array.from({ length: col.c }).map((_, i) => (
            <div key={i} className="space-y-1.5 rounded-lg border border-edge bg-raised/70 p-2">
              <Bar w={`${88 - i * 12}%`} tone="bg-fg/30" />
              <Bar w="55%" />
              <div className="flex items-center justify-between pt-1">
                <span className={`h-1 w-7 rounded-full ${col.t} opacity-70`} />
                <span className="h-4 w-4 rounded-full bg-gradient-to-br from-fg/30 to-fg/10" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function OneCustomers() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1.25fr]">
      <div className="rounded-xl bg-fg/[0.04] p-3">
        <span className="block h-10 w-10 rounded-xl bg-gradient-to-br from-cyan to-azure" />
        <div className="mt-3 space-y-1.5">
          <Bar w="72%" tone="bg-fg/40" />
          <Bar w="48%" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {["Contacts", "Requests", "Tasks"].map((l) => <span key={l} className="rounded-md bg-fg/[0.06] px-1 py-2 text-center text-[9px] text-fg-3">{l}</span>)}
        </div>
      </div>
      <div className="space-y-2.5">
        <PanelTitle>Activity</PanelTitle>
        {["bg-cyan", "bg-azure", "bg-violet", "bg-cyan"].map((t, i) => (
          <div key={i} className="flex gap-2.5">
            <div className="flex flex-col items-center">
              <span className={`h-2.5 w-2.5 rounded-full ${t}`} />
              {i < 3 && <span className="mt-1 h-7 w-px bg-fg/15" />}
            </div>
            <div className="flex-1 space-y-1.5 rounded-lg bg-fg/[0.04] p-2">
              <Bar w={`${82 - i * 9}%`} tone="bg-fg/30" />
              <Bar w={`${50 + i * 7}%`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------- NextWave Insights */

function InsightsAnalytics() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2.5">
        {[["Segment A", "from-cyan"], ["Segment B", "from-violet"], ["Segment C", "from-azure"]].map(([l, t]) => (
          <div key={l} className="rounded-xl bg-fg/[0.04] p-2.5">
            <span className="text-[10px] text-fg-3">{l}</span>
            <span className={`mt-2 block h-1.5 w-full rounded-full bg-gradient-to-r ${t} to-transparent`} />
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl bg-fg/[0.04] p-3">
          <PanelTitle>Performance by period</PanelTitle>
          <Bars heights={[40, 62, 48, 76, 58, 86, 66, 80]} tone="from-violet/50 to-violet" className="h-24" />
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-fg/[0.04] p-3">
          <Donut parts={[{ v: 42, c: "#26D5F5" }, { v: 30, c: "#A995FF" }, { v: 18, c: "#5B8CFF" }]} />
          <span className="mt-2 text-[10px] text-fg-3">Mix by category</span>
        </div>
      </div>
    </div>
  );
}

function InsightsTrends() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-fg/[0.04] p-3">
        <PanelTitle right={<span className="flex gap-3 text-[10px] text-fg-3"><span className="flex items-center gap-1"><span className="h-1.5 w-3 rounded bg-cyan" />Actual</span><span className="flex items-center gap-1"><span className="h-1.5 w-3 rounded bg-violet" />Plan</span></span>}>Trend monitor</PanelTitle>
        <LineSpark id="it" className="h-32 w-full" />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[["Rising", "bg-cyan/15 text-cyan"], ["Watch", "bg-amber/15 text-amber"]].map(([l, t]) => (
          <div key={l} className="flex items-center justify-between rounded-xl border border-edge p-2.5">
            <Bar w="55%" />
            <Pill tone={t}>{l}</Pill>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsDecisions() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-violet/30 bg-violet/[0.08] p-3">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-violet"><Sparkles className="h-3.5 w-3.5" /> Insight</div>
        <div className="mt-2 space-y-1.5"><Bar w="92%" tone="bg-fg/35" /><Bar w="70%" tone="bg-fg/20" /></div>
      </div>
      {["Recommended focus", "Key driver", "Area to review"].map((l, i) => (
        <div key={l} className="flex items-center gap-3 rounded-xl bg-fg/[0.04] p-3">
          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${["bg-cyan/15 text-cyan", "bg-azure/15 text-azure", "bg-amber/15 text-amber"][i]}`}><LineChart className="h-3.5 w-3.5" /></span>
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold text-fg">{l}</span>
            <span className="mt-1.5 block"><Bar w={`${78 - i * 10}%`} /></span>
          </div>
          <ArrowRight className="h-3.5 w-3.5 text-fg-3" />
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------- NextWave Solutions */

function SolutionsIntegrations() {
  const nodes = [
    { I: Database, l: "Existing system", x: "8%", y: "12%" },
    { I: Cloud, l: "Cloud service", x: "8%", y: "68%" },
    { I: Server, l: "Internal tool", x: "70%", y: "12%" },
    { I: Boxes, l: "NextWave product", x: "70%", y: "68%" },
  ];
  return (
    <div className="relative h-[230px] rounded-xl bg-fg/[0.03]">
      <svg viewBox="0 0 400 230" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
        {["M90 45 L200 115", "M90 175 L200 115", "M310 45 L200 115", "M310 175 L200 115"].map((d) => (
          <path key={d} d={d} stroke="#5B8CFF" strokeOpacity="0.7" strokeWidth="1.6" strokeDasharray="5 7" className="animate-dash" fill="none" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-azure to-violet text-fg shadow-lg shadow-azure/30"><Plug className="h-6 w-6" /></div>
      {nodes.map(({ I, l, x, y }) => (
        <div key={l} className="absolute flex w-[24%] min-w-[92px] items-center gap-1.5 rounded-lg border border-edge bg-raised/90 px-2 py-1.5" style={{ left: x, top: y }}>
          <I className="h-3.5 w-3.5 shrink-0 text-cyan" />
          <span className="truncate text-[10px] text-fg-2">{l}</span>
        </div>
      ))}
    </div>
  );
}

function SolutionsWorkflows() {
  const steps = ["Request", "Validate", "Process", "Update", "Notify"];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-1 rounded-xl bg-fg/[0.04] p-3">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div className="flex min-w-0 flex-col items-center gap-1.5">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full ${i < 3 ? "bg-cyan/20 text-cyan" : "bg-fg/10 text-fg-3"}`}>
                {i < 3 ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
              </span>
              <span className="truncate text-[9px] text-fg-3">{s}</span>
            </div>
            {i < steps.length - 1 && <span className={`mb-4 h-px flex-1 ${i < 2 ? "bg-cyan/60" : "bg-fg/15"}`} />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {["System A", "System B"].map((l, i) => (
          <div key={l} className="rounded-xl border border-edge p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-fg-2"><GitBranch className="h-3 w-3 text-violet" />{l}</div>
            <div className="mt-2.5 space-y-1.5"><Bar w={`${80 - i * 15}%`} tone="bg-fg/25" /><Bar w="50%" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionsCustom() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {[
        ["Requirements", "bg-cyan/15 text-cyan", 3],
        ["Configuration", "bg-violet/15 text-violet", 2],
        ["Modules", "bg-azure/15 text-azure", 4],
        ["Rollout plan", "bg-amber/15 text-amber", 2],
      ].map(([l, t, n]) => (
        <div key={l as string} className="rounded-xl bg-fg/[0.04] p-3">
          <div className="flex items-center gap-1.5">
            <span className={`flex h-6 w-6 items-center justify-center rounded-md ${t}`}><Puzzle className="h-3 w-3" /></span>
            <span className="text-[10px] font-semibold text-fg-2">{l as string}</span>
          </div>
          <div className="mt-3 space-y-1.5">
            {Array.from({ length: n as number }).map((_, i) => <Bar key={i} w={`${90 - i * 14}%`} tone={i === 0 ? "bg-fg/30" : "bg-fg/12"} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- exports */

export const productScreens: Record<string, Record<string, () => ReactNode>> = {
  "nextwave-one": { operations: OneOperations, workflows: OneWorkflows, customers: OneCustomers },
  "nextwave-insights": { analytics: InsightsAnalytics, trends: InsightsTrends, decisions: InsightsDecisions },
  "nextwave-solutions": { integrations: SolutionsIntegrations, workflows: SolutionsWorkflows, custom: SolutionsCustom },
};

export function ProductScreen({ product, tab }: { product: string; tab: string }) {
  const Screen = productScreens[product]?.[tab];
  return Screen ? <Screen /> : null;
}

/** Layered composition for the home hero. */
export function HeroComposite() {
  return (
    <div className="relative mx-auto w-full max-w-[640px] pb-10 pt-6 sm:pb-16" aria-hidden>
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-cyan/25 via-violet/20 to-azure/20 blur-3xl" />
      <AppFrame title="NextWave One · Operations overview" className="relative">
        <OneOperations />
      </AppFrame>
      <div className="absolute -left-4 bottom-0 hidden w-[52%] animate-float sm:block lg:-left-10">
        <div className="glass p-4">
          <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-fg"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet/20 text-violet"><LineChart className="h-3.5 w-3.5" /></span>NextWave Insights</div>
          <LineSpark id="hero" className="h-20 w-full" />
        </div>
      </div>
      <div className="absolute -right-3 top-0 hidden w-[40%] animate-float-slow sm:block lg:-right-8">
        <div className="glass p-3.5">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-fg"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-azure/20 text-azure"><Plug className="h-3.5 w-3.5" /></span>NextWave Solutions</div>
          <div className="mt-3 flex items-center gap-1.5">
            {[Database, Cloud, Boxes].map((I, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-edge bg-fg/[0.05] text-cyan"><I className="h-3.5 w-3.5" /></span>
                {i < 2 && <span className="h-px w-3 bg-cyan/50" />}
              </span>
            ))}
            <span className="ml-auto rounded-full bg-cyan/15 px-2 py-0.5 text-[9px] font-semibold text-cyan">Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
