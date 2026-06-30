'use client';

import { useState } from 'react';

function ytId(url) {
  if (!url) return null;
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

// Video thumbnail with a play overlay; opens a YouTube lightbox on click.
export default function VideoThumb({ youtubeUrl, thumbnail, label = 'Watch Video', className = '' }) {
  const [open, setOpen] = useState(false);
  const id = ytId(youtubeUrl);
  const thumb = thumbnail || (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined);

  return (
    <>
      <button
        type="button"
        onClick={() => id && setOpen(true)}
        className={`group relative block w-full overflow-hidden rounded-xl bg-black/5 ${className}`}
        aria-label={label}
      >
        {thumb && <img src={thumb} alt="" className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-2 rounded-full bg-black/65 px-4 py-2 text-sm font-medium text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            {label}
          </span>
        </span>
      </button>

      {open && id && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="h-full w-full rounded-lg"
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title="Patient story video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
