import { BaseResponse } from '@/types/api';
import { FullProduct, ProductDetails } from '@/types/db';

import client from './client';

export type FullProductsResponse = BaseResponse<{
  products: FullProduct[];
  count: number;
}>;

export type ProductResponse = BaseResponse<ProductDetails>;

export const getFeaturedProducts = async (page: string = '1') => {
  const response = await client.get<FullProductsResponse>(
    '/products/featured',
    { params: { page } }
  );
  if (response.data.success) {
    return response.data.data;
  }
  return { products: [], count: 0 };
};

export const getNewProducts = async (page: string = '1') => {
  const response = await client.get<FullProductsResponse>('/products/new', {
    params: { page },
  });
  if (response.data.success) {
    return response.data.data;
  }
  return { products: [], count: 0 };
};

export const getProductById = async (id: string) => {
  const response = await client.get<ProductResponse>(`/products/${id}`);
  if (response.data.success) {
    return response.data.data;
  }
  return null;
};
