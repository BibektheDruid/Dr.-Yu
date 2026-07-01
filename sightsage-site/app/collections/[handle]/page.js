import Link from 'next/link';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import { collections, getCollection, collectionProducts } from '@/lib/catalog';

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export function generateMetadata({ params }) {
  const collection = getCollection(params.handle);
  if (!collection) return { title: 'Collection' };
  return {
    title: collection.title,
    description: `Shop ${collection.title} from SightSage — holistic natural health & wellness.`,
  };
}

export default function CollectionPage({ params }) {
  const collection = getCollection(params.handle);
  if (!collection) {
    return (
      <Container className="py-24 text-center">
        <h1 className="font-head text-2xl font-bold uppercase">Collection not found</h1>
        <Link href="/collections/all" className="mt-4 inline-block text-brand underline">
          Browse all products
        </Link>
      </Container>
    );
  }

  const items = collectionProducts(collection.handle);

  return (
    <div className="pb-20">
      {/* Title */}
      <Container className="pt-10 pb-2 text-center">
        <h1 className="font-head text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
          {collection.title}
        </h1>
      </Container>

      {/* Filter / count / sort bar */}
      <Container className="border-b border-[#ece7f1] pb-4">
        <div className="flex items-center justify-between text-sm text-muted">
          <span className="inline-flex items-center gap-1.5 font-semibold text-ink/80">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 5h18M6 12h12M10 19h4" />
            </svg>
            Filter
          </span>
          <span className="text-muted">
            {items.length} product{items.length === 1 ? '' : 's'}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-ink/80">
            Featured
            <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5 7l5 5 5-5z" />
            </svg>
          </span>
        </div>
      </Container>

      {/* Product grid */}
      <Container className="pt-8">
        {items.length ? (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {items.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-muted">No products in this collection yet.</p>
        )}
      </Container>
    </div>
  );
}
