'use client';

import { useState } from 'react';

// tabs: [{ label, content }]
export default function Tabs({ tabs = [], className = '' }) {
  const [active, setActive] = useState(0);
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-6 border-b border-[#e7e3da]" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`-mb-px border-b-2 pb-3 text-[15px] font-medium transition-colors ${
              active === i ? 'border-green text-green' : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-8">
        {tabs.map((t, i) => (
          <div key={i} className={i === active ? 'block' : 'hidden'}>
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
