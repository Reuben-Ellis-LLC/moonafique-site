import { ProductBuyForm } from '@/components/product-buy-form';
import { ProductWithPrice } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function ProductListThumbnail({
  product,
}: {
  product: ProductWithPrice;
}) {
  const stock = product.metadata?.stock;
  const status = product.metadata?.status;
  const isMadeToOrder =
    status === 'madeToOrder' ||
    (stock === 0 && product.metadata?.madeToOrder === true);
  const isSoldOut = status === 'soldOut' || (stock === 0 && !isMadeToOrder);
  const isComingSoon = status === 'comingSoon';
  const isLimitedEdition = status === 'limitedEdition';
  const isNew = status === 'new';
  const isFeatured = status === 'featured';
  const isOnSale = status === 'onSale';

  if (isSoldOut) {
    return null; // Don't show sold out products
  }

  return (
    <div className="bg-background">
      <Link href={`/product/${product.id}`} className="block">
        <div className="ring-border relative aspect-square overflow-hidden rounded-xl ring-1">
          <Image
            src={product.images?.[0] ?? '/placeholder-image.png'}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {isMadeToOrder && (
            <Badge variant="madeToOrder" className="absolute top-2 right-2">
              Made to Order
            </Badge>
          )}
          {isComingSoon && (
            <Badge variant="comingSoon" className="absolute top-2 right-2">
              Coming Soon
            </Badge>
          )}
          {isLimitedEdition && (
            <Badge variant="limitedEdition" className="absolute top-2 right-2">
              Limited Edition
            </Badge>
          )}
          {isNew && (
            <Badge variant="new" className="absolute top-2 right-2">
              New
            </Badge>
          )}
          {isFeatured && (
            <Badge variant="featured" className="absolute top-2 right-2">
              Featured
            </Badge>
          )}
          {isOnSale && (
            <Badge variant="onSale" className="absolute top-2 right-2">
              On Sale
            </Badge>
          )}
        </div>
      </Link>
      <div className="flex items-center gap-2 py-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Link
              href={`/product/${product.id}`}
              className="font-medium hover:underline line-clamp-1"
              title={product.name}
            >
              {product.name}
            </Link>
          </div>
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
