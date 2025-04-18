'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';
import PurchaseBottomSheet from './PurchaseBottomSheet';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import PurchaseBarBottomContent from './PurchaseBarBottomContent';
import {
  ProductNameDataType,
  ProductOptionType,
  SelectableOptionType,
} from '@/types/ProductResponseDataTypes';
import { getSelectableOptionListData } from '@/actions/product-service';

const side = 'bottom';

export default function PurchaseBar({
  options,
  productNameData,
}: {
  options: ProductOptionType[];
  productNameData: ProductNameDataType;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeData, setSizeData] = useState<SelectableOptionType[]>();
  const [colorData, setColorData] = useState<SelectableOptionType[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sizeList, colorList] = await Promise.all([
          getSelectableOptionListData('size'),
          getSelectableOptionListData('color'),
        ]);
        setSizeData(sizeList);
        setColorData(colorList);
      } catch (e) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <Sheet key={side} open={isOpen} onOpenChange={setIsOpen}>
        <CommonLayout.FixedButtonBgLayout
          className={`z-[1000] transition-all duration-300
          ${
            isOpen
              ? `rounded-none shadow-none 
            pointer-events-none`
              : ``
          }`}
        >
          {!isOpen ? (
            <>
              <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              >
                <CartIcon />
              </button>
              <SheetTrigger asChild>
                <CommonButton className="font-semibold" isEnabled={true}>
                  구매하기
                </CommonButton>
              </SheetTrigger>
            </>
          ) : (
            <PurchaseBarBottomContent className="hidden" />
          )}
        </CommonLayout.FixedButtonBgLayout>

        <PurchaseBottomSheet
          isOpen={isOpen}
          options={options}
          sizeData={sizeData}
          colorData={colorData}
          productNameData={productNameData}
        />
      </Sheet>
    </>
  );
}
