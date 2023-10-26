import type { Metadata } from 'next';

import ProductsList from '@/components/shops/products-list';
import Content from '@/components/ui/content';
import Header from '@/components/ui/header';
import HeaderCard from '@/components/ui/header-card';
import { getFeaturedProducts } from '@/services/products';

interface FeaturedProductsPageProps {
  searchParams: { page: string };
}

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Featured Products',
  description: 'Explore the featured products from around the world.',
};

const FeaturedProductsPage: React.FC<FeaturedProductsPageProps> = async ({
  searchParams,
}) => {
  const data = await getFeaturedProducts(searchParams.page);

  if (!data) throw new Error('500');

  return (
    <Content>
      <HeaderCard
        imageUrl={'/img/header-card-default.jpg'}
        caption={'Explore your style with our featured collection!'}
        className="before:!bg-opacity-30"
      />
      <Header>Featured</Header>
      <ProductsList products={data.products} count={data.count} />
    </Content>
  );
};

export default FeaturedProductsPage;
