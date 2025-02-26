import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
  product: Product;
  className?: string;
}
const QuantityButton = ({ product, className }: Props) => {
  const itemCount = 0;
  return (
    <div className={cn('flex items-center gap-1 text-base pb-1', className)}>
      <Button
        disabled={itemCount === 0 ? true : false}
        variant={'outline'}
        size={'icon'}
        className="w-6 h-6"
      >
        <Minus />
      </Button>
      <span className="font-semibold text-darkColor text-center">
        {itemCount}
      </span>
      <Button variant={'outline'} size={'icon'} className="w-6 h-6">
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
