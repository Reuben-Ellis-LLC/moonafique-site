import { ProductListResponse, ProductWithPrice } from '@/lib/schema';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

export async function getProducts(
  options: Stripe.ProductListParams & { search?: string } = {
    limit: 16,
    active: true,
  }
): Promise<ProductListResponse | undefined> {
  try {
    const { search, ...stripeOptions } = options;
    const products = await stripe.products.list({
      ...stripeOptions,
      expand: ['data.default_price'],
    });

    let filteredProducts = products.data;
    console.log('search', search);

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = products.data.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          (product.description &&
            product.description.toLowerCase().includes(searchLower)) ||
          product.metadata?.category?.includes(searchLower)
      );
    }

    return {
      data: filteredProducts.map(productToProductWithPrice),
      has_more: products.has_more,
      starting_after: filteredProducts[filteredProducts.length - 1]?.id,
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return undefined;
  }
}

export async function getProduct(id: string): Promise<ProductWithPrice | null> {
  try {
    const product = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    });
    return productToProductWithPrice(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

function productToProductWithPrice(product: Stripe.Product): ProductWithPrice {
  const price = product.default_price as Stripe.Price;
  const amount = price.unit_amount ? price.unit_amount / 100 : undefined;

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    images: product.images,
    price: {
      id: price.id,
      amount,
      display_amount: amount?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    },
    metadata: product.metadata,
  };
}
