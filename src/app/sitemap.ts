import { APP_URL } from '@/config/constants';
import { getFeaturedShops } from '@/services/shops';
import { getFeaturedProducts } from '@/services/products';

export default async function sitemap() {
  const shops = await getFeaturedShops();
  const shopUrls = shops.map((shop) => ({
    url: `${APP_URL}/shop/${shop.id}`,
    lastModified: shop.updatedAt,
  }));

  const data = await getFeaturedProducts();
  const productUrls = data.products.map((product) => ({
    url: `${APP_URL}/product/${product.id}`,
    lastModified: product.updatedAt,
  }));

  return [
    {
      url: APP_URL,
      lastModified: new Date(),
    },
    {
      url: `${APP_URL}/featured`,
      lastModified: new Date(),
    },
    {
      url: `${APP_URL}/new`,
      lastModified: new Date(),
    },
    ...shopUrls,
    ...productUrls,
  ];
}
