import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

// "OUR POSTS!" — 3 blog cards. Titles verbatim from the captured homepage
// headings; all link to the blog index (/pages/blog-all).
const POSTS = [
  {
    title: 'Eye Floaters: Causes, Warning Signs & Natural Eye Support',
    image: '/s/files/1/0041/1172/8769/files/sightc_af92e40e-93fc-4db8-b1b9-93efd39d96fc.png',
    category: 'Eye Health',
  },
  {
    title: 'Is It Screen Fatigue or Dry Eye? What Your Eyes Are Telling You',
    image: '/s/files/1/0041/1172/8769/files/blueberry-gummy.png',
    category: 'Eye Health',
  },
  {
    title: 'How to Choose Eye Supplements for Healthy Vision Support in Vancouver',
    image: '/s/files/1/0041/1172/8769/files/SightSage-0007-min.jpg',
    category: 'Wellness',
  },
];

export default function BlogPosts() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <SectionHeading eyebrow="From our blog" title="Our Posts!" className="mb-10" />
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href={ROUTES.blog}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-[#ece7f1] bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cream">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="eyebrow">{p.category}</span>
                <h3 className="font-head text-lg font-bold uppercase leading-snug tracking-[0.02em] text-ink">
                  {p.title}
                </h3>
                <span className="mt-auto pt-2 text-sm font-bold text-brand group-hover:text-brand-dark">
                  Read more &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={ROUTES.blog} variant="outline">
            View All Posts
          </Button>
        </div>
      </Container>
    </section>
  );
}
