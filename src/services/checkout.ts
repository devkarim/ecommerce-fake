import { BaseResponse } from '@/types/api';
import { CheckoutSchema } from '@/schema/checkout';

import client from './client';

type CheckoutResponse = BaseResponse<{ url: string; invoiceId: number }>;

const checkout = async (productIds: number[], values: CheckoutSchema) => {
  const response = await client.post<CheckoutResponse>(`/checkout`, {
    productIds,
    ...values,
  });
  if (response.data.success) {
    return response.data.data;
  }
  return null;
};

export default checkout;
