import { FullProduct } from '@/types/db';
import ProductCard from '../products/product-card';

interface ProductsListProps {
  products: FullProduct[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="flex gap-12">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          imageUrl={p.images[0].url}
          name={p.name}
          price={+p.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
