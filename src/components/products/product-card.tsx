'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';

import { currencyFormatter } from '@/lib/utils';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  discount?: number; // 0 -> 100
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  discount = 0,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  const onAddToCart = () => {
    if (cart.hasProduct(id)) return toast.error('Product is already in cart.');
    cart.addProduct(id);
    toast.success('Added to cart!');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const newPrice = price - price * (discount / 100);

  return (
    <div className="space-y-4">
      <Link
        href={`/product/${id}`}
        className="card h-[25rem] w-full lg:w-[21rem] bg-base-100 shadow-xl image-full before:!bg-opacity-30 before:!bg-gray-800 hover:before:!bg-opacity-50 before:transition-colors"
      >
        <figure>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-2xl contrast-100 -hue-rotate-15"
          />
        </figure>
        <div className="card-body justify-start items-start p-4">
          {discount != 0 && (
            <div className="py-2 px-4 bg-error rounded-md text-error-content">
              <p className="font-bold">{discount}% OFF</p>
            </div>
          )}
        </div>
      </Link>
      <div className="flex justify-between">
        <div className="space-y-2">
          <p className="font-medium">{name}</p>
          <div className="relative w-fit">
            <p className="font-bold text-2xl">
              {currencyFormatter.format(newPrice)}
            </p>
            {discount != 0 && (
              <p className="absolute text-sm top-0 left-full p-1 line-through opacity-60">
                {currencyFormatter.format(newPrice)}
              </p>
            )}
          </div>
        </div>
        <button className="btn btn-accent" onClick={onAddToCart}>
          <FaCartPlus className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
