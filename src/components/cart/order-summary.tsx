'use client';

import { useEffect, useState } from 'react';

import Skeleton from '@/components/ui/skeleton';
import useCart from '@/hooks/use-cart';
import { currencyFormatter } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import useTotalCartPrice from '@/hooks/use-price';

interface OrderSummaryProps {
  actionText?: string;
  onSubmit?: (data: any) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  actionText = 'Checkout',
  onSubmit,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const products = useCart((state) => state.products);
  const router = useRouter();

  const totalPrice = useTotalCartPrice();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onCheckout = async () => {
    router.push('/checkout');
  };

  if (!isMounted) return <Skeleton className="flex-grow basis-1" />;

  return (
    <div className="flex-grow basis-1 h-fit border border-neutral p-8 rounded-lg space-y-8">
      <div>
        <h1 className="font-semibold text-xl">Order summary</h1>
        <div className="divider" />
      </div>
      <div className="flex w-full justify-between">
        <p>Total</p>
        <p className="font-bold">{currencyFormatter.format(totalPrice)}</p>
      </div>
      <button
        className="btn btn-accent w-full"
        type="submit"
        disabled={products.length == 0}
        onClick={onSubmit || onCheckout}
      >
        {actionText}
      </button>
    </div>
  );
};

export default OrderSummary;
