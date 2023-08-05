import Content from '@/components/ui/content';
import ShoppingCart from './components/shopping-cart';
import OrderSummary from './components/order-summary';

interface CartPageProps {}

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
