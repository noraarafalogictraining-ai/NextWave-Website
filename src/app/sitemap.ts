import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { products } from "@/lib/products";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/solutions", "/industries", "/insights", "/careers", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...products.map((p) => ({ url: `${SITE_URL}/solutions/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((a) => ({ url: `${SITE_URL}/insights/${a.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
