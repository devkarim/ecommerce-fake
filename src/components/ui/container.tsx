import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge('mx-auto max-w-9xl px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
