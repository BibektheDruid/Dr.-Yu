import Container from '@/components/Container';
import Button from '@/components/Button';
import StarRating from '@/components/StarRating';
import { ROUTES } from '@/lib/site';
import PageHero from '../_components/PageHero';

export const metadata = {
  title: 'Reviews',
  description:
    'Read what SightSage customers say. Based on 653 reviews across our eye health, hair and wellness products.',
};

const DISTRIBUTION = [
  { stars: 5, pct: 93, count: 608 },
  { stars: 4, pct: 4, count: 26 },
  { stars: 3, pct: 1, count: 9 },
  { stars: 2, pct: 0, count: 1 },
  { stars: 1, pct: 1, count: 9 },
];

const REVIEWS = [
  {
    product: 'SightC',
    name: 'Dawn S. (New York, United States)',
    title: 'Treat for the eyes',
    body: 'Been taking these for a few years. They help with the scratchy feeling I get every day.',
  },
  {
    product: 'Blueberry Gummies',
    name: 'Kathy',
    title: '',
    body: 'I take these daily. Enjoy the taste.',
  },
  {
    product: 'Superfood Wellness Blend',
    name: 'Nido (Alberta, Canada)',
    title: 'Superfood 💚',
    body: 'This product has no side effects for me. It helps prevent constipation and reduces gas. It also helps me feel full and supports weight loss. Another benefit I noticed is that it reduces hot flashes, which made a big difference for me. Thank you.',
  },
  {
    product: 'The Wellness Bundle',
    name: 'Kathy',
    title: '',
    body: 'Love these products. Game changers for energy and i dont suffer from the same bloat i had before. I bought originally to lose weight but haven’t noticed that as of yet.',
  },
  {
    product: 'Superfood Wellness Blend',
    name: 'Helen G. (Ontario, Canada)',
    title: 'Feeling great!',
    body: 'This product has helped me feel less bloated and stay more regular. Bought it for my daughter and she has felt the same benefits as well.',
  },
  {
    product: 'Superfood Wellness Blend',
    name: 'Kiki (British Columbia, Canada)',
    title: 'It Works !!!',
    body: 'This tea is honestly like nature\'s Ozempic! I’ve lost a significant amount of weight since I started drinking it. It completely curbed my cravings for sugar and salty snacks, and it leaves me feeling incredibly energetic throughout the day. A word to the wise, though: I learned the hard way that it only works if you are actively making dietary changes. If you aren\'t in a calorie deficit, the tea alone won\'t do the trick. It’s definitely on the pricey side, but in my experience, it is absolutely worth the money. If you are already putting in the work with your diet, this magic tea is a fantastic tool to help speed up the weight loss process!',
  },
  {
    product: 'SightC',
    name: 'P.W. (Texas, United States)',
    title: 'Sight C',
    body: 'After taking 2 bottles of sight C I have less floaters and my eyes are less dry. This is a definite improvement I’m 73 and will continue to take this product.',
  },
  {
    product: 'SightC',
    name: 'Anonymous (British Columbia, Canada)',
    title: 'Eyes felt brighter',
    body: 'After using Sight C for two months my eyes feel brighter and less tired. No other product is quite like this!',
  },
  {
    product: 'Superfood Wellness Blend',
    name: 'Nancy M. (Ontario, Canada)',
    title: 'Love it',
    body: 'This is my second purchase! I drink it every morning before coffee. It makes me feel good knowing that I’m helping to maintain my body. It’s a great natural product',
  },
  {
    product: 'Superfood Wellness Blend',
    name: 'Christine (California, United States)',
    title: 'Helped me lose weight, healthy',
    body: 'I had tried a lot of ways to lose weight and was really exhausted from trying so hard. This is an easy way for me to be at my natural weight and feeling very good in my digestion. Definitely a great product and it works.',
  },
  {
    product: 'Revive and Thrive Hair Bundle',
    name: 'Kiki (British Columbia, Canada)',
    title: 'Bundle you got to buy',
    body: 'These two are magic together. I was skeptical, but seeing the benefits gradually build up convinced me. I’m officially a loyal customer.',
  },
  {
    product: 'Hair Pro',
    name: 'Kiki (British Columbia, Canada)',
    title: 'Does the job',
    body: "It seems like it's working, definitely less hair fallout, I get a feeling it's a bit more thicker and stronger. I'm on month 2 going into 3 and will continue to use this product.",
  },
  {
    product: 'Adaptogen-X',
    name: 'Kiki (British Columbia, Canada)',
    title: 'Works',
    body: "Feeling more energized, less stressed, in a better mood. I'm on month 2 going into 3 and will continue to use this product.",
  },
  {
    product: 'SightC',
    name: 'Gary (New York, United States)',
    title: 'Great Sight C capsules',
    body: "I'm 76 and have been using the Sight C capsules for several months. My eyes feel less dry and my night vision is better.",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Loved by Thousands"
        title="Customer Reviews"
        subtitle="Based on 653 reviews across our eye health, hair and wellness products."
      >
        <Button href={ROUTES.shopAll} variant="outlineLight">
          Shop All Products
        </Button>
      </PageHero>

      <Container className="py-16">
        {/* Summary */}
        <div className="card mx-auto max-w-2xl p-6 sm:p-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <StarRating rating={4.9} className="scale-125" />
            <p className="text-sm font-semibold text-muted">Based on 653 reviews</p>
          </div>
          <ul className="mt-6 space-y-2">
            {DISTRIBUTION.map((d) => (
              <li key={d.stars} className="flex items-center gap-3 text-sm">
                <span className="w-10 shrink-0 font-semibold text-ink">{d.stars} ★</span>
                <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-brand-tint">
                  <span
                    className="block h-full rounded-full bg-gold"
                    style={{ width: `${d.pct}%` }}
                  />
                </span>
                <span className="w-14 shrink-0 text-right text-muted">
                  {d.pct}% ({d.count})
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Review cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article key={i} className="card flex flex-col p-6">
              <StarRating rating={5} />
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-brand">
                {r.product}
              </p>
              {r.title && (
                <h3 className="mt-1 font-head text-base font-bold text-ink">{r.title}</h3>
              )}
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">{r.body}</p>
              <p className="mt-4 text-sm font-semibold text-ink">— {r.name}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
