'use client';

import { useEffect, useRef, useState } from 'react';

// Animated count-up (e.g. 1,200+ / 28+) that starts when scrolled into view.
export default function StatCounter({ value, suffix = '+', label, duration = 1600, dark = true, className = '' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={className}>
      <div className={`font-display text-4xl font-bold md:text-5xl ${dark ? 'text-white' : 'text-green'}`}>
        {n.toLocaleString('en-US')}
        <span>{suffix}</span>
      </div>
      {label && <div className={`mt-1 text-sm ${dark ? 'text-white/80' : 'text-muted'}`}>{label}</div>}
    </div>
  );
}
