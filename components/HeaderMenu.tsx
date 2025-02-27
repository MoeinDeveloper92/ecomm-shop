'use client';
import { CATEGORIES_QUERYResult } from '@/sanity.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderMenu = ({ categories }: { categories: CATEGORIES_QUERYResult }) => {
  const pathName = usePathname();

  return (
    <div className="hidden md:inline-flex  basis-1/3 items-center gap-5 text-sm capitalize font-semibold">
      <Link
        className="hover:text-darkColor hoverEffect relative group"
        href={'/'}
      >
        Home
        <span
          className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-full origin-right ${
            pathName === '/' ? 'w-full' : 'w-0'
          }`}
        />
      </Link>
      {categories.map((category) => (
        <Link
          className={`hover:text-darkColor text-nowrap hoverEffect relative
          group ${pathName === category?.slug?.current && 'text-darkColor'}`}
          key={category._id}
          href={`/category/${category.slug?.current}`}
        >
          {category.title}
          <span
            className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-full origin-right ${
              pathName === '/category/' + category?.slug?.current
                ? 'w-full'
                : 'w-0'
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;

//Group, we use it because we want the effect to be reflected on the parent
