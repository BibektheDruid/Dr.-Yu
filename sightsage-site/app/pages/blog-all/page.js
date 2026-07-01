import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';
import PageHero from '../_components/PageHero';

export const metadata = {
  title: 'Blog',
  description:
    'The SightSage blog — eye health, lifestyle and nutrition tips for a screen-intensive lifestyle, from Dr. Yu and Kathy.',
};

// Blog hub categories (link out to the live storefront blogs).
const CATEGORIES = [
  { label: 'Eye Health', href: 'https://sightsage.com/blogs/eye-health' },
  { label: 'Lifestyle', href: 'https://sightsage.com/blogs/lifestyle' },
  { label: 'News', href: 'https://sightsage.com/blogs/news' },
  { label: 'Nutrition', href: 'https://sightsage.com/blogs/nutrition-3' },
];

// Featured posts (titles verbatim from the homepage "Our Posts!" row).
const POSTS = [
  {
    category: 'Eye Health',
    title: 'Eye Floaters: Causes, Warning Signs & Natural Eye Support',
    href: 'https://sightsage.com/blogs/eye-health/eye-floaters',
    img: '/s/files/1/0041/1172/8769/files/sightc_af92e40e-93fc-4db8-b1b9-93efd39d96fc.png',
  },
  {
    category: 'Eye Health',
    title: 'Is It Screen Fatigue or Dry Eye? What Your Eyes Are Telling You in 2026',
    href: 'https://sightsage.com/blogs/eye-health/is-it-screen-fatigue-or-dry-eye-what-your-eyes-are-telling-you-in-2026',
    img: '/s/files/1/0041/1172/8769/files/blueberry-gummy.png',
  },
  {
    category: 'Eye Health',
    title: 'How to Choose Eye Supplements for Healthy Vision Support in Vancouver',
    href: 'https://sightsage.com/blogs/eye-health/how-to-choose-eye-supplements-for-healthy-vision-support-in-vancouver',
    img: '/s/files/1/0041/1172/8769/files/wellness_blend-min1.png',
  },
];

export default function BlogAllPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Posts"
        title="The SightSage Blog"
        subtitle="Eye health, lifestyle and nutrition tips for a screen-intensive lifestyle — from Dr. Yu and Kathy."
      />

      <Container className="py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-brand px-4 py-1.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              {c.label}
            </a>
          ))}
        </div>

        {/* Posts */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
                  {post.category}
                </span>
                <h2 className="mt-2 font-head text-lg font-bold uppercase leading-snug tracking-[0.01em] text-ink">
                  {post.title}
                </h2>
                <span className="mt-4 text-sm font-bold text-brand group-hover:text-brand-dark">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={ROUTES.eyeHealth} variant="primary">
            Shop Eye Health
          </Button>
        </div>
      </Container>
    </main>
  );
}
