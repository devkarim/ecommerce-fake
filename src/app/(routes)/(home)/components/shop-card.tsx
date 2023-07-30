'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

interface ShopCardProps {
  href: string;
  name: string;
  imageUrl: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ href, name, imageUrl }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Link
      href={href}
      className="card h-[26rem] w-full lg:w-72 bg-base-100 shadow-xl image-full before:!bg-opacity-60 before:!bg-gray-800 hover:before:!bg-opacity-80 before:transition-colors"
    >
      <figure>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-2xl contrast-100 -hue-rotate-15"
        />
      </figure>
      <div className="card-body justify-end items-center">
        <div className="card-actions justify-end">
          <Link href={href} className="btn btn-info font-medium">
            Shop {name} <FaArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
