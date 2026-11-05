export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
