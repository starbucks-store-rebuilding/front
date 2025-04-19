import { ProductThumbnailDataType } from '@/types/ProductResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemThumb({
  productUuid,
  thumbnail,
  size,
}: {
  productUuid: string;
  thumbnail: ProductThumbnailDataType;
  size: number;
}) {
  const style =
    size === 140
      ? { width: size, height: size }
      : { width: '100%', aspectRatio: '1 / 1' };

  return (
    <Link
      href={`product/${productUuid}`}
      className="relative bg-lightGray-4 rounded-sm
    cursor-pointer"
      style={style}
      draggable="false"
    >
      <Image
        src={thumbnail.thumbnailUrl}
        alt={thumbnail.description}
        fill
        sizes={size === 140 ? '140px' : '100%'}
        className="rounded-sm object-cover select-none pointer-events-none"
        loading="lazy"
      />
    </Link>
  );
}
