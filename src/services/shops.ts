import { BaseResponse } from '@/types/api';
import { Shop } from '@/generated/client';

import client from './client';

type ShopsResponse = BaseResponse<Shop[]>;

type ShopResponse = BaseResponse<Shop>;

export const getShops = async () => {
  const response = await client.get<ShopsResponse>('/shops');
  if (response.data.success) {
    return response.data.data;
  }
  return [];
};

export const getFeaturedShops = async () => {
  const response = await client.get<ShopsResponse>('/shops/featured');
  if (response.data.success) {
    return response.data.data;
  }
  return [];
};

export const getShopById = async (shopId: string) => {
  const response = await client.get<ShopResponse>(`/shops/${shopId}`);
  if (response.data.success) {
    return response.data.data;
  }
  return null;
};
