import VideoThumb from '@/components/VideoThumb';

// A single patient story panel: video on the left, quote + attribution + paragraph on the right.
export default function StoryPanel({ youtubeUrl, thumbnail, quote, name, body }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <VideoThumb youtubeUrl={youtubeUrl} thumbnail={thumbnail} />
      <div>
        <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-[28px]">
          {quote}
        </blockquote>
        <div className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">{name}</div>
        <p className="mt-5 text-body">{body}</p>
      </div>
    </div>
  );
}
