"use client";

import { useRef, type KeyboardEvent } from "react";

/**
 * Roving-tabindex keyboard support for a WAI-ARIA tab list:
 * Arrow keys move and select, Home/End jump to the ends.
 */
export function useTabKeys(count: number, active: number, select: (i: number) => void, orientation: "horizontal" | "vertical" | "both" = "both") {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const prev = orientation === "vertical" ? ["ArrowUp"] : orientation === "horizontal" ? ["ArrowLeft"] : ["ArrowLeft", "ArrowUp"];
    const next = orientation === "vertical" ? ["ArrowDown"] : orientation === "horizontal" ? ["ArrowRight"] : ["ArrowRight", "ArrowDown"];
    let i = -1;
    if (next.includes(e.key)) i = (active + 1) % count;
    else if (prev.includes(e.key)) i = (active - 1 + count) % count;
    else if (e.key === "Home") i = 0;
    else if (e.key === "End") i = count - 1;
    if (i < 0) return;
    e.preventDefault();
    select(i);
    refs.current[i]?.focus();
  };
  const tabProps = (i: number) => ({
    ref: (el: HTMLButtonElement | null) => { refs.current[i] = el; },
    role: "tab" as const,
    "aria-selected": i === active,
    tabIndex: i === active ? 0 : -1,
    onKeyDown,
    onClick: () => select(i),
  });
  return { tabProps };
}
