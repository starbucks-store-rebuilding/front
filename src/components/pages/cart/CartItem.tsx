import { CartProductType } from '@/types/ResponseDataTypes';
import QuantityControl from './QuantityControl';
import DeleteButton from '@/components/ui/buttons/DeleteButton';
import Checkbox from '@/components/ui/inputs/CheckBox';
import Image from 'next/image';

interface CartItemProps {
  cartItem: CartProductType;
  onToggleCheck: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function CartItem({
  cartItem,
  onToggleCheck,
  onIncrease,
  onDecrease,
  onDelete,
}: CartItemProps) {
  const {
    id,
    productImageUrl,
    productName,
    productQuantity = 1,
    productPrice = 0,
    checked,
  } = cartItem;

  return (
    <article className="flex items-start gap-3 py-5.5 border-b border-lightGray-8 px-6">
      <Checkbox
        checked={checked}
        onChange={() => onToggleCheck(id)}
        className="mt-2"
      />

      <figure>
        <Image
          src={productImageUrl}
          alt={productName}
          width={80}
          height={80}
          className="w-20 h-20 rounded object-cover"
        />
      </figure>
      <section className="flex-1">
        <ul className="flex justify-between items-start mb-2">
          <li className="text-sm font-pretendard font-semibold text-foreground">
            {productName}
          </li>
          <li>
            <DeleteButton onDelete={() => onDelete(id)} />
          </li>
        </ul>

        <ul className="flex justify-between items-center">
          <li>
            <QuantityControl
              quantity={productQuantity}
              onIncrease={() => onIncrease(id)}
              onDecrease={() => onDecrease(id)}
            />
          </li>
          <li className="text-right font-inter">
            {cartItem.discountRate && cartItem.discountRate > 0 ? (
              <div className="flex flex-col items-end">
                <span className="text-lightGray-7 line-through text-sm">
                  {(productPrice * productQuantity).toLocaleString()}원
                </span>
                <span className="text-foreground font-semibold">
                  {Math.floor(
                    productPrice *
                      productQuantity *
                      (1 - cartItem.discountRate / 100)
                  ).toLocaleString()}
                  원
                </span>
              </div>
            ) : (
              <span className="font-semibold text-foreground">
                {(productPrice * productQuantity).toLocaleString()}원
              </span>
            )}
          </li>
        </ul>
      </section>
    </article>
  );
}
