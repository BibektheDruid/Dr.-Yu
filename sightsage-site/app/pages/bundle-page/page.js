import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { collectionProducts } from '@/lib/catalog';
import { ROUTES } from '@/lib/site';
import PageHero from '../_components/PageHero';

export const metadata = {
  title: 'Bundles',
  description:
    'Save when you bundle. Curated SightSage bundles for eye health, hair and whole-body wellness — combining our bestselling supplements and superfoods.',
};

export default function BundlePage() {
  const bundles = collectionProducts('bundles');

  return (
    <main>
      <PageHero
        eyebrow="Better Together"
        title="SightSage Bundles"
        subtitle="Curated bundles that pair our bestselling supplements and superfoods — for eye health, hair, and whole-body wellness, at a value."
      >
        <Button href={ROUTES.shopAll} variant="outlineLight">
          Shop All Products
        </Button>
      </PageHero>

      <Container className="py-16">
        {bundles.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {bundles.map((product) => (
              <ProductCard key={product.handle} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-body">No bundles available right now.</p>
        )}
      </Container>
    </main>
  );
}
