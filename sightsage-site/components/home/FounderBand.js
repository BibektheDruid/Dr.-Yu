import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

// "DEVELOPED BY DR. YU AND KATHY" founder band. Copy verbatim-derived from the
// captured our-founder page; images use locally mirrored SightSage assets.
export default function FounderBand() {
  return (
    <section className="bg-sand py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/s/files/1/0041/1172/8769/files/KATHY-4_1.jpg"
              alt="Kathy Zhang, SightSage co-founder"
              loading="lazy"
              className="h-full w-full rounded-card object-cover shadow-soft"
            />
            <img
              src="/s/files/1/0041/1172/8769/files/IMG_0461.jpg"
              alt="SightSage herbal medicine prepared at Wellspring Clinic"
              loading="lazy"
              className="mt-8 h-full w-full rounded-card object-cover shadow-soft"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Meet our founders</p>
            <h2 className="font-head text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-ink sm:text-3xl lg:text-4xl">
              Developed by Dr. Yu and Kathy
            </h2>
            <p className="mt-5 text-body">
              Sightsage was founded by Dr. Weidong Yu, a world-renowned doctor of
              Chinese medicine for his successful treatment of retinal eye
              disorders. The company was co-founded by Kathy Zhang, a certified
              acupuncturist famous for sharing free health tips based on the
              ancient wisdom of Traditional Chinese Medicine on social media.
            </p>
            <p className="mt-3 text-body">
              Kathy and her husband, Dr. Yu, also run the Wellspring Clinic in
              Vancouver, BC, where they have improved the vision of over 1,000
              patients with Retinitis Pigmentosa, a rare eye disease previously
              deemed untreatable, and hundreds of patients with other eye
              disorders.
            </p>
            <div className="mt-7">
              <Button href={ROUTES.ourFounder} variant="primary">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
