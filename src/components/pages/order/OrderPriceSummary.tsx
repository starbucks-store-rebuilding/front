import React, { use } from 'react';
import { CartItemPriceData } from '@/types/CartDataType';
import { usePriceSummary } from '@/hooks/usePriceSummary';

export interface OrderPriceSummaryProps {
  orderItems: CartItemPriceData[];
  className?: string;
}

export default function OrderPriceSummary({
  orderItems,
  className = '',
}: OrderPriceSummaryProps) {
  // const totalPrice = orderItems.reduce((sum, item) => {
  //   return sum + item.productSalePrice;
  // }, 0);

  // const orderProductPrice = orderItems.reduce((sum, item) => {
  //   return sum + item.productPrice;
  // }, 0);

  // console.log('상품 금액', totalPrice);
  // const discountTotal = orderItems.reduce((sum, item) => {
  //   return sum + item.productPrice - item.productSalePrice;
  // }, 0);
  const { orderProductPrice, discountTotal, totalPrice } =
    usePriceSummary(orderItems);
  return (
    <section
      className={`font-body font-semibold mt-6 space-y-2 p-6 bg-lightGray-3 ${className}`}
    >
      <ul className="flex justify-between">
        <li>상품 금액 </li>
        <li className="text-black">{orderProductPrice.toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between">
        <li>할인 금액</li>
        <li> {Math.floor(discountTotal).toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between text-xl pt-5">
        <li>총 결제 금액 </li>
        <li className="text-black">
          {Math.floor(totalPrice).toLocaleString()}원
        </li>
      </ul>
    </section>
  );
}
