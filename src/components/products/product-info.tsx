import { currencyFormatter } from '@/lib/utils';
import { FullProperty } from '@/types/db';
import { useMemo } from 'react';
import AddToCartButton from '../ui/add-cart';

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
  const newPrice = price - price * (discount / 100);

  const propsMap = useMemo(() => {
    const map = new Map<string, string[]>();

    props.forEach((prop) => {
      const propName = prop.property.name;
      if (map.has(propName)) {
        map.set(propName, [...(map.get(propName) || []), prop.value]);
      } else {
        map.set(propName, [prop.value]);
      }
    });

    return map;
  }, [props]);

  return (
    <div className="flex-grow basis-1 space-y-8">
      {/* Name and price */}
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="relative w-fit">
          <p className="font-medium text-2xl">
            {currencyFormatter.format(newPrice)}
          </p>
          {discount != 0 && (
            <p className="absolute text-sm top-0 left-full p-1 line-through opacity-60">
              {currencyFormatter.format(newPrice)}
            </p>
          )}
        </div>
        <div className="divider" />
      </div>
      {/* Props */}
      <div className="space-y-3">
        {Array.from(propsMap.keys()).map((propName) => (
          <div key={propName} className="flex items-center gap-4">
            <span className="text-lg font-medium">{propName}: </span>
            <span className="font-light">
              {propsMap.get(propName)?.join(' | ')}
            </span>
          </div>
        ))}
      </div>
      {/* Cart button */}
      <AddToCartButton id={id} />
    </div>
  );
};

export default ProductInfo;
