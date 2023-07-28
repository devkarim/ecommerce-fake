import { FaCartShopping, FaArrowDown } from 'react-icons/fa6';
import Link from 'next/link';

import Logo from '@/components/ui/logo';
import Container from '@/components/ui/container';

interface NavbarProps {
  children?: React.ReactNode;
}

const Cart: React.FC<any> = ({}) => {
  return (
    <Link href="/cart">
      <div className="bg-accent text-accent-content rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center justify-center space-x-2">
        <FaCartShopping />
        <p>0</p>
      </div>
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Container className="py-4 flex justify-between items-center text-xs sm:text-base">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex space-x-3 sm:space-x-14">
        <div className="dropdown">
          <label tabIndex={0}>
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>Shop</p>
              <FaArrowDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/shop/men">Men</Link>
            </li>
            <li>
              <Link href="/shop/women">Women</Link>
            </li>
            <li>
              <Link href="/shop/kids">Kids</Link>
            </li>
          </ul>
        </div>
        <Link href="/featured">Featured</Link>
        <Link href="/new">New arrivals</Link>
      </div>
      <Cart />
    </Container>
  );
};

export default Navbar;