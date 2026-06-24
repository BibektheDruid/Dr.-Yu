import { list } from '@vercel/blob';

export const dynamic = 'force-dynamic';

// Walk the submission object and collect anything that looks like an uploaded
// file ({ url, name }) so we can show download links.
function collectFiles(value, out) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach((v) => collectFiles(v, out));
    return;
  }
  if (typeof value.url === 'string') {
    out.push({ name: value.name || value.url.split('/').pop(), url: value.url });
    return;
  }
  Object.values(value).forEach((v) => collectFiles(v, out));
}

const wrap = { maxWidth: 920, margin: '0 auto', padding: '32px 18px', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', color: '#16202c' };

export default async function Inbox({ searchParams }) {
  const key = searchParams?.key;
  const expected = process.env.INBOX_KEY;

  if (!expected || key !== expected) {
    return (
      <main style={wrap}>
        <h1 style={{ color: '#0b6b5e' }}>SecondBrain Inbox</h1>
        <p style={{ color: '#46566a' }}>
          This page is private. Add <code>?key=YOUR_KEY</code> to the URL to view submissions.
        </p>
      </main>
    );
  }

  let blobs = [];
  try {
    const res = await list({ prefix: 'submissions/' });
    blobs = res.blobs || [];
  } catch (e) {
    return (
      <main style={wrap}>
        <h1 style={{ color: '#0b6b5e' }}>SecondBrain Inbox</h1>
        <p style={{ color: '#b4341f' }}>Could not read submissions: {e.message}</p>
      </main>
    );
  }

  blobs.sort((a, b) => (a.pathname < b.pathname ? 1 : -1));

  const subs = await Promise.all(
    blobs.map(async (b) => {
      try {
        const r = await fetch(b.url, { cache: 'no-store' });
        return { meta: b, data: await r.json() };
      } catch {
        return { meta: b, data: null };
      }
    })
  );

  return (
    <main style={wrap}>
      <h1 style={{ color: '#0b6b5e', marginBottom: 4 }}>SecondBrain Inbox</h1>
      <p style={{ color: '#7c8794', marginBottom: 24 }}>{subs.length} submission(s). Newest first.</p>

      {subs.length === 0 && <p style={{ color: '#46566a' }}>No submissions yet.</p>}

      {subs.map(({ meta, data }) => {
        const files = [];
        if (data) collectFiles(data, files);
        const when = data?._savedAt || data?.submittedAt || meta.uploadedAt;
        const who = data?.contact?.name || data?.contact?.email || 'Submission';
        return (
          <section
            key={meta.pathname}
            style={{ border: '1px solid #e3e8ed', borderRadius: 14, padding: 20, marginBottom: 18, boxShadow: '0 4px 14px rgba(20,40,60,.05)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
              <strong style={{ fontSize: 17 }}>{who}</strong>
              <span style={{ color: '#7c8794', fontSize: 13 }}>{when ? new Date(when).toLocaleString() : ''}</span>
            </div>

            {files.length > 0 && (
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', color: '#9a7726', marginBottom: 8 }}>
                  Files ({files.length})
                </div>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {files.map((f, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>
                      <a href={f.url} target="_blank" rel="noreferrer" style={{ color: '#155bff' }}>
                        {f.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <details>
              <summary style={{ cursor: 'pointer', color: '#0b6b5e', fontWeight: 600 }}>All answers</summary>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: '#f6f8f9', border: '1px solid #e3e8ed', borderRadius: 10, padding: 14, marginTop: 10, fontSize: 12.5, lineHeight: 1.5 }}>
                {data ? JSON.stringify(data, null, 2) : '(could not read this submission)'}
              </pre>
            </details>
          </section>
        );
      })}
    </main>
  );
}
