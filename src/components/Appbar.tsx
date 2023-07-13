import { FaCartShopping, FaArrowDown } from 'react-icons/fa6';
import Link from 'next/link';

import Logo from '@/components/ui/Logo';

interface AppbarProps {
  children?: React.ReactNode;
}

const Cart: React.FC<any> = ({}) => {
  return (
    <div className="bg-black text-white rounded-full px-4 py-2 flex items-center justify-center space-x-4">
      <FaCartShopping />
      <p>0</p>
    </div>
  );
};

const Appbar: React.FC<AppbarProps> = ({}) => {
  return (
    <div className="py-12 px-12 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex space-x-16 text-lg">
        <div className="flex items-center space-x-1">
          <p>Shop</p>
          <FaArrowDown />
        </div>
        <Link href="/featured">Featured</Link>
        <Link href="/new">New arrivals</Link>
      </div>
      <Cart />
    </div>
  );
};

export default Appbar;
