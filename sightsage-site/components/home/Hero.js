import Container from '@/components/Container';
import Button from '@/components/Button';
import { HERO_DESKTOP, ROUTES } from '@/lib/site';

// Homepage hero: brand banner with the live "HOLISTIC NATURAL EYE CARE ROUTINE
// FOR SCREEN-INTENSIVE LIFESTYLE" headline and a shop CTA. The captured hero
// artwork (desktop2) sits behind a soft brand wash so the text stays legible.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <img
        src={HERO_DESKTOP}
        alt="SightSage natural eye, hair and wellness supplements"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand/45 to-transparent" />
      <Container className="relative">
        <div className="flex min-h-[440px] max-w-xl flex-col justify-center gap-6 py-20 text-white lg:min-h-[560px]">
          <p className="eyebrow text-white/80">Holistic Natural Health &amp; Wellness</p>
          <h1 className="font-head text-3xl font-bold uppercase leading-[1.08] tracking-[0.02em] sm:text-4xl lg:text-5xl">
            Holistic Natural Eye Care Routine for Screen-Intensive Lifestyle
          </h1>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
            Healthy Weight &nbsp;&middot;&nbsp; Fuller Hair &nbsp;&middot;&nbsp; Clearer Vision
          </p>
          <p className="max-w-md text-base text-white/90 lg:text-lg">
            Natural weight management, hair and eye health supplements, formulated
            by 40+ years of clinical experience of Dr. Weidong Yu and Kathy.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={ROUTES.shopAll} variant="primary" className="bg-white text-brand hover:bg-white/90">
              Shop All
            </Button>
            <Button href={ROUTES.bestsellers} variant="outlineLight">
              Shop Bestsellers
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
