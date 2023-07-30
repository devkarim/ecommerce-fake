import Content from '@/components/ui/content';

import ExploreCard from './components/explore-card';
import FeatureSection from './components/feature-section';
import ShopsSection from './components/shops-section';
import { getFeaturedShops } from '@/services/shops';

export default async function Home() {
  const shops = await getFeaturedShops();

  return (
    <Content>
      <ExploreCard />
      <FeatureSection />
      <ShopsSection shops={shops} />
    </Content>
  );
}
