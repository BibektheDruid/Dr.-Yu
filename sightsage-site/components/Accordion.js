'use client';

import { useState } from 'react';

function Chevron({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 text-brand transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

// items: [{ title, content }]. content may be a string (HTML), JSX, or omitted.
// `single` (default true) keeps only one panel open at a time.
export default function Accordion({ items = [], single = true, defaultOpen = null, className = '' }) {
  const [open, setOpen] = useState(() => (defaultOpen != null ? [defaultOpen] : []));

  const toggle = (i) => {
    setOpen((prev) => {
      const isOpen = prev.includes(i);
      if (single) return isOpen ? [] : [i];
      return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
    });
  };

  return (
    <div className={`overflow-hidden rounded-card border border-[#ece7f1] bg-white shadow-soft ${className}`}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} className="border-b border-[#ece7f1] last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-head text-[16px] font-semibold text-ink"
              aria-expanded={isOpen}
            >
              <span>{it.title}</span>
              <Chevron open={isOpen} />
            </button>
            {it.content != null && (
              <div className={`${isOpen ? 'block' : 'hidden'} px-5 pb-5 text-[15px] leading-relaxed text-body`}>
                {typeof it.content === 'string' ? (
                  <div className="rte" dangerouslySetInnerHTML={{ __html: it.content }} />
                ) : (
                  it.content
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
