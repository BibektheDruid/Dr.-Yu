'use client';

import { useState } from 'react';

// Variant selector + quantity stepper + Add to cart.
// Static replica: the cart is non-functional, so "Add to cart" links to /cart.
export default function BuyBox({ product }) {
  const variants = product.variants || [];
  const hasRealVariants =
    variants.length > 1 ||
    (variants[0] && variants[0].title && variants[0].title !== 'Default Title');
  const [variantId, setVariantId] = useState(variants[0]?.id);
  const [qty, setQty] = useState(1);

  const selected = variants.find((v) => v.id === variantId) || variants[0];
  const available = selected ? selected.available : product.available;

  return (
    <div className="mt-6 flex flex-col gap-5">
      {hasRealVariants && (
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          {product.options?.[0]?.name || 'Option'}
          <select
            value={variantId}
            onChange={(e) => setVariantId(Number(e.target.value))}
            className="w-full max-w-xs rounded-lg border border-[#d6cee2] bg-white px-4 py-3 text-[15px] font-normal text-body focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          >
            {variants.map((v) => (
              <option key={v.id} value={v.id} disabled={!v.available}>
                {v.title}
                {!v.available ? ' — Sold out' : ''}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="flex flex-wrap items-stretch gap-3">
        <div className="inline-flex items-center rounded-lg border border-[#d6cee2] bg-white">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-12 w-11 items-center justify-center text-xl text-brand hover:bg-brand-light"
          >
            −
          </button>
          <span className="w-10 text-center text-[15px] font-semibold text-ink" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="flex h-12 w-11 items-center justify-center text-xl text-brand hover:bg-brand-light"
          >
            +
          </button>
        </div>

        <a
          href="/cart"
          aria-disabled={!available}
          className={`btn flex-1 min-w-[200px] ${
            available
              ? 'bg-brand text-white hover:bg-brand-dark'
              : 'pointer-events-none cursor-not-allowed bg-[#cfc7dc] text-white'
          }`}
        >
          {available ? 'Add to cart' : 'Sold out'}
        </a>
      </div>

      <p className="text-sm text-muted">
        {available ? 'In stock — ships from our Vancouver, BC warehouse.' : 'Currently unavailable.'}
      </p>
    </div>
  );
}
