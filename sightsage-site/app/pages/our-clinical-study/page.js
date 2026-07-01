import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';
import PageHero from '../_components/PageHero';

export const metadata = {
  title: 'Our Clinical Study',
  description:
    'SightSage sponsored a registered, randomized double-blind clinical trial of its blueberry supplement for dry eye disease — “PLUM,” ClinicalTrials.gov NCT05027087.',
};

const TRIAL_FACTS = [
  { label: 'Registry ID', value: 'NCT05027087' },
  { label: 'Sponsor', value: 'SightSage Foods and Nutrition Inc.' },
  { label: 'Design', value: 'Interventional · Randomized · Double-blind · Parallel-group' },
  { label: 'Enrollment', value: '68 adults (18+) with documented dry eye' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Status', value: 'Completed (January 2023)' },
];

export default function ClinicalStudyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Backed by Research"
        title="Our Clinical Study"
        subtitle="SightSage’s blueberry supplement for dry eye disease has been evaluated in a registered, randomized, double-blind clinical trial — “The Effect of a Novel Blueberry Supplement on Dry Eye Disease (PLUM).”"
      >
        <Button
          href="https://clinicaltrials.gov/study/NCT05027087"
          variant="outlineLight"
        >
          View on ClinicalTrials.gov
        </Button>
      </PageHero>

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-body sm:text-base">
            <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink">
              The PLUM Trial
            </h2>
            <p>
              SightSage has conducted a company-sponsored, completed, randomized double-blind trial
              of its blueberry gummy for dry eye disease, registered on ClinicalTrials.gov as{' '}
              <strong>NCT05027087 (“PLUM”)</strong>. This is a trial of a novel blueberry supplement
              (blueberry-powder gummy bears versus placebo) for dry eye disease, supporting our
              Blueberry Gummies and our broader commitment to evidence-based vision wellness.
            </p>
            <p>
              The trial was sponsored by SightSage Foods and Nutrition Inc. It was interventional,
              randomized, double-blind and parallel-group in design. Enrollment was 68 adults (18 and
              older) with documented dry eye. The primary outcomes were the change in OSDI score and
              tear break-up time measured over four weeks. The study is listed as completed (January
              2023).
            </p>
            <p className="text-sm text-muted">
              This is a genuine registered trial sponsored by SightSage. As of retrieval, results
              have not yet been posted to the registry and the full results are not yet published in a
              peer-reviewed journal. The information above reflects the trial as registered on
              ClinicalTrials.gov.
            </p>
            <div className="pt-2">
              <Button href={ROUTES.eyeHealth} variant="primary">
                Shop Eye Health
              </Button>
            </div>
          </div>

          <aside className="card p-6">
            <h3 className="font-head text-lg font-bold uppercase tracking-[0.04em] text-brand">
              Trial at a Glance
            </h3>
            <dl className="mt-5 divide-y divide-[#ece7f1]">
              {TRIAL_FACTS.map((f) => (
                <div key={f.label} className="flex flex-col gap-0.5 py-3">
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-muted">
                    {f.label}
                  </dt>
                  <dd className="text-[15px] font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://clinicaltrials.gov/study/NCT05027087"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-bold text-brand underline underline-offset-2 hover:text-brand-dark"
            >
              Read the full record →
            </a>
          </aside>
        </div>
      </Container>

      <section className="bg-sand py-14">
        <Container className="text-center">
          <h2 className="font-head text-2xl font-bold uppercase tracking-[0.02em] text-ink sm:text-3xl">
            Developed by Dr. Yu and Kathy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body sm:text-base">
            Our products combine Contemporary Nutrition Science with Traditional Chinese Medicine
            Wisdom — formulated by Dr. Weidong Yu and co-founder Kathy Zhang.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href={ROUTES.ourFounder} variant="primary">
              Meet Our Founder
            </Button>
            <Button href={ROUTES.whoWeAre} variant="outline">
              Who We Are
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
