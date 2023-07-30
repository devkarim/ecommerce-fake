import { Product } from '@/generated/client';

import { BaseResponse } from '@/types/api';
import { ProductWithImages } from '@/types/db';

import client from './client';

type ProductsWithImagesResponse = BaseResponse<ProductWithImages[]>;

export const getFeaturedProducts = async () => {
  const response = await client.get<ProductsWithImagesResponse>(
    '/products/featured'
  );
  if (response.data.success) {
    return response.data.data;
  }
  return [];
};
