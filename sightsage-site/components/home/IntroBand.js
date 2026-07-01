import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

// "HOLISTIC NATURAL EYE CARE ROUTINE FOR SCREEN-INTENSIVE LIFESTYLE" intro band.
// Image + supporting copy drawing on the captured eye-health positioning.
export default function IntroBand() {
  return (
    <section className="bg-cream py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-3">For a screen-intensive lifestyle</p>
            <h2 className="font-head text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-ink sm:text-3xl lg:text-4xl">
              Nourish Your Eyes from the Inside Out
            </h2>
            <p className="mt-5 max-w-lg text-body">
              Modern life puts constant strain on our eyes. SightSage combines the
              ancient wisdom of Traditional Chinese Medicine with modern nutrition
              to support dry eyes, eye fatigue and blurry vision &mdash; naturally,
              from the inside out.
            </p>
            <p className="mt-3 max-w-lg text-body">
              Our whole-food formulas are developed by Dr. Weidong Yu, a
              world-renowned Doctor of Traditional Chinese Medicine, and Kathy from
              KathyHealthTips.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={ROUTES.eyeHealth} variant="primary">
                Shop Eye Health
              </Button>
              <Button href={ROUTES.clinicalStudy} variant="outline">
                Our Clinical Study
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/s/files/1/0041/1172/8769/files/SightSage-0007-min.jpg"
              alt="SightSage natural eye care supplements"
              loading="lazy"
              className="w-full rounded-card object-cover shadow-soft"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
