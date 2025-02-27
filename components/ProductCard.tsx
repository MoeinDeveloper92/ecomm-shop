import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-lg text-sm group">
      <div className="bg-gradient-to-r rounded-lg rounded-b-none from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
        {product.images && (
          <Link href={`/product/${product.slug.current}`}>
            <Image
              alt=""
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              //   we set priority, to be handled by the client, and we let to client loaded whenevr it is possible
              priority
              className={`${product.stock === 0 ? '  w-full h-72 object-contain overflow-hidden hoverEffect ' : 'w-full h-72 object-contain overflow-hidden hoverEffect  group-hover:scale-105'} `}
            />
          </Link>
        )}
        {product.stock === 0 && (
          <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full bg-darkColor/60">
            <p className="text-base text-white ">Out of Stock</p>
          </div>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg shadow-lg  ">
        <h2 className="font-semibold line-clamp-1">{product.name}</h2>
        <p className="line-clamp-1">{product.intro}</p>
        <PriceView
          className="text-lg"
          price={product.Price}
          discount={product.discount}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
