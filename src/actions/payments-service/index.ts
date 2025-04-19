'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { OrderItemPaymentPayload } from '@/context/OrderItemContext';
import { PaymentDataType, PaymentReturnType } from '@/types/PaymentDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';

export const PaymentData = async (PaymentData: OrderItemPaymentPayload) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(PaymentData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '주문내역목록 조회 실패');
  }
  const data = (await res.json()) as CommonResponseType<PaymentReturnType>;
  return data.result.checkoutUrl;
};
