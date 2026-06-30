import Link from 'next/link';
import {
  CONTACT,
  SOCIALS,
  FOOTER_QUICK_LINKS,
  FOOTER_ABOUT_LINKS,
  COPYRIGHT,
  LOGO_FOOTER,
  ROUTES,
} from '@/lib/site';

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
  // LinkedIn
  return (
    <svg {...common}>
      <path d="M6.94 5a2 2 0 11-4 0 2 2 0 014 0zM3.3 8.5h3.3V21H3.3V8.5zM9.3 8.5h3.16v1.7h.05c.44-.83 1.52-1.7 3.12-1.7 3.34 0 3.96 2.2 3.96 5.05V21h-3.3v-5.5c0-1.3-.02-3-1.82-3-1.82 0-2.1 1.42-2.1 2.9V21H9.3V8.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-green text-white">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + NAP */}
          <div>
            <img src={LOGO_FOOTER} alt="Wellspring Clinic" className="h-16 w-auto" />
            <ul className="mt-6 space-y-3 text-[15px] text-white/90">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5">📍</span>
                <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">📞</span>
                <a href={`tel:${CONTACT.tollFreeTel}`} className="hover:text-white">{CONTACT.tollFreeLabel}</a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">📞</span>
                <a href={`tel:${CONTACT.localTel}`} className="hover:text-white">{CONTACT.localLabel}</a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">✉️</span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-green"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-display text-xl text-white">Quick Links</h2>
            <ul className="mt-4 space-y-1 text-[15px] text-white/90">
              {FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="block py-1.5 hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h2 className="font-display text-xl text-white">About Us</h2>
            <ul className="mt-4 space-y-1 text-[15px] text-white/90">
              {FOOTER_ABOUT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="block py-1.5 hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-tight py-5 text-center text-[13.5px] text-white/80">
          {COPYRIGHT} |{' '}
          <Link href={ROUTES.terms} className="underline-offset-2 hover:text-white hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
