import { BaseResponse } from '@/types/api';
import client from './client';

type CheckoutResponse = BaseResponse<{ url: string }>;

const checkout = async (productIds: number[]) => {
  const response = await client.post<CheckoutResponse>(`/checkout`, {
    productIds,
  });
  if (response.data.success) {
    return response.data.data;
  }
  return null;
};

export default checkout;
