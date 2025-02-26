import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import React from 'react';

const page = () => {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
      </Container>
    </div>
  );
};

export default page;
