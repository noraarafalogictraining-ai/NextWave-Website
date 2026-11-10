import ButtonLink from "./ButtonLink";

type Props = { title?: string; lead?: string; cta?: string; href?: string };

export default function CtaBand({
  title = "Ready to Move Your Business Forward?",
  lead = "Tell us about your goals. Our team will help you find the right combination of NextWave solutions for your organization.",
  cta = "Contact Our Team",
  href = "/contact",
}: Props) {
  return (
    <section className="container-x py-20 sm:py-24">
      <div className="bg-hero relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div aria-hidden className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-mist">{lead}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={href}>{cta}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
