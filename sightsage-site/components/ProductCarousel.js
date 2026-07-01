import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';

// Horizontal scroll row of product cards (no JS lib). Falls back to a grid feel
// via snap scrolling on mobile and even spacing on desktop.
export default function ProductCarousel({ products = [], title, eyebrow, className = '' }) {
  if (!products.length) return null;
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <Container>
        {(title || eyebrow) && <SectionHeading eyebrow={eyebrow} title={title} className="mb-8" />}
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 xl:grid-cols-5">
          {products.map((p) => (
            <div
              key={p.handle}
              className="w-[72%] shrink-0 snap-start sm:w-[44%] md:w-[30%] lg:w-auto"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
