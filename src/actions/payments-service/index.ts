'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';

import {
  paymentConfirmData,
  PaymentPayload,
  PaymentReturnType,
} from '@/types/PaymentDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export const PaymentData = async (PaymentData: PaymentPayload) => {
  console.log('결제 요청 payload:', PaymentData);
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
    redirect('/error');
  }
  const data = (await res.json()) as CommonResponseType<PaymentReturnType>;
  return data.result;
};

export const paymentconfirmData = async (
  PaymentconfirmData: paymentConfirmData
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/payment/confirm`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(PaymentconfirmData),
    }
  );
  if (!res.ok) {
    const errorData = await res.json();
    redirect('/error');
  }
  const data = (await res.json()) as CommonResponseType<PaymentReturnType>;
  return data.result;
};

export const getRecentOrderList = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/recent`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    redirect('/error');
  }
  const data = (await res.json()) as CommonResponseType<PaymentReturnType>;
  revalidateTag('getCartData');
  return data.result;
};
