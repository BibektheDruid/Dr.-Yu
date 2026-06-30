// A treatment-period season card used in the Treatment Schedule columns.
export default function SeasonCard({ season, range }) {
  return (
    <div className="card flex items-center justify-between gap-4 px-4 py-3">
      <span className="font-display text-[15px] text-ink">{season}</span>
      <span className="text-[13px] text-muted">{range}</span>
    </div>
  );
}
