'use client';

import { Button } from '@/components/ui/button';
import {
  ProductListThumbnail,
  ProductListThumbnailSkeleton,
} from '@/components/product-list-thumbnail';
import { ProductListResponse, ProductWithPrice } from '@/lib/schema';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ProductList({
  initialList,
}: {
  initialList: ProductListResponse | undefined;
}) {
  const [allProducts, setAllProducts] = useState<ProductWithPrice[]>(
    initialList?.data || []
  );
  const [hasMore, setHasMore] = useState(initialList?.has_more || false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  // Effect to handle search parameter changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const searchParam = searchQuery
        ? `?search=${encodeURIComponent(searchQuery)}`
        : '';
      const res = await fetch(`/api/products${searchParam}`);
      const newList: ProductListResponse = await res.json();
      setAllProducts(newList.data);
      setHasMore(newList.has_more);
      setLoading(false);
    };
    fetchProducts();
  }, [searchQuery]);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const lastProductId = allProducts[allProducts.length - 1].id;
    const searchParam = searchQuery
      ? `search=${encodeURIComponent(searchQuery)}&`
      : '';
    const res = await fetch(
      `/api/products?${searchParam}cursor=${lastProductId}`
    );
    const newList: ProductListResponse = await res.json();

    setAllProducts((prevProducts) => [...prevProducts, ...newList.data]);
    setHasMore(newList.has_more);
    setLoading(false);
  };

  if (!loading && allProducts.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="relative mb-8 px-4 flex flex-col items-center gap-8">
      {searchQuery && (
        <h2 className="text-2xl font-bold">
          Search results for: {searchQuery}
        </h2>
      )}
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {allProducts.map((product) => (
          <ProductListThumbnail key={product.id} product={product} />
        ))}
        {loading &&
          Array.from({ length: 4 }).map((_, index) => (
            <ProductListThumbnailSkeleton key={`skeleton-${index}`} />
          ))}
      </div>
      {hasMore && (
        <Button onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </div>
  );
}
