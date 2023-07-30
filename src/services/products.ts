import { Product } from '@/generated/client';

import { BaseResponse } from '@/types/api';

import client from './client';

type ProductsResponse = BaseResponse<Product[]>;

export const getFeaturedProducts = async () => {
  const response = await client.get<ProductsResponse>('/products/featured');
  if (response.data.success) {
    return response.data.data;
  }
  return [];
};
