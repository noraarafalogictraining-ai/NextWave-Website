import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageSquare, Presentation, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to the NextWave Digital team about FlowOps, Customer360, InsightIQ or a connected solution for your organization.",
  alternates: { canonical: "/contact" },
};

const reasons = [
  { icon: Presentation, title: "Request a demonstration", body: "See how FlowOps, Customer360 or InsightIQ could work for your teams." },
  { icon: MessageSquare, title: "Discuss a business challenge", body: "Tell us what you want to improve and we will suggest a practical starting point." },
  { icon: Handshake, title: "Explore a partnership", body: "Share how you would like to work with NextWave." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Let&rsquo;s talk about <span className="text-gradient">your business.</span></>}
        lead="Whether you are exploring a single solution or a connected digital ecosystem, our team is ready to understand your goals."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-ink">How we can help</h2>
            <ul className="mt-6 space-y-4">
              {reasons.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-line p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-ink-2">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_30px_80px_-40px_rgba(13,21,48,0.35)] sm:p-10">
            <h2 className="text-2xl font-semibold text-ink">Send us a message</h2>
            <p className="mt-2 text-ink-2">Share a few details and the right member of our team will follow up.</p>
            <div className="mt-8">
              <Suspense fallback={<div className="h-[560px]" aria-hidden />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
