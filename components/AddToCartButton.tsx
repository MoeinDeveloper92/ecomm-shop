'use client';
import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import QuantityButton from './QuantityButton';
import PriceFormatter from './PriceFormatter';
import useCartStore from '@/lib/store';
import toast from 'react-hot-toast';
interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useCartStore();
  const isOutOfStock = product.stock === 0;

  const itemCount = getItemCount(product._id);

  return (
    <div className="w-full h-12 flex  items-center">
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
            onClick={() => {
              addItem(product);
              toast.success(
                `${product.name.substring(0, 12)}... added to your cart successfully!`
              );
            }}
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
