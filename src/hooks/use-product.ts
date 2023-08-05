import client from '@/services/client';

import { ProductResponse } from '@/services/products';

import useSWR from 'swr';

const fetcher = (url: string) =>
  client.get<ProductResponse>(url).then((res) => res.data);

const useProduct = (id: number) => {
  const { data, error, isLoading } = useSWR(`/products/${id}`, fetcher);

  return {
    product: data?.success ? data.data : null,
    error: (!data?.success && data?.message) || error,
    isLoading,
  };
};

export default useProduct;
