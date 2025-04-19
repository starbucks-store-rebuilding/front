'use client';

import ProductItem from '@/components/ui/products/ProductItem';
import useCategoryCarousel from '@/hooks/useCarousel';
import { EventWithProductsType } from '@/types/storeDataTypes';

export default function ProductCarousel({
  event,
  products,
}: EventWithProductsType) {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useCategoryCarousel();

  return (
    <>
      {products.length > 0 && (
        <section className="flex flex-col container gap-8">
          <h2 className="font-body font-semibold text-[1.375rem]">
            {event.name}
          </h2>
          <ul
            ref={containerRef}
            className="flex flex-row gap-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
          >
            {products.map((product) => (
              <ProductItem
                key={product.productUuid}
                productData={product}
                size={140}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
