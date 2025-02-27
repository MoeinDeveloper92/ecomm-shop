'use client';
import { CATEGORIES_QUERYResult, Product } from '@/sanity.types';
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { motion, AnimatePresence } from 'motion/react';
import NoProducts from './NoProducts';
import { Loader2 } from 'lucide-react';
import ProductCard from './ProductCard';
import Link from 'next/link';
interface Props {
  categories: CATEGORIES_QUERYResult;
  slug: string;
}
const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState<string>(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);
      const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == ${categorySlug}]._id)] | order(name asc)`;
      const data = await client.fetch(query, { categorySlug });
      console.log(data);
    } catch (error) {
      console.error('ERROR WHILE FETCHING PRODUCSTT', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);
  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col space-y-3  items-center py-3 md:min-w-40 border">
        {categories.map((category) => (
          <Link
            href={`/category/${category.slug?.current}`}
            onClick={() => setCurrentSlug(category?.slug?.current as string)}
            key={category._id}
            className={`bg-transparent hover:text-black rounded-none border-none text-darkColor/80 hoverEffect last:border-b-none ${category.slug?.current === currentSlug && 'bg-darkColor border-darkColor text-green-500'}`}
          >
            {category.title}
          </Link>
        ))}
      </div>
      <div className="flex-1 bg-red-200 ">
        {loading ? (
          <div>
            <motion.div className="flex flex-col text-center  py-10 min-h-80 space-y-4 bg-gray-100 w-full">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-lg font-semibold">
                Product is Loading...
              </span>
            </motion.div>
          </div>
        ) : products.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10  w-full">
            {products.map((item: Product) => (
              <AnimatePresence key={item._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard product={item} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <>
            <NoProducts selectedTab={currentSlug} className="mt-0" />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
