import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="container-x relative py-28 text-center">
        <p className="eyebrow-dark">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">We couldn&rsquo;t find that page.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-mist">The page may have moved, or the address may be incorrect.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/solutions" variant="ghost-dark">Explore solutions</ButtonLink>
        </div>
      </div>
    </section>
  );
}
