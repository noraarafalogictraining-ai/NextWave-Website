import { Target, TrendingUp, Search, Cog, ServerCog, ShieldCheck, Handshake, Rocket, Smile } from "lucide-react";

type Dept = "commercial" | "product-operations" | "customer-success";

const config: Record<Dept, { from: string; to: string; icons: (typeof Target)[] }> = {
  commercial: { from: "#1f6bff", to: "#2bd4f0", icons: [Target, TrendingUp, Search] },
  "product-operations": { from: "#5537db", to: "#1f6bff", icons: [Cog, ServerCog, ShieldCheck] },
  "customer-success": { from: "#087e95", to: "#8a6bff", icons: [Handshake, Rocket, Smile] },
};

/** Abstract department illustration (no stock photography, no real people). */
export default function DeptIllustration({ dept }: { dept: Dept }) {
  const { from, to, icons } = config[dept];
  const [A, B, C] = icons;
  return (
    <div aria-hidden className="relative h-44 overflow-hidden rounded-2xl" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
      <svg viewBox="0 0 400 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40">
        <path d="M0 140 C 80 100, 140 160, 220 110 S 340 60, 400 80" fill="none" stroke="white" strokeWidth="1.5" />
        <path d="M0 160 C 90 130, 160 170, 240 135 S 350 100, 400 110" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
        {[...Array(9)].map((_, i) => (
          <circle key={i} cx={30 + i * 45} cy={30 + ((i * 37) % 60)} r="1.6" fill="white" />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
          <B className="h-7 w-7" />
        </span>
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-navy-900 shadow-2xl shadow-black/20">
          <A className="h-9 w-9" />
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
          <C className="h-7 w-7" />
        </span>
      </div>
    </div>
  );
}
