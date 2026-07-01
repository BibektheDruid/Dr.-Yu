'use client';

import { useState } from 'react';

// Product image gallery: large main image + thumbnail rail.
export default function Gallery({ images = [], title }) {
  const list = images.length ? images : [];
  const [active, setActive] = useState(0);
  if (!list.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-card border border-[#ece7f1] bg-cream">
        <img
          src={list[active]}
          alt={title}
          loading="eager"
          className="aspect-square w-full object-contain"
        />
      </div>
      {list.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {list.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1} of ${title}`}
              aria-current={i === active}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border bg-cream transition-colors sm:h-20 sm:w-20 ${
                i === active ? 'border-brand ring-1 ring-brand' : 'border-[#ece7f1] hover:border-brand/50'
              }`}
            >
              <img
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
