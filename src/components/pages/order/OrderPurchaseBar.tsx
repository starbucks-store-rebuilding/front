'use client';

import { PaymentData } from '@/actions/payments-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { useOrderItemContext } from '@/context/OrderItemContext';

// import { useRouter } from 'next/navigation';

export default function OrderPurchaseBar() {
  // const router = useRouter();
  const { paymentData } = useOrderItemContext();
  console.log('paymentData', paymentData);
  const handleClick = async () => {
    try {
      const checkoutUrl = await PaymentData(paymentData);
      window.location.href = checkoutUrl;
      console.log('checkouturl', checkoutUrl);
    } catch (err) {
      console.error('결제 요청 에러:', err);
      alert(
        err instanceof Error ? err.message : '결제 중 문제가 발생했습니다.'
      );
    }
  };

  return (
    <CommonLayout.FixedButtonBgLayout className="flex flex-col w-full py-4 gap-3">
      <CommonButton
        className="font-semibold"
        onClick={handleClick}
        isEnabled={true}
      >
        결제하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
