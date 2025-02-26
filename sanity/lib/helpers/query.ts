import { Product } from '@/sanity.types';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';
export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == "product" && slug.current == $slug] | order(name asc)[0]`
  );

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });

    return product?.data;
  } catch (error) {
    console.error('ERROR FETCHING PRODUCT BY SLUG', error);
  }
};
