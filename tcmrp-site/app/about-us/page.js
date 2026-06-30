import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ListenToThis from '@/components/ListenToThis';
import Button from '@/components/Button';
import VideoThumb from '@/components/VideoThumb';
import { ROUTES } from '@/lib/site';

export const metadata = {
  title: { absolute: 'About Us - Wellspring Clinic' },
  description:
    'Dr. Yu and Wellspring Clinic are dedicated to supporting people living with Retinitis Pigmentosa through a thoughtful integration of Traditional Chinese Medicine and modern vision assessment.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero align="left" title="27 Years. 1200+ Patients. One Mission.">
        <div className="mt-2 w-full max-w-md">
          <VideoThumb
            youtubeUrl="https://www.youtube.com/watch?v=YCzKMyCyMXs"
            thumbnail="/wp-content/uploads/2026/05/Rectangle-13-1.jpg"
          />
        </div>
      </PageHero>

      {/* About Wellspring Clinic */}
      <section id="about-wellspring-clinic" className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <ListenToThis tone="default" className="mb-6" />
              <h2 className="font-display text-3xl text-ink md:text-[42px]">About Wellspring Clinic</h2>
            </div>
            <div className="space-y-5 text-body">
              <p>
                Dr. Yu and Wellspring Clinic are dedicated to supporting people living with Retinitis
                Pigmentosa (RP) through a thoughtful integration of Traditional Chinese Medicine and modern
                vision assessment. Their aim is to give RP patients hope and relief from this life-changing
                diagnosis. By preserving functional vision and restoring balance to the body by strengthening
                its internal systems, they hope to help patients maintain independence for as long as
                possible.
              </p>
              <p>
                Wellspring has created a comprehensive protocol that addresses the whole person, while
                providing compassionate care to patients navigating the challenges of progressive vision
                loss.
              </p>
              <p>
                Patients from around the globe have flocked to Wellspring with the hope of restoring their
                vision when answers could not be found in Western Medicine. In its 27 years of existence, the
                clinic has seen patients from forty-six countries, eager for help and support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient Case Studies */}
      <section className="bg-white">
        <Container className="pb-16 md:pb-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">CASE STUDIES</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">Patient Case Studies</h2>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <VideoThumb
                youtubeUrl="https://www.youtube.com/watch?v=YCzKMyCyMXs"
                thumbnail="/wp-content/uploads/2026/05/Rectangle-43-1-2.jpg"
              />
            </div>
            <div>
              <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                &ldquo;I would be recommending this to anybody. It&rsquo;s definitely worth it.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
                &mdash; Adrien, RP patient from Ireland
              </p>
              <p className="mt-6 text-body">
                When Adrien first came to Wellspring, he had zero peripheral vision. He had met with Western
                medicine doctors in Hong Kong, China, Australia, America, and Europe, but was told there was
                no cure or way of alleviating his symptoms. After undergoing the Wellspring protocol, Adrien
                reported that his vision improved significantly. He now looks forward to finally being able to
                play games with his children.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* About Our Founder */}
      <section id="about-our-founder" className="bg-cream">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">THE VISION BEHIND WELLSPRING CLINIC</Eyebrow>
          <h2 className="font-display text-3xl text-ink md:text-[42px]">About Our Founder</h2>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <img
                src="/wp-content/uploads/2026/06/Rectangle-49.jpg"
                alt="Dr. Weidong Yu, Founder of Wellspring Clinic"
                className="w-full rounded-2xl object-cover shadow-card"
              />
            </div>
            <div>
              <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                &ldquo;The formula is on paper, but the efficacy is in the hands.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
                &mdash; Dr. Weidong Yu, Founder, Wellspring Clinic
              </p>
              <div className="mt-6 space-y-5 text-body">
                <p>
                  Dr. Yu believes that nothing is impossible with Traditional Chinese Medicine (TCM), but
                  knowing the principles of something and putting them into practice are two very different
                  things. It takes technical mastery, a razor-thin understanding of nuance, and the ability to
                  perceive the body&rsquo;s energy as a continuous, flowing system.
                </p>
                <p>
                  He trained in both TCM and Western medicine, earning a Bachelor of Medicine from Shandong
                  College of Traditional Chinese Medicine in 1983 and later a Master&rsquo;s degree in Public
                  Health from the Free University of Brussels in 1991. Upon returning to China, Dr. Yu
                  practiced both TCM and Western-style medicine at Binzhou Medical College Hospital. Later, he
                  was an Assistant Research Fellow at the China Academy of Traditional Chinese Medicine in
                  Beijing.
                </p>
                <p>
                  Dr. Yu then traveled to Belgium and the United States to practice TCM, eventually landing in
                  Vancouver, Canada, where he founded the Wellspring Clinic in 1997.
                </p>
                <p>
                  His introduction to RP came during an appointment with a patient, Adriana, looking for help
                  with weight loss. Dr. Yu recognized that she had a far more pressing medical issue with her
                  vision, Retinitis Pigmentosa.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-5 text-body">
            <p>
              Before meeting Dr. Yu, Adriana had been told that she would eventually go blind and should
              prepare by learning braille.
            </p>
            <p>
              Modern medicine offered no cure; only therapies that provided a slight modicum of relief. Dr. Yu
              held fast to his belief that TCM offered answers. He made it his mission to help Adriana maintain
              whatever vision she had left.
            </p>
            <p>
              Drawing upon his wisdom and experience, Dr. Yu approached RP as a breakdown of the body&rsquo;s
              internal system. He would need to strengthen it, allowing the body&rsquo;s energy to recalibrate
              to support vital functions. He designed a treatment plan for Adriana that included acupuncture,
              TCM herbal formulations, and nutritional supplements.
            </p>
            <p>
              Adriana&rsquo;s vision began to stabilize, her night vision improved, and, soon, she could walk
              steadily without assistance. Her biggest transformation? Her confidence. She regained her
              dignity and independence.
            </p>
          </div>
        </Container>
      </section>

      {/* Restoring hope through compassionate care */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />
          <Eyebrow tone="gold" className="mb-3">RESTORING HOPE THROUGH COMPASSIONATE CARE</Eyebrow>
          <h2 className="max-w-3xl font-display text-3xl text-ink md:text-[42px]">
            Hear Dr. Yu Talk More In-Depth About Helping Adriana Improve Her Vision
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-body">
            <p>
              Stories like Adriana&rsquo;s are why Dr. Yu is so passionate about helping patients suffering
              from RP. Watching someone find their light again&mdash;both outside and within&mdash;is
              incredibly rewarding.
            </p>
            <p>
              Dr. Yu ensures that every patient is treated with kindness and compassion. He listens to
              everyone&rsquo;s story, extracting details about a patient&rsquo;s lifestyle, emotional state,
              and physical challenges that can provide insight. This level of attention is why many patients
              feel like Dr. Yu is part of their family.
            </p>
          </div>

          <div className="mt-10">
            <Button href={ROUTES.contact} variant="outlineGreen">
              Book a Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
