"use client";

import { useEffect, useState } from "react";
import { products } from "@/lib/content";

const dot = { cyan: "bg-cyan", violet: "bg-violet", blue: "bg-azure" } as const;

/** Sticky in-page navigator that highlights the product section in view. */
export default function ProductNav() {
  const [current, setCurrent] = useState<string>(products[0].id);

  useEffect(() => {
    const els = products.map((p) => document.getElementById(p.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Products on this page" className="sticky top-[76px] z-40 mx-auto lg:top-[88px] w-fit max-w-[calc(100%-2rem)]">
      <ul className="flex gap-1 overflow-x-auto rounded-full border border-edge-strong bg-base/80 p-1 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl [scrollbar-width:none]">
        {products.map((p) => {
          const on = current === p.id;
          return (
            <li key={p.id} className="shrink-0">
              <a
                href={`#${p.id}`}
                aria-current={on ? "true" : undefined}
                className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${on ? "bg-raised text-fg" : "text-fg-2 hover:text-fg"}`}
              >
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${dot[p.accent]} ${on ? "opacity-100" : "opacity-40"}`} />
                <span className="sm:hidden">{p.name.replace("NextWave ", "")}</span>
                <span className="hidden sm:inline">{p.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
