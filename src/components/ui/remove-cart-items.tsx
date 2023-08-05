'use client';

import useCart from '@/hooks/use-cart';
import { useEffect } from 'react';

interface RemoveCartItemsProps {
  isPaid?: boolean;
}

const RemoveCartItems: React.FC<RemoveCartItemsProps> = ({ isPaid }) => {
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (isPaid) {
      removeAll();
    }
  }, [isPaid, removeAll]);

  return <></>;
};

export default RemoveCartItems;
