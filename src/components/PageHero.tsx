import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { href: string; label: string };
type Props = { eyebrow: string; title: ReactNode; lead?: ReactNode; crumbs?: Crumb[]; children?: ReactNode; aside?: ReactNode };

export default function PageHero({ eyebrow, title, lead, crumbs, children, aside }: Props) {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className={`container-x relative grid items-center gap-12 py-16 sm:py-20 lg:py-24 ${aside ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}>
        <div className="max-w-3xl">
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-mist">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                {crumbs.map((c) => (
                  <li key={c.href} className="flex items-center gap-1">
                    <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                    <Link href={c.href} className="hover:text-white">{c.label}</Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <p className="eyebrow-dark">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">{lead}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {aside && <div className="relative">{aside}</div>}
      </div>
    </section>
  );
}
