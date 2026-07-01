// Renders verbatim Shopify description_html inside a styled `.rte` prose wrapper.
export default function RichText({ html, className = '' }) {
  if (!html) return null;
  return <div className={`rte ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
