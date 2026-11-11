"use client";

import { useState } from "react";
import Icon from "./Icon";
import { useTabKeys } from "@/lib/useTabs";
import { values } from "@/lib/content";

const tones = ["#26D5F5", "#A995FF", "#5B8CFF", "#F5B84A"];

export default function ValuesExplorer() {
  const [active, setActive] = useState(0);
  const { tabProps } = useTabKeys(values.length, active, setActive);
  const v = values[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
      <div role="tablist" aria-label="Our values" className="grid grid-cols-2 gap-4">
        {values.map((val, i) => {
          const selected = i === active;
          return (
            <button
              key={val.id}
              id={`value-tab-${val.id}`}
              aria-controls="value-panel"
              {...tabProps(i)}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] border p-5 text-left transition duration-300 sm:p-7 ${
                selected ? "border-transparent bg-raised" : "border-edge bg-base-2/60 hover:-translate-y-0.5 hover:border-edge-strong"
              }`}
              style={selected ? { boxShadow: `0 0 0 1px ${tones[i]}66, 0 24px 60px -28px ${tones[i]}88` } : undefined}
            >
              <span aria-hidden className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300" style={{ background: tones[i], opacity: selected ? 0.22 : 0.06 }} />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border transition" style={{ color: tones[i], borderColor: `${tones[i]}55`, background: selected ? `${tones[i]}22` : "transparent" }}>
                <Icon name={val.icon} className="h-5 w-5" />
              </span>
              <span className="relative mt-5 block t-label text-fg-3">0{i + 1}</span>
              <span className="relative mt-1 block font-display text-lg font-semibold text-fg sm:text-xl">{val.name}</span>
              <span aria-hidden className={`relative mt-4 block h-0.5 rounded-full transition-all duration-500 ${selected ? "w-12" : "w-0"}`} style={{ background: tones[i] }} />
            </button>
          );
        })}
      </div>

      <div id="value-panel" role="tabpanel" aria-labelledby={`value-tab-${v.id}`} tabIndex={0} className="glass relative flex min-h-[280px] flex-col justify-center overflow-hidden p-8 sm:p-10">
        <span aria-hidden className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: tones[active], opacity: 0.25 }} />
        <div key={v.id} className="relative animate-fade-swap">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ color: tones[active], background: `${tones[active]}1f` }}>
            <Icon name={v.icon} className="h-6 w-6" />
          </span>
          <p className="t-label mt-7" style={{ color: tones[active] }}>Value 0{active + 1}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-fg">{v.name}</h3>
          <p className="t-lead mt-4">{v.body}</p>
        </div>
      </div>
    </div>
  );
}
