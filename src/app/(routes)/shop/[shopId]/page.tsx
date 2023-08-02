import FiltersList from '@/components/shops/filters-list';
import ProductsList from '@/components/shops/products-list';
import Content from '@/components/ui/content';
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
    <Content className="flex gap-24">
      <FiltersList props={props} />
      <ProductsList products={products} />
    </Content>
  );
};

export default ShopPage;
