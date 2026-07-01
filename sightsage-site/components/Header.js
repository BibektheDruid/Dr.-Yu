'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, ROUTES, ANNOUNCEMENT, LOGO, ACCOUNT_HREF } from '@/lib/site';

function Caret() {
  return (
    <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5">
      <path d="M5 7l5 5 5-5z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M6 6L5 2H2" />
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
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-brand text-white">
        <div className="container-tight flex h-9 items-center justify-center text-center text-[13px] font-semibold tracking-wide">
          {ANNOUNCEMENT}
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow-[0_1px_3px_rgba(40,24,60,0.08)]">
        <div className="container-tight flex h-[68px] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label="SightSage — home">
            <img src={LOGO} alt="SightSage" className="h-9 w-auto md:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-semibold transition-colors hover:text-brand ${
                      isActive(item.href) ? 'text-brand' : 'text-ink/80'
                    }`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <Caret />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 rounded-xl border border-[#ece7f1] bg-white p-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-[14px] text-ink/80 transition-colors hover:bg-brand-light hover:text-brand"
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
                  className={`rounded-full px-3 py-2 text-[14px] font-semibold transition-colors hover:text-brand ${
                    isActive(item.href) ? 'text-brand' : 'text-ink/80'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <Link
              href={ROUTES.search}
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink/80 transition-colors hover:text-brand"
            >
              <SearchIcon />
            </Link>
            <a
              href={ACCOUNT_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="Account"
              className="hidden h-10 w-10 items-center justify-center rounded-md text-ink/80 transition-colors hover:text-brand sm:inline-flex"
            >
              <AccountIcon />
            </a>
            <Link
              href={ROUTES.cart}
              aria-label="Cart"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink/80 transition-colors hover:text-brand"
            >
              <CartIcon />
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
          <nav className="border-t border-[#ece7f1] bg-white lg:hidden" aria-label="Mobile">
            <div className="container-tight py-2">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-[#f3eff7]">
                    <button
                      type="button"
                      onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-ink"
                      aria-expanded={openGroup === item.label}
                    >
                      {item.label}
                      <span className="text-xl leading-none text-brand">{openGroup === item.label ? '−' : '+'}</span>
                    </button>
                    {openGroup === item.label && (
                      <div className="pb-2 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-[15px] text-body hover:text-brand"
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
                    className="block border-b border-[#f3eff7] py-3 text-base font-semibold text-ink hover:text-brand"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href={ACCOUNT_HREF}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-semibold text-ink hover:text-brand"
              >
                Account
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
