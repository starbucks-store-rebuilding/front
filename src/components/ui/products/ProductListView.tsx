'use client';

import { CommonLoader } from '../loaders/CommonLoader';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import { RefObject } from 'react';
import ProductItem from './ProductItem';

export default function ProductListView({
  products,
  isLoading,
  isParamsLoading,
  hasMore,
  loaderRef,
}: {
  products: ProductNameDataType[];
  isLoading: boolean;
  isParamsLoading: boolean;
  hasMore: boolean;
  loaderRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="padded py-6 flex justify-center flex-col">
      {isParamsLoading ? (
        <CommonLoader />
      ) : products.length === 0 ? (
        <div className="h-80 pt-4 w-full flex justify-center items-center">
          <p className="text-lightGray-6">상품이 없습니다.</p>
        </div>
      ) : (
        <>
          <ul className="w-full grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductItem
                key={product.productUuid}
                productData={product}
                size={800}
              />
            ))}
          </ul>
          {!isLoading && hasMore && <div ref={loaderRef} className="h-20" />}
          {isLoading && <CommonLoader className="h-10" />}
        </>
      )}
    </section>
  );
}
