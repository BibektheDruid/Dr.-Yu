import Container from '@/components/Container';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import { ACCOUNT_HREF } from '@/lib/site';
import PageHero from '../_components/PageHero';

export const metadata = {
  title: 'Vision Club',
  description:
    'Join the SightSage Vision Club cash-back program: free sign-up, 10% off your first purchase, and cash back on every purchase.',
};

const STEPS = [
  {
    n: '01',
    title: 'Sign-Up',
    body: 'Just sign up — it’s absolutely free and entirely digital! Begin your journey to a world of perks at sightsage.com. Unleash the full potential of our cash-back program with a simple click.',
  },
  {
    n: '02',
    title: 'Earn Points',
    body: 'Collect points effortlessly! Follow us, celebrate, and share to boost your tally. Invite friends for bonus points. Quick, fun, and rewarding—start collecting now!',
  },
  {
    n: '03',
    title: 'Redeem Cash-Back',
    body: 'Dive into a sea of perks with our points system! Every purchase you make, brings you closer to get cash-back for your favorite products.',
  },
];

const FAQS = [
  {
    title: 'What do I need to know before signing up to the vision club membership?',
    content:
      'The Vision Club Membership is a digital loyalty programme where you collect points with every online purchase. When collecting points, you unlock special offers, rewards and much more. You will find all your digital receipts from online purchases in your membership account. Our membership is free to join, but you must be 18 years to become a member or 16 with consent from your parents or legal guardian.',
  },
  {
    title: 'How do I collect points?',
    content:
      'All your online are rewarded with points. Your points will be displayed on your membership account which can take up to 24 hours to update.',
  },
  {
    title: 'Where can I find my rewards?',
    content:
      'You will receive updated information about your current offers and rewards on your account page on sightsage.com. Please note that a redeemed discount reward cannot be returned and reused.',
  },
  {
    title: 'For how long are my points valid?',
    content: 'Your points are valid for lifetime.',
  },
  {
    title: 'How do I get my welcome offer?',
    content:
      "Sign up for an account at sightsage.com and instantly unlock a special 10% welcome discount for your first purchase. Just enter the code 'WELCOME' at checkout. This exclusive offer is our way of saying hello to new shoppers like you! If you need any assistance, our Customer Service team is ready to help. Remember, this treat is just for our first-time buyers. Happy shopping!",
  },
  {
    title: 'What are cash back points and how do I earn them?',
    content:
      'Cash back points are the rewards you earn with every purchase on our website. For every dollar you spend, you receive a certain number of points. Once accumulated, these points act as cash back that you can use for discounts on future purchases.',
  },
  {
    title: 'Can I convert my cash back points into cash?',
    content:
      'No, cash back points are not transferable to cash or any other form of refund. They are exclusively used as a credit for purchases on our website.',
  },
  {
    title: 'Is there a limit on the amount of cash back points I can earn?',
    content:
      "There is no limit to the number of cash back points you can accumulate. The more you shop, the more points you'll earn for future savings!",
  },
];

export default function VisionClubPage() {
  return (
    <main>
      <PageHero
        eyebrow="Unlock Exclusive Benefits"
        title="Join Our Cash Back Program"
        subtitle="Embrace Exclusive Member Benefits: Free Sign-up, 10% Off Your First Purchase, Earn cash back on every purchase! Get money back in your account with each order and More!"
      >
        <Button href={ACCOUNT_HREF} variant="outlineLight">
          Join Now
        </Button>
      </PageHero>

      <Container className="py-16">
        <h2 className="text-center font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
          How It Works
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="font-head text-3xl font-bold text-brand/30">{s.n}</span>
              <h3 className="mt-2 font-head text-lg font-bold uppercase tracking-[0.03em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={ACCOUNT_HREF} variant="primary">
            Join Now
          </Button>
        </div>
      </Container>

      <section className="bg-sand py-16">
        <Container className="max-w-3xl">
          <h2 className="text-center font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
            FAQ
          </h2>
          <Accordion items={FAQS} single className="mt-8" />
        </Container>
      </section>
    </main>
  );
}
