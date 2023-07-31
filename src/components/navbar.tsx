import { FaArrowDown } from 'react-icons/fa6';
import Link from 'next/link';

import Logo from '@/components/ui/logo';
import Cart from '@/components/ui/cart';
import Container from '@/components/ui/container';
import { getFeaturedShops } from '@/services/shops';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = async ({}) => {
  const shops = await getFeaturedShops();

  return (
    <Container className="py-4 flex justify-between items-center text-xs sm:text-base">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex space-x-3 sm:space-x-14">
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>Shop</p>
              <FaArrowDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 menu p-2 shadow bg-base-300 rounded-box min-w-[150px]"
          >
            {shops.map((shop) => (
              <li key={shop.id}>
                <Link href={`/shop/${shop.id}`}>{shop.name}</Link>
              </li>
            ))}
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
