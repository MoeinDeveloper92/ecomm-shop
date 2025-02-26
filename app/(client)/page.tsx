import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import ProductsGrid from '@/components/ProductsGrid';
import React from 'react';

const page = () => {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
        <ProductsGrid />
      </Container>
    </div>
  );
};

export default page;
