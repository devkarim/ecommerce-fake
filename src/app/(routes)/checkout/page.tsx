import { Metadata } from 'next';

import Content from '@/components/ui/content';

import CustomerForm from './components/customer-form';

interface CheckoutPageProps {}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

const CheckoutPage: React.FC<CheckoutPageProps> = ({}) => {
  return (
    <Content className="space-y-0">
      <CustomerForm />
    </Content>
  );
};

export default CheckoutPage;
