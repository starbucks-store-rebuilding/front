'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  OrderItemDataType,
  OrderItemPayload,
  OrderListDataType,
  OrderListDetailDataType,
  RecentOrderItemDataType,
} from '@/types/OrderDataType';

import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const OrderListData = async (OrderItemPayload: OrderItemPayload) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  console.log('주문내역 생성 요청', OrderItemPayload);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(OrderItemPayload),
  });
  if (!res.ok) {
    const errorData = await res.json();
    redirect('/error');
  }
  const data = await res.json();
  console.log('주문내역 생성 결과', data.result.orderListUuid);
  console.log('주문성공내역', data);
  return data.result.orderListUuid as string;
};

export const getOrderItem = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/items`, {
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

  const data = (await res.json()) as CommonResponseType<OrderItemDataType[]>;
  return data.result;
};

export const getOrderList = async (): Promise<OrderListDataType[]> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/list`, {
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

  const data = (await res.json()) as CommonResponseType<OrderListDataType[]>;
  return data.result;
};

export const getOrderDetailList = async (orderListUuid: string) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/order/detail/list/${orderListUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    redirect('/error');
  }

  const data = (await res.json()) as CommonResponseType<
    OrderListDetailDataType[]
  >;
  return data.result;
};

export const getRecentOrderList = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/recent`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    redirect('/error');
  }
  const data =
    (await res.json()) as CommonResponseType<RecentOrderItemDataType>;
  return data.result;
};

export async function getOrderDetailDataBtOrderDetailUuid(
  OrderDetailUuid: string
) {
  try {
    const session = await getServerSession(options);
    if (!session)
      return {
        success: false,
        data: undefined,
      };
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/order/detail/${OrderDetailUuid}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.user.accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        data: errorData.message,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data: data.result as OrderListDetailDataType,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
}

export async function getOrderListCount() {
  try {
    const session = await getServerSession(options);
    if (!session)
      return {
        success: false,
        data: undefined,
      };
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/order/list/count`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.user.accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        data: errorData.message,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data: data.result.count as number,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
}
