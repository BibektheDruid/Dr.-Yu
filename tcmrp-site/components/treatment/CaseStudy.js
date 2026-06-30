import VideoThumb from '@/components/VideoThumb';

// One patient case study panel: quote + attribution + body, with a video thumb.
export default function CaseStudy({ quote, attribution, body, youtubeUrl, thumbnail }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <VideoThumb youtubeUrl={youtubeUrl} thumbnail={thumbnail} />
      <div>
        <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
          {quote}
        </blockquote>
        <div className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">{attribution}</div>
        <p className="mt-6 text-[15px] leading-relaxed text-body">{body}</p>
      </div>
    </div>
  );
}
