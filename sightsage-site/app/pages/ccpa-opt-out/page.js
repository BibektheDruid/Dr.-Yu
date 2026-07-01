import ProsePage from '../_prose/ProsePage';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

export const metadata = { title: 'CCPA Opt-out' };

export default function CcpaOptOutPage() {
  return (
    <ProsePage title="Do Not Sell My Personal Information">
      <div className="rte">
        <p>
          Under the California Consumer Privacy Act (CCPA), California residents have the right to opt out
          of the sale of their personal information. If you would like us not to sell your personal
          information, please submit your request using the form below.
        </p>
        <p>
          Under the CCPA, among other rights, California consumers have the right to request that a business
          that sells a consumer&rsquo;s personal data, not sell the consumer&rsquo;s personal data. If you make a
          request, we have one month to respond to you.
        </p>
      </div>

      <form className="mt-8 rounded-2xl border border-brand-light/70 bg-cream p-6 sm:p-8" action="#">
        <h2 className="font-head text-lg font-bold uppercase tracking-[0.03em] text-ink">
          Opt-out Request
        </h2>
        <p className="mt-1 text-sm text-muted">
          Complete the form and we will process your request.
        </p>

        <div className="mt-5 grid gap-4">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-body">Full name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              className="w-full rounded-lg border border-brand-light bg-white px-4 py-2.5 text-body outline-none focus:border-brand"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-body">Email address</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="w-full rounded-lg border border-brand-light bg-white px-4 py-2.5 text-body outline-none focus:border-brand"
            />
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" name="confirm" className="mt-1 h-4 w-4 accent-brand" />
            <span className="text-sm text-body">
              I am a California resident and I request that SightSage does not sell my personal information.
            </span>
          </label>
        </div>

        <Button href="#" variant="primary" className="mt-6 inline-block">
          Submit Request
        </Button>
      </form>

      <p className="mt-8 text-sm text-muted">
        For more information about how we handle your data, please review our{' '}
        <a href={ROUTES.privacy} className="text-brand underline underline-offset-2 hover:text-brand-dark">
          Privacy Policy
        </a>
        .
      </p>
    </ProsePage>
  );
}
