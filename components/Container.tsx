import { cn } from '@/lib/utils';
import React from 'react';
/**
 * @description This Component is a container which put everythings dead in the Screen
 *
 */
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4', className)}>
      {children}
    </div>
  );
};

export default Container;
