import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import ListenToThis from '@/components/ListenToThis';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Travel Logistics - Wellspring Clinic' },
  description:
    'Planning your visit to Vancouver for Retinitis Pigmentosa treatment at the Wellspring Clinic. Learn how a short, focused in-person visit fits into a realistic travel schedule.',
};

export default function TravelLogisticsPage() {
  return (
    <>
      <PageHero title="Travel Logistics" align="center" />

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-8" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-3xl leading-tight text-ink md:text-[40px]">
                Planning Your Visit to Vancouver
              </h3>
              <img
                src="/wp-content/uploads/2026/05/Rectangle-43-1-4.jpg"
                alt=""
                className="mt-8 w-full rounded-2xl object-cover shadow-card"
              />
            </div>

            <div className="space-y-6 text-body">
              <p>
                For many international patients, the first step is understanding how treatment can fit
                into a realistic travel schedule. Wellspring Clinic is located in Vancouver, Canada, and
                has welcomed patients from across Canada and around the world. Because many patients
                travel from outside British Columbia, the program is designed to make the in-person
                portion as focused and efficient as possible.
              </p>
              <p>
                A common model is a short intensive visit to Vancouver, followed by continued care after
                you return home. During the initial visit, patients typically plan to stay in Vancouver
                for several days so they can attend a concentrated series of appointments at the clinic.
                After the in-person treatment period, patients may continue with their individualized
                herbal program at home and follow the recommended testing schedule with their eye
                specialist.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl space-y-6 text-body">
            <p>
              Our team can help you understand the appointment structure, suggested visit length, clinic
              location, and what to prepare before travelling. We can also provide general guidance on
              timing, communication, and how to coordinate your visit around the treatment schedule.
            </p>
            <p>
              Please note that we do not book flights, apply for visas, arrange travel insurance, or
              manage hotel reservations on your behalf. However, we can help you plan around your
              treatment needs so you feel more prepared before arriving.
              <br />
              We understand that travelling for care can feel like a major decision, especially when
              coming from another country. Our goal is to make the process clear, organized, and
              manageable. From your first inquiry to your clinic visit and follow-up communication, we
              aim to keep you informed at each step.
            </p>
          </div>

          <div className="mt-10">
            <Button href={ROUTES.contact} variant="green">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
