import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ListenToThis from '@/components/ListenToThis';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: { absolute: 'Contact Us - Wellspring Clinic' },
  description:
    'Contact the Wellspring Clinic about Traditional Chinese Medicine treatment for Retinitis Pigmentosa. Reach out today and we will guide you through the next steps.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" align="center" />

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">GET IN TOUCH</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">Contact the Wellspring Clinic</h2>
          <p className="mt-5 max-w-2xl text-body">
            If you or a loved one is experiencing vision challenges from Retinitis Pigmentosa, our team is
            here to help you explore your options. You don&rsquo;t have to go through this alone. Reach out
            today, and we&rsquo;ll guide you through the next steps.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
