import CategoryProducts from '@/components/CategoryProducts';
import Container from '@/components/Container';
import Title from '@/components/Title';
import { getAllCategories } from '@/sanity/lib/helpers/query';
import React from 'react';

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const categories = await getAllCategories();

  return (
    <Container className="py-20">
      <Title className="text-xl">
        Products By Category{' '}
        <span className="text-green-600 uppercase tracking-wide">
          {slug && slug}
        </span>
      </Title>
      <CategoryProducts categories={categories} slug={slug} />
    </Container>
  );
};

export default CategoryPage;
