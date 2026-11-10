import type { Metadata } from "next";
import { Users, BookOpen, Network, TrendingUp, Sparkles, Briefcase, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { departments, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Life at NextWave Digital: our working culture, learning and development, and how we grow together.",
  alternates: { canonical: "/careers" },
};

const pillars = [
  {
    icon: Sparkles,
    title: "Life at NextWave",
    body: "NextWave is a growing company, which means real responsibility and visible impact. Our people work on solutions that clients use every day, and they see the difference their work makes.",
  },
  {
    icon: Users,
    title: "Our Working Culture",
    body: "We are practical, open and focused on outcomes. We share information, raise issues early, and expect everyone to own their commitments while supporting the people around them.",
  },
  {
    icon: BookOpen,
    title: "Learning and Development",
    body: "Our products and markets keep evolving, and so do we. Colleagues build their skills through on-the-job learning, coaching from managers and opportunities to take on new challenges.",
  },
  {
    icon: Network,
    title: "Working Across Teams",
    body: "Commercial, Product & Operations and Customer Success work closely together. Many of our best results come from colleagues who understand each other's work and solve problems jointly.",
  },
  {
    icon: TrendingUp,
    title: "Employee Growth",
    body: "We want people to grow with the company. Clear expectations, regular conversations about performance and development, and honest feedback help everyone build their career at NextWave.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Grow with a company that is <span className="text-gradient">still writing its story.</span></>}
        lead="At NextWave, you will help organizations work smarter, while working alongside colleagues who care about customers, ownership and learning."
        crumbs={[{ href: "/careers", label: "Careers" }]}
      >
        <ButtonLink href="#opportunities">Explore Opportunities</ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="life-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="life-heading" eyebrow="Working at NextWave" title="What it's like to work here." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 3) * 80} className={`h-full ${i === 0 ? "lg:row-span-2" : ""}`}>
                <div className={`h-full rounded-3xl p-8 ${i === 0 ? "bg-hero relative overflow-hidden text-white" : "border border-line bg-white"}`}>
                  {i === 0 && <div aria-hidden className="bg-grid absolute inset-0" />}
                  <div className="relative">
                    <Icon aria-hidden className={`h-8 w-8 ${i === 0 ? "text-cyan" : "text-electric"}`} />
                    <h2 className={`mt-6 font-semibold ${i === 0 ? "text-3xl" : "text-xl text-ink"}`}>{title}</h2>
                    <p className={`mt-3 leading-7 ${i === 0 ? "text-lg leading-8 text-mist" : "text-[0.95rem] text-ink-2"}`}>{body}</p>
                    {i === 0 && (
                      <ul className="mt-8 flex flex-wrap gap-2">
                        {values.map((v) => (
                          <li key={v.name} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm">{v.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24" aria-labelledby="teams-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="teams-heading" eyebrow="Our teams" title="Where you could make an impact." />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {departments.map((d, i) => (
              <Reveal key={d.id} delay={i * 80} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-white p-7">
                  <Briefcase aria-hidden className="h-6 w-6 text-electric" />
                  <h3 className="mt-5 text-xl font-semibold text-ink">{d.name}</h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-ink-2">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="scroll-mt-24 py-20 sm:py-24" aria-labelledby="opps-heading">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl rounded-[2rem] border border-line p-8 text-center sm:p-12">
            <p className="eyebrow">Explore opportunities</p>
            <h2 id="opps-heading" className="mt-3 text-3xl font-semibold text-ink">There are no open positions listed at the moment.</h2>
            <p className="mt-4 text-lg leading-8 text-ink-2">
              New opportunities are published here when they become available. If you would like to tell us about your interest in
              NextWave, you are welcome to get in touch through our contact page.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact?interest=careers" variant="outline">
                <Mail aria-hidden className="h-4 w-4" /> Get in touch
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
