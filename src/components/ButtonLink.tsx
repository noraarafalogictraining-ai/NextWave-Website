import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-dark" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-electric to-[#4f7bff] text-white shadow-[0_10px_30px_-10px_rgba(31,107,255,0.7)] hover:shadow-[0_14px_36px_-10px_rgba(31,107,255,0.85)] hover:brightness-110",
  secondary: "bg-white text-navy-900 hover:bg-surface",
  "ghost-dark": "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10",
  outline: "border border-line bg-white text-ink hover:border-electric/40 hover:text-electric",
};

type Props = { href: string; children: ReactNode; variant?: Variant; arrow?: boolean; className?: string };

export default function ButtonLink({ href, children, variant = "primary", arrow = true, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
