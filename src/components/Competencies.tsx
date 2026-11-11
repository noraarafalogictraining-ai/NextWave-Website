"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Icon from "./Icon";
import { competencies } from "@/lib/content";

export default function Competencies() {
  const [open, setOpen] = useState<string | null>(competencies[0].id);

  return (
    <ul className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
      {competencies.map((c, i) => {
        const expanded = open === c.id;
        return (
          <li key={c.id}>
            <div className={`surface transition duration-300 ${expanded ? "border-cyan/35 bg-raised" : "hover:border-edge-strong"}`}>
              <h3>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`comp-${c.id}`}
                  onClick={() => setOpen(expanded ? null : c.id)}
                  className="flex w-full items-center gap-4 rounded-[var(--radius-card)] p-6 text-left"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${expanded ? "bg-cyan text-base" : "bg-cyan/10 text-cyan"}`}>
                    <Icon name={c.icon} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold text-fg-3">0{i + 1}</span>
                    <span className="mt-0.5 block font-display text-lg font-semibold text-fg">{c.name}</span>
                  </span>
                  <Plus aria-hidden className={`h-5 w-5 shrink-0 text-fg-2 transition-transform duration-300 ${expanded ? "rotate-45 text-cyan" : ""}`} />
                </button>
              </h3>
              <div id={`comp-${c.id}`} role="region" aria-label={c.name} hidden={!expanded} className="px-6 pb-6">
                <div className="animate-fade-swap border-t border-edge pt-4">
                  <p className="t-body">{c.body}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
