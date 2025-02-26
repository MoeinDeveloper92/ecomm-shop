import { productType } from '@/constants';
import { Repeat } from 'lucide-react';
import React from 'react';
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}
const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center justify-between gap-1.5 font-semibold text-sm">
      <div className="flex items-center flex-wrap gap-1.5">
        {productType.map((item) => (
          <button
            onClick={() => onTabSelect(item.title)}
            className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hoverEffect hover:text-white ${selectedTab === item.title && 'bg-darkColor text-white'}`}
            key={item.title}
          >
            {item.title}
          </button>
        ))}
      </div>
      <button
        className={`border border-darkColor  p-2 rounded-full hover:bg-darkColor hoverEffect hover:text-white`}
      >
        <Repeat />
      </button>
    </div>
  );
};

export default HomeTabBar;
