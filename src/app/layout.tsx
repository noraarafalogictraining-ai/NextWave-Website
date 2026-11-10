import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, company } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["400", "600", "700"] });

const description =
  "NextWave Digital helps organizations connect operations, understand customers and turn data into smarter decisions with FlowOps, Customer360 and InsightIQ.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${company.name} | ${company.slogan}`, template: `%s | ${company.name}` },
  description,
  applicationName: company.name,
  keywords: ["NextWave Digital", "B2B software", "operations management", "customer relationship management", "business intelligence", "FlowOps", "Customer360", "InsightIQ"],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} | ${company.slogan}`,
    description,
    url: "/",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: company.name }],
  },
  twitter: { card: "summary_large_image", title: company.name, description, images: ["/brand/og-image.png"] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#070E24",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/nextwave-logo-onlight.png`,
  slogan: company.slogan,
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JavaScript runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
