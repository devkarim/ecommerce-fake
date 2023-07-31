import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore {
  products: number[];
  hasProduct: (productId: number) => boolean;
  addProduct: (productId: number) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (productId: number) =>
        set({ products: [...get().products, productId] }),
      hasProduct: (productId: number) => get().products.includes(productId),
      removeProduct: (productId: number) =>
        set({
          products: get().products.filter((item) => item !== productId),
        }),
      removeAll: () => set({ products: [] }),
    }),
    { name: 'cart-storage' }
  )
);

export default useCart;
