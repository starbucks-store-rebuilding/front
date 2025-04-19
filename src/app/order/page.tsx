import { getOrderItem } from '@/actions/order-service';
import { getProductOptionDataByProductOptionUuid } from '@/actions/product-service';
import {
  getShippingAddressDatabyUuid,
  getShippingAddressList,
} from '@/actions/shipping-address-service';
import OrderList from '@/components/pages/order/OrderList';
import OrderNotice from '@/components/pages/order/OrderNotice';
import OrderShippingInfo from '@/components/pages/order/OrderShippingInfo';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ selected?: string }>;
}) {
  'use server';
  const orderItems = await getOrderItem();
  const orderoption: { productPrice: number; productSalePrice: number }[] =
    await Promise.all(
      orderItems.map(async (item) => {
        const data = await getProductOptionDataByProductOptionUuid(
          item.productOptionUuid
        );
        return {
          productPrice: data.price * item.productQuantity,
          productSalePrice: data.totalPrice * item.productQuantity,
        };
      })
    );
  const params = await searchParams;
  let selectedUuid;
  if (params.selected) selectedUuid = params.selected;

  let defaultedShippingAddress;

  if (selectedUuid) {
    defaultedShippingAddress = await getShippingAddressDatabyUuid(selectedUuid);
  } else {
    const addressList = await getShippingAddressList();
    const defaultAddress = addressList.find((a) => a.defaulted);
    if (defaultAddress) {
      defaultedShippingAddress = await getShippingAddressDatabyUuid(
        defaultAddress.shippingAddressUuid
      );
    }
  }
  return (
    <main>
      <OrderShippingInfo defaultAddress={defaultedShippingAddress} />
      <OrderList orderItems={orderItems} orderPirce={orderoption} />
      <OrderNotice />
    </main>
  );
}
