import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import ListenToThis from '@/components/ListenToThis';
import Accordion from '@/components/Accordion';

export const metadata = {
  title: { absolute: 'FAQ - Wellspring Clinic' },
  description:
    'Frequently asked questions about Traditional Chinese Medicine treatment for Retinitis Pigmentosa at the Wellspring Clinic.',
};

const faqItems = [
  {
    title: '1. Who is a fit for treatment?',
    content: (
      <p>
        Most patients seeking treatment have already been diagnosed with Retinitis Pigmentosa (RP) by an
        ophthalmologist. The biggest benchmark for treatment is the level of remaining functional vision.
        Patients who can still read books are strong candidates and often have the most potential for
        improvement. Those who cannot read but retain partial vision may still pursue treatment, though
        results may be limited. Patients with only light perception typically have a very low chance of
        improvement as the condition is often far too deteriorated for effective intervention through TCM.
        The earlier RP is addressed, the better chance there is to stabilize and preserve one&rsquo;s vision.
      </p>
    ),
  },
  {
    title: '2. What stage of Retinitis Pigmentosa is most suitable?',
    content: (
      <p>
        The best candidates for treatment are those who can still read books. Those who cannot read
        books but still retain partial vision are welcome, but results will likely be limited.
      </p>
    ),
  },
  {
    title: '3. How soon can I expect changes?',
    content: (
      <p>
        While we cannot guarantee vision improvement, the experiences of patients who do report
        improvement vary. Some noticed improvements during the first cycle of intensive treatment.
        Others noticed some improvement during the second cycle or while following the treatment at
        home.
      </p>
    ),
  },
  {
    title: '4. What does treatment involve?',
    content: (
      <>
        <p>Treatment is divided into three phases:</p>
        <p className="mt-3">
          <strong>PHASE ONE:</strong> An online consultation with a member of the Wellspring team. They
          will guide you through the essential medical reports needed for your meeting with Dr. Yu in
          Vancouver, BC. They will also provide support with obtaining the necessary Visa for travel to
          Canada and other travel logistics.
        </p>
        <p className="mt-3">
          <strong>PHASE TWO:</strong> Travel to Vancouver, meet with Dr. Yu, and begin an intensive
          protocol of customized treatment. Patients stay for approximately 6 to 10 days, during which
          time they will receive between 18 to 30 acupuncture treatments.
        </p>
        <p className="mt-3">
          <strong>PHASE THREE:</strong> Patients are provided with a 3-month supply of a bespoke herbal
          tea recipe and supplements to take home. These must be taken every day. Once the 3 months is
          completed, patients are advised to undergo an eye exam and visual field test by a local eye
          specialist. Dr. Yu will review the results and adjust accordingly. Then, the cycle starts
          again, with travel back to Vancouver to start the next round of treatment.
        </p>
      </>
    ),
  },
  {
    title: '5. How long do patients typically commit?',
    content: (
      <p>
        The majority of our patients commit to at least one cycle of treatment of following protocol.
        Most continue with the protocol as they see progress.
      </p>
    ),
  },
  {
    title: '6. Can international patients do this?',
    content: (
      <p>
        Yes! A majority of our patients come from outside Canada. Our staff can provide assistance with
        your Visa application, referral support, and travel logistics. When it comes to continuing
        treatment, the protocol is easy to follow and can be done from the comfort of your home.
      </p>
    ),
  },
  {
    title: '7. How do you track progress?',
    content: (
      <>
        <p>
          Dr. Yu tracks progress through clinical observation, patient feedback, and functional vision
          testing. He establishes a baseline during the first round of treatment and measures any and
          all progress against it. He carefully monitors changes in symptoms such as night vision, light
          sensitivity, visual clarity, and the patient&rsquo;s ability to perform everyday activities
          like reading or navigating independently. To capture the baseline measurements, the Patients
          stand in front of a wall with marked reference points and identifies the farthest point they
          can clearly see in four directions—up, down, left, and right. The distances are recorded to
          evaluate functional vision.
        </p>
        <p className="mt-3">
          Because the test only requires a marked wall and basic measurements, no expensive equipment is
          needed. The process is straightforward, quick, and can even be replicated at home, while still
          providing meaningful clinical insight into visual improvement.
        </p>
      </>
    ),
  },
  {
    title: '8. What if I stop treatment?',
    content: (
      <p>
        Some patients who&rsquo;ve stopped treatment report that their vision has stabilized, with no
        further deterioration. Other patients have detected some degeneration and resumed treatment.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" align="center" />

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqItems} defaultOpen={0} />
          </div>
        </Container>
      </section>
    </>
  );
}
