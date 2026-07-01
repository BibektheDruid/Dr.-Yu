import Container from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import ProductCarousel from '@/components/ProductCarousel';
import Hero from '@/components/home/Hero';
import IntroBand from '@/components/home/IntroBand';
import ReviewsBand from '@/components/home/ReviewsBand';
import ValuesTrio from '@/components/home/ValuesTrio';
import FounderBand from '@/components/home/FounderBand';
import BlogPosts from '@/components/home/BlogPosts';
import { collectionProducts } from '@/lib/catalog';

export const metadata = {
  title: 'Holistic Natural Health & Wellness',
  description:
    'Discover natural weight management, hair, & eye health supplements formulated by 40+ years of clinical experience of Dr. Weidong Yu and Kathy (from KathyHealthTips).',
};

export default function HomePage() {
  const bestsellers = collectionProducts('bestsellers');

  return (
    <>
      <Hero />
      <IntroBand />
      <ProductCarousel
        products={bestsellers}
        eyebrow="Shop our favourites"
        title="Bestsellers"
        className="bg-white"
      />
      <ReviewsBand />
      <ValuesTrio />
      <FounderBand />
      <BlogPosts />

      <section className="hero-brand py-14 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Newsletter className="[&_form]:mx-auto [&_p]:mx-auto [&_p]:max-w-md" />
          </div>
        </Container>
      </section>
    </>
  );
}
