import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ListenToThis from '@/components/ListenToThis';
import Button from '@/components/Button';
import IconCard from '@/components/IconCard';
import Accordion from '@/components/Accordion';
import Tabs from '@/components/Tabs';
import JourneyStep from '@/components/treatment/JourneyStep';
import CaseStudy from '@/components/treatment/CaseStudy';
import { ROUTES } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Retinitis Pigmentosa Treatment - Wellspring Clinic' },
  description:
    'The Wellspring Protocol for treatment of Retinitis Pigmentosa (RP) is rooted in the holistic principles of Traditional Chinese Medicine (TCM).',
};

const PROTOCOL_EXTRAS = [
  {
    title: 'Supplementary Procedures',
    content:
      'Additional in-clinic procedures may be incorporated alongside core acupuncture sessions to further support retinal health. These are selected based on each patient’s individual presentation and response to treatment.',
  },
  {
    title: 'Antioxidant Supplements',
    content:
      'Targeted antioxidant supplementation helps protect retinal cells from oxidative stress. Our protocol includes research-supported supplements chosen to complement the herbal medicine component.',
  },
  {
    title: 'Diet',
    content:
      'Dietary guidance aligned with TCM principles emphasizes foods that nourish liver and kidney meridian energy — the organ systems most closely linked to eye health in classical Chinese medicine.',
  },
  {
    title: 'Exercise',
    content:
      'Moderate, consistent physical activity supports overall circulation and systemic vitality. Patients receive guidance tailored to their current vision and mobility level.',
  },
  {
    title: 'Eye Usage / Hygiene',
    content:
      'Daily habits around screen time, lighting, and protective eyewear are reviewed. Consistency in eye hygiene practices is an important supporting element of the overall protocol’s effectiveness.',
  },
];

