import { Product } from '@/sanity.types';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const ProductCharactristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{product?.name}: Charactristics</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex items-center justify-between">
            Brand: <span className="font-semibold tracking-wide">Unknown</span>
          </p>
          <p className="flex items-center justify-between">
            Collection:{' '}
            <span className="font-semibold tracking-wide">
              {new Date(Date.now())
                .toLocaleDateString('en-US')
                .split('/')
                .pop()}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Type:{' '}
            <span className="font-semibold tracking-wide">
              {product?.variant}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Stock:{' '}
            <span className="font-semibold tracking-wide">
              {product.stock ? 'Available' : 'Out of Stock'}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Intro:{' '}
            <span className="font-semibold tracking-wide">{product.intro}</span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharactristics;
