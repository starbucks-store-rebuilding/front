import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ShareIcon from '@/components/ui/icons/ShareIcon';
import { ProductInfoDataType } from '@/types/ProductResponseDataTypes';

export default function ProductInfo({
  name,
  price,
  totalPrice,
  discountRate,
  description,
  best: isBest,
  new: isNew,
}: ProductInfoDataType) {
  return (
    <section className="pt-6 font-pretendard padded">
      <div className="grid grid-flow-col gap-4">
        <h1 className="font-semibold text-[1.375rem] pb-4">
          <span className="pr-3">{name}</span>
          <span className="inline-flex">
            <ProductLabelIcon isBest={isBest} isNew={isNew} />
          </span>
        </h1>
        <div className="justify-self-end">
          <ShareIcon />
        </div>
      </div>

      <p className="font-medium text-xs text-lightGray-10 pb-5">
        {/* {description} */}
        {name}
      </p>

      {totalPrice && discountRate != 0 ? (
        <>
          <del className="font-light text-lightGray-6">
            {price.toLocaleString()}원
          </del>
          <div className="flex flex-row font-bold text-xl gap-2">
            <p className="text-green">{discountRate}%</p>
            <p className="">{totalPrice.toLocaleString()}원</p>
          </div>
        </>
      ) : (
        <p className="font-bold text-xl">{price.toLocaleString()}원</p>
      )}
    </section>
  );
}
