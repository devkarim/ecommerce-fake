import ProductInfo from '@/components/products/product-info';
import Content from '@/components/ui/content';
import Gallery from '@/components/ui/gallery';
import { getProductById } from '@/services/products';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById(params.productId);

  if (!product) throw new Error('500');

  return (
    <Content>
      <div className="flex flex-col gap-12 lg:gap-24 lg:flex-row">
        <Gallery images={product.images.map((im) => im.url)} />
        <ProductInfo
          id={product.id}
          name={product.name}
          price={+product.price}
          quantity={product.quantity}
          discount={product.discount}
          props={product.props}
        />
      </div>
    </Content>
  );
};

export default ProductPage;
