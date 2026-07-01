import Link from 'next/link';
import Container from '@/components/Container';
import Price from '@/components/Price';
import StarRating from '@/components/StarRating';
import Accordion from '@/components/Accordion';
import RichText from '@/components/RichText';
import SectionHeading from '@/components/SectionHeading';
import ProductCarousel from '@/components/ProductCarousel';
import { products, getProduct, collections, collectionProducts } from '@/lib/catalog';
import Gallery from './Gallery';
import BuyBox from './BuyBox';
import { getProductExtras } from './productExtras';

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.handle);
  if (!product) return { title: 'Product' };
  return {
    title: product.title,
    description: `${product.title} — ${product.vendor || 'SightSage'}.`,
  };
}

// First collection (other than the "all"/"shop-all" catch-alls) that contains
// this product — used for the breadcrumb and the related-products row.
function primaryCollection(handle) {
  const skip = new Set(['all', 'shop-all']);
  return (
    collections.find((c) => !skip.has(c.handle) && c.productHandles.includes(handle)) ||
    null
  );
}

export default function ProductPage({ params }) {
  const product = getProduct(params.handle);
  if (!product) {
    return (
      <Container className="py-24 text-center">
        <h1 className="font-head text-2xl font-bold uppercase">Product not found</h1>
        <Link href="/collections/all" className="mt-4 inline-block text-brand underline">
          Browse all products
        </Link>
      </Container>
    );
  }

  const extras = getProductExtras(product.handle);
  const collection = primaryCollection(product.handle);
  const related = collection
    ? collectionProducts(collection.handle).filter((p) => p.handle !== product.handle).slice(0, 5)
    : [];

  const accordionItems = [];
  if (extras?.benefits?.length) {
    accordionItems.push({
      title: 'Benefits',
      content: (
        <ul className="list-disc space-y-1.5 pl-5">
          {extras.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ),
    });
  }
  accordionItems.push({ title: 'Description', content: product.description_html });

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <Container className="pt-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span className="px-2">/</span>
          {collection && (
            <>
              <Link href={collection.url} className="hover:text-brand">{collection.title}</Link>
              <span className="px-2">/</span>
            </>
          )}
          <span className="text-ink">{product.title}</span>
        </nav>
      </Container>

      {/* Gallery + info */}
      <Container className="grid grid-cols-1 gap-10 pt-6 lg:grid-cols-2 lg:gap-14">
        <Gallery images={product.images} title={product.title} />

        <div>
          {product.vendor && (
            <p className="eyebrow mb-3">{product.vendor}</p>
          )}
          <h1 className="font-head text-3xl font-bold uppercase leading-tight tracking-[0.01em] text-ink sm:text-4xl">
            {product.title}
          </h1>

          {product.rating != null && (
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.review_count} />
            </div>
          )}

          <div className="mt-4">
            <Price cents={product.price} compareAtCents={product.compare_at_price} className="text-2xl" />
          </div>

          {extras?.benefits?.length > 0 && (
            <ul className="mt-6 space-y-2 text-[15px] text-body">
              {extras.benefits.slice(0, 4).map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[2px] text-success">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <BuyBox product={product} />

          <div className="mt-8">
            <Accordion items={accordionItems} single defaultOpen={0} />
          </div>
        </div>
      </Container>

      {/* Ingredient grid */}
      {extras?.ingredients?.length > 0 && (
        <Container className="pt-16">
          <SectionHeading eyebrow="What's Inside" title="Key Ingredients" className="mb-8" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {extras.ingredients.map((ing, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-head text-lg font-bold text-ink">{ing.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{ing.note}</p>
              </div>
            ))}
          </div>
        </Container>
      )}

      {/* Per-product FAQ */}
      {extras?.faqs?.length > 0 && (
        <Container className="pt-16">
          <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" className="mb-8" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={extras.faqs.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))} single />
          </div>
        </Container>
      )}

      {/* Customer reviews summary */}
      {product.rating != null && (
        <Container className="pt-16">
          <SectionHeading title="Customer Reviews" className="mb-8" />
          <div className="card mx-auto flex max-w-3xl flex-col items-center gap-3 p-10 text-center">
            <p className="font-head text-5xl font-bold text-ink">{product.rating.toFixed(2)}</p>
            <StarRating rating={product.rating} />
            <p className="text-sm text-muted">
              Based on {product.review_count} verified review{product.review_count === 1 ? '' : 's'}
            </p>
          </div>
        </Container>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <ProductCarousel
          products={related}
          eyebrow="You May Also Like"
          title={`More from ${collection.title}`}
          className="pt-8"
        />
      )}
    </div>
  );
}
