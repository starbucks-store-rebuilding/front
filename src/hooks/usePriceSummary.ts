import { useMemo } from 'react';
import { CartItemPriceData } from '@/types/CartDataType';

export interface PriceSummary {
  orderProductPrice: number; // 상품 원가 총합
  discountTotal: number; // 할인 총액
  totalPrice: number; // 최종 결제 금액
}

export function usePriceSummary(orderItems: CartItemPriceData[]): PriceSummary {
  return useMemo(() => {
    return orderItems.reduce<PriceSummary>(
      (acc, item) => {
        acc.orderProductPrice += item.productPrice;
        acc.totalPrice += item.productSalePrice;
        acc.discountTotal += item.productPrice - item.productSalePrice;
        return acc;
      },
      {
        orderProductPrice: 0,
        discountTotal: 0,
        totalPrice: 0,
      }
    );
  }, [orderItems]);
}
