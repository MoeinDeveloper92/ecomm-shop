'use client';
import { AlignLeft } from 'lucide-react';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsSideBarOpen((pre) => !pre)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <Sidebar isOpen={isSideBarOpen} onClose={setIsSideBarOpen} />
      </div>
    </>
  );
};

export default MobileMenu;
