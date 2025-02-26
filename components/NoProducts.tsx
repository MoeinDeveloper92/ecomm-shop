import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
const NoProducts = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center py-10 min-h-80 space-y-4 text-center bg-gray-100 w-full rounded-lg mt-10',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">No Product</h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-600 "
      >
        We&apos;re sorry, but there are no products matching on{' '}
        <span className="text-base font-semibold text-darkColor">
          {' '}
          {selectedTab}
        </span>{' '}
        criteria at the moment.
      </motion.p>
      <motion.div
        initial={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex  items-center space-x-2 gap-2 my-1 text-blue-500"
      >
        <Loader2 className="w-4 h-4 animate-spin " />
        <span className="">We&apos;re restocking shortly</span>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Please check back later or explore our other product categories.
      </motion.p>
    </div>
  );
};

export default NoProducts;
