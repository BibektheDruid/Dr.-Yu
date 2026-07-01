import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

export const metadata = { title: 'Your Cart' };

export default function CartPage() {
  return (
    <div className="bg-white">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-[640px] text-center">
          <h1 className="font-head text-3xl font-bold uppercase tracking-[0.03em] text-ink sm:text-4xl">
            Your Cart
          </h1>
          <p className="mt-6 text-lg text-body">Your cart is currently empty.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={ROUTES.shopAll} variant="primary">
              Continue Shopping
            </Button>
            <Button href={ROUTES.bundlePage} variant="outline">
              Browse Bundles
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
