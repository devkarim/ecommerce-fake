import Content from '@/components/ui/content';

import CustomerForm from './components/custom-form';

interface CheckoutPageProps {}

const CheckoutPage: React.FC<CheckoutPageProps> = ({}) => {
  return (
    <Content>
      <CustomerForm />
    </Content>
  );
};

export default CheckoutPage;
