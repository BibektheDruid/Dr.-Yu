import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import ListenToThis from '@/components/ListenToThis';

export const metadata = {
  title: { absolute: 'Terms of Use - Wellspring Clinic' },
  description:
    'Terms and conditions of use of the Wellspring TCM Technology Institute Ltd. website.',
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero title="Terms of Use" align="center" />

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <ListenToThis tone="default" className="mb-6" />

          <div className="max-w-3xl">
            <h3 className="font-display text-3xl text-ink md:text-[36px]">Website Terms of Use</h3>

            <div className="mt-8 space-y-5 text-body">
              <p className="font-semibold text-ink">
                WELLSPRING TCM TECHNOLOGY INSTITUTE LTD. (&ldquo;Wellspring&rdquo;)
                <br />
                TERMS and CONDITIONS OF USE OF OUR WEBSITE
              </p>

              <p className="font-semibold text-ink">
                PLEASE NOTE: IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS
                <br />
                SET FORTH BELOW, YOU MAY NOT USE OR ACCESS THIS SITE.
              </p>

              <h4 className="pt-4 font-display text-xl font-bold text-ink">1. INTRODUCTION</h4>
              <p>
                The information contained in this online site ( the &ldquo;Site&rdquo;) is presented in
                summary form and for informational purposes only. Some information is intended to promote
                awareness and understanding of certain health care topic for consumers. Other information on
                this Site is intended for practitioners of traditional Chinese medicine or other health care
                professionals. The information provided at this Site is specifically not intended to
                constitute advice.
              </p>
              <p>
                This Site is not intended to create any physician/health provide-patient relationship.
              </p>
              <p>
                The information on this Site should be considered an ongoing work-in-progress. It is not,
                consultation or advice of your physician or other health care provider.
              </p>
              <p>
                The Site does not recommend the self-management of health problems. Information obtained by
                using this Site is of course not exhaustive and does not cover all diseases, ailments,
                physical conditions or their treatment. Should you have any health care-related questions,
                please call or see your physician or other health care provider promptly. You should never
                disregard medical advice or delay in seeking it because of something you have read here.
              </p>

              <h4 className="pt-4 font-display text-xl font-bold text-ink">2. DISCLAIMER</h4>
              <p>
                Wellspring assumes no responsibility for information provided herein under any theory of
                liability or indemnity. Your use of this site and any information provided herein is at your
                own risk on an &ldquo;an-is, where is&rdquo; basis. Liability of Wellspring, if any, for
                damages (including, without limitation, liability arising out of contract, negligence, strict
                liability, tort or patient or copyright infringement) shall not exceed the fees, if any, paid
                by the user for the particular information or service provided. In no event shall Wellspring
                be liable for any damages other than the amount referred to above, and all other damages
                direct or indirect, special, incidental, consequential or punitive, are hereby exclude even
                if Wellspring has been advised of the possibility of such damages.
              </p>
              <p>
                All implied warranties or conditions of merchantability, durability or fitness for a
                particular use or purpose are hereby excluded. Wellspring makes no warranty as to the
                reliability, accuracy, timeliness, usefulness or completeness of the information noted on
                this Site.
              </p>

              <h4 className="pt-4 font-display text-xl font-bold text-ink">3. INFORMATION UPDATES</h4>
              <p>
                Wellspring periodically adds, changes, improves or updates the information and documents on
                this Site without notice. Wellspring cannot and does not guarantee its accuracy. Wellspring
                assumes no liability or responsibility for any errors or omissions in the content of this
                Site.
              </p>
              <p>
                Wellspring may modify this Agreement at any time, and such modification will be effective
                immediately upon either posting of the modified provisions or notifying you of such
                modifications. You agree to review this Agreement periodically to ensure that you are aware
                of such modifications. Your continued access to this Site will be conclusive evidence of your
                deemed acceptance of any modifications to this Agreement.
              </p>

              <h4 className="pt-4 font-display text-xl font-bold text-ink">4. GENERAL INQUIRIES</h4>
              <p>
                There is no substitute for a personal diagnosis by a qualified physician or other health care
                professional. We do invite visitors to our Site to get in touch with us as to general
                questions or comments they have on matters or issues we canvass from time to time on our
                Site. In so doing, as we noted above, we are not establishing any form of patient
                relationship. Any replies we make, must be taken in a general context, bearing in mind that
                we have not met personally. Before acting on any information from Wellspring, as a matter of
                common sense, you are strongly advised to consult with your own physician or a health car
                professional.
              </p>

              <h4 className="pt-4 font-display text-xl font-bold text-ink">5. APPLICABLE LAWS</h4>
              <p>
                This Site can be accessed from countries around the world. As each of these places has laws
                that may differ from those of British Columbia and Canada, by accessing this Site both you
                and Wellspring agree that the statutes and laws of the Province of British Columbia, and of
                Canada. Without regard to the conflicts of laws principles thereof, will apply to all matters
                relating to use of this web site. You and Wellspring also agree and hereby submit to the
                exclusive personal jurisdiction and venue of the Supreme Court of British Columbia in the
                City of Vancouver with respect to such matters. Wellspring makes no representation that
                materials on this Site are appropriate or available for use in other locations, and accessing
                them from territories where their contents (or any portion thereof) are illegal is
                prohibited. Those who choose to access this site from other locations do so on their own
                initiative and are responsible for compliance with local laws.
              </p>

              <h4 className="pt-4 font-display text-xl font-bold text-ink">6. COPYRIGHT NOTICE</h4>
              <p>
                Copyright 2000 Wellspring TCM Technology Institute Ltd. All right reserve.
              </p>
              <p>
                Permission is granted to download, and print materials from this Site for the purpose of
                viewing, reading and retaining for reference. Any other copying, distribution,
                retransmission or modification of information or materials on this site, whether in
                electronic or hard copy form, without prior express written consent of Wellspring, is
                prohibited.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
