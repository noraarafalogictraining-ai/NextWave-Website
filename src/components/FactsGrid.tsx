import { CalendarDays, MapPin, Users, Globe2 } from "lucide-react";
import Counter from "./Counter";
import Reveal from "./Reveal";
import { facts } from "@/lib/content";

const icons = { founded: CalendarDays, hq: MapPin, employees: Users, markets: Globe2 } as const;

/** Established company facts with animated counters where the value is numeric. */
export default function FactsGrid() {
  return (
    <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f, i) => {
        const Icon = icons[f.id as keyof typeof icons];
        return (
          <Reveal key={f.id} delay={i * 80} className="h-full">
            <div className="surface relative flex h-full flex-col overflow-hidden p-7">
              <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/10 blur-2xl" />
              <Icon aria-hidden className="h-6 w-6 text-cyan" />
              <dt className="t-label mt-6 text-fg-3">{f.label}</dt>
              <dd className="mt-2 font-display font-semibold text-fg">
                {f.kind === "year" && <Counter to={f.value!} from={2000} className="text-5xl tracking-tight" />}
                {f.kind === "number" && (
                  <>
                    <Counter to={f.value!} prefix={f.prefix} className="text-5xl tracking-tight" />
                    <span className="mt-2 block font-sans text-sm font-normal text-fg-2">Approximately 650 employees</span>
                  </>
                )}
                {f.kind === "text" && <span className="block text-2xl leading-snug">{f.display}</span>}
              </dd>
            </div>
          </Reveal>
        );
      })}
    </dl>
  );
}
