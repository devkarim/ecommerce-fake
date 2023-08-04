import Link from 'next/link';

import Logo from '@/components/ui/logo';
import { getFeaturedShops } from '@/services/shops';

interface FooterProps {}

const Footer: React.FC<FooterProps> = async ({}) => {
  const shops = await getFeaturedShops();
  const yearNow = new Date().getFullYear();

  return (
    <footer className="footer py-10 px-10 2xl:px-48 bg-base-200">
      <div>
        <Logo />
        <br />
        <p>
          Made with <span className="text-red-500">❤</span> by{' '}
          <a href="https://github.com/devkarim">devkarim.</a>
        </p>
        <p>Copyright &copy; {yearNow} - All rights reserved.</p>
      </div>
      <div>
        <span className="footer-title">Shops</span>
        {shops.map((shop) => (
          <Link
            key={shop.id}
            href={`/shop/${shop.id}`}
            className="link link-hover"
          >
            {shop.name}
          </Link>
        ))}
      </div>
      <div>
        <span className="footer-title">Products</span>
        <Link href="/featured" className="link link-hover">
          Featured
        </Link>
        <Link href="/new" className="link link-hover">
          New arrivals
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
