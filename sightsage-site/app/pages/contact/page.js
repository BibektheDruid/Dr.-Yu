import Container from '@/components/Container';
import { CONTACT, SOCIALS } from '@/lib/site';
import PageHero from '../_components/PageHero';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us',
  description:
    'Have a question or need more information? Reach the SightSage team by email, phone, or our contact form.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="We’d Love to Hear From You"
        title="Contact Us"
        subtitle="Have a question or need more information? You can reach us through the contact form or contact us directly using the details below."
      />

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="font-head text-xl font-bold uppercase tracking-[0.03em] text-ink">
                Get in Touch
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                Have a question or need more information? You can reach us through the contact form
                or contact us directly using the details below.
              </p>
            </div>

            <dl className="space-y-5 text-[15px]">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Address
                </dt>
                <dd className="mt-1">
                  <a
                    href={CONTACT.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-ink hover:text-brand"
                  >
                    {CONTACT.address}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-brand hover:text-brand-dark"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="font-semibold text-brand hover:text-brand-dark"
                  >
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Follow Us</dt>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-brand hover:text-brand-dark"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
