import Link from 'next/link';
import Price from '@/components/Price';
import StarRating from '@/components/StarRating';

// Product card: image, title, rating, price. Links to product.url.
export default function ProductCard({ product }) {
  if (!product) return null;
  const { url, title, featured_image, price, compare_at_price, rating, review_count } = product;
  return (
    <Link
      href={url}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-[#ece7f1] bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="aspect-square overflow-hidden bg-cream">
        <img
          src={featured_image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-head text-[15px] font-semibold leading-snug text-ink">{title}</h3>
        {rating != null && <StarRating rating={rating} count={review_count} />}
        <div className="mt-auto pt-1">
          <Price cents={price} compareAtCents={compare_at_price} className="text-lg" />
        </div>
      </div>
    </Link>
  );
}
