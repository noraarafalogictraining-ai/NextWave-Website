import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical perspectives from NextWave Digital on data, customers, operations and commercial strategy.",
  alternates: { canonical: "/insights" },
};

const tones = ["from-electric to-cyan", "from-cyan-ink to-violet", "from-violet-ink to-electric", "from-electric to-violet", "from-navy-600 to-cyan-ink"];

export default function InsightsPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Ideas for <span className="text-gradient">smarter business.</span></>}
        lead="Practical perspectives from NextWave teams on turning data into decisions, building stronger customer relationships and running more effective operations."
        crumbs={[{ href: "/insights", label: "Insights" }]}
      />

      <section className="py-16 sm:py-20" aria-label="Articles">
        <div className="container-x">
          <Reveal>
            <Link href={`/insights/${featured.slug}`} className="card-glow group grid overflow-hidden md:grid-cols-[1.1fr_1fr]">
              <ArticleArt tone={tones[0]} big />
              <div className="flex flex-col p-7 sm:p-10">
                <p className="eyebrow">Featured · {featured.category}</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink">{featured.title}</h2>
                <p className="mt-4 text-lg leading-8 text-ink-2">{featured.excerpt}</p>
                <Meta author={featured.author} minutes={featured.readingMinutes} />
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-electric">
                  Read article <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 80} className="h-full">
                <Link href={`/insights/${a.slug}`} className="card-glow group flex h-full flex-col">
                  <ArticleArt tone={tones[(i + 1) % tones.length]} />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow">{a.category}</p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-ink">{a.title}</h2>
                    <p className="mt-3 leading-7 text-ink-2">{a.excerpt}</p>
                    <Meta author={a.author} minutes={a.readingMinutes} />
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-electric">
                      Read article <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to discuss these ideas with our team?" />
    </>
  );
}

function Meta({ author, minutes }: { author: string; minutes: number }) {
  return (
    <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-3">
      <span>{author}</span>
      <span className="inline-flex items-center gap-1"><Clock aria-hidden className="h-3.5 w-3.5" /> {minutes} min read</span>
    </p>
  );
}

function ArticleArt({ tone, big }: { tone: string; big?: boolean }) {
  return (
    <div aria-hidden className={`relative overflow-hidden bg-gradient-to-br ${tone} ${big ? "min-h-56 md:min-h-full" : "h-40"}`}>
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40">
        <path d="M0 150 C 70 120, 130 170, 200 120 S 330 60, 400 90" fill="none" stroke="white" strokeWidth="2" />
        <path d="M0 175 C 90 150, 160 185, 240 150 S 350 120, 400 130" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 6" />
      </svg>
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.35), transparent 45%)" }} />
    </div>
  );
}
