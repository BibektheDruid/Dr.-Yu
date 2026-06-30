'use client';

import { useState } from 'react';

// items: [{ title, content }]. content optional (some rows are title-only).
export default function Accordion({ items = [], defaultOpen = null, className = '' }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`card divide-y divide-[#e7e3da] px-5 ${className}`}>
      {items.map((it, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left text-[16px] font-medium text-ink"
            aria-expanded={open === i}
          >
            <span>{it.title}</span>
            <span className="text-xl leading-none text-green">{open === i ? '−' : '+'}</span>
          </button>
          {it.content && (
            <div className={`${open === i ? 'block' : 'hidden'} pb-5 text-[15px] leading-relaxed text-body`}>
              {it.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
