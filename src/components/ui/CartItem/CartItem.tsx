'use client';
import {
  getProductNameDataByProductUuid,
  getProductOptionDataByProductOptionUuid,
} from '@/actions/product-service';

import { ItemThumbSkeleton } from '../skeletons/ProductItemSkeleton';

import CartPrice from './CartPrice';
import CartThumbnail from './CartThumbnail';
import ItemName from './ItemName';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import Checkbox from '../inputs/CheckBox';
import { Suspense, useEffect, useState } from 'react';
import { CartItemType } from '@/types/CartDataType';
import QuantityControl from '@/components/pages/cart/QuantityControl';
import DeleteButton from '../buttons/DeleteButton';

export default function CartItem({
  data,
  size,
}: {
  data: CartItemType;
  size: number;
}) {
  const [cartItem, setCartItem] = useState({
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
    isChecked: data.checked,
  });
  useEffect(() => {
    if (!data) return;
    const getCartItemData = async () => {
      const [product, options] = await Promise.all([
        getProductNameDataByProductUuid(data.productUuid),
        getProductOptionDataByProductOptionUuid(data.productOptionUuid),
      ]);
      console.log('product', data.productQuantity);
      setCartItem((prev) => ({
        ...prev,
        productUuid: data.productUuid,
        productName: product.name,
        productPrice: options.price,
        productSalePrice: options.totalPrice,
        cartUuid: data.cartUuid,
        quantity: data.productQuantity,
        optionUuid: data.productOptionUuid,
        optionSizeId: options.sizeOptionId,
        optionColorId: options.colorOptionId,
        optionDiscount: options.discountRate,
        isChecked: data.checked,
      }));
    };
    getCartItemData();
    return;
  }, [data]);

  return (
    <CommonLayout.SectionInnerPadding>
      <article className="grid grid-cols-12 items-start gap-2 py-6 border-b border-lightGray-8">
        <Checkbox
          checked={cartItem.isChecked}
          cartUuid={cartItem.cartUuid}
          className="col-span-1"
        />
        <div className="shrink-0 col-span-2">
          <Suspense fallback={<ItemThumbSkeleton size={size} />}>
            <CartThumbnail
              productUuid={cartItem && cartItem.productUuid}
              size={80}
            />
          </Suspense>
        </div>

        <div className="col-span-9 space-y-7">
          <div className="flex justify-between text-base font-semibold text-foreground ">
            <ItemName id={cartItem.productUuid} name={cartItem.productName} />
            <DeleteButton cartUuid={cartItem.cartUuid} />
          </div>

          <div className="flex items-end justify-between mt-2">
            <QuantityControl
              cartUuid={cartItem.cartUuid}
              quantity={cartItem.quantity}
            />
            <CartPrice
              price={cartItem.productPrice}
              salePrice={cartItem.productSalePrice}
              discountRate={cartItem.optionDiscount}
              quantity={cartItem.quantity}
            />
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
