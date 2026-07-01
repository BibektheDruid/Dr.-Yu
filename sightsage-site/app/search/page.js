import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

export const metadata = { title: 'Search' };

export default function SearchPage() {
  return (
    <div className="bg-white">
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-[640px] text-center">
          <h1 className="font-head text-3xl font-bold uppercase tracking-[0.03em] text-ink sm:text-4xl">
            Search
          </h1>
          <p className="mt-4 text-body">
            Looking for something? Search our products or browse the full catalog.
          </p>

          <form action={ROUTES.search} method="get" className="mx-auto mt-8 flex max-w-[520px] gap-2">
            <label htmlFor="search-q" className="sr-only">
              Search products
            </label>
            <input
              id="search-q"
              type="search"
              name="q"
              placeholder="Search products…"
              className="w-full rounded-lg border border-brand-light bg-white px-4 py-3 text-body outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="btn-primary shrink-0"
              aria-label="Search"
            >
              Search
            </button>
          </form>

          <p className="mt-8 text-sm text-muted">
            Or{' '}
            <a
              href={ROUTES.allProducts}
              className="text-brand underline underline-offset-2 hover:text-brand-dark"
            >
              browse all products
            </a>
            .
          </p>

          <div className="mt-6">
            <Button href={ROUTES.shopAll} variant="outline">
              Shop All
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
