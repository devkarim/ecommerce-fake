import ExploreCard from './components/explore-card';
import FeatureSection from './components/feature-section';

export default function Home() {
  return (
    <div className="py-12 px-24 space-y-12">
      <ExploreCard />
      <FeatureSection />
    </div>
  );
}
