// Numbered step row for "The Patient Journey: Step By Step" (01–04).
export default function JourneyStep({ number, title, children }) {
  return (
    <div className="flex gap-6 border-t border-sand py-7 first:border-t-0">
      <div className="shrink-0 font-display text-2xl text-green md:text-3xl">{number}</div>
      <div>
        <h3 className="font-display text-xl text-ink md:text-2xl">{title}</h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-body">{children}</p>
      </div>
    </div>
  );
}
