import { redirect } from 'next/navigation';

// The combined page lives at /welcome (the agreement + brand-kit toggle).
// Anyone landing on the root is sent straight there.
export default function Home() {
  redirect('/welcome');
}
