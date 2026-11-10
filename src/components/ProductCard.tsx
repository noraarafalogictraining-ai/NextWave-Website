import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import ProductMark, { accentClasses } from "./ProductMark";

export default function ProductCard({ product, showFeatures = true }: { product: Product; showFeatures?: boolean }) {
  const a = accentClasses[product.accent];
  return (
    <Link
      href={`/solutions/${product.slug}`}
      className={`card-glow group flex h-full flex-col p-7 ring-1 ring-transparent ${a.ring}`}
      aria-label={`${product.name} — ${product.category}. Learn more`}
    >
      <div aria-hidden className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${a.soft} blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60`} />
      <ProductMark product={product} />
      <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${a.text}`}>{product.category}</p>
      <h3 className="mt-2 text-2xl font-semibold text-ink">{product.name}</h3>
      <p className="mt-2 font-medium text-ink">{product.tagline}</p>
      <p className="mt-3 text-[0.95rem] leading-7 text-ink-2">{product.summary}</p>
      {showFeatures && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((f) => (
            <li key={f.title} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-2">{f.title}</li>
          ))}
        </ul>
      )}
      <span className={`mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold ${a.text}`}>
        Explore {product.name}
        <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
