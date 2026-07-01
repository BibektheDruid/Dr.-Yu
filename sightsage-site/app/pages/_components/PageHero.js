// Page-local hero header for SightSage content pages.
// Brand-purple band with optional eyebrow, uppercase Cabin title and lede.
import Container from '@/components/Container';

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="hero-brand text-white">
      <Container className="py-14 text-center sm:py-20">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="font-head text-3xl font-bold uppercase tracking-[0.03em] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>}
      </Container>
    </section>
  );
}
