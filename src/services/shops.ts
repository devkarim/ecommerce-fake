import { BaseResponse } from '@/types/api';
import { FullProduct, ShopBillboard } from '@/types/db';
import { Property, Shop } from '@/generated/client';

import client from './client';
import { FullProductsResponse } from './products';

type ShopsResponse = BaseResponse<Shop[]>;

type ShopResponse = BaseResponse<ShopBillboard>;

type PropertiesResponse = BaseResponse<Property[]>;

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

export const getShopProperties = async (shopId: string) => {
  const response = await client.get<PropertiesResponse>(
    `/shops/${shopId}/properties`
  );
  if (response.data.success) {
    return response.data.data;
  }
  return null;
};

export const getShopProducts = async (
  shopId: string | number,
  searchParams: { [key: string]: string } = {},
  page: string = '1'
) => {
  const response = await client.get<FullProductsResponse>(
    `/shops/${shopId}/products`,
    {
      params: { page, ...searchParams },
    }
  );
  if (response.data.success) {
    return response.data.data;
  }
  return { products: [], count: 0 };
};
