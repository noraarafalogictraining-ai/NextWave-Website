"use client";

import { useEffect, useRef, useState } from "react";

type Props = { to: number; from?: number; duration?: number; prefix?: string; suffix?: string; className?: string };

/** Counts up once when scrolled into view. Shows the final value without JS or with reduced motion. */
export default function Counter({ to, from = 0, duration = 1400, prefix = "", suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    setValue(from);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, from, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{prefix}{value}{suffix}</span>
      <span className="sr-only">{prefix}{to}{suffix}</span>
    </span>
  );
}
