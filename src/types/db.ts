import { Prisma } from '@/generated/client';

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;

export type FullProduct = Prisma.ProductGetPayload<{
  include: { images: true; props: true };
}>;