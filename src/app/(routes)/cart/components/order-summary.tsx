'use client';

import toast from 'react-hot-toast';
import { useEffect, useMemo, useState } from 'react';

import Skeleton from '@/components/ui/skeleton';
import useCart from '@/hooks/use-cart';
import { currencyFormatter } from '@/lib/utils';
import checkout from '@/services/checkout';
import useInvoice from '@/hooks/use-invoice';

interface OrderSummaryProps {}

const OrderSummary: React.FC<OrderSummaryProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const invoice = useInvoice();
  const cache = useCart((state) => state.cache);
  const products = useCart((state) => state.products);

  const totalPrice = useMemo(() => {
    return cache.reduce((acc, product) => {
      const price = +product.price;
      const newPrice = price - (price * product.discount) / 100;
      return acc + newPrice;
    }, 0);
  }, [cache]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onCheckout = async () => {
    setLoading(true);
    try {
      const data = await checkout(products);
      if (data) {
        const { url, invoiceId } = data;
        invoice.setInvoice(invoiceId);
        window.location.href = url;
      } else {
        console.error(data);
        toast.error('Something went wrong');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
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
        disabled={products.length == 0 || loading}
        onClick={onCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
