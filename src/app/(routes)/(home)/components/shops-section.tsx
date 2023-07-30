import Image from 'next/image';

import { Shop } from '@/generated/client';

import Header from '@/components/ui/header';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

interface ShopsSectionProps {
  shops: Shop[];
}

const ShopsSection: React.FC<ShopsSectionProps> = ({ shops }) => {
  return (
    <div className="space-y-12">
      <Header>Shops</Header>
      <div className="flex flex-col lg:flex-wrap space-y-8 lg:space-y-0 lg:flex-row lg:space-x-14">
        {shops.map((shop) => (
          <div
            className="card h-[26rem] w-full lg:w-64 bg-base-100 shadow-xl image-full before:!bg-opacity-60 before:!bg-gray-800"
            key={shop.id}
          >
            <figure>
              <Image
                src={shop.imageUrl}
                alt={shop.name}
                fill
                className="rounded-2xl contrast-100 -hue-rotate-15"
              />
            </figure>
            <div className="card-body justify-end items-center">
              <div className="card-actions justify-end">
                <Link href={`/shop/${shop.id}`} className="btn btn-accent">
                  Shop {shop.name} <FaArrowRight className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopsSection;
