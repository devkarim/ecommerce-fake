'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return <div className="flex-grow basis-1">Gallery</div>;
};

export default Gallery;
