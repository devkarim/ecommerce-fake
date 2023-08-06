import { Shop } from '@/generated/client';

import Header from '@/components/ui/header';
import ShopCard from './shop-card';

interface ShopsSectionProps {
  shops: Shop[];
}

const ShopsSection: React.FC<ShopsSectionProps> = ({ shops }) => {
  return (
    <div className="space-y-12">
      <Header>Shops</Header>
      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-8 overflow-x-auto px-4 pb-4 scrollbar scrollbar-h-[10px] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-neutral scrollbar-track-base-300 select-none">
        <ShopCard
          href="/featured"
          name={'Featured'}
          imageUrl={'/img/featured-card.jpg'}
        />
        {shops.map((shop) => (
          <ShopCard
            key={shop.id}
            href={`/shop/${shop.id}`}
            name={shop.name}
            imageUrl={shop.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopsSection;
