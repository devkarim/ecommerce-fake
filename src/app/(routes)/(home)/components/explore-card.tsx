import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import HeaderCard from '@/components/ui/header-card';

interface ExploreCardProps {}

const ExploreCard: React.FC<ExploreCardProps> = ({}) => {
  return (
    <HeaderCard
      imageUrl="/img/home-card.png"
      caption="Explore your style with our newest collection!"
    >
      <Link href="/new" className="btn btn-info text-lg font-medium mt-6">
        Shop now <FaArrowRight />{' '}
      </Link>
    </HeaderCard>
  );
};

export default ExploreCard;
