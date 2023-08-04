import Content from '@/components/ui/content';
import { getFeaturedShops } from '@/services/shops';
import { getFeaturedProducts } from '@/services/products';

import ExploreCard from './components/explore-card';
import ShopsSection from './components/shops-section';
import FeatureSection from './components/feature-section';
import FeaturedSection from './components/featured-section';

export default async function Home() {
  const shops = await getFeaturedShops();
  const data = await getFeaturedProducts();

  return (
    <Content>
      <ExploreCard />
      <FeatureSection />
      <ShopsSection shops={shops} />
      <FeaturedSection products={data.products} />
    </Content>
  );
}
