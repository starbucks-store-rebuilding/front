'use server';

import { PAGE_SIZE } from '@/constants/constants';
import {
  EventBannerImageType,
  EventProductType,
} from '@/types/ProductResponseDataTypes';
import { EventDataType } from '@/types/ProductResponseDataTypes';
import { PaginatedResponseType } from '@/types/ProductResponseDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { redirect } from 'next/navigation';

export async function getEventDatas() {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/api/v1/event/list`, {
      method: 'GET',
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);

      redirect('/error');
    }
    const data = (await res.json()) as CommonResponseType<EventDataType[]>;

    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    console.log(error);
    redirect('/error');
  }
}

export async function getEventProductDatasByEventUuid({
  eventUuid,
  page,
  pageSize = PAGE_SIZE,
}: {
  eventUuid: string;
  page: number;
  pageSize?: number;
}) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/event-product/list/${eventUuid}?pageSize=${pageSize}&page=${page}`,
      {
        method: 'GET',

        cache: 'no-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);

      redirect('/error');
    }
    const data = (await res.json()) as CommonResponseType<
      PaginatedResponseType<EventProductType[]>
    >;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    redirect('/error');
  }
}

export async function getEventDataByEventUuid(eventUuid: string) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/event/${eventUuid}`,
      {
        method: 'GET',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);

      redirect('/error');
    }
    const data = (await res.json()) as CommonResponseType<EventDataType>;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    redirect('/error');
  }
}

export async function getEventBannerImageDatas() {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/api/v1/banner/list`, {
      method: 'GET',
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error('getEventBannerImageDatas Fetching failed:', errorData);
      redirect('/error');
    }
    const data = (await res.json()) as CommonResponseType<
      EventBannerImageType[]
    >;

    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    console.log(error);
    redirect('/error');
  }
}
