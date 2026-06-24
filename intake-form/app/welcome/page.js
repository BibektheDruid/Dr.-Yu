'use client';

import { useEffect, useState } from 'react';
import { BrandKitForm } from '../components/BrandKitForm';

/* =============================================================
   /welcome — the one place Dr. Yu needs.
   A single page with a top toggle between two views:
     • The Agreement  (the approved Growth plan, embedded as-is)
     • Your Brand Kit (the intake form)
   Both views stay mounted so switching is instant and nothing is
   lost — his half-filled form survives a trip back to the agreement.
   The active view is mirrored in the URL hash so a refresh or a
   shared link keeps its place.
   ============================================================= */

const TABS = {
  agreement: '#agreement',
  'brand-kit': '#brand-kit',
};

function tabFromHash() {
  if (typeof window === 'undefined') return 'agreement';
  return window.location.hash === '#brand-kit' ? 'brand-kit' : 'agreement';
}

export default function Welcome() {
  // Always start on the agreement for SSR; sync to the URL hash after mount
  // so we don't trip a hydration mismatch.
  const [tab, setTab] = useState('agreement');

  useEffect(() => {
    setTab(tabFromHash());
    const onHash = () => setTab(tabFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = (next) => {
    setTab(next);
    if (typeof window !== 'undefined') {
      // Update the hash without adding a history entry per click.
      window.history.replaceState(null, '', TABS[next]);
    }
  };

  return (
    <div className="shell">
      <header className="shell-nav">
        <div className="shell-nav-inner">
          <div className="brandmark">
            SecondBrain<small>For Dr. Yu</small>
          </div>
          <div className="tabs" role="tablist" aria-label="Switch between the agreement and your brand kit">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'agreement'}
              className={'tab' + (tab === 'agreement' ? ' on' : '')}
              onClick={() => go('agreement')}
            >
              The Agreement
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'brand-kit'}
              className={'tab' + (tab === 'brand-kit' ? ' on' : '')}
              onClick={() => go('brand-kit')}
            >
              Your Brand Kit
            </button>
          </div>
        </div>
      </header>

      <section className="view view-agreement" hidden={tab !== 'agreement'} aria-hidden={tab !== 'agreement'}>
        <iframe
          className="agreement-frame"
          src="/agreement.html"
          title="Your Growth plan agreement"
          loading="eager"
        />
      </section>

      <section className="view view-brandkit" hidden={tab !== 'brand-kit'} aria-hidden={tab !== 'brand-kit'}>
        <BrandKitForm />
      </section>
    </div>
  );
}
