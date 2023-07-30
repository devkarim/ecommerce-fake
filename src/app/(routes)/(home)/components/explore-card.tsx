import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

interface ExploreCardProps {}

const ExploreCard: React.FC<ExploreCardProps> = ({}) => {
  return (
    <div className="card w-full h-[420px] shadow-xl image-full before:!bg-gray-800">
      <figure>
        <Image
          src="/img/home-card.png"
          alt="Shoes"
          fill
          className="rounded-2xl object-[60%_40%] sm:object-[100%_40%] contrast-100 -hue-rotate-15"
        />
      </figure>
      <div className="card-body items-center self-center">
        <p className="text-white text-3xl lg:text-5xl font-bold text-center">
          Explore your style with our <br />
          newest collection!
        </p>
        <div className="card-actions mt-12 sm:mt-16">
          <Link href="/new" className="btn btn-info text-lg font-medium">
            Shop now <FaArrowRight />{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
