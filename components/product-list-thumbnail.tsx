import { ProductBuyForm } from '@/components/product-buy-form';
import { ProductWithPrice } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';

export function ProductListThumbnail({
  product,
}: {
  product: ProductWithPrice;
}) {
  return (
    <div className="bg-background">
      <Link href={`/product/${product.id}`} className="block">
        <div className="ring-border relative aspect-square overflow-hidden rounded-xl ring-1">
          <Image
            src={product.images?.[0] ?? '/placeholder-image.png'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex items-center gap-2 py-2">
        <div className="flex flex-col gap-1">
          <Link
            href={`/product/${product.id}`}
            className="font-medium hover:underline"
          >
            {product.name}
          </Link>
          <div className="text-muted-foreground">
            {product.price.display_amount}
          </div>
        </div>
        <div className="ml-auto">
          <ProductBuyForm product={product} />
        </div>
      </div>
    </div>
  );
}

export function ProductListThumbnailSkeleton() {
  return <div className="bg-muted aspect-square rounded-xl" />;
}
