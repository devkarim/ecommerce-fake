import Content from '@/components/ui/content';
import { getProductById } from '@/services/products';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById(params.productId);

  return <Content>{product?.name}</Content>;
};

export default ProductPage;
