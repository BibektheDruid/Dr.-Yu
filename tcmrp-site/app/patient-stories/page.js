import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ListenToThis from '@/components/ListenToThis';
import Tabs from '@/components/Tabs';
import DisclaimerCard from '@/components/DisclaimerCard';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import StoryPanel from '@/components/patient-stories/StoryPanel';

export const metadata = {
  title: { absolute: 'Patient Stories - Wellspring Clinic' },
  description:
    'Our success is measured by our patients’ stories. Watch as they discuss going through the protocol and how their lives have changed after working with Dr. Yu.',
};

const STORIES = [
  {
    label: 'Gini',
    youtubeUrl: 'https://www.youtube.com/watch?v=AVpywTpm9ME',
    thumbnail: '/wp-content/uploads/2026/05/Rectangle-44.jpg',
    quote:
      '“Every time I come here, I’m able to see more, see clearly, got rid of my fog and glare issues.”',
    name: '— GINI',
    body:
      'San Francisco–based Gini began treatment at Wellspring and stayed consistent for six years. In this video, she talks about her vision expanding, her renewed confidence, and a more positive outlook.',
  },
  {
    label: 'Pranav',
    youtubeUrl: 'https://www.youtube.com/watch?v=mGiC2zszRFg',
    quote:
      '“My peripheral vision has increased significantly more towards the left and getting better towards the right side.”',
    name: '— PRANAV',
    body:
      'After three years of treatment, Pranav’s visual field expanded, and he had fewer blind spots. Here, he shares how treatment helped stabilize his vision, improved his ability to function at work, and calmed his mental state.',
  },
  {
    label: 'Evan',
    youtubeUrl: 'https://www.youtube.com/watch?v=R4zrVX5Mjqs',
    quote:
      '“I was seeing more. I walked the last three nights I walked 3 kilometers to my Airbnb in the dark and that was fine.”',
    name: '— EVAN',
    body:
      'Evan saw every eye specialist he could, but it was hopeless. Here, he talks about working with Dr. Yu, his vision opening up, and how he could drive at night once more.',
  },
  {
    label: 'Keith',
    youtubeUrl: 'https://www.youtube.com/watch?v=EPgv3R6yd1M',
    quote:
      '“There’s some improvement on some peripheral roads where I could see in places that I couldn’t before.”',
    name: '— KEITH',
    body:
      'Keith shares how acupuncture, herbal medicine, and consistency helped stabilize his choroideremia and improve his peripheral vision.',
  },
];

export default function PatientStoriesPage() {
  return (
    <>
      <PageHero
        title="Patient Stories"
        align="left"
        image="/wp-content/uploads/2026/05/Rectangle-43-2.jpg"
        imageAlt="Patients with Dr. Yu at the Wellspring Clinic"
        subtitle="Our success is measured by our patients’ stories. Watch as they discuss going through the protocol and how their lives have changed after working with Dr. Yu. After watching, you’ll understand why so many come from around the world for treatment. They were told they should learn braille and train with a walking cane. But now, they’re walking independently, driving, and seeing the faces of their loved ones in the sunlight."
      />

      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">REAL OUTCOMES</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">See What Our Patients Have to Say</h2>

          <Tabs
            className="mt-8"
            tabs={STORIES.map((s) => ({
              label: s.label,
              content: (
                <>
                  <StoryPanel
                    youtubeUrl={s.youtubeUrl}
                    thumbnail={s.thumbnail}
                    quote={s.quote}
                    name={s.name}
                    body={s.body}
                  />
                  <DisclaimerCard className="mt-10 max-w-2xl" />
                </>
              ),
            }))}
          />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">GET IN TOUCH</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">Contact the Wellspring Clinic</h2>
          <p className="mt-5 max-w-2xl text-body">
            If you or a loved one is experiencing vision challenges from Retinitis Pigmentosa, our team is
            here to help you explore your options. You don&rsquo;t have to go through this alone. Reach out
            today, and we&rsquo;ll guide you through the next steps.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
