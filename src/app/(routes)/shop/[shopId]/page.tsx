import Content from '@/components/ui/content';
import { getShopById } from '@/services/shops';

interface ShopPageProps {
  params: {
    shopId: string;
  };
}

const ShopPage: React.FC<ShopPageProps> = async ({ params: { shopId } }) => {
  const shop = await getShopById(shopId);

  return <Content>Shop name: {shop?.name}</Content>;
};

export default ShopPage;
