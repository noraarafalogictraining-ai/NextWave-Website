import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; lead?: ReactNode; align?: "left" | "center"; id?: string };

export default function SectionHeading({ eyebrow, title, lead, align = "left", id }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">
        <span aria-hidden className="h-px w-6 bg-cyan/70" />
        {eyebrow}
      </p>
      <h2 id={id} className="t-section mt-4 text-fg">{title}</h2>
      {lead && <p className="t-lead mt-5">{lead}</p>}
    </div>
  );
}
