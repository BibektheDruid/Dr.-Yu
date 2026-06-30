// Simple icon/feature card (WVIP protocol cards, location cards, etc.).
export default function IconCard({ icon, iconAlt = '', title, children, className = '' }) {
  return (
    <div className={`card p-6 ${className}`}>
      {icon && <img src={icon} alt={iconAlt} className="h-12 w-12" />}
      {title && <h3 className="mt-4 font-display text-xl text-ink">{title}</h3>}
      {children && <div className="mt-2 text-[15px] leading-relaxed text-body">{children}</div>}
    </div>
  );
}
