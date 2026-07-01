// Formats Shopify cents → CAD currency, e.g. 7100 → "$71.00".
// Shows a struck compare-at price when present and higher than the price.
function fmt(cents) {
  return '$' + (cents / 100).toFixed(2);
}

export default function Price({ cents, compareAtCents = null, className = '' }) {
  if (cents == null) return null;
  const hasCompare = compareAtCents != null && compareAtCents > cents;
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-bold text-ink">{fmt(cents)}</span>
      {hasCompare && (
        <span className="text-sm font-normal text-muted line-through">{fmt(compareAtCents)}</span>
      )}
    </span>
  );
}
