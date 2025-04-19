'use server';

import {
  CategoryMenuType,
  CommonResponseType,
  SeasonType,
  SubCategoryType,
} from '@/types/ResponseDataTypes';

interface CategoryListResponse {
  isSuccess: boolean;
  message: string;
  code: number;
  result: CategoryMenuType[];
}

export async function getAllCategories(): Promise<CategoryMenuType[]> {
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/category/list`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    const error = await res.json();
    console.log('에러', error);
    throw new Error('카테고리 불러오기에 실패했습니다.: ', error.message);
  }

  const data: CategoryListResponse = await res.json();
  return data.result;
}

export async function getCategoryByCategoryid(categoryId: number) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/category/${categoryId}`,
    {
      method: 'GET',
      cache: 'force-cache',
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Category Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  const data = (await res.json()) as CommonResponseType<CategoryMenuType>;

  return data.result;
}

export async function getSubCategoriesByCategoryid(categoryId: number) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/sub-category/list/category/${categoryId}`,
    {
      method: 'GET',
      cache: 'force-cache',
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Sub-Category Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  const data = (await res.json()) as CommonResponseType<SubCategoryType[]>;

  return data.result;
}

export async function getSeasonDatas() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/season/list`, {
    method: 'GET',
    cache: 'force-cache',
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Season Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  const data = (await res.json()) as CommonResponseType<SeasonType[]>;

  return data.result;
}
