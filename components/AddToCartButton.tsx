import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import QuantityButton from './QuantityButton';
import PriceFormatter from './PriceFormatter';
interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product.stock === 0;
  const itemCount = 0;

  return (
    <div className="w-full">
      {itemCount ? (
        <div className="w-full text-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <QuantityButton product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product.Price ? product.Price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <>
          <Button
            disabled={isOutOfStock}
            className={cn(
              'w-full bg-transparent border tracking-wide border-darkColor text-darkColor shadow-none font-semibold hover:text-white hoverEffect',
              className
            )}
          >
            Add To Cart
          </Button>
        </>
      )}
    </div>
  );
};

export default AddToCartButton;
