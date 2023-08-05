'use client';

import { useEffect, useState } from 'react';

import useCart from '@/hooks/use-cart';
import Skeleton from '@/components/ui/skeleton';

import CartItem from './cart-item';

interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const cartProducts = useCart((state) => state.products);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Skeleton className="flex-grow basis-1/3" />;

  return (
    <div className="flex-grow basis-1/3">
      <h1 className="font-medium text-3xl">
        {cartProducts.length == 0 ? 'Your cart is empty' : 'Shopping Cart'}
      </h1>
      <div className="divider" />
      <div className="space-y-4">
        {cartProducts.length == 0 && (
          <div>
            <p className="opacity-60">No cart items.</p>
          </div>
        )}
        {cartProducts.map((id) => (
          <CartItem key={id} productId={id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
