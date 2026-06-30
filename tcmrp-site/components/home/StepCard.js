// A single numbered step in the "Our Approach" methodology section.
export default function StepCard({ number, title, children }) {
  return (
    <div className="flex gap-5">
      <div className="font-display text-3xl font-bold text-green/30 md:text-4xl">{number}</div>
      <div>
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-body">{children}</p>
      </div>
    </div>
  );
}
