import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import PolicySection from './PolicySection';
import ProductDesc from './ProductDesc';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';
import {
  getDescriptionDataByProductUuid,
  getOptionDatasByProductUuid,
  getThumbnailDatasByProductUuid,
} from '@/actions/product-service';

export default async function ProductDetailSection({
  product,
}: {
  product: ProductNameDataType;
}) {
  const tumbnails = await getThumbnailDatasByProductUuid(product.productUuid);
  const options = await getOptionDatasByProductUuid(product.productUuid);
  const option = options[0];
  const description = await getDescriptionDataByProductUuid(
    product.productUuid
  );

  return (
    <>
      <ProductImg {...tumbnails[0]} />
      <div className="flex flex-col gap-10 padded">
        <ProductInfo
          name={product.name}
          price={option.price}
          totalPrice={option.totalPrice}
          discountRate={option.discountRate}
        />
        <ProductDesc {...description} />
        <PolicySection />
      </div>
    </>
  );
}
