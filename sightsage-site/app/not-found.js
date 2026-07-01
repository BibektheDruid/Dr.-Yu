import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <div className="bg-white">
      <Container className="py-20 sm:py-32">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="font-head text-6xl font-bold text-brand sm:text-7xl">404</p>
          <h1 className="mt-4 font-head text-2xl font-bold uppercase tracking-[0.03em] text-ink sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-body">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={ROUTES.home} variant="primary">
              Back to Home
            </Button>
            <Button href={ROUTES.shopAll} variant="outline">
              Shop All
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
