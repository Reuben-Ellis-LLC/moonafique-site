import { Footer } from '@/components/Footer';
import { ProductList } from '@/components/product-list';
import { getProducts } from '@/lib/products';

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4">
      <h1 className="text-4xl font-bold tracking-tight my-14 flex justify-center">
        Our Products
      </h1>
      <ProductList initialList={products} />
      <Footer />
    </div>
  );
}
