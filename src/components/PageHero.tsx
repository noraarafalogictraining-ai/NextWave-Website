import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; lead?: ReactNode; children?: ReactNode; aside?: ReactNode; labelledBy?: string };

/** Hero used at the top of every inner page. */
export default function PageHero({ eyebrow, title, lead, children, aside }: Props) {
  return (
    <section className="bg-aurora relative -mt-16 overflow-hidden pt-16 lg:-mt-[76px] lg:pt-[76px]">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className={`container-x relative grid items-center gap-12 py-16 sm:py-24 lg:py-28 ${aside ? "lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div className="max-w-3xl">
          <p className="eyebrow animate-rise">
            <span aria-hidden className="h-px w-6 bg-cyan/70" />
            {eyebrow}
          </p>
          <h1 className="t-page mt-5 animate-rise [animation-delay:80ms]">{title}</h1>
          {lead && <p className="t-lead mt-6 max-w-2xl animate-rise [animation-delay:160ms]">{lead}</p>}
          {children && <div className="mt-9 animate-rise [animation-delay:240ms]">{children}</div>}
        </div>
        {aside && <div className="relative animate-rise [animation-delay:200ms]">{aside}</div>}
      </div>
    </section>
  );
}
