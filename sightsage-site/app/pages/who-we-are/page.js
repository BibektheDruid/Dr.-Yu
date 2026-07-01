import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';
import PageHero from '../_components/PageHero';

export const metadata = {
  title: 'Who We Are',
  description:
    'Sightsage is an innovative, people-focused brand of functional foods and nutritional supplements designed to enhance eyesight and overall wellness in the digital age.',
};

const IMG_BASE = '/s/files/1/0041/1172/8769/files';

const VALUES = [
  {
    img: `${IMG_BASE}/Weare.png`,
    text: 'Vision wellness for humanity',
  },
  {
    img: `${IMG_BASE}/GreatFor.png`,
    text: 'Empowering vision wellness through lifestyle',
  },
  {
    img: `${IMG_BASE}/Madewith.png`,
    text: 'Integrity, Accountability, Simplicity, Compassion',
  },
];

function TextImageRow({ title, body, img, alt, reverse }) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 ${
        reverse ? 'lg:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div>
        <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-body sm:text-base">{body}</p>
      </div>
      <div className="overflow-hidden rounded-card border border-[#ece7f1] bg-cream">
        <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <main>
      <PageHero
        eyebrow="About SightSage"
        title="A Natural Holistic Eye Care Routine"
        subtitle="Sightsage is an innovative, people-focused brand of functional foods and nutritional supplements designed to enhance eyesight and overall wellness in the digital age."
      >
        <Button href={ROUTES.shopAll} variant="outlineLight">
          Shop All
        </Button>
        <Button href={ROUTES.ourFounder} variant="outlineLight">
          Our Founder
        </Button>
      </PageHero>

      <Container className="space-y-16 py-16">
        <TextImageRow
          title="For the Digital Screen-Dependent Lifestyle"
          alt="SightSage eye care bundle"
          img={`${IMG_BASE}/mild-dry-eye.png`}
          body="We know you can’t live without your phone and laptop, and neither can we. Unfortunately, prolonged screen times have put increased strain on our eyes, depleting key nutrients and causing vision problems like dry eyes, eye fatigue, blurry vision, and myopia. In fact, one in every two people suffers from dry eyes, and this number is predicted to increase. With few options on the market for treating such subclinical eye diseases, the likelihood of developing serious eye diseases increases. We can help you take better care of your eyes so they can keep up with the rising visual demands of digital devices."
        />
        <TextImageRow
          reverse
          title="A Simple, Fun and Proactive Eye Care Routine"
          alt="A proactive eye care routine"
          img={`${IMG_BASE}/SightSage-0028.jpg`}
          body="Caring for our vision is an essential part of our well-being. By focusing on prevention over treatment, we can reduce the risk of developing painful medical eye conditions due to excessive exposure to blue light screens. These conditions include retinal tear and bleeding, glaucoma, blindness due to extreme myopia, and macular degeneration. We aim to make eye care part of your self care routine, which is why we bring you easy, enjoyable and proven solutions that you can incorporate into your daily life."
        />
        <TextImageRow
          title="Harnessing The Power of Whole Food Based Nutrition"
          alt="Whole food based nutrition"
          img={`${IMG_BASE}/4.ProductBenefits.png`}
          body='Better health and well-being begin with a balanced, nutrient-rich diet. According to the latest research, nutrients from whole foods may have a positive holistic effect, enabling essential vitamins and minerals to function more efficiently. This may be the case because food components other than the "active ingredient" can affect the vitamins and minerals present in food. Sightsage products are formulated with 100% natural whole superfood ingredients with nutrients in their best forms and no unnecessary additives.'
        />
      </Container>

      <section className="bg-sand py-16">
        <Container className="space-y-6 text-center">
          <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
            The Future of Vision Wellness is Here
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-body sm:text-base">
            At Sightsage, we’re reimagining traditional vision-healing practices that have been used
            for centuries to solve modern eye health problems. By combining Contemporary Nutrition
            Science with Traditional Chinese Medicine Wisdom, we’ve created a line of evidence-based
            nutritional products that will help you see and feel better than ever. Our products are
            loved and used by thousands of people everyday, so we know that our solution works. We’re
            so confident in our products that we’re currently undergoing a clinical trial with the
            University of Waterloo.
          </p>
        </Container>
      </section>

      <Container className="py-16 text-center">
        <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
          Committed to Helping People Live Life to the Fullest
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body sm:text-base">
          We are a purpose-driven, people-focused company looking to share our vision wisdom with the
          world. This is why we do it.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.text} className="flex flex-col items-center">
              <div className="h-32 w-32 overflow-hidden rounded-full border border-[#ece7f1] bg-cream">
                <img
                  src={v.img}
                  alt={v.text}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 max-w-[14rem] text-sm font-semibold text-ink">{v.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.1em] text-brand">
          Sightsage Global Footprint
        </p>
      </Container>

      <section className="hero-brand text-white">
        <Container className="py-14 text-center">
          <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] sm:text-3xl">
            Making a Positive Difference Everyday, Everywhere
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            From day one, Sightsage has been making a positive impact in communities near and far.
            Join our thousands of customers by integrating Sightsage into your daily routine and feel
            the difference for yourself! If you have any questions feel free to reach out to us at{' '}
            <a href="tel:+17789888053" className="underline underline-offset-2">
              +1 778-988-8053
            </a>{' '}
            or{' '}
            <a href="mailto:support@sightsage.com" className="underline underline-offset-2">
              support@sightsage.com
            </a>
            .
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href={ROUTES.shopAll} variant="outlineLight">
              Shop All Products
            </Button>
            <Button href={ROUTES.contact} variant="outlineLight">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
