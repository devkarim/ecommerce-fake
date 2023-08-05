import { FullProperty } from '@/types/db';

import AddToCartButton from '../ui/add-cart';
import PropsList from './props-list';
import DiscountPrice from '../ui/discount-price';

interface ProductInfoProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  props: FullProperty[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  name,
  price,
  quantity,
  discount,
  props,
}) => {
  return (
    <div className="flex-grow basis-1 space-y-8">
      {/* Name and price */}
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{name}</h1>
        <DiscountPrice price={price} discount={discount} />
        <div className="divider" />
      </div>
      {/* Props */}
      <PropsList props={props} />
      {/* Cart button */}
      <AddToCartButton id={id} />
    </div>
  );
};

export default ProductInfo;
