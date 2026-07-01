import RichText from '@/components/RichText';
import ProsePage from '../_prose/ProsePage';

export const metadata = { title: 'Refund Policy' };

const HTML = `
<p>If you have an issue with your order, contact our friendly customer care team by emailing <a href="mailto:support@sightsage.com">support@sightsage.com</a>. We will not accept returns of products that have been opened. Please note that we cannot refund more than three bottles of a single product in one order.</p>
`;

export default function RefundPolicyPage() {
  return (
    <ProsePage title="Refund Policy">
      <RichText html={HTML} />
    </ProsePage>
  );
}
