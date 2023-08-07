import { FullProduct } from '@/types/db';

import ProductCard from '@/components/products/product-card';
import Pagination from '../ui/pagination';

interface ProductsListProps {
  products: FullProduct[];
  count?: number;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, count }) => {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-8 flex-grow">
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
      {!!count && <Pagination count={count} />}
    </div>
  );
};

export default ProductsList;
