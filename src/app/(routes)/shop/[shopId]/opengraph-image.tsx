import { ImageResponse } from 'next/og';

import { getShopById } from '@/services/shops';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function og({ params }: { params: { shopId: string } }) {
  const shop = await getShopById(params.shopId);

  if (!shop) throw new Error('404');

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={shop.billboard?.imageUrl ?? '/img/header-card-default.jpg'}
            alt={shop.name}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="flex text-7xl font-bold">{shop.name} Shop</div>
        </div>
      </div>
    )
  );
}
