'use client';

import { useEffect, useState } from 'react';
import OrderItemToggleList from './OrderItemToggleList';
import OrderItemSummary from './OrderItemSummary';
import ToggleButton from '@/components/ui/buttons/ToggleButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { OrderItemDataType } from '@/types/OrderDataType';
import OrderPriceSummary from './OrderPriceSummary';
import { CartItemPriceData } from '@/types/CartDataType';
import OrderPurchaseBar from './OrderPurchaseBar';
import { useOrderItemContext } from '@/context/OrderItemContext';

interface Props {
  orderItems: OrderItemDataType[];
  orderPirce: CartItemPriceData[];
}

export default function OrderList({ orderItems, orderPirce }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPaymentData } = useOrderItemContext();

  const totalOriginPrice = orderPirce.reduce(
    (sum, item) => sum + item.productPrice,
    0
  );

  const totalPurchasePrice = orderPirce.reduce(
    (sum, item) => sum + item.productSalePrice,
    0
  );

  const orderName =
    orderItems.length > 1
      ? `${orderItems[0].productUuid} 외 ${orderItems.length - 1}건`
      : orderItems[0].productUuid;

  useEffect(() => {
    setPaymentData({
      orderName,
      totalOriginPrice,
      totalPurchasePrice,
      method: '',
    });
  }, [orderItems, orderPirce]);

  return (
    <section>
      <CommonLayout.SectionInnerPadding>
        <div className="flex justify-between items-center">
          <h2 className=" font-semibold font-pretendard text-lg flex items-center gap-2">
            주문상품
            <OrderItemSummary orderItems={orderItems} />
          </h2>

          <ToggleButton
            isOpen={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
          />
        </div>

        <OrderItemToggleList orderItems={orderItems} isOpen={isOpen} />
      </CommonLayout.SectionInnerPadding>
      <CommonLayout.CommonBorder />

      <OrderPriceSummary orderItems={orderPirce} />
      <OrderPurchaseBar />
    </section>
  );
}
