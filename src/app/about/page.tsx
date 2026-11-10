import type { Metadata } from "next";
import { HeartHandshake, Target, Users, RefreshCw, Lightbulb, BookOpen, UserCheck, Search, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ButtonLink from "@/components/ButtonLink";
import DeptIllustration from "@/components/DeptIllustration";
import { company, departments, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About NextWave",
  description: "NextWave Digital is a growing B2B digital technology company that supports organizations through integrated software solutions.",
  alternates: { canonical: "/about" },
};

const valueIcons = { HeartHandshake, Target, Users, RefreshCw } as const;

const approach = [
  { step: "Understand", body: "We begin with the client's goals, processes and customers, not with a product demonstration." },
  { step: "Design", body: "We shape a practical solution from FlowOps, Customer360 and InsightIQ that fits how the client works." },
  { step: "Deliver", body: "Our Product & Operations teams implement reliably, with clear milestones and shared visibility." },
  { step: "Grow", body: "Customer Success supports adoption and helps clients get more value from their solutions over time." },
];

const culture = [
  { icon: Users, title: "Collaboration", body: "We solve problems across teams and share information openly." },
  { icon: UserCheck, title: "Ownership", body: "We take responsibility for our commitments and follow through." },
  { icon: BookOpen, title: "Learning", body: "We stay curious, learn from experience and help each other grow." },
  { icon: Search, title: "Customer understanding", body: "We invest time in understanding our customers' businesses." },
  { icon: Lightbulb, title: "Practical innovation", body: "We value ideas that solve real problems and can be delivered well." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NextWave"
        title={<>A growing technology partner for <span className="text-gradient">smarter business.</span></>}
        lead={company.summary}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      {/* WHO WE ARE */}
      <section className="py-20 sm:py-24" aria-labelledby="who-heading">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading id="who-heading" eyebrow="Who we are" title="Practical technology, connected around the way businesses work." />
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-8 text-ink-2">
            <p>
              NextWave Digital is a B2B digital technology and enterprise software company. We help organizations simplify their operations,
              understand their customers and make better business decisions using technology and data.
            </p>
            <p>
              Our business combines subscription-based software with enterprise technology services. Clients choose the solutions they
              need today — FlowOps for operations, Customer360 for customer relationships and InsightIQ for business intelligence — and
              connect them as their needs grow.
            </p>
            <p>
              We are a growing company, and we intend to grow the right way: by delivering practical solutions, keeping our promises and
              building long-term relationships with the organizations we serve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="pb-20 sm:pb-24" aria-label="Mission and vision">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { label: "Our Mission", text: company.mission },
            { label: "Our Vision", text: company.vision },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 100} className="h-full">
              <div className={`relative h-full overflow-hidden rounded-3xl p-8 sm:p-10 ${i === 0 ? "bg-navy-900 text-white" : "bg-gradient-to-br from-electric to-violet-ink text-white"}`}>
                <Quote aria-hidden className="absolute right-6 top-6 h-16 w-16 text-white/10" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{m.label}</h2>
                <p className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-[1.7rem]">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface py-20 sm:py-24" aria-labelledby="values-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="values-heading" eyebrow="Our values" title="What guides how we work." lead="Our values shape how we treat customers, how we work with each other and how we make decisions." />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[v.icon];
              return (
                <Reveal key={v.name} delay={i * 80} className="h-full">
                  <div className="h-full rounded-3xl border border-line bg-white p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet text-white">
                      <Icon aria-hidden className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-ink">{v.name}</h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-ink-2">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS APPROACH */}
      <section className="py-20 sm:py-24" aria-labelledby="approach-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="approach-heading" eyebrow="Our business approach" title="From understanding to long-term value." lead="Every client relationship follows the same principle: solve the right problem first, then make sure the solution keeps delivering value." />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.step} delay={i * 80} className="relative rounded-3xl border border-line p-7">
                <span className="font-display text-5xl font-bold text-gradient-light">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{a.step}</h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-ink-2">{a.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ORGANIZATION */}
      <section className="bg-surface py-20 sm:py-24" aria-labelledby="org-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="org-heading" eyebrow="Our organization" title="Three teams, one customer journey." lead="NextWave is organized around three core departments that work together from the first conversation with a client to long-term partnership." />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {departments.map((d, i) => (
              <Reveal key={d.id} delay={i * 90} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-4">
                  <DeptIllustration dept={d.id} />
                  <div className="flex flex-1 flex-col p-4 pt-6">
                    <h3 className="text-2xl font-semibold text-ink">{d.name}</h3>
                    <p className="mt-1 font-medium text-electric">{d.lead}</p>
                    <p className="mt-3 text-[0.95rem] leading-7 text-ink-2">{d.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {d.focus.map((f) => (
                        <li key={f} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-2">{f}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE & CULTURE */}
      <section className="py-20 sm:py-24" aria-labelledby="culture-heading">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <SectionHeading id="culture-heading" eyebrow="Our people and culture" title="A culture built for practical progress." lead="Our people are the reason clients trust us. We look for colleagues who care about customers, take ownership and enjoy learning with others." />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/careers">Life at NextWave</ButtonLink>
              <ButtonLink href="/contact" variant="outline" arrow={false}>Contact us</ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {culture.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 60} className={i === culture.length - 1 ? "sm:col-span-2" : ""}>
                <div className="flex h-full gap-4 rounded-2xl border border-line p-5">
                  <Icon aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-electric" />
                  <div>
                    <h3 className="font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink-2">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

