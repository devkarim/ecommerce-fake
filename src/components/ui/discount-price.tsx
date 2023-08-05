import { currencyFormatter } from '@/lib/utils';

interface DiscountPriceProps {
  price: number;
  discount?: number;
}

const DiscountPrice: React.FC<DiscountPriceProps> = ({
  price,
  discount = 0,
}) => {
  const newPrice = price - price * (discount / 100);

  return (
    <div className="relative w-fit">
      <p className="font-bold text-lg sm:text-2xl">
        {currencyFormatter.format(newPrice)}
      </p>
      {discount != 0 && (
        <p className="absolute text-sm top-0 left-full p-1 line-through opacity-60">
          {currencyFormatter.format(newPrice)}
        </p>
      )}
    </div>
  );
};

export default DiscountPrice;
