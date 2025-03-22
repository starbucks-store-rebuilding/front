import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import Link from 'next/link';

export default function MenuFooter() {
  return (
    <div className="mt-[30px]  bg-lightGray-3 px-[24px]">
      <div className="h-[78px] hover:bg-gray-100 flex items-center">
        <Link
          href="/event"
          className="flex justify-between items-center w-full"
        >
          <div className="flex flex-col gap-[4px]">
            <span className="font-inter font-bold text-[14px] text-gray-900">
              기획전
            </span>
            <span className="text-[12px] text-gray-500 leading-[16px]">
              진행중인 기획전을 만나보세요.
            </span>
          </div>
          <RightArrowIcon />
        </Link>
      </div>

      <div className="w-full border-b border-gray-300" />

      <div className="h-[78px] hover:bg-gray-100 flex items-center">
        <Link href="/best" className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-[4px]">
            <span className="font-inter font-bold text-[14px] text-gray-900">
              베스트
            </span>
            <span className="text-[12px] text-gray-500 leading-[16px]">
              스타벅스 베스트 MD 상품만 모아보세요.
            </span>
          </div>
          <RightArrowIcon />
        </Link>
      </div>
    </div>
  );
}
