"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AppFrame, ProductScreen } from "./mockups";
import { useTabKeys } from "@/lib/useTabs";
import type { Product } from "@/lib/content";

const accent = {
  cyan: { text: "text-cyan", bg: "bg-cyan", soft: "bg-cyan/10", border: "border-cyan/40", glow: "from-cyan/25" },
  violet: { text: "text-violet", bg: "bg-violet", soft: "bg-violet/10", border: "border-violet/40", glow: "from-violet/30" },
  blue: { text: "text-azure", bg: "bg-azure", soft: "bg-azure/10", border: "border-azure/40", glow: "from-azure/30" },
} as const;

export default function ProductShowcase({ product, index, reverse }: { product: Product; index: number; reverse?: boolean }) {
  const [active, setActive] = useState(0);
  const { tabProps } = useTabKeys(product.tabs.length, active, setActive);
  const a = accent[product.accent];
  const tab = product.tabs[active];
  const panelId = `${product.id}-panel`;

  return (
    <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <p className={`t-label ${a.text}`}>0{index + 1} · {product.sub}</p>
        <h2 id={`${product.id}-heading`} className="t-section mt-3 text-fg">{product.name}</h2>
        <p className="t-lead mt-5">{product.body}</p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-edge bg-fg/[0.04] px-3.5 py-1.5 text-sm text-fg-2">
          <span className={`h-1.5 w-1.5 rounded-full ${a.bg}`} aria-hidden /> Strategic role: <span className="font-semibold text-fg">{product.role}</span>
        </p>

        <div role="tablist" aria-label={`${product.name} features`} aria-orientation="vertical" className="mt-9 space-y-2.5">
          {product.tabs.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                id={`${product.id}-tab-${t.id}`}
                aria-controls={panelId}
                {...tabProps(i)}
                className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition duration-300 ${
                  selected ? `${a.border} bg-raised` : "border-edge hover:border-edge-strong hover:bg-fg/[0.03]"
                }`}
              >
                <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition ${selected ? `${a.bg} border-transparent text-base` : "border-edge-strong text-fg-3"}`}>
                  {selected ? <Check aria-hidden className="h-4 w-4" /> : i + 1}
                </span>
                <span className="flex-1">
                  <span className={`block font-semibold ${selected ? "text-fg" : "text-fg-2"}`}>{t.label}</span>
                  <span className={`grid transition-[grid-template-rows,opacity] duration-300 ${selected ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="overflow-hidden">
                      <span className="block pt-1.5 text-sm leading-6 text-fg-2">{t.body}</span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
        <div aria-hidden className={`absolute -inset-8 rounded-[3rem] bg-gradient-to-tr ${a.glow} via-transparent to-transparent blur-3xl`} />
        <div id={panelId} role="tabpanel" aria-labelledby={`${product.id}-tab-${tab.id}`} className="relative">
          <p className="sr-only">{tab.title}. {tab.body}</p>
          <AppFrame title={`${product.name} · ${tab.label}`} active={index === 1 ? 3 : index === 2 ? 4 : active}>
            <div key={tab.id} className="animate-fade-swap">
              <p className="mb-4 font-display text-sm font-semibold text-fg">{tab.title}</p>
              <ProductScreen product={product.id} tab={tab.id} />
            </div>
          </AppFrame>
        </div>
      </div>
    </div>
  );
}
