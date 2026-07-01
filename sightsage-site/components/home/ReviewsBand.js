import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import StarRating from '@/components/StarRating';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

// "OVER 1000+ REVIEWS FROM HAPPY CUSTOMERS!" band. Verbatim customer quotes
// captured from the SightSage Judge.me feeds (context/Sight Sage/reviews.md).
const REVIEWS = [
  {
    quote:
      "I'm 76 and have been using the Sight C capsules for several months. My eyes feel less dry and my night vision is better.",
    name: 'Gary',
    place: 'New York',
    product: 'SightC',
  },
  {
    quote:
      'I am now on my 3rd bottle and happy with the gummies. My eyes feel less dry and my son who has early signs of cataracts says that his vision is not as blurry now.',
    name: 'Jennifer N.',
    place: 'Alberta',
    product: 'Blueberry Gummies',
  },
  {
    quote:
      'I was having a lot of hair shedding and have noticed since taking these pills to have way less hair loss.',
    name: 'Colleen D.',
    place: 'British Columbia',
    product: 'Hair Pro',
  },
  {
    quote:
      'This product has helped me feel less bloated and stay more regular.',
    name: 'Helen G.',
    place: 'Ontario',
    product: 'Superfood Wellness Blend',
  },
  {
    quote:
      'Feeling more energized, less stressed, in a better mood. I’m on month 2 going into 3 and will continue to use this product.',
    name: 'Kiki',
    place: 'British Columbia',
    product: 'Adaptogen-X',
  },
  {
    quote:
      'I love these gummies, they taste great and help my eyes when they feel dry within a short time.',
    name: 'Christine',
    place: 'California',
    product: 'Blueberry Gummies',
  },
];

export default function ReviewsBand() {
  return (
    <section className="bg-brand py-14 text-white lg:py-20">
      <Container>
        <SectionHeading
          eyebrow=""
          title="Over 1000+ Reviews From Happy Customers!"
          className="mb-3 [&_h2]:text-white"
        />
        <div className="mb-10 flex justify-center">
          <StarRating rating={4.9} className="[&_span]:text-white/90" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="flex h-full flex-col rounded-card bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/15"
            >
              <StarRating rating={5} className="mb-3" />
              <blockquote className="flex-1 text-[15px] leading-relaxed text-white/95">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold text-white">
                {r.name}
                <span className="font-normal text-white/70">
                  {' '}
                  &mdash; {r.place}
                </span>
                <span className="mt-0.5 block text-xs font-normal uppercase tracking-wide text-white/60">
                  {r.product}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={ROUTES.reviews} variant="primary" className="bg-white text-brand hover:bg-white/90">
            View More
          </Button>
        </div>
      </Container>
    </section>
  );
}
