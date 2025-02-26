'use client';
import { headerData } from '@/constants';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SocialMedia from './SocialMedia';
interface SideBarProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  return (
    <div
      onClick={() => {
        onClose(false);
      }}
      className={` fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
        animate={{
          opacity: 1,
        }}
        className="min-w-72 z-[100] max-w-96 bg-darkColor text-white/90 h-screen p-10 border-r-white border-r flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white">Tolos</Logo>
          <Button className="hover:text-red-500 hoverEffect">
            <X />
          </Button>
        </div>
        <div className="flex flex-col items-start gap-3.5 text-base ">
          {headerData.map((item, i) => (
            <Link
              className={`hover:text-white hoverEffect relative
          group ${pathName === item?.href && 'text-white'}`}
              key={i}
              href={item.href}
            >
              {item.title}
              <span
                className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white/50  group-hover:w-full origin-right ${
                  pathName === item?.href ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
