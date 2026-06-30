// Reusable disclaimer card (Patient Stories). Default copy matches the original verbatim.
export default function DisclaimerCard({
  label = 'DISCLAIMER',
  text = 'While these are the actual documented journeys of our real patients, we cannot guarantee that everyone who undergoes the protocol will have similar results. Each case of Retinitis Pigmentosa is unique and, thus, results may vary.',
  className = '',
}) {
  return (
    <div className={`card flex gap-3 p-5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="2" className="mt-0.5 shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="0.6" fill="#b8962e" stroke="none" />
      </svg>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{label}</div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-body">{text}</p>
      </div>
    </div>
  );
}
