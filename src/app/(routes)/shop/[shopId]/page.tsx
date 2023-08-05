import AllFilters from '@/components/shops/all-filters';
import ProductsList from '@/components/shops/products-list';
import Content from '@/components/ui/content';
import HeaderCard from '@/components/ui/header-card';
import {
  getShopProducts,
  getShopById,
  getShopProperties,
} from '@/services/shops';

interface ShopPageProps {
  params: {
    shopId: string;
  };
  searchParams: {
    [key: string]: string;
  };
}

export const revalidate = 60;

const ShopPage: React.FC<ShopPageProps> = async ({
  params: { shopId },
  searchParams,
}) => {
  const { page, ...params } = searchParams;
  const shop = await getShopById(shopId);
  const data = await getShopProducts(shopId, params, page);
  const props = await getShopProperties(shopId);

  if (!data || !shop || !props) throw new Error('500');

  return (
    <Content>
      <HeaderCard
        imageUrl={shop.billboard?.imageUrl || '/img/header-card-default.jpg'}
        caption={
          shop.billboard?.caption || 'Explore your style with our collection!'
        }
        className="before:!bg-opacity-30"
      />
      <div className="grid grid-row-2 lg:grid-cols-[20%_70%] gap-12 py-12">
        <AllFilters props={props} />
        <ProductsList products={data.products} count={data.count} />
      </div>
    </Content>
  );
};

export default ShopPage;
