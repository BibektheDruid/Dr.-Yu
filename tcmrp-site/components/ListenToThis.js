'use client';

import { useState, useEffect } from 'react';

// Faithful "Listen To This" pill. Uses the Web Speech API to read the enclosing
// <section> (or provided text). Degrades to an inert pill where unsupported.
export default function ListenToThis({ text, tone = 'light', className = '' }) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const toggle = (e) => {
    if (!supported) return;
    const synth = window.speechSynthesis;
    if (playing) {
      synth.cancel();
      setPlaying(false);
      return;
    }
    synth.cancel();
    let content = text;
    if (!content) {
      const sec = e.currentTarget.closest('section') || e.currentTarget.parentElement;
      content = sec ? sec.innerText : '';
    }
    if (!content) return;
    const u = new SpeechSynthesisUtterance(content);
    u.rate = 1;
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
    synth.speak(u);
    setPlaying(true);
  };

  const base =
    'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors';
  const styles =
    tone === 'light'
      ? 'bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25'
      : 'bg-white text-ink shadow-soft ring-1 ring-[#e7e3da] hover:ring-green';

  return (
    <button type="button" onClick={toggle} className={`${base} ${styles} ${className}`} aria-pressed={playing}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={tone === 'light' ? '' : 'text-green'}>
        <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 00-2.5-4.03v8.06A4.5 4.5 0 0016.5 12zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      </svg>
      {playing ? 'Stop' : 'Listen To This'}
    </button>
  );
}
