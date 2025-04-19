'use client';
import { OrderItemDataType } from '@/types/OrderDataType';
import { Suspense, useEffect, useState } from 'react';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { ItemThumbSkeleton } from '@/components/ui/skeletons/ProductItemSkeleton';
import {
  getProductNameDataByProductUuid,
  getProductOptionDataByProductOptionUuid,
} from '@/actions/product-service';
import CartPrice from '@/components/ui/CartItem/CartPrice';
import ItemName from '@/components/ui/CartItem/ItemName';
import CartThumbnail from '@/components/ui/CartItem/CartThumbnail';

interface OrderListProps {
  orderItems: OrderItemDataType;
  size: number;
}

export default function OrderItem({ orderItems }: OrderListProps) {
  const [orderItem, setCartItem] = useState({
    productUuid: '',
    productName: '',
    productPrice: 0,
    productSalePrice: 0,
    cartUuid: '',
    quantity: 0,
    optionUuid: '',
    optionSizeId: 0,
    optionColorId: 0,
    optionDiscount: 0,
    orderName: '',
  });
  useEffect(() => {
    if (!orderItems) return;
    const getCartItemData = async () => {
      const [product, options] = await Promise.all([
        getProductNameDataByProductUuid(orderItems.productUuid),
        getProductOptionDataByProductOptionUuid(orderItems.productOptionUuid),
      ]);
      console.log('product', orderItems.productQuantity);
      setCartItem((prev) => ({
        ...prev,
        productUuid: orderItems.productUuid,
        productName: product.name,
        productPrice: options.price,
        productSalePrice: options.totalPrice,
        cartUuid: orderItems.cartUuid,
        quantity: orderItems.productQuantity,
        optionUuid: orderItems.productOptionUuid,
        optionSizeId: options.sizeOptionId,
        optionColorId: options.colorOptionId,
        optionDiscount: options.discountRate,
        isChecked: orderItems.checked,
        orderName: `${product.name} 외 ${orderItems.productQuantity - 1}개`,
      }));
    };
    getCartItemData();
    return;
  }, [orderItems]);

  return (
    <CommonLayout.SectionInnerPadding>
      <article className="grid grid-cols-12 items-start gap-2 pt-4 ">
        <div className="shrink-0 col-span-2">
          <Suspense fallback={<ItemThumbSkeleton size={80} />}>
            <CartThumbnail productUuid={orderItems.productUuid} size={80} />
          </Suspense>
        </div>

        <div className="col-span-9 ">
          <div className="text-sm font-pretendard font-medium text-foreground space-y-4">
            <ItemName id={orderItem.productUuid} name={orderItem.productName} />
            <div className="flex items-center gap-2 text-sm font-xs font-sd-gothic text-lightGray-1">
              주문 수량
              {/* <p className="border-l pl-2 leading-3">{orderItem.quantity}개</p> */}
              {orderItem.productName} 외 {orderItems.productQuantity - 1} 개
            </div>

            <CartPrice
              price={orderItem.productPrice}
              salePrice={orderItem.productSalePrice}
              discountRate={orderItem.optionDiscount}
              quantity={orderItem.quantity}
            />
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
