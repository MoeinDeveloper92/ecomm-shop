import { PRODUCT_BY_SLUG_QUERYResult } from '@/sanity.types';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';
export const getProductBySlug = async (
  slug: string
): Promise<PRODUCT_BY_SLUG_QUERYResult | undefined> => {
  //It will create a type based on the query
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

export const getAllCategories = async () => {
  const CATEGORIES_QUERY = defineQuery(
    `*[_type == "category"] | order(name desc)`
  );
  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.error('ERROR WHILE FETCHING DATA FROM BACKEND', error);
    return [];
  }
};
