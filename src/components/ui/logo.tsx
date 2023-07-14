interface LogoProps {
  children?: React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({}) => {
  return <p className="text-base sm:text-xl font-bold">STORE</p>;
};

export default Logo;
