import React from 'react';
import { cn } from '@/lib/utils';
import PriceFormatter from './PriceFormatter';
//we set to undefined since sometems we should wait until it gets rendered
interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <PriceFormatter amount={price} className={cn(className)} />
        {price && discount && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className={cn('line-through  font-mono text-zinc-500')}
          />
        )}
      </div>
    </div>
  );
};

export default PriceView;
