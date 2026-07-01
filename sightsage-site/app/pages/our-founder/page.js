import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';
import PageHero from '../_components/PageHero';

const IMG_BASE = '/s/files/1/0041/1172/8769/files';
const IMG_PRODUCTS = '/s/files/1/0041/1172/8769/products';

export const metadata = {
  title: 'Our Founder',
  description:
    'Sightsage was founded by Dr. Weidong Yu, a world-renowned doctor of Chinese medicine, and co-founded by certified acupuncturist Kathy Zhang.',
};

function FounderBlock({ name, role, paragraphs, images, reverse }) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <div className={reverse ? 'lg:order-2' : ''}>
        <p className="eyebrow mb-2">{role}</p>
        <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
          {name}
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-body sm:text-base">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div className={`grid gap-5 sm:grid-cols-2 ${reverse ? 'lg:order-1' : ''}`}>
        {images.map((img) => (
          <div
            key={img}
            className="overflow-hidden rounded-card border border-[#ece7f1] bg-cream"
          >
            <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurFounderPage() {
  return (
    <main>
      <PageHero
        eyebrow="About SightSage"
        title="Meet Our Founder Dr. Weidong Yu and Our Co-Founder Kathy"
        subtitle="Sightsage was founded by Dr. Weidong Yu, a world-renowned doctor of Chinese medicine for his successful treatment of retinal eye disorders. The company was co-founded by Kathy Zhang, a certified acupuncturist famous for sharing free health tips based on the ancient wisdom of Traditional Chinese Medicine on social media."
      >
        <Button href={ROUTES.clinicalStudy} variant="outlineLight">
          Our Clinical Study
        </Button>
      </PageHero>

      <Container className="py-12 text-center">
        <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-body sm:text-base">
          Learn more about our founder Dr. Yu and co-founder Kathy and how they started Sightsage,
          below.
        </p>
      </Container>

      <Container className="space-y-16 pb-16">
        <FounderBlock
          role="Founder &amp; CEO"
          name="Doctor Weidong Yu"
          images={[
            `${IMG_BASE}/SightSage-0028.jpg`,
            `${IMG_BASE}/SightSage-0029.jpg`,
          ]}
          paragraphs={[
            'Founder and CEO @Sightsage, Dr. Yu is one of Canada’s leading Doctors of Traditional Chinese Medicine (TCM), world-renowned for his successful treatment of retinal eye disorders.',
            'He also co-founded the Wellspring Clinic, where he has improved the vision of over 1,000 patients with Retinitis Pigmentosa, a rare eye disease previously deemed untreatable, and hundreds of patients with other eye disorders such as Macular Degeneration, Myopia, Presbyopia, and Dry Eye Disease.',
            'His 20+ years of research and clinical practice allowed him to discover key factors in both vision health and healing, which he used to treat age-related macular degeneration, glaucoma, diabetic retinopathy, dry eye disease, myopia, astigmatism, amblyopia, and viral optic neuritis.',
            'Dr. Yu has practiced Traditional Chinese Medicine and Western Medicine in Belgium, Canada, US and China and he is a Licensed Acupuncturist in the State of California, US. He’s also the author of 30+ publications in both Chinese and English medical literature. His purpose: Sight for Humanity.',
          ]}
        />

        <FounderBlock
          reverse
          role="Co-Founder"
          name="Kathy Zhang"
          images={[
            `${IMG_BASE}/KATHY-4_1.jpg`,
            `${IMG_PRODUCTS}/KathyHealthTips.jpg`,
          ]}
          paragraphs={[
            'Co-Founder @Sightsage, Kathy Zhang is a certified acupuncturist famous for sharing free health tips based on the ancient wisdom of Traditional Chinese Medicine (TCM). Kathy and her husband, Dr. Yu also run the Wellspring Clinic in Vancouver, BC, which specializes in treating Retinitis Pigmentosa (RP) and other eye diseases with acupuncture and herbal medicine.',
            'Since the opening of the clinic, Kathy and Dr. Yu have treated thousands of patients with vision problems, as well as patients with non-vision-related problems such as hearing loss, infertility, insomnia, weight issues, skin problems, joint pain and even cancer.',
            'With more than 30 years of experience in TCM, Kathy spends her free time sharing simple and effective tips and exercises for general health and beauty on her social media accounts.',
          ]}
        />
      </Container>

      <section className="bg-sand py-14">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
            Discover Products Developed by Dr. Yu and Kathy
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={ROUTES.shopAll} variant="primary">
              Shop All Products
            </Button>
            <Button href={ROUTES.clinicalStudy} variant="outline">
              Our Clinical Study
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
