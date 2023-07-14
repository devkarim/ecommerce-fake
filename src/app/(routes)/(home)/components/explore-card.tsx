import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

interface ExploreCardProps {
  children?: React.ReactNode;
}

const ExploreCard: React.FC<ExploreCardProps> = ({}) => {
  return (
    <div className="card w-full h-[420px] shadow-xl image-full">
      <figure>
        <Image
          src="/img/home-card.png"
          alt="Shoes"
          fill
          className="rounded-2xl object-[60%_40%] sm:object-[100%_40%] contrast-100 -hue-rotate-15"
        />
      </figure>
      <div className="card-body items-center self-center">
        <p className="text-3xl lg:text-5xl font-bold text-center">
          Explore your style with our <br />
          newest collection!
        </p>
        <div className="card-actions mt-12 sm:mt-16">
          <button className="btn btn-secondary text-lg font-normal">
            Shop now <FaArrowRight />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;