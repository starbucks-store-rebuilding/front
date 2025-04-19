export interface PaginatedResponseType<T> {
  content: T;
  nextCursor?: number;
  hasNext: boolean;
  pageSize: number;
  page: number;
}

export interface ProductNameDataType {
  productUuid: string;
  name: string;
  best: boolean;
  new: boolean;
}

export interface ProductThumbnailDataType {
  id: number;
  productUuid: string;
  thumbnailUrl: string;
  description: string;
  defaulted: boolean;
}

export interface ProductOptionType {
  productUuid: string;
  productOptionUuid: string;
  colorOptionId: number;
  sizeOptionId: number;
  stock: number;
  price: number;
  discountRate: number;
  totalPrice: number;
}

export interface ProductDescriptionType {
  productUuid: string;
  description: string;
  detailDescription: string;
}

export interface ProductInfoDataType {
  name: string;
  price: number;
  totalPrice: number;
  discountRate: number;
  description?: string;
  best: boolean;
  new: boolean;
}

export interface SelectableOptionType {
  id: number;
  name: string;
}

// event
export interface EventDataType {
  eventUuid: string;
  name: string;
  imageUrl: string;
  description: string;
  precaution: string;
  startAt: string;
  endAt: string;
  state: boolean;
}

export interface EventProductType {
  productUuid: string;
  eventUuid: string;
}

export interface EventBannerImageType {
  mainBannerImageUuid: string;
  eventUuid: string;
  imageUrl: string;
  description: string;
}

// best
export interface BestProductType {
  id: number;
  productUuid: string;
  productSalesCount: number;
}
