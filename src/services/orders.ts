import { BaseResponse } from '@/types/api';

import client from './client';

type PaidResponse = BaseResponse<{ isPaid: boolean }>;

export const isInvoicePaid = async (invoiceId: string | number) => {
  const response = await client.get<PaidResponse>(`/orders/${invoiceId}`);
  if (response.data.success) {
    return response.data.data;
  }
  return null;
};
