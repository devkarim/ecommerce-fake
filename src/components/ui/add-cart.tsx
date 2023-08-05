'use client';

import toast from 'react-hot-toast';

import useCart from '@/hooks/use-cart';
import { FaShoppingCart } from 'react-icons/fa';

interface AddToCartButtonProps {
  id: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id }) => {
  const cart = useCart();

  const onAddToCart = () => {
    if (cart.hasProduct(id)) return toast.error('Product is already in cart.');
    cart.addProduct(id);
    toast.success('Added to cart!');
  };

  return (
    <button className="btn btn-accent rounded-full px-6" onClick={onAddToCart}>
      Add to cart <FaShoppingCart className="text-xl" />
    </button>
  );
};

export default AddToCartButton;
