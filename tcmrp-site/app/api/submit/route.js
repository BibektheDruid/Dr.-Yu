import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

// Stores a contact/consultation submission as JSON in Vercel Blob, under submissions/.
// Same pattern as the brand-kit intake-form app; view at /inbox?key=INBOX_KEY.
export async function POST(request) {
  try {
    const data = await request.json();
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const rand = Math.random().toString(36).slice(2, 8);
    const key = `submissions/${stamp}-${rand}.json`;
    const enriched = { ...data, _savedAt: new Date().toISOString() };
    await put(key, JSON.stringify(enriched, null, 2), {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
