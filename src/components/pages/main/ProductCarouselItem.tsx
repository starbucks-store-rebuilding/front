import CarouselThumbnail from '@/components/ui/CarouselThumbnail';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import { ProductItemType } from '@/types/ResponseDataTypes';
import Link from 'next/link';

export default function ProductCarouselItem({
  id,
  thumbnail,
  label,
  name,
  price,
  salePrice,
  discountRate,
  size = 140,
}: ProductItemType & { size?: number }) {
  return (
    <li className="flex flex-col gap-3 mb-12" style={{ width: size }}>
      <CarouselThumbnail id={id} thumbnail={thumbnail} size={size} />

      <div className="flex flex-col gap-2">
        <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} />

        <Link
          href={`product/${id}`}
          className="cursor-pointer"
          draggable="false"
        >
          <p className="font-sd-gothic font-medium">{name}</p>
        </Link>
      </div>
      {/* 가격 */}
      <div className="relative">
        {salePrice && discountRate != 0 ? (
          <>
            <p className="font-sd-gothic text-lightGray-6 line-through">
              {price.toLocaleString()}원
            </p>
            <p className="font-sd-gothic font-bold">
              {salePrice.toLocaleString()}원
            </p>
            {/* 할인률 */}
            <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
              {discountRate}%
            </p>
          </>
        ) : (
          <>
            <p className="font-sd-gothic font-bold">
              {price.toLocaleString()}원
            </p>
          </>
        )}
      </div>
    </li>
  );
}
