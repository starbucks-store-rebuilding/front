import React from 'react';
import { EventDataType } from '@/types/ProductResponseDataTypes';
import { getEventProductDatasByEventUuid } from '@/actions/event-service';
import ProductCarousel from './ProductCarousel';
import { EventWithProductsType } from '@/types/storeDataTypes';
import { getProductNameDataByProductUuid } from '@/actions/product-service';

export default async function MainEventCarouselSection({
  eventsData,
}: {
  eventsData: EventDataType[];
}) {
  const eventWithProductDatas: EventWithProductsType[] = await Promise.all(
    eventsData.map(async (event) => {
      const { data } = await getEventProductDatasByEventUuid({
        eventUuid: event.eventUuid,
        page: 1,
        pageSize: 6,
      });

      const productDatas = data.content;
      const productNameDatas = await Promise.all(
        productDatas.map(async (product) => {
          const productNameData = await getProductNameDataByProductUuid(
            product.productUuid
          );
          return productNameData;
        })
      );
      return {
        event,
        products: productNameDatas,
      };
    })
  );

  return (
    <section className="flex flex-col pl-6 pt-12 gap-3">
      {eventWithProductDatas &&
        eventWithProductDatas.map((eventProductData) => (
          <ProductCarousel
            key={eventProductData.event.eventUuid}
            {...eventProductData}
          />
        ))}
    </section>
  );
}
