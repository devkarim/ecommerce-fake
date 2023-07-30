import Header from '@/components/ui/header';
import { Product } from '@/generated/client';

interface FeaturedSectionProps {
  products: Product[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products }) => {
  return (
    <div>
      <Header>Featured</Header>
    </div>
  );
};

export default FeaturedSection;
