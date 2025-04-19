import BannerSlide from '@/components/ui/carousels/BannerSlide';
import { ProductThumbnailDataType } from '@/types/ProductResponseDataTypes';
import { BannerSlideImageType } from '@/types/ResponseDataTypes';
import { useMemo } from 'react';

export default function ProductImg({
  thumbnails,
}: {
  thumbnails: ProductThumbnailDataType[];
}) {
  const slides: BannerSlideImageType[] = useMemo(
    () =>
      thumbnails.map((thumb) => ({
        id: thumb.id,
        imageUrl: thumb.thumbnailUrl,
        description: thumb.description,
        defaulted: thumb.defaulted,
      })),
    [thumbnails]
  );

  return (
    <figure>
      {slides.length > 0 && <BannerSlide slides={slides} autoSlide={false} />}
    </figure>
  );
}
