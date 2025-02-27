import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import useCartStore from '@/lib/store';
import toast from 'react-hot-toast';
interface Props {
  product: Product;
  className?: string;
}
const QuantityButton = ({ product, className }: Props) => {
  const { getItemCount, addItem, removeItem } = useCartStore();
  const itemCount = getItemCount(product._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveProduct = () => {
    removeItem(product._id);
    if (itemCount > 0) {
      toast.success(`Quantity decreased successully`);
    } else {
      toast.success(
        `${product.name.substring(0, 12)}... removed successfully!`
      );
    }
  };
  return (
    <div className={cn('flex items-center gap-1 text-base pb-1', className)}>
      <Button
        disabled={itemCount === 0 || isOutOfStock}
        variant={'outline'}
        size={'icon'}
        className="w-6 h-6"
        onClick={handleRemoveProduct}
      >
        <Minus />
      </Button>
      <span className="font-semibold text-darkColor text-center">
        {itemCount}
      </span>
      <Button
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.name?.substring(0, 12)}... added successfully`
          );
        }}
        variant={'outline'}
        size={'icon'}
        className="w-6 h-6"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
