import React from 'react';
import { Metadata } from 'next';
export const meta: Metadata = {
  description: 'This is an ecommerce web application',
  keywords: 'ecommerce shopping Global',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
