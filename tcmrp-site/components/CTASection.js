import Button from './Button';
import Container from './Container';
import ListenToThis from './ListenToThis';
import { ROUTES } from '@/lib/site';

// The green "Ready to Get Help?" closing band (Home, Patient Stories).
export default function CTASection({
  title = 'Ready to Get Help?',
  subtitle = 'Start the conversation about your eye health today.',
  primary = { label: 'Book Free Consultation', href: ROUTES.contact },
  secondary = { label: 'Free Consultation Call', href: ROUTES.contact },
  note = "Let's get the help you need.",
  listen = true,
}) {
  return (
    <section className="hero-green text-white">
      <Container className="flex flex-col items-center py-16 text-center md:py-20">
        {listen && <ListenToThis tone="light" className="mb-6" />}
        <h2 className="font-display text-3xl text-white md:text-[40px]">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-white/85">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4">
          {primary && (
            <Button href={primary.href} variant="outlineLight" className="px-8">
              {primary.label}
            </Button>
          )}
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:underline"
            >
              {secondary.label}
              <span aria-hidden="true">→</span>
            </a>
          )}
          {note && <p className="text-[13.5px] text-white/70">{note}</p>}
        </div>
      </Container>
    </section>
  );
}
