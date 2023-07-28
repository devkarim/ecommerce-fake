import { cls } from '@/lib/utils';

import Container from './container';

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <Container className={cls('py-8 lg:py-12 space-y-12', className)}>
      {children}
    </Container>
  );
};

export default Content;