export default function TreatmentPage() {
  return (
    <>
      <PageHero align="left" title="Retinitis Pigmentosa Treatment">
        <div className="mt-2 max-w-xl space-y-5 text-white/85">
          <p>
            The Wellspring Protocol for treatment of Retinitis Pigmentosa (RP) is rooted in the holistic
            principles of Traditional Chinese Medicine (TCM). After undergoing the protocol, patients have
            reported improved visual acuity, visual field expansion, and improved night vision.
          </p>
          <p>
            The protocol was created in 1999 and has since been followed by 1200+ patients. It’s designed
            improve circulation, energy flow, and organ balance, which support the body’s natural healing
            processes.
          </p>
        </div>
      </PageHero>

      {/* WVIP TREATMENT PROTOCOL */}
      <section id="wvip-treatment-protocol" className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">TREATMENT APPROACH</Eyebrow>
          <div className="md:flex md:items-end md:justify-between md:gap-10">
            <h2 className="font-display text-3xl text-ink md:text-[42px]">WVIP Treatment Protocol</h2>
            <p className="mt-4 max-w-md text-body md:mt-0">
              The Wellspring Vision Improvement Protocol is a comprehensive, patient-centered treatment to
              support vision health.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <IconCard icon="/wp-content/uploads/2026/05/nutrient-2.svg" iconAlt="" title="Acupuncture">
              Specialized acupuncture points around the eyes and body to improve blood circulation and
              stimulate retinal cell regeneration
            </IconCard>
            <IconCard icon="/wp-content/uploads/2026/05/vitamin-2.svg" iconAlt="" title="Herbal Medicine">
              Custom-formulated Chinese herbal prescriptions to nourish the liver and kidneys, which govern
              eye health in TCM theory
            </IconCard>
            <IconCard icon="/wp-content/uploads/2026/05/run-2.svg" iconAlt="" title="Eye Exercises">
              Guided eye movement exercises and self-care techniques to maintain and enhance treatment
              results at home
            </IconCard>
          </div>

          <Accordion className="mt-6" items={PROTOCOL_EXTRAS} />
        </Container>
      </section>

      {/* INITIAL ASSESSMENT */}
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">INITIAL ASSESSMENT</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">How Patients Are Assessed</h2>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-body">
              <p>
                Dr. Yu meets with every patient to evaluate their symptoms, overall health, and identify
                other factors that may be affecting their vision.
              </p>
              <p>
                Every patient begins with comprehensive eye testing to establish a baseline. From there,
                Dr. Yu tracks visual field and functional symptoms to measure progress against that
                foundation over time.
              </p>
              <p>It should be noted that most patients see improvement that same day.</p>
              <p>
                For instance, our patient Miguel’s vision improved significantly after just one day of
                treatment. On the morning of his first meeting with Dr. Yu, Miguel could barely read the
                first line of the eye chart, even though he was standing only three feet away. Yet, by the
                afternoon of that very same day, he could read up to line 19, improving by 10 lines. (See
                beside)
              </p>
              <p>
                After 10 days of treatment （this is the typical treatment plan,  10 days (30 treatments)) ,
                Miguel’s vision improved by 5 lines at 10 feet. On the first morning he could not read the
                chart, but by day ten he could read multiple lines clearly.
              </p>
            </div>
            <div className="relative">
              <img
                src="/wp-content/uploads/2026/05/Rectangle-29.jpg"
                alt=""
                className="w-full rounded-2xl object-cover shadow-card"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CONSISTENCY FOR PROGRESS + PHILOSOPHY */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div>
              <ListenToThis tone="default" className="mb-6" />
              <Eyebrow tone="gold" className="mb-3">DAILY COMMITMENT MATTERS</Eyebrow>
              <h2 className="font-display text-3xl text-ink md:text-[40px]">Consistency For Progress</h2>
              <div className="mt-6 space-y-5 text-body">
                <p>
                  Consistency is at the core of the protocol’s effectiveness. Any and all future benefits
                  are tied directly to the patient’s cumulative daily actions. That’s why it’s crucial to
                  drink the customized herbal tea, take the supplements as directed, and be consistent with
                  exercise. Doing so helps address any deficiencies and restores balance to the body,
                  allowing it to be primed for self-healing.
                </p>
                <p>
                  For context, Dr. Yu Weidong once treated a pair of siblings from Mexico. They were
                  advised to practice eye exercises regularly after returning home. The sister followed the
                  recommendation and practiced three to four times daily, while the brother only practiced
                  occasionally.
                </p>
                <p>
                  The result? When they returned for follow-up treatment, the sister’s visual field
                  expanded dramatically and was almost comparable to that of a normal person. Meanwhile,
                  the brother’s improvement was only about 30–40%.
                </p>
                <p>
                  This case demonstrates how consistent rehabilitation exercises can significantly
                  influence treatment outcomes.
                </p>
              </div>
            </div>

            <div className="hero-green flex flex-col justify-center rounded-2xl p-8 text-white md:p-10">
              <Eyebrow tone="light" className="mb-3">OUR TREATMENT PHILOSOPHY</Eyebrow>
              <h3 className="font-display text-2xl text-white md:text-[32px]">
                The Philosophy Behind Our Protocol
              </h3>
              <div className="mt-6 space-y-5 text-white/85">
                <p>
                  We have one guiding principle when treating RP: support the vision you have and strengthen
                  the systems that protect it. Our focus on functional vision is rooted in restoring balance
                  to your body’s vital organs and energy systems, creating the perfect condition to
                  stabilize and preserve your sight.
                </p>
                <p>
                  Above all, mindset matters. A long-term management approach is essential to the process.
                  The body is a complex system, and meaningful results come from consistent, nuanced care
                  that evolves over time. Dr. Yu firmly believes that reducing stress is also imperative to
                  improving vision. Living mindfully and maintaining a positive attitude has helped his
                  1200+ patients create the best conditions for enhanced eye health.
                </p>
              </div>
              <div className="mt-8">
                <Button href={ROUTES.contact} variant="outlineLight">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* METHODOLOGY — PATIENT JOURNEY */}
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">METHODOLOGY</Eyebrow>
          <div className="md:flex md:items-end md:justify-between md:gap-10">
            <h2 className="max-w-xl font-display text-3xl text-ink md:text-[42px]">
              The Patient Journey: Step By Step
            </h2>
            <div className="mt-6 md:mt-0">
              <Button href={ROUTES.contact} variant="outlineGreen">
                Book a Free Consultation
              </Button>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-body">
            Once the 3 months are completed, you are advised to undergo an eye exam and visual field test by
            your local eye specialist. Dr. Yu will review the results and refine treatment accordingly.
            Then, the cycle begins again, and you return to Vancouver for the next round of treatment.
          </p>

          <div className="mt-10">
            <JourneyStep number="01" title="Online Consultation">
              You will meet with a Wellspring team member to discuss the essential medical reports to bring
              with you for Dr. to review during your meeting.  Our staff can provide assistance with your
              Visa application, referral support, and travel logistics.
            </JourneyStep>
            <JourneyStep number="02" title="Evaluation/Intake">
              You will meet Dr. Yu in Vancouver, BC. During this time, he will discuss your symptoms, your
              medical history, and your overall well-being. Based on your responses and his observations,
              Dr. Yu will then build a personalized treatment plan for your needs.
            </JourneyStep>
            <JourneyStep number="03" title="Initial Program">
              You will stay in Vancouver for approximately 6 to 10 days, during which time you will receive
              between 18 to 30 acupuncture treatments. You’ll drink Dr. Yu’s customized blend of
              health-supporting herbs and carefully selected nutritional supplements.
            </JourneyStep>
            <JourneyStep number="04" title="Follow Up/Maintenance">
              You will be provided with a 3-month supply of your bespoke herbal recipe to brew at home
              daily, as well as additional supplements.
            </JourneyStep>
          </div>
        </Container>
      </section>

      {/* EXPECTATIONS + OUTCOMES */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">RESULTS THAT MATTER</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">Expectations + Outcomes</h2>
          <p className="mt-6 max-w-3xl text-body">
            While outcomes vary from patient to patient, many who follow the protocol report meaningful
            improvements in their functional vision. Some can walk independently, write with ease, read
            books again, drive, and enjoy sunshine without wincing.
          </p>

          <div className="card mt-8 flex max-w-3xl gap-3 p-5">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b8962e"
              strokeWidth="2"
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5" strokeLinecap="round" />
              <circle cx="12" cy="16.5" r="0.6" fill="#b8962e" stroke="none" />
            </svg>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-gold">DISCLAIMER:</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-body">
                The Wellspring Vision Improvement Protocol is a complementary modality based on Traditional
                Chinese Medicine. It is not a cure for Retinitis Pigmentosa. Individual results vary based on
                symptoms and unique medical histories. This protocol is intended to support functional
                vision and well-being and should not replace care from a licensed eye specialist.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href={ROUTES.contact} variant="green">
              Book a Free Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* PATIENT CASE STUDIES */}
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">CASE STUDIES</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">Patient Case Studies</h2>

          <div className="mt-10">
            <Tabs
              tabs={[
                {
                  label: 'Esther’s',
                  content: (
                    <CaseStudy
                      youtubeUrl="https://www.youtube.com/watch?v=_4_uhjmpTMQ"
                      quote="&ldquo;Every day was an amazing moment because every day I felt a miracle happening every day.&rdquo;"
                      attribution="— ESTHER"
                      body="Esther’s vision began deteriorating as a teenager, eventually costing her her driver’s license and threatening her teaching career. After beginning the protocol, her peripheral vision expanded dramatically and her night vision improved significantly. She could see yellow again (important for teaching!). Her husband calls it “miraculous,” and Esther has hope again."
                    />
                  ),
                },
                {
                  label: 'Sam',
                  content: (
                    <CaseStudy
                      youtubeUrl="https://www.youtube.com/watch?v=fl6-sSrRMjA"
                      quote="&ldquo;Night glare day glare has improved substantially I don't even notice them anymore I see better at nighttime.&rdquo;"
                      attribution="— SAM"
                      body="Sam tried supplements and light therapy, but his vision continued to deteriorate. Running out of hope and options, Sam tried the intensive protocol. He reported significant improvements in peripheral vision, night vision, visual acuity, and reduced light sensitivity during both day and night. His confidence skyrocketed, and he has a more positive outlook."
                    />
                  ),
                },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
