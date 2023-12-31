import { Prisma } from '@/generated/client';

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;

export type FullProduct = Prisma.ProductGetPayload<{
  include: { images: true; props: true };
}>;

export type ProductDetails = Prisma.ProductGetPayload<{
  include: { images: true; props: { include: { property: true } }; shop: true };
}>;

export type ProductPrice = Prisma.ProductGetPayload<{
  select: {
    price: true;
    discount: true;
  };
}>;

export type ShopBillboard = Prisma.ShopGetPayload<{
  include: { billboard: true };
}>;

export type FullProperty = Prisma.PropertyValueGetPayload<{
  include: { property: true };
}>;
