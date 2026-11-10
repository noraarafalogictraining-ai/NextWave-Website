import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import PortalIcon from "./PortalIcon";
import { EMPLOYEE_PORTAL_URL, company } from "@/lib/site";
import { products } from "@/lib/products";

const companyLinks = [
  { href: "/about", label: "About NextWave" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-mist">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div className="max-w-sm">
          <Logo variant="dark" className="h-10 w-auto" />
          <p className="mt-5 font-display text-lg font-semibold text-white">{company.slogan}</p>
          <p className="mt-3 text-sm leading-6">
            Practical digital solutions that connect operations, customer relationships and business intelligence.
          </p>
        </div>

        <nav aria-label="Solutions">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Solutions</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link className="hover:text-white" href="/solutions">All solutions</Link></li>
            {products.map((p) => (
              <li key={p.slug}>
                <Link className="hover:text-white" href={`/solutions/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}><Link className="hover:text-white" href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Employee Access</h2>
          <p className="mt-5 text-sm leading-6">Internal systems for NextWave employees.</p>
          <a
            href={EMPLOYEE_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan/50"
          >
            <PortalIcon />
            NextWave Performance Hub
            <ArrowUpRight aria-hidden className="h-4 w-4 text-mist transition group-hover:text-cyan" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Smarter technology for operations, customers and data.</p>
        </div>
      </div>
    </footer>
  );
}
