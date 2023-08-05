import ProductInfo from '@/components/products/product-info';
import ProductsList from '@/components/shops/products-list';
import Content from '@/components/ui/content';
import Gallery from '@/components/ui/gallery';
import Header from '@/components/ui/header';
import { getProductById } from '@/services/products';
import { getShopProducts } from '@/services/shops';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 60;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById(params.productId);

  if (!product) throw new Error('500');

  const relatedProducts = await getShopProducts(product.shopId);

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
      <div className="divider" />
      {/* Related products */}
      <div className="space-y-8">
        <Header>Related products</Header>
        <ProductsList products={relatedProducts.products} />
      </div>
    </Content>
  );
};

export default ProductPage;
