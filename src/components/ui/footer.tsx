import Link from 'next/link';

import Logo from '@/components/ui/logo';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="footer py-10 px-10 2xl:px-48 bg-base-200">
      <div>
        <Logo />
        <p>Copyright &copy; 2023 - All rights reserved</p>
      </div>
      <div>
        <span className="footer-title">Shops</span>
        <Link href="/shop/men" className="link link-hover">
          Men
        </Link>
        <Link href="/shop/women" className="link link-hover">
          Women
        </Link>
        <Link href="/shop/kids" className="link link-hover">
          Kids
        </Link>
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
          About us
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
