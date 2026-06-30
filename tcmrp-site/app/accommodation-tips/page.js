import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import ListenToThis from '@/components/ListenToThis';
import Button from '@/components/Button';
import { ROUTES } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Accommodation Tips - Wellspring Clinic' },
  description:
    'Tips on where to stay during Retinitis Pigmentosa treatment in Vancouver, including how to choose convenient, comfortable, and accessible accommodation near the Wellspring Clinic.',
};

export default function AccommodationTipsPage() {
  return (
    <>
      <PageHero title="Accommodation Tips" align="center" />

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />

          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h3 className="font-display text-3xl text-ink md:text-[40px] md:leading-[1.15]">
                Where to Stay During Treatment
              </h3>
              <div className="mt-8 overflow-hidden rounded-lg">
                <img
                  src="/wp-content/uploads/2026/05/Rectangle-43-2-1.jpg"
                  alt=""
                  width={588}
                  height={504}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-body">
              <p>
                When choosing accommodation in Vancouver, we recommend prioritizing convenience,
                comfort, and accessibility. Since treatment may involve multiple clinic visits within
                a short period of time, staying close to the clinic or near reliable transportation
                can make the experience much easier.
              </p>
              <p>
                Look for accommodation that allows you to rest comfortably between appointments.
                Practical features such as an elevator, quiet rooms, nearby restaurants, laundry
                access, and a simple route to the clinic can make a big difference, especially for
                patients travelling with family members or caregivers.
              </p>
              <p>
                Patients with vision challenges may also want to consider walkability, lighting,
                transit access, and whether the surrounding area feels easy to navigate. A location
                that looks inexpensive online may not always be the most practical choice if it
                requires long travel times or complicated transfers.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-body">
            <p>
              Hotels, short-term rentals, serviced apartments, and extended-stay accommodations may
              all be suitable depending on your budget and length of stay. The best option is usually
              one that reduces stress and allows you to focus on treatment.
            </p>
            <p>
              Before booking, you are welcome to contact our team for general accommodation
              suggestions based on the clinic location and your treatment schedule. While we do not
              make reservations for patients, we can help you think through practical options so your
              stay in Vancouver is as smooth and comfortable as possible.
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
