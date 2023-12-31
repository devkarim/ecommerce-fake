import { Metadata } from 'next';

import Content from '@/components/ui/content';
import OrderSummary from '@/components/cart/order-summary';

import ShoppingCart from './components/shopping-cart';

interface CartPageProps {}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

const CartPage: React.FC<CartPageProps> = ({}) => {
  return (
    <Content className="flex flex-col gap-12 lg:flex-row lg:gap-24">
      {/* Cart items */}
      <ShoppingCart />
      {/* Order summary */}
      <OrderSummary />
    </Content>
  );
};

export default CartPage;
