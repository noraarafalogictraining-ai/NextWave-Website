import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "text";

const styles: Record<Variant, string> = {
  primary:
    "min-h-12 rounded-full bg-gradient-to-r from-cyan to-[#6fe4fa] px-6 py-3 text-[#06122b] shadow-[0_12px_32px_-12px_rgb(38_213_245/0.75)] hover:shadow-[0_16px_40px_-12px_rgb(38_213_245/0.9)] hover:brightness-105",
  ghost: "min-h-12 rounded-full border border-edge-strong bg-fg/[0.04] px-6 py-3 text-fg backdrop-blur hover:border-fg/40 hover:bg-fg/[0.08]",
  text: "text-cyan hover:text-fg",
};

type Props = { href: string; children: ReactNode; variant?: Variant; arrow?: boolean; className?: string };

export default function ButtonLink({ href, children, variant = "primary", arrow = true, className = "" }: Props) {
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-2 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
