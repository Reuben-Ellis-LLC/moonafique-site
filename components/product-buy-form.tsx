'use client';

import { Button } from '@/components/ui/button';
import { useCartContext } from '@/lib/cart-context';
import { ProductWithPrice } from '@/lib/schema';
import { Loader2 } from 'lucide-react';

export function ProductBuyForm({ product }: { product: ProductWithPrice }) {
  const { addItem, loading } = useCartContext();

  const handleAddToCart = async () => {
    await addItem({
      id: product.id,
      name: product.name,
      price: product.price.amount || 0,
      image: '/placeholder-image.png',
    });
  };

  return (
    <Button onClick={handleAddToCart} size="sm" disabled={loading}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adding...
        </>
      ) : (
        'Add to Cart'
      )}
    </Button>
  );
}
