import Container from '@/components/Container';

// Page-local prose shell for policy/legal/utility content pages.
// Consistent heading band + centered .rte body column.
export default function ProsePage({ title, updated, children }) {
  return (
    <div className="bg-white">
      <div className="border-b border-brand-light/60 bg-cream">
        <Container className="py-12 sm:py-16 text-center">
          <h1 className="font-head text-3xl font-bold uppercase tracking-[0.03em] text-ink sm:text-4xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
          )}
        </Container>
      </div>
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-[820px]">{children}</div>
      </Container>
    </div>
  );
}
