// Small uppercase, letter-spaced label with a leading rule — used above section headings.
export default function Eyebrow({ children, tone = 'gold', className = '' }) {
  const color = tone === 'green' ? 'text-green' : tone === 'light' ? 'text-white/80' : 'text-gold';
  return (
    <span className={`eyebrow ${color} ${className}`}>
      <span aria-hidden="true" className="inline-block h-px w-6 bg-current opacity-70" />
      {children}
    </span>
  );
}
