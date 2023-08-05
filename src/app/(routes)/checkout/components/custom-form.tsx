'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@/components/ui/input';
import OrderSummary from '@/components/cart/order-summary';
import { CheckoutSchema, checkoutSchema } from '@/schema/checkout';
import useCart from '@/hooks/use-cart';
import checkout from '@/services/checkout';

interface CustomerFormProps {}

const CustomerForm: React.FC<CustomerFormProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {},
    reValidateMode: 'onSubmit',
  });
  const products = useCart((state) => state.products);

  const onSubmit = async (values: CheckoutSchema) => {
    setLoading(true);
    try {
      const data = await checkout(products, values);
      if (data) {
        const { url } = data;
        window.location.href = url;
      } else {
        console.error(data);
        toast.error('Something went wrong');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-0 gap-12 justify-between">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-grow basis-1/3 justify-center items-center space-y-12"
      >
        <div className="space-y-6 rounded-lg border border-neutral p-8 w-full">
          <h1 className="font-semibold text-3xl">Billing details</h1>
          <div className="divider" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            <Input
              id="first_name"
              type="text"
              label="First name"
              placeholder="Your first name here"
              disabled={loading}
              error={errors.first_name?.message}
              full
              {...register('first_name')}
            />
            <Input
              id="last_name"
              type="text"
              label="Last name"
              placeholder="Your last name here"
              disabled={loading}
              error={errors.last_name?.message}
              full
              {...register('last_name')}
            />
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="Your email address here"
              disabled={loading}
              error={errors.email?.message}
              full
              {...register('email')}
            />
            <Input
              id="phone"
              type="number"
              label="Phone"
              placeholder="Your phone number here"
              disabled={loading}
              error={errors.phone?.message}
              full
              {...register('phone', { valueAsNumber: true })}
            />
            <Input
              id="address_line_1"
              type="text"
              label="Address line 1"
              placeholder="Your address line 1 here"
              disabled={loading}
              error={errors.address_line_1?.message}
              full
              {...register('address_line_1')}
            />
            <Input
              id="address_line_2"
              type="text"
              label="Address line 2 (optional)"
              placeholder="Your address line 2 here (optional)"
              disabled={loading}
              error={errors.address_line_2?.message}
              full
              {...register('address_line_2')}
            />
            <Input
              id="city"
              type="text"
              label="City"
              placeholder="Your city here"
              disabled={loading}
              error={errors.city?.message}
              full
              {...register('city')}
            />
            <Input
              id="country"
              type="text"
              label="Country"
              placeholder="Your country here"
              disabled={loading}
              error={errors.country?.message}
              full
              {...register('country')}
            />
            <Input
              id="zip"
              type="text"
              label="Zip Postal Code"
              placeholder="Your zip postal code here"
              disabled={loading}
              parentClassName="sm:col-span-2"
              error={errors.zip?.message}
              full
              {...register('zip')}
            />
          </div>
        </div>
      </form>
      <OrderSummary actionText="Purchase" onSubmit={handleSubmit(onSubmit)} />
    </div>
  );
};

export default CustomerForm;
