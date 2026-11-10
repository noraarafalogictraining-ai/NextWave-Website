import { Workflow, Users, BarChart3 } from "lucide-react";
import type { Product, ProductSlug } from "@/lib/products";

export const productIcon: Record<ProductSlug, typeof Workflow> = {
  flowops: Workflow,
  customer360: Users,
  insightiq: BarChart3,
};

export const accentClasses: Record<Product["accent"], { tile: string; text: string; soft: string; ring: string }> = {
  blue: { tile: "from-electric to-[#4f7bff]", text: "text-electric", soft: "bg-electric/10", ring: "group-hover:ring-electric/30" },
  cyan: { tile: "from-cyan-ink to-cyan", text: "text-cyan-ink", soft: "bg-cyan/15", ring: "group-hover:ring-cyan/40" },
  violet: { tile: "from-violet-ink to-violet", text: "text-violet-ink", soft: "bg-violet/10", ring: "group-hover:ring-violet/30" },
};

export default function ProductMark({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const Icon = productIcon[product.slug];
  const s = size === "lg" ? "h-16 w-16 rounded-2xl" : "h-12 w-12 rounded-xl";
  return (
    <span aria-hidden className={`inline-flex ${s} items-center justify-center bg-gradient-to-br ${accentClasses[product.accent].tile} text-white shadow-lg shadow-electric/20`}>
      <Icon className={size === "lg" ? "h-8 w-8" : "h-6 w-6"} />
    </span>
  );
}
