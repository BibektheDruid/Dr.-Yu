'use client';

import { useState } from 'react';

// text-[16px] on mobile stops iOS Safari from auto-zooming on focus; 15px keeps the desktop design.
const FIELD =
  'w-full rounded-lg border border-[#d9d4c9] bg-white px-4 py-3 text-[16px] md:text-[15px] text-ink placeholder:text-[#a9a59b] outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/20';
const LABEL = 'mb-1.5 block text-[14px] font-medium text-ink';

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  city: '',
  rpDuration: '',
  consultationType: '',
  details: '',
};

export default function ContactForm({ className = '' }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'tcmrp-contact-form',
          contact: { name: form.name, email: form.email, phone: form.phone },
          answers: form,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) throw new Error(data.error || 'Submission failed');
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
    }
  };

  if (status === 'sent') {
    return (
      <div className={`card p-8 text-center ${className}`}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green/10 text-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-ink">Thank you — your message is on its way.</h3>
        <p className="mt-2 text-body">Our team will reach out to guide you through the next steps.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-outline-green mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`card p-6 md:p-8 ${className}`} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={LABEL}>Name *</label>
          <input id="cf-name" className={FIELD} required placeholder="Your full name" value={form.name} onChange={update('name')} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={LABEL}>Phone *</label>
          <input id="cf-phone" type="tel" className={FIELD} required placeholder="+1 (000) 000-0000" value={form.phone} onChange={update('phone')} />
        </div>
        <div>
          <label htmlFor="cf-email" className={LABEL}>Email *</label>
          <input id="cf-email" type="email" className={FIELD} required placeholder="you@example.com" value={form.email} onChange={update('email')} />
        </div>
        <div>
          <label htmlFor="cf-city" className={LABEL}>City You Reside In *</label>
          <input id="cf-city" className={FIELD} required placeholder="e.g. Vancouver, BC" value={form.city} onChange={update('city')} />
        </div>
        <div>
          <label htmlFor="cf-rp" className={LABEL}>How long have you had RP?</label>
          <input id="cf-rp" className={FIELD} placeholder="e.g. 5 years" value={form.rpDuration} onChange={update('rpDuration')} />
        </div>
        <div>
          <label htmlFor="cf-type" className={LABEL}>In-person or virtual consultation?</label>
          <select id="cf-type" className={`${FIELD} appearance-none`} value={form.consultationType} onChange={update('consultationType')}>
            <option value="">Select one…</option>
            <option value="In-person">In-person</option>
            <option value="Virtual">Virtual</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-details" className={LABEL}>Any other details relevant to your RP condition</label>
        <textarea id="cf-details" rows={4} className={FIELD} placeholder="Optional — share anything you feel is relevant…" value={form.details} onChange={update('details')} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-green px-7" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit Now'}
        </button>
        <span className="text-[13.5px] text-muted">Fields marked * are required</span>
      </div>

      {status === 'error' && (
        <p className="mt-3 text-[14px] text-[#c0392b]">Sorry — {error}. Please try again or call us directly.</p>
      )}
    </form>
  );
}
