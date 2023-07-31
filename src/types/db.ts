import { Prisma } from '@/generated/client';

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;
