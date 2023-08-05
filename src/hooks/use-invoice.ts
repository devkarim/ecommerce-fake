import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface InvoiceStore {
  invoiceId: number | null;
  setInvoice: (invoiceId: number) => void;
  clearInvoice: () => void;
}

const useInvoice = create<InvoiceStore>()(
  persist(
    (set, get) => ({
      invoiceId: null,
      products: [],
      setInvoice: (invoiceId: number) => set({ invoiceId }),
      clearInvoice: () => set({ invoiceId: null }),
    }),
    {
      name: 'cart-storage',
      partialize: ({ invoiceId }) => ({ invoiceId }),
    }
  )
);

export default useInvoice;
