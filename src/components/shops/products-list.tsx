import { FullProduct } from '@/types/db';
import ProductCard from '../products/product-card';

interface ProductsListProps {
  products: FullProduct[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-12 flex-grow">
      {products.length != 0 ? (
        products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            imageUrl={p.images[0].url}
            name={p.name}
            price={+p.price}
          />
        ))
      ) : (
        <p className="text-center w-full opacity-60 mt-12">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductsList;
