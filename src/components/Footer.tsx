import Link from "next/link";
import Logo from "./Logo";
import { company, facts, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-edge bg-deep">
      <div aria-hidden className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-violet/10 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.3fr]">
        <div className="max-w-sm">
          <Logo className="h-10 w-auto" />
          <p className="mt-5 font-display text-lg font-semibold text-fg">{company.slogan}</p>
          <p className="mt-3 text-sm leading-6 text-fg-2">{company.plain}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="t-label text-fg-3">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-fg-2 transition hover:text-fg">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="t-label text-fg-3">Company</h2>
          <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {facts.map((f) => (
              <div key={f.id}>
                <dt className="text-fg-3">{f.label}</dt>
                <dd className="mt-0.5 text-fg-2">{f.display}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-edge">
        <div className="container-x py-6 text-xs text-fg-3">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
