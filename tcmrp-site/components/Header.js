'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, BOOK_HREF, LOGO_HEADER } from '@/lib/site';

function Caret() {
  return (
    <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5">
      <path d="M5 7l5 5 5-5z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const pathname = usePathname();

  const isActive = (href) => {
    if (!href || href === '#') return false;
    const base = href.split('#')[0];
    if (base === '/') return pathname === '/';
    return pathname.startsWith(base);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_3px_rgba(16,40,24,0.08)]">
      <div className="container-tight flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Wellspring Clinic — home">
          <img src={LOGO_HEADER} alt="Wellspring Clinic" className="h-9 w-auto md:h-11" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-green ${
                    isActive(item.href) ? 'bg-cream text-green' : 'text-ink/80'
                  }`}
                  aria-haspopup="true"
                >
                  {item.label}
                  <Caret />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[232px] translate-y-1 rounded-xl border border-[#e7e3da] bg-white p-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block rounded-lg px-3 py-2 text-[15px] text-ink/80 transition-colors hover:bg-cream hover:text-green"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-green ${
                  isActive(item.href) ? 'bg-cream text-green' : 'text-ink/80'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={BOOK_HREF} className="btn-green hidden lg:inline-flex">
            Book Appointment
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="border-t border-[#e7e3da] bg-white lg:hidden" aria-label="Mobile">
          <div className="container-tight py-2">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-[#f0ece3]">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-ink"
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <span className="text-xl leading-none text-green">{openGroup === item.label ? '−' : '+'}</span>
                  </button>
                  {openGroup === item.label && (
                    <div className="pb-2 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-[15px] text-body hover:text-green"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-[#f0ece3] py-3 text-base font-medium text-ink hover:text-green"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href={BOOK_HREF} onClick={() => setMobileOpen(false)} className="btn-green mt-4 w-full">
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
