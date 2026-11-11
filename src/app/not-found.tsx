import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-aurora relative -mt-16 overflow-hidden pt-16 lg:-mt-[76px] lg:pt-[76px]">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="container-x relative py-32 text-center">
        <p className="eyebrow justify-center">Page not found</p>
        <h1 className="t-page mt-5">We couldn&rsquo;t find that page.</h1>
        <p className="t-lead mx-auto mt-5 max-w-xl">The page may have moved, or the address may be incorrect.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/solutions" variant="ghost" arrow={false}>Our Solutions</ButtonLink>
        </div>
      </div>
    </section>
  );
}
