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
      <div className="flex flex-col lg:flex-wrap space-y-8 lg:space-y-0 lg:flex-row lg:space-x-14">
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
