'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FaXmark } from 'react-icons/fa6';

import useProduct from '@/hooks/use-product';
import DiscountPrice from '@/components/ui/discount-price';
import PropsList from '@/components/products/props-list';
import useCart from '@/hooks/use-cart';
import Skeleton from '@/components/ui/skeleton';

interface CartItemProps {
  productId: number;
}

const CartItem: React.FC<CartItemProps> = ({ productId }) => {
  const cart = useCart();
  const upsertProductCache = useCart((state) => state.upsertProductCache);
  const { product, isLoading } = useProduct(productId);

  useEffect(() => {
    if (product) {
      upsertProductCache(product);
    }
  }, [product, upsertProductCache]);

  if (isLoading) return <Skeleton className="w-full h-56" />;

  if (!product) return <div>Unable to load product</div>;

  const onDelete = () => {
    cart.removeProduct(productId);
    toast.success('Product removed from cart');
  };

  return (
    <div className="border border-neutral p-8 rounded-lg flex justify-between">
      <div className="flex gap-6">
        <Link
          href={`/product/${product.id}`}
          className="relative h-28 w-28 lg:h-40 lg:w-40 rounded-lg overflow-hidden"
        >
          <Image
            src={product.images[0].url}
            alt={product.name}
            className="object-cover"
            fill
          />
        </Link>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">{product.name}</h3>
          <DiscountPrice price={+product.price} discount={product.discount} />
          {product.quantity <= 3 && (
            <h1 className="text-xs text-error font-semibold opacity-80">
              Only {product.quantity} left in stock, order now.
            </h1>
          )}
          <PropsList props={product.props} />
        </div>
      </div>
      <div>
        <button
          className="btn btn-sm btn-neutral btn-circle"
          onClick={onDelete}
        >
          <FaXmark className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
