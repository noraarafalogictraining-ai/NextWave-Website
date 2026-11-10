"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import PortalIcon from "./PortalIcon";
import { EMPLOYEE_PORTAL_URL, navLinks } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
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
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-white/10 bg-navy-900/90 backdrop-blur-xl" : "border-transparent bg-navy-900"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo variant="dark" className="h-8 w-auto lg:h-9" priority />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-mist hover:text-white"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-electric to-cyan" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={EMPLOYEE_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-white/85 transition hover:border-cyan/60 hover:text-white sm:inline-flex"
          >
            <PortalIcon />
            Employee Portal
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={EMPLOYEE_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Employee Portal (opens in a new tab)"
            title="Employee Portal"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/85 hover:border-cyan/60 hover:text-white sm:hidden"
          >
            <PortalIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-900 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="space-y-1">
            <li>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="block rounded-xl px-4 py-3 text-lg font-medium text-white hover:bg-white/5">
                Home
              </Link>
            </li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(pathname, l.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium hover:bg-white/5 ${
                    isActive(pathname, l.href) ? "bg-white/5 text-cyan" : "text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-white/10 pt-6">
            <a
              href={EMPLOYEE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-white"
            >
              <span className="flex items-center gap-3 font-semibold">
                <PortalIcon className="h-5 w-5" />
                Employee Portal
              </span>
              <ArrowUpRight className="h-5 w-5 text-mist" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
