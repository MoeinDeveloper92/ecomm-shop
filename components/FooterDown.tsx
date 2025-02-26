import React from 'react';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { Input } from './ui/input';
import { categoriesData, quickLinksData } from '@/constants';
import Link from 'next/link';

const FooterDown = () => {
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      <div>
        <Logo>E-Shopping</Logo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          molestiae neque. Ex ab iste perspiciatis ullam consequatur dicta?
          Dolorum, atque repellendus ipsam iste nostrum a unde obcaecati et
          corporis! Rerum!
        </p>
        <SocialMedia
          iconClassName="hover:text-black border-darkColor/60 hover:border-darkColor hober:text-darkColor"
          tooltipClassName="bg-darkColor text-white"
          className=" text-darkColor/60 mt-5"
        />
      </div>
      <div>
        <h3 className="font-semibold text-darkColor mb-4">Quicl Links</h3>
        <div className="flex flex-col gap-3">
          {quickLinksData.map((item) => (
            <Link
              className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
              key={item.title}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-darkColor mb-4">Categories</h3>
        <div className="flex flex-col gap-3">
          {categoriesData.map((item) => (
            <Link
              className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
              key={item.title}
              href={`/category=${item.href}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-darkColor mb-4">Newsletter</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Subscribe to our newsletter to receive updates and exclusive offers
        </p>
        <form className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your Email"
            required
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            type="submit"
            className="w-full bg-darkColor text-white px-4 py-2 rounded-lg mt-2 hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterDown;
