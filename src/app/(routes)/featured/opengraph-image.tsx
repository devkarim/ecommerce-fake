import Image from 'next/image';
import { ImageResponse } from 'next/server';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function og() {
  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <Image tw="flex flex-1" src="/img/home-card.png" alt="home-card" />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">Featured products</div>
        </div>
      </div>
    )
  );
}
