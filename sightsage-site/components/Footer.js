import Link from 'next/link';
import Container from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import { CONTACT, SOCIALS, FOOTER_LINKS, FOOTER_BADGES, FOOTER_LEGAL, COPYRIGHT, LOGO } from '@/lib/site';

function BadgeIcon({ idx }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (idx === 1) {
    // Subscribe / refresh
    return (
      <svg {...common}>
        <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 12a9 9 0 0 1-15.5 6.3L3 16" />
        <path d="M21 4v4h-4M3 20v-4h4" />
      </svg>
    );
  }
  if (idx === 2) {
    // Worldwide / globe
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
    );
  }
  // Free shipping / truck
  return (
    <svg {...common}>
      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

function SocialIcon({ name }) {
  const common = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true };
  if (name === 'Facebook') {
    return (
      <svg {...common}>
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.8V13h2.7v8h3z" />
      </svg>
    );
  }
  if (name === 'YouTube') {
    return (
      <svg {...common}>
        <path d="M23 12s0-3-.4-4.4c-.2-.8-.9-1.4-1.7-1.6C19.4 5.6 12 5.6 12 5.6s-7.4 0-8.9.4c-.8.2-1.5.8-1.7 1.6C1 9 1 12 1 12s0 3 .4 4.4c.2.8.9 1.4 1.7 1.6 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.8 1.7-1.6C23 15 23 12 23 12zm-13.2 2.8V9.2l4.8 2.8-4.8 2.8z" />
      </svg>
    );
  }
  if (name === 'TikTok') {
    return (
      <svg {...common}>
        <path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.7c0 3.2-2.6 5.8-5.8 5.8S4.8 17.4 4.8 14.2c0-3 2.3-5.5 5.3-5.8v2.7c-1.5.2-2.6 1.5-2.6 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3h2.8z" />
      </svg>
    );
  }
  // X (Twitter)
  return (
    <svg {...common}>
      <path d="M17.5 3h3l-6.6 7.6L21.8 21h-6l-4.7-6.1L5.7 21H2.7l7-8.1L2.5 3h6.2l4.2 5.6L17.5 3zm-1 16h1.7L7.6 4.7H5.8L16.5 19z" />
    </svg>
  );
}

const PAYMENTS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay', 'Shop Pay'];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      {/* Trust-badge strip */}
      <div className="border-b border-white/15">
        <Container className="grid gap-6 py-8 text-center sm:grid-cols-3">
          {FOOTER_BADGES.map((b, i) => (
            <div key={b} className="flex flex-col items-center gap-2">
              <BadgeIcon idx={i} />
              <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-white/90">{b}</p>
            </div>
          ))}
        </Container>
      </div>

      {/* Newsletter band */}
      <div className="border-b border-white/15">
        <Container className="py-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Newsletter />
            <div className="flex gap-3 md:justify-end">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-brand"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Link columns */}
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <img src={LOGO} alt="SightSage" className="h-10 w-auto brightness-0 invert" />
            <ul className="mt-5 space-y-2.5 text-[14px] text-white/85">
              <li>
                <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {CONTACT.address}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </li>
            </ul>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h2 className="font-head text-base font-bold uppercase tracking-[0.04em] text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-1 text-[14px] text-white/85">
                {group.links.map((l) => {
                  const external = /^https?:/.test(l.href);
                  return (
                    <li key={l.label}>
                      {external ? (
                        <a href={l.href} target="_blank" rel="noreferrer" className="block py-1.5 hover:text-white">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="block py-1.5 hover:text-white">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Legal links row */}
      <div className="border-t border-white/15">
        <Container className="py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/80">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Payment icons + copyright */}
      <div className="border-t border-white/15">
        <Container className="flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
          <p className="text-[13px] text-white/75">{COPYRIGHT}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand"
              >
                {p}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
