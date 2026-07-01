'use client';

import { useState, useRef, useCallback } from 'react';
import { upload } from '@vercel/blob/client';

/* =============================================================
   SecondBrain Brand Kit intake
   A calm, friendly, mobile-first form for Dr. Yu.
   Files upload straight to Vercel Blob, then answers POST to /api/submit.
   ============================================================= */

// ---- tiny helpers ----
function formatSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function makeId() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

// ---- icons (inline, no deps) ----
const IconUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const IconFile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconInfo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconSave = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

/* =============================================================
   Reusable Dropzone
   - drag over highlight
   - click to browse fallback
   - accepts multiple
   - shows each file with name, size, image preview, remove X
   - shows per-file upload status during submit
   ============================================================= */
function Dropzone({ id, label, help, files, onAdd, onRemove, statuses, disabled }) {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);

  const pick = useCallback(
    (fileList) => {
      const arr = Array.from(fileList || []);
      if (arr.length) onAdd(arr);
    },
    [onAdd]
  );

  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    if (disabled) return;
    pick(e.dataTransfer.files);
  };

  const openBrowse = () => {
    if (disabled) return;
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <div className="field">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      {help && <span className="help">{help}</span>}

      <div
        className={'dropzone' + (drag ? ' drag' : '')}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={label ? 'Add files for ' + label : 'Add files'}
        onClick={openBrowse}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openBrowse();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDrag(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDrag(false);
        }}
        onDrop={onDrop}
      >
        <span className="dz-icon">
          <IconUpload />
        </span>
        <span className="dz-title">Drop files here</span>
        <span className="dz-sub">
          Or <span className="dz-browse">tap to choose</span> from your phone or computer. You can add more than one.
        </span>
        <input
          ref={inputRef}
          id={id}
          type="file"
          multiple
          hidden
          disabled={disabled}
          onChange={(e) => {
            pick(e.target.files);
            e.target.value = '';
          }}
        />
      </div>

      {files.length > 0 && (
        <ul className="filelist">
          {files.map((f) => {
            const st = statuses && statuses[f.id];
            const isImage = f.file && f.file.type && f.file.type.startsWith('image/');
            return (
              <li className="fileitem" key={f.id}>
                <span className="file-ic">
                  {isImage && f.preview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={f.preview} alt="" />
                  ) : (
                    <IconFile />
                  )}
                </span>
                <span className="file-meta">
                  <span className="file-name">{f.file.name}</span>
                  {st ? (
                    <span className={'file-status ' + st.state}>
                      {st.state === 'up' && 'Sending...'}
                      {st.state === 'done' && 'Sent'}
                      {st.state === 'err' && 'Could not send. Tap Try sending again below.'}
                    </span>
                  ) : (
                    <span className="file-size">{formatSize(f.file.size)}</span>
                  )}
                </span>
                {!disabled && (
                  <button
                    type="button"
                    className="file-remove"
                    aria-label={'Remove ' + f.file.name}
                    onClick={() => onRemove(f.id)}
                  >
                    <IconX />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* =============================================================
   Main page
   ============================================================= */
export default function Page() {
  // ---- text answers ----
  const [contact, setContact] = useState({ name: '', email: '', phone: '', bestWay: '' });
  const [brand, setBrand] = useState({ colors: '', fonts: '', voice: '' });
  const [wellspring, setWellspring] = useState({
    name: 'Wellspring Clinic',
    address: '',
    phone: '',
    email: '',
    hours: '',
    services: '',
    staff: '',
    howPeopleBook: '',
    newPatientQuestions: '',
    cancelPolicy: '',
  });
  const [sightsage, setSightsage] = useState({
    name: 'SightSage',
    address: '',
    phone: '',
    email: '',
    hours: '',
    notes: '',
  });
  const [logins, setLogins] = useState({
    website: '',
    shopify: '',
    janeApp: '',
    domain: '',
    googleBusiness: '',
    senderEmail: '',
    note: '',
  });
  const [products, setProducts] = useState({ notes: '' });
  const [clinicCare, setClinicCare] = useState({ notes: '' });
  const [helper, setHelper] = useState({
    english: true,
    chinese: false,
    otherLang: '',
    discount: '',
    alwaysSay: '',
    neverSay: '',
  });
  const [anythingElse, setAnythingElse] = useState({ notes: '' });

  // ---- file groups (each item: { id, file, preview }) ----
  const [logoFiles, setLogoFiles] = useState([]);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [styleFiles, setStyleFiles] = useState([]);
  const [productFiles, setProductFiles] = useState([]);
  const [elseFiles, setElseFiles] = useState([]);

  // ---- submit state ----
  const [phase, setPhase] = useState('idle'); // idle | uploading | saving | done | error
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [fileStatuses, setFileStatuses] = useState({}); // id -> { state }
  const [errorMsg, setErrorMsg] = useState('');

  const busy = phase === 'uploading' || phase === 'saving';

  // ---- file add/remove builders ----
  const makeAdd = (setter) => (incoming) => {
    const wrapped = incoming.map((file) => ({
      id: makeId(),
      file,
      preview: file.type && file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }));
    setter((prev) => [...prev, ...wrapped]);
  };
  const makeRemove = (setter) => (id) => {
    setter((prev) => {
      const target = prev.find((x) => x.id === id);
      if (target && target.preview) URL.revokeObjectURL(target.preview);
      return prev.filter((x) => x.id !== id);
    });
  };

  // ---- the submit flow ----
  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    // group every file with the field name we will store it under
    const groups = [
      { field: 'logos', items: logoFiles },
      { field: 'photos', items: photoFiles },
      { field: 'styleSamples', items: styleFiles },
      { field: 'productFiles', items: productFiles },
      { field: 'elseFiles', items: elseFiles },
    ];
    const allFiles = [];
    groups.forEach((g) => g.items.forEach((it) => allFiles.push({ field: g.field, item: it })));

    const total = allFiles.length;
    setProgress({ done: 0, total });
    setFileStatuses({});
    setPhase('uploading');

    // holders for the resulting { name, url } objects, per field
    const uploaded = {
      logos: [],
      photos: [],
      styleSamples: [],
      productFiles: [],
      elseFiles: [],
    };

    try {
      let done = 0;
      for (const entry of allFiles) {
        const { field, item } = entry;
        setFileStatuses((prev) => ({ ...prev, [item.id]: { state: 'up' } }));
        const blob = await upload(item.file.name, item.file, {
          access: 'public',
          handleUploadUrl: '/api/blob-upload',
        });
        uploaded[field].push({
          field,
          name: item.file.name,
          url: blob.url,
          size: item.file.size,
          type: item.file.type,
        });
        setFileStatuses((prev) => ({ ...prev, [item.id]: { state: 'done' } }));
        done += 1;
        setProgress({ done, total });
      }

      // build the languages array
      const languages = [];
      if (helper.english) languages.push('English');
      if (helper.chinese) languages.push('Chinese');
      if (helper.otherLang.trim()) languages.push(helper.otherLang.trim());

      // strip the helper field from stored file objects so the payload matches
      const slim = (arr) => arr.map(({ name, url }) => ({ name, url }));

      const payload = {
        submittedAt: new Date().toISOString(),
        contact: {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          bestWay: contact.bestWay,
        },
        brand: {
          colors: brand.colors,
          fonts: brand.fonts,
          voice: brand.voice,
          logos: slim(uploaded.logos),
          photos: slim(uploaded.photos),
          styleSamples: slim(uploaded.styleSamples),
        },
        businesses: {
          wellspring: {
            name: wellspring.name,
            address: wellspring.address,
            phone: wellspring.phone,
            email: wellspring.email,
            hours: wellspring.hours,
            services: wellspring.services,
            staff: wellspring.staff,
            howPeopleBook: wellspring.howPeopleBook,
            newPatientQuestions: wellspring.newPatientQuestions,
            cancelPolicy: wellspring.cancelPolicy,
          },
          sightsage: {
            name: sightsage.name,
            address: sightsage.address,
            phone: sightsage.phone,
            email: sightsage.email,
            hours: sightsage.hours,
            notes: sightsage.notes,
          },
        },
        logins: {
          website: logins.website,
          shopify: logins.shopify,
          janeApp: logins.janeApp,
          domain: logins.domain,
          googleBusiness: logins.googleBusiness,
          senderEmail: logins.senderEmail,
          note: logins.note,
        },
        products: {
          notes: products.notes,
          files: slim(uploaded.productFiles),
        },
        clinicCare: { notes: clinicCare.notes },
        helperRules: {
          languages,
          discount: helper.discount,
          alwaysSay: helper.alwaysSay,
          neverSay: helper.neverSay,
        },
        anythingElse: {
          notes: anythingElse.notes,
          files: slim(uploaded.elseFiles),
        },
      };

      setPhase('saving');
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const info = await res.json().catch(() => ({}));
        throw new Error(info.error || 'The save did not go through.');
      }

      setPhase('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      // mark any still-uploading file as errored
      setFileStatuses((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          if (next[k].state === 'up') next[k] = { state: 'err' };
        });
        return next;
      });
      setErrorMsg(
        (err && err.message ? err.message : 'Something went wrong.') +
          ' Nothing was lost. Please tap the button to try again.'
      );
      setPhase('error');
    }
  }

  // ---- field helpers ----
  const set = (setter) => (key) => (e) => setter((p) => ({ ...p, [key]: e.target.value }));
  const setContactF = set(setContact);
  const setBrandF = set(setBrand);
  const setWellF = set(setWellspring);
  const setSightF = set(setSightsage);
  const setLoginsF = set(setLogins);
  const setProductsF = set(setProducts);
  const setClinicF = set(setClinicCare);
  const setElseF = set(setAnythingElse);

  // =============================================================
  // SUCCESS SCREEN
  // =============================================================
  if (phase === 'done') {
    return (
      <>
        <div className="topnav">
          <div className="wrap">
            <div className="brandmark">
              SecondBrain<small>Brand Kit for Dr. Yu</small>
            </div>
          </div>
        </div>
        <div className="success stagger">
          <div className="badge">
            <IconCheck />
          </div>
          <h2>Thank you. We got everything.</h2>
          <p>
            We have your brand kit. <b>We will take it from here</b> and start building your SecondBrain.
            If we need one more thing, we will send you a friendly note.
          </p>
          <span className="pill">
            <IconShield />
            Your information is safe with us
          </span>
        </div>
        <p className="pagefoot">
          <b>SecondBrain</b> is made by Mike Shields and Jordan Kwan. Prepared for Dr. Weidong Yu, Wellspring Clinic and SightSage.
        </p>
      </>
    );
  }

  // =============================================================
  // THE FORM
  // =============================================================
  const pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;

  return (
    <>
      {/* NAV */}
      <div className="topnav">
        <div className="wrap">
          <div className="brandmark">
            SecondBrain<small>Brand Kit for Dr. Yu</small>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="hero stagger">
        <div className="wrap">
          <div className="kicker">SecondBrain · Brand Kit</div>
          <div className="rule" />
          <h1>
            Send us your <span className="accent">brand kit</span>
          </h1>
          <p>
            This is where you send us everything we need to build your SecondBrain. Fill in what you have now.
            You can come back any time and finish the rest. There is no pressure.
          </p>
          <span className="safe">
            <IconShield />
            Safe and private. Take your time.
          </span>
          <div className="for">
            <b>Prepared for Dr. Weidong Yu</b>
            <br />
            Wellspring Clinic and SightSage
          </div>
        </div>
      </div>

      <div className="wrap">
        <p className="reassure">
          <b>You do not need to fill in everything.</b> Send what you have, skip what you do not, and come back later.
          Anything you upload is sent straight to us, safely.
        </p>

        <div className="savebar">
          <IconSave />
          Tip: you can fill this in on your phone or your computer. Both work the same.
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {/* 1. ABOUT YOU */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">1</span>
              <h2 className="sec-title">About you</h2>
            </div>
            <p className="sec-desc">The one person we can reach with any questions.</p>

            <div className="field">
              <label className="label" htmlFor="c-name">Your name</label>
              <input id="c-name" className="input" type="text" placeholder="For example, Dr. Weidong Yu"
                value={contact.name} onChange={setContactF('name')} disabled={busy} />
            </div>
            <div className="row2">
              <div className="field">
                <label className="label" htmlFor="c-email">Best email</label>
                <input id="c-email" className="input" type="email" inputMode="email" autoComplete="email"
                  placeholder="you@example.com" value={contact.email} onChange={setContactF('email')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="c-phone">Best phone</label>
                <input id="c-phone" className="input" type="tel" inputMode="tel" autoComplete="tel"
                  placeholder="(604) 555 1234" value={contact.phone} onChange={setContactF('phone')} disabled={busy} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="c-best">Best way to reach you</label>
              <span className="help">Pick what is easiest for you.</span>
              <select id="c-best" className="select" value={contact.bestWay} onChange={setContactF('bestWay')} disabled={busy}>
                <option value="">Choose one</option>
                <option value="text">Text message</option>
                <option value="email">Email</option>
                <option value="call">Phone call</option>
              </select>
            </div>
          </section>

          {/* 2. YOUR BRAND */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">2</span>
              <h2 className="sec-title">Your brand</h2>
            </div>
            <p className="sec-desc">The look and feel of your business. Send what you have.</p>

            <Dropzone
              id="dz-logo"
              label="Logo files"
              help="The biggest, clearest version you have. A PDF, PNG, or JPG all work."
              files={logoFiles}
              onAdd={makeAdd(setLogoFiles)}
              onRemove={makeRemove(setLogoFiles)}
              statuses={fileStatuses}
              disabled={busy}
            />

            <div className="field">
              <label className="label" htmlFor="b-colors">Your brand colors</label>
              <span className="help">It is fine to just describe them. For example, deep green and gold.</span>
              <textarea id="b-colors" className="textarea" placeholder="For example: teal green and warm gold."
                value={brand.colors} onChange={setBrandF('colors')} disabled={busy} />
            </div>

            <div className="field">
              <label className="label" htmlFor="b-fonts">Any fonts you use</label>
              <span className="help">If you know them. If not, leave it blank.</span>
              <input id="b-fonts" className="input" type="text" placeholder="For example: Arial on our flyers, or a font you like."
                value={brand.fonts} onChange={setBrandF('fonts')} disabled={busy} />
            </div>

            <div className="field">
              <label className="label" htmlFor="b-voice">How you want the helper to talk</label>
              <span className="help">For example, warm and friendly, or calm and proper.</span>
              <textarea id="b-voice" className="textarea" placeholder="For example: warm and friendly, like a caring doctor. Simple words, never pushy."
                value={brand.voice} onChange={setBrandF('voice')} disabled={busy} />
            </div>

            <Dropzone
              id="dz-photos"
              label="Photos"
              help="Your clinic, your products, your team, and a headshot of you."
              files={photoFiles}
              onAdd={makeAdd(setPhotoFiles)}
              onRemove={makeRemove(setPhotoFiles)}
              statuses={fileStatuses}
              disabled={busy}
            />

            <Dropzone
              id="dz-style"
              label="Anything that shows your style"
              help="An old website screenshot, a flyer, or an ad. Anything helps."
              files={styleFiles}
              onAdd={makeAdd(setStyleFiles)}
              onRemove={makeRemove(setStyleFiles)}
              statuses={fileStatuses}
              disabled={busy}
            />
          </section>

          {/* 3. YOUR TWO BUSINESSES */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">3</span>
              <h2 className="sec-title">Your two businesses</h2>
            </div>
            <p className="sec-desc">A little about each one, so the helper knows them well.</p>

            {/* Wellspring */}
            <div className="subcard">
              <div className="subcard-head"><span className="dot" />Wellspring Clinic</div>
              <div className="field">
                <label className="label" htmlFor="w-name">Name</label>
                <input id="w-name" className="input" type="text" placeholder="Wellspring Clinic"
                  value={wellspring.name} onChange={setWellF('name')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="w-address">Address</label>
                <input id="w-address" className="input" type="text" placeholder="Street, city, postal code"
                  value={wellspring.address} onChange={setWellF('address')} disabled={busy} />
              </div>
              <div className="row2">
                <div className="field">
                  <label className="label" htmlFor="w-phone">Phone</label>
                  <input id="w-phone" className="input" type="tel" inputMode="tel" placeholder="(604) 555 1234"
                    value={wellspring.phone} onChange={setWellF('phone')} disabled={busy} />
                </div>
                <div className="field">
                  <label className="label" htmlFor="w-email">Email</label>
                  <input id="w-email" className="input" type="email" inputMode="email" placeholder="clinic@example.com"
                    value={wellspring.email} onChange={setWellF('email')} disabled={busy} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="w-hours">Open hours</label>
                <input id="w-hours" className="input" type="text" placeholder="For example: Mon to Fri, 9 to 5. Closed weekends."
                  value={wellspring.hours} onChange={setWellF('hours')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="w-services">What you do for patients</label>
                <span className="help">A simple list is perfect. One service per line.</span>
                <textarea id="w-services" className="textarea" placeholder={'For example:\nAcupuncture\nHerbal medicine\nCupping\nEye care visits'}
                  value={wellspring.services} onChange={setWellF('services')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="w-staff">Your staff</label>
                <span className="help">Each person with one or two lines about them.</span>
                <textarea id="w-staff" className="textarea" placeholder={'For example:\nDr. Yu, lead doctor, 20 years of care.\nLina, front desk, books visits and answers calls.'}
                  value={wellspring.staff} onChange={setWellF('staff')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="w-book">How people book a visit</label>
                <textarea id="w-book" className="textarea" placeholder="For example: they call us, or they book online through Jane App."
                  value={wellspring.howPeopleBook} onChange={setWellF('howPeopleBook')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="w-new">Questions you want new patients to answer first</label>
                <textarea id="w-new" className="textarea" placeholder={'For example:\nWhat brings you in today?\nAny health conditions we should know?\nHow did you hear about us?'}
                  value={wellspring.newPatientQuestions} onChange={setWellF('newPatientQuestions')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="w-cancel">Cancel or no show policy</label>
                <textarea id="w-cancel" className="textarea" placeholder="For example: please give us 24 hours notice to change a visit."
                  value={wellspring.cancelPolicy} onChange={setWellF('cancelPolicy')} disabled={busy} />
              </div>
            </div>

            {/* SightSage */}
            <div className="subcard">
              <div className="subcard-head"><span className="dot" />SightSage</div>
              <div className="field">
                <label className="label" htmlFor="s-name">Name</label>
                <input id="s-name" className="input" type="text" placeholder="SightSage"
                  value={sightsage.name} onChange={setSightF('name')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="s-address">Address</label>
                <input id="s-address" className="input" type="text" placeholder="Street, city, postal code"
                  value={sightsage.address} onChange={setSightF('address')} disabled={busy} />
              </div>
              <div className="row2">
                <div className="field">
                  <label className="label" htmlFor="s-phone">Phone</label>
                  <input id="s-phone" className="input" type="tel" inputMode="tel" placeholder="(604) 555 1234"
                    value={sightsage.phone} onChange={setSightF('phone')} disabled={busy} />
                </div>
                <div className="field">
                  <label className="label" htmlFor="s-email">Email</label>
                  <input id="s-email" className="input" type="email" inputMode="email" placeholder="hello@sightsage.com"
                    value={sightsage.email} onChange={setSightF('email')} disabled={busy} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="s-hours">Hours</label>
                <input id="s-hours" className="input" type="text" placeholder="For example: online store, open all the time."
                  value={sightsage.hours} onChange={setSightF('hours')} disabled={busy} />
              </div>
              <div className="field">
                <label className="label" htmlFor="s-notes">Notes</label>
                <span className="help">Anything else about SightSage we should know.</span>
                <textarea id="s-notes" className="textarea" placeholder="For example: we ship across Canada. Our best sellers are the eye drops and the tea."
                  value={sightsage.notes} onChange={setSightF('notes')} disabled={busy} />
              </div>
            </div>
          </section>

          {/* 4. YOUR LOGINS */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">4</span>
              <h2 className="sec-title">Your logins</h2>
            </div>
            <p className="sec-desc">Just the usernames or web links. This helps the helper connect to your tools.</p>

            <div className="secure-note">
              <span className="ic"><IconLock /></span>
              <span>
                <b>Do not type any passwords here.</b> Just give us the usernames or web links. We will send you a safe way
                to share passwords later. Never put a password in a normal email.
              </span>
            </div>

            <div className="field">
              <label className="label" htmlFor="l-website">Website and hosting <span className="opt">(link or username)</span></label>
              <input id="l-website" className="input" type="text" placeholder="For example: a web address, or who hosts your site"
                value={logins.website} onChange={setLoginsF('website')} disabled={busy} />
            </div>
            <div className="field">
              <label className="label" htmlFor="l-shopify">Shopify store <span className="opt">(link or username)</span></label>
              <input id="l-shopify" className="input" type="text" placeholder="For example: yourstore.myshopify.com"
                value={logins.shopify} onChange={setLoginsF('shopify')} disabled={busy} />
            </div>
            <div className="field">
              <label className="label" htmlFor="l-jane">Jane App <span className="opt">(link or username)</span></label>
              <input id="l-jane" className="input" type="text" placeholder="For example: yourclinic.janeapp.com"
                value={logins.janeApp} onChange={setLoginsF('janeApp')} disabled={busy} />
            </div>
            <div className="field">
              <label className="label" htmlFor="l-domain">Domain, your web address <span className="opt">(link or username)</span></label>
              <input id="l-domain" className="input" type="text" placeholder="For example: where you bought your web address"
                value={logins.domain} onChange={setLoginsF('domain')} disabled={busy} />
            </div>
            <div className="field">
              <label className="label" htmlFor="l-google">Google Business page <span className="opt">(link or username)</span></label>
              <input id="l-google" className="input" type="text" placeholder="For example: a link to your Google listing"
                value={logins.googleBusiness} onChange={setLoginsF('googleBusiness')} disabled={busy} />
            </div>
            <div className="field">
              <label className="label" htmlFor="l-sender">An email the helper can send from</label>
              <input id="l-sender" className="input" type="email" inputMode="email" placeholder="For example: hello@yourclinic.com"
                value={logins.senderEmail} onChange={setLoginsF('senderEmail')} disabled={busy} />
            </div>
            <div className="field">
              <label className="label" htmlFor="l-note">A free note <span className="opt">(anything else about logins)</span></label>
              <textarea id="l-note" className="textarea" placeholder="Tell us anything that helps us connect to your tools."
                value={logins.note} onChange={setLoginsF('note')} disabled={busy} />
            </div>
          </section>

          {/* 5. YOUR PRODUCTS */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">5</span>
              <h2 className="sec-title">Your products (SightSage)</h2>
            </div>
            <p className="sec-desc">
              The more you tell us, the better the helper can talk about your products. Share what you can, or just drop a sheet or file.
            </p>

            <div className="field">
              <label className="label" htmlFor="p-notes">Tell us about your products</label>
              <span className="help">Only if it is handy, the points below make helpful prompts. A sheet or file is just as good.</span>
              <textarea id="p-notes" className="textarea tall"
                placeholder={'Only if it is handy, you could share:\nWhat it is and what it does.\nHow it helps the customer.\nWho it is for.\nThe price, the sizes, and how to use it.\nThe questions customers ask the most.\nThe problems it fixes, and why some people hold back.\nStock, shipping, and returns.'}
                value={products.notes} onChange={setProductsF('notes')} disabled={busy} />
            </div>

            <Dropzone
              id="dz-products"
              label="Product sheets, files, and photos"
              help="Drop any product sheet, price list, or clear photo. This saves you a lot of typing."
              files={productFiles}
              onAdd={makeAdd(setProductFiles)}
              onRemove={makeRemove(setProductFiles)}
              statuses={fileStatuses}
              disabled={busy}
            />
          </section>

          {/* 6. YOUR CLINIC CARE */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">6</span>
              <h2 className="sec-title">Your clinic care (Wellspring)</h2>
            </div>
            <p className="sec-desc">A little about each treatment, so the helper can answer patient questions well.</p>

            <div className="field">
              <label className="label" htmlFor="cc-notes">Tell us about your treatments</label>
              <span className="help">For each treatment, the points below help. Write as much or as little as you like.</span>
              <textarea id="cc-notes" className="textarea tall"
                placeholder={'For each treatment, tell us:\nWhat it helps with.\nWhat happens at a visit.\nWho it is for.\nCommon patient questions, and the problems it solves.\nBefore and after care notes.\nThe price, and how long it takes.\nWhether people can book it online.'}
                value={clinicCare.notes} onChange={setClinicF('notes')} disabled={busy} />
            </div>
          </section>

          {/* 7. HELPER RULES */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">7</span>
              <h2 className="sec-title">Helper rules</h2>
            </div>
            <p className="sec-desc">A few simple rules, so the helper always sounds like you.</p>

            <div className="field">
              <label className="label">Languages</label>
              <span className="help">Pick the languages you want the helper to use.</span>
              <div className="checks">
                <label className={'check-chip' + (helper.english ? ' on' : '')}>
                  <input type="checkbox" checked={helper.english}
                    onChange={(e) => setHelper((p) => ({ ...p, english: e.target.checked }))} disabled={busy} />
                  <span className="box"><IconCheck /></span>
                  English
                </label>
                <label className={'check-chip' + (helper.chinese ? ' on' : '')}>
                  <input type="checkbox" checked={helper.chinese}
                    onChange={(e) => setHelper((p) => ({ ...p, chinese: e.target.checked }))} disabled={busy} />
                  <span className="box"><IconCheck /></span>
                  Chinese
                </label>
              </div>
              <input className="input" type="text" placeholder="Any other language? Type it here."
                value={helper.otherLang} onChange={(e) => setHelper((p) => ({ ...p, otherLang: e.target.value }))}
                disabled={busy} style={{ marginTop: 10 }} aria-label="Any other language" />
            </div>

            <div className="field">
              <label className="label" htmlFor="h-discount">Discount for a first order</label>
              <span className="help">The deal for a first order: how much people save, and any rules.</span>
              <input id="h-discount" className="input" type="text" placeholder="For example: 10% off the first order, online only."
                value={helper.discount} onChange={(e) => setHelper((p) => ({ ...p, discount: e.target.value }))} disabled={busy} />
            </div>

            <div className="field">
              <label className="label" htmlFor="h-always">Words it must always use</label>
              <textarea id="h-always" className="textarea" placeholder="Any words or phrases the helper should always use."
                value={helper.alwaysSay} onChange={(e) => setHelper((p) => ({ ...p, alwaysSay: e.target.value }))} disabled={busy} />
            </div>

            <div className="field">
              <label className="label" htmlFor="h-never">Words it must never use</label>
              <textarea id="h-never" className="textarea" placeholder="Any words or phrases the helper should never use."
                value={helper.neverSay} onChange={(e) => setHelper((p) => ({ ...p, neverSay: e.target.value }))} disabled={busy} />
              <div className="fixed-note">
                <IconInfo />
                <span>The helper never gives medical advice. It will never tell people what is wrong with their health.</span>
              </div>
            </div>
          </section>

          {/* 8. ANYTHING ELSE */}
          <section className="section stagger">
            <div className="sec-head">
              <span className="sec-num">8</span>
              <h2 className="sec-title">Anything else</h2>
            </div>
            <p className="sec-desc">Anything we did not ask about. Big or small, it all helps.</p>

            <div className="field">
              <label className="label" htmlFor="e-notes">Notes</label>
              <textarea id="e-notes" className="textarea" placeholder="Tell us anything else you think we should know."
                value={anythingElse.notes} onChange={setElseF('notes')} disabled={busy} />
            </div>

            <Dropzone
              id="dz-else"
              label="Any other files"
              help="Drop anything here. We will sort it out."
              files={elseFiles}
              onAdd={makeAdd(setElseFiles)}
              onRemove={makeRemove(setElseFiles)}
              statuses={fileStatuses}
              disabled={busy}
            />
          </section>

          {/* SUBMIT */}
          <div className="submit-wrap">
            {phase === 'error' && (
              <div className="errorbox" role="alert">
                <span className="ic"><IconAlert /></span>
                <span>{errorMsg}</span>
              </div>
            )}

            {busy && (
              <div className="progress">
                <div className="progress-text">
                  {phase === 'uploading' && progress.total > 0 && (
                    <>Uploading {progress.done} of {progress.total} files...</>
                  )}
                  {phase === 'uploading' && progress.total === 0 && <>Getting things ready...</>}
                  {phase === 'saving' && <>Almost done. Saving your answers...</>}
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: (phase === 'saving' ? 100 : pct) + '%' }} />
                </div>
              </div>
            )}

            <button type="submit" className="btn" disabled={busy} style={{ marginTop: 16 }}>
              {busy ? (
                <>
                  <span className="spin" />
                  {phase === 'saving' ? 'Saving...' : 'Sending...'}
                </>
              ) : phase === 'error' ? (
                'Try sending again'
              ) : (
                'Send it to SecondBrain'
              )}
            </button>

            <p className="submit-reassure">
              <b>You do not need to fill in everything.</b> Send what you have, and you can come back to this page any time.
            </p>
          </div>
        </form>

        <p className="pagefoot">
          <b>SecondBrain</b> is made by Mike Shields and Jordan Kwan. Prepared for Dr. Weidong Yu, Wellspring Clinic and SightSage.
          <br />
          We follow Canada's privacy rules (PIPA and PIPEDA).
        </p>
      </div>
    </>
  );
}
