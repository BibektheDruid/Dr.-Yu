import PageHero from '@/components/PageHero';

export const metadata = { title: { absolute: 'Repeatable CTA Blocks - Wellspring Clinic' }, robots: { index: false } };

// Internal Elementor CTA-block container on the original site (not linked in nav).
// Placeholder — low priority; build agent may flesh out if needed.
export default function RepeatableCtaBlocksPage() {
  return (
    <>
      <PageHero align="center" title="Repeatable CTA Blocks" />
      <section className="container-tight py-16">
        <p className="text-muted">Content is being assembled by the build team.</p>
      </section>
    </>
  );
}
