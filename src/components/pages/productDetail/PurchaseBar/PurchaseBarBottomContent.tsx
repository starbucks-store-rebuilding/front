import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';
import { cn } from '@/lib/utils';

export default function PurchaseBarBottomContent({
  onClickPurchase,
  totalAmount,
  className,
  handleAddUserCart,
}: {
  onClickPurchase?: () => void;
  totalAmount?: number;
  className?: string;
  handleAddUserCart?: () => Promise<void>;
}) {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className={cn(`flex flex-row justify-between`, className)}>
        <p className="text-lightGray-1 text-sm">총 금액</p>
        <p className="font-bold font-sd-gothic text-xl">
          {totalAmount?.toLocaleString()} 원
        </p>
      </div>

      <div className="flex flex-row gap-2 items-center w-full">
        <button onClick={handleAddUserCart} className="cursor-pointer">
          <CartIcon />
        </button>

        <CommonButton
          className="font-semibold"
          isEnabled={true}
          onClick={onClickPurchase}
        >
          구매하기
        </CommonButton>
      </div>
    </div>
  );
}
