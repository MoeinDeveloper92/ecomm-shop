'use client';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderMenu = () => {
  const pathName = usePathname();

  return (
    <div className="hidden md:inline-flex  basis-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {headerData.map((item, i) => (
        <Link
          className={`hover:text-darkColor hoverEffect relative
          group ${pathName === item?.href && 'text-darkColor'}`}
          key={i}
          href={item.href}
        >
          {item.title}
          <span
            className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-full origin-right ${
              pathName === item?.href ? 'w-full' : 'w-0'
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;

//Group, we use it because we want the effect to be reflected on the parent
