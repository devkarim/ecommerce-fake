'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

import useCart from '@/hooks/use-cart';

interface CartProps {}

const Cart: React.FC<CartProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div></div>;

  return (
    <Link href="/cart">
      <div className="bg-accent text-accent-content rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center justify-center space-x-2 hover:bg-accent-focus">
        <FaCartShopping />
        <p>{cart.products.length}</p>
      </div>
    </Link>
  );
};

export default Cart;
