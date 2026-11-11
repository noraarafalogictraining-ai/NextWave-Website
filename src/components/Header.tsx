"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/content";

const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  // Collapse on scroll down, reappear on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 240 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y <= 240) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[transform,background-color,border-color] duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || open ? "border-b border-edge bg-base/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-base"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[76px]">
        <Logo className="h-8 w-auto lg:h-9" priority />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-edge bg-base-2/60 p-1 backdrop-blur">
            {navLinks.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-raised text-fg shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]" : "text-fg-2 hover:text-fg"
                    }`}
                  >
                    {l.label}
                    {active && <span aria-hidden className="absolute inset-x-5 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <span aria-hidden className="hidden w-[108px] md:block lg:w-[122px]" />

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-edge text-fg hover:bg-raised md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} hidden={!open} className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-edge bg-base md:hidden">
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="space-y-2">
            {navLinks.map((l, i) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href} className="animate-rise" style={{ animationDelay: `${i * 50}ms` }}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-4 font-display text-xl font-semibold ${
                      active ? "border-cyan/40 bg-raised text-fg" : "border-edge text-fg-2 hover:text-fg"
                    }`}
                  >
                    {l.label}
                    {active && <span aria-hidden className="h-2 w-2 rounded-full bg-cyan" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
