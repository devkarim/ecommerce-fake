import { Feature } from '@/types/ui';

interface FeatureCardProps {
  children?: React.ReactNode;
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { title, description, icon } = feature;
  return (
    <div className="md:max-w-sm space-y-4 text-center md:text-left">
      <div className="bg-neutral w-fit rounded-lg p-6 text-3xl lg:text-4xl mx-auto md:mx-0">
        {icon}
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
      <p className="opacity-60">{description}</p>
    </div>
  );
};

export default FeatureCard;
