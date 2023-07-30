import ProductCard from '@/components/products/product-card';
import Header from '@/components/ui/header';
import { ProductWithImages } from '@/types/db';

interface FeaturedSectionProps {
  products: ProductWithImages[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products }) => {
  return (
    <div className="space-y-12">
      <Header>Featured</Header>
      <div className="flex flex-col lg:flex-wrap space-y-8 lg:space-y-0 lg:flex-row lg:space-x-14">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={+product.price}
            imageUrl={product.images[0].url}
            discount={50}
            // discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
