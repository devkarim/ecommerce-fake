import client from '@/services/client';
import { BaseResponse } from '@/types/api';

import useSWR from 'swr';

const fetcher = (url: string) =>
  client.get<BaseResponse<{ isPaid: boolean }>>(url).then((res) => res.data);

const useOrder = (id: number) => {
  const { data, error, isLoading } = useSWR(`/orders/${id}`, fetcher);

  return {
    isPaid: data?.success ? data.data : null,
    error: (!data?.success && data?.message) || error,
    isLoading,
  };
};

export default useOrder;
