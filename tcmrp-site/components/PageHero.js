import Container from './Container';
import Eyebrow from './Eyebrow';
import ListenToThis from './ListenToThis';

// Dark-green hero band with faint wave texture and a "Listen To This" pill.
// `align="center"` for simple title heroes (Contact, FAQ…); pass `image` for the
// split hero (Home, Treatment, Patient Stories, About).
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt = '',
  align = 'center',
  listen = true,
  children,
  className = '',
}) {
  const centered = align === 'center' && !image;
  return (
    <section className={`hero-green relative overflow-hidden text-white ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-25 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/wp-content/uploads/2026/05/Mask-group.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
        aria-hidden="true"
      />
      <Container className="relative py-16 md:py-20">
        <div className={image ? 'grid items-center gap-10 lg:grid-cols-2' : ''}>
          <div className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
            {listen && (
              <div className={centered ? 'flex justify-center' : ''}>
                <ListenToThis tone="light" className="mb-5" />
              </div>
            )}
            {eyebrow && (
              <div className={`mb-3 ${centered ? 'flex justify-center' : ''}`}>
                <Eyebrow tone="light">{eyebrow}</Eyebrow>
              </div>
            )}
            <h1 className="font-display text-4xl leading-[1.1] text-white md:text-5xl lg:text-[58px]">{title}</h1>
            {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{subtitle}</p>}
            {children && <div className={`mt-8 flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>{children}</div>}
          </div>
          {image && (
            <div className="relative">
              <img src={image} alt={imageAlt} className="w-full rounded-2xl object-cover shadow-card" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
