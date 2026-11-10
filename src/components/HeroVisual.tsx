import { Workflow, Users, BarChart3 } from "lucide-react";

/**
 * Abstract "connected platform" illustration: three solution nodes linked to a
 * central data core, with a floating dashboard panel. Pure SVG/CSS, no stock imagery,
 * and no numbers that could be read as real performance figures.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[540px]" aria-hidden>
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-tr from-electric/30 via-violet/25 to-cyan/20 blur-3xl" />

      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hv-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#2BD4F0" />
            <stop offset="1" stopColor="#8A6BFF" />
          </linearGradient>
          <radialGradient id="hv-core" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#4f7bff" />
            <stop offset="0.6" stopColor="#1f3fb8" />
            <stop offset="1" stopColor="#0b1533" />
          </radialGradient>
        </defs>

        {/* orbits */}
        <circle cx="250" cy="250" r="190" fill="none" stroke="rgba(255,255,255,0.08)" />
        <circle cx="250" cy="250" r="130" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 8" />
        <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255,255,255,0.04)" />

        {/* connectors */}
        {[
          "M250 250 L250 70",
          "M250 250 L94 340",
          "M250 250 L406 340",
          "M250 70 Q 120 120 94 340",
          "M94 340 Q 250 470 406 340",
          "M406 340 Q 380 120 250 70",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#hv-line)"
            strokeWidth={i < 3 ? 2 : 1.2}
            strokeOpacity={i < 3 ? 0.85 : 0.35}
            strokeDasharray="6 10"
            className="animate-dash"
          />
        ))}

        {/* small data points on orbit */}
        {[30, 95, 160, 215, 280, 335].map((a) => {
          const r = 190;
          const x = 250 + r * Math.cos((a * Math.PI) / 180);
          const y = 250 + r * Math.sin((a * Math.PI) / 180);
          return <circle key={a} cx={x} cy={y} r="3" fill="#2BD4F0" className="animate-pulse-soft" />;
        })}

        {/* core */}
        <circle cx="250" cy="250" r="62" fill="url(#hv-core)" stroke="rgba(255,255,255,0.25)" />
        <circle cx="250" cy="250" r="78" fill="none" stroke="rgba(43,212,240,0.35)" className="animate-pulse-soft" />
        <path d="M228 268 L228 232 L272 268 L272 232" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* nodes */}
      {[
        { label: "FlowOps", sub: "Operations", Icon: Workflow, pos: "left-1/2 top-[14%] -translate-x-1/2 -translate-y-1/2", tone: "from-electric to-[#4f7bff]" },
        { label: "Customer360", sub: "Relationships", Icon: Users, pos: "left-[18.8%] top-[68%] -translate-x-1/2 -translate-y-1/2", tone: "from-cyan-ink to-cyan" },
        { label: "InsightIQ", sub: "Intelligence", Icon: BarChart3, pos: "left-[81.2%] top-[68%] -translate-x-1/2 -translate-y-1/2", tone: "from-violet-ink to-violet" },
      ].map(({ label, sub, Icon, pos, tone }, i) => (
        <div key={label} className={`absolute ${pos}`}>
          <div className="animate-float" style={{ animationDelay: `${i * -3}s` }}>
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-navy-800/80 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2.5">
              <span className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br sm:h-9 sm:w-9 sm:rounded-xl ${tone} text-white`}>
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="pr-1 leading-tight">
                <span className="block font-display text-xs font-semibold text-white sm:text-sm">{label}</span>
                <span className="hidden text-[11px] text-mist sm:block">{sub}</span>
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* floating dashboard panel */}
      <div className="absolute bottom-[1%] left-1/2 hidden w-[58%] -translate-x-1/2 sm:block">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between">
            <span className="h-2 w-20 rounded-full bg-white/30" />
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              <span className="h-2 w-2 rounded-full bg-violet" />
              <span className="h-2 w-2 rounded-full bg-electric" />
            </span>
          </div>
          <div className="flex h-14 items-end gap-1.5">
            {[38, 52, 44, 63, 58, 72, 66, 81, 77, 90].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-electric/50 to-cyan/80" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
