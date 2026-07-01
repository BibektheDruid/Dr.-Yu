'use client';

// "Stay in the loop" newsletter signup block (static replica — non-functional).
export default function Newsletter({ className = '' }) {
  return (
    <div className={className}>
      <h3 className="font-head text-lg font-bold uppercase tracking-[0.04em] text-white">
        Stay in the Loop
      </h3>
      <p className="mt-2 text-sm text-white/80">
        Sign up for wellness tips, new products, and exclusive offers.
      </p>
      <form
        className="mt-4 flex max-w-md gap-2"
        action="#"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-[8px] border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-[8px] bg-white px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand-light"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
