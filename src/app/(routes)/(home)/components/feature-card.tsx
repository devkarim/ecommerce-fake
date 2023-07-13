import { Feature } from '@/types';

interface FeatureCardProps {
  children?: React.ReactNode;
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { title, description, icon } = feature;
  return (
    <div className="max-w-sm space-y-4">
      <div className="bg-gray-300 w-fit rounded-lg p-6 text-4xl">{icon}</div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="opacity-60">{description}</p>
    </div>
  );
};

export default FeatureCard;
