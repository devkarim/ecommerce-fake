import { FaGlobe, FaLock, FaPersonBiking, FaTruckFast } from 'react-icons/fa6';

import { Feature } from '@/types/ui';
import FeatureCard from './feature-card';
import Header from '@/components/ui/header';

interface FeatureSectionProps {
  children?: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Fast delivery',
    description:
      'Ensuring timely arrival of orders with reliable tracking and hassle-free return or exchange options.',
    icon: <FaTruckFast />,
  },
  {
    title: 'Secure Checkout',
    description:
      'A secure payment gateway that ensures safe transactions, protecting sensitive customer information.',
    icon: <FaLock />,
  },
  {
    title: 'Order Tracking',
    description:
      'Real-time updates on the status of orders, including expected delivery dates, and notifications for any delays or changes.',
    icon: <FaPersonBiking />,
  },
  {
    title: 'International Shipping',
    description:
      'Providing options for international shipping, expanding the customer base beyond local boundaries and accommodating global customers.',
    icon: <FaGlobe />,
  },
];

const FeatureSection: React.FC<FeatureSectionProps> = ({}) => {
  return (
    <div>
      <Header>
        Discover, shop, and indulge <br />
        with ease
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 xl:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
