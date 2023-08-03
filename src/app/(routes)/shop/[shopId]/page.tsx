import AllFilters from '@/components/shops/all-filters';
import FiltersList from '@/components/shops/filters-list';
import MobileFilters from '@/components/shops/mobile-filters';
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
}

const ShopPage: React.FC<ShopPageProps> = async ({ params: { shopId } }) => {
  const shop = await getShopById(shopId);
  const products = await getShopProducts(shopId);
  const props = await getShopProperties(shopId);

  if (!products || !shop || !props) throw new Error('500');

  return (
    <Content>
      <HeaderCard
        imageUrl={shop.billboard?.imageUrl || '/img/header-card-default.jpg'}
        caption={
          shop.billboard?.caption || 'Explore your style \nwith our collection!'
        }
        className="before:!bg-opacity-30"
      />
      <div className="grid grid-row-2 lg:grid-cols-[20%_70%] gap-12 py-12">
        <AllFilters props={props} />
        <ProductsList products={products} />
      </div>
    </Content>
  );
};

export default ShopPage;
