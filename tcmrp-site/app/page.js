import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ListenToThis from '@/components/ListenToThis';
import Button from '@/components/Button';
import StatCounter from '@/components/StatCounter';
import IconCard from '@/components/IconCard';
import Accordion from '@/components/Accordion';
import Tabs from '@/components/Tabs';
import VideoThumb from '@/components/VideoThumb';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import StepCard from '@/components/home/StepCard';
import SeasonCard from '@/components/home/SeasonCard';
import { ROUTES } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Holistic Treatment for Retinitis Pigmentosa | Wellspring Clinic' },
  description:
    'Traditional Chinese Medicine treatment for Retinitis Pigmentosa. Personalized care, acupuncture, and herbal medicine. Reach out today!',
};

const TREATMENT_BENEFITS = [
  'Improved night vision and adaptation to darkness',
  'Expanded peripheral visual field',
  'Enhanced color perception',
  'Better visual acuity and clarity',
  'Slowed disease progression',
  'Improved quality of life and independence',
];

const SUPPLEMENTARY_ITEMS = [
  {
    title: 'Supplementary Procedures',
    content: (
      <p>
        Additional in-clinic procedures may be incorporated alongside core acupuncture sessions to
        further support retinal health. These are selected based on each patient&rsquo;s individual
        presentation and response to treatment.
      </p>
    ),
  },
  {
    title: 'Antioxidant Supplements',
    content: (
      <p>
        Targeted antioxidant supplementation helps protect retinal cells from oxidative stress. Our
        protocol includes research-supported supplements chosen to complement the herbal medicine
        component.
      </p>
    ),
  },
  {
    title: 'Diet',
    content: (
      <p>
        Dietary guidance aligned with TCM principles emphasizes foods that nourish liver and kidney
        meridian energy — the organ systems most closely linked to eye health in classical Chinese
        medicine.
      </p>
    ),
  },
  {
    title: 'Exercise',
    content: (
      <p>
        Moderate, consistent physical activity supports overall circulation and systemic vitality.
        Patients receive guidance tailored to their current vision and mobility level.
      </p>
    ),
  },
  {
    title: 'Eye Usage / Hygiene',
    content: (
      <p>
        Daily habits around screen time, lighting, and protective eyewear are reviewed. Consistency in
        eye hygiene practices is an important supporting element of the overall protocol&rsquo;s
        effectiveness.
      </p>
    ),
  },
];

