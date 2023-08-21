'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cls } from '@/lib/utils';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex-grow basis-1 min-h-[36rem]">
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
        <div className="flex flex-row lg:flex-col gap-4 order-2 lg:order-1">
          {images.map((im) => (
            <div
              key={im}
              className={cls(
                'relative h-20 w-20 rounded-xl overflow-hidden cursor-pointer',
                {
                  'ring-2 ring-primary': activeImage == im,
                }
              )}
              onMouseEnter={() => setActiveImage(im)}
            >
              <Image
                src={im}
                alt="gallery-item"
                className="object-cover"
                fill
              />
            </div>
          ))}
        </div>
        <div className="relative flex h-full w-full rounded-xl overflow-hidden order-1 lg:order-2">
          <Image
            src={activeImage}
            alt="gallery-active"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
