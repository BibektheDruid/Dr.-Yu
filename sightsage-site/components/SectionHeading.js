// Centered section heading with optional uppercase eyebrow.
export default function SectionHeading({ eyebrow, title, className = '', align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`${alignCls} ${className}`}>
      {eyebrow && <p className="eyebrow mb-2 justify-center">{eyebrow}</p>}
      {title && (
        <h2 className="font-head text-2xl font-bold uppercase tracking-[0.03em] text-ink sm:text-3xl">
          {title}
        </h2>
      )}
    </div>
  );
}
