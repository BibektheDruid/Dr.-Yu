import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import ListenToThis from '@/components/ListenToThis';

export const metadata = {
  title: { absolute: 'Blog - Wellspring Clinic' },
  description: 'News and articles from the Wellspring Clinic.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" align="center" />

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-body">It seems we can&rsquo;t find what you&rsquo;re looking for.</p>
            </div>
            <aside className="md:col-span-1">
              <div className="card p-6">
                <h2 className="font-display text-2xl text-ink">Categories</h2>
                <p className="mt-3 text-body">No categories</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
