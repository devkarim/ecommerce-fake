import { useEffect, useMemo, useState } from 'react';

import { getProductsPrice } from '@/services/products';
import { ProductPrice } from '@/types/db';
import useCart from './use-cart';

const useTotalCartPrice = () => {
  const productIds = useCart((state) => state.products);
  const [products, setProducts] = useState<ProductPrice[]>([]);

  useEffect(() => {
    if (productIds.length == 0) return;
    getProductsPrice(productIds).then((prods) => setProducts(prods));
  }, [productIds]);

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => {
      const price = +product.price;
      const newPrice = price - (price * product.discount) / 100;
      return acc + newPrice;
    }, 0);
  }, [products]);

  return totalPrice || 0;
};

export default useTotalCartPrice;
