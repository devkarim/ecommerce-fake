interface LogoProps {
  children?: React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({}) => {
  return <p className="text-xl lg:text-3xl font-bold">STORE</p>;
};

export default Logo;
