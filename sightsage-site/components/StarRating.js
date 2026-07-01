// Gold star rating with optional "(N reviews)" label.
// Renders nothing if rating is null/undefined.
function Star({ idx, fill = 1 }) {
  // fill: 1 = full, 0.5 = half, 0 = empty
  const id = `star-grad-${idx}`;
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#f4a400" />
          <stop offset={`${fill * 100}%`} stopColor="#e3ddd2" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77 4.8 17.5l.99-5.78L1.58 7.62l5.82-.85L10 1.5z"
        fill={fill === 1 ? '#f4a400' : fill === 0 ? '#e3ddd2' : `url(#${id})`}
      />
    </svg>
  );
}

export default function StarRating({ rating, count = null, className = '' }) {
  if (rating == null) return null;
  const stars = [0, 1, 2, 3, 4].map((i) => {
    const v = rating - i;
    return v >= 1 ? 1 : v >= 0.5 ? 0.5 : 0;
  });
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="flex items-center gap-0.5">
        {stars.map((f, i) => (
          <Star key={i} idx={i} fill={f} />
        ))}
      </span>
      {count != null && (
        <span className="text-sm text-muted">{count} {count === 1 ? 'review' : 'reviews'}</span>
      )}
    </span>
  );
}
