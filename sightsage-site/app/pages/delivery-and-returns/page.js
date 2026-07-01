import RichText from '@/components/RichText';
import ProsePage from '../_prose/ProsePage';
import { ROUTES } from '@/lib/site';

export const metadata = { title: 'Delivery and Returns' };

const HTML = `
<h2>Delivery</h2>
<p>SightSage uses multiple carriers to ship our high quality, nutritional products across North America. The choice of carrier service depends on a variety of factors unique to your order. These factors include, but are not limited to: destination, package size, value of package contents, and promised delivery time. We are flexible with our selection of shipping carriers to ensure prompt, safe delivery of our products.</p>

<h2>Shipping Time and Rates</h2>
<p>We offer different shipping options that have varying costs and time frames:</p>
<ul>
<li><strong>Standard US Shipping:</strong> Orders will typically take 2-5 business days to the US Continental 48 states; however, occasionally there may be delays with the US Postal Service (USPS) particularly during the busy holiday season. Orders will leave our warehouse within two business days after your order is placed.</li>
<li><strong>Canadian Shipping:</strong> All orders will be shipped with expedited delivery and will leave our warehouse within two business days after your order is placed. Delivery time typically takes 2-5 business days.</li>
</ul>
<p>Please note that a business day refers to any day Monday through Friday. To maximize delivery speed, please place orders in the morning when possible.</p>

<h2>Tracking</h2>
<p>Instructions for tracking your purchase will be sent to you by email or sms after you make your purchase.</p>

<h2>Questions</h2>
<p>If you have any further questions, please contact our support team.</p>

<h2>Product Returns</h2>
<p>For refunds on orders with 3 or more of the same supplement we kindly request that you return the unopened bottles. In this case we will refund you the price of one bottle + the number of unopened bottles returned, along with the original shipping cost.</p>
<p>Please ship unopened bottles to:</p>
<p>SightSage Foods and Nutrition Inc.<br>#1151 - 11871 Horseshoe Way<br>Richmond, British Columbia V7A 5H5<br>Canada</p>
`;

export default function DeliveryAndReturnsPage() {
  return (
    <ProsePage title="Delivery and Returns">
      <RichText html={HTML} />
      <p className="mt-8 text-sm text-muted">
        See also our{' '}
        <a href={ROUTES.refund} className="text-brand underline underline-offset-2 hover:text-brand-dark">
          Refund Policy
        </a>
        .
      </p>
    </ProsePage>
  );
}
