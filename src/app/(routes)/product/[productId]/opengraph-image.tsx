import Image from 'next/image';
import { ImageResponse } from 'next/server';

import { getProductById } from '@/services/products';

export const size = {
  width: 630,
  height: 630,
};

export const contentType = 'image/png';

export default async function og({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);

  if (!product) throw new Error('404');

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <Image
            tw="flex flex-1"
            src={product.images[0].url}
            alt={product.name}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{product.name}</div>
        </div>
      </div>
    )
  );
}
