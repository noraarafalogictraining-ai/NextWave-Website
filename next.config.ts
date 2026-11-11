import path from "node:path";
import type { NextConfig } from "next";

// This project is self-contained; pin the workspace root to this folder.
const root = path.resolve(process.cwd());

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingRoot: root,
  turbopack: { root },
  images: { formats: ["image/avif", "image/webp"] },
  // Earlier URLs keep working after the move to four pages.
  async redirects() {
    return [
      { source: "/solutions/flowops", destination: "/solutions#nextwave-one", permanent: true },
      { source: "/solutions/customer360", destination: "/solutions#nextwave-one", permanent: true },
      { source: "/solutions/insightiq", destination: "/solutions#nextwave-insights", permanent: true },
      { source: "/solutions/:slug", destination: "/solutions", permanent: true },
      { source: "/industries", destination: "/solutions", permanent: true },
      { source: "/insights/:path*", destination: "/solutions", permanent: true },
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/contact", destination: "/about", permanent: true },
      { source: "/company", destination: "/about", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
