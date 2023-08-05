import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductDetails } from '@/types/db';

interface CartStore {
  products: number[];
  cache: ProductDetails[];
  hasProduct: (productId: number) => boolean;
  addProduct: (productId: number) => void;
  upsertProductCache: (product: ProductDetails) => void;
  getProduct: (productId: number) => ProductDetails | undefined;
  removeProduct: (id: number) => void;
  removeAll: () => void;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      cache: [],
      addProduct: (productId: number) =>
        set({ products: [...get().products, productId] }),
      hasProduct: (productId: number) => get().products.includes(productId),
      removeProduct: (productId: number) =>
        set({
          products: get().products.filter((item) => item !== productId),
          cache: get().cache.filter((item) => item.id !== productId),
        }),
      removeAll: () => set({ products: [], cache: [] }),
      getProduct: (productId: number) => {
        const { cache } = get();
        const product = cache.find((item) => item.id === productId);
        return product;
      },
      upsertProductCache: (product: ProductDetails) => {
        const { cache } = get();
        const productIndex = cache.findIndex((item) => item.id === product.id);
        if (productIndex === -1) {
          set({ cache: [...cache, product] });
        } else {
          const newCache = [...cache];
          newCache[productIndex] = product;
          set({ cache: newCache });
        }
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ products: state.products }),
    }
  )
);

export default useCart;
