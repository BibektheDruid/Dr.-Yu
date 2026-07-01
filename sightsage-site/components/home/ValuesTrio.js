import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

// "AT SIGHTSAGE WE ARE" values trio. Pillars drawn from the captured brand
// positioning (natural / whole-food, clinically rooted, made in Canada).
const VALUES = [
  {
    title: '100% Natural',
    body: 'Whole-food and food-grade herbal formulas with no unnecessary additives, sweeteners or fillers.',
    icon: 'M12 2C7 7 5 10 5 14a7 7 0 0 0 14 0c0-4-2-7-7-12Z',
  },
  {
    title: 'Clinically Rooted',
    body: 'Developed from 40+ years of Traditional Chinese Medicine clinical experience treating eye and whole-body health.',
    icon: 'M9 3v4H5l7 14 7-14h-4V3H9Z',
  },
  {
    title: 'Made in Canada',
    body: 'Crafted in British Columbia, Canada, with carefully sourced, non-GMO ingredients for purity and efficacy.',
    icon: 'M12 2 9 9H4l4 5-2 8 6-4 6 4-2-8 4-5h-5l-3-7Z',
  },
];

export default function ValuesTrio() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <SectionHeading eyebrow="Our promise" title="At SightSage We Are" className="mb-10" />
        <div className="grid gap-8 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="flex flex-col items-center text-center">
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                  <path d={v.icon} />
                </svg>
              </span>
              <h3 className="font-head text-lg font-bold uppercase tracking-[0.03em] text-ink">
                {v.title}
              </h3>
              <p className="mt-2 max-w-xs text-[15px] text-body">{v.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
