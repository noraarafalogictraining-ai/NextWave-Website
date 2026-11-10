import type { ProductSlug } from "@/lib/products";

/** Stylized, label-free product interface preview for each solution. */
export default function ProductScreen({ slug }: { slug: ProductSlug }) {
  return (
    <div aria-hidden className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-electric/30 via-violet/20 to-cyan/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-800/90 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-4 h-2 w-32 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-[52px_1fr]">
          <div className="space-y-3 border-r border-white/10 p-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`block h-7 w-7 rounded-lg ${i === 1 ? "bg-electric" : "bg-white/10"}`} />
            ))}
          </div>
          <div className="min-h-[300px] p-5">
            {slug === "flowops" && <FlowOpsScreen />}
            {slug === "customer360" && <Customer360Screen />}
            {slug === "insightiq" && <InsightIQScreen />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar({ w, tone = "bg-white/15" }: { w: string; tone?: string }) {
  return <span className={`block h-2 rounded-full ${tone}`} style={{ width: w }} />;
}

function FlowOpsScreen() {
  const cols = [
    { tone: "bg-cyan", cards: 3 },
    { tone: "bg-electric", cards: 2 },
    { tone: "bg-violet", cards: 3 },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {cols.map((c, ci) => (
        <div key={ci} className="space-y-2.5 rounded-xl bg-white/[0.04] p-2.5">
          <div className="flex items-center gap-2 pb-1">
            <span className={`h-2 w-2 rounded-full ${c.tone}`} />
            <Bar w="55%" />
          </div>
          {Array.from({ length: c.cards }).map((_, i) => (
            <div key={i} className="space-y-2 rounded-lg border border-white/10 bg-navy-700/80 p-2.5">
              <Bar w="85%" tone="bg-white/30" />
              <Bar w="60%" />
              <div className="flex items-center justify-between pt-1">
                <span className={`h-1.5 w-8 rounded-full ${c.tone} opacity-70`} />
                <span className="h-4 w-4 rounded-full bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Customer360Screen() {
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_1.3fr]">
      <div className="rounded-xl bg-white/[0.05] p-4">
        <span className="block h-12 w-12 rounded-full bg-gradient-to-br from-cyan to-electric" />
        <div className="mt-3 space-y-2">
          <Bar w="70%" tone="bg-white/40" />
          <Bar w="50%" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-10 rounded-lg bg-white/[0.07]" />
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <Bar w="90%" />
          <Bar w="75%" />
        </div>
      </div>
      <div className="space-y-3">
        {["bg-cyan", "bg-electric", "bg-violet", "bg-cyan"].map((t, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`h-3 w-3 rounded-full ${t}`} />
              {i < 3 && <span className="mt-1 h-10 w-px bg-white/15" />}
            </div>
            <div className="flex-1 space-y-2 rounded-lg bg-white/[0.05] p-2.5">
              <Bar w={`${80 - i * 8}%`} tone="bg-white/30" />
              <Bar w={`${55 + i * 6}%`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightIQScreen() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {["from-electric", "from-cyan", "from-violet"].map((t) => (
          <div key={t} className="rounded-xl bg-white/[0.05] p-3">
            <Bar w="50%" />
            <span className={`mt-3 block h-1.5 w-full rounded-full bg-gradient-to-r ${t} to-transparent`} />
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/[0.05] p-4">
        <svg viewBox="0 0 300 110" className="h-32 w-full">
          <defs>
            <linearGradient id="iq-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#2BD4F0" stopOpacity="0.45" />
              <stop offset="1" stopColor="#2BD4F0" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[25, 55, 85].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" />
          ))}
          <path d="M0 90 C 40 80, 60 60, 100 65 S 160 40, 200 45 S 260 20, 300 15 L300 110 L0 110 Z" fill="url(#iq-area)" />
          <path d="M0 90 C 40 80, 60 60, 100 65 S 160 40, 200 45 S 260 20, 300 15" fill="none" stroke="#2BD4F0" strokeWidth="2.5" />
          <path d="M0 100 C 50 95, 80 85, 120 82 S 200 70, 240 62 S 280 55, 300 50" fill="none" stroke="#8A6BFF" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      </div>
      <div className="flex h-16 items-end gap-2 rounded-xl bg-white/[0.05] p-3">
        {[40, 65, 50, 80, 60, 90, 70, 85].map((h, i) => (
          <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet/60 to-electric/90" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