const PATIENT_TABS = [
  {
    label: 'Adriana',
    content: (
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <VideoThumb
          youtubeUrl="https://www.youtube.com/watch?v=YCzKMyCyMXs"
          thumbnail="/wp-content/uploads/2026/06/Image_20260605170548_588_845-768x1024.jpg"
          label="Watch Video"
          className="max-w-sm"
        />
        <div>
          <h2 className="font-display text-2xl leading-snug text-ink md:text-[28px]">
            &quot;After 3 years my vision was so stable and so good that I was so confident. I
            didn&apos;t even remember I had RP.&quot;
          </h2>
          <p className="eyebrow mt-4 text-gold">— ADRIANA</p>
          <p className="mt-5 text-[15px] leading-relaxed text-body">
            Adriana was dealing with severe night blindness and had difficulty walking. Dr. Yu
            immediately recognized that she was experiencing RP and devised a protocol to try to
            stabilize her sight. At first, Adriana was sceptical, but after the treatment, she noticed
            a significant improvement in her night vision. After three years of treatment, her vision
            stabilized further, allowing her to drive and walk her dog independently. She stopped
            treatment in 2003, and her vision remains stable.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: 'Geoff',
    content: (
      <div className="max-w-3xl">
        <h2 className="font-display text-2xl leading-snug text-ink md:text-[28px]">
          &quot;It&rsquo;s working and my eyes are not degenerating, so my vision is completely
          stable.&quot;
        </h2>
        <p className="eyebrow mt-4 text-gold">— GEOFF</p>
        <p className="mt-5 text-[15px] leading-relaxed text-body">
          In 2009, Geoff was diagnosed with RP and told by Western doctors that he would eventually go
          blind. After starting Dr. Yu&rsquo;s protocol, Geoff&rsquo;s visual field has recovered
          enough that he&rsquo;s regained his driver&rsquo;s license and has returned to skiing.
        </p>
      </div>
    ),
  },
  {
    label: 'Sharyn',
    content: (
      <div className="max-w-3xl">
        <h2 className="font-display text-2xl leading-snug text-ink md:text-[28px]">
          &quot;The big and important thing for me was that my visual field began to fill in.&quot;
        </h2>
        <p className="eyebrow mt-4 text-gold">— SHARYN</p>
        <p className="mt-5 text-[15px] leading-relaxed text-body">
          Sharyn from Florida is a milestone patient in the history of Retinitis Pigmentosa (RP). In
          1990, she became the first person in the world to undergo RP genetic testing, which
          identified the Rhodopsin P23H mutation, the first disease-causing gene linked to RP. After 15
          months of treatment at Wellspring Clinic, her visual field expanded from approximately 15
          degrees to 180 degrees, with significant improvement in night vision and no longer needing
          contact lenses.
        </p>
      </div>
    ),
  },
  {
    label: 'Tracy',
    content: (
      <div className="max-w-3xl">
        <h2 className="font-display text-2xl leading-snug text-ink md:text-[28px]">
          &quot;I guess for me, the most important thing that he has done for me is he&apos;s allowed me
          to see my children.&quot;
        </h2>
        <p className="eyebrow mt-4 text-gold">— TRACY</p>
        <p className="mt-5 text-[15px] leading-relaxed text-body">
          Tracy was told to start training with a walking cane when declared legally blind with RP at
          32. As a mother of three, blindness was not an option. After following the protocol,
          Tracy&rsquo;s vision stabilized, and she experienced significant improvement in her peripheral
          vision. She no longer trips, her headaches are gone, and she&rsquo;s returned to teaching.
        </p>
      </div>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Holistic Treatment for Retinitis Pigmentosa"
        subtitle="Treating Retinitis Pigmentosa with Traditional Chinese Medicine"
        align="left"
        image="/wp-content/uploads/2026/06/Image_20260605170506_583_845-768x1024.jpg"
        imageAlt=""
      >
        <Button href={ROUTES.contact} variant="outlineLight" className="px-7">
          Book Free Consultation
        </Button>
        <Button
          href={`${ROUTES.treatment}#wvip-treatment-protocol`}
          variant="outlineLight"
          className="px-7"
        >
          Learn About WVIP
        </Button>
        <div className="mt-8 flex w-full gap-10">
          <StatCounter value={1200} label="Cases Treated" dark />
          <StatCounter value={28} label="Years Experience" dark />
        </div>
      </PageHero>

      {/* EYE CONDITION */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow tone="gold" className="mb-3">EYE CONDITION</Eyebrow>
              <h3 className="font-display text-3xl text-ink md:text-[40px]">
                What is Retinitis Pigmentosa?
              </h3>
              <p className="mt-5 text-body">
                Retinitis Pigmentosa (RP) is a group of rare genetic disorders that involve a
                breakdown and loss of cells in the retina. The retina is the light- sensitive tissue
                that lines the back of the eye, and it&rsquo;s essential for vision.
              </p>

              <div className="mt-8 space-y-5">
                <div className="card p-5">
                  <h3 className="font-display text-lg text-ink">Night Blindness</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">
                    Difficulty seeing in low light or darkness
                  </p>
                </div>
                <div className="card p-5">
                  <h3 className="font-display text-lg text-ink">Tunnel Vision</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">
                    Progressive loss of peripheral vision
                  </p>
                </div>
                <div className="card p-5">
                  <h3 className="font-display text-lg text-ink">Color Vision Loss</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">
                    The majority of RP patients become legally blind before the age of 60.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="hero-green rounded-card p-8 text-white md:p-10">
                <Eyebrow tone="light" className="mb-4">A DIFFERENT PERSPECTIVE</Eyebrow>
                <h3 className="font-display text-3xl leading-tight text-white md:text-[40px]">
                  There is Hope
                  <br />— and a path
                  <br />forward.
                </h3>
                <p className="mt-5 text-white/85">
                  While Western medicine considers RP incurable, Traditional Chinese Medicine offers a
                  different perspective. Through our specialized treatment protocol, we&rsquo;ve helped
                  hundreds of patients improve their vision and quality of life.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="font-display text-2xl text-ink">Vision Improvement Is Possible</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  Our patients have experienced improvements in night vision, peripheral vision, and
                  overall visual function through our comprehensive TCM approach.
                </p>
                <div className="mt-6">
                  <Button href="#discover-our-treatment" variant="outlineGreen">
                    Discover Our Treatment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TREATMENT APPROACH */}
      <section id="discover-our-treatment" className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">TREATMENT APPROACH</Eyebrow>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h3 className="font-display text-3xl text-ink md:text-[40px]">WVIP Treatment Protocol</h3>
            <p className="text-body">
              The Wellspring Vision Improvement Protocol is a comprehensive, patient-centered treatment
              to support vision health.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <IconCard title="Acupuncture">
              Specialized acupuncture points around the eyes and body to improve blood circulation and
              stimulate retinal cell regeneration
            </IconCard>
            <IconCard title="Herbal Medicine">
              Custom-formulated Chinese herbal prescriptions to nourish the liver and kidneys, which
              govern eye health in TCM theory
            </IconCard>
            <IconCard title="Eye Exercises">
              Guided eye movement exercises and self-care techniques to maintain and enhance treatment
              results at home
            </IconCard>
          </div>

          <div className="mt-8">
            <Accordion items={SUPPLEMENTARY_ITEMS} />
          </div>
        </Container>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">METHODOLOGY</Eyebrow>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h3 className="font-display text-3xl text-ink md:text-[40px]">Our Approach</h3>
            <p className="text-body">
              A four-stage protocol that begins with careful diagnosis and continues with personalized
              care, intensive treatment, and long-term support.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <StepCard number="01" title="Initial Consultation">
                Comprehensive TCM diagnosis and vision assessment. We evaluate your condition stage and
                discuss realisticexpectations based on your specific case.
              </StepCard>
              <StepCard number="02" title="Treatment Planning">
                Customized treatment plan (typically 10&ndash;20 day intensive program). For
                early-to-mid stage RP, we have very good chances of helping you improve.
              </StepCard>
              <StepCard number="03" title="Intensive Treatment">
                Daily acupuncture sessions combined with custom herbal formulas during your treatment
                period. Available at our Vancouver, Shanghai, or Shenzhen locations.
              </StepCard>
              <StepCard number="04" title="Follow-up Care">
                Ongoing support with home care program, eye exercises, and periodic check-ins to
                maintain and enhance your results.
              </StepCard>
            </div>

            <div className="space-y-6">
              <div className="card p-8">
                <h2 className="font-display text-2xl text-ink">Treatment Benefits</h2>
                <ul className="mt-5 space-y-3">
                  {TREATMENT_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                      <span aria-hidden="true" className="mt-1 text-green">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-green rounded-card p-8 text-white">
                <Eyebrow tone="light" className="mb-3">PLEASE NOTE</Eyebrow>
                <p className="text-white/90">
                  Results vary by individual, but many patients see improvements within 3&ndash;6
                  months
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">Treatment Options</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="card p-6">
                <h3 className="eyebrow text-gold">STANDARD PROGRAM</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  10&ndash;20 day intensive treatment
                </p>
              </div>
              <div className="card p-6">
                <h3 className="eyebrow text-gold">TRIAL PROGRAM</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  10-day initial treatment for late-stage cases
                </p>
              </div>
              <div className="card p-6">
                <h3 className="eyebrow text-gold">CUSTOMIZED</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  Plans available based on individual needs
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* REAL OUTCOMES */}
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">REAL OUTCOMES</Eyebrow>
          <h3 className="font-display text-3xl text-ink md:text-[40px]">
            See What Our Patients Have to Say
          </h3>

          <div className="mt-10">
            <Tabs tabs={PATIENT_TABS} />
          </div>

          <div className="mt-10">
            <Button href={ROUTES.contact} variant="outlineGreen">
              Book a Free Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* WHY WELLSPRING */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">WHY WELLSPRING</Eyebrow>
          <h3 className="font-display text-3xl text-ink md:text-[40px]">
            The Wellspring Difference
          </h3>
          <div className="mt-6 max-w-3xl space-y-5 text-body">
            <p>
              Dr. Yu takes a holistic approach to RP by personally seeing every patient who walks
              through our doors and listening to their story. With a patient&rsquo;s unique symptoms
              and medical history in mind, Dr. Yu designs a custom treatment plan to stabilize and
              preserve their vision.
            </p>
            <p>
              His goal is to ensure each person is treated with compassion, respect, and endless
              patience. Having listened to their countless stories, Dr. Yu has a deep understanding of
              what it&rsquo;s like to live with the weight of RP and created his protocol to help
              restore patients&rsquo; quality of life. His dedication to making each person feel seen
              and valued is why Wellspring has worked with over
            </p>
          </div>
        </Container>
      </section>

      {/* WHERE WE TREAT */}
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">WHERE WE TREAT</Eyebrow>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h3 className="font-display text-3xl text-ink md:text-[40px]">Treatment Locations</h3>
            <p className="text-body">
              We serve patients at three convenient locations across North America and Asia
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <p className="eyebrow text-gold">MAIN CLINIC</p>
              <h3 className="mt-3 eyebrow text-green">CANADA</h3>
              <h3 className="mt-1 font-display text-2xl text-ink">Vancouver</h3>
              <a
                href="https://maps.app.goo.gl/8YsEqH6aHdrJq7H7A"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[15px] leading-relaxed text-body hover:text-green"
              >
                916 W King Edward Ave Vancouver, BC V5Z 2E2
              </a>
              <p className="mt-4 font-medium text-ink">4 Treatment Periods / Year</p>
              <p className="mt-1 text-[15px] leading-relaxed text-body">
                Year-round availability with comprehensive facilities
              </p>
            </div>

            <div className="card p-6">
              <p className="eyebrow text-gold">ASIA TREATMENT CENTER</p>
              <h3 className="mt-3 eyebrow text-green">CHINA</h3>
              <h3 className="mt-1 font-display text-2xl text-ink">Shanghai</h3>
              <a
                href="https://maps.app.goo.gl/yBg5FkYQW1dE2uQP9"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[15px] leading-relaxed text-body hover:text-green"
              >
                Shanghai, China
                <br />
                Contact for exact address
              </a>
              <p className="mt-4 font-medium text-ink">4 Treatment Periods / Year</p>
              <p className="mt-1 text-[15px] leading-relaxed text-body">
                Convenient for patients from Asia- Pacific region
              </p>
            </div>

            <div className="card p-6">
              <p className="eyebrow text-gold">SOUTH CHINA CENTER</p>
              <h3 className="mt-3 eyebrow text-green">CHINA</h3>
              <h3 className="mt-1 font-display text-2xl text-ink">Shenzhen</h3>
              <a
                href="https://maps.app.goo.gl/7BXvUU7omfPLUPY26"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[15px] leading-relaxed text-body hover:text-green"
              >
                Shenzhen, China
                <br />
                Contact for exact address
              </a>
              <p className="mt-4 font-medium text-ink">3 Treatment Periods / Year</p>
              <p className="mt-1 text-[15px] leading-relaxed text-body">
                Close to Hong Kong and Southeast Asia
              </p>
            </div>
          </div>

          <div className="mt-8 hero-green rounded-card p-8 text-white md:p-10">
            <h2 className="font-display text-2xl text-white md:text-[28px]">
              International Patient Services
            </h2>
            <p className="mt-4 max-w-3xl text-white/85">
              We welcome patients from around the world. Our multi- location approach ensures you can
              access treatment at a convenient location. Treatment schedules rotate throughout the year
              &mdash; contact us to find the next available session at your preferred location.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-white/90">
                <span aria-hidden="true">✓</span> Travel Assistance Available
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span aria-hidden="true">✓</span> Accommodation Guidance
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span aria-hidden="true">✓</span> Multilingual Support
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PLAN YOUR VISIT */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">PLAN YOUR VISIT</Eyebrow>
          <h3 className="font-display text-3xl text-ink md:text-[40px]">Treatment Schedule</h3>
          <p className="mt-4 max-w-2xl text-body">
            Plan your visit &mdash; Dr. Yu&rsquo;s treatment periods across our three locations
          </p>

          <div className="mt-8 card p-6 md:p-8">
            <p className="eyebrow text-gold">2026&ndash;2027 TREATMENT PERIODS</p>
            <p className="mt-3 text-body">
              Dr. Yu rotates between three locations throughout the year. Each treatment period runs for
              approximately 2&ndash;4 weeks.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <p className="eyebrow text-green">CANADA</p>
                <h3 className="mt-1 font-display text-xl text-ink">Vancouver</h3>
                <div className="mt-4 space-y-3">
                  <SeasonCard season="Spring 2026" range="March – April" />
                  <SeasonCard season="Summer 2026" range="July – August" />
                  <SeasonCard season="Fall 2026" range="October – November" />
                  <SeasonCard season="Winter 2027" range="January – February" />
                </div>
              </div>

              <div>
                <p className="eyebrow text-green">CHINA</p>
                <h3 className="mt-1 font-display text-xl text-ink">Shanghai</h3>
                <div className="mt-4 space-y-3">
                  <SeasonCard season="Spring 2026" range="April – May" />
                  <SeasonCard season="Summer 2026" range="June – July" />
                  <SeasonCard season="Fall 2026" range="September – October" />
                  <SeasonCard season="Spring 2026" range="March – April" />
                </div>
              </div>

              <div>
                <p className="eyebrow text-green">CHINA</p>
                <h3 className="mt-1 font-display text-xl text-ink">Shenzhen</h3>
                <div className="mt-4 space-y-3">
                  <SeasonCard season="Spring 2026" range="May – June" />
                  <SeasonCard season="Fall 2026" range="August – September" />
                  <SeasonCard season="Winter 2026" range="November – December" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 card p-6 md:p-8">
            <h2 className="font-display text-2xl text-ink">Important Notes</h2>
            <ul className="mt-5 space-y-4 text-[15px] leading-relaxed text-body">
              <li>
                <span className="font-semibold text-ink">Book Early</span>: Treatment slots fill up
                quickly. Contact us 2&ndash;3 months in advance.
              </li>
              <li>
                <span className="font-semibold text-ink">Flexible Dates</span>: Exact dates may vary.
                Confirm specific dates when booking.
              </li>
              <li>
                <span className="font-semibold text-ink">Treatment Duration</span>: Standard programs
                are 10&ndash;20 days. Plan your travel accordingly.
              </li>
              <li>
                <span className="font-semibold text-ink">Contact Kathy</span>: All appointments must be
                coordinated through our patient coordinator.
              </li>
            </ul>
          </div>

          <div className="mt-8 hero-green rounded-card p-8 text-center text-white md:p-10">
            <Button href={ROUTES.contact} variant="outlineLight" className="px-8">
              Contact Us to Book Your Treatment Period
            </Button>
          </div>
        </Container>
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">GET IN TOUCH</Eyebrow>
          <h3 className="font-display text-3xl text-ink md:text-[42px]">
            Contact the Wellspring Clinic
          </h3>
          <p className="mt-5 max-w-2xl text-body">
            If you or a loved one is experiencing vision challenges from Retinitis Pigmentosa, our team
            is here to help you explore your options. You don&rsquo;t have to go through this alone.
            Reach out today, and we&rsquo;ll guide you through the next steps.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <CTASection />
    </>
  );
}
