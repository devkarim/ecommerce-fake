import Content from '@/components/ui/content';
import HeaderCard from '@/components/ui/header-card';
import ProductsList from '@/components/shops/products-list';
import Header from '@/components/ui/header';
import { getNewProducts } from '@/services/products';

interface NewArrivalsPageProps {
  searchParams: { page: string };
}

const NewArrivalsPage: React.FC<NewArrivalsPageProps> = async ({
  searchParams,
}) => {
  const data = await getNewProducts(searchParams.page);

  if (!data) throw new Error('500');

  return (
    <Content>
      <HeaderCard
        imageUrl={'/img/header-card-default.jpg'}
        caption={'Explore your style with our latest collection!'}
        className="before:!bg-opacity-30"
      />
      <Header>New arrivals</Header>
      <ProductsList products={data.products} count={data.count} />
    </Content>
  );
};

export default NewArrivalsPage;
