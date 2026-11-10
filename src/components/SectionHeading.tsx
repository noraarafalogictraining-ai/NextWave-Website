import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; lead?: ReactNode; align?: "left" | "center"; dark?: boolean; id?: string };

export default function SectionHeading({ eyebrow, title, lead, align = "left", dark, id }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg leading-8 ${dark ? "text-mist" : "text-ink-2"}`}>{lead}</p>}
    </div>
  );
}
