import RemoveCartItems from '@/components/ui/remove-cart-items';
import { isInvoicePaid } from '@/services/orders';

interface OrderSuccessfulProps {
  searchParams: {
    invoice_id: string;
  };
}

const OrderSuccessful: React.FC<OrderSuccessfulProps> = async ({
  searchParams,
}) => {
  const data = await isInvoicePaid(searchParams.invoice_id);

  return (
    <div className="flex w-full justify-center text-center mt-64">
      <RemoveCartItems isPaid={data?.isPaid} />
      <h1 className="text-2xl lg:text-4xl font-bold max-w-3xl">
        {data && data.isPaid ? (
          <span className="text-success">
            Order successfully fulfilled. Thank you for choosing our services.
          </span>
        ) : (
          <span className="text-error">
            Sorry, there was an issue processing your order. Please try again.
          </span>
        )}
      </h1>
    </div>
  );
};

export default OrderSuccessful;
