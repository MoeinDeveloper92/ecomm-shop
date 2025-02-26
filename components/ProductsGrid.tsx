'use client';
import React, { useEffect, useState } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants';
import { fetchData } from '@/utils/query';
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';
import NoProducts from './NoProducts';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';
const ProductsGrid = () => {
  const [selectedTab, setSelectedTab] = useState<string>(
    productType[0]?.title || ''
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //For Separation of concerns this should be in another place
  //This component is on;y responsible tp show cards
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          selectedTab.toLocaleLowerCase(),
          selectedTab
        );
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>
          <motion.div className="flex flex-col text-center  py-10 min-h-80 space-y-4 bg-gray-100 w-full">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-lg font-semibold">Product is Loading...</span>
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
          <NoProducts selectedTab={selectedTab} />
        </>
      )}
    </div>
  );
};

export default ProductsGrid;
