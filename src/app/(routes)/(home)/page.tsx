import Container from '../../../components/ui/container';
import ExploreCard from './components/explore-card';
import FeatureSection from './components/feature-section';

export default function Home() {
  return (
    <Container className="py-8 lg:py-12 space-y-12">
      <ExploreCard />
      <FeatureSection />
    </Container>
  );
}
