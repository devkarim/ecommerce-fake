'use client';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className="text-2xl lg:text-3xl font-bold">{children}</h1>;
};

export default Header;
